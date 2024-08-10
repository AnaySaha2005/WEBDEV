
const mongoose = require('mongoose');

const ListingSchema=mongoose.Schema({
    title:{
       type: String,
       required:true,
    },
    description:String,
    image:{
        type: String,
        default:"https://plus.unsplash.com/premium_photo-1683917068755-c2890e4824e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set:(v)=>v===""?"https://plus.unsplash.com/premium_photo-1683917068755-c2890e4824e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D":v
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
