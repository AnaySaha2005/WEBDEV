let game=[];
let user=[];
let start=false;
let level=0;
let btns=["yellow","red","green","blue"];
let allbtns=document.querySelectorAll('#btn');
for(button of allbtns){
    button.addEventListener("click",btnPress)
}
let h3=document.querySelector('h3');

document.addEventListener("keypress",function(){
    if(!start){
        console.log('Game Started')
        start=true;
        levelUp()
    }
})
function levelUp(){
level++;
h3.innerText=`Level ${level}`;
let randIdx=Math.floor(Math.random()*4);
let randColor=btns[randIdx];
let ranbtn=document.querySelector(`.${randColor}`);
btnFlash(ranbtn);
game.push(randColor)
}
function btnFlash(btn){
btn.classList.add("flash")
setTimeout(function(){
    btn.classList.remove("flash");
},1000);
} 
function userFlash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500);
    }
function btnPress(){
 userFlash(this);
 user.push( this.classList[0]);
 console.log(game);
 console.log(user);
 check(user.length-1);
}
function check(idx){
    if(game[idx]!=user[idx]){
        h3.innerHTML=`Wrong..<br> Your score is ${level}<br>Press any key to start`
        start=false;
        level=0;
        game=[];
        user=[];
    }
   else if(game.length==user.length&&game[idx]==user[idx]){
        user=[];
        
       levelUp();
        
    }
}

