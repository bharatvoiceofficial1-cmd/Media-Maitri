import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Layers,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import Card3D from "@/components/Card3D";
import { servicesData } from "@/data/servicesData";
import { companyData } from "@/data/companyData";

export const metadata: Metadata = {
  title: "12 Business Services | Advertising, Branding & Promotions",
  description:
    "Explore all 12 dedicated business services offered by Media Maitri, from outdoor billboards, auto advertising, and print to digital marketing, PR, and event management.",
};

export default function ServicesPage() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B89225] bg-amber-100/70 px-4 py-1.5 rounded-full border border-amber-300 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Complete Agency Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1930] mb-6">
            Our 12 Business Services
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            United by one creative vision and the philosophy of &ldquo;Promoting
            What&apos;s Authentic.&rdquo; Each service is backed by meticulous design,
            high-grade production, and dedicated campaign coordination.
          </p>
        </div>

        {/* 12 SERVICES DETAILED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {servicesData.map((svc) => (
            <Card3D key={svc.id} depth={12}>
              <div className="bg-white rounded-3xl border border-slate-200/90 hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all p-7 flex flex-col justify-between h-full group">
                <div>
                  {/* SERVICE HEADER */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#D4AF37] bg-amber-50 border border-amber-200 px-3 py-1 rounded-lg">
                      SERVICE {svc.id} / 12
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Media Maitri
                    </span>
                  </div>

                  {/* THUMBNAIL SHOWCASE */}
                  <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-slate-100">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-[#0B1930] group-hover:text-[#B89225] transition-colors mb-2">
                    {svc.title}
                  </h3>

                  <p className="text-xs font-semibold text-amber-700/90 mb-3">
                    {svc.tagline}
                  </p>

                  <p className="text-slate-600 text-xs leading-relaxed mb-6 line-clamp-3">
                    {svc.introduction}
                  </p>

                  {/* 5 INCLUSIONS LIST */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Service Inclusions:
                    </div>
                    {svc.inclusions.map((inc, i) => (
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

                {/* BOTTOM ACTION */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1930] group-hover:text-[#D4AF37] transition-colors"
                  >
                    <span>Read Full Inclusions</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href={`https://wa.me/${companyData.contact.whatsapp}?text=Hello%20Media%20Maitri,%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(
                      svc.title
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all"
                    title={`Enquire about ${svc.title} on WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Card3D>
          ))}
        </div>

        {/* BOTTOM QUICK CONTACT BANNER */}
        <div className="bg-[#0B1930] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl border border-amber-500/20">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Need a tailored multi-channel package?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8">
            Our media planners can combine outdoor displays, transit ads, and
            digital marketing into a single high-conversion campaign.
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
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded-xl border border-white/20 transition-all"
            >
              Contact Office
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
