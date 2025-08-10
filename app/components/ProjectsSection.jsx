

// "use client";

// import React, {useState, useEffect} from "react";
// import localFont from "next/font/local";
// import AnimatedHeading from "./AnimatedHeading";
// import { FaGithub } from "react-icons/fa";
// import ChromaGrid from "../design/ChromaGrid";

// // Load funnelSans font
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

// // Project items for ChromaGrid
// const items = [
//   {
//     image: "/images/excel.png",
//     title: "Excel Analytics App",
//     subtitle: "Upload and visualize Excel data",
//     borderColor: "#3B82F6",
//     gradient: "linear-gradient(145deg, #3B82F6, #000)",
//     url: "https://github.com/krushal29/ZidioFrontendInternship",
//     tech: ["React", "Chart.js", "ExcelJS"]
//   },
//   {
//     image: "/images/ecom.png",
//     title: "E-commerce Website",
//     subtitle: "Responsive shopping UI",
//     borderColor: "#10B981",
//     gradient: "linear-gradient(180deg, #10B981, #000)",
//     url: "https://github.com/Krishn2110/twitter",
//     tech: ["React", "Tailwind CSS", "Firebase"]
//   },
//   {
//     image: "/images/pm.png",
//     title: "Password Manager",
//     subtitle: "Secure full-stack manager",
//     borderColor: "#EC4899",
//     gradient: "linear-gradient(145deg, #EC4899, #000)",
//     url: "https://github.com/Krishn2110/Password_manager",
//     tech: ["MongoDB", "Express", "Node.js", "React"]
//   },
//   {
//     image: "/images/tb.png",
//     title: "Travel Booking",
//     subtitle: "Book trips with Razorpay",
//     borderColor: "#8B5CF6",
//     gradient: "linear-gradient(145deg, #8B5CF6, #000)",
//     url: "https://github.com/Krishn2110/TravelBooking",
//     tech: ["Next.js", "Tailwind", "Razorpay"]
//   },
//   {
//     image: "/images/chatify.png",
//     title: "Chatify",
//     subtitle: "Real-time chat with Stream",
//     borderColor: "#F59E0B",
//     gradient: "linear-gradient(145deg, #F59E0B, #000)",
//     url: "https://github.com/Krishn2110/Chatify",
//     tech: ["Next.js", "Clerk", "Stream Chat"]
//   },
//   {
//     image: "/images/bt.png",
//     title: "Bitlinks",
//     subtitle: "URL shortener & analytics",
//     borderColor: "#EF4444",
//     gradient: "linear-gradient(145deg, #EF4444, #000)",
//     url: "https://github.com/Krishn2110/bitlinks",
//     tech: ["Next.js", "MongoDB", "Tailwind"]
//   }
// ];

// function ProjectsSection() {

//   const [radius, setRadius] = useState(250);

//   useEffect(() => {
//     // Runs only on the client
//     const updateRadius = () => {
//       const width = window.innerWidth;
//       setRadius(width < 640 ? 120 : 250);
//     };

//     updateRadius(); // Set on initial render
//     window.addEventListener("resize", updateRadius); // Optional: respond to resize

//     return () => window.removeEventListener("resize", updateRadius);
//   }, []);


  
//   return (
//     <section
//       id="projects"
//       className={`${funnelSans.className} mt-12 text-center 
//         bg-gradient-to-br from-blue-300 via-purple-100 to-pink-300
//         dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
//         py-20 px-4 sm:px-6 rounded-xl shadow-xl`}
//     >
//       <AnimatedHeading text="Projects" />

      

//       <div className="relative w-full max-w-7xl mx-auto min-h-[400px] sm:min-h-[600px] lg:min-h-[700px]">
//         <ChromaGrid
//           items={items}
//           radius={radius}
//           damping={0.45}
//           fadeOut={0.6}
//           ease="power3.out"
//         />
//       </div>
//     </section>
//   );
// }

// export default ProjectsSection;



"use client";

import React, { useState, useEffect } from "react";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image"; // Added Next.js Image component

// Load funnelSans font
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

// Project items
const items = [
  {
    image: "/images/excel.png",
    title: "Excel Analytics App",
    subtitle: "Upload and visualize Excel data",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/krushal29/ZidioFrontendInternship",
    tech: ["React", "Chart.js", "ExcelJS"]
  },
  {
    image: "/images/ecom.png",
    title: "E-commerce Website",
    subtitle: "Responsive shopping UI",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Krishn2110/QwickShop",
    tech: ["React", "Tailwind CSS", "Firebase"]
  },
  {
    image: "/images/pm.png",
    title: "Password Manager",
    subtitle: "Secure full-stack manager",
    borderColor: "#EC4899",
    gradient: "linear-gradient(145deg, #EC4899, #000)",
    url: "https://github.com/Krishn2110/Password_manager",
    tech: ["MongoDB", "Express", "Node.js", "React"]
  },
  {
    image: "/images/tb.png",
    title: "Travel Booking",
    subtitle: "Book trips with Razorpay",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #8B5CF6, #000)",
    url: "https://github.com/Krishn2110/TravelBooking",
    tech: ["Next.js", "Tailwind", "Razorpay"]
  },
  {
    image: "/images/chatify.png",
    title: "Chatify",
    subtitle: "Real-time chat with Stream",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(145deg, #F59E0B, #000)",
    url: "https://github.com/Krishn2110/Chatify",
    tech: ["Next.js", "Clerk", "Stream Chat"]
  },
  {
    image: "/images/bt.png",
    title: "Bitlinks",
    subtitle: "URL shortener & analytics",
    borderColor: "#EF4444",
    gradient: "linear-gradient(145deg, #EF4444, #000)",
    url: "https://github.com/Krishn2110/bitlinks",
    tech: ["Next.js", "MongoDB", "Tailwind"]
  }
];

function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);
  
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
    <section
      id="projects"
      className={`${funnelSans.className} relative overflow-hidden py-20 px-4 mt-5 mb-5 rounded-xl sm:px-6
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
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            A showcase of my technical expertise and creative solutions
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((project, index) => (
            <motion.div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Glass-morphism card */}
              <div className="h-full backdrop-blur-lg border border-white/30 bg-white/60 dark:bg-gray-900/60 dark:border-gray-700 rounded-2xl overflow-hidden">
                {/* Project image - FIXED TO USE ACTUAL IMAGE */}
                <div className="relative h-48 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">No image</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
                  
                  {/* Tech stack badges */}
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-blue-500/10 backdrop-blur-sm text-blue-700 dark:text-blue-300 border border-blue-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.subtitle}
                  </p>
                  
                  {/* Project links */}
                  <div className="flex justify-between">
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      <FaGithub />
                      <span>GitHub</span>
                    </a>
                    
                  </div>
                </div>
                
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl" />
              </div>
              
              {/* Border gradient */}
              <div 
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 0 2px ${project.borderColor}`
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Floating project indicator */}
      {hoveredProject !== null && (
        <motion.div
          className="fixed top-4 right-4 bg-white dark:bg-gray-800 shadow-xl rounded-xl px-4 py-2 z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <span className="font-bold bg-gradient-to-r from-blue-500 to-purple-500 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
            {items[hoveredProject].title}
          </span>
        </motion.div>
      )}
    </section>
  );
}

export default ProjectsSection;