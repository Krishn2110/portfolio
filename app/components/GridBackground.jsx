"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GridBackground() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.2); // Parallax factor
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-[-3] pointer-events-none bg-zinc-50 dark:bg-[#0a0a0a] overflow-hidden transition-colors duration-500">
      <motion.div
        className="absolute inset-0 opacity-40 dark:opacity-0 transition-opacity duration-500"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          y: -offset,
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-0 dark:opacity-10 transition-opacity duration-500"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(236, 72, 153, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(236, 72, 153, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          y: -offset,
        }}
      />
      {/* Heavy vignette shadow to fade out the grid around edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(250,250,250,1)_80%)] dark:bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#0a0a0a_80%)] transition-colors duration-500" />
    </div>
  );
}
