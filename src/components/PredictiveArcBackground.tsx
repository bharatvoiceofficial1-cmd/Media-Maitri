"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";

// WebGL components require client-side execution (ssr: false) in Next.js
export const PredictiveArcCanvas = dynamic(
  () =>
    import(
      "@designcodeio/threeui/components/PredictiveArcCanvas"
    ).then((mod) => mod.PredictiveArcCanvas),
  { ssr: false }
);

interface PredictiveArcBackgroundProps {
  variant?: "ribbon-field" | "void-field" | "halftone-flow" | "amber-halftone";
  className?: string;
  opacity?: number;
}

export default function PredictiveArcBackground({
  variant,
  className = "",
  opacity = 0.45,
}: PredictiveArcBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden mix-blend-screen ${className}`}
      style={{ opacity, width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      <Suspense fallback={<div className="w-full h-full" />}>
        <PredictiveArcCanvas
          variant={variant}
          className="w-full h-full absolute inset-0"
        />
      </Suspense>
    </div>
  );
}
