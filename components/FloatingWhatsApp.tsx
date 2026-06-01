"use client";

import React from "react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/917572094201?text=Hi%20Digitacurve%2C%20I'm%20inquiring%20about%20your%20Melbourne%20Google%20Ads%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group hover:shadow-emerald-500/20"
    >
      {/* Ripple Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />

      {/* WhatsApp SVG Icon */}
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="currentColor"
        className="relative z-10"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.436 0 9.86-4.427 9.864-9.869.002-2.634-1.02-5.11-2.881-6.974C16.43 1.897 13.96 .872 11.325.872 5.889.872 1.465 5.295 1.461 10.74c-.002 1.624.43 3.203 1.251 4.61l-1.004 3.664 3.754-.985c1.4.76 2.8 1.125 4.185 1.125zM17.56 14.24c-.302-.15-1.78-.88-2.057-.982-.277-.1-.478-.15-.678.15-.2.3-.778.98-.953 1.18-.177.2-.353.226-.655.075-3.05-1.52-4.043-2.62-4.843-3.998-.21-.362-.02-.56.16-.74.162-.162.353-.41.53-.615.176-.2.235-.34.352-.565.118-.23.059-.43-.03-.58-.088-.15-.678-1.63-.93-2.235-.245-.589-.49-.509-.677-.518-.172-.008-.37-.01-.567-.01-.197 0-.518.074-.79.37-.272.295-1.04 1.015-1.04 2.475 0 1.46 1.06 2.87 1.21 3.07.15.2 2.085 3.18 5.05 4.464.705.305 1.256.488 1.685.625.71.226 1.356.194 1.867.118.571-.085 1.78-.727 2.03-1.43.25-.702.25-1.305.175-1.43-.075-.125-.277-.201-.58-.352z" />
      </svg>

      {/* Popover/Tooltip label on hover */}
      <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 bg-slate-900 text-slate-100 text-xs font-bold py-2 px-3 rounded-lg border border-white/10 whitespace-nowrap shadow-xl">
        WhatsApp Us
      </span>
    </a>
  );
}
