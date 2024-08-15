
const Listing = require("./models/listing.js");
module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
         req.session.redirectUrl=req.originalUrl;
        req.flash("error","You must be logged in for this")
     return  res.redirect("/login")
      }
      next();
}
module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}
module.exports.isOwner=async(req,res,next)=>{
    const id = req.params.id;
    let listing=await Listing.findById(id)
    if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error","You dont have permission to edit")
    }
    next();
}