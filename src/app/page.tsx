
"use client";
import { useContext } from "react";
import { UserContext } from "../utils/contexts";
import LoginForm from "../component/LoginForm";

export default function Home() {
  const userContext = useContext(UserContext);
  if (!userContext) return null;
  const { user } = userContext;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 px-4">
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-2xl overflow-hidden max-w-5xl w-full">
        
        {/* Left: Login Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          {!user ? (
            <>
              <h3 className="text-3xl font-extrabold mb-6 text-emerald-700 text-center">
                Welcome Back!
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Log in to explore delicious recipes 
              </p>
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

        {/* Right: Decorative Image */}
        <div className="hidden md:block md:w-1/2 relative">
          <img
            src="/images/background.jpg"
            alt="Delicious food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
