"use client";
import { useState, useContext } from "react";
import { UserArray } from "@/data/users";
import { UserContext } from "@/utils/contexts";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("LoginForm must be used within UserContextProvider");
  }

  const { user, setUser } = userContext;


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Look for user with BOTH name and password match
    const foundUser = UserArray.find(
      (u) => u.name === username.trim() && u.password === password.trim()
    );

    if (!foundUser) {
      setError("Invalid username or password ");
    } else {
      setError(null);
      setUser(foundUser); // store logged in user
      setUsername(""); // clear input
      setPassword(""); // clear input
    }
  };

  return (
    <div className="flex flex-col items-center gap-3 w-64 relative">
      {/* 🔹 Top-right logout bar */}
      {user && (
        <div className="absolute top-0 right-0 flex items-center gap-2">
          <span className="font-semibold text-blue-700">Hi, {user.name}</span>
          <button
            onClick={() => setUser(null)}
            className="bg-red-500 text-white px-2 py-1 rounded text-sm"
          >
            Logout
          </button>
        </div>
      )}

      {/* 🔹 Main area */}
      {user ? (
        <p className="text-green-600 font-bold mt-10">Welcome {user.name} </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label htmlFor="username">Enter your name</label>
          <input
            id="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded px-2 py-1"
          />

          <label htmlFor="password">Enter your password</label>
          <input
            id="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded px-2 py-1"
          />

          <button type="submit" className="bg-blue-500 text-white rounded px-3 py-1">
            Login
          </button>

          {error && <p className="text-red-600">{error}</p>}
        </form>
      )}
    </div>
  );
};

export default LoginForm;
