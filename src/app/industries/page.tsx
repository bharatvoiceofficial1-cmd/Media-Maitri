"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Building2,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  ShoppingBag,
  Home,
  GraduationCap,
  Utensils,
  HeartPulse,
  Film,
  Truck,
  Shirt,
  Layers,
  ChevronRight,
  Search,
  Filter,
} from "lucide-react";
import Card3D from "@/components/Card3D";
import ConstellationBackground from "@/components/ConstellationBackground";
import { industriesData, IndustryItem } from "@/data/industriesData";
import { companyData } from "@/data/companyData";

const iconMap: Record<string, React.ReactNode> = {
  "ecommerce-retail": <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />,
  "real-estate-infrastructure": <Home className="w-5 h-5 text-[#D4AF37]" />,
  "education-edtech": <GraduationCap className="w-5 h-5 text-[#D4AF37]" />,
  "food-beverage-hospitality": <Utensils className="w-5 h-5 text-[#D4AF37]" />,
  "healthcare-wellness-fitness": <HeartPulse className="w-5 h-5 text-[#D4AF37]" />,
  "entertainment-film-music": <Film className="w-5 h-5 text-[#D4AF37]" />,
  "automotive-industrial-manufacturing": <Truck className="w-5 h-5 text-[#D4AF37]" />,
  "fashion-beauty-lifestyle": <Shirt className="w-5 h-5 text-[#D4AF37]" />,
};

const sectorMetricsMap: Record<string, { mediaMix: string; impact: string }> = {
  "ecommerce-retail": {
    mediaMix: "Packaging + Digital Ads + Direct Mail",
    impact: "High Repeat Order Retention",
  },
  "real-estate-infrastructure": {
    mediaMix: "Highway Hoardings + 3D Signage + Digital PR",
    impact: "150,000+ Daily Corridor Views",
  },
  "education-edtech": {
    mediaMix: "Flyer Distribution + Auto Fleets + Search Ads",
    impact: "Hyperlocal Admissions Lift",
  },
  "food-beverage-hospitality": {
    mediaMix: "Transit Wraps + Menus + Influencer PR",
    impact: "High Footfall Weekend Spikes",
  },
  "healthcare-wellness-fitness": {
    mediaMix: "Local Canopies + Informative Leaflets + PR",
    impact: "Trust & Community Credibility",
  },
  "entertainment-film-music": {
    mediaMix: "Mass Banners + Auto Fleets + Digital Blast",
    impact: "Day-One Opening Ticket Buzz",
  },
  "automotive-industrial-manufacturing": {
    mediaMix: "Highway Hoardings + Expo Stalls + Corporate Merch",
    impact: "Dealer & Commercial Buyer Network",
  },
  "fashion-beauty-lifestyle": {
    mediaMix: "Luxury Packaging + Lookbooks + Social PR",
    impact: "Elevated Brand Prestige & Unboxing",
  },
};

