"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  MessageCircle,
  Tag,
  Calendar,
  ExternalLink,
} from "lucide-react";
import Card3D from "@/components/Card3D";
import { portfolioData, portfolioCategories } from "@/data/portfolioData";
import { companyData } from "@/data/companyData";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredItems =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B89225] bg-amber-100/70 px-4 py-1.5 rounded-full border border-amber-300 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Creative Showcase</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1930] mb-6">
            Portfolio &amp; Creative Work
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            A curated showcase of our physical advertising, transit branding,
            packaging, workspace design, and digital campaigns executed with
            authentic precision.
          </p>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {portfolioCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? "bg-[#0B1930] text-[#D4AF37] shadow-lg scale-105 border border-[#D4AF37]/50"
                    : "bg-white text-slate-600 hover:text-[#0B1930] border border-slate-200 hover:border-slate-300"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* PORTFOLIO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredItems.map((item) => (
            <Card3D key={item.id} depth={12}>
              <div className="bg-white rounded-3xl border border-slate-200/90 hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col h-full group">
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
                </div>

                <div className="p-7 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1930] group-hover:text-[#B89225] transition-colors mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>

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
                    <span className="font-semibold text-slate-500">
                      {item.client}
                    </span>

                    <a
                      href={`https://wa.me/${companyData.contact.whatsapp}?text=Hello%20Media%20Maitri,%20I%20saw%20your%20portfolio%20project:%20${encodeURIComponent(
                        item.title
                      )}%20and%20would%20like%20similar%20work.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-bold text-[#0B1930] hover:text-[#D4AF37] transition-colors"
                    >
                      <span>Inquire Similar</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>

        {/* BOTTOM CALL TO ACTION */}
        <div className="bg-[#0B1930] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl border border-amber-500/20">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Want to see more case studies or request custom samples?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8">
            We have executed extensive regional campaigns across Uttar Pradesh
            and North India. Contact our creative team for tailored pitch decks.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}?text=Hello%20Media%20Maitri,%20I%20would%20like%20to%20request%20campaign%20samples.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Request Samples on WhatsApp</span>
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded-xl border border-white/20 transition-all"
            >
              Book Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
