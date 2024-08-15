
const { string } = require('joi');
const mongoose = require('mongoose');

const ListingSchema=mongoose.Schema({
    title:{
       type: String,
       required:true,
    },
    description:String,
    image:{
        url:String,
        filename:String
    },
    price:String,
    location:String,
    country:String,
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Review",
        }
    ],
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
})
const Listing=mongoose.model("Listing",ListingSchema)
module.exports=Listing;
