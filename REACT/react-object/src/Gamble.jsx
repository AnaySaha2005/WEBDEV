import {useState} from 'react';
export default function Gamble(){
    let [moves,setMoves]=useState({red:0,yellow:0,blue:0,green:0});
    let upadteBlue=()=>{
        //way 1 of updating object
        moves.blue+=1;
           setMoves({...moves})
    }
    let upadteRed=()=>{
        //way 2 of updating object
        let newmoves={...moves};
           newmoves.red+=1;
           console.log(newmoves)
           setMoves(newmoves)
    }
    let upadteGreen=()=>{
        //way 3 of updating object
        //{...moves ,green:moves.green+1} is a way of redefing object in js
           setMoves({...moves ,green:moves.green+1})
    }
    let upadteYellow=()=>{
        let newmoves={...moves};
           newmoves.yellow+=1;
           console.log(newmoves)
           setMoves(newmoves)
    }
    return(
<>
<div className="playground">
    <h3>Game begins</h3>
     <div style={{display:"flex"}}>
        <button style={{backgroundColor:"red"}} onClick={upadteRed}>{moves.red}</button>&nbsp;&nbsp;
        <button style={{backgroundColor:"#f1c40f"}} onClick={upadteYellow}>{moves.yellow}</button>&nbsp;&nbsp;
        <button style={{backgroundColor:"green"}} onClick={upadteGreen}>{moves.green}</button>&nbsp;&nbsp;
        <button style={{backgroundColor:"blue"}} onClick={upadteBlue}>{moves.blue}</button>
     </div>
</div>
</>
    )
}