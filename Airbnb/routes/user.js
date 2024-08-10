const express = require("express");
const router = express.Router();
const user = require("../models/user");
const passport = require("passport");
const { isLoggedIn, saveRedirectUrl } = require("../middleware.js");

passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());
router.get("/signup", (req, res) => {
  res.render("./users/signup.ejs");
});

router.post("/signup", async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new user({ email, username });
    const reguser = await user.register(newUser, password);
    console.log(reguser);
    // login function already in req for auto login after sign up
    req.login(reguser, (err) => {
      if (err) next(err);
      req.flash("success", "Welcome to wonderlust!");
      if(res.locals.redirectUrl!==undefined)
      res.redirect(res.locals.redirectUrl);
    else
      res.redirect("/listings");
    });
  } catch (e) {
    req.flash("error", "A user with the same username is already registered");
    res.redirect("/signup");
    console.log(e);
  }
});
router.get("/login", (req, res) => {
  res.render("./users/login.ejs");
});
router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  async (req, res) => {
    req.flash("success", "Welcome back!");
  //   if(res.locals.redirectUrl!==undefined)
  //   res.redirect(res.locals.redirectUrl);
  // else
    res.redirect("/listings");
  }
);
router.get("/logout", isLoggedIn, (req, res) => {
  req.logout((err) => {
    if (err) next(err);
    req.flash("success", "You are logged out now!");
    res.redirect("/listings");
  });
});
module.exports = router;
