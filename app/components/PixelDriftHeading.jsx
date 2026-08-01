"use client";

import { useEffect, useState } from "react";
import PixelDrift from "./PixelDrift";

const srOnly = {
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0,
};

export default function PixelDriftHeading({
  label,
  colors = ["#FFFFFF", "#F9731A", "#FFFFFF"],
  lightColors = ["#18181B", "#F9731A", "#3F3F46"],
  className = "",
}) {
  const [isDark, setIsDark] = useState(false);
  const activeColors = isDark ? colors : lightColors;

  useEffect(() => {
    const root = document.documentElement;
    const syncTheme = () => setIsDark(root.classList.contains("dark"));

    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <h2
      className={`relative mx-auto mb-4 h-16 w-full max-w-[920px] md:h-20 ${className}`}
      aria-label={label}
    >
      <span style={srOnly}>{label}</span>
      <PixelDrift
        text={label}
        colors={activeColors}
        particleSize={10}
        particleCount={50}
        mouseRadius={58}
        mouseForce={28}
        fontSize={86}
        transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
        style={{ pointerEvents: "auto" }}
      />
    </h2>
  );
}
