import Link from "next/link";

export default function Intercept() {
  return (
    <>
      <div className="flex">
        <Link href="./job" className="h-40 w-40 bg-red-600 m-10"></Link>
        <div className="h-40 w-40 bg-blue-500 m-10"></div>
        <div className="h-40 w-40 bg-green-400 m-10"></div>
        <div className="h-40 w-40 bg-yellow-300 m-10"></div>
      </div>
    </>
  );
}
