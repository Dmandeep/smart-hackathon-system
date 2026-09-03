import { Code2, LayoutDashboard, Trophy, Users, ShieldCheck, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { auth } from "@/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const userName = session?.user?.name || "Guest User";
  const initials = userName.substring(0, 2).toUpperCase();

  return (
    <div className="min-h-screen text-foreground flex relative font-sans bg-transparent">
      
      {/* Background gradients for Dashboard */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 opacity-20 mix-blend-multiply dark:mix-blend-screen">
        <div className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-violet-600/10 blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      {/* Sidebar - Cinematic Minimal */}
      <aside className="w-64 border-r border-border/50 bg-card/80 flex flex-col hidden md:flex z-10 shadow-xl backdrop-blur-md">
        <div className="h-20 flex items-center px-6 border-b border-border/50">
          <Link href="/" className="flex items-center gap-3 hover:scale-105 transition-transform">
            <div className="w-8 h-8 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
              <Code2 className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold font-heading text-lg tracking-tight text-foreground">HackVerse</span>
          </Link>
        </div>
        
        <div className="flex-1 py-8 px-4 space-y-2">
          <div className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-4 px-3">
            Platform
          </div>
          <Link href="/organizer" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-muted text-sm font-medium transition-all text-foreground">
            <LayoutDashboard className="w-4 h-4 text-foreground/60" />
            Dashboard
          </Link>
          <Link href="/organizer/hackathons" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-muted text-sm font-medium transition-all text-foreground">
            <Trophy className="w-4 h-4 text-foreground/60" />
            Hackathons
          </Link>
          <Link href="/organizer/participants" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-muted text-sm font-medium transition-all text-foreground">
            <Users className="w-4 h-4 text-foreground/60" />
            Participants
          </Link>
          <Link href="/organizer/forensics" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-semantic-alert/10 text-sm font-medium transition-all text-semantic-alert">
            <ShieldCheck className="w-4 h-4" />
            Code Forensics
          </Link>
        </div>

        <div className="p-6 border-t border-border/50 space-y-2">
          <Link href="/settings" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-muted text-sm font-medium transition-all text-foreground">
            <Settings className="w-4 h-4 text-foreground/60" />
            Settings
          </Link>
          <Link href="/api/auth/signout" className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-red-500/10 hover:text-red-500 text-sm font-medium transition-all text-foreground/60">
            <LogOut className="w-4 h-4" />
            Log out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen overflow-hidden z-10 bg-transparent">
        <header className="h-20 border-b border-border/50 bg-background/60 backdrop-blur-md flex items-center justify-between px-10 sticky top-0 shadow-sm">
          <div className="text-sm font-semibold text-foreground/50 flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
             Organizer Portal
          </div>
          <div className="flex items-center gap-6">
            <ThemeToggle />
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold hidden md:block text-foreground">{userName}</span>
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary shadow-sm">
                {initials}
              </div>
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-6 md:p-10 relative">
          {children}
        </div>
      </main>
    </div>
  );
}
