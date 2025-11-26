"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
    none: { y: 0, x: 0 },
  };

  const offset = directions[direction];

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, ...offset }}
      animate={
        isVisible
          ? { opacity: 1, y: 0, x: 0 }
          : { opacity: 0, ...offset }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
