"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "À propos", href: "#about" },
    { label: "Catalogue", href: "#catalogue" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-yellow-400 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5 md:px-10">
        {/* Logo + Nom */}
        <div className="flex items-center space-x-4 cursor-pointer group">
          <Image
            src="/logo/logomaison.jpg"
            alt="Logo BatirDemain"
            width={50}
            height={50}
            className="rounded-full transition-transform duration-300 group-hover:scale-110"
          />
          <h1 className="text-3xl font-extrabold text-gray-900 drop-shadow-md select-none">
            BatirDemain
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-12 font-semibold text-gray-800">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative group"
            >
              <span className="hover:text-gray-900 transition-colors duration-300">
                {link.label}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-900 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Burger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md hover:bg-yellow-300 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={28} className="text-gray-900" />
          ) : (
            <Menu size={28} className="text-gray-900" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden bg-yellow-300 transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-4 font-semibold text-gray-900">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-700 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
