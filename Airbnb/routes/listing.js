const express = require("express");
const router = express.Router();
const { isLoggedIn, isOwner } = require("../middleware.js");
const passport = require("passport");
const user = require("../models/user");
const listingController=require("../controller/listing.js")

const multer = require('multer');
const storage=require("../cloudConfig.js")
const upload=multer({storage})

passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());
//using router.route
router.route("/")
.get(listingController.index)
// .post(isLoggedIn,listingController.createListing );
.post(upload.single('listing[image]'),(req,res)=>{
    res.send(req.file)//stores file related data
})

router.get("/new", isLoggedIn,listingController.renderNewForm);

//using router.route
router.route("/:id")
.get(listingController.showListing)
.put( isOwner, listingController.updateList)
.delete(isOwner,listingController.destroy);

router.get("/:id/edit", isLoggedIn,listingController.editListing );

module.exports = router;
