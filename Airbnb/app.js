const express = require('express')
const app = express()
const port = 8080
const mongoose = require('mongoose');
const path = require('path');
const Listing = require("./models/listing.js");
const methodOverride=require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}))
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}
app.listen(port, () => console.log(` app listening on port ${port}!`))
app.get("/listings",async(req,res)=>{
  const allListings= await Listing.find({});
  res.render("./listings/index.ejs",{allListings})
})
app.get("/listings/:id",async(req,res)=>{
  let id=req.params.id;
 const listing= await Listing.find({_id:id})
res.render("./listings/show.ejs",{listing:listing[0]})
})

app.get("/listings/new",(req,res)=>{
res.send("working").then()
.catch((err)=>{
  console.log(err.errors.category.properties.message)
})
})