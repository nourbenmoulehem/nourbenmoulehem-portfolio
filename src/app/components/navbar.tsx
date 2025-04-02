"use client";

import Link from "next/link";
import { useState, useCallback } from "react"; 
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contacts" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <nav className="bg-background/60 backdrop-blur-lg py-4 px-4 sticky top-0 z-50 text-text"> 
      <div className="w-full flex justify-between items-center">
        <Link href="/" className="font-semibold text-lg">Nour Ben Moulehem | Portfolio</Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-7 justify-center items-center">
          {navLinks.map(({ name, id }) => (
            <Link 
              key={id} 
              href={id === "/" ? "/" : `#${id}`} 
              onClick={(e) => id !== "/" && handleScroll(e, id)} 
              className="hover:underline"
            >
              {name}
            </Link>
          ))}

          <Link href="/Nour_Ben_Moulehem_Resume.pdf" target="_blank" className="hover:underline">Resume</Link>

          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text" 
          onClick={() => setMenuOpen(!menuOpen)} 
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <ThemeToggle />
          {navLinks.map(({ name, id }) => (
            <Link 
              key={id} 
              href={id === "/" ? "/" : `#${id}`} 
              onClick={() => setMenuOpen(false)} 
              className="hover:underline"
            >
              {name}
            </Link>
          ))}
          <Link href="/Nour_Ben_Moulehem_Resume.pdf" target="_blank" className="hover:underline">Resume</Link>
        </div>
      )}
    </nav>
  );
}
