"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle({ className }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    if (isDark) document.documentElement.classList.add("dark");
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setDarkMode(isDark);
  };

  const defaultClasses = "fixed top-5 right-5 z-50 p-3 bg-white dark:bg-zinc-800 text-black dark:text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all outline-none border border-zinc-200 dark:border-zinc-700 focus:ring-2 focus:ring-pink-500 hidden md:block";

  return (
    <button
      onClick={toggleDarkMode}
      className={className || defaultClasses}
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}
