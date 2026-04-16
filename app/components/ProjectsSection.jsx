"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Image from "next/image"; 
import ScrambleText from "./ScrambleText";
import SpotlightCard from "./SpotlightCard";

const items = [
  {
    image: "/images/excel.png",
    title: "Excel Analytics App",
    subtitle: "Upload and visualize Excel data",
    url: "https://github.com/krushal29/ZidioFrontendInternship",
    tech: ["React", "Chart.js", "ExcelJS"]
  },
  {
    image: "/images/km.png",
    title: "KisanMitra",
    subtitle: "Agricultural support platform",
    url: "https://github.com/Krishn2110/Data-Farmers",
    tech: ["React", "MongoDB", "Tailwind"]
  },
  {
    image: "/images/ap.png",
    title: "Appointment System",
    subtitle: "Appointment & Queue Management System",
    url: "https://github.com/Krishn2110/Appointment_system",
    tech: ["React", "MongoDB", "Tailwind", "Capacitor"]
  },
  {
    image: "/images/sac.png",
    title: "SAC website",
    subtitle: "Website for Student Activity Center",
    url: "https://github.com/Krishn2110/Sac_website",
    tech: ["Next js", "MongoDB", "Tailwind"]
  },
  {
    image: "/images/ecom.png",
    title: "E-commerce Website",
    subtitle: "Responsive shopping UI",
    url: "https://github.com/Krishn2110/QwickShop",
    tech: ["React", "Tailwind CSS", "Firebase"]
  },
  {
    image: "/images/pm.png",
    title: "Password Manager",
    subtitle: "Secure full-stack manager",
    url: "https://github.com/Krishn2110/Password_manager",
    tech: ["MongoDB", "Express", "Node.js", "React"]
  },
  {
    image: "/images/tb.png",
    title: "Travel Booking",
    subtitle: "Book trips with Razorpay",
    url: "https://github.com/Krishn2110/TravelBooking",
    tech: ["Next.js", "Tailwind", "Razorpay"]
  },
  {
    image: "/images/chatify.png",
    title: "Chatify",
    subtitle: "Real-time chat with Stream",
    url: "https://github.com/Krishn2110/Chatify",
    tech: ["Next.js", "Clerk", "Stream Chat"]
  },
  {
    image: "/images/bt.png",
    title: "Bitlinks",
    subtitle: "URL shortener & analytics",
    url: "https://github.com/Krishn2110/bitlinks",
    tech: ["Next.js", "MongoDB", "Tailwind"]
  },
];

export default function ProjectsSection() {
  
  return (
    <section
      id="projects"
      className={`relative overflow-hidden py-24 px-4 mt-12 mb-5 rounded-md sm:px-6`}
    >
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
            <ScrambleText text="SYS." /><span className="text-lime-600 dark:text-lime-400"><ScrambleText text="PROJECTS" /></span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Showcasing executed builds & architecture.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="h-full"
            >
              <SpotlightCard className="group relative rounded-2xl h-full flex flex-col transition-all duration-500 border border-zinc-200 dark:border-white/10 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(236,72,153,0.15)] dark:hover:shadow-[0_20px_40px_rgba(236,72,153,0.15)] hover:-translate-y-2 hover:border-pink-500/50 dark:hover:border-pink-500/50" spotColor="rgba(236,72,153,0.15)">
                {/* Project image */}
                <div className="relative h-56 w-full overflow-hidden rounded-t-2xl bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800/50">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider">No visual_data</span>
                    </div>
                  )}
                  
                </div>
                
                {/* Project content */}
                <div className="p-6 flex flex-col flex-1 relative z-10 bg-white/50 dark:bg-transparent">
                  <div className="absolute top-0 right-6 w-px h-full bg-zinc-200/50 dark:bg-zinc-800/50" />
                  <h3 className="text-xl font-display font-bold mb-2 text-zinc-900 dark:text-white group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors uppercase tracking-wide">
                    {project.title}_
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-500 text-sm mb-4 flex-1 font-sans">
                    {project.subtitle}
                  </p>
                  
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-md text-lime-700 dark:text-lime-400 border border-lime-500/20 dark:border-lime-400/30 bg-lime-50 dark:bg-zinc-950 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project links */}
                  <div className="mt-auto flex items-center">
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-300 hover:text-lime-600 dark:hover:text-lime-400 transition-colors bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 hover:border-lime-500 dark:hover:border-lime-400 px-5 py-2.5 rounded-full shadow-sm"
                    >
                      <FaGithub className="text-sm" />
                      <span>View_Source</span>
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}