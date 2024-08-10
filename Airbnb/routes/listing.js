const express = require("express");
const router = express.Router();
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const { listingSchema } = require("../schema.js");
const review = require("../models/review.js");

router.get("/", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("./listings/index.ejs", { allListings });
});

router.get("/new", (req, res) => {
  res.render("./listings/new.ejs");
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  await Listing.find({ _id: id })
    .populate("reviews")
    .then((listing) => {
      res.render("./listings/show.ejs", { listing: listing[0] });
    })
    .catch((err) => {
      console.log(err);
    });
});
//create
router.post("/", async function (req, res) {
  let listing = new Listing(req.body.listing);
  let result = listingSchema.validate(req.body);
  //to print error
  if (result.error) {
    console.log("Error:" + result.error);
    req.flash("error", " Error occured in creaing listing");
  } else {
    await listing.save();
    req.flash("success", "New listing created");
  }
  res.redirect("/listings");
});

router.get("/:id/edit", async (req, res) => {
  let id = req.params.id;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`);
});

router.delete("/:id", async (req, res) => {
  list = await Listing.findById(req.params.id);
  for (let rev of list.reviews) {
    console.log(rev);
    await review.findByIdAndDelete(rev._id);
  }
  await Listing.deleteOne({ _id: req.params.id });
  res.redirect("/listings/");
});

module.exports = router;
