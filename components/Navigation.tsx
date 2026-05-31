"use client";

import React, { useState, useEffect } from "react";
import { Phone, ArrowUpRight, ShieldAlert, Sparkles, MessageSquare } from "lucide-react";

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
    const element = document.getElementById("audit-form-section");
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
            {/* Phone Quick-link */}
            <a
              href="tel:7572094201"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/50 border border-white/5 hover:border-orange-500/30 text-slate-300 hover:text-white transition-all text-xs sm:text-sm font-semibold group"
            >
              <div className="w-6 h-6 rounded-md bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-all">
                <Phone className="w-3.5 h-3.5 text-orange-500" />
              </div>
              <span className="hidden md:inline">Call Expert: </span>
              <span className="text-slate-100">7572094201</span>
            </a>

            {/* CTA */}
            <a
              href="#audit-form-section"
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
