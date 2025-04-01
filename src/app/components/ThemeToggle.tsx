"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Moon, Sun } from 'lucide-react';


export function ThemeToggle() {

  const { theme, setTheme } = useTheme();
  const [on, setOn] = useState(false);

  useEffect(() => {
    setOn(true);
  }, []);

  if (!on) return <button>...</button>; 

  return (
    <button
      className="p-2 rounded-md "
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun  /> : <Moon  />}
    </button>
  );

}