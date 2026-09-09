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
      
      {/* Infinite Panning Elegant Grid */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
        }}
        animate={{
          x: [0, 40],
          y: [0, 40],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "linear"
        }}
      />

      {/* Calm Ambient Orb 1 - Top Left */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[80px] md:blur-[120px] opacity-70 dark:opacity-40 mix-blend-normal dark:mix-blend-screen bg-indigo-300 dark:bg-blue-800"
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Calm Ambient Orb 2 - Bottom Right */}
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[80px] md:blur-[120px] opacity-60 dark:opacity-40 mix-blend-normal dark:mix-blend-screen bg-emerald-300 dark:bg-teal-800"
        animate={{
          x: [0, -70, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Calm Ambient Orb 3 - Center Flow */}
      <motion.div
        className="absolute top-[20%] left-[20%] w-[70vw] h-[40vw] rounded-full blur-[100px] md:blur-[150px] opacity-50 dark:opacity-30 mix-blend-normal dark:mix-blend-screen bg-fuchsia-300 dark:bg-purple-800"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Giant Slow Drifting Rings */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute rounded-full border border-foreground/5 dark:border-foreground/10"
          style={{
            width: i === 0 ? '60vw' : '80vw',
            height: i === 0 ? '60vw' : '80vw',
          }}
          initial={{
            x: i === 0 ? '-20vw' : '40vw',
            y: i === 0 ? '10vh' : '-20vh',
          }}
          animate={{
            x: i === 0 ? ['-20vw', '10vw', '-20vw'] : ['40vw', '10vw', '40vw'],
            y: i === 0 ? ['10vh', '30vh', '10vh'] : ['-20vh', '0vh', '-20vh'],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 60 + i * 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating Bokeh Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`bokeh-${i}`}
          className="absolute rounded-full blur-md"
          style={{
            width: Math.random() * 40 + 20,
            height: Math.random() * 40 + 20,
            backgroundColor: i % 3 === 0 ? 'var(--primary)' : i % 3 === 1 ? '#3b82f6' : '#a855f7',
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -400 - 200],
            x: [null, Math.random() * 200 - 100],
            opacity: [0, 0.2, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Sharp Micro Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-foreground/30 dark:bg-foreground/50"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * -300 - 100],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Faint, elegant texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
}
