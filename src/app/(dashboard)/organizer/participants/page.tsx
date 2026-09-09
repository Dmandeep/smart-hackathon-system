import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Code2, Search } from "lucide-react";
import { PageTransition } from "@/components/animations/page-transition";

export default function ParticipantsPage() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold font-heading mb-2">Participants</h1>
            <p className="text-foreground/60 text-sm">Review applications, approve hackers, and form AI teams.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="h-10 px-4 rounded-xl bg-primary text-primary-foreground text-sm font-bold shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-transform">
              Run AI Matchmaking
            </button>
          </div>
        </div>

        <div className="border border-border/50 bg-card rounded-3xl shadow-xl overflow-hidden">
          <div className="p-4 border-b border-border/50 bg-muted/50 flex gap-2 overflow-x-auto">
            {["Pending Approvals", "Approved", "Waitlisted", "Rejected"].map((tab, i) => (
              <button key={tab} className={`px-4 py-2 text-sm font-semibold rounded-lg whitespace-nowrap transition-colors ${i === 0 ? 'bg-background shadow-sm text-foreground' : 'text-foreground/50 hover:text-foreground hover:bg-background/50'}`}>
                {tab}
              </button>
            ))}
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border/50 hover:bg-transparent">
                  <TableHead className="font-semibold text-xs uppercase tracking-wider text-foreground/50 py-4">Hacker Name</TableHead>
                  <TableHead className="font-semibold text-xs uppercase tracking-wider text-foreground/50 py-4">University</TableHead>
                  <TableHead className="font-semibold text-xs uppercase tracking-wider text-foreground/50 py-4">Skills</TableHead>
                  <TableHead className="font-semibold text-xs uppercase tracking-wider text-foreground/50 py-4">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { name: "Aditi Sharma", uni: "IIT Bombay", skills: ["React", "Python", "AI"], status: "Pending" },
                  { name: "Rahul Verma", uni: "NIT Surathkal", skills: ["Rust", "Solana", "Web3"], status: "Pending" },
                  { name: "Priya Patel", uni: "VIT Vellore", skills: ["Figma", "UI/UX", "Frontend"], status: "Pending" },
                ].map((h, i) => (
                  <TableRow key={i} className="border-border/50 hover:bg-muted/50 transition-colors">
                    <TableCell className="font-semibold py-4 whitespace-nowrap">{h.name}</TableCell>
                    <TableCell className="text-sm text-foreground/80 py-4 whitespace-nowrap">{h.uni}</TableCell>
                    <TableCell className="py-4 whitespace-nowrap">
                      <div className="flex gap-2">
                        {h.skills.map(s => (
                          <Badge key={s} variant="secondary" className="bg-muted text-[10px] font-semibold">{s}</Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="py-4 whitespace-nowrap">
                      <Badge variant="outline" className="font-semibold text-[10px] uppercase tracking-wider rounded-full px-3 py-1 border-yellow-500/30 text-yellow-500 bg-yellow-500/10">
                        {h.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