export default function IndustriesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string>("all");

  const filteredIndustries = useMemo(() => {
    return industriesData.filter((ind) => {
      const matchesTab = selectedId === "all" || ind.id === selectedId;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        ind.title.toLowerCase().includes(q) ||
        ind.tagline.toLowerCase().includes(q) ||
        ind.description.toLowerCase().includes(q) ||
        ind.solutions.some((s) => s.toLowerCase().includes(q));

      return matchesTab && matchesSearch;
    });
  }, [selectedId, searchQuery]);

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* HERO SECTION WITH THREEUI 3D CONNECTIVITY SHADER */}
      <section className="relative bg-[#0B1930] text-white py-20 lg:py-28 overflow-hidden border-b border-amber-500/20">
        <ConstellationBackground
          variant="connectivity-graph"
          className="opacity-25"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#D4AF37] bg-white/5 px-4 py-1.5 rounded-full border border-amber-400/30 mb-6 backdrop-blur-md">
            <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Specialized Domain Knowledge</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Industries We Serve &bull;{" "}
            <span className="text-[#D4AF37]">Tailored Execution</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-10">
            Every sector operates on distinct buyer psychology, distribution dynamics,
            and compliance standards. We engineer high-conversion advertising media
            specifically calibrated for your target market.
          </p>

          {/* SEARCH BAR */}
          <div className="max-w-xl mx-auto">
            <div className="relative flex items-center bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-2 shadow-2xl focus-within:border-[#D4AF37] transition-all">
              <Search className="w-5 h-5 text-amber-300 ml-3 mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Search sector (e.g. real estate, healthcare, hospitality)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white placeholder-slate-400 text-sm focus:outline-none px-2 py-2"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-slate-300 hover:text-white px-3 py-1 bg-white/10 rounded-lg mr-1 transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTOR CARDS & METRICS */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* QUICK JUMP TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedId("all")}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
              selectedId === "all"
                ? "bg-[#0B1930] text-[#D4AF37] shadow-lg border border-[#D4AF37]/50 scale-105"
                : "bg-white text-slate-700 hover:text-[#0B1930] border border-slate-200"
            }`}
          >
            All 8 Sectors
          </button>
          {industriesData.map((ind) => {
            const isActive = selectedId === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedId(ind.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? "bg-[#0B1930] text-[#D4AF37] shadow-lg border border-[#D4AF37]/50 scale-105"
                    : "bg-white text-slate-700 hover:text-[#0B1930] border border-slate-200"
                }`}
              >
                <span>{ind.title.split("&")[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* 8 SECTOR DETAILED CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredIndustries.map((ind) => {
            const metrics = sectorMetricsMap[ind.slug];

            return (
              <Card3D key={ind.id} depth={10}>
                <div className="bg-white rounded-3xl border border-slate-200 hover:border-[#D4AF37] shadow-sm hover:shadow-2xl transition-all duration-300 p-8 flex flex-col justify-between h-full group hover:-translate-y-1">
                  <div>
                    {/* TOP BADGE & ICON */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200">
                          {iconMap[ind.slug] || <Sparkles className="w-5 h-5 text-[#D4AF37]" />}
                        </div>
                        <span className="font-mono text-xs font-bold text-[#D4AF37] bg-amber-50/60 border border-amber-200 px-3 py-1 rounded-lg">
                          SECTOR {ind.id} OF 08
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Media Maitri
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#0B1930] group-hover:text-[#B89225] transition-colors mb-2">
                      {ind.title}
                    </h3>

                    <p className="text-xs font-semibold text-amber-800 mb-4">
                      {ind.tagline}
                    </p>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {ind.description}
                    </p>

                    {/* METRICS CALLOUT */}
                    {metrics && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80">
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-amber-900/70">
                            Recommended Media Mix
                          </div>
                          <div className="text-xs font-semibold text-[#0B1930] mt-0.5">
                            {metrics.mediaMix}
                          </div>
                        </div>
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-amber-900/70">
                            Core Advantage
                          </div>
                          <div className="text-xs font-semibold text-amber-900 mt-0.5">
                            {metrics.impact}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* MEDIA MAITRI SOLUTIONS */}
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Media Maitri Execution Capabilities:</span>
                      </div>
                      <ul className="space-y-2.5">
                        {ind.solutions.map((sol, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs text-slate-700 leading-snug"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span className="font-medium">{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* BOTTOM ACTION */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={`https://wa.me/${companyData.contact.whatsapp}?text=Hello%20Media%20Maitri,%20I%20would%20like%20to%20discuss%20advertising%20solutions%20for%20the%20${encodeURIComponent(
                        ind.title
                      )}%20sector.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#0B1930] hover:text-[#D4AF37] transition-colors"
                    >
                      <span>Request Sector Media Plan</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                      href={`https://wa.me/${companyData.contact.whatsapp}?text=Hello%20Media%20Maitri,%20I%20would%20like%20to%20discuss%20advertising%20solutions%20for%20the%20${encodeURIComponent(
                        ind.title
                      )}%20sector.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
                      title="Enquire on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Card3D>
            );
          })}
        </div>

        {/* BOTTOM SECTOR CTA */}
        <div className="bg-[#0B1930] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl border border-amber-500/20">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Operating in a specialized or multi-disciplinary niche?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8">
            Our media planners structure bespoke cross-sector roadmaps combining outdoor billboards,
            moving transit fleet displays, and targeted digital PR to dominate your market.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}?text=Hello%20Media%20Maitri,%20I%20would%20like%20to%20schedule%20an%20industry%20media%20briefing.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Schedule Sector Media Briefing</span>
            </a>
            <Link
              href="/services"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded-xl border border-white/20 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Explore All 12 Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
