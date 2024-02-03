let anchor=document.querySelectorAll('.box a')
for(let i=0;i<anchor.length;i++){
    anchor[i].style.color='black'
    anchor[i].style.textDecoration='none'
}
let p=document.createElement('p')
p.textContent="I wanna Diee i don't wanna Lie.."
document.querySelector('body').appendChild(p);