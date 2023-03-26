import Link from "next/link";
import React, { useState } from "react";
import Login from "./login";
import Register from "./register";

export default function Inputs() {
  const [page, setPage] = useState("");

  function changePage(page) {
    setPage(page);
  }

  return (
    <div className="flex mt-5 items-center justify-center w-full">
      <button
        className="text-black drop-shadow-md w-20 text-center bg-gray-400 rounded hover:bg-gray-500 p-3 m-1"
        onClick={() => changePage("login")}
      >
        Login
      </button>
      <button
        className="text-black drop-shadow-md  w-20 bg-gray-400 rounded hover:bg-gray-500 p-3 m-1"
        onClick={() => changePage("register")}
      >
        Register
      </button>
      <div>
        {/* {page === "login" && <Login />}
        {page === "register" && <Register />} */}

        <Link href="/login">Login</Link>
      </div>
    </div>
  );
}
