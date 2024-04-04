const express = require('express')
const app = express()
const port = 8080
const path=require("path")
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"./views"))
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.listen(port, () => console.log(`app listening on port ${port}!`))
let posts=[
    {
        username:"anay saha",
        content:"i love coding!"
    },
    {
        username:"Ruma saha",
        content:"i love Beating!"
    },
    {
        username:"Shrija saha",
        content:"i love Sleeping!"
    }
]
app.get('/posts', (req, res) => {
    res.render("index.ejs",{posts})
})
app.get('/posts/new',(req,res)=>{
    res.render("post.ejs")

})
app.post('/posts',(req,res)=>{
   let {username,content}=req.body
   posts.push({username,content})
    res.redirect("http://localhost:8080/posts")
})
