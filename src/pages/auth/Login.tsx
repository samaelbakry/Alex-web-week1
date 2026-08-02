import React, { useState } from "react";
import { loginFn } from "../../services/auth";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    try {
      setLoading(true);
      if (!userName || !password) {
        console.error("Please fill in all fields");
        return;
      }
     const data = await loginFn(userName, password);
     console.log(data)

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="bg-stone-100 border h-70 border-gray-100 shadow flex flex-col items-center justify-center rounded-2xl px-4">
      <input
        placeholder="Enter your user name"
        className="bg-stone-100 border rounded-2xl border-gray-300 w-full px-2 h-12 tfocus:outline-none focus:ring-2 focus:ring-blue-500"
        value={userName}
        disabled={loading}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        placeholder="Enter your password"
        type="password"
        className="bg-stone-100 border rounded-2xl w-full px-2 h-12 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 my-2"
        value={password}
        disabled={loading}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" disabled={loading} onClick={handleLogin} className="bg-blue-600 rounded-xl shadow text-white px-5 py-2 self-end cursor-pointer">
       {loading ? "Sending.." : "Submit"}
      </button>
    </div>
  );
}
