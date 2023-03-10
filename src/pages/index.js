import Login from "./components/login";
import Register from "./components/register";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState("login");

  function changePage(page) {
    setPage(page);
  }

  return (
    <div className="bg-gray-300 w-screen h-screen">
      <div className="bg-white p-3 drop-shadow-md">
        <h1 className="text-center text-black text-5xl p-4">
          Simple Login Form
        </h1>
      </div>
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
      </div>
      <div className="flex justify-center space-x-2">
        {page === "login" && <Login />}
        {page === "register" && <Register />}
      </div>
    </div>
  );
}
