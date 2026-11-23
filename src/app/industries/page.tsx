import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Building2,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import Card3D from "@/components/Card3D";
import { industriesData } from "@/data/industriesData";
import { companyData } from "@/data/companyData";

export const metadata: Metadata = {
  title: "Industries We Serve | Sector-Specific Advertising Solutions",
  description:
    "Tailored advertising, branding, and promotional solutions across 8 major sectors: E-commerce, Real Estate, Education, Hospitality, Healthcare, Entertainment, Automotive, and Fashion.",
};

export default function IndustriesPage() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B89225] bg-amber-100/70 px-4 py-1.5 rounded-full border border-amber-300 mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Specialized Domain Knowledge</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1930] mb-6">
            Industries We Serve
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Every sector operates on unique buyer psychology and distribution
            mechanics. We craft tailored creative and placement strategies
            engineered for maximum conversion in your market.
          </p>
        </div>

        {/* 8 SECTOR DETAILED CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {industriesData.map((ind) => (
            <Card3D key={ind.id} depth={10}>
              <div className="bg-white rounded-3xl border border-slate-200/90 hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all p-8 flex flex-col justify-between h-full group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#D4AF37] bg-amber-50 border border-amber-200 px-3 py-1 rounded-lg">
                      SECTOR {ind.id} OF 08
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Media Maitri
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0B1930] group-hover:text-[#B89225] transition-colors mb-2">
                    {ind.title}
                  </h3>

                  <p className="text-xs font-semibold text-amber-700 mb-4">
                    {ind.tagline}
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {ind.description}
                  </p>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Media Maitri Solutions:</span>
                    </div>
                    <ul className="space-y-2">
                      {ind.solutions.map((sol, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs text-slate-700 leading-snug"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={`https://wa.me/${companyData.contact.whatsapp}?text=Hello%20Media%20Maitri,%20I%20would%20like%20to%20discuss%20advertising%20solutions%20for%20the%20${encodeURIComponent(
                      ind.title
                    )}%20sector.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0B1930] hover:text-[#D4AF37] transition-colors"
                  >
                    <span>Request Industry Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={`https://wa.me/${companyData.contact.whatsapp}?text=Hello%20Media%20Maitri,%20I%20would%20like%20to%20discuss%20advertising%20solutions%20for%20the%20${encodeURIComponent(
                      ind.title
                    )}%20sector.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Card3D>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="bg-[#0B1930] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl border border-amber-500/20">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Operating in a different niche or emerging sector?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8">
            Our research and strategy team conducts customized competitive audits
            and audience mapping for any industry.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F3C644] text-[#0B1930] font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg hover:scale-105 transition-all"
          >
            <span>Speak with a Sector Specialist</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
