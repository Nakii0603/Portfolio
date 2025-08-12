// components/FadeInSection.tsx
"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeInSectionProps {
  children: ReactNode;
  direction?: "left" | "right" | "none";
  delay?: number;
}

export default function FadeInSection({
  children,
  direction = "left",
  delay = 0,
}: FadeInSectionProps) {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
