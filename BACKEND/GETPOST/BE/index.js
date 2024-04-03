express=require("express")
app=express()
port=8080
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.listen(port,()=>{
    console.log("app is listening")
})
app.get('/register', (req, res) => {
    let {user,password}=req.query;
  res.send('Welcome '+user)
})
app.post('/register',(req, res) =>{
  res.send('Welcome '+req.body.user)
  console.log(req.body)
})
