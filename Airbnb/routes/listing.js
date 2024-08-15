const express = require("express");
const router = express.Router();
const { isLoggedIn, isOwner } = require("../middleware.js");
const passport = require("passport");
const user = require("../models/user");
const listingController=require("../controller/listing.js")
const Listing=require("../models/listing.js")
const multer = require('multer');
const {storage}=require("../cloudConfig.js")
const upload=multer({storage})

passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());
//using router.route
router.route("/")
.get(listingController.index)
// .post(isLoggedIn,listingController.createListing );
.post(
    isLoggedIn,
    upload.single('listing[image]'),
    listingController.createListing
)


router.get("/new", isLoggedIn,listingController.renderNewForm);
router.get("/search",async(req,res)=>{
   const search=req.query.listing;
   const byname=await Listing.findOne({title:search})
   const byloc=await Listing.findOne({location:search})
   const bycountry=await Listing.findOne({country:search})
   if(byname)res.redirect("/listings/"+byname._id)
   else if(byloc)res.redirect("/listings/"+byloc._id)
   else if(bycountry)res.redirect("/listings/"+bycountry._id)
   else
   res.redirect("/listings")
})
//using router.route
router.route("/:id")
.get(listingController.showListing)
.put( isOwner,
     upload.single('listing[image]'),
     listingController.updateList)
.delete(isOwner,listingController.destroy);

router.get("/:id/edit", isLoggedIn,listingController.editListing );

module.exports = router;
