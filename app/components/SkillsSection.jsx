"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Magnet from "../design/Magnet";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt,
  FaPython, FaDatabase, FaServer, FaCode, FaTools, FaBolt
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiCplusplus } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, category: "Frontend", level: 95 },
  { name: "CSS3", icon: <FaCss3Alt />, category: "Frontend", level: 90 },
  { name: "JavaScript", icon: <FaJs />, category: "Frontend", level: 92 },
  { name: "React.js", icon: <FaReact />, category: "Frontend", level: 90 },
  { name: "Next.js", icon: <SiNextdotjs />, category: "Frontend", level: 88 },
  { name: "Tailwind", icon: <SiTailwindcss />, category: "Frontend", level: 93 },
  { name: "Node.js", icon: <FaNodeJs />, category: "Backend", level: 85 },
  { name: "Express.js", icon: <SiExpress />, category: "Backend", level: 83 },
  { name: "MongoDB", icon: <SiMongodb />, category: "Backend", level: 80 },
  { name: "Python", icon: <FaPython />, category: "Languages", level: 78 },
  { name: "Git & GitHub", icon: <FaGitAlt />, category: "Tools", level: 92 },
  { name: "C++", icon: <SiCplusplus />, category: "Languages", level: 75 },
];

const skillCategories = [
  { name: "All", icon: <FaCode />, color: "from-cyan-500 to-blue-600" },
  { name: "Frontend", icon: <FaCode />, color: "from-cyan-400 to-blue-500" },
  { name: "Backend", icon: <FaServer />, color: "from-purple-400 to-indigo-500" },
  { name: "Tools", icon: <FaTools />, color: "from-pink-400 to-rose-500" },
  { name: "Languages", icon: <FaBolt />, color: "from-amber-400 to-orange-500" }
];

export default function SkillsSection({ funnelSans }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredSkills, setFilteredSkills] = useState(skills);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Particle effect for background
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    // Create particles for background
    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      size: Math.random() * 20 + 5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 10
    }));
    setParticles(newParticles);
    
    // Filter skills when category changes
    if (activeCategory === "All") {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(skills.filter(skill => skill.category === activeCategory));
    }
  }, [activeCategory]);

  // Intersection Observer for animations
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
      className={`${funnelSans.className} relative overflow-hidden mt-5 mb-5 rounded-3xl py-20 px-4 sm:px-6`}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 dark:from-purple-500/20 dark:to-indigo-500/20"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 30],
              x: [0, (Math.random() - 0.5) * 30],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Glowing blob background */}
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
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-purple-400 dark:to-cyan-400"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            Technologies I've mastered and love working with
          </motion.p>
        </motion.div>

        {/* Skill category filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {skillCategories.map((category, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category.name 
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : "bg-white/80 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              <span>{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill, i) => (
              <Magnet key={i} padding={80} magnetStrength={30}>
                <motion.div
                  className={`
                    relative p-5 rounded-2xl transition-all duration-300
                    backdrop-blur-lg shadow-lg overflow-hidden
                    border border-white/30
                    bg-white/70 dark:bg-gray-900/70
                    text-gray-900 dark:text-white
                    hover:shadow-xl
                  `}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  onHoverStart={() => setHoveredSkill(i)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  {/* Hover effect */}
                  {hoveredSkill === i && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 dark:from-purple-500/10 dark:to-indigo-600/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* <div className="relative z-10 flex flex-col  items-center">
                    <div className="flex justify-center mb-4">
                     
                      <div className="w-10 h-10 sm:w-12 sm:mt-6 sm:h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-purple-500 dark:to-indigo-600 flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl">
                       {skill.icon}
                          </div>
                    </div>
                    <p className="font-bold text-center text-lg mb-2">{skill.name}</p>
                    </div> */}

                    <div className="relative z-10 flex flex-col items-center pt-6 sm:pt-0">
  <div className="flex justify-center mb-4">
    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-purple-500 dark:to-indigo-600 flex items-center justify-center text-white text-2xl">
      {skill.icon}
    </div>
  </div>
  <p className="font-bold text-center text-lg mb-2">{skill.name}</p>
</div>

                  
                  {/* Category badge */}
                  <div className="absolute top-3 right-3 bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-1 text-xs font-medium">
                    {skill.category}
                  </div>
                </motion.div>
              </Magnet>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Floating skill indicator */}
        {/* <AnimatePresence>
          {hoveredSkill !== null && (
            <motion.div
              className="fixed top-4 right-4 bg-white dark:bg-gray-800 shadow-xl rounded-xl px-4 py-3 z-20 flex items-center gap-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            > */}

            <AnimatePresence>
  {hoveredSkill !== null && (
    <motion.div
      className="fixed top-auto bottom-4 left-1/2 transform -translate-x-1/2 sm:top-4 sm:bottom-auto sm:left-auto sm:right-4 sm:translate-x-0 
                 bg-white dark:bg-gray-800 shadow-xl rounded-xl px-3 py-2 sm:px-4 sm:py-3 z-20 flex items-center gap-2 sm:gap-3
                 max-w-[90%] sm:max-w-xs text-sm sm:text-base"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >

              <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-purple-500 dark:to-indigo-600 flex items-center justify-center text-white">
                {filteredSkills[hoveredSkill].icon}
              </div>
              <div>
                <span className="font-bold text-gray-900 dark:text-white">
                  {filteredSkills[hoveredSkill].name}
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-gray-300 dark:bg-gray-600 rounded-full h-1.5">
                    <div 
                      className="h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-purple-500 dark:to-indigo-600" 
                      style={{ width: `${filteredSkills[hoveredSkill].level}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
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