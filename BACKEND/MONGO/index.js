const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const path = require('path');
const chat=require("./models/chat.js");
const methodOverride=require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}))
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`app listening on port ${port}!`));
main()
.then(()=>{
    console.log("mongoose connection successful");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.get('/chats', async(req, res) => {
let chats=  await chat.find()
res.render("index.ejs",{chats})
})
app.get("/chats/new",(req,res)=>{
  res.render("new.ejs")
})
app.post("/chats",async(req,res)=>{
let {from,to,msg}=req.body;
const c1=new chat({from:from,to:to,msg:msg,created_at:new Date()})
await c1.save();
res.redirect("/chats")
})
app.get("/chats/:id/edit",async(req,res)=>{
  chatdata= await chat.findById(`${req.params.id}`)
  res.render("edit.ejs",{chatdata})
})
app.put("/chat/:id",async(req,res)=>{
  let id=req.params.id;
  let{msg}=req.body;
  await chat.findByIdAndUpdate(id,{msg:msg},{runValidators:true,new:true})
  res.redirect("/chats")
})
app.delete("/chats/:id",(req,res)=>{
  let id=req.params.id;
  chat.deleteOne({_id:id}).then((res)=>{
    console.log(res)
    res.redirect("/chats")
  });
})
