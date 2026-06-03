"use client";

import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  // Sizing heights matched with original aspect ratio container
  const heights = {
    sm: 64,
    md: 88,
    lg: 110,
  };
  const displayHeight = heights[size];

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ height: displayHeight }}
    >
      <img
        src="/logo.png"
        alt="DigitaCurve Logo"
        className="h-full w-auto object-contain transition-all duration-300 group-hover:scale-[1.02]"
        style={{ height: displayHeight }}
      />
    </div>
  );
}
