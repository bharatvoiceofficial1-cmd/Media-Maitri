"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Layers,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Search,
  Clock,
  Sparkles,
  Phone,
  Filter,
} from "lucide-react";
import Card3D from "@/components/Card3D";
import ConstellationBackground from "@/components/ConstellationBackground";
import { servicesData } from "@/data/servicesData";
import { companyData } from "@/data/companyData";
import { serviceMetadataMap } from "@/data/serviceMetadata";

const CATEGORIES = [
  "All Capabilities",
  "Outdoor & Transit Media",
  "Print, Packaging & Merch",
  "Spatial & Event Architecture",
  "Digital, PR & Strategy",
] as const;

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Capabilities");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredServices = useMemo(() => {
    return servicesData.filter((svc) => {
      const meta = serviceMetadataMap[svc.slug];
      const matchesCategory =
        selectedCategory === "All Capabilities" ||
        meta?.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        svc.title.toLowerCase().includes(q) ||
        svc.tagline.toLowerCase().includes(q) ||
        svc.introduction.toLowerCase().includes(q) ||
        svc.inclusions.some(
          (inc) =>
            inc.title.toLowerCase().includes(q) ||
            inc.desc.toLowerCase().includes(q)
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* HERO SECTION WITH THREEUI 3D PARTICLE FIELD */}
      <section className="relative bg-[#0B1930] text-white py-20 lg:py-28 overflow-hidden border-b border-amber-500/20">
        <ConstellationBackground
          variant="particle-network"
          className="opacity-30"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#D4AF37] bg-white/5 px-4 py-1.5 rounded-full border border-amber-400/30 mb-6 backdrop-blur-md">
            <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Official 12-Service Executive Directory</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Engineered Brand Solutions &bull;{" "}
            <span className="text-[#D4AF37]">End-to-End Delivery</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-10">
            Rooted in our foundational doctrine of &ldquo;{companyData.tagline},&rdquo;
            every solution is backed by verified physical production standards,
            rigorous quality proofing, and dedicated on-ground execution across
            Uttar Pradesh and North India.
          </p>

          {/* SEARCH & FILTER CONTROLS */}
          <div className="max-w-2xl mx-auto">
            <div className="relative flex items-center bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-2 shadow-2xl focus-within:border-[#D4AF37] transition-all">
              <Search className="w-5 h-5 text-amber-300 ml-3 mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Search services, materials (e.g. hoardings, fleet, packaging, PR, flex)..."
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

      {/* FILTER TABS & SERVICE CATALOG */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CATEGORY TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const count =
              cat === "All Capabilities"
                ? servicesData.length
                : servicesData.filter(
                    (s) => serviceMetadataMap[s.slug]?.category === cat
                  ).length;
            const isActive = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? "bg-[#0B1930] text-[#D4AF37] shadow-lg border border-[#D4AF37]/50 scale-105"
                    : "bg-white text-slate-700 hover:text-[#0B1930] border border-slate-200 hover:border-slate-300"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                    isActive
                      ? "bg-[#D4AF37] text-[#0B1930]"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* RESULTS COUNT & ACTIVE FILTER PILL */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-8 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>
              Showing <strong>{filteredServices.length}</strong> of 12 Services
            </span>
          </div>
          {searchQuery && (
            <span className="text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-md">
              Filtered by keyword: &ldquo;{searchQuery}&rdquo;
            </span>
          )}
        </div>

        {/* 12 SERVICES GRID */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8">
            <p className="text-slate-500 text-base mb-4">
              No services matched your query &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Capabilities");
              }}
              className="px-6 py-2.5 bg-[#0B1930] text-[#D4AF37] rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors"
            >
              Reset Filters &amp; View All 12 Services
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredServices.map((svc) => {
              const meta = serviceMetadataMap[svc.slug];

              return (
                <Card3D key={svc.id} depth={12}>
                  <div className="bg-white rounded-3xl border border-slate-200 hover:border-[#D4AF37] shadow-sm hover:shadow-2xl transition-all duration-300 p-7 flex flex-col justify-between h-full group hover:-translate-y-1">
                    <div>
                      {/* TOP BADGES */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold text-[#D4AF37] bg-amber-50 border border-amber-200 px-3 py-1 rounded-lg">
                          SERVICE {svc.id} / 12
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                          {meta?.category.split("&")[0].trim() || "Advertising"}
                        </span>
                      </div>

                      {/* THUMBNAIL SHOWCASE */}
                      <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-900 border border-slate-100">
                        <Image
                          src={svc.image}
                          alt={svc.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {meta?.sla && (
                          <div className="absolute bottom-2.5 left-2.5 bg-[#0B1930]/90 backdrop-blur-md text-amber-300 text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1.5">
                            <Clock className="w-3 h-3 text-[#D4AF37]" />
                            <span>{meta.sla}</span>
                          </div>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-[#0B1930] group-hover:text-[#B89225] transition-colors mb-2">
                        {svc.title}
                      </h3>

                      <p className="text-xs font-semibold text-amber-700/95 mb-3 line-clamp-1">
                        {svc.tagline}
                      </p>

                      <p className="text-slate-600 text-xs leading-relaxed mb-6 line-clamp-3">
                        {svc.introduction}
                      </p>

                      {/* INCLUSIONS LIST */}
                      <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Core Inclusions:
                        </div>
                        {svc.inclusions.slice(0, 4).map((inc, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs text-slate-700"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                            <span className="font-medium truncate">{inc.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* BOTTOM ACTIONS */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={`/services/${svc.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1930] group-hover:text-[#D4AF37] transition-colors"
                      >
                        <span>Specifications &amp; Scope</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <a
                        href={`https://wa.me/${companyData.contact.whatsapp}?text=Hello%20Media%20Maitri,%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(
                          svc.title
                        )}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
                        title={`Enquire about ${svc.title} on WhatsApp`}
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </Card3D>
              );
            })}
          </div>
        )}

        {/* BOTTOM QUICK CONSULTATION BANNER */}
        <div className="bg-[#0B1930] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl border border-amber-500/20">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#D4AF37] bg-white/5 border border-amber-400/30 px-3 py-1 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Direct Media Planner Hotline</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Need a tailored multi-channel campaign proposal?
          </h3>

          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8">
            Combine prominent highway hoardings, moving auto fleets, and digital PR into
            a single synchronized media schedule with verified on-ground deployment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}?text=Hello%20Media%20Maitri,%20I%20would%20like%20to%20discuss%20a%20tailored%20campaign%20package.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss Campaign on WhatsApp</span>
            </a>
            <a
              href={`tel:${companyData.contact.phone1}`}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded-xl border border-white/20 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call {companyData.contact.phone1}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
