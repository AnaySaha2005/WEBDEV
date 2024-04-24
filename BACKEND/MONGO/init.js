const mongoose = require('mongoose');
const chat=require("./models/chat.js");
main()
.then(()=>{
    console.log("mongoose connection successful");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let chats=[
    new chat({
    from:"shrija",
    to:"anay",
    msg:"send photos",
    created_at:new Date(),
  }),
  new chat({
    from:"Ruma",
    to:"anay",
    msg:"send photos",
    created_at:new Date(),
  }),
  new chat({
    from:"alu",
    to:"anay",
    msg:"send photos",
    created_at:new Date(),
  }),
  new chat({
    from:"puri",
    to:"anay",
    msg:"send photos",
    created_at:new Date(),
  })]
  chat.insertMany(chats)
