// components/Navbar.tsx
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-yellow-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-3xl font-bold">BatirDemain</h1>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-black">A propos</a>
          <a href="#catalogue" className="hover:text-black">Catalogue</a>
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
    
          <a href="#about" className="block">À propos</a>
          <a href="#catalogue" className="block">Catalogue</a>
            <a href="#contact" className="block">Contact</a>
        </div>
      )}
    </header>
  );
}
