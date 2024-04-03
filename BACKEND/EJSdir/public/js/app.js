const btns=document.querySelectorAll("button")
for(let btn of btns){
    btn.addEventListener("click",()=>{ 
        setTimeout(() => {
            btn.style.backgroundColor='black'   
        }, 50);
        setTimeout(() => {
            btn.style.backgroundColor='white'  
        }, 100);
    })
}