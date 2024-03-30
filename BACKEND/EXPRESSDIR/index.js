const express=require("express");
const app=express()
const port=8080;
app.listen(port,()=>{
})
// app.use((req,res)=>{
//     console.log("new incoming request")
//     // res.send("This is initial response")
//     // res.send({color:'red', fruit:'apple'})
//     res.send('<h1>Apple & Orange </h1>')
// })

//using app.get
// app.get("/",(req,res)=>{
//     res.send("you contacted root path")
// })
// app.get("/apple",(req,res)=>{
//     res.send("you contacked apple path")
// })
// app.get("/orange",(req,res)=>{
//     res.send("you contacked orange path")
// })
// app.post('/',(req,res)=>{
//     res.send("you sent a post")
// })

app.get("/search",(req,res)=>{


res.send("Welcome "+req.query.q)
})