if(process.env.NODE_ENV!="production")
require('dotenv').config()

const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session"); 
const MongoStore = require('connect-mongo');
const methodOverride = require("method-override");
const ejsmate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const listingrouter = require("./routes/listing.js");
const reviewrouter = require("./routes/review.js");
const userrouter = require("./routes/user.js");
const flash = require("connect-flash");
const passport = require("passport");
const localStrategy = require("passport-local");
const user = require("./models/user.js");
const dburl=process.env.ATLASDB_URL;

app.use(express.static(path.join(__dirname, "/public")));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("ejs", ejsmate);


const store=MongoStore.create({
  mongoUrl:dburl,
  crypto:{
    secret:process.env.SECRET,
  },
  touchAfter:24*60*60,
})

store.on("error",()=>{
  console.log("error in mogo session store",err)
})

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};



app.use(session(sessionOptions));
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dburl);
}

app.listen(port, () => console.log(` app listening on port ${port}!`));
//flash
app.use(flash());
//using session
app.use(session(sessionOptions));
//password
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser())
passport.deserializeUser(user.deserializeUser())
//using flash
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser=req.user;
  next();
});




app.use("/listings", listingrouter);
app.use("/listings/:id/reviews", reviewrouter);
app.use("/", userrouter);

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});
app.use((err, req, res, next) => {
  let { statusCode, message } = err;
  if(req.originalUrl!=="/favicon.ico"){
  console.log(err);
  console.log(req.originalUrl);
  }
  res.render("./listings/error.ejs");
});
