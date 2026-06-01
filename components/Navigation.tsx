"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("hero-audit-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 via-amber-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform duration-300">
              D
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                Digita<span className="text-orange-500 font-extrabold">curve</span>
              </span>
              <span className="text-[10px] tracking-wider text-slate-400 uppercase font-medium">
                ROI Google Ads Agency
              </span>
            </div>
          </a>

          {/* Desktop Right Action Bar */}
          <div className="flex items-center gap-3 sm:gap-6">
            {/* WhatsApp Quick-link (Replaced Phone link) */}
            <a
              href="https://wa.me/917572094201?text=Hi%20Digitacurve%2C%20I'm%20inquiring%20about%20your%20Melbourne%20Google%20Ads%20management%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-950/30 border border-emerald-500/20 hover:bg-emerald-950/50 hover:border-emerald-500/40 text-emerald-400 hover:text-emerald-300 transition-all text-xs sm:text-sm font-semibold group"
            >
              <div className="w-5 h-5 rounded-md bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-all">
                <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-emerald-400">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <span className="hidden md:inline">WhatsApp Inquiry: </span>
              <span className="text-slate-100">+91 75720 94201</span>
            </a>

            {/* CTA */}
            <a
              href="#hero-audit-form"
              onClick={scrollToForm}
              className="relative inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md shadow-orange-500/20 group overflow-hidden active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Free Campaign Audit
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-white/10 to-transparent transition-transform duration-500" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
