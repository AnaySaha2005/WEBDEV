import { useState } from "react";
import Check from "./Check";
import sum from "./helper";

export default function Generate({n = 3,winCondition}) {
let [number, setNumber] = useState(0);


  function generate() {
    let a = Math.ceil(Math.random() * 9);
    while (--n > 0) {
      a = a * 10 + Math.floor(Math.random() * 10);
    }
    setNumber(a);
  }
  return (
    <>
      <button onClick={generate}>Generate</button>
      <h1>{number}</h1>
      <Check value={number} isWinning={winCondition(number)} />
    </>
  );
}
