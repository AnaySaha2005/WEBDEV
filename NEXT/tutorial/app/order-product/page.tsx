"use client";

import { useRouter } from "next/navigation";
export default function OrderProduct() {
  const router = useRouter();
  //ERROR HANDLING IN THE PAGE.TSX
  function getRandom() {
    return Math.floor(Math.random() *10);
  }
  const x = getRandom();
  console.log(x);
  if (x <=5) {
    //SERVER ERROR CAUSES STOP OF UI
    throw new Error("Error Occured");
  }
  //FOR CUSTOM ERROR HANDLING CREATE A NEW ERROR.TSX FILE FOR UI BASED ERROR HANDLING
  return (
    <>
      <button
        onClick={() => {
          //used for programatically navigation
          router.push("/");
        }}
        type="button"
        className="text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
      >
        Place Order
      </button>
    </>
  );
}
