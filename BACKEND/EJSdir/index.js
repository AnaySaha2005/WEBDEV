const express=require('express');
const app=express();
const path=require("path");
app.set("views",path.join(__dirname,"views"))
const port=8080;
app.listen(port,()=>{
    console.log("app is listening")
})
// app.use((req,res)=>{
//     let diceval= Math.floor(Math.random()*6)+1 ;
//     res.render("rolldice.ejs",{num:diceval})
// })
app.get("/ig/:username",(req,res)=>{
let {username}=req.params;
res.render("ig.ejs",{username})
})