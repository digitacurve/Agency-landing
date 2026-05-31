"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, BadgeCheck, CheckCircle2, TrendingUp, ShieldCheck } from "lucide-react";

export default function Hero() {
  const scrollToForm = () => {
    const element = document.getElementById("audit-form-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-slate-950 bg-grid-pattern">
      {/* Background Neon Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-orange-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-slate-900/50 border border-white/[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-orange-500 text-xs font-bold uppercase tracking-wider mb-6"
            >
              <BadgeCheck className="w-4 h-4 text-orange-500" />
              <span>Melbourne-Based Google Ads Specialists</span>
            </motion.div>

            {/* H1 Heading - Strong keyword match for Melbourne Ads Search Intent */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans"
            >
              Google Ads Management <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-blue-400 glow-orange">
                Melbourne
              </span>
            </motion.h1>

            {/* Sub-copy incorporating keywords and core angles */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed"
            >
              Stop wasting 40%+ of your paid search budget. Our Melbourne-based <strong className="text-white font-semibold">Google Ads experts</strong> engineer ROI-focused campaigns designed to acquire high-value sales and calls for local businesses.
            </motion.p>

            {/* Value Proposition Bullets */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 w-full max-w-lg text-left"
            >
              {[
                "No Lock-In Contracts",
                "Free Comprehensive Audit",
                "100% Transparent Live Reports",
                "ROI-Driven Management",
                "Experienced Adwords Consultants"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-200 text-sm sm:text-base font-medium">{text}</span>
                </div>
              ))}
            </motion.div>

            {/* Call To Actions Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 w-full"
            >
              {/* Primary Form Anchor Button */}
              <button
                onClick={scrollToForm}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/25 active:scale-95 group"
              >
                Claim Free Audit
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Call-to-Call Button */}
              <a
                href="tel:7572094201"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl text-base font-bold text-slate-200 bg-slate-900 border border-white/10 hover:bg-slate-800 hover:border-slate-700 transition-all active:scale-95 gap-2"
              >
                <Phone className="w-4 h-4 text-orange-500 animate-pulse" />
                <span>Call 7572094201</span>
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/7572094201?text=Hi%20Digitacurve%2C%20I'm%20searching%20for%20Google%20Ads%20Management%20services%20in%20Melbourne.%20I'd%20like%20to%20get%20more%20details%20about%20your%20free%20campaign%20audit."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl text-base font-bold text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 hover:bg-emerald-950/50 hover:border-emerald-500/40 transition-all active:scale-95 gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </motion.div>

          </div>

          {/* Right Graphical Column */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            
            {/* Visual Glassmorphic Card Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-md p-6 rounded-2xl glass-panel border border-white/10 relative overflow-hidden"
            >
              
              {/* Card Header stats */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">DIGITACURVE PERFORMANCE</p>
                  <h3 className="text-xl font-bold text-white mt-1">Melbourne Client Live Stats</h3>
                </div>
                <div className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  +340% Avg ROI
                </div>
              </div>

              {/* Graphical Visualizations representing Google Ads ROI Optimization */}
              <div className="space-y-4">
                
                {/* Wasted spend bar */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-white/5 relative">
                  <div className="flex justify-between text-xs font-bold text-slate-400 mb-1.5">
                    <span>TYPICAL AGENCY AD SPEND WASTE</span>
                    <span className="text-rose-500">42% Wasted</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-slate-900 overflow-hidden">
                    <div className="h-full bg-rose-500/80 rounded-full" style={{ width: "42%" }} />
                  </div>
                  <p className="text-[10px] text-slate-500 mt-2">Driven by set-and-forget campaigns & untargeted keywords.</p>
                </div>

                {/* Optimized spend bar */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-white/5 relative">
                  <div className="flex justify-between text-xs font-bold text-slate-400 mb-1.5">
                    <span>DIGITACURVE ROI OPTIMIZED SPEND</span>
                    <span className="text-emerald-500">98% Efficient</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-slate-900 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-500 to-emerald-500 rounded-full animate-pulse" style={{ width: "98%" }} />
                  </div>
                  <p className="text-[10px] text-slate-400 mt-2">Hyper-focused negative-match rules & high-intent buyer targets.</p>
                </div>

                {/* Micro Metrics Strip */}
                <div className="grid grid-cols-2 gap-3.5 mt-4">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                    <p className="text-2xl font-black text-orange-500">2.8x</p>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold">More Leads Generated</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                    <p className="text-2xl font-black text-blue-400">-32%</p>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold">Lower Cost Per Lead</p>
                  </div>
                </div>

                {/* Protection Seal */}
                <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-orange-500/5 border border-orange-500/10 mt-2 text-left">
                  <ShieldCheck className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-[11px] text-slate-300 leading-normal">
                    Audit highlights: Quality Score gaps, Negative Keyword misses, and Ad Extension leaks.
                  </span>
                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
