const express = require("express");
const router = express.Router({ mergeParams: true });
const { listingSchema, reviewSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const review = require("../models/review.js");
router.post("/", async (req, res) => {
  console.log("hii");
  let result = reviewSchema.validate(req.body);
  if (!result.error) {
    let listing = await Listing.findById(req.params.id);

    let newreview = new review(req.body.review);
    listing.reviews.push(newreview);
    await newreview.save();
    await listing.save();
  } else {
    res.status(400);
  }
  console.log(result);
  res.redirect("/listings/" + req.params.id);
});

router.post("/:rid", async (req, res) => {
  let { id, rid } = req.params;
  await review.findById(rid).then(async (res) => {
    console.log(res);
    await Listing.findByIdAndUpdate(id, { $pull: { review, rid } });
    await review.findByIdAndDelete(rid);
  });
  res.redirect("/listings/" + id);
});
module.exports = router;
