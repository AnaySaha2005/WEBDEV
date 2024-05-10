const express = require('express')
const app = express()
const port = 8080
const mongoose = require('mongoose');
const path = require('path');
const Listing = require("./models/listing.js");
const methodOverride=require("method-override");
const ejsmate = require('ejs-mate');

app.use(express.static(path.join(__dirname,"/public")))
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}))
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.engine("ejs",ejsmate)

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

app.listen(port, () => console.log(` app listening on port ${port}!`))
app.get("/listings",async(req,res)=>{
  const allListings= await Listing.find({});
  res.render("./listings/index.ejs",{allListings})
})

app.get("/listings/new",(req,res)=>{
 res.render("./listings/new.ejs")
  })

app.get("/listings/:id",async(req,res)=>{
  let id=req.params.id;
  await Listing.find({_id:id}).then((listing)=>{
  res.render("./listings/show.ejs",{listing:listing[0]})
 }).catch((err)=>{
  console.log(err)
 })
})

app.post('/listings', async function (req, res) {
 let listing= new Listing(req.body.listing)
 console.log(listing)
await listing.save();
res.redirect("/listings")
})

app.get("/listings/:id/edit",async(req,res)=>{
  let id=req.params.id
  const listing=await Listing.findById(id)
  res.render("listings/edit.ejs",{listing})
})

app.put("/listings/:id",async(req,res)=>{
  const id=req.params.id
  await Listing.findByIdAndUpdate(id,{...req.body.listing})
  res.redirect(`/listings/${id}`)
})

app.delete("/listings/:id",async(req,res)=>{
  await Listing.deleteOne({_id:req.params.id})
  res.redirect("/listings")
})
app.get('/', (req, res) => {
  res.send('I am root')
})