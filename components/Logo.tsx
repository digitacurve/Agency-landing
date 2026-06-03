"use client";

import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  // Height classes matched to original sizing proportions
  const heights = {
    sm: "h-12 sm:h-14",
    md: "h-16 sm:h-20",
    lg: "h-24 sm:h-28",
  };

  const displayHeight = heights[size];

  return (
    <div className={`relative flex items-center shrink-0 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="DigitaCurve Logo"
        className={`w-auto object-contain transition-all duration-300 group-hover:scale-[1.02] ${displayHeight}`}
      />
    </div>
  );
}

