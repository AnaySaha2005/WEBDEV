//  let url='https://catfact.ninja/fact'
//  let result=document.querySelector('#result')
//  let btn=document.querySelector('button')
// // console.log(h3)
// let json=fetch(url)
// .then((response)=>{
    
//     return response.json()
// })
// .then((data)=>{
//     console.log(data.fact)
//     h3.innerText=data.fact
// })
// .catch((err)=>{
//     console.log(err)
// })

//USING ASYNC AND AWAIT
// async function getFacts(){
//     let res=await fetch (url)
//     let data=await res.json();
//     console.log(data)
// }

// btn.addEventListener('click',async ()=>{
//     let para=await getFacts()
//     console.log(para)
//      result.innerText=para
// })
// //USING AXIOS
// async function getFacts(){
//     let res=await axios.get(url)
//    return res.data.fact
// }

//DOG PIC API REQUEST MODEL
// let url='https://dog.ceo/api/breeds/image/random';
// let img=document.querySelector('img')
// let btn=document.querySelector('button')
// btn.addEventListener('click',()=>{
//     getpic()
// })
// //using axios
// async function getpic(){
//     let res=await axios.get(url)
//     console.log(res.data.message)
//     img.src=res.data.message
// }

// COUNTRY COLLEGE API REQUEST MODEL
let url='http://universities.hipolabs.com/search?country='
let btn=document.querySelector('button')
let ul=document.querySelector('ul')
//using axios
async function getColleges(country){
    let res=await axios.get(url+country);
   return (res.data)
}
btn.addEventListener('click',async ()=>{
    let country=document.querySelector('input').value
    if(country=='') return;
   let colleges=await getColleges(country)
   console.log(colleges)
   ul.innerText=''
   show(colleges)
})
function show(colleges){
for(col of colleges){
    let li=document.createElement('li')
    li.innerText=col.name
    ul.appendChild(li)
}
}
