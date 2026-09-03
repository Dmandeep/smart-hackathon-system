import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Code2, Search } from "lucide-react";

export default function ParticipantsPage() {
  const participants = [
    { id: 1, name: "Alice Chen", role: "Frontend", team: "AutoAgent Dev", status: "Matched" },
    { id: 2, name: "Bob Smith", role: "Backend", team: "The Mavericks", status: "Matched" },
    { id: 3, name: "Charlie Davis", role: "AI/ML", team: "Unassigned", status: "Looking for Team" },
    { id: 4, name: "Diana Prince", role: "Fullstack", team: "Web3 Builders", status: "Matched" },
    { id: 5, name: "Ethan Hunt", role: "Design", team: "Unassigned", status: "Looking for Team" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-1">Participants</h1>
          <p className="text-foreground/60">Manage registered developers across all your events.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search hackers..." 
            className="h-10 pl-9 pr-4 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary w-full sm:w-64"
          />
        </div>
      </div>
      
      <div className="border border-border/30 bg-background/20 backdrop-blur-xl shadow-2xl rounded-xl overflow-hidden">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead>Hacker</TableHead>
              <TableHead>Primary Role</TableHead>
              <TableHead>Team Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {participants.map((p) => (
              <TableRow key={p.id}>
                <TableCell className="font-medium flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                    {p.name.charAt(0)}
                  </div>
                  {p.name}
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="font-normal bg-background">
                    {p.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  {p.status === "Matched" ? (
                    <div className="flex items-center gap-2 text-sm">
                      <Code2 className="w-4 h-4 text-emerald-500" />
                      {p.team}
                    </div>
                  ) : (
                    <Badge variant="secondary" className="text-blue-500 bg-blue-500/10 hover:bg-blue-500/20">
                      {p.status}
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <button className="text-sm text-primary font-medium hover:underline">View Profile</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
