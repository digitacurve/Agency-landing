"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const menuItems = [
    { label: "Services", href: "#services-section" },
    { label: "ROI Calculator", href: "#calculator-section" },
    { label: "Why Us", href: "#why-us-section" },
    { label: "FAQ", href: "#faq-section" },
    { label: "Contact", href: "#audit-form-section" },
  ];

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

  // Scroll spy to highlight active menu item and dynamically update address bar hash on scroll
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 120; // Account for header offset + buffer

      // Check if we are close to the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (isAtBottom) {
        setActiveSection("#audit-form-section");
        window.history.replaceState(null, "", "#audit-form-section");
        return;
      }

      let currentActive = "";
      for (const item of menuItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentActive = item.href;
            break;
          }
        }
      }

      // Clear hash if near the top
      if (window.scrollY < 50) {
        currentActive = "";
      }

      if (currentActive && activeSection !== currentActive) {
        setActiveSection(currentActive);
        window.history.replaceState(null, "", currentActive);
      } else if (!currentActive && window.scrollY < 50 && activeSection !== "") {
        setActiveSection("");
        window.history.replaceState(null, "", window.location.pathname);
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy(); // Initial run on mount

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [activeSection]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Update URL hash immediately
      window.history.pushState(null, "", targetId);
      setActiveSection(targetId);

      setMobileOpen(false);
    }
  };

  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("hero-audit-form");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      window.history.pushState(null, "", "#hero-audit-form");
      setMobileOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "py-2 bg-slate-950/90 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "py-4 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.pushState(null, "", window.location.pathname);
              setActiveSection("");
            }}
            className="group shrink-0"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={`text-sm font-semibold transition-colors cursor-pointer ${
                    activeSection === item.href
                      ? "text-orange-500 font-bold"
                      : "text-slate-300 hover:text-orange-500"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Action Bar */}
          <div className="flex items-center gap-4">
            {/* CTA Button */}
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

            {/* Mobile hamburger menu button */}
            <button
              className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10 animate-fade-in">
            <ul className="space-y-3 pb-4">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className={`block px-4 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                      activeSection === item.href
                        ? "bg-orange-500/10 text-orange-500"
                        : "text-slate-300 hover:bg-white/5 hover:text-orange-500"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

