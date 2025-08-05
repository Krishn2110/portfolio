"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
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

//   return (
//     <button
//       onClick={toggleDarkMode}
//       className="fixed top-5 right-5 z-50 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-md hover:scale-105 transition"
//     >
//       {darkMode ? "☀️ Light" : "🌙 Dark"}
//     </button>
//   );
}
