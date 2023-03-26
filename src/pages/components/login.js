import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

<<<<<<< HEAD
=======
  function onClick() {}

>>>>>>> 57d558b (update1)
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
    console.log("Username: " + username);
    console.log("Password: " + password);

    alert("Username: " + username);
  }

  return (
    <div className="bg-white p-5 m-5 rounded-lg drop-shadow-md">
      <h1 className="text-3xl m-5 font-bold text-black text-center justify-items-center">
        Login
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
        <input
          className="m-1 w-80 text-lg p-3  text-white flex"
          placeholder="Password"
          type="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="text-white mt-2 text-center p-5 w-auto flex text-lg bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Login
        </button>
      </form>
    </div>
  );
}
