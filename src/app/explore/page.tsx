"use client";

import { motion } from "framer-motion";
import { Code2, MapPin, Calendar, Users, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MOCK_HACKATHONS = [
  {
    id: "sih-2026",
    name: "Smart India Hackathon 2026",
    organizer: "Govt. of India (MoE)",
    location: "National (Pan-India)",
    state: "National",
    date: "August 2026",
    prize: "₹1,00,000",
    tags: ["Hardware", "Software", "AI"],
    image: "bg-gradient-to-br from-orange-500 via-white to-green-500",
    participants: 12000,
  },
  {
    id: "jntu-k-hack",
    name: "Def-Tech Hackathon",
    organizer: "JNTU Kakinada",
    location: "Kakinada, AP",
    state: "Andhra Pradesh",
    date: "September 24, 2026",
    prize: "₹50,000",
    tags: ["Cybersecurity", "Blockchain"],
    image: "bg-gradient-to-br from-blue-900 to-slate-800",
    participants: 800,
  },
  {
    id: "vit-ap-web3",
    name: "Vellore Tech Fest: Web3",
    organizer: "VIT-AP University",
    location: "Amaravati, AP",
    state: "Andhra Pradesh",
    date: "October 12, 2026",
    prize: "₹75,000",
    tags: ["Web3", "Ethereum", "Solidity"],
    image: "bg-gradient-to-br from-violet-600 to-indigo-900",
    participants: 1500,
  },
  {
    id: "srm-ai-sprint",
    name: "SRM AI Innovation Sprint",
    organizer: "SRM University AP",
    location: "Mangalagiri, AP",
    state: "Andhra Pradesh",
    date: "November 05, 2026",
    prize: "₹1,50,000",
    tags: ["Generative AI", "LLMs"],
    image: "bg-gradient-to-br from-emerald-500 to-teal-900",
    participants: 2200,
  },
  {
    id: "t-hub-hyd",
    name: "T-Hub Startup Hackathon",
    organizer: "T-Hub",
    location: "Hyderabad, TS",
    state: "Telangana",
    date: "December 01, 2026",
    prize: "₹5,00,000",
    tags: ["SaaS", "FinTech"],
    image: "bg-gradient-to-br from-rose-500 to-red-900",
    participants: 3500,
  },
  {
    id: "gitam-vizag",
    name: "GITAM FinTech Ideathon",
    organizer: "GITAM University",
    location: "Visakhapatnam, AP",
    state: "Andhra Pradesh",
    date: "January 15, 2027",
    prize: "₹40,000",
    tags: ["Finance", "Banking APIs"],
    image: "bg-gradient-to-br from-cyan-500 to-blue-800",
    participants: 600,
  },
  {
    id: "iit-b-techfest",
    name: "Techfest Hackathon",
    organizer: "IIT Bombay",
    location: "Mumbai, MH",
    state: "Maharashtra",
    date: "December 27, 2026",
    prize: "₹5,00,000",
    tags: ["Robotics", "AI", "Core Tech"],
    image: "bg-gradient-to-br from-amber-500 to-orange-900",
    participants: 4000,
  },
  {
    id: "nitk-surathkal",
    name: "Incident Hack",
    organizer: "NITK Surathkal",
    location: "Mangaluru, KA",
    state: "Karnataka",
    date: "March 02, 2027",
    prize: "₹1,20,000",
    tags: ["Open Source", "Cloud"],
    image: "bg-gradient-to-br from-blue-400 to-indigo-600",
    participants: 1200,
  },
  {
    id: "dtu-delhi",
    name: "Vihaan Hackathon",
    organizer: "Delhi Technological University",
    location: "New Delhi, DL",
    state: "Delhi",
    date: "February 14, 2027",
    prize: "₹80,000",
    tags: ["Women in Tech", "EdTech"],
    image: "bg-gradient-to-br from-pink-500 to-rose-900",
    participants: 900,
  },
];

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeState, setActiveState] = useState("All");
  const [hackathons, setHackathons] = useState(MOCK_HACKATHONS);
  const [isSyncing, setIsSyncing] = useState(true);
  const [justSynced, setJustSynced] = useState(false);

  // Simulate Automated Real-Time Syncing from Global Database
  useEffect(() => {
    const timer = setTimeout(() => {
      const newLiveHackathon = {
        id: "live-ai-sync-2027",
        name: "Global Web3 Sync Hack",
        organizer: "Automated Feed",
        location: "Virtual (Global)",
        state: "National",
        date: "Just Announced",
        prize: "₹10,00,000",
        tags: ["DeFi", "AI Agents", "Solana"],
        image: "bg-gradient-to-br from-fuchsia-600 to-purple-900",
        participants: 50,
      };
      
      setHackathons(prev => [newLiveHackathon, ...prev]);
      setIsSyncing(false);
      setJustSynced(true);
      
      setTimeout(() => setJustSynced(false), 5000);
    }, 4500); // Trigger after 4.5 seconds

    return () => clearTimeout(timer);
  }, []);

  const filteredHackathons = hackathons.filter((h) => {
    const matchesSearch = h.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          h.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          h.tags.join("").toLowerCase().includes(searchQuery.toLowerCase());
    const matchesState = activeState === "All" || h.state === activeState;
    return matchesSearch && matchesState;
  });

  return (
    <div className="min-h-screen text-foreground font-sans relative z-0 overflow-hidden pb-24 bg-background">
      
      {/* Background Lighting */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 opacity-30 mix-blend-multiply dark:mix-blend-screen">
        <div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[80vw] h-[80vw] rounded-full bg-primary/20 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 sticky top-0 w-full z-50 bg-background/80 backdrop-blur-2xl border-b border-border/50">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
            <Code2 className="w-6 h-6 text-primary" />
          </div>
          <span className="font-bold tracking-tight text-xl font-heading text-foreground">HackVerse</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/organizer" className="px-6 py-2.5 rounded-full border border-border hover:bg-muted font-bold text-sm transition-all text-foreground">
            Dashboard
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-16">
        
        {/* Header Section */}
        <div className="mb-16 relative">
          
          {/* Live Sync Indicator */}
          <div className="absolute top-0 right-0 hidden md:flex items-center gap-2 px-4 py-2 bg-card border border-border/50 rounded-full shadow-sm">
            {isSyncing ? (
              <>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs font-bold text-foreground/60 tracking-wider uppercase">Auto-Syncing Feeds...</span>
              </>
            ) : justSynced ? (
              <>
                <span className="w-2 h-2 rounded-full bg-semantic-success"></span>
                <span className="text-xs font-bold text-semantic-success tracking-wider uppercase">Database Updated</span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-foreground/20"></span>
                <span className="text-xs font-bold text-foreground/40 tracking-wider uppercase">Up to date</span>
              </>
            )}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter mb-6 text-foreground">
            Find your next <br /> <span className="text-primary">breakthrough.</span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl leading-relaxed">
            Discover the most prestigious hackathons across India. From Smart India Hackathon to exclusive university tech-fests in Andhra Pradesh and beyond.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 relative z-20">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <input 
              type="text" 
              placeholder="Search hackathons, universities, or tech stacks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 pl-12 pr-4 bg-card border border-border/50 rounded-2xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-lg shadow-sm"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            {["All", "National", "Andhra Pradesh", "Telangana", "Maharashtra", "Karnataka", "Delhi"].map((state) => (
              <button 
                key={state}
                onClick={() => setActiveState(state)}
                className={`h-14 px-6 rounded-2xl font-bold whitespace-nowrap transition-all ${activeState === state ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' : 'bg-card border border-border/50 text-foreground/70 hover:bg-muted'}`}
              >
                {state}
              </button>
            ))}
          </div>
        </div>

        {/* Hackathon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHackathons.map((h, i) => (
            <motion.div 
              key={h.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-3xl bg-card border border-border/50 shadow-xl overflow-hidden hover:border-primary/30 transition-all flex flex-col cursor-pointer"
            >
              {/* Event Cover Image / Gradient */}
              <div className={`w-full h-40 ${h.image} relative p-6 flex items-end opacity-90 group-hover:opacity-100 transition-opacity`}>
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/20 shadow-sm">
                  {h.prize} Prize
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold font-heading mb-2 group-hover:text-primary transition-colors leading-tight text-foreground">
                  {h.name}
                </h3>
                <div className="text-sm font-semibold text-primary/80 mb-6">{h.organizer}</div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-foreground/70">
                    <MapPin className="w-4 h-4 text-foreground/40" />
                    {h.location}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-foreground/70">
                    <Calendar className="w-4 h-4 text-foreground/40" />
                    {h.date}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-foreground/70">
                    <Users className="w-4 h-4 text-foreground/40" />
                    {h.participants.toLocaleString()}+ Hackers
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {h.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-muted rounded-lg text-xs font-semibold text-foreground/70 border border-border/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {filteredHackathons.length === 0 && (
            <div className="col-span-full py-24 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-foreground/40" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-2 text-foreground">No hackathons found</h3>
              <p className="text-foreground/60">Try adjusting your search or region filter.</p>
            </div>
          )}
        </div>

      </main>
    </div>
  );
}
