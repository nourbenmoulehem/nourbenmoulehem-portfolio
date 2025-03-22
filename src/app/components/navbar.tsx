"use client";

import Link from "next/link";
import { useState } from "react"; 
import { Menu, X } from "lucide-react"; // Icons for mobile menu

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-background/60 backdrop-blur-lg py-4 p-4   sticky top-0 z-50 text-white"> 

      <div className="w-full flex justify-between items-center">
        {/* Logo or Brand Name */}
        <Link href="/" className="font-semibold text-lg">Nour Ben Moulehem | Portfolio</Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-7">
          <Link href="/link1" className="hover:underline">Home</Link>
          <Link href="/link2" className="hover:underline">Timeline</Link>
          <Link href="/link3" className="hover:underline">Projects</Link>
          <Link href="/link4" className="hover:underline">Contact</Link>
          <Link href="/" className="font-semibold hover:underline">Language</Link>
          <Link href="/" className="font-semibold hover:underline">Theme</Link>
          <Link href="/" className="font-semibold hover:underline">Resume</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <Link href="/link1" className="hover:underline" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/link2" className="hover:underline" onClick={() => setMenuOpen(false)}>Timeline</Link>
          <Link href="/link3" className="hover:underline" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/link4" className="hover:underline" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/" className="font-semibold hover:underline" onClick={() => setMenuOpen(false)}>Language</Link>
          <Link href="/" className="font-semibold hover:underline" onClick={() => setMenuOpen(false)}>Theme</Link>
          <Link href="/" className="font-semibold hover:underline" onClick={() => setMenuOpen(false)}>Resume</Link>
        </div>
      )}
      
    </nav>
  );
}
