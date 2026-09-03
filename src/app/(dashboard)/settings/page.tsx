import { ShieldCheck, Mail, Globe, CheckCircle2 } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">Settings</h1>
        <p className="text-foreground/60">Manage your profile, platform preferences, and API keys.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 space-y-1 text-sm font-medium">
          <div className="px-4 py-2 bg-primary/10 text-primary rounded-lg cursor-pointer">Profile</div>
          <div className="px-4 py-2 text-foreground/60 hover:text-foreground hover:bg-muted rounded-lg cursor-pointer transition-colors">Notifications</div>
          <div className="px-4 py-2 text-foreground/60 hover:text-foreground hover:bg-muted rounded-lg cursor-pointer transition-colors">AI Configuration</div>
          <div className="px-4 py-2 text-foreground/60 hover:text-foreground hover:bg-muted rounded-lg cursor-pointer transition-colors">Billing</div>
        </div>

        <div className="col-span-2 space-y-6">
          <div className="p-6 border border-border/30 bg-background/20 backdrop-blur-xl shadow-2xl rounded-xl space-y-6">
            <h2 className="text-xl font-bold">Public Profile</h2>
            
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold">
                JS
              </div>
              <button className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors">
                Upload Avatar
              </button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Display Name</label>
                <input 
                  defaultValue="Jane Smith"
                  className="w-full h-10 px-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Organization / University</label>
                <input 
                  defaultValue="Stanford University"
                  className="w-full h-10 px-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Bio</label>
                <textarea 
                  defaultValue="Hackathon organizer and CS student."
                  className="w-full h-24 p-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary resize-none" 
                />
              </div>
            </div>

            <button className="h-10 px-6 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
