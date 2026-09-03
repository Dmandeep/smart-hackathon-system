import { motion } from "framer-motion";
import { Sparkles, Calendar, Code2, ArrowRight, Users, ChevronRight, Trophy } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function HackerDashboard() {
  const activeEvents = [
    { id: 1, name: "Global AI Startup Hackathon", role: "Fullstack", team: "AutoAgent Dev", status: "Hacking Phase" },
    { id: 2, name: "Web3 Builders Sprint", role: "Frontend", team: "Pending Match", status: "Team Formation" },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 relative z-10">
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">Hacker Portal</h1>
        <p className="text-foreground/60">Manage your teams, view active hackathons, and submit projects.</p>
      </div>

      {/* Featured Hackathon Glass Card */}
      <div className="relative overflow-hidden rounded-2xl border border-border/30 bg-background/20 backdrop-blur-xl p-8 group shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              Registration Open
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">HackVerse Global Championship</h2>
              <p className="text-foreground/70 max-w-lg">
                Build the next generation of autonomous AI agents. $50,000 in prizes. Sponsored by leading AI labs.
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm text-foreground/60 font-medium">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Nov 12 - Nov 14, 2026
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                Online (Global)
              </div>
            </div>
          </div>

          <button className="h-12 px-6 bg-primary text-primary-foreground font-semibold rounded-full flex items-center gap-2 hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg whitespace-nowrap">
            Register Now
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Active Enrollments */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold">My Hackathons</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeEvents.map((event) => (
            <div key={event.id} className="p-6 rounded-2xl border border-border/30 bg-background/20 backdrop-blur-xl shadow-2xl hover:border-primary/50 transition-colors group cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <Badge variant="secondary" className="bg-background/50 backdrop-blur-sm">
                  {event.status}
                </Badge>
              </div>
              
              <h4 className="text-lg font-bold mb-1">{event.name}</h4>
              
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/20">
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <Users className="w-4 h-4" />
                  <span className="font-medium text-foreground">{event.team}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
