h1=document.querySelector("h1");
//  function colour(color,delay){
//   return  new Promise((resolved,rejected)=>{
//         setTimeout(()=>{
//             h1.style.color=color;
//             resolved("color changed");
//             },delay*1000)
//     })
 
//  }
//  colour("red",2)
//  .then(()=>{
//     return colour("orange",2)
// })
// .then(()=>{
//     return colour("yellow",2)
// })
// .then(()=>{
//     return colour("green",2)
// })
// .then(()=>{
//     return colour("blue",2)
// })
 
//await
// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//            console.log(num)
//            resolve()
//         },1000)
//     })
// }


// async function demo (){
//    await getNum()// without any await everting will be executed at once
//   await getNum()
//     await getNum()
// }
// demo()
//async+await color
 function color(colour){
    return new Promise((resolved,reject)=>{
        let num=Math.floor(Math.random()*5)+1;
        if(num<3)reject("reject")
        setTimeout(()=>{
            h1.style.color=colour;
            resolved("color changed")
        },2000)
    })
    

}
async function demo(){
    try{
    await color("red")
    await color("orange")
    await color("green")
    await color("blue")
}
   catch(er){
 console.log(er)
   }
}

console.log(demo());