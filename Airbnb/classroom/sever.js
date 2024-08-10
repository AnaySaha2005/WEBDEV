const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const flash = require('connect-flash');
const session = require("express-session");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
const sessionOption = {
  secret: "mysecretstring",
  resave: false,
  saveUninitialized: true,
};
app.use(session(sessionOption)); //provides sessionid
app.use(flash())

app.get("/test", (req, res) => {
  res.send("success");
});
app.use((req,res,next)=>{
  res.locals.smsg=req.flash("success")
  res.locals.emsg=req.flash("error")
  next();
})
app.get("/register",(req,res)=>{
  let{name="anonymous"}=req.query;
  req.session.name=name;
  if(name==="anonymous")req.flash("error","user not register !")
  else req.flash("success","user register successful !")
  res.redirect("/hello")
})
app.get("/hello",(req,res)=>{
  
  res.render("page.ejs",{name:req.session.name})
})
app.use(flash())
// app.get("/reqcount", (req, res) => {
//   if (req.session.count) req.session.count++;
//   else req.session.count = 1;
//   res.send("you have send a request " + req.session.count + " times");
// });
