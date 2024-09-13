import Product from "./Product";
import Eventbtn from "./Eventbtn";
import Form from "./Form";
import Counter from "./Counter";
import LikeButton from "./LikeButton";
export default function ProductTab() {
  let img=["https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcAu7SJ1xVTIy3FrNxNvDqJgh2ezbsmtM6A0C9G5YvLJLlj38g-Wj_-TsZ9cdp_sPGyVydXer3tCT-Qj8a9CulZv28kyZgHttDWeQt0sBiEYRYemHJLVK2Ykc","https://rukminim2.flixcart.com/image/1200/1200/xif0q/keyboard/h/p/m/-original-imagv2xmvgnwcvmu.jpeg","https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK0C2?wid=4000&hei=4000&fmt=jpeg&qlt=95&.v=1564075356758"];
  let price=[2000,5000,15000];
  let discount = 10;
  let features=[[<li>8000DPI</li>,<li>% programmable button</li>],[<li>Intitutive tough surface</li>,<li>Designed for ipad pro</li>],[<li>Smooth touch surface</li>,<li>Long-Life garantee</li>]];
  let product=["Logitech MS MASTER 35","Zebronics Zed-Tranformer","Apple Pencil(2nd gen)"];
  return (
    <>
    <Counter/>
    </>
  );
}
