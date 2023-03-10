import { useState, useEffect } from "react";

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
    <div className="bg-white p-5 m-5 rounded-lg drop-shadow-md">
      <h1 className="text-black m-5 text-center font-bold text-3xl">
        Register
      </h1>

      <form className="grid place-items-center" onSubmit={handleSubmit}>
        <input
          className="m-1 w-80 text-lg p-3 text-white flex"
          placeholder="Username"
          type="text"
          name="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {password === confirmPassword ? (
          true
        ) : (
          <p className="text-red-600 text-center">Password not Matched</p>
        )}
        <input
          className="m-1 w-80 text-lg p-3  text-white flex"
          placeholder="Password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="m-1 w-80 text-lg p-3  text-white flex"
          placeholder="Confirm Password"
          type="password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          type="submit"
          className="text-white mt-2 text-center p-5 w-auto flex text-lg bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Register
        </button>
      </form>
    </div>
  );
}
