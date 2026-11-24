"use client";

import React from "react";
import dynamic from "next/dynamic";

export const ConstellationField = dynamic(
  () =>
    import("@designcodeio/threeui/components/ConstellationField").then(
      (mod) => mod.ConstellationField
    ),
  { ssr: false }
);

interface ConstellationBackgroundProps {
  variant?:
    | "constellation-field"
    | "particle-drift"
    | "particle-network"
    | "gateway-flow"
    | "connectivity-graph"
    | "interface-lines"
    | "defense-lines"
    | "topo-field";
  className?: string;
  opacity?: number;
}

export default function ConstellationBackground({
  variant = "particle-network",
  className = "",
  opacity = 0.25,
}: ConstellationBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden mix-blend-screen ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <ConstellationField variant={variant} />
    </div>
  );
}
