function save(data){
    return new Promise((success,failure)=>{
     let is=Math.floor(Math.random()*10+1);
     console.log(is)
     if(is>4)
     success('Accepted');
     else failure("denied");

    }) 
}
req=save("anay")
.then(()=>{
    console.log("promice was resolved");
})
.catch(()=>{
    console.log("Promise was unresolved")
})