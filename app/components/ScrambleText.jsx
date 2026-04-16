"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const CHARACTERS = "!@#$%^&*()_+-=[]{}|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function ScrambleText({ text, className }) {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let iteration = 0;
    const maxIterations = 15;
    let interval = null;

    clearInterval(interval);

    interval = setInterval(() => {
      setDisplayText((current) => {
        return current
          .split("")
          .map((letter, index) => {
            // Respect spaces
            if (letter === " ") return " ";
            
            // If the letter's index is less than our iteration, show actual letter
            if (index < iteration) {
              return text[index];
            }

            // Otherwise, show a random character
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join("");
      });

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      // Add a fractional iteration to give it a fast snapping feel
      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text, isInView]);

  return (
    <motion.span ref={ref} className={className} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}>
      {displayText}
    </motion.span>
  );
}
