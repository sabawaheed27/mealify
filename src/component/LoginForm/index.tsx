
"use client";
import { useState, useContext, useEffect } from "react";
import { UserArray } from "@/data/users";
import { UserContext } from "@/utils/contexts";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const userContext = useContext(UserContext);
  if (!userContext) throw new Error("LoginForm must be used within UserContextProvider");

  const { setUser } = userContext;

  // pre-fill from localStorage
  useEffect(() => {
    const remembered = localStorage.getItem("rememberedUser");
    if (remembered) {
      const user = JSON.parse(remembered);
      setUsername(user.name);
      setPassword(user.password);
      setRemember(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const foundUser = UserArray.find(
      (u) =>
        u.name.toLowerCase() === username.trim().toLowerCase() &&
        u.password === password.trim()
    );

    if (!foundUser) {
      setError("Invalid username or password");
    } else {
      setError(null);
      setUser(foundUser);

      if (remember) {
        localStorage.setItem("rememberedUser", JSON.stringify(foundUser));
      } else {
        localStorage.removeItem("rememberedUser");
        setPassword("");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-md mx-auto bg-orange-50 p-6 rounded-lg shadow-md"
    >
      {/* Username */}
      <label htmlFor="username" className="text-gray-700 font-medium">
        Username
      </label>
      <input
        id="username"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border rounded px-3 py-2 text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      />

      {/* Password */}
      <label htmlFor="password" className="text-gray-700 font-medium">
        Password
      </label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border rounded px-3 py-2 text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      />

      {/* Remember me */}
      <label className="flex items-center gap-2 text-sm text-gray-600">
        <input
          type="checkbox"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
          className="w-4 h-4 text-emerald-500 focus:ring-emerald-400"
        />
        Remember me
      </label>

      {/* Submit */}
      <button
        type="submit"
        className="bg-emerald-500 text-white font-semibold rounded px-4 py-2 hover:bg-emerald-600 transition"
      >
        Login
      </button>

      {/* Error */}
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </form>
  );
};

export default LoginForm;
