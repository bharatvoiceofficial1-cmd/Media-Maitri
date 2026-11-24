"use client";

import React from "react";
import dynamic from "next/dynamic";

// WebGL components require client-side execution (ssr: false) in Next.js
export const PredictiveArcCanvas = dynamic(
  () => import("@designcodeio/threeui").then((mod) => mod.PredictiveArcCanvas),
  { ssr: false }
);

export default function PredictiveArcBackground(props: Record<string, unknown>) {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <PredictiveArcCanvas {...props} />
    </div>
  );
}
