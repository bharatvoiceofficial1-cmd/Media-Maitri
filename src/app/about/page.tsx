import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Sparkles,
  ShieldCheck,
  Target,
  Compass,
  FileDown,
  ArrowRight,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import Card3D from "@/components/Card3D";
import { companyData } from "@/data/companyData";

export const metadata: Metadata = {
  title: "About Us & Leadership Vision",
  description:
    "Learn about Media Maitri's philosophy, leadership team, and authentic approach to creative communication, branding, and advertising.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* PAGE HERO */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B89225] bg-amber-100/70 px-4 py-1.5 rounded-full border border-amber-300 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Heritage &amp; Ethos</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1930] mb-6">
            About Media Maitri
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Founded on the conviction that authentic communication creates
            enduring brand value. We unite physical presence and digital reach
            into one cohesive agency experience.
          </p>
        </div>

        {/* SECTION: BRAND PHILOSOPHY & VALUES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold tracking-widest uppercase text-[#B89225]">
              Brand Philosophy
            </div>
            <h2 className="text-3xl font-extrabold text-[#0B1930] leading-snug">
              &ldquo;{companyData.tagline}&rdquo;
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              In a crowded media landscape saturated with noise and fleeting
              trends, Media Maitri focuses on what is genuine, impactful, and
              true to our clients&apos; core strengths. We believe that when
              communication is rooted in truth, it earns customer trust and
              builds sustainable market presence.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200">
                <Target className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#0B1930]">Our Mission</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    To empower businesses across India with end-to-end advertising
                    and communication solutions that are creative, practical, and
                    measurably effective.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200">
                <Compass className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#0B1930]">Our Vision</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    To be the most trusted creative communications partner for
                    enterprises seeking authentic regional and national brand growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#0B1930]">
                    Authentic Execution
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    From raw paper stock selection and billboard placements to
                    digital campaigns, every touchpoint is executed with precision.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <Card3D depth={15}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-amber-500/30">
                <div className="relative h-96 w-full">
                  <Image
                    src="/assets/brand/cover_graphic.png"
                    alt="Media Maitri Corporate Brochure"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-[#0B1930] text-white flex items-center justify-between">
                  <div>
                    <div className="font-bold text-sm">Official Company Magazine</div>
                    <div className="text-xs text-amber-300">2027–2028 Edition</div>
                  </div>
                  <a
                    href="/documents/Media_Maitri_Company_magazine_2027-28.pdf"
                    download
                    className="inline-flex items-center gap-1.5 bg-[#D4AF37] hover:bg-[#F3C644] text-[#0B1930] font-bold text-xs px-3.5 py-2 rounded-xl transition-all"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </Card3D>
          </div>
        </div>

        {/* SECTION: MANAGING DIRECTOR'S MESSAGE */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-14 shadow-xl mb-24 relative overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B89225]">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span>Executive Leadership Address</span>
            </div>

            <h2 className="text-3xl font-extrabold text-[#0B1930]">
              From the Desk of the Director
            </h2>

            <div className="text-sm font-semibold text-amber-700 italic">
              {companyData.directorsMessage.greeting}
            </div>

            <p className="text-slate-700 text-base leading-relaxed">
              {companyData.directorsMessage.paragraph1}
            </p>

            <p className="text-slate-700 text-base leading-relaxed">
              {companyData.directorsMessage.paragraph2}
            </p>

            <p className="text-slate-700 text-base leading-relaxed">
              {companyData.directorsMessage.paragraph3}
            </p>

            <p className="text-slate-700 text-base leading-relaxed">
              {companyData.directorsMessage.paragraph4}
            </p>

            <p className="text-slate-700 text-base leading-relaxed">
              {companyData.directorsMessage.paragraph5}
            </p>

            {/* SIGNATURES */}
            <div className="pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {companyData.directorsMessage.signatories.map((sig, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-base text-[#0B1930]">
                    {sig.name}
                  </div>
                  <div className="text-xs font-semibold text-amber-700 mt-0.5">
                    {sig.role}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-2 font-mono">
                    Media Maitri Executive Board
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION: 4 CORE PILLARS */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-[#0B1930] mb-3">
            Our Professional Approach
          </h2>
          <p className="text-slate-600 text-sm">
            Four guiding commitments that shape every campaign we touch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {companyData.values.map((val, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200/90 hover:border-[#D4AF37] shadow-sm hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#D4AF37] font-bold font-mono text-sm mb-4">
                0{idx + 1}
              </div>
              <h3 className="font-bold text-base text-[#0B1930] mb-2">
                {val.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA BANNER */}
        <div className="bg-[#0B1930] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl border border-amber-500/20">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Ready to partner with an authentic creative agency?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8">
            Connect with our team today to explore how our 12 services can
            elevate your brand identity and market visibility.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/services"
              className="bg-gradient-to-r from-[#D4AF37] to-[#F3C644] text-[#0B1930] font-bold text-sm px-6 py-3 rounded-xl shadow-lg"
            >
              Explore 12 Services
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3 rounded-xl border border-white/20"
            >
              Contact Us Directly
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
