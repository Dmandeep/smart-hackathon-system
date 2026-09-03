"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
      {/* Dynamic Glowing Aurora Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-violet-600/30 blur-[100px] mix-blend-screen"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          x: [0, -150, 0],
          y: [0, 100, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[30%] right-[10%] w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-[120px] mix-blend-screen"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, 50, 0],
          y: [0, 150, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-[-10%] left-[40%] w-[800px] h-[400px] rounded-full bg-primary/20 blur-[150px] mix-blend-screen"
      />

      {/* Floating Glass Polygons / Data Nodes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-24 h-24 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-3xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * (window.innerHeight * 0.8),
            rotate: Math.random() * 360,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -200 - 100],
            x: [null, Math.random() * 100 - 50],
            rotate: [null, Math.random() * 360],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-2 h-2 rounded-full bg-primary/50 shadow-[0_0_10px_var(--primary)]" />
        </motion.div>
      ))}

      {/* Shooting Data Streams (Lasers) */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`laser-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-[300px]"
          initial={{
            x: -300,
            y: Math.random() * (window.innerHeight * 0.6) + 100,
            opacity: 0,
            rotate: 15,
          }}
          animate={{
            x: window.innerWidth + 300,
            y: (Math.random() * (window.innerHeight * 0.6) + 100) - 200,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: Math.random() * 5 + 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid Floor */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[40vh] opacity-20"
        style={{
          backgroundImage: 'linear-gradient(transparent 95%, rgba(255,255,255,0.3) 100%), linear-gradient(90deg, transparent 95%, rgba(255,255,255,0.3) 100%)',
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'bottom center',
          maskImage: 'linear-gradient(to top, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to top, black, transparent)',
        }}
      />
    </div>
  );
}
