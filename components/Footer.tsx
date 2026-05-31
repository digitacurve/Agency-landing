import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      url: "https://www.instagram.com/digitacurve/",
      label: "Instagram"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
      url: "https://www.facebook.com/profile.php?id=61586495587348",
      label: "Facebook"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      url: "https://www.linkedin.com/in/rishabhjaisal0425/",
      label: "LinkedIn"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      ),
      url: "https://share.google/IszwEKC0pok3prxtr",
      label: "Google Business Profile"
    }
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-white/5 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Intro */}
          <div className="md:col-span-5 flex flex-col items-start text-left">
            <a href="#" className="flex items-center gap-2 group mb-6">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-orange-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                D
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Digita<span className="text-orange-500">curve</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6 font-medium">
              We engineer high-performance Google Ads campaigns custom-tailored for Melbourne companies. Stop leaking ad spend and start securing qualified inquiries.
            </p>
            
            {/* Social channels */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-white/5 hover:border-orange-500/30 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services / Keywords Links */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-xs font-black text-slate-300 uppercase tracking-widest mb-6">TARGET MARKETS</h4>
            <ul className="space-y-3.5 text-sm font-medium text-slate-400">
              <li>
                <a href="#services-section" className="hover:text-orange-500 transition-colors">
                  Google Ads Management Melbourne
                </a>
              </li>
              <li>
                <a href="#services-section" className="hover:text-orange-500 transition-colors">
                  AdWords Expert Melbourne
                </a>
              </li>
              <li>
                <a href="#services-section" className="hover:text-orange-500 transition-colors">
                  PPC Agency Melbourne
                </a>
              </li>
              <li>
                <a href="#services-section" className="hover:text-orange-500 transition-colors">
                  SEM Agency Melbourne
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Coordinates */}
          <div className="md:col-span-4 text-left">
            <h4 className="text-xs font-black text-slate-300 uppercase tracking-widest mb-6">BUSINESS COORDINATES</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Sector 62,<br />
                  Noida, Uttar Pradesh 201309,<br />
                  India
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="tel:7572094201" className="hover:text-orange-500 transition-colors text-slate-200 font-bold">
                  +1 757 209 4201
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="mailto:sale@digitacurve.com" className="hover:text-orange-500 transition-colors">
                  sale@digitacurve.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold uppercase tracking-wider text-slate-500">
          <p>© {currentYear} Digitacurve. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Melbourne Local PPC Specialist</span>
            <span>No Lock-In Contracts</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
