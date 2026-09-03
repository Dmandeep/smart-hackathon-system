"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, ShieldCheck, Users, Activity, Zap, TerminalSquare, GitBranch, MessageSquare, Award, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { HeroBackground } from "@/components/hero-background";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative z-0 overflow-hidden bg-background">
      
      {/* Premium Landing Page Animation */}
      <HeroBackground />

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 sticky top-0 w-full z-50 bg-background/70 backdrop-blur-2xl border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
            <Code2 className="w-6 h-6 text-primary" />
          </div>
          <span className="font-bold tracking-tight text-2xl font-heading text-foreground">HackVerse</span>
        </div>
        <div className="hidden md:flex items-center gap-10 text-sm font-bold text-foreground/70">
          <Link href="/explore" className="hover:text-primary transition-colors">Explore Events</Link>
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#pipeline" className="hover:text-primary transition-colors">Pipeline</a>
          <Link href="/organizer" className="hover:text-primary transition-colors">Organizer Dashboard</Link>
        </div>
        <div className="flex items-center gap-6">
          <ThemeToggle />
          <Link href="/login" className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20">
            Sign In
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-6 pt-24 pb-32">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-32"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            HackVerse v2.0 is Live
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[1.05] mb-8 font-heading text-foreground">
            The Intelligent OS<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-primary to-cyan-500">
              For Hackathons.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl font-medium leading-relaxed mb-12">
            Automated code forensics, intelligent team matching, and Z-score judge calibration. Built for scale, designed for speed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/explore" className="h-14 px-8 bg-primary text-primary-foreground rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/25">
              Find a Hackathon
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/organizer" className="h-14 px-8 bg-foreground/5 border border-border/50 text-foreground rounded-full font-bold text-lg flex items-center justify-center hover:bg-foreground/10 transition-all">
              Host an Event
            </Link>
          </div>
        </motion.div>

        {/* Live Telemetry Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/50 border border-border/50 rounded-3xl overflow-hidden mb-32 shadow-2xl"
        >
          {[
            { value: "89k+", label: "Active Hackers" },
            { value: "142", label: "Live Events" },
            { value: "99.9%", label: "Plagiarism Caught" },
            { value: "24ms", label: "AST Latency" },
          ].map((stat, i) => (
            <div key={i} className="bg-background p-8 text-center flex flex-col items-center justify-center">
              <div className="text-4xl font-black font-heading text-primary mb-2">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-foreground/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Core Architecture Grid */}
        <div id="features" className="mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-foreground">Unfair Advantages.</h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">We replaced spreadsheets and manual checking with pure mathematical precision and AI.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full mb-32">
          {/* Bento 1: Forensics (Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-8 p-10 rounded-3xl bg-card border border-border/50 shadow-xl relative overflow-hidden group hover:border-semantic-alert/50 transition-colors"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-semantic-alert/10 blur-[80px] rounded-full group-hover:bg-semantic-alert/20 transition-colors" />
            <ShieldCheck className="w-12 h-12 text-semantic-alert mb-6 relative z-10" />
            <h3 className="text-3xl font-bold font-heading mb-4 relative z-10 text-foreground">AI Code Forensics</h3>
            <p className="text-foreground/60 text-lg leading-relaxed max-w-xl relative z-10 mb-8">
              Instantly analyze Git commit timelines and AST structures to flag plagiarized boilerplate projects before judging even begins.
            </p>
            <div className="relative z-10 p-4 rounded-xl bg-muted/50 border border-semantic-alert/30 flex items-center justify-between">
              <div className="font-mono text-sm text-foreground/80">Checking AST similarity...</div>
              <div className="px-3 py-1 rounded bg-semantic-alert/20 text-semantic-alert font-bold text-xs uppercase tracking-wider">94% Clone Detected</div>
            </div>
          </motion.div>

          {/* Bento 2: Matching (Small) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-4 p-10 rounded-3xl bg-card border border-border/50 shadow-xl group hover:border-semantic-success/50 transition-colors relative overflow-hidden flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-semantic-success/10 blur-[80px] rounded-full group-hover:bg-semantic-success/20 transition-colors" />
            <Users className="w-10 h-10 text-semantic-success mb-6 relative z-10" />
            <h3 className="text-2xl font-bold font-heading mb-3 relative z-10 text-foreground">ILP Matchmaking</h3>
            <p className="text-foreground/60 leading-relaxed relative z-10">
              Constraint-optimized formation mathematically ensures perfect skill overlap.
            </p>
          </motion.div>

          {/* Bento 3: Calibration (Medium) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-6 p-10 rounded-3xl bg-card border border-border/50 shadow-xl"
          >
            <Activity className="w-10 h-10 text-cyan-500 mb-6" />
            <h3 className="text-2xl font-bold font-heading mb-3 text-foreground">Z-Score Calibration</h3>
            <p className="text-foreground/60 leading-relaxed">
              Normalize judge behavior mathematically. Eradicate "strict judge" vs "easy judge" bias across different domains.
            </p>
          </motion.div>

          {/* Bento 4: Integrations (Medium) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-6 p-10 rounded-3xl bg-primary/5 border border-primary/20 shadow-xl"
          >
            <div className="flex gap-4 mb-6">
              <GitBranch className="w-10 h-10 text-foreground" />
              <MessageSquare className="w-10 h-10 text-[#5865F2]" />
            </div>
            <h3 className="text-2xl font-bold font-heading mb-3 text-foreground">Webhook Ecosystem</h3>
            <p className="text-foreground/60 leading-relaxed">
              Auto-generate Discord channels for teams, push announcements, and verify identities via GitHub OAuth instantly.
            </p>
          </motion.div>
        </div>

        {/* The Pipeline Section */}
        <div id="pipeline" className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-foreground">The Event Pipeline</h2>
            <p className="text-lg text-foreground/60">How a hackathon flows through HackVerse AI.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <TerminalSquare />, title: "1. Launch", desc: "Deploy the event page and open registrations with custom application forms." },
              { icon: <Users />, title: "2. Form", desc: "Hackers use the ILP matchmaking engine to find perfect teammates." },
              { icon: <ShieldCheck />, title: "3. Audit", desc: "Submissions are instantly scanned for plagiarism and massive AI code dumps." },
              { icon: <Award />, title: "4. Grade", desc: "Judges review projects, and Z-Score math normalizes the final leaderboard." },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-card border border-border/50 rounded-3xl shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center mb-6 text-primary">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold font-heading mb-3 text-foreground">{step.title}</h4>
                <p className="text-foreground/60 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="relative rounded-3xl overflow-hidden bg-foreground p-12 md:p-24 text-center text-background">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold font-heading mb-8">Ready to upgrade?</h2>
            <p className="text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto opacity-80">
              Join 140+ organizers running the fairest, fastest hackathons in the country.
            </p>
            <Link href="/organizer" className="inline-flex h-16 px-10 bg-background text-foreground rounded-full font-bold text-xl items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-2xl">
              Create Your First Event
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Code2 className="w-5 h-5 text-primary" />
            <span className="font-bold font-heading text-lg text-foreground">HackVerse AI</span>
          </div>
          <div className="text-sm text-foreground/50 font-medium">
            © 2026 HackVerse Systems. All rights reserved. Built for scale.
          </div>
        </div>
      </footer>
    </div>
  );
}
