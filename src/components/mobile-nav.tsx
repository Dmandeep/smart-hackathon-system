"use client";

import { useState } from "react";
import { Menu, X, LayoutDashboard, Trophy, Users, ShieldCheck, Settings, LogOut, Code2 } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(true)}
        className="p-2 bg-foreground/5 rounded-xl border border-border/50 text-foreground"
      >
        <Menu className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
            />
            
            {/* Sidebar Slide-in */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 left-0 w-3/4 max-w-sm bg-card border-r border-border/50 shadow-2xl z-[101] flex flex-col"
            >
              <div className="h-20 flex items-center justify-between px-6 border-b border-border/50">
                <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                  <div className="w-8 h-8 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-bold font-heading text-lg tracking-tight text-foreground">HackVerse</span>
                </Link>
                <button onClick={() => setIsOpen(false)} className="p-2 text-foreground/50 hover:text-foreground bg-muted rounded-full">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1 py-8 px-4 space-y-2 overflow-y-auto">
                <div className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-4 px-3">
                  Platform
                </div>
                <Link href="/organizer" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-3 py-4 rounded-xl hover:bg-muted text-sm font-medium text-foreground">
                  <LayoutDashboard className="w-5 h-5 text-foreground/60" />
                  Dashboard
                </Link>
                <Link href="/organizer/hackathons" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-3 py-4 rounded-xl hover:bg-muted text-sm font-medium text-foreground">
                  <Trophy className="w-5 h-5 text-foreground/60" />
                  Hackathons
                </Link>
                <Link href="/organizer/participants" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-3 py-4 rounded-xl hover:bg-muted text-sm font-medium text-foreground">
                  <Users className="w-5 h-5 text-foreground/60" />
                  Participants
                </Link>
                <Link href="/organizer/forensics" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-3 py-4 rounded-xl hover:bg-semantic-alert/10 text-sm font-medium text-semantic-alert">
                  <ShieldCheck className="w-5 h-5" />
                  Code Forensics
                </Link>
              </div>

              <div className="p-6 border-t border-border/50 space-y-2">
                <Link href="/settings" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-3 py-4 rounded-xl hover:bg-muted text-sm font-medium text-foreground">
                  <Settings className="w-5 h-5 text-foreground/60" />
                  Settings
                </Link>
                <Link href="/api/auth/signout" className="w-full flex items-center gap-3 px-3 py-4 rounded-xl hover:bg-red-500/10 text-red-500 text-sm font-medium">
                  <LogOut className="w-5 h-5" />
                  Log out
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
