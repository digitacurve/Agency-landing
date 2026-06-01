"use client";

import React, { useRef, useEffect, useState } from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(1.5); // Default aspect ratio before crop

  // Sizing heights matched with perfect cropped aspect ratio container.
  // Since it's a vertically-oriented logo (emblem on top, text below), we increase heights slightly to maintain readability.
  const heights = {
    sm: 64,
    md: 88,
    lg: 110,
  };
  const displayHeight = heights[size];
  const displayWidth = Math.round(displayHeight * aspectRatio);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = "/logo.png";
    img.crossOrigin = "anonymous";
    img.onload = () => {
      // Create offscreen canvas to analyze and crop the image
      const offscreen = document.createElement("canvas");
      offscreen.width = img.width;
      offscreen.height = img.height;
      const oCtx = offscreen.getContext("2d");
      if (!oCtx) return;

      oCtx.drawImage(img, 0, 0);

      try {
        const imgData = oCtx.getImageData(0, 0, offscreen.width, offscreen.height);
        const data = imgData.data;
        const width = offscreen.width;
        const height = offscreen.height;

        // Find bounding box of non-white pixels
        let minX = width;
        let maxX = 0;
        let minY = height;
        let maxY = 0;

        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            const i = (y * width + x) * 4;
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];

            // If the pixel is not white/near-white background
            if (r < 240 || g < 240 || b < 240) {
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          }
        }

        // Add padding to prevent edge clipping (e.g. 3px)
        const pad = 3;
        minX = Math.max(0, minX - pad);
        minY = Math.max(0, minY - pad);
        maxX = Math.min(width, maxX + pad);
        maxY = Math.min(height, maxY + pad);

        const croppedWidth = maxX - minX;
        const croppedHeight = maxY - minY;

        if (croppedWidth <= 0 || croppedHeight <= 0) {
          // Fallback if no non-white pixels are found
          minX = 0;
          minY = 0;
          maxX = width;
          maxY = height;
        }

        const newAspect = (maxX - minX) / (maxY - minY);
        setAspectRatio(newAspect);

        // Configure high-DPI display canvas size for retina quality (2x scale)
        canvas.width = (maxX - minX) * 2;
        canvas.height = (maxY - minY) * 2;

        ctx.scale(2, 2);

        // Draw cropped area with transparency cleanup
        const croppedImgData = oCtx.getImageData(minX, minY, maxX - minX, maxY - minY);
        const cData = croppedImgData.data;

        for (let i = 0; i < cData.length; i += 4) {
          const r = cData[i];
          const g = cData[i + 1];
          const b = cData[i + 2];

          // Key out white pixels
          if (r > 240 && g > 240 && b > 240) {
            cData[i + 3] = 0; // Transparent
          }
        }

        // Put clean data back and render
        const tempCanvas = document.createElement("canvas");
        tempCanvas.width = maxX - minX;
        tempCanvas.height = maxY - minY;
        const tempCtx = tempCanvas.getContext("2d");
        if (tempCtx) {
          tempCtx.putImageData(croppedImgData, 0, 0);
          ctx.drawImage(tempCanvas, 0, 0);
        }

        setLoaded(true);
      } catch (err) {
        console.error("Failed to crop and clean logo image:", err);
        // Fallback: draw raw image
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        setLoaded(true);
      }
    };
  }, []);

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ height: displayHeight, width: displayWidth }}
    >
      <canvas
        ref={canvasRef}
        style={{
          height: displayHeight,
          width: displayWidth,
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.25s ease-in-out",
        }}
        className="object-contain"
      />
      {!loaded && (
        <div className="absolute inset-0 bg-slate-900/10 animate-pulse rounded" />
      )}
    </div>
  );
}
