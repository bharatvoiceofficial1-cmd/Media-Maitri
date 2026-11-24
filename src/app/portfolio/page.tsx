"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  MessageCircle,
  Search,
  Filter,
  X,
  ExternalLink,
  Layers,
  Calendar,
  Building,
  Tag,
} from "lucide-react";
import Card3D from "@/components/Card3D";
import DotMatrixBackgroundWrapper from "@/components/DotMatrixBackgroundWrapper";
import { CursorImageTrail } from "@/components/motion/cursor-image-trail";
import { portfolioData, portfolioCategories, PortfolioItem } from "@/data/portfolioData";
import { companyData } from "@/data/companyData";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  // Generate thumbnail nodes for the CursorImageTrail
  const trailItems = useMemo(() => {
    return portfolioData.map((item) => (
      <div
        key={item.id}
        className="w-24 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden shadow-2xl border-2 border-[#D4AF37] bg-slate-900 pointer-events-none"
      >
        <Image
          src={item.image}
          alt={item.title}
          width={112}
          height={80}
          className="w-full h-full object-cover"
        />
      </div>
    ));
  }, []);

  const filteredItems = useMemo(() => {
    return portfolioData.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.client && item.client.toLowerCase().includes(q)) ||
        item.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* HERO SECTION WITH THREEUI DOT MATRIX & CURSOR IMAGE TRAIL */}
      <section className="relative bg-[#0B1930] text-white py-20 lg:py-28 overflow-hidden border-b border-amber-500/20">
        <DotMatrixBackgroundWrapper opacity={0.18} gridScale={55} />

        <CursorImageTrail
          items={trailItems}
          itemSize={110}
          trailLength={6}
          spawnDistance={70}
          className="relative z-10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#D4AF37] bg-white/5 px-4 py-1.5 rounded-full border border-amber-400/30 mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Official Media Maitri Showcase</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
              Portfolio &amp;{" "}
              <span className="text-[#D4AF37]">Executed Campaigns</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-10">
              A curated physical and digital record of high-impact arterial hoardings,
              transit fleet branding, custom luxury retail packaging, and verified digital PR
              rollouts delivered across Uttar Pradesh.
            </p>

            {/* SEARCH BAR */}
            <div className="max-w-xl mx-auto">
              <div className="relative flex items-center bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-2 shadow-2xl focus-within:border-[#D4AF37] transition-all">
                <Search className="w-5 h-5 text-amber-300 ml-3 mr-2 shrink-0" />
                <input
                  type="text"
                  placeholder="Search campaigns, tags, sectors (e.g. billboard, transit, packaging)..."
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
        </CursorImageTrail>
      </section>

      {/* PORTFOLIO CONTENT & FILTERING */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CATEGORY FILTER TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {portfolioCategories.map((cat) => {
            const count =
              cat === "All"
                ? portfolioData.length
                : portfolioData.filter((i) => i.category === cat).length;
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

        {/* RESULTS HEADER */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-8 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>
              Displaying <strong>{filteredItems.length}</strong> Projects
            </span>
          </div>
          {searchQuery && (
            <span className="text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-md">
              Filtered by: &ldquo;{searchQuery}&rdquo;
            </span>
          )}
        </div>

        {/* PORTFOLIO GRID */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8">
            <p className="text-slate-500 text-base mb-4">
              No portfolio projects found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-6 py-2.5 bg-[#0B1930] text-[#D4AF37] rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredItems.map((item) => (
              <Card3D key={item.id} depth={12}>
                <div
                  onClick={() => setActiveModalItem(item)}
                  className="cursor-pointer bg-white rounded-3xl border border-slate-200 hover:border-[#D4AF37] shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full group hover:-translate-y-1"
                >
                  {/* PROJECT IMAGE */}
                  <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#0B1930]/90 backdrop-blur-md text-[#D4AF37] text-xs font-bold px-3 py-1 rounded-full border border-amber-400/20">
                      {item.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-mono px-2.5 py-1 rounded-md">
                      {item.year}
                    </div>
                  </div>

                  {/* PROJECT DETAILS */}
                  <div className="p-7 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-xl font-bold text-[#0B1930] group-hover:text-[#B89225] transition-colors mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                        {item.description}
                      </p>

                      {/* TAGS */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-500 truncate max-w-[150px]">
                        {item.client}
                      </span>

                      <span className="inline-flex items-center gap-1 font-bold text-[#0B1930] group-hover:text-[#D4AF37] transition-colors">
                        <span>View Scope</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        )}

        {/* BOTTOM CALL TO ACTION */}
        <div className="bg-[#0B1930] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl border border-amber-500/20">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#D4AF37] bg-white/5 border border-amber-400/30 px-3 py-1 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Regional Media Track Record</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Want to see physical site proofs or request custom samples?
          </h3>

          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8">
            We maintain verified high-resolution photo archives and geotagged mounting
            proofs for every outdoor and transit asset across North India.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}?text=Hello%20Media%20Maitri,%20I%20would%20like%20to%20request%20campaign%20samples%20and%20portfolio%20details.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Request Samples on WhatsApp</span>
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded-xl border border-white/20 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Contact Media Office
            </Link>
          </div>
        </div>
      </section>

      {/* INTERACTIVE LIGHTBOX MODAL */}
      {activeModalItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-amber-500/30 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* MODAL IMAGE */}
            <div className="relative h-64 sm:h-80 w-full bg-slate-950">
              <Image
                src={activeModalItem.image}
                alt={activeModalItem.title}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setActiveModalItem(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 bg-[#0B1930]/90 backdrop-blur-md text-[#D4AF37] text-xs font-bold px-3 py-1 rounded-full border border-amber-400/20">
                {activeModalItem.category}
              </div>
            </div>

            {/* MODAL BODY */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  Client: {activeModalItem.client} &bull; {activeModalItem.year}
                </span>
                <h3 className="text-2xl font-extrabold text-[#0B1930] mt-3">
                  {activeModalItem.title}
                </h3>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {activeModalItem.description}
              </p>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Campaign Tags &amp; Execution Deliverables:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeModalItem.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-lg"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* ACTION */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-500 font-mono">
                  Official Media Maitri Record
                </span>
                <a
                  href={`https://wa.me/${companyData.contact.whatsapp}?text=Hello%20Media%20Maitri,%20I%20am%20interested%20in%20a%20campaign%20similar%20to:%20${encodeURIComponent(
                    activeModalItem.title
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire Similar Campaign</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
