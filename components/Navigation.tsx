"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

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
          ? "py-2 bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "py-4 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="group">
            <Logo size="md" />
          </a>

          {/* Desktop Right Action Bar */}
          <div className="flex items-center gap-3 sm:gap-6">

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
