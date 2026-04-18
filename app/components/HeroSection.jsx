"use client"

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import TextType from '../design/TextType';

export default function HeroSection() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [hoveredElement, setHoveredElement] = useState(null);

  useEffect(() => {
    const move = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0 md:justify-around px-4 sm:px-6 md:px-20 mt-24 md:mt-12 mb-5 rounded-3xl py-12 md:py-20 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl">
      
      {/* Glowing background elements (Neon Cyber) */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <motion.div 
          className="absolute w-[30rem] h-[30rem] rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 blur-[130px] top-[-10%] left-[-10%]"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-[25rem] h-[25rem] rounded-full bg-gradient-to-r from-lime-400 to-green-500 blur-[120px] bottom-[-10%] right-[-10%]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Profile Image with neon grid/glow */}
      <motion.div 
        initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mb-12 md:mb-0 group w-full md:w-auto flex justify-center"
      >
        <motion.div 
          animate={{ y: [0, -10, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 dark:from-pink-500 to-lime-400 dark:to-lime-400 rounded-2xl blur-xl opacity-20 dark:opacity-30 group-hover:opacity-40 dark:group-hover:opacity-60 transition-opacity duration-500"></div>
          <img 
            src="/kislay_pr.jpg" 
            alt="Kislay Rai"
            className="relative w-64 h-[20rem] sm:w-72 sm:h-[24rem] md:w-96 md:h-[30rem] object-cover rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_rgba(236,72,153,0.15)] transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </motion.div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full md:w-1/2 space-y-8"
      >
        <div className="space-y-4">
          <TextType
            text={[
              "Hello! I'm Kislay Rai.",
              "A Full-Stack Developer",
              "& ML Enthusiast."
            ]}
            as="h1"
            className="text-3xl sm:text-4xl md:text-6xl font-display font-bold leading-tight text-zinc-900 dark:text-transparent dark:bg-gradient-to-r dark:from-white dark:via-pink-400 dark:to-white dark:bg-clip-text"
            typingSpeed={60}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
            cursorClassName="bg-lime-500 dark:bg-lime-400"
          />
          <motion.p
            className="text-base sm:text-lg md:text-xl text-zinc-900 dark:text-zinc-400 max-w-lg font-sans leading-relaxed tracking-wide font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Crafting immersive web experiences with modern tools & elegant design. Delivering high-impact code.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-wrap gap-4 mt-8"
        >
          <motion.a
            href="/KR_resume.pdf"
            download
            className="relative overflow-hidden inline-flex items-center justify-center bg-pink-600 dark:bg-pink-500 text-white font-bold px-8 py-4 rounded-md shadow-[0_4px_15px_rgba(219,39,119,0.3)] dark:shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:shadow-[0_8px_25px_rgba(219,39,119,0.5)] dark:hover:shadow-[0_0_25px_rgba(236,72,153,0.8)] border border-transparent transition-all tracking-wider uppercase text-sm"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onHoverStart={() => setHoveredElement('resume')}
            onHoverEnd={() => setHoveredElement(null)}
          >
            Download Resume
          </motion.a>
          
          <motion.a
            href="#contact"
            className="relative overflow-hidden inline-flex items-center justify-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-300 dark:border-lime-400/50 text-zinc-900 dark:text-lime-400 font-bold px-8 py-4 rounded-md hover:bg-zinc-900 dark:hover:bg-lime-400 hover:text-white dark:hover:text-zinc-900 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_20px_rgba(163,230,53,0.5)] transition-all tracking-wider uppercase text-sm"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onHoverStart={() => setHoveredElement('contact')}
            onHoverEnd={() => setHoveredElement(null)}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Interactive cursor follower */}
      <motion.div
        className="pointer-events-none fixed w-64 h-64 rounded-full bg-pink-500/10 dark:bg-pink-500/10 blur-3xl z-0 mix-blend-screen transition-transform duration-75 ease-out hidden md:block"
        style={{
          top: cursorPos.y - 128,
          left: cursorPos.x - 128,
        }}
      />
    </section>
  );
}