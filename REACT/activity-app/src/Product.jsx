export default function Product({img,price,disc,feature,product}){

return(
        <div style={{backgroundColor:"#ABABAB" ,width:"15rem",display:"inline-block",borderRadius:"10px",color:"black",  textAlign: "center" ,margin:"1rem 2rem"}}>
                 <h5>{product}</h5>
                <img src={img} alt="picture" style={{height:"15rem",width:"10rem"}} />
                <br/>
                {console.log(feature)}
                <p style={{textAlign:"left",margin:"0px 20px"}}>{feature}</p>
               <div style={{backgroundColor:"#e0c367",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px"}}>
               <span style={{textDecoration:"line-through"}}>{price}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span><b>{price*(1-disc/100)}</b></span>
               </div>
             
        </div>
      
)
}