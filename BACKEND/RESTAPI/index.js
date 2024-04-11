const express = require('express')
const app = express()
const port = 8080
const path=require("path")
const { v4: uuidv4 } = require('uuid');
const methodOverride=require("method-override")
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"./views"))
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.listen(port, () => console.log(`app listening on port ${port}!`))
uuidv4();// auto id generated
app.use(methodOverride('_method'))
let posts=[
    {
        username:"anay saha",
        content:"i love coding!",
        id:uuidv4()
    },
    {
        username:"Ruma saha",
        content:"i love Beating!",
       id:uuidv4()
    },
    {
        username:"Shrija saha",
        content:"i love Sleeping!",
        id:uuidv4()
    }
]
app.get('/posts', (req, res) => {
    res.render("index.ejs",{posts})
})
app.get('/posts/new',(req,res)=>{
    res.render("post.ejs")

})
app.post('/posts',(req,res)=>{
   let {username,content,id}=req.body
   posts.push({username,content,id:uuidv4()})
    res.redirect("http://localhost:8080/posts")
})
app.get('/posts/:id',(req,res)=>{
    let {id}=req.params
    let post=posts.find((p)=>id===p.id)
    if(post)
    res.render("show.ejs",{post})
else res.send("invalid")
})
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id)
    res.render("edit.ejs",{post})
})
app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let content=req.body.content;
    let post=posts.find((p)=>id===p.id)
    post.content=content;
    console.log(content)
    res.redirect("http://localhost:8080/posts")
})
app.delete("/posts/:id",(req,res)=>{
  let{id}=req.params;
   posts=posts.filter((p)=>p.id!==id)
   res.redirect("/posts")
})