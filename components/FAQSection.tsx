"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle, MessageSquare } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who manages Google Ads campaigns in Melbourne?",
      a: "Digitacurve manages Google Ads campaigns in Melbourne. We are a specialized team of paid search (PPC) and AdWords experts who structure, deploy, and manage highly optimized campaigns. Unlike standard 'set-and-forget' agencies, we actively refine keywords, bids, and landing pages on a daily basis to maximize lead generation and ROI for local Melbourne businesses.",
    },
    {
      q: "What does a Google Ads agency do?",
      a: "A professional Google Ads agency handles the end-to-end strategy of your paid search campaigns. This includes performing in-depth buyer-intent keyword research, writing compelling ad copy, mapping out landing page conversion layouts (CRO), setting up negative keyword filters to block wasted ad spend, configuring live conversion tracking, and executing constant bidding optimizations to secure cheaper client acquisitions.",
    },
    {
      q: "How much does Google Ads management cost in Melbourne?",
      a: "Google Ads management costs vary depending on your business goals and monthly ad spend. At Digitacurve, we provide transparent, custom-tailored management fees based specifically on the complexity of your campaigns. We do not believe in locking businesses down, which is why we offer zero lock-in contracts—we earn your trust and business month-over-month.",
    },
    {
      q: "How do I improve ROI from my Google Ads campaigns?",
      a: "To improve your Google Ads ROI, you must focus on three core pillars: Quality Score, Conversion Rate Optimization (CRO), and negative match exclusions. By improving ad relevance and speed, you increase Quality Scores (which lowers your Cost Per Click). By optimizing landing pages, you convert more clicks into leads. Finally, adding strict negative keywords prevents you from wasting budget on irrelevant searches.",
    },
    {
      q: "Should I hire a PPC agency in Melbourne?",
      a: "Yes. Managing Google Ads independently or using automated 'smart' campaigns frequently results in over 40% of your budget leaking into non-converting clicks. Hiring an experienced Melbourne PPC agency like Digitacurve ensures your campaign is run by dedicated specialists, drastically reducing your Cost Per Acquisition (CPA) and generating higher-quality leads.",
    }
  ];

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="relative py-24 bg-slate-900 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 w-fit mx-auto">
            <HelpCircle className="w-3.5 h-3.5" />
            AI & Voice Search Optimizations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            Providing direct, transparent, and authoritative answers to the most common Google Ads and AdWords inquiries in Victoria.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? "bg-slate-950 border border-orange-500/25 shadow-lg shadow-orange-500/5" 
                    : "bg-slate-950/40 border border-white/5 hover:border-white/10"
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 cursor-pointer text-left focus:outline-none"
                >
                  <h3 className="text-base sm:text-lg font-bold text-slate-100 tracking-tight leading-snug">
                    {faq.q}
                  </h3>
                  <div className={`w-8 h-8 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center flex-shrink-0 text-slate-400 hover:text-white transition-all duration-200 ${
                    isOpen ? "border-orange-500/25 text-orange-500" : ""
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-orange-500" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Accordion Answer Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-72 border-t border-white/5" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-5 text-sm sm:text-base text-slate-300 leading-relaxed font-sans font-medium">
                    {faq.a}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* FAQ Support strip */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-950/60 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-white">Have a specific campaign scenario?</h4>
            <p className="text-xs text-slate-400 mt-1">Get an instant campaign assessment directly from our AdWords specialists.</p>
          </div>
          <a
            href="#audit-form-section"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-bold bg-orange-500 hover:bg-orange-600 transition-colors text-slate-950 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            Ask an Expert Consultant
          </a>
        </div>

      </div>
    </section>
  );
}
