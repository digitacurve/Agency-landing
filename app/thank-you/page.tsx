"use client";

import React, { useEffect, useState } from "react";
import { Sparkles, CheckCircle2, MessageSquare, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {
  const [countdown, setCountdown] = useState(2);
  const whatsappUrl = "https://wa.me/917572094201?text=Hi%20Digitacurve%2C%20I%20just%20submitted%20my%20details%20for%20the%20Free%20Google%20Ads%20Audit.%20Let's%20connect%20and%20identify%20wasted%20spend.";

  useEffect(() => {
    // Redirect logic
    const redirectTimer = setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 2000);

    // Countdown interval
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 1 ? prev - 1 : 1));
    }, 1000);

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 bg-dot-pattern py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Neon Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-slate-900/30 border border-white/[0.01] pointer-events-none" />

      <div className="max-w-md w-full text-center relative z-10">
        
        {/* Success Card */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
          {/* Top border sheen */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500" />
          
          {/* Success Check circle */}
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 mx-auto animate-bounce">
            <CheckCircle2 className="w-8 h-8 text-emerald-400" />
          </div>

          <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 w-fit mx-auto">
            <Sparkles className="w-3.5 h-3.5" />
            Lead Saved Successfully
          </span>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-4 tracking-tight leading-tight">
            Thank You!
          </h1>
          
          <p className="text-sm text-slate-300 mt-4 leading-relaxed font-medium">
            Your Google Ads campaign audit request is registered. We are now redirecting you to WhatsApp to claim your audit and schedule a review.
          </p>

          {/* Countdown timer badge */}
          <div className="mt-8 p-4 rounded-2xl bg-slate-950 border border-white/5 flex flex-col items-center justify-center gap-1">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Redirecting in</span>
            <span className="text-3xl font-black text-orange-500 font-mono animate-pulse">{countdown}s</span>
          </div>

          {/* Action buttons */}
          <div className="mt-8 space-y-3.5">
            <a
              href={whatsappUrl}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-extrabold text-slate-950 bg-emerald-400 hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-500/10 cursor-pointer active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              Open WhatsApp Now
            </a>

            <Link
              href="/"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-400 hover:text-white transition-all bg-slate-900 border border-white/5"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Landing Page
            </Link>
          </div>

        </div>

      </div>
    </main>
  );
}
