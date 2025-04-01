"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {

  const { theme, setTheme } = useTheme();
  const [on, setOn] = useState(false);

  useEffect(() => {
    setOn(true);
  }, []);

  if (!on) return <button>...</button>; 

  return (
    <button
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );

}