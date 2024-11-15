"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="text-white bg-gradient-to-r from-[#2E2E5C] to-blue-400 py-4">
      <nav className="container mx-auto flex justify-between items-center px-8">
        <a href="#" className="text-2xl font-bold text-white">
          Moch. Ridwan
        </a>
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>
        <div
          className={`flex flex-col md:flex-row md:space-x-4 ${
            menuOpen ? "block" : "hidden"
          } md:block`}
        >
          <a href="#about" className="mt-2 md:mt-0">
            About
          </a>
          <a href="#skills" className="mt-2 md:mt-0">
            Skills
          </a>
          <a href="#projects" className="mt-2 md:mt-0">
            Projects
          </a>
          <a href="#contact" className="mt-2 md:mt-0">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
