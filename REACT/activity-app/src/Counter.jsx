import { useState, useEffect } from "react";
export default function Counter() {
  let [count, setCount] = useState(0);
  let incCount = () => {
    setCount((counter) => {
      return counter + 1;
    });
  };
  useEffect((function sudeEffect(){
    console.log("this is side effect")
  }))
  return (
    <>
      <button onClick={incCount}>Count is {count}</button>
    </>
  );
}
