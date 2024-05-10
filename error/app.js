const express = require('express')
const app = express();
const port = 8080;
const ExpressError=require('./ExpressError')
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`App listening on port ${port}!`))
app.get("/access",(req,res)=>{
let token= req.query.query;
console.log(token)
if(token==="true")res.send("Hello")
else throw new ExpressError(401,"ACCESS DENIED!")
})
