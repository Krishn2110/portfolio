"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ScrambleText from "./ScrambleText";
import SpotlightCard from "./SpotlightCard";

export default function CertificatesSection() {
  const certificates = [
    { 
      id: 1,
      src: "/certificates/previews/NASA Space Apps Challenge.png", 
      alt: "NASA Challenge",
      title: "NASA Space Apps Challenge",
      issuer: "NASA",
      date: "2023"
    },
    { 
      id: 2,
      src: "/certificates/previews/Zidio1.png", 
      alt: "Zidio Development",
      title: "Zidio Development Internship",
      issuer: "Zidio",
      date: "2025"
    },
    { 
      id: 3,
      src: "/certificates/previews/HTML.png", 
      alt: "HTML Certificate",
      title: "HTML5 Certification",
      issuer: "Infosys",
      date: "2022"
    },
    { 
      id: 4,
      src: "/certificates/previews/CSS.png", 
      alt: "CSS Certificate",
      title: "CSS3 Mastery",
      issuer: "Infosys",
      date: "2022"
    },
    { 
      id: 5,
      src: "/certificates/previews/Javascript.png", 
      alt: "JavaScript Certificate",
      title: "JavaScript Specialist",
      issuer: "Infosys",
      date: "2023"
    },
    { 
      id: 6,
      src: "/certificates/previews/pycertificate1.png", 
      alt: "Python Certificate",
      title: "Python Programming",
      issuer: "Infosys",
      date: "2023"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate certificates on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % certificates.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [certificates.length]);

  return (
    <section
      id="certificates"
      className={`relative overflow-hidden py-24 mt-12 mb-5 rounded-md px-4 sm:px-6 bg-zinc-50 dark:bg-[#0a0a0a]`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-zinc-200 dark:from-zinc-900 via-transparent dark:via-[#0a0a0a] to-transparent dark:to-[#0a0a0a] opacity-50" />
      
      <div className="relative z-10 container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mb-4 text-zinc-900 dark:text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <ScrambleText text="SYS." /><span className="text-lime-600 dark:text-lime-500"><ScrambleText text="CERTIFICATES" /></span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Validating system knowledge and logic frameworks.
          </motion.p>
        </motion.div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="h-full"
            >
              <SpotlightCard className="group relative rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-500 border border-zinc-200 dark:border-white/10 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(163,230,53,0.15)] dark:hover:shadow-[0_20px_40px_rgba(163,230,53,0.15)] hover:-translate-y-2 hover:border-lime-500/50 dark:hover:border-lime-400/50" spotColor="rgba(163,230,53,0.1)">
                <div className="relative h-64 overflow-hidden rounded-t-2xl bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-300 dark:border-zinc-800/50 p-2">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-[1.02] opacity-90 group-hover:opacity-100"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-1 relative bg-white/50 dark:bg-transparent">
                  <h3 className="text-xl font-display font-bold mb-2 text-zinc-900 dark:text-white uppercase tracking-wide group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors">
                    {cert.title}_
                  </h3>
                  <div className="flex justify-between text-zinc-500 text-sm font-bold tracking-wider uppercase mb-5 flex-1">
                    <span>{cert.issuer}</span>
                    <span className="text-lime-400">{cert.date}</span>
                  </div>
                  
                  <a 
                    href={cert.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full py-3.5 text-center bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-lime-600 dark:text-lime-400 hover:bg-lime-500 hover:text-white dark:hover:bg-lime-400/10 dark:hover:text-lime-400 hover:border-lime-600 dark:hover:border-lime-500 font-bold uppercase tracking-widest text-xs transition-colors mt-auto rounded-b-xl"
                  >
                    View_Certificate
                  </a>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative overflow-hidden h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="group relative h-full bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden p-6">
                <div className="relative h-64 mb-6 overflow-hidden bg-zinc-900 border border-zinc-800">
                  <Image
                    src={certificates[activeIndex].src}
                    alt={certificates[activeIndex].alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 opacity-90"
                  />
                </div>
                
                <div className="p-2">
                  <h3 className="text-xl font-display font-bold mb-2 text-white uppercase tracking-wide">
                    {certificates[activeIndex].title}_
                  </h3>
                  <div className="flex justify-between text-zinc-500 text-sm font-bold uppercase tracking-wider mb-5">
                    <span>{certificates[activeIndex].issuer}</span>
                    <span className="text-lime-400">{certificates[activeIndex].date}</span>
                  </div>
                  
                  <a 
                    href={certificates[activeIndex].src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full py-3 text-center bg-zinc-900 border border-zinc-700 text-lime-400 hover:bg-lime-400/10 hover:border-lime-400 font-bold uppercase tracking-widest text-xs transition-colors"
                  >
                    View_Certificate
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Carousel controls */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-3">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-sm transition-all ${
                  index === activeIndex 
                    ? "bg-pink-500 w-8 shadow-[0_0_10px_rgba(236,72,153,0.8)]" 
                    : "bg-zinc-800 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}