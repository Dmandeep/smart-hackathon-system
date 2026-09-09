"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none -z-40 overflow-hidden bg-background transition-colors duration-700">
      
      {/* Calm Ambient Orb 1 - Top Left */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[100px] md:blur-[150px] opacity-60 dark:opacity-20 mix-blend-normal dark:mix-blend-screen bg-blue-100 dark:bg-blue-900"
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Calm Ambient Orb 2 - Bottom Right */}
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[100px] md:blur-[150px] opacity-50 dark:opacity-20 mix-blend-normal dark:mix-blend-screen bg-teal-50 dark:bg-teal-900"
        animate={{
          x: [0, -70, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Calm Ambient Orb 3 - Center Flow */}
      <motion.div
        className="absolute top-[20%] left-[20%] w-[70vw] h-[40vw] rounded-full blur-[120px] md:blur-[180px] opacity-40 dark:opacity-10 mix-blend-normal dark:mix-blend-screen bg-purple-100 dark:bg-purple-900"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Faint, elegant texture overlay to prevent banding and add premium feel */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
}
