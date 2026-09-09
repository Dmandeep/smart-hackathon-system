"use client";

import { motion } from "framer-motion";
import React from "react";

export function StaggerContainer({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        show: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        },
      }}
    >
      {children}
    </motion.div>
  );
}
