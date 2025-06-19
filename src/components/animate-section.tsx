"use client";

import { motion } from "framer-motion";

interface AnimateSectionProps {
  className?: string;
  children: React.ReactNode;
}

export function AnimateSection({ className, children }: AnimateSectionProps) {
  return (
    <motion.section
      className={className}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1.5,
        },
      }}
    >
      {children}
    </motion.section>
  );
}
