import { auth } from "@/auth";
import { Users, Trophy, ShieldCheck, Zap, Activity, BookOpen, Map, CheckCircle2 } from "lucide-react";

export default async function OrganizerOverview() {
  const session = await auth();
  const userName = session?.user?.name || "Organizer";

  return (
    <div className="max-w-7xl mx-auto space-y-12">
      
      {/* Welcome Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-card border border-border/50 p-10 md:p-14 shadow-xl">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black font-heading tracking-tight mb-4 text-foreground">
            Welcome back, {userName}.
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl leading-relaxed">
            Your command center for running the perfect hackathon. Monitor live telemetry, 
            approve hackers, and review AST plagiarism flags instantly.
          </p>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: "Live Events", value: "1", icon: <Activity className="w-5 h-5 text-cyan-500" /> },
          { title: "Pending Approvals", value: "34", icon: <Users className="w-5 h-5 text-purple-500" /> },
          { title: "Plagiarism Flags", value: "2", icon: <ShieldCheck className="w-5 h-5 text-semantic-alert" /> },
          { title: "Avg. Z-Score", value: "+1.2", icon: <Trophy className="w-5 h-5 text-semantic-success" /> },
        ].map((stat, i) => (
          <div key={i} className="p-6 rounded-3xl bg-card border border-border/50 shadow-lg flex flex-col hover:border-primary/30 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-foreground/5 flex items-center justify-center">
                {stat.icon}
              </div>
            </div>
            <div className="text-3xl font-bold font-heading mb-1 text-foreground">{stat.value}</div>
            <div className="text-sm font-semibold text-foreground/50 uppercase tracking-wider">{stat.title}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Playbook / Ideas Section */}
        <div className="xl:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold font-heading text-foreground">The 100k Hackathon Playbook</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-card border border-border/50 shadow-lg group hover:border-primary/30 transition-colors">
              <BookOpen className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold font-heading mb-3 text-foreground">Define Strong Tracks</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Instead of "Open Innovation", define specific tracks like "DeFi APIs" or "Healthcare LLMs" to attract targeted sponsors.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-card border border-border/50 shadow-lg group hover:border-primary/30 transition-colors">
              <Map className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold font-heading mb-3 text-foreground">Use ILP Matchmaking</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Force hackers to use the matchmaking tool. Teams with complimentary skills (Frontend + Backend + Pitch) win 80% more often.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-card border border-border/50 shadow-lg group hover:border-primary/30 transition-colors">
              <Zap className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold font-heading mb-3 text-foreground">Instant Webhooks</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Connect your Discord server in Settings. HackVerse will automatically generate private channels for newly formed teams.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-card border border-border/50 shadow-lg group hover:border-primary/30 transition-colors">
              <ShieldCheck className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold font-heading mb-3 text-foreground">Trust the Z-Score</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Don't manually alter points. Let the Z-Score algorithm normalize the harshness of different judges automatically.
              </p>
            </div>
          </div>
        </div>

        {/* Launch Checklist */}
        <div className="xl:col-span-1 space-y-6">
          <h2 className="text-2xl font-bold font-heading text-foreground">Launch Checklist</h2>
          <div className="p-8 rounded-3xl bg-card border border-border/50 shadow-lg space-y-6">
            {[
              { text: "Create Hackathon Event", done: true },
              { text: "Configure Timeline", done: true },
              { text: "Invite Judges", done: false },
              { text: "Connect Discord Webhook", done: false },
              { text: "Publish to Explore Page", done: false },
            ].map((task, i) => (
              <div key={i} className="flex items-start gap-4">
                {task.done ? (
                  <CheckCircle2 className="w-6 h-6 text-semantic-success flex-shrink-0" />
                ) : (
                  <div className="w-6 h-6 rounded-full border-2 border-foreground/20 flex-shrink-0" />
                )}
                <div className={`text-sm font-semibold mt-0.5 ${task.done ? 'text-foreground/40 line-through' : 'text-foreground/90'}`}>
                  {task.text}
                </div>
              </div>
            ))}
            <button className="w-full h-12 mt-4 rounded-xl bg-primary/10 border border-primary/20 text-primary font-bold text-sm hover:bg-primary/20 transition-colors">
              Continue Setup
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
