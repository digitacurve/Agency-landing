"use client";

import React, { useState } from "react";
import { Sparkles, MessageCircle, Send, CheckCircle, Loader2, Lock } from "lucide-react";

export default function AuditForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [website, setWebsite] = useState("");
  const [service, setService] = useState("Google Ads");
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !whatsapp) {
      setStatus("error");
      setMessage("Please fill out all required fields.");
      return;
    }

    setStatus("loading");

    try {
      // FormSubmit AJAX submission to Digitacurve sales address
      const response = await fetch("https://formsubmit.co/ajax/sale@digitacurve.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: name,
          Email: email,
          "WhatsApp Number": whatsapp,
          "Website URL": website || "Not Provided",
          "Requested Service": service,
          _subject: `Digitacurve Ads Lead - ${name} (${website || "No URL"})`,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success === "true") {
        setStatus("success");
        setMessage("Your request has been successfully submitted! Redirecting to WhatsApp...");
        
        // Push conversion tracking events to Google Tag Manager (GTM-K63647ZH)
        if (typeof window !== "undefined" && (window as any).dataLayer) {
          (window as any).dataLayer.push({
            event: "form_submission_success",
            lead_name: name,
            lead_email: email,
            lead_whatsapp: whatsapp,
            lead_website: website,
            lead_service: service,
          });
        }

        // Automatic WhatsApp Redirect Flow after a short delay
        setTimeout(() => {
          const encodedMessage = encodeURIComponent(
            `Hi Digitacurve, I just requested a Free Campaign Audit on your Melbourne Google Ads landing page.\n\n` +
            `*Name:* ${name}\n` +
            `*Email:* ${email}\n` +
            `*WhatsApp:* ${whatsapp}\n` +
            `*Website:* ${website || "None"}\n` +
            `*Selected Service:* ${service}\n\n` +
            `Please let me know when we can review my account and identify the wasted ad spend.`
          );
          
          window.location.href = `https://wa.me/7572094201?text=${encodedMessage}`;
        }, 1800);

      } else {
        throw new Error("FormSubmit response failed");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Oops! Something went wrong. Please check your network and try again.");
    }
  };

  return (
    <section id="audit-form-section" className="relative py-24 bg-slate-950 bg-grid-pattern border-t border-white/5">
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-orange-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 w-fit mx-auto">
            <Sparkles className="w-3.5 h-3.5" />
            Zero Obligation, Maximum Value
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight leading-tight">
            Claim Your Free Google Ads Audit
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            No lock-in contracts. Get an expert review of your Quality Scores, target keywords, and ad spend efficiency in Melbourne.
          </p>
        </div>

        {/* Lead Form Box */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
          
          {/* Top Sheen */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 via-amber-500 to-blue-500" />
          
          {status === "success" ? (
            
            /* SUCCESS OVERLAY */
            <div className="py-12 flex flex-col items-center justify-center text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Form Submitted Successfully!</h3>
              <p className="text-slate-300 mt-3 max-w-md text-base leading-relaxed">{message}</p>
              
              {/* Fallback Manual Click Button */}
              <a
                href={`https://wa.me/7572094201?text=${encodeURIComponent(
                  `Hi Digitacurve, I requested a Free Ads Audit.\nName: ${name}\nEmail: ${email}\nWebsite: ${website}`
                )}`}
                className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 transition-colors text-slate-950 font-bold text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                Open WhatsApp Manually
              </a>
            </div>

          ) : (

            /* STANDARD INTAKE FORM */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Field 1: Name */}
                <div className="flex flex-col text-left">
                  <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Name <span className="text-orange-500 font-black">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    disabled={status === "loading"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-sm"
                  />
                </div>

                {/* Field 2: Email */}
                <div className="flex flex-col text-left">
                  <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Email Address <span className="text-orange-500 font-black">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    disabled={status === "loading"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Field 3: WhatsApp Number */}
                <div className="flex flex-col text-left">
                  <label htmlFor="whatsapp" className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    WhatsApp Number <span className="text-orange-500 font-black">*</span>
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    required
                    disabled={status === "loading"}
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="Enter mobile or WhatsApp (e.g. +61 400 000 000)"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-sm"
                  />
                </div>

                {/* Field 4: Website URL */}
                <div className="flex flex-col text-left">
                  <label htmlFor="website" className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Website URL <span className="text-slate-500 font-medium">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    id="website"
                    disabled={status === "loading"}
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="e.g. www.mybusiness.com.au"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-sm"
                  />
                </div>
              </div>

              {/* Field 5: Services Dropdown */}
              <div className="flex flex-col text-left">
                <label htmlFor="service" className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Target Service Focus <span className="text-slate-500 font-medium">(Optional)</span>
                </label>
                <select
                  id="service"
                  disabled={status === "loading"}
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-white/10 text-white outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-sm cursor-pointer"
                >
                  <option value="Google Ads">Google Ads Management (Recommended)</option>
                  <option value="Digital Marketing">Digital Marketing Strategy</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="SEO">SEO (Search Engine Optimization)</option>
                  <option value="Website Design and Development">Website Design & Development</option>
                </select>
              </div>

              {/* Status Message Panel */}
              {status === "error" && (
                <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/25 text-rose-400 text-xs font-semibold text-left">
                  {message}
                </div>
              )}

              {/* Submission Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4.5 rounded-xl text-base font-extrabold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99] mt-4"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing Campaign Audit...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Request Free Audit & Launch WhatsApp Chat
                  </>
                )}
              </button>

              {/* Privacy indicator */}
              <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-4">
                <Lock className="w-3.5 h-3.5 text-slate-500" />
                <span>100% Privacy Protected. Zero Sales Spam.</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
