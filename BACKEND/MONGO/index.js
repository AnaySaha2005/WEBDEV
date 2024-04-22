const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const path = require('path');
const chat=require("./models/chat.js");
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

let chat1=new chat({
  from:"shrija",
  to:"anay",
  msg:"send photos",
  created_at:new Date(),
})
chat1.save().then((res)=>{
  console.log(res)
})