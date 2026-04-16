"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ScrambleText from "./ScrambleText";

export default function InitialLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 2500);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-50 dark:bg-[#0a0a0a]"
          initial={{ y: 0 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 relative"
            >
              <div className="w-24 h-24 mx-auto bg-transparent border-t-2 border-r-2 border-pink-600 dark:border-pink-500 rounded-full animate-spin">
                 <div className="w-16 h-16 m-4 border-b-2 border-l-2 border-lime-500 dark:border-lime-400 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-zinc-900 dark:text-white text-xl">
                SYS
              </div>
            </motion.div>
            
            <motion.div 
              className="text-2xl font-display font-bold text-zinc-900 dark:text-white tracking-[0.3em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ScrambleText text="INITIALIZING" />
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >_</motion.span>
            </motion.div>
            
            <div className="flex justify-center gap-1 mt-6">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-pink-600 dark:bg-pink-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                />
              ))}
            </div>

            <div className="w-64 h-1 bg-zinc-300 dark:bg-zinc-800 mt-8 mx-auto rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-pink-500 to-lime-400 dark:from-pink-500 dark:to-lime-400"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
