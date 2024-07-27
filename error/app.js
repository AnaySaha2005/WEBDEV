const express = require('express')
const app = express();
const port = 8080;
const ExpressError=require('./ExpressError')
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`App listening on port ${port}!`))
app.use("/access",(req,res)=>{
let token= req.query.query;
console.log(token)
if(token==="true")res.send("Hello")
else throw new ExpressError(401,"ACCESS DENIED!")
})
app.use((err,req,res,next)=>{
    res.send(err.message)
})
app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access Forbidden")
})
