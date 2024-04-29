const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}
const initdata=require('./data.js');
const Listing=require("../models/listing.js")
Listing.deleteMany({}).then(()=>{
    console.log("data deleted")
})
Listing.insertMany(initdata.data).then(()=>{
    console.log("data added")
})