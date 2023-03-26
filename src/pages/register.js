import { useState, useEffect } from "react";
import Link from "next/link";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {});

  function handleSubmit(e) {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log("Submitted");
      console.log("Username: " + username);
      console.log("Password: " + password);
    } else {
      console.log("Password not Matched");
    }
  }

  return (
    <div className="bg-white">
      <h1 className="text-black text-center font-bold text-4xl">Scrum Board</h1>

      <div className="flex bg-white place-items-center justify-center h-screen">
        <form className="bg-white" onSubmit={handleSubmit}>
          <h1 className="text-black mb-5 font-bold text-3xl">Sign up</h1>
          <div className="mt-4">
            <p className="text-black text-left font-semibold">Name*</p>

            <input
              className="mt-1 bg-white border-2 border-gray-300 rounded-md w-96 text-lg p-2 text-black placeholder-gray-400"
              placeholder="Enter your Name"
              type="text"
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {password === confirmPassword ? (
            true
          ) : (
            <p className="text-red-600 text-center">Password not Matched</p>
          )}
          <div className="mt-4">
            <p className="text-black text-left font-semibold">Email*</p>
            <input
              className="mt-1  bg-white border-2 border-gray-300 rounded-md w-96 text-lg p-2 text-black placeholder-gray-400"
              placeholder="Enter your Email"
              type="email"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <p className="text-black text-left font-semibold">Password*</p>
            <input
              className="mt-1 bg-white border-2 border-gray-300 rounded-md w-96 text-lg p-2 text-black placeholder-gray-400"
              placeholder="Create Password"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <p className="text-black text-left">
              Must be at least 8 characters
            </p>
          </div>
          <button
            type="submit"
            className="bg-blue-500 w-96 mt-6 mb-6 p-2 rounded-md"
          >
            Register
          </button>
          <p className="text-center text-black">
            Already have an account?
            <Link className="text-blue-500 ml-1" href="/login">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
