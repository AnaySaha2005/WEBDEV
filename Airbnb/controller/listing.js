
const review = require("../models/review.js");
const { listingSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
module.exports.index=async (req, res) => {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", { allListings });
  }
  module.exports.renderNewForm= (req, res) => {
    res.render("./listings/new.ejs");
  }
  module.exports.showListing=async (req, res) => {
    let id = req.params.id;
    await Listing.find({ _id: id })
      .populate({
        path: "reviews",
        populate: {
          path: "author",
        },
      })
      .populate("owner")
      .then((listing) => {
        res.render("./listings/show.ejs", { listing: listing[0] });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  module.exports.createListing=async function (req, res) {
    let listing = new Listing(req.body.listing);
    listing.owner = req.user._id;
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
  }
  module.exports.editListing=async (req, res) => {
    let id = req.params.id;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
  }
  module.exports.updateList=async (req, res) => {
    const id = req.params.id;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
  }
  module.exports.destroy= async (req, res) => {
    list = await Listing.findById(req.params.id);
    for (let rev of list.reviews) {
      console.log(rev);
      await review.findByIdAndDelete(rev._id);
    }
    await Listing.deleteOne({ _id: req.params.id });
    res.redirect("/listings/");
  }