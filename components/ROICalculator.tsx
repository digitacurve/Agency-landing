"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, ShieldAlert, Sparkles, TrendingUp } from "lucide-react";

export default function ROICalculator() {
  const [spend, setSpend] = useState<number>(5000);
  const [cpc, setCpc] = useState<number>(3.5);
  const [convRate, setConvRate] = useState<number>(1.5);

  // Calculations
  const clicks = Math.round(spend / cpc);
  const currentLeads = Math.max(1, Math.round(clicks * (convRate / 100)));
  const currentCpl = Math.round(spend / currentLeads);
  
  // Wasted spend (typical agencies average 40% waste due to poor negatives/bad matching)
  const wastedSpend = Math.round(spend * 0.4);

  // Digitacurve optimizations (averaging 60% boost in conversion rate through CRO and precise Quality Score alignment)
  const projectedConvRate = Math.min(20, parseFloat((convRate * 1.6).toFixed(2)));
  const projectedLeads = Math.round(clicks * (projectedConvRate / 100));
  const extraLeads = Math.max(1, projectedLeads - currentLeads);
  const projectedCpl = Math.round(spend / projectedLeads);

  const scrollToForm = () => {
    const element = document.getElementById("audit-form-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-24 bg-slate-900 border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 w-fit mx-auto">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Campaign Audit Tool
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight leading-tight">
            Calculate Your Google Ads Budget Efficiency
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            Typical set-and-forget agencies leak up to 40% of your click spend on search queries that never buy. Adjust the controls to see how much we can recover.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Sliders Input Panel */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl glass-panel border border-white/5 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                <span>Enter Your Current Ad Metrics</span>
              </h3>

              {/* Slider 1: Monthly Spend */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-semibold text-slate-300">Monthly Google Ads Spend</span>
                  <span className="text-lg font-black text-orange-500">${spend.toLocaleString()} AUD</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="500"
                  value={spend}
                  onChange={(e) => setSpend(parseInt(e.target.value))}
                  className="w-full h-2 rounded-lg bg-slate-950 appearance-none cursor-pointer accent-orange-500 outline-none"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1.5 font-bold font-mono">
                  <span>$1,000</span>
                  <span>$10,000</span>
                  <span>$25,000</span>
                  <span>$50,000+</span>
                </div>
              </div>

              {/* Slider 2: Average CPC */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-semibold text-slate-300">Estimated Cost Per Click (CPC)</span>
                  <span className="text-lg font-black text-blue-400">${cpc.toFixed(2)} AUD</span>
                </div>
                <input
                  type="range"
                  min="0.50"
                  max="20.00"
                  step="0.10"
                  value={cpc}
                  onChange={(e) => setCpc(parseFloat(e.target.value))}
                  className="w-full h-2 rounded-lg bg-slate-950 appearance-none cursor-pointer accent-blue-500 outline-none"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1.5 font-bold font-mono">
                  <span>$0.50</span>
                  <span>$5.00</span>
                  <span>$10.00</span>
                  <span>$20.00</span>
                </div>
              </div>

              {/* Slider 3: Conversion Rate */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-semibold text-slate-300">Current Conversion Rate</span>
                  <span className="text-lg font-black text-amber-400">{convRate.toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="10.0"
                  step="0.1"
                  value={convRate}
                  onChange={(e) => setConvRate(parseFloat(e.target.value))}
                  className="w-full h-2 rounded-lg bg-slate-950 appearance-none cursor-pointer accent-amber-400 outline-none"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1.5 font-bold font-mono">
                  <span>0.2% (Low)</span>
                  <span>2.0%</span>
                  <span>5.0%</span>
                  <span>10.0% (High)</span>
                </div>
              </div>
            </div>

            {/* Calculations Base Summary */}
            <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-3 gap-2 sm:gap-4 text-center">
              <div>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Est. Clicks</p>
                <p className="text-base font-extrabold text-white mt-1">{clicks.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Current CPL</p>
                <p className="text-base font-extrabold text-white mt-1">${currentCpl} AUD</p>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Current Leads</p>
                <p className="text-base font-extrabold text-white mt-1">{currentLeads}</p>
              </div>
            </div>

          </div>

          {/* Results Comparison Output Panel */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-orange-500/20 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            
            {/* Glossy sheen */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Alert - Wasted Spend Indicator */}
              <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20 mb-6 flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-rose-500 uppercase tracking-wider">ESTIMATED ANNUAL SPEND WASTED:</h4>
                  <p className="text-2xl font-black text-rose-400 mt-1">${(wastedSpend * 12).toLocaleString()} AUD</p>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">
                    This is what standard agencies spend on junk keywords and negative matches. We rescue this budget.
                  </p>
                </div>
              </div>

              {/* Success - Digitacurve Improvement */}
              <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/20 mb-4 text-left">
                <h4 className="text-xs font-bold text-orange-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-orange-500" />
                  DIGITACURVE PROJECTIONS:
                </h4>
                
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold">New Conversion Rate</span>
                    <p className="text-xl font-extrabold text-white mt-0.5">{projectedConvRate}%</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Total Inquiries</span>
                    <p className="text-xl font-extrabold text-white mt-0.5">{projectedLeads} Leads</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-300 font-medium">Extra Leads / Month</span>
                    <p className="text-2xl font-black text-emerald-400 flex items-center gap-1 mt-0.5">
                      <TrendingUp className="w-5 h-5 text-emerald-400" />
                      +{extraLeads} Inquiries
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-300 font-medium">Reduced CPL Target</span>
                    <p className="text-base font-extrabold text-slate-100 mt-0.5">${projectedCpl} AUD</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Audit Hook Button */}
            <button
              onClick={scrollToForm}
              className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/20 cursor-pointer group active:scale-95 mt-6"
            >
              <span>Secure Your Extra {extraLeads} Leads</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
