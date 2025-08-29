
"use client";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "@/utils/contexts";
import { Utensils } from "lucide-react"; 

const Navbar = () => {
  const userContext = useContext(UserContext);

  if (!userContext) return null;

  const { user, setUser } = userContext;

  return (
    <nav className="flex justify-between items-center bg-emerald-700 text-white p-4 shadow-lg">

      {/* Logo + Heading */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <Utensils className="w-7 h-7 text-orange-300" />
          <h1 className="text-3xl font-extrabold tracking-wide">
            FlavorQuest
          </h1>
        </div>
        <p className="text-sm italic text-emerald-100 ">
            Embrace the art of cooking where flavours come live!
        </p>
      </div>

      {/* Nav Links */}
      {user ? (
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-yellow-300">Home</Link>
          <Link href="/profile" className="hover:text-yellow-300">Profile</Link>
          <Link href="/categories" className="hover:text-yellow-300">Categories</Link>
          <span className="font-semibold">Hi {user.name}</span>
          <button
            onClick={() => setUser(null)}
            className="bg-orange-500 hover:bg-orange-00 px-3 py-1 rounded text-white">
            Logout
          </button>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;


