"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  duration?: number;
}

export function FadeIn({ children, delay = 0, direction = "up", className = "", duration = 0.5 }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const directionOffset = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
    none: { x: 0, y: 0 },
  };

  const initial = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, ...directionOffset[direction] };
  const animate = shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: shouldReduceMotion ? 0.1 : duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HoverScale({ children, className = "", hoverScale = 1.05, hoverY = -5 }: { children: ReactNode, className?: string, hoverScale?: number, hoverY?: number }) {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      whileHover={{ y: hoverY, scale: hoverScale }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
