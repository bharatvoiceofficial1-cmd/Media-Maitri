"use client";

import React from "react";
import Image from "next/image";
import { companyData } from "@/data/companyData";

export default function FloatingLogoBadge() {
  return (
    <aside
      aria-label="Media Maitri Quick Access"
      className="fixed bottom-6 left-6 z-50 group"
    >
      <a
        href={`https://wa.me/${companyData.contact.whatsapp}?text=Hello%20Media%20Maitri,%20I%20would%20like%20to%20connect%20with%20your%20team.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 p-1.5 pr-4 rounded-full bg-[#060E1A]/95 text-white border border-[#D4AF37]/50 shadow-2xl backdrop-blur-md hover:border-[#D4AF37] hover:shadow-[#D4AF37]/30 transition-all duration-300 hover:scale-105 active:scale-95"
        title="Media Maitri — Promoting What's Authentic"
      >
        <div className="relative w-10 h-10 rounded-full ring-2 ring-[#D4AF37] overflow-hidden bg-black/60 shrink-0 shadow-lg">
          <Image
            src="/assets/brand/logo_master.png"
            alt="Media Maitri Logo"
            width={40}
            height={40}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="hidden sm:block text-left">
          <span className="text-xs font-bold text-white block leading-none">
            MEDIA <span className="text-[#D4AF37]">MAITRI</span>
          </span>
          <span className="text-[10px] text-amber-300/90 font-medium block mt-0.5">
            Quick Connect
          </span>
        </div>
      </a>
    </aside>
  );
}
