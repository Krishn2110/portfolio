"use client"

import localFont from "next/font/local";
import { motion } from "framer-motion";
import { useState , useEffect} from "react";
import Image from "next/image";
import TextType from '../design/TextType';
import DecayCard from '../design/DecayCard';

const funnelSans = localFont({
  src: [
    // {
    //   path: "fonts/funnel-sans/FunnelSans-SemiBold.ttf",
    //   weight: "700",
    //   style: "normal",
    // },
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

useEffect(() => {
    const move = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);


  return (
    
        <section className={`${funnelSans.className} relative overflow-hidden min-h-screen flex flex-col-reverse md:flex-row items-center rounded-2xl justify-around px-6 md:px-20 py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white`}>

<DecayCard width={400} height={600} image="./profile.jpg">
  <h2>Kislay Rai</h2>
</DecayCard>

  {/* Background & cursor-following bubbles remain same */}
  <motion.div className="absolute w-96 h-96 bg-pink-300 rounded-full opacity-20 blur-3xl top-[-10%] left-[-10%] z-0"
    animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0] }}
    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div className="absolute w-72 h-72 bg-blue-300 rounded-full opacity-20 blur-3xl bottom-[-10%] right-[-10%] z-0"
    animate={{ x: [0, -30, 30, 0], y: [0, 20, -20, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div className="absolute w-60 h-60 bg-purple-300 rounded-full opacity-20 blur-3xl top-[20%] right-[10%] z-0"
    animate={{ x: [0, 25, -25, 0], y: [0, 15, -15, 0] }}
    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="pointer-events-none absolute w-40 h-40 rounded-full bg-white/10 blur-2xl z-0"
    style={{
      top: cursorPos.y - 80,
      left: cursorPos.x - 80,
    }}
    animate={{ x: 0, y: 0 }}
    transition={{ type: "spring", damping: 20, stiffness: 100 }}
  />


  {/* Text Content on Right */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="relative z-10 w-full md:w-1/2 space-y-6"
  >
<div className="space-y-6">
  <TextType
    text={[
      "Hello! I'm Kislay Rai.",
      "A Full-Stack Developer & ML Enthusiast.",
      "Crafting immersive web experiences with modern tools & elegant design."
    ]}
    as="h1"
    className="text-6xl font-extrabold leading-tight"
    typingSpeed={75}
    pauseDuration={1500}
    showCursor={true}
    cursorCharacter="|"
  />
</div>

<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 1.4, duration: 0.8 }}
  className="mt-6"
>
  <a
    href="/resumee.pdf"
    download
    className="inline-block bg-white text-pink-600 font-semibold px-6 py-3 rounded-full hover:bg-pink-100 transition hover:scale-105"
  >
    Download Resume
  </a>
</motion.div>

  </motion.div>
</section>
  );
}
