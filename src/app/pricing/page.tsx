export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Simple, Transparent Pricing</h1>
        <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
          Start for free, upgrade when you need to scale. HackVerse AI is completely free for student organizers and open-source hackathons.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
          <div className="p-8 rounded-2xl bg-card border border-border flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Community</h3>
            <div className="text-4xl font-bold">$0 <span className="text-lg font-medium text-foreground/50">/ event</span></div>
            <p className="text-foreground/60">For universities and open-source.</p>
            <ul className="space-y-3 mt-4 flex-1">
              <li className="flex items-center gap-2 text-sm"><span className="text-emerald-500">✓</span> Unlimited participants</li>
              <li className="flex items-center gap-2 text-sm"><span className="text-emerald-500">✓</span> Standard team matching</li>
              <li className="flex items-center gap-2 text-sm"><span className="text-emerald-500">✓</span> Basic judge dashboard</li>
            </ul>
            <button className="w-full mt-4 py-3 rounded-lg bg-card border border-border font-medium hover:bg-muted transition-colors">Get Started</button>
          </div>

          <div className="p-8 rounded-2xl bg-card border-2 border-primary flex flex-col gap-4 relative">
            <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/2">
              <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
            </div>
            <h3 className="text-2xl font-bold">Enterprise</h3>
            <div className="text-4xl font-bold">$999 <span className="text-lg font-medium text-foreground/50">/ event</span></div>
            <p className="text-foreground/60">For corporate and sponsored hackathons.</p>
            <ul className="space-y-3 mt-4 flex-1">
              <li className="flex items-center gap-2 text-sm"><span className="text-emerald-500">✓</span> Everything in Community</li>
              <li className="flex items-center gap-2 text-sm"><span className="text-emerald-500">✓</span> Advanced Code Forensics API</li>
              <li className="flex items-center gap-2 text-sm"><span className="text-emerald-500">✓</span> Z-score Judge Calibration</li>
              <li className="flex items-center gap-2 text-sm"><span className="text-emerald-500">✓</span> Post-event ROI Analytics</li>
            </ul>
            <button className="w-full mt-4 py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity">Contact Sales</button>
          </div>
        </div>
      </div>
    </div>
  );
}
