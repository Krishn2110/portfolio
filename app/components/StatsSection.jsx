// "use client";

// import React, {useState, useEffect} from "react";
// import localFont from "next/font/local";
// import AnimatedHeading from "./AnimatedHeading";

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

// export function StatsSection() {
//   const stats = [
//     { value: "5+", label: "Projects Completed" },
//     { value: "2", label: "Years Experience" },
//     { value: "3+", label: "Hackathons Participation" },
//     { value: "∞", label: "Cups of Coffee" }
//   ];

//   return (
//     <section className={`${funnelSans.className} mt-12 text-center 
//         bg-gradient-to-br from-blue-300 via-purple-100 to-pink-300
//         dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
//         py-20 px-4 sm:px-6 rounded-xl shadow-xl`}>
//       <div className="container mx-auto px-6 py-5">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//           {stats.map((stat, index) => (
//             <div key={index} className="p-6 duration-300
//                 backdrop-blur-lg shadow-lg
//                 border border-white/20
//                 bg-white/30 text-gray-800
//                 dark:bg-white/5 dark:text-gray-200 dark:border-white/10
//                 hover:shadow-2xl hover:scale-105 rounded-lg">
//               <div className="text-4xl font-bold mb-2">{stat.value}</div>
//               <div className="text-xl">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import React, { useState, useEffect } from "react";
import localFont from "next/font/local";
import { motion } from "framer-motion";

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

export function StatsSection() {
  const stats = [
    { value: "5+", label: "Projects Completed" },
    { value: "2", label: "Years Experience" },
    { value: "3+", label: "Hackathons Participation" },
    { value: "∞", label: "Cups of Coffee" }
  ];

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

  return (
    <section className={`${funnelSans.className} relative overflow-hidden py-20 px-4 sm:px-6 mt-5 mb-5 rounded-xl 
      bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900`}>

        
      
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
            My Journey in Numbers
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Quantifying my passion and dedication through milestones
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl backdrop-blur-lg shadow-lg border border-white/30
                bg-white/60 dark:bg-gray-900/60
                hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className="text-center">
                <motion.div 
                  className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300,
                    delay: index * 0.15
                  }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-xl font-medium text-gray-800 dark:text-gray-200">{stat.label}</p>
              </div>
              
              {/* Animated progress bar */}
              <motion.div 
                className="mt-4 h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-purple-500 dark:to-indigo-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}