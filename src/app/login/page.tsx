"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      username,
      password: "password",
      callbackUrl: "/organizer",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent p-4 relative z-0 overflow-hidden">
      
      {/* Cinematic Glowing Orb in Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[40vw] h-[80vw] md:h-[40vw] rounded-full bg-primary/10 blur-[120px] pointer-events-none -z-10 animate-pulse mix-blend-screen" style={{ animationDuration: '6s' }} />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-md bg-card/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 rounded-3xl p-10 flex flex-col items-center"
      >
        <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
          <Code2 className="w-8 h-8 text-primary" />
        </div>
        
        <h1 className="text-3xl font-bold font-heading mb-2 text-center">System Login</h1>
        <p className="text-foreground/60 text-sm mb-10 text-center">Enter your identity to proceed</p>

        <form className="w-full flex flex-col gap-6" onSubmit={handleLogin}>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground/80">Demo Identity</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all" 
              placeholder="e.g. hackathon_judge" 
            />
          </div>
          <button type="submit" className="w-full h-12 bg-primary text-primary-foreground font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20">
            Authenticate
          </button>
        </form>
      </motion.div>
    </div>
  );
}
