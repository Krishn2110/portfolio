"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, Github, Linkedin } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-4xl px-4 py-3 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-500 border ${
        scrolled
          ? "bg-white/70 dark:bg-zinc-950/70 backdrop-blur-2xl border-zinc-200/50 dark:border-white/10"
          : "bg-white/40 dark:bg-zinc-900/30 backdrop-blur-md border-transparent dark:border-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full pl-2 pr-1 md:pr-4">
        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3"
        >
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-lime-400 rounded-full blur opacity-40 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative w-10 h-10 rounded-full bg-zinc-900 dark:bg-zinc-950 flex items-center justify-center text-white text-lg font-display font-bold border border-zinc-700 dark:border-zinc-800 shadow-inner">
              KR_
            </div>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => {
                setMenuOpen(false);
                setActiveLink(link.id);
              }}
              className={`relative px-4 py-2 text-sm font-bold tracking-widest uppercase transition-all rounded-full ${
                activeLink === link.id
                  ? "text-lime-600 dark:text-lime-400"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              {activeLink === link.id && (
                <motion.div
                  className="absolute inset-0 bg-lime-500/10 dark:bg-lime-400/10 rounded-full z-[-1] border border-lime-500/20 dark:border-lime-400/30"
                  layoutId="activeLink"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 md:hidden">
          <DarkModeToggle className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:border-pink-500/50 outline-none text-sm w-[38px] h-[38px] flex items-center justify-center transition-all" />
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:border-pink-500/50 outline-none w-[38px] h-[38px] flex items-center justify-center transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden absolute top-[110%] left-0 w-full mt-2 z-40 rounded-2xl bg-white/90 dark:bg-zinc-950/90 backdrop-blur-2xl border border-zinc-200/50 dark:border-white/10 shadow-2xl overflow-hidden p-3"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => {
                    setMenuOpen(false);
                    setActiveLink(link.id);
                  }}
                  className={`block py-3 px-4 rounded-xl text-sm font-bold tracking-wide uppercase transition ${
                    activeLink === link.id
                      ? "bg-lime-500/10 dark:bg-lime-400/10 text-lime-600 dark:text-lime-400 border border-lime-500/20 dark:border-lime-400/30"
                      : "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-transparent"
                  }`}
                  whileHover={{ x: 4 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex justify-center gap-4 pt-4 mt-2 border-t border-zinc-800">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-pink-600 dark:hover:text-pink-500 border border-zinc-200 dark:border-zinc-800 hover:border-pink-500/50 transition"
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