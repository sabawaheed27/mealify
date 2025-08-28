"use client";
import { useState, useContext } from "react";
import { UserArray } from "@/data/users";
import { UserContext } from "@/utils/contexts";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const userContext = useContext(UserContext);
  if (!userContext) throw new Error("LoginForm must be used within UserContextProvider");

  const { user, setUser } = userContext;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const foundUser = UserArray.find(
      (u) => u.name.toLowerCase() === username.trim().toLowerCase() && u.password === password.trim()
    );

    if (!foundUser) {
      setError("Invalid username or password");
    } else {
      setError(null);
      setUser(foundUser);
      setUsername("");
      setPassword("");
    }
  };

  // Early return for logged-in user
  if (user) {
    return (
      <div className="relative w-full max-w-md text-center p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold text-blue-700">Hi, {user.name}</span>
          <button
            onClick={() => setUser(null)}
            className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
        <p className="text-green-600 font-bold text-lg">Welcome {user.name}!</p>
      </div>
    );
  }

  return (
     <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-md mx-auto"
    >
      <label htmlFor="username" className="text-gray-700 font-medium">
        Username
      </label>
      <input
        id="username"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border rounded px-3 py-2 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <label htmlFor="password" className="text-gray-700 font-medium">
        Password
      </label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border rounded px-3 py-2 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold rounded px-4 py-2 hover:bg-blue-600 transition"
      >
        Login
      </button>

      {error && <p className="text-red-600 text-sm">{error}</p>}
    </form>
  );
};

export default LoginForm;
