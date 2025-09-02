"use client";
import { useState } from "react";
import axios from "axios";
export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleUsernameChange(e: any) {
    setUsername(e.target.value);
  }
  function handlePasswordChange(e: any) {
    setPassword(e.target.value);
  }
  return (
    <div className="bg-cyan-600 text-2xl shadow-2xl border-l-amber-600 w-screen h-screen flex justify-center items-center ">
      Signin Page
      <div className="flex justify-center items-center">
        <input
          onChange={handleUsernameChange}
          type="text"
          placeholder="username"
          className="border border-gray-300 p-2 rounded"
        />
        <input
          onChange={handlePasswordChange}
          type="password"
          placeholder="password"
          className="border border-gray-300 p-2 rounded"
        />
      </div>
      <div>
        <button
          onClick={() => {
            axios.post("http://localhost:3000/api/v1/signin"),
              {
                username,
                password,
              };
          }}
          className="bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
