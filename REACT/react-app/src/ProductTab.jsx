
import "./ProductTab.css"
function ProductTab(obj){
    //Ading styles using condition
    let style={backgroundColor:obj.price>30000?"#00bdd0":""}
    return(
<>
<div className="ProductTab" style={style} >
    
    <h3>{obj.title}</h3>
    <h5>{obj.price}</h5>
    <h5>Discount: {obj.price>20000?"5%":"0%"}</h5>
    <h6> {obj.feature}</h6>
    
</div>
</>
    )
}
export default ProductTab