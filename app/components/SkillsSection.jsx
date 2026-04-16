"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Magnet from "../design/Magnet";
import ScrambleText from "./ScrambleText";
import SpotlightCard from "./SpotlightCard";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt,
  FaPython, FaCode, FaServer, FaTools, FaBolt, FaDatabase, FaEye, FaRobot
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiCplusplus, 
  SiDart, SiKotlin, SiFlutter, SiFastapi, SiPostman, SiFirebase 
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, category: "Frontend", level: 95 },
  { name: "CSS3", icon: <FaCss3Alt />, category: "Frontend", level: 90 },
  { name: "JavaScript (ES6+)", icon: <FaJs />, category: "Languages", level: 92 },
  { name: "React.js", icon: <FaReact />, category: "Frontend", level: 90 },
  { name: "Next.js", icon: <SiNextdotjs />, category: "Frontend", level: 88 },
  { name: "Tailwind", icon: <SiTailwindcss />, category: "Frontend", level: 93 },
  { name: "Flutter", icon: <SiFlutter />, category: "Frontend", level: 85 },
  { name: "Node.js", icon: <FaNodeJs />, category: "Backend", level: 85 },
  { name: "Express.js", icon: <SiExpress />, category: "Backend", level: 83 },
  { name: "FastAPI", icon: <SiFastapi />, category: "Backend", level: 80 },
  { name: "MongoDB", icon: <SiMongodb />, category: "Databases", level: 80 },
  { name: "SQL", icon: <FaDatabase />, category: "Databases", level: 85 },
  { name: "Firebase", icon: <SiFirebase />, category: "Databases", level: 82 },
  { name: "Python", icon: <FaPython />, category: "Languages", level: 78 },
  { name: "Git", icon: <FaGitAlt />, category: "Tools", level: 92 },
  { name: "Postman", icon: <SiPostman />, category: "Tools", level: 88 },
  { name: "YOLOv8", icon: <FaEye />, category: "Tools", level: 75 },
  { name: "MediaPipe", icon: <FaRobot />, category: "Tools", level: 78 },
  { name: "C++", icon: <SiCplusplus />, category: "Languages", level: 75 },
  { name: "Dart", icon: <SiDart />, category: "Languages", level: 80 },
  { name: "Kotlin", icon: <SiKotlin />, category: "Languages", level: 76 },
];

const skillCategories = [
  { name: "All", icon: <FaCode />, color: "pink-500" },
  { name: "Frontend", icon: <FaCode />, color: "pink-400" },
  { name: "Backend", icon: <FaServer />, color: "fuchsia-500" },
  { name: "Databases", icon: <FaDatabase />, color: "pink-600" },
  { name: "Tools", icon: <FaTools />, color: "zinc-400" },
  { name: "Languages", icon: <FaBolt />, color: "lime-400" }
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredSkills, setFilteredSkills] = useState(skills);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(skills.filter(skill => skill.category === activeCategory));
    }
  }, [activeCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`relative overflow-hidden mt-20 mb-5 rounded-md py-24 px-4 sm:px-6 bg-white dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-800 shadow-sm dark:shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]`}
    >
      {/* Circuit board subtle pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-300 dark:from-zinc-800 via-transparent dark:via-zinc-950 to-transparent dark:to-zinc-950" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mb-4 text-zinc-900 dark:text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <ScrambleText text="SYS." /><span className="text-pink-600 dark:text-pink-500"><ScrambleText text="SKILLS" /></span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-zinc-900 dark:text-zinc-400 max-w-2xl mx-auto font-sans font-medium"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            Executing expertise subroutines.
          </motion.p>
        </motion.div>

        {/* Skill category filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {skillCategories.map((category, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all border ${
                activeCategory === category.name 
                  ? `bg-pink-600 text-white dark:bg-pink-500/10 dark:text-pink-500 border-pink-600 dark:border-pink-500/50 shadow-[0_4px_10px_rgba(236,72,153,0.3)] dark:shadow-[0_0_10px_rgba(236,72,153,0.3)]`
                  : "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-pink-400 dark:hover:border-zinc-600 shadow-sm"
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              <span className={activeCategory === category.name ? "text-white dark:text-pink-400" : ""}>{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill, i) => (
              <Magnet key={skill.name} padding={40} magnetStrength={10}>
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="h-full w-full"
                >
                  <SpotlightCard 
                    className="relative p-6 rounded-2xl transition-all duration-500 overflow-hidden flex flex-col items-center justify-center border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 backdrop-blur-sm text-zinc-900 dark:text-zinc-100 hover:border-pink-500/50 dark:hover:border-pink-500/50 group h-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(236,72,153,0.15)] dark:hover:shadow-[0_8px_30px_rgba(236,72,153,0.1)] hover:-translate-y-2"
                    spotColor="rgba(236,72,153,0.1)"
                  >
                    <div 
                      className="absolute inset-0 z-10" 
                      onMouseEnter={() => setHoveredSkill(i)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      onFocus={() => setHoveredSkill(i)}
                      onBlur={() => setHoveredSkill(null)}
                    />
                    {/* Removed full card background hover tint */}
                    
                    <div className="w-14 h-14 mb-4 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl flex items-center justify-center text-3xl text-pink-500 dark:text-pink-500 group-hover:bg-lime-500/10 dark:group-hover:bg-lime-400/10 group-hover:border-lime-500/30 dark:group-hover:border-lime-400/30 group-hover:text-lime-600 dark:group-hover:text-lime-400 group-hover:shadow-[0_0_15px_rgba(163,230,53,0.3)] dark:group-hover:shadow-[0_0_15px_rgba(163,230,53,0.5)] transition-all duration-300 z-0 pointer-events-none">
                      {skill.icon}
                    </div>
                    <p className="font-bold text-xs uppercase tracking-wider text-center z-0 pointer-events-none text-zinc-900 dark:text-zinc-300 group-hover:text-lime-600 dark:group-hover:text-white transition-colors">{skill.name}</p>
                  </SpotlightCard>
                </motion.div>
              </Magnet>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Floating skill indicator */}
        <AnimatePresence>
          {hoveredSkill !== null && filteredSkills[hoveredSkill] && (
            <motion.div
              className="fixed bottom-6 left-1/2 transform -translate-x-1/2 
                         bg-white/95 dark:bg-zinc-950/90 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(0,0,0,1)] rounded-2xl px-5 py-4 z-50 flex items-center gap-4
                         border border-zinc-200 dark:border-lime-400/50 min-w-[300px]"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
            >
              <div className="w-10 h-10 bg-lime-50 dark:bg-lime-400/20 border border-lime-200 dark:border-lime-400/30 rounded-xl flex items-center justify-center text-lime-600 dark:text-lime-400 text-xl shadow-sm">
                {filteredSkills[hoveredSkill].icon}
              </div>
              <div className="flex-1">
                <span className="font-bold text-zinc-900 dark:text-white block mb-1 uppercase text-xs tracking-wider">
                  {filteredSkills[hoveredSkill].name}_
                </span>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-zinc-200 dark:bg-zinc-800 h-1.5 overflow-hidden rounded-full">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-pink-500 to-lime-500 dark:from-lime-500 dark:to-lime-400 shadow-[0_0_5px_rgba(163,230,53,0.4)] dark:shadow-[0_0_5px_rgba(163,230,53,0.8)]" 
                      initial={{ width: 0 }}
                      animate={{ width: `${filteredSkills[hoveredSkill].level}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                  <span className="text-xs font-bold text-lime-600 dark:text-lime-400 w-8 text-right">
                    {filteredSkills[hoveredSkill].level}%
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}