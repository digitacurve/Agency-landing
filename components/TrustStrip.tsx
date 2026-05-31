import React from "react";
import { Award, Zap, BarChart3, Users2, ShieldAlert } from "lucide-react";

export default function TrustStrip() {
  const trustItems = [
    {
      icon: <Award className="w-6 h-6 text-orange-500" />,
      title: "Google Certified Agency",
      desc: "Recognized Paid Search Experts"
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: "+140% CTR Uplift",
      desc: "Average improvement in client CTR"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-500" />,
      title: "$2M+ Managed Spend",
      desc: "Efficient budget optimization"
    },
    {
      icon: <Users2 className="w-6 h-6 text-orange-500" />,
      title: "15+ Industry Experts",
      desc: "Dedicated Melbourne team support"
    }
  ];

  return (
    <section className="relative py-10 bg-slate-900 border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Strip Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center text-center lg:text-left divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          
          {trustItems.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 lg:pl-8 first:pl-0 ${
                idx > 0 ? "pt-6 sm:pt-4 lg:pt-0" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center border border-white/5 flex-shrink-0 shadow-inner shadow-orange-500/5">
                {item.icon}
              </div>
              <div className="flex flex-col gap-0.5">
                <h4 className="text-base font-bold text-white tracking-tight">{item.title}</h4>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
