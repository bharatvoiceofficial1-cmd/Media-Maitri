"use client";

import React from "react";
import dynamic from "next/dynamic";

export const DotMatrixBackground = dynamic(
  () =>
    import("@designcodeio/threeui/components/DotMatrixBackground").then(
      (mod) => mod.DotMatrixBackground
    ),
  { ssr: false }
);

interface DotMatrixWrapperProps {
  speed?: number;
  gridScale?: number;
  mouseAmount?: number;
  pulseSpeed?: number;
  radius?: number;
  opacity?: number;
  hue?: number;
  className?: string;
}

export default function DotMatrixBackgroundWrapper({
  opacity = 0.2,
  gridScale = 50,
  className = "",
  ...props
}: DotMatrixWrapperProps) {
  return (
    <div
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden mix-blend-screen ${className}`}
      aria-hidden="true"
    >
      <DotMatrixBackground
        opacity={opacity}
        gridScale={gridScale}
        {...props}
      />
    </div>
  );
}
