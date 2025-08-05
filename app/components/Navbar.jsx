// "use client";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, Sun, Moon } from "lucide-react";
// import localFont from "next/font/local";

// const navLinks = [
//   { id: "skills", label: "Skills" },
//   { id: "certificates", label: "Certificates" },
//   { id: "projects", label: "Projects" },
//   { id: "contact", label: "Contact" },
// ];

// const funnelSans = localFont({
//   src: [
//     // {
//     //   path: "fonts/funnel-sans/FunnelSans-SemiBold.ttf",
//     //   weight: "700",
//     //   style: "normal",
//     // },
//     {
//       path: "../fonts/funnel-sans/FunnelSans-Bold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-funnel-sans",
//   display: "swap",
// });

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isDark, setIsDark] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const handleToggle = () => setMenuOpen(!menuOpen);
//   const handleLinkClick = () => setMenuOpen(false);

//   // Theme toggle
//   const toggleDarkMode = () => {
//     document.documentElement.classList.toggle("dark");
//     const nowDark = document.documentElement.classList.contains("dark");
//      console.log("Dark mode now:", nowDark);
//     setIsDark(nowDark);
//     localStorage.setItem("theme", nowDark ? "dark" : "light");
//   };

//   // Load theme on mount
//   useEffect(() => {
//     const saved = localStorage.getItem("theme");
//     if (saved === "dark") {
//       document.documentElement.classList.add("dark");
//       setIsDark(true);
//     }
//   }, []);

//   // Scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <motion.nav
//   initial={{ y: -60, opacity: 0 }}
//   animate={{ y: 0, opacity: 1 }}
//   transition={{ duration: 0.5 }}
//   className={`${funnelSans.className} fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-auto px-4 py-2 rounded-full shadow-lg transition-colors duration-300 ${
//     scrolled
//       ? "bg-white/90 dark:bg-black/80 backdrop-blur"
//       : "bg-white/80 dark:bg-black/70 backdrop-blur"
//   }`}
// >

//         <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 gap-6 w-full">
//   {/* Left: Logo */}
//   <div className="text-3xl font-bold  text-white bg-[#831347] rounded-full p-2">
//     KR
//   </div>

//   {/* Center: Nav Links (Grouped Together) */}
//   <div className="hidden md:flex items-center justify-center gap-4 flex-grow max-w-[600px] mx-auto">
//     {navLinks.map((link) => (
//       <motion.a
//         key={link.id}
//         href={`#${link.id}`}
//         whileHover={{ scale: 1.1 }}
//         className="text-gray-700 dark:text-gray-300 hover:bg-pink-400 dark:hover:bg-[#831347] rounded-full px-4 py-2 font-medium transition"
//       >
//         {link.label}
//       </motion.a>
//     ))}
//   </div>

//   {/* Right: Theme Toggle & Mobile Menu */}
//   <div className="flex items-center gap-3">
//     <motion.button
//       whileTap={{ rotate: 360, scale: 0.8 }}
//       onClick={toggleDarkMode}
//       className="rounded-full p-2 bg-black text-white dark:bg-white dark:text-black transition"
//       aria-label="Toggle Theme"
//     >
//       <AnimatePresence mode="wait" initial={false}>
//         <motion.div
//           key={isDark ? "moon" : "sun"}
//           initial={{ y: -10, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: 10, opacity: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           {isDark ? <Sun size={18} /> : <Moon size={18} />}
//         </motion.div>
//       </AnimatePresence>
//     </motion.button>

//     {/* Mobile Toggle */}
//     <div className="md:hidden">
//       <button onClick={handleToggle}>
//         {menuOpen ? <X size={28} /> : <Menu size={28} />}
//       </button>
//     </div>
//   </div>
// </div>


//         {/* Mobile Menu */}
//         {menuOpen && (
//           <motion.div
//             initial={{ height: 0 }}
//             animate={{ height: "auto" }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-white dark:bg-black px-6 pb-4"
//           >
//             {navLinks.map((link) => (
//               <a
//                 key={link.id}
//                 href={`#${link.id}`}
//                 onClick={handleLinkClick}
//                 className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium"
//               >
//                 {link.label}
//               </a>
//             ))}
//           </motion.div>
//         )}
//       </motion.nav>
//     </>
//   );
// }




"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import localFont from "next/font/local";

const navLinks = [
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Certificates" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const funnelSans = localFont({
  src: [
    {
      path: "../fonts/funnel-sans/FunnelSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-funnel-sans",
  display: "swap",
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    const nowDark = document.documentElement.classList.contains("dark");
    setIsDark(nowDark);
    localStorage.setItem("theme", nowDark ? "dark" : "light");
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`${funnelSans.className} fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-auto px-4 py-2 rounded-full shadow-lg transition-colors duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-black/80 backdrop-blur"
          : "bg-white/80 dark:bg-black/70 backdrop-blur"
      }`}
    >
      <div className="flex items-center justify-between w-full gap-4">
        {/* Logo */}
        <div className="text-3xl font-bold text-white bg-[#831347] rounded-full p-2">
          KR
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              whileHover={{ scale: 1.1 }}
              className="text-gray-800 hover:text-white dark:text-gray-300 hover:bg-[#831347] dark:hover:bg-[#831347] rounded-full px-4 py-2 font-medium transition"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Right Side: Theme Toggle & Menu Icon */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <motion.button
            whileTap={{ rotate: 360, scale: 0.8 }}
            onClick={toggleDarkMode}
            className="rounded-full p-2 bg-black text-white dark:bg-white dark:text-black transition"
            aria-label="Toggle Theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isDark ? "moon" : "sun"}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          {/* Mobile Toggle */}
          <div className="md:hidden">
           <button onClick={handleToggle}>
  {menuOpen ? (
    <X size={28} className={isDark ? "text-white" : "text-black"} />
  ) : (
    <Menu size={28} className={isDark ? "text-white" : "text-black"} />
  )}
</button>

          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
  initial={{ height: 0, opacity: 0 }}
  animate={{ height: "auto", opacity: 1 }}
  transition={{ duration: 0.3 }}
  className="md:hidden rounded-b-2xl bg-white/90 dark:bg-black/80 backdrop-blur px-6 pb-4 shadow-lg mx-4 mt-[-10px]"
>
  {navLinks.map((link) => (
    <a
      key={link.id}
      href={`#${link.id}`}
      onClick={handleLinkClick}
      className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium"
    >
      {link.label}
    </a>
  ))}
</motion.div>

        )}
      </AnimatePresence>
    </motion.nav>
  );
}
