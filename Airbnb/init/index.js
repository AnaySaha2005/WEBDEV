const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}
const initdata=require('./data.js');
const Listing=require("../models/listing.js")
const review=require("../models/review.js")
const user = require('../models/user.js');
Listing.deleteMany({}).then(()=>{
    console.log("data deleted")
})
initdata.data=initdata.data.map((obj)=>({...obj,owner:'66b6183211b63ee42449934f'}))
Listing.insertMany(initdata.data).then(()=>{

    console.log("data added")
})
review.deleteMany({}).then(()=>{
  console.log("reviews deleted")
})
