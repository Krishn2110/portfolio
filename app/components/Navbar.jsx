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

//   const toggleDarkMode = () => {
//     document.documentElement.classList.toggle("dark");
//     const nowDark = document.documentElement.classList.contains("dark");
//     setIsDark(nowDark);
//     localStorage.setItem("theme", nowDark ? "dark" : "light");
//   };

//   useEffect(() => {
//     const saved = localStorage.getItem("theme");
//     if (saved === "dark") {
//       document.documentElement.classList.add("dark");
//       setIsDark(true);
//     }
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.nav
//       initial={{ y: -60, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className={`${funnelSans.className} fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-auto px-4 py-2 rounded-full shadow-lg transition-colors duration-300 ${
//         scrolled
//           ? "bg-white/90 dark:bg-black/80 backdrop-blur"
//           : "bg-white/80 dark:bg-black/70 backdrop-blur"
//       }`}
//     >
//       <div className="flex items-center justify-between w-full gap-4">
//         {/* Logo */}
//         <div className="text-3xl font-bold text-white bg-[#831347] rounded-full p-2">
//           KR
//         </div>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center gap-4">
//           {navLinks.map((link) => (
//             <motion.a
//               key={link.id}
//               href={`#${link.id}`}
//               whileHover={{ scale: 1.1 }}
//               className="text-gray-800 hover:text-white dark:text-gray-300 hover:bg-[#831347] dark:hover:bg-[#831347] rounded-full px-4 py-2 font-medium transition"
//             >
//               {link.label}
//             </motion.a>
//           ))}
//         </div>

//         {/* Right Side: Theme Toggle & Menu Icon */}
//         <div className="flex items-center gap-3">
//           {/* Theme Toggle */}
//           <motion.button
//             whileTap={{ rotate: 360, scale: 0.8 }}
//             onClick={toggleDarkMode}
//             className="rounded-full p-2 bg-black text-white dark:bg-white dark:text-black transition"
//             aria-label="Toggle Theme"
//           >
//             <AnimatePresence mode="wait" initial={false}>
//               <motion.div
//                 key={isDark ? "moon" : "sun"}
//                 initial={{ y: -10, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 exit={{ y: 10, opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {isDark ? <Sun size={18} /> : <Moon size={18} />}
//               </motion.div>
//             </AnimatePresence>
//           </motion.button>

//           {/* Mobile Toggle */}
//           <div className="md:hidden">
//            <button onClick={handleToggle}>
//   {menuOpen ? (
//     <X size={28} className={isDark ? "text-white" : "text-black"} />
//   ) : (
//     <Menu size={28} className={isDark ? "text-white" : "text-black"} />
//   )}
// </button>

//           </div>
//         </div>
//       </div>

//       {/* Mobile Nav Dropdown */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//   initial={{ height: 0, opacity: 0 }}
//   animate={{ height: "auto", opacity: 1 }}
//   transition={{ duration: 0.3 }}
//   className="md:hidden rounded-b-2xl bg-white/90 dark:bg-black/80 backdrop-blur px-6 pb-4 shadow-lg mx-4 mt-[-10px]"
// >
//   {navLinks.map((link) => (
//     <a
//       key={link.id}
//       href={`#${link.id}`}
//       onClick={handleLinkClick}
//       className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium"
//     >
//       {link.label}
//     </a>
//   ))}
// </motion.div>

//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }



"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Mail, Github, Linkedin } from "lucide-react";
import localFont from "next/font/local";

const navLinks = [
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Certificates" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const socialLinks = [
  { id: "github", icon: <Github size={18} />, url: "https://github.com" },
  { id: "linkedin", icon: <Linkedin size={18} />, url: "https://linkedin.com" },
  { id: "email", icon: <Mail size={18} />, url: "mailto:contact@example.com" },
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
  const [activeLink, setActiveLink] = useState(null);
  const [hasMounted, setHasMounted] = useState(false);

useEffect(() => {
  setHasMounted(true);
}, []);


  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = (id) => {
    setMenuOpen(false);
    setActiveLink(id);
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    const nowDark = document.documentElement.classList.contains("dark");
    setIsDark(nowDark);
    localStorage.setItem("theme", nowDark ? "dark" : "light");
  };

  useEffect(() => {
    // Set initial theme
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (saved === "dark" || (!saved && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }

    // Handle scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Set active link based on scroll position
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute("id");
        }
      });
      setActiveLink(current);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!hasMounted) return null;

return (

    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${funnelSans.className} fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-3xl px-4 py-3 rounded-full shadow-lg transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-white/30 dark:border-gray-700/50"
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg"
      }`}
    >
      <div className="flex items-center justify-between w-full gap-4">
        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#831347] to-[#c1125f] rounded-xl blur opacity-30"></div>
            <div className="relative w-12 h-12 rounded-full bg-gradient-to-r from-[#831347] to-[#c1125f] flex items-center justify-center text-white text-2xl font-bold">
              KR
            </div>
          </div>
      
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleLinkClick(link.id)}
              className={`relative px-4 py-2 font-medium transition-all rounded-lg ${
                activeLink === link.id
                  ? "text-white"
                  : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeLink === link.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#831347] to-[#c1125f] rounded-lg z-[-1]"
                  layoutId="activeLink"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Right Side: Social Icons, Theme Toggle & Menu Icon */}
        <div className="flex items-center gap-3">
          {/* Social Icons */}
         

          {/* Theme Toggle */}
          <motion.button
            whileTap={{ rotate: 360, scale: 0.8 }}
            onClick={toggleDarkMode}
            className="rounded-full p-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r from-[#831347] to-[#c1125f] hover:text-white transition"
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
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <motion.button
              onClick={handleToggle}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r from-[#831347] to-[#c1125f] hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden rounded-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-white/30 dark:border-gray-700/50 shadow-lg mt-3 overflow-hidden"
          >
            <div className="py-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`block py-3 px-6 text-lg font-medium transition ${
                    activeLink === link.id
                      ? "bg-gradient-to-r from-[#831347]/10 to-[#c1125f]/10 text-[#c1125f] dark:text-[#ff4d8d]"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
                  whileHover={{ x: 10 }}
                >
                  {link.label}
                </motion.a>
              ))}
              
              <div className="flex justify-center gap-4 pt-3 mt-2 border-t border-gray-200 dark:border-gray-700">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gradient-to-r from-[#831347] to-[#c1125f]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}