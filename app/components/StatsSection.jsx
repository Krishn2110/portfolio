"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";

export function StatsSection() {
const stats = [
  { value: "5+", label: "Built Projects" },
  { value: "2", label: "Dev Journey (Yrs)" },
  { value: "3+", label: "Code Battles" },
  { value: "∞", label: "Fuel Consumed" }
];

  return (
    <section className={`relative overflow-hidden py-24 px-4 sm:px-6 mt-12 mb-5 rounded-md bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-[inset_0_0_50px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]`}>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
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
            <ScrambleText text="SYS." /><span className="text-pink-600 dark:text-pink-500"><ScrambleText text="STATS" /></span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-zinc-900 dark:text-zinc-400 max-w-2xl mx-auto font-sans font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            System diagnostic & diagnostic logs.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 group hover:border-lime-500 dark:hover:border-lime-400/50 shadow-sm hover:shadow-[0_8px_30px_rgba(163,230,53,0.15)] dark:hover:shadow-none transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute top-0 right-0 p-2 opacity-10 text-6xl font-bold font-display text-zinc-900 dark:text-white">
                0{index + 1}
              </div>
              <div className="text-center flex-1 flex flex-col justify-center relative z-10">
                <motion.div 
                  className="text-5xl md:text-6xl font-display font-bold mb-4 text-lime-600 dark:text-lime-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 drop-shadow-[0_0_15px_rgba(163,230,53,0.2)] dark:drop-shadow-[0_0_15px_rgba(163,230,53,0.5)] group-hover:drop-shadow-[0_0_15px_rgba(236,72,153,0.3)] dark:group-hover:drop-shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-colors"
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
                <p className="text-xs uppercase tracking-widest border-t border-zinc-200 dark:border-zinc-800 pt-4 font-bold text-center text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}