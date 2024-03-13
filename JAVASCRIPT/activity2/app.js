let task=document.querySelector("#task");
let add=document.querySelector("#add");
let del=document.querySelector("#del");
let list=document.querySelector("#list");
add.addEventListener("click",(e)=>{
    e.preventDefault()
if(task.value=='')return;
    console.log(task.value)
let li=document.createElement("li")
li.innerText=task.value;
task.value=""
list.appendChild(li)
})
del.addEventListener('click',()=>{
    let li=document.querySelector('li')
    li.remove()
})