const { faker } = require('@faker-js/faker');
const mysql=require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'data',
    password: 'anaysaha414'
});
let getUser=()=>{
    return [
       faker.string.uuid(),
      faker.internet.userName(),
       faker.internet.email(),
       faker.internet.password()
    ]
  }
//   let query="SHOW TABLES"
//   //multiple user addition
//   let q="INSERT INTO user(id,username,email,password) VALUES ?"
//   let user1 =["123b","123_newuserb","123@gmail.comb","abcb"]
//   let user2 =["123c","123_newuserc","123@gmail.comc","abcc"]
//   let users=[user1,user2]
//   // try{
   
  //   connection.query(query,(err,res)=>{
  //     if(err) throw err;
  //     console.log(res[0]);
  //   });
  // }
  // catch(err){
  //   console.log(err);
  // }

//    try{
//     connection.query(q,[users],(err,res)=>{
//       if(err) throw err;
//       console.log(res);
//     });
//   }
//   catch(err){
//     console.log(err);
//   }

//using fakers
let data=[];
let q="INSERT INTO user(id,username,email,password) VALUES ?"
for(let i=0;i<100;i++)
data.push(getUser());
console.log(data)
try{
      connection.query(q,[data],(err,res)=>{
        if(err) throw err;
      });
    }
    catch(err){
      console.log(err);
    }
connection.end();