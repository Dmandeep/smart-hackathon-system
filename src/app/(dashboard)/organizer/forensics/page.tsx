import { ShieldAlert, AlertTriangle, CheckCircle2, ChevronRight, GitBranch } from "lucide-react";

export default function ForensicsPage() {
  const flags = [
    { id: 1, repo: "team-mavericks/auto-agent", score: 85, reason: "95% of codebase committed in a single commit.", team: "The Mavericks", hackathon: "AI Genesis 2026" },
    { id: 2, repo: "solo-hacker/chat-clone", score: 92, reason: "AST signature matches known boilerplate 'Next-SaaS-Starter'.", team: "SoloHacker", hackathon: "Web3 Builders Sprint" },
    { id: 3, repo: "innovators/defi-yield", score: 65, reason: "First commit predates hackathon by 14 days.", team: "Innovators", hackathon: "Web3 Builders Sprint" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-1 text-red-500 flex items-center gap-2">
            <ShieldAlert className="w-8 h-8" /> Code Forensics
          </h1>
          <p className="text-foreground/60">AI-powered plagiarism and boilerplate detection reports.</p>
        </div>
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          <div>
            <div className="font-bold text-red-500 text-sm">3 Suspicious Submissions</div>
            <div className="text-xs text-red-500/80">Action required before judging phase.</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {flags.map((flag) => (
          <div key={flag.id} className="p-6 border border-border/30 bg-background/20 backdrop-blur-xl shadow-2xl rounded-xl hover:border-red-500/50 transition-colors group cursor-pointer flex flex-col md:flex-row gap-6 md:items-center justify-between">
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-red-500/10 text-red-500 font-bold text-xs rounded-full">
                  Score: {flag.score}/100
                </span>
                <span className="text-sm font-medium text-foreground/60">{flag.hackathon}</span>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-1">{flag.team}</h3>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <GitBranch className="w-4 h-4" /> {flag.repo}
                </div>
              </div>
              
              <div className="p-3 bg-red-500/5 border border-red-500/10 rounded-lg text-sm text-foreground/80">
                <strong>AI Flag:</strong> {flag.reason}
              </div>
            </div>

            <div className="flex flex-col gap-2 min-w-[140px]">
              <button className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors">
                Review Code
              </button>
              <button className="px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/20 rounded-lg text-sm font-bold hover:bg-red-500/20 transition-colors">
                Disqualify
              </button>
              <button className="px-4 py-2 text-foreground/60 text-xs font-medium hover:text-foreground transition-colors">
                Mark as false positive
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-6 border border-border/30 bg-background/20 backdrop-blur-xl shadow-2xl rounded-xl flex items-center gap-4 text-emerald-500">
        <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div>
          <div className="font-bold">409 Submissions Cleared</div>
          <div className="text-sm text-foreground/60">No significant boilerplate overlap or timeline anomalies detected.</div>
        </div>
      </div>
    </div>
  );
}
