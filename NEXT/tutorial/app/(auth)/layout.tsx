"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
/*
TEMPLATES ARE JUST LIKE LAYOUT BUT ALL LOCAL COMPONENTS ARE RE RENDERED
UNLIKE INT LAYOUTS DATA ,DATA IS LOST HERE FOR STATE PROP
*/
export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [state, setState] = useState(""); //use state works
  //pathname represents the path in the url

  return (
    <>
    <label htmlFor="name">Type here</label>
      <input
      name="name"
        type="text"
        value={state}
        onChange={(e) => {
            e.preventDefault();
          setState(e.target.value);
        }}
      />
      {pathname == "/login" ? (
        <Link href="/login" className="text-blue-500">
          Login
        </Link>
      ) : (
        <Link href="/login">Login</Link>
      )}
      &nbsp;
      {pathname == "/register" ? (
        <Link href="/register" className="text-blue-500">
          Register
        </Link>
      ) : (
        <Link href="/register">Register</Link>
      )}
    </>
  );
}
