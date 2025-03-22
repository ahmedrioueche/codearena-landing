"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Code, Menu, LogIn, X } from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full py-4 z-50 backdrop-blur-sm">
      <div className="flex justify-between items-center mx-auto">
        {/* Logo and Brand Name */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <div className="mr-4">
            <Code size={36} className="text-blue-300" />
          </div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
            CodeArena
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="text-blue-100 hover:text-blue-300 transition-colors flex items-center"
          >
            <LogIn size={16} className="mr-1" />
            <span>Sign In</span>
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md text-white hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
