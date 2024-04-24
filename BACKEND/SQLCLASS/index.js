const express=require("express");
const app=express();
const { faker } = require('@faker-js/faker');
const mysql=require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'data',
    password: 'anaysaha414'
});
const path=require("path");
const methodOverride=require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

let getUser=()=>{
    return [
       faker.string.uuid(),
      faker.internet.userName(),
       faker.internet.email(),
       faker.internet.password()
    ]
  }

app.listen("8080",()=>{
    console.log('app is listening on 8080');
})
app.get("/",(req,res)=>{
    let q="SELECT count(*) FROM user";
    try{
        connection.query(q,(err,result)=>{
            if(err)throw err;
            console.log(result[0]["count(*)"]);
            res.render("home.ejs",{x:result[0]["count(*)"]});
        })
    }
    catch(e){
        console.log(e);
    }
})
app.get("/users",(req,res)=>{
    let q="SELECT * FROM user";
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let data=result;
            console.log(data);
            res.render("users.ejs",{users :data});
        });
    }
    catch(err){
        console.log(err);
    }
})
//EDIT ROUTE
app.get("/user/:id/edit",(req,res)=>{
    let{id}=req.params
    let q="SELECT * FROM user WHERE id='"+id+"';";
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let data=result[0];
            res.render("edit.ejs",{data})
        });
    }
    catch(err){
        console.log(err);
    }
})
//UPDATE
app.patch("/user/:id",(req,res)=>{
    let{id}=req.params;
    let q="SELECT * FROM user WHERE id='"+id+"';";
   let {password:formpass,username:newusername}=req.body;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let data=result[0];
            console.log(data.password)
            if(data.password!=formpass)res.send("Invalid Password")
            else{
                q=`UPDATE user SET username = "${newusername}" WHERE id = "${ id}";`
                try{
                    connection.query(q,(err,result)=>{
                        if(err) throw err;
                    });
                }
                catch(err){
                    console.log(err);
                }
                res.redirect("/users")}
        });
    }
    catch(err){
        console.log(err);
    }
})
app.get("/user/new",(req,res)=>{
    res.render("newuser.ejs")
})
app.post("/users",(req,res)=>{
    let{ id,username,email,password}=req.body
    console.log()
    let q=`Insert INTO user (id,username,email,password) VALUES ('${id}','${username}','${email}','${password}')`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            res.redirect("/users")
        });
    }
    catch(err){
        console.log(err);
    }
})
app.delete('/user/:id', function(req, res) {
      let{id}=req.params;
     let q="SELECT * FROM user WHERE id='"+id+"';";
     let formpass=req.body.password;
     console.log(req.body)
     try{
        connection.query(q,(err,result)=>{
              if(err) throw err;
               let data=result[0];
             console.log(data.password)
             if(data.password!=formpass)res.send("Invalid Password")
             else{
                q=`DELETE FROM user WHERE id='${id}';`
                try{
                    connection.query(q,(err,result)=>{
                        if(err) throw err;
                    });
                }
                catch(err){
                    console.log(err);
                }
                res.redirect("/users")}
        });
    }
    catch(err){
        console.log(err);
    }
});
