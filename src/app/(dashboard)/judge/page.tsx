"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Code2, Play, AlertTriangle } from "lucide-react";
import { useState } from "react";

export default function JudgeWorkspace() {
  const [selectedScore, setSelectedScore] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto flex flex-col h-[calc(100vh-8rem)]">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight mb-1">Evaluation Workspace</h1>
        <p className="text-foreground/60">Review submissions and submit normalized scores.</p>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-0">
        
        {/* Project View (Left & Center) */}
        <div className="lg:col-span-2 flex flex-col gap-4 overflow-y-auto pr-2">
          
          <div className="bg-card border border-border/50 rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl font-bold">AutoAgent Dev</h2>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-500 text-xs font-semibold rounded-md">
                    AI Track
                  </span>
                </div>
                <p className="text-foreground/70">Team: The Mavericks (4 members)</p>
              </div>
              <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                View GitHub
              </button>
            </div>

            <div className="relative aspect-video bg-black rounded-lg border border-border overflow-hidden group flex items-center justify-center cursor-pointer mb-6">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
               <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center z-10 text-primary-foreground">
                 <Play className="w-8 h-8 ml-1" />
               </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg border-b border-border/50 pb-2">AI-Generated Digest</h3>
              <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg text-sm leading-relaxed text-foreground/80">
                <p><strong>Core Concept:</strong> An autonomous agent that reads Jira tickets and opens pull requests automatically.</p>
                <p className="mt-2"><strong>Architecture:</strong> Uses LangChain, OpenAI GPT-4o, and the GitHub API. The backend is written in FastAPI and deployed on Render.</p>
                <p className="mt-2"><strong>Demo Verification:</strong> The demo video successfully shows the agent transitioning a ticket and opening a PR. The repo contains the necessary API routing.</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-6">
            <div className="flex items-center gap-2 text-amber-500 mb-3">
              <AlertTriangle className="w-5 h-5" />
              <h3 className="font-semibold text-lg">Code Forensics Report</h3>
            </div>
            <p className="text-sm text-foreground/70">
              The commit timeline matches a 24-hour sprint. AST analysis shows no significant structural similarity to known boilerplates. <strong>Project is authentic.</strong>
            </p>
          </div>
        </div>

        {/* Scoring Panel (Right) */}
        <div className="bg-card border border-border/50 rounded-xl p-6 flex flex-col h-full sticky top-0">
          <h3 className="font-bold text-xl mb-6">Scoring Rubric</h3>
          
          <div className="flex-1 space-y-8">
            <div className="space-y-3">
              <label className="font-medium text-sm">Technical Complexity</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((score) => (
                  <button 
                    key={score}
                    className="flex-1 h-10 rounded-md border border-border hover:border-primary transition-colors focus:bg-primary focus:text-primary-foreground focus:border-primary font-medium"
                  >
                    {score}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="font-medium text-sm">Innovation / Originality</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((score) => (
                  <button 
                    key={score}
                    className="flex-1 h-10 rounded-md border border-border hover:border-primary transition-colors focus:bg-primary focus:text-primary-foreground focus:border-primary font-medium"
                  >
                    {score}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="font-medium text-sm">Judge Comments (Optional)</label>
              <textarea 
                className="w-full h-24 bg-background border border-border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder="Leave private feedback for the organizers..."
              />
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/50">
            <button className="w-full h-12 bg-primary text-primary-foreground rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              <CheckCircle2 className="w-5 h-5" />
              Submit Score
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
