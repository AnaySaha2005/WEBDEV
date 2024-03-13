// let btn=document.querySelector(".btn")
// let h=document.querySelector("h1")
// let div=document.querySelector("div")
// btn.addEventListener("click",function(){
//     let s=generate();
//     h.textContent=s;
//      div.style.backgroundColor=s
//      this.style.backgroundColor=s;
// })
// function generate(){
// let red=Math.floor(Math.random()*255);
// let green=Math.floor(Math.random()*255);
// let blue=Math.floor(Math.random()*255);
// let color=`rgb(${red},${green},${blue})`
// return color;
// }
// let nam=document.querySelector("input")
// nam.addEventListener('keydown',function(e){
//     console.log(e.code)
// })
// let form=document.querySelector("form")
//  form.addEventListener('submit',function(event){
//     event.preventDefault()
//     let inp=document.querySelector("form input")
//     let pass=document.querySelector("form #password")
//     console.log(pass.value)
//     console.log(inp.value)
//  })
let h=document.querySelector("#textarea")
let inp=document.querySelector("#text")
inp.addEventListener("input",()=>{
    console.log(inp.value)
    h.textContent=inp.value
})
