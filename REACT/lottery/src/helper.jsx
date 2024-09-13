export default function sum(value) {
  let a=0;
    while(value>0){
    a+= value % 10;
    value = Math.floor(value / 10);
    }
    return a;
  }