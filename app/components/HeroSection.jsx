"use client"

import localFont from "next/font/local";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import TextType from '../design/TextType';
import DecayCard from '../design/DecayCard';

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

export default function HeroSection() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
  const newParticles = Array.from({ length: 20 }).map((_, i) => ({
    id: `particle-${i}`,
    width: Math.random() * 8 + 2,
    height: Math.random() * 8 + 2,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    yMovement: (Math.random() - 0.5) * 40,
    xMovement: (Math.random() - 0.5) * 40,
    opacityRange: [0.2, 0.8, 0.2],
    duration: Math.random() * 15 + 10,
  }));

  setParticles(newParticles);
}, []);



  useEffect(() => {
    const move = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Bubble configurations with different properties
  // const bubbles = Array.from({ length: 15 }).map((_, i) => ({
  //   id: i,
  //   size: Math.random() * 120 + 40,
  //   opacity: Math.random() * 0.1 + 0.05,
  //   x: `${Math.random() * 100}%`,
  //   y: `${Math.random() * 100}%`,
  //   blur: Math.random() * 16 + 4,
  //   duration: Math.random() * 30 + 20,
  //   delay: Math.random() * 10,
  //   xMovement: (Math.random() - 0.5) * 100,
  //   yMovement: (Math.random() - 0.5) * 80,
  // }));

  const [bubbles, setBubbles] = useState([]);

useEffect(() => {
  const generateBubbles = () =>
    Array.from({ length: 15 }).map((_, i) => ({
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

  setBubbles(generateBubbles());
}, []);


  // Tech stack floating tags
  const techStack = ["React", "Next.js", "Node", "Python", "TensorFlow"];

  return (
    <section className={`${funnelSans.className} relative overflow-hidden min-h-screen flex flex-col-reverse md:flex-row items-center justify-around px-6 md:px-20 mt-5 mb-5 rounded-xl py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-black`}>
      
      {/* Transparent moving bubbles */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden">
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
      </div> */}

      <div className="absolute inset-0 z-0 overflow-hidden">
  {particles.map((particle) => (
    <motion.div
      key={particle.id}
      className="absolute rounded-full bg-white/10 dark:bg-purple-400/10"
      style={{
        width: particle.width,
        height: particle.height,
        top: particle.top,
        left: particle.left,
      }}
      animate={{
        y: [0, particle.yMovement],
        x: [0, particle.xMovement],
        opacity: particle.opacityRange,
      }}
      transition={{
        duration: particle.duration,
        repeat: Infinity,
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

      {/* Floating micro-interactions */}
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

      {/* Decay Card with glass effect */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mb-12 md:mb-0"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="relative overflow-hidden rounded-2xl border border-white/20 backdrop-blur-lg shadow-xl">
          <DecayCard width={400} height={600} image="./p3.png">
            <motion.div
              className="absolute inset-0 flex items-end p-6"
              animate={{
                backdropFilter: isHovering ? "blur(4px)" : "blur(0px)",
                backgroundColor: isHovering ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.2)",
              }}
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Kislay Rai
              </h2>
            </motion.div>
          </DecayCard>
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full md:w-1/2 space-y-8"
      >
        <div className="space-y-6">
          <TextType
            text={[
              "Hello! I'm Kislay Rai.",
              "A Full-Stack Developer & ML Enthusiast.",
              "Crafting immersive web experiences with modern tools & elegant design."
            ]}
            as="h1"
            className="text-3xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            cursorClassName="bg-blue-400 dark:bg-purple-400"
          />
          <motion.p
            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Creating innovative solutions with cutting-edge technologies
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-wrap gap-4 mt-8"
        >
          <motion.a
            href="/resumee.pdf"
            download
            className="relative overflow-hidden inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-full group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onHoverStart={() => setHoveredElement('resume')}
            onHoverEnd={() => setHoveredElement(null)}
          >
            <span className="relative z-10">Download Resume</span>
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
              initial={{ opacity: 0 }}
            />
          </motion.a>
          
          <motion.a
            href="#contact"
            className="relative overflow-hidden inline-block border-2 border-blue-400/50 text-blue-600 dark:text-blue-300 font-semibold px-8 py-4 rounded-full group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onHoverStart={() => setHoveredElement('contact')}
            onHoverEnd={() => setHoveredElement(null)}
          >
            <span className="relative z-10">Contact Me</span>
            <motion.span 
              className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
              initial={{ opacity: 0 }}
            />
          </motion.a>
        </motion.div>

        {/* Tech stack indicators */}
        
      </motion.div>

      {/* Interactive cursor follower */}
      <motion.div
        className="pointer-events-none absolute w-40 h-40 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl z-0 mix-blend-screen"
        style={{
          top: cursorPos.y - 80,
          left: cursorPos.x - 80,
        }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating skill indicator */}
      {hoveredElement && (
        <motion.div
          className="fixed top-4 right-4 bg-white dark:bg-gray-800 shadow-xl rounded-xl px-4 py-2 z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <span className="font-bold bg-gradient-to-r from-blue-500 to-purple-500 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
            {hoveredElement === 'resume' ? "Download my resume" : "Get in touch"}
          </span>
        </motion.div>
      )}
    </section>
  );
}