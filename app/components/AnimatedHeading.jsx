"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function AnimatedHeading({ text }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const letterVariants = {
    hiddenLeft: { x: -40, opacity: 0 },
    hiddenRight: { x: 40, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <h2 ref={ref} className="text-5xl font-bold mb-6 text-blue-600 flex justify-center space-x-1">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
          animate={controls}
          variants={letterVariants}
        >
          {char}
        </motion.span>
      ))}
    </h2>
  );
}
