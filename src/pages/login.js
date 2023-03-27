import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
    console.log("Username: " + username);
    console.log("Password: " + password);

    alert("Username: " + username);
  }

  return (
    <div className="bg-white">
      <h1 className="text-black text-center font-bold text-4xl">Scrum Board</h1>

      <div className="flex bg-white place-items-center justify-center h-screen">
        <form onSubmit={handleSubmit}>
          <h1 className="text-black mb-5 font-bold text-3xl">Log in</h1>

          <div className="mt-4">
            <p className="text-black">Email*</p>
            <input
              className="mt-1 w-96 text-lg p-3 rounded-md bg-white border-gray-300 placeholder-gray-400 border-2 text-black flex"
              placeholder="Enter your Email"
              type="text"
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <p className="text-black">Password*</p>
            <input
              className="mt-1 w-96 text-lg p-3 rounded-md bg-white border-gray-300 placeholder-gray-400 border-2 text-black flex"
              placeholder="Password"
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 w-96 mt-6 mb-6 p-2 rounded-md"
          >
            Login
          </button>

          <p className="text-black text-center">
            Don't have an account?
            <Link className="text-blue-500 ml-1" href="/register">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
