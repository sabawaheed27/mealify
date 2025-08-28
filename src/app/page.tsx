"use client";
import { useContext } from "react";
import { UserContext } from "../utils/contexts";
import LoginForm from "../component/LoginForm";

export default function Home() {
  const userContext = useContext(UserContext);
  if (!userContext) return null;
  const { user } = userContext;

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {!user ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
              Please log in
            </h2>
            <LoginForm />
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4 text-green-600 text-center">
              Welcome back, {user.name}!
            </h2>
            <p className="text-gray-600 text-center">You are now logged in.</p>
          </>
        )}
      </div>
    </div>
  );
}
