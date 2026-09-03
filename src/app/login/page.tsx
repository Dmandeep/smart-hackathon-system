"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Github, Mail, ArrowRight, Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [authType, setAuthType] = useState<"login" | "register">("login");

  const handleDemoLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate network delay for premium feel
    setTimeout(async () => {
      await signIn("credentials", {
        username: email.split("@")[0] || "Demo_User",
        password: "password",
        callbackUrl: "/organizer",
      });
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 relative z-0 overflow-hidden font-sans">
      
      {/* Premium Cinematic Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10 mix-blend-multiply dark:mix-blend-screen opacity-40">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-violet-600/20 blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse" style={{ animationDuration: '14s' }} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[420px]"
      >
        {/* Brand Header */}
        <div className="flex flex-col items-center mb-8">
          <Link href="/" className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mb-6 shadow-inner hover:scale-105 transition-transform cursor-pointer">
            <Code2 className="w-7 h-7 text-primary" />
          </Link>
          <h1 className="text-3xl font-bold font-heading text-foreground mb-2 text-center tracking-tight">
            {authType === "login" ? "Welcome back" : "Create an account"}
          </h1>
          <p className="text-foreground/60 text-sm text-center">
            {authType === "login" ? "Enter your details to access the terminal." : "Deploy your first hackathon in seconds."}
          </p>
        </div>

        {/* Auth Card */}
        <div className="bg-card/80 backdrop-blur-2xl border border-border/50 shadow-2xl rounded-3xl p-8">
          
          {/* SSO Providers */}
          <div className="flex flex-col gap-3 mb-6">
            <button 
              type="button"
              onClick={() => handleDemoLogin({ preventDefault: () => {} } as any)}
              className="w-full h-12 bg-foreground text-background font-bold text-sm rounded-xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
            >
              <Github className="w-5 h-5" />
              Continue with GitHub
            </button>
            <button 
              type="button"
              onClick={() => handleDemoLogin({ preventDefault: () => {} } as any)}
              className="w-full h-12 bg-background border border-border/50 text-foreground font-bold text-sm rounded-xl flex items-center justify-center gap-3 hover:bg-muted/50 active:scale-[0.98] transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continue with Google
            </button>
          </div>

          <div className="relative flex items-center py-2 mb-6">
            <div className="flex-grow border-t border-border/50"></div>
            <span className="flex-shrink-0 mx-4 text-xs font-semibold text-foreground/40 uppercase tracking-wider">Or continue with email</span>
            <div className="flex-grow border-t border-border/50"></div>
          </div>

          {/* Email Form */}
          <form className="flex flex-col gap-5" onSubmit={handleDemoLogin}>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-foreground/80 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-12 pl-12 pr-4 rounded-xl bg-background border border-border/50 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                  placeholder="hacker@university.edu" 
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full h-12 mt-2 bg-primary text-primary-foreground font-bold text-sm rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20 disabled:opacity-70 disabled:hover:scale-100"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                <>
                  Authenticate
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer Toggle */}
        <div className="mt-8 text-center text-sm text-foreground/60">
          {authType === "login" ? "Don't have an account? " : "Already have an account? "}
          <button 
            onClick={() => setAuthType(authType === "login" ? "register" : "login")}
            className="font-bold text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            {authType === "login" ? "Sign up" : "Sign in"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
