import {useState} from "react";
  

export default function LikeButton() {
    let [isLiked,setisLiked]=useState(false);
    let incisLiked=()=>{setisLiked(!isLiked); isLiked=!isLiked;}
   
    let style1={display:!isLiked?"block":"none",fontSize:"25px"}
    let style2={display:isLiked?"block":"none",color:"red",fontSize:"25px"}
  return (
    <p>
      <i className="fa-regular fa-heart"  onClick={incisLiked} style={style1}></i>
      <i className="fa-solid fa-heart"onClick={incisLiked} style={style2}></i>
    </p>
  );
}
