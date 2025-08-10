
// "use client";

// import React from "react";
// import localFont from "next/font/local";
// import AnimatedHeading from "./AnimatedHeading";
// import { CardCarousel } from "../../components/ui/card-carousel";

// const funnelSansFont = localFont({
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

// export default function CertificatesSection({ funnelSans }) {
//   const images = [
//     { src: "/certificates/previews/NASA Space Apps Challenge.png", alt: "NASA Challenge" },
//     { src: "/certificates/previews/HTML.png", alt: "HTML Certificate" },
//     { src: "/certificates/previews/CSS.png", alt: "CSS Certificate" },
//     { src: "/certificates/previews/Javascript.png", alt: "JavaScript Certificate" },
//     { src: "/certificates/previews/pycertificate1.png", alt: "Python Certificate" },
//   ];

//   return (
//     <section
//       id="certificates"
// className={`${funnelSans.className} mt-12 text-center 
//   bg-gradient-to-br from-blue-300 via-purple-100 to-pink-300
//   dark:from-gray-900 dark:via-gray-800 dark:to-black 
//   py-20 px-6 rounded-xl shadow-xl`}
//     >
//       <AnimatedHeading text="Certificates" />

//       <div className="mt-12 flex justify-center w-full overflow-hidden">
//         <div className="w-full max-w-7xl">
//           <CardCarousel
//             images={images}
//             autoplayDelay={2000}
//             showPagination
//             showNavigation
//           />
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import React, { useState, useEffect } from "react";
import localFont from "next/font/local";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
      src: "/certificates/previews/HTML.png", 
      alt: "HTML Certificate",
      title: "HTML5 Certification",
      issuer: "Web Development Institute",
      date: "2022"
    },
    { 
      id: 3,
      src: "/certificates/previews/CSS.png", 
      alt: "CSS Certificate",
      title: "CSS3 Mastery",
      issuer: "Frontend Masters",
      date: "2022"
    },
    { 
      id: 4,
      src: "/certificates/previews/Javascript.png", 
      alt: "JavaScript Certificate",
      title: "JavaScript Specialist",
      issuer: "JavaScript Academy",
      date: "2023"
    },
    { 
      id: 5,
      src: "/certificates/previews/pycertificate1.png", 
      alt: "Python Certificate",
      title: "Python Programming",
      issuer: "Python Institute",
      date: "2023"
    },
  ];

  const [hoveredCertificate, setHoveredCertificate] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Bubble configurations
  const [bubbles, setBubbles] = useState([]);
  
  useEffect(() => {
    // Create bubbles for background
    const newBubbles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: Math.random() * 120 + 40,
      opacity: Math.random() * 0.1 + 0.05,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      blur: Math.random() * 16 + 4,
      duration: Math.random() * 30 + 20,
      delay: Math.random() * 10,
      xMovement: (Math.random() - 0.5) * 100,
      yMovement: (Math.random() - 0.5) * 80,
    }));
    setBubbles(newBubbles);
  }, []);

  // Auto-rotate certificates
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % certificates.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [certificates.length]);

  return (
    <section
      id="certificates"
      className={`${funnelSans.className} relative overflow-hidden py-20 mt-5 mb-5 rounded-xl px-4 sm:px-6
        bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900`}
    >
      {/* Background bubbles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full bg-white/20 backdrop-blur-md dark:bg-purple-500/10"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: bubble.x,
              top: bubble.y,
              opacity: bubble.opacity,
              filter: `blur(${bubble.blur}px)`,
            }}
            animate={{
              x: [0, bubble.xMovement, 0],
              y: [0, bubble.yMovement, 0],
              opacity: [bubble.opacity * 0.7, bubble.opacity, bubble.opacity * 0.7],
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Glowing background elements */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
        <motion.div 
          className="absolute w-[40rem] h-[40rem] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-[100px] top-[-10%] left-[-10%] dark:from-purple-500 dark:to-indigo-600"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-[50rem] h-[50rem] rounded-full bg-gradient-to-r from-pink-400 to-rose-500 blur-[100px] bottom-[-20%] right-[-10%] dark:from-pink-600 dark:to-rose-700"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-white/10 dark:bg-purple-400/10"
            style={{
              width: Math.random() * 8 + 2,
              height: Math.random() * 8 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 40],
              x: [0, (Math.random() - 0.5) * 40],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 dark:from-purple-400 dark:to-cyan-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Certifications
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Validation of my expertise and commitment to continuous learning
          </motion.p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="group relative rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredCertificate(index)}
              onHoverEnd={() => setHoveredCertificate(null)}
            >
              {/* Glass-morphism card */}
              <div className="h-full backdrop-blur-lg border border-white/30 bg-white/60 dark:bg-gray-900/60 dark:border-gray-700 rounded-2xl overflow-hidden">
                {/* Certificate image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
                </div>
                
                {/* Certificate content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex justify-between text-gray-600 dark:text-gray-300 text-sm mb-3">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                  
                  {/* View button */}
                  <a 
                    href={cert.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full py-2 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    View Certificate
                  </a>
                </div>
                
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl" />
              </div>
              
              {/* Border gradient */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-white/20 group-hover:border-blue-400/50 transition-colors" />
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
              <div className="group relative h-full backdrop-blur-lg border border-white/30 bg-white/60 dark:bg-gray-900/60 dark:border-gray-700 rounded-2xl overflow-hidden p-6">
                {/* Certificate image */}
                <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
                  <Image
                    src={certificates[activeIndex].src}
                    alt={certificates[activeIndex].alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Certificate content */}
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                    {certificates[activeIndex].title}
                  </h3>
                  <div className="flex justify-between text-gray-600 dark:text-gray-300 text-sm mb-4">
                    <span>{certificates[activeIndex].issuer}</span>
                    <span>{certificates[activeIndex].date}</span>
                  </div>
                  
                  {/* View button */}
                  <a 
                    href={certificates[activeIndex].src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full py-2 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Carousel controls */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex 
                    ? "bg-blue-500" 
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={() => setActiveIndex((activeIndex + 1) % certificates.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <button
            onClick={() => setActiveIndex((activeIndex - 1 + certificates.length) % certificates.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Floating certificate indicator */}
      {hoveredCertificate !== null && (
        <motion.div
          className="fixed top-4 right-4 bg-white dark:bg-gray-800 shadow-xl rounded-xl px-4 py-2 z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <span className="font-bold bg-gradient-to-r from-blue-500 to-purple-500 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
            {certificates[hoveredCertificate].title}
          </span>
        </motion.div>
      )}
    </section>
  );
}