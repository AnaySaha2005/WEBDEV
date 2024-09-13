
import './App.css'
import Product from './Product'

import Activity from './Activity'
let random=()=>{
 let r=(Math.random()*1000)%255+1
 let g=(Math.random()*1000)%255+1
 let b=(Math.random()*1000)%255+1
  return `rgba(${r},${g},${b},0.4)`
}
function App() {

  return ( 
<>
<Product/>
<Activity user={"Anay"} color={random()}/>
</>
  )
}

export default App

