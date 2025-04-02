"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Moon, Sun } from 'lucide-react';


export function ThemeToggle() {

  const { resolvedTheme, setTheme } = useTheme();
  const [on, setOn] = useState(false);

  useEffect(() => {
    setOn(true);
  }, []);

  if (!on) return <button>...</button>; 

  return (
    <button
      className="p-2 rounded-md "
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? <Sun  /> : <Moon  />}
    </button>
  );

}