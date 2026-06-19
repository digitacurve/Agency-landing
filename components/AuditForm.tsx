"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Send, Lock } from "lucide-react";

interface AuditFormProps {
  compact?: boolean;
}

export default function AuditForm({ compact = false }: AuditFormProps) {
  const [nextUrl, setNextUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setNextUrl(window.location.origin + "/thank-you");
    }
  }, []);

  const formFields = (
    <>
      {/* Hidden fields required by Web3Forms */}
      <input type="hidden" name="access_key" value="a452b7da-643d-4595-800b-659e35ab317e" />
      <input type="hidden" name="subject" value="New Digitacurve Lead" />
      <input type="hidden" name="redirect" value={nextUrl} />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

      <div className={compact ? "space-y-4 text-left" : "space-y-6 text-left"}>
        {/* Name & Email Group */}
        <div className={compact ? "space-y-4" : "grid grid-cols-1 md:grid-cols-2 gap-6"}>
          <div className="flex flex-col text-left">
            <label htmlFor={compact ? "hero-name" : "name"} className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Name <span className="text-orange-500 font-black">*</span>
            </label>
            <input
              type="text"
              name="name"
              id={compact ? "hero-name" : "name"}
              required
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-sm"
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor={compact ? "hero-email" : "email"} className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Email Address <span className="text-orange-500 font-black">*</span>
            </label>
            <input
              type="email"
              name="email"
              id={compact ? "hero-email" : "email"}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-sm"
            />
          </div>
        </div>

        {/* WhatsApp & Website Group */}
        <div className={compact ? "space-y-4" : "grid grid-cols-1 md:grid-cols-2 gap-6"}>
          <div className="flex flex-col text-left">
            <label htmlFor={compact ? "hero-whatsapp" : "whatsapp"} className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              WhatsApp Number <span className="text-orange-500 font-black">*</span>
            </label>
            <input
              type="tel"
              name="whatsapp"
              id={compact ? "hero-whatsapp" : "whatsapp"}
              required
              placeholder="e.g. +61 400 000 000"
              className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-sm"
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor={compact ? "hero-website" : "website"} className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Website URL <span className="text-slate-500 font-medium">(Optional)</span>
            </label>
            <input
              type="text"
              name="website"
              id={compact ? "hero-website" : "website"}
              placeholder="e.g. www.mybusiness.com.au"
              className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-sm"
            />
          </div>
        </div>

        {/* Services Dropdown */}
        <div className="flex flex-col text-left">
          <label htmlFor={compact ? "hero-service" : "service"} className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Target Service Focus <span className="text-slate-500 font-medium">(Optional)</span>
          </label>
          <select
            name="service"
            id={compact ? "hero-service" : "service"}
            defaultValue="Google Ads"
            className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-sm cursor-pointer"
          >
            <option value="Google Ads">Google Ads Management (Recommended)</option>
            <option value="Digital Marketing">Digital Marketing Strategy</option>
            <option value="Social Media Marketing">Social Media Marketing</option>
            <option value="SEO">SEO (Search Engine Optimization)</option>
            <option value="Website Design and Development">Website Design & Development</option>
          </select>
        </div>

        {/* Submission Button */}
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-extrabold text-slate-950 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer active:scale-[0.99] mt-4"
        >
          <Send className="w-4 h-4 text-slate-950" />
          <span>Get Free Audit</span>
        </button>

        {/* Privacy lock indicator */}
        <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-3">
          <Lock className="w-3.5 h-3.5 text-slate-500" />
          <span>100% Privacy Protected. Zero Sales Spam.</span>
        </div>
      </div>
    </>
  );

  if (compact) {
    return (
      <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 relative overflow-hidden shadow-xl w-full max-w-md">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 via-amber-500 to-blue-500" />
        <div className="mb-6 text-center">
          <span className="px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-500 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 w-fit mx-auto">
            <Sparkles className="w-3 h-3 text-orange-500" />
            Free 30-Min Campaign Audit
          </span>
          <h3 className="text-lg font-bold text-white mt-3 leading-tight tracking-tight">Stop Wasting Ad Spend</h3>
          <p className="text-[11px] text-slate-400 mt-1 font-medium">Claim your Quality Score review & negative keyword setup.</p>
        </div>
        <form action="https://api.web3forms.com/submit" method="POST">
          {formFields}
        </form>
      </div>
    );
  }

  return (
    <section id="audit-form-section" className="relative py-20 bg-slate-950 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 w-fit mx-auto">
            <Sparkles className="w-3.5 h-3.5" />
            Zero Obligation, Maximum Value
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-4 tracking-tight leading-tight">
            Claim Your Free Google Ads Audit
          </h2>
          <p className="text-slate-400 mt-3 text-sm">
            No lock-in contracts. Get an expert review of your Quality Scores, target keywords, and ad spend efficiency in Melbourne.
          </p>
        </div>

        {/* Lead Form Box */}
        <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-white/10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 via-amber-500 to-blue-500" />
          <form action="https://api.web3forms.com/submit" method="POST">
            {formFields}
          </form>
        </div>

      </div>
    </section>
  );
}
