"use client";

import React from 'react'
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";

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
          icon: <FaEnvelope className="w-4 h-4" />,
          label: "Email_",
        },
        {
          href: "https://github.com/Krishn2110",
          icon: <FaGithub className="w-4 h-4" />,
          label: "GitHub_",
        },
        {
          href: "https://www.linkedin.com/in/kislay-rai-a84834290",
          icon: <FaLinkedin className="w-4 h-4" />,
          label: "LinkedIn_",
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
          <span className="absolute right-full mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all text-xs font-bold font-sans uppercase tracking-widest text-lime-600 dark:text-lime-400 bg-white dark:bg-zinc-950 border border-lime-200 dark:border-lime-400/50 px-2 py-1 rounded-sm shadow-[0_4px_10px_rgba(163,230,53,0.1)] dark:shadow-[0_0_10px_rgba(163,230,53,0.3)] whitespace-nowrap">
            {item.label}
          </span>

          <div className="relative">
            <span className="absolute inset-0 w-full h-full rounded-xl bg-lime-500 dark:bg-lime-500 opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 group-hover:animate-ping pointer-events-none z-0 transition" />
            <div
              className={`relative z-10 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 p-3 rounded-xl shadow-sm dark:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:text-lime-600 dark:group-hover:text-lime-400 group-hover:border-lime-500 dark:group-hover:border-lime-500 group-hover:shadow-[0_4px_10px_rgba(163,230,53,0.2)] dark:group-hover:shadow-[0_0_10px_rgba(163,230,53,0.5)]`}
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
