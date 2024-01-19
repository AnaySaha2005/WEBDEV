// function print(){
//     console.log("Hello World");
// };
function high(func,n){
for(let i=1;i<=n;i++)
{
    func();
}
}
function greet(){
    console.log("Nomoshkar");
}
high(greet,100);
high(function(){console.log("Hello")},100);