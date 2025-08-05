"use client";

import React from 'react'
import { motion } from "framer-motion";
 import { FaGithub, FaExternalLinkAlt,  FaEnvelope, FaLinkedin } from "react-icons/fa";

function SocialIconsSidebar() {


  return (
  
<motion.div
  className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 flex flex-col gap-4"
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  {[
    {
      href: "mailto:raikislay1@gmail.com",
      icon: <FaEnvelope className="w-5 h-5" />,
      label: "Email",
      color: "text-red-600",
    },
    {
      href: "https://github.com/Krishn2110",
      icon: <FaGithub className="w-5 h-5" />,
      label: "GitHub",
      color: "text-gray-800 dark:text-white",
    },
    {
      href: "https://www.linkedin.com/in/kislay-rai-a84834290",
      icon: <FaLinkedin className="w-5 h-5" />,
      label: "LinkedIn",
      color: "text-blue-700 dark:text-blue-400",
    },
  ].map((item, index) => (
    <a
      key={index}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center"
      title={item.label}
    >
       
      <span className="absolute right-full mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all text-sm font-medium text-white bg-black/80 px-2 py-1 rounded shadow-lg">
        {item.label}
      </span>

      <div className="relative">
        
        <span className="absolute inset-0 w-full h-full rounded-full animate-ping bg-pink-400 opacity-0 group-hover:opacity-30 pointer-events-none z-0 transition" />
        <div
          className={`relative z-10 bg-white dark:bg-gray-800 ${item.color} p-3 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-opacity-90 hover:translate-x-[-4px]`}
        >
          {item.icon}
        </div>
      </div>
    </a>
  ))}
</motion.div>
  )
}

export default SocialIconsSidebar

