"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="backdrop-blur-lg bg-white/10 shadow-lg border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-white">MediCare+</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button>
            <Link
              href="/signup"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Signup
            </Link>
          </button>
          <button>
            <Link
              href="/login"
              className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
            >
              Login
            </Link>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-lg border-t border-white/20 px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-blue-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
