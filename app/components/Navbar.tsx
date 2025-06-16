// components/Navbar.tsx
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-yellow-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">BatirDemain</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-black">Accueil</a>
          <a href="#services" className="hover:text-black">Services</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-yellow-500">
          <a href="#" className="block">Accueil</a>
          <a href="#services" className="block">Services</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      )}
    </header>
  );
}
