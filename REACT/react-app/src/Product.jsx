import ProductTab from "./ProductTab";
function Product(){
   let arr=[<li>hello</li>,<li>Hi</li>]
    return(
        <div>
           <ProductTab title={"Laptop"} price={40000} feature ={arr} />
           <ProductTab title={"Phone"} price={20000} feature ={arr}/>
           <ProductTab title={"Pc"} price={45000} feature ={arr}/>
        </div>
    )
  }
  export default Product;