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


// app.get("/ig/:username",(req,res)=>{
// let {username}=req.params;
// res.render("ig.ejs",{username})
// })


// app.use((req,res)=>{
//     let diceval= Math.floor(Math.random()*6)+1 ;
//     res.render("rolldice.ejs",{num:diceval})
// })

// app.get("/ig/:username",(req,res)=>{
// let {username}=req.params;
// let followers=['anay','ruma','shrija']
// res.render("ig.ejs",{username,followers})
// })
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));

app.get("/ig/:username",(req,res)=>{
    const igdata=require("./data.json");
    let {username}=req.params;
    if(igdata[username]!=undefined)
    res.render("ig.ejs",{data:igdata[username]})
else{
    res.send("DATA  DOESN'T  EXIST")
}
})
