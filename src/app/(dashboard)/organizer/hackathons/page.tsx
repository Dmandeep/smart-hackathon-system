import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { createHackathon } from "@/app/actions";
import { db } from "@/lib/db";
import { hackathons } from "@/lib/db/schema";
import { desc } from "drizzle-orm";

export default async function HackathonsPage() {
  const dbHackathons = await db.select().from(hackathons).orderBy(desc(hackathons.createdAt));

  return (
    <div className="max-w-7xl mx-auto space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold font-heading mb-2">Hackathons</h1>
          <p className="text-foreground/60 text-sm">Manage your upcoming and past hackathons.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Events Table - Cinematic Minimal */}
        <div className="xl:col-span-2 border border-white/5 bg-card/50 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden self-start">
          <Table>
            <TableHeader className="bg-black/40">
              <TableRow className="border-white/5 hover:bg-transparent">
                <TableHead className="font-semibold text-xs uppercase tracking-wider text-foreground/50 py-4">Event Name</TableHead>
                <TableHead className="font-semibold text-xs uppercase tracking-wider text-foreground/50 py-4">Status</TableHead>
                <TableHead className="font-semibold text-xs uppercase tracking-wider text-foreground/50 py-4">Hackers</TableHead>
                <TableHead className="font-semibold text-xs uppercase tracking-wider text-foreground/50 py-4">Start Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dbHackathons.map((h) => (
                <TableRow key={h.id} className="border-white/5 hover:bg-white/5 transition-colors">
                  <TableCell className="font-semibold py-4">{h.name}</TableCell>
                  <TableCell className="py-4">
                    <Badge variant="outline" className={`font-semibold text-[10px] uppercase tracking-wider rounded-full px-3 py-1 ${h.status === 'judging' ? 'border-semantic-alert text-semantic-alert bg-semantic-alert/10' : 'border-primary/30 text-primary bg-primary/10'}`}>
                      {h.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-foreground/60 py-4">--</TableCell>
                  <TableCell className="text-sm text-foreground/60 py-4">{new Date(h.startDate).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Create Hackathon Form */}
        <div className="border border-white/5 bg-card/50 backdrop-blur-sm rounded-3xl shadow-xl p-8 self-start">
          <h2 className="text-2xl font-bold font-heading mb-6">Create Event</h2>
          <form action={createHackathon} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">Event Name</label>
              <input 
                name="name"
                required
                className="w-full h-12 px-4 rounded-xl bg-black/50 border border-white/10 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                placeholder="e.g. Winter Hack 2026" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">Description</label>
              <textarea 
                name="description"
                required
                className="w-full h-32 p-4 rounded-xl bg-black/50 border border-white/10 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none transition-all" 
                placeholder="What is this hackathon about?" 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">Start Date</label>
                <input 
                  type="date"
                  name="startDate"
                  required
                  className="w-full h-12 px-4 rounded-xl bg-black/50 border border-white/10 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">End Date</label>
                <input 
                  type="date"
                  name="endDate"
                  required
                  className="w-full h-12 px-4 rounded-xl bg-black/50 border border-white/10 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                />
              </div>
            </div>
            <button type="submit" className="w-full h-12 mt-4 bg-primary text-primary-foreground font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20">
              Deploy Hackathon
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
