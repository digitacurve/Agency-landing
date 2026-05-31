import React from "react";
import { XCircle, CheckCircle, ShieldAlert, Sparkles, TrendingDown, Target } from "lucide-react";

export default function PainPoints() {
  const points = [
    {
      label: "Contract Lock-In",
      bad: "Force 6 to 12-month lock-in contracts to secure their revenue, even if performance drops.",
      good: "Zero Lock-In Contracts. We earn your business month-on-month based on real lead generation.",
    },
    {
      label: "Campaign Optimization",
      bad: "Set-and-forget. Automated recommendations applied blindly without human context.",
      good: "Aggressive manual adjustments. Negative keyword filters, quality score tuning, and bid checks.",
    },
    {
      label: "Reporting and Transparency",
      bad: "Vague, monthly PDF reports showing impressions and clicks, hiding true conversion rates.",
      good: "100% Live reporting dashboard. Check your spend, leads, and ROI in real-time.",
    },
    {
      label: "Focus & Objectives",
      bad: "Vanity metrics (high impressions, cheap traffic) that leak budget and bring zero buyers.",
      good: "Hyper-focused on high-intent buyer clicks. Lowering cost per lead is our daily task.",
    },
    {
      label: "Specialist Access",
      bad: "Account managed by junior interns or outsourced off-shore reps with zero local context.",
      good: "Direct support from experienced Melbourne-based Google Ads expert consultants.",
    }
  ];

  return (
    <section className="relative py-24 bg-slate-950 bg-grid-pattern border-t border-white/5">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-orange-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-wider">
            Typical Agency vs. Digitacurve
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight leading-tight">
            Why Most Melbourne Ads Campaigns Waste 40% of Their Budget
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Stop funding vanity metrics. Here is why working with an ROI-focused partner changes the trajectory of your client acquisition.
          </p>
        </div>

        {/* Comparative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Typical Agency Column */}
          <div className="p-6 sm:p-8 rounded-2xl bg-rose-950/10 border border-rose-500/10 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
                  <ShieldAlert className="w-5 h-5 text-rose-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">The "Set-and-Forget" Agency</h3>
                  <p className="text-[10px] text-rose-500 uppercase tracking-wider font-bold mt-0.5">High Ad Waste & Low Intent</p>
                </div>
              </div>

              <div className="space-y-6">
                {points.map((pt, idx) => (
                  <div key={idx} className="pb-6 border-b border-white/5 last:border-b-0 last:pb-0">
                    <p className="text-xs font-black text-rose-400 uppercase tracking-wider font-sans mb-2">{pt.label}</p>
                    <div className="flex gap-2.5 items-start">
                      <XCircle className="w-5 h-5 text-rose-500/80 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-400 leading-relaxed font-medium">{pt.bad}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Digitacurve Column */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-orange-500/20 relative overflow-hidden flex flex-col justify-between shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                  <Sparkles className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">Digitacurve ROI-First Focus</h3>
                  <p className="text-[10px] text-orange-500 uppercase tracking-wider font-bold mt-0.5">High Performance & Scale</p>
                </div>
              </div>

              <div className="space-y-6">
                {points.map((pt, idx) => (
                  <div key={idx} className="pb-6 border-b border-white/5 last:border-b-0 last:pb-0">
                    <p className="text-xs font-black text-orange-500 uppercase tracking-wider font-sans mb-2">{pt.label}</p>
                    <div className="flex gap-2.5 items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-200 leading-relaxed font-medium">{pt.good}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
