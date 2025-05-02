"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Code, Menu, LogIn, X } from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const appUrl =
    process.env.NEXT_PUBLIC_APP_URL || "https://codearena-delta.vercel.app";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener when the menu is open
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="w-full py-4 z-50 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
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

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-blue-100 hover:text-blue-300 transition-colors"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <div
          ref={menuRef}
          className={`md:flex items-center space-x-4 ${
            isMenuOpen
              ? "absolute top-16 left-0 w-full bg-dark-background/60 bg-opacity-80 p-4 flex flex-row space-x-4 items-center justify-center"
              : "hidden"
          }`}
        >
          <Link
            href={`${appUrl}/auth/login`}
            className="text-blue-100 hover:text-blue-300 transition-colors flex items-center py-2"
          >
            <LogIn size={16} className="mr-1" />
            <span>Sign In</span>
          </Link>
          <Link
            href={`${appUrl}/auth/signup`}
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
