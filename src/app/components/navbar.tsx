"use client";

import Link from "next/link";
import { useState } from "react"; 
import { Menu, X } from "lucide-react";

import { ThemeToggle } from "./ThemeToggle";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {

    console.log("Scrolling to:", id);
  console.log("Section found:", document.getElementById(id));
    e.preventDefault();
    const section = document.getElementById(id); // Use getElementById instead of querySelector
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};


  return (
    <nav className="bg-background/60 backdrop-blur-lg py-4 p-4   sticky top-0 z-50 text-text"> 

      <div className="w-full flex justify-between items-center">

        <Link href="/" className="font-semibold text-lg">Nour Ben Moulehem | Portfolio</Link>

        {/* Desktop Navigation */}
        <div className="hidden  md:flex space-x-7 justify-center items-center">
        <Link onClick={e => handleScroll(e, "hero")} href="hero" className="hover:underline">Home</Link>

          <Link onClick={e => handleScroll(e, "about")} href="#about" className="hover:underline">About</Link>
          <Link href="#projects" onClick={e => handleScroll(e, "projects")}className="hover:underline">Projects</Link>
          <Link onClick={e => handleScroll(e, "contacts")} href="#contacts" className="hover:underline" >Contact</Link>
          {/* <Link href="/" className="font-semibold hover:underline">Language</Link> */}
          {/* <Link href="/" className="font-semibold hover:underline">Theme</Link> */}
          
          <Link href="/" className="font-semibold hover:underline">Resume</Link>

          <ThemeToggle/>


          {/* <button
      onClick={() => setIsOn(!isOn)}
      className={`relative w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors ${
        isOn ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <span
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
          isOn ? "translate-x-6" : "translate-x-0"
        }`}
      ></span>
    </button> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text"
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
