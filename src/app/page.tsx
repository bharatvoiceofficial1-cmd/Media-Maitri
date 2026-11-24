import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  Mail,
  FileDown,
  CheckCircle2,
  ChevronRight,
  Building2,
  Sparkles,
  MapPin,
  Clock,
  ShieldCheck,
  TrendingUp,
  Layers,
  Radio,
  Share2,
  Boxes,
  Award,
} from "lucide-react";
import BharatVoiceParticleCanvas from "@/components/BharatVoiceParticleCanvas";
import Card3D from "@/components/Card3D";
import HomeEnquiryForm from "@/components/HomeEnquiryForm";
import {
  MotionAccordion,
  MotionAccordionItem,
} from "@/components/motion/motion-faqs-accordion";
import { companyData } from "@/data/companyData";
import { servicesData } from "@/data/servicesData";
import { industriesData } from "@/data/industriesData";
import { portfolioData } from "@/data/portfolioData";

// Agency FAQ Accordion items from Official Company Magazine
const agencyFaqs: MotionAccordionItem[] = [
  {
    question: "What makes Media Maitri's approach authentic?",
    answer:
      "We believe communication is not simply about being seen; it is about being understood and trusted. We combine real consumer insights, verified high-footfall billboard and transit placements, and meticulous in-house production without exaggerated claims or generic templates.",
  },
  {
    question: "Can Media Maitri handle integrated multi-channel campaigns?",
    answer:
      "Yes. Our 12 business services are unified under one roof. We seamlessly coordinate physical outdoor hoardings, transit fleet advertising, and direct print distribution with targeted digital performance marketing, PR, and live event management.",
  },
  {
    question: "What is the typical turnaround timeline for campaign execution?",
    answer:
      "Our streamlined operational workflow allows standard campaigns to be strategically planned, designed, printed, and deployed in as fast as 10 business days, subject to creative approvals and site availability.",
  },
  {
    question: "How are outdoor hoardings and moving transit locations selected?",
    answer:
      "We conduct rigorous traffic density and route analysis to select prime arterial highways, commercial junctions, and verified transit routes across Varanasi, Uttar Pradesh, and Northern India.",
  },
  {
    question: "How do I initiate a proposal or request rate cards?",
    answer:
      "You can connect directly via our WhatsApp enquiry hotline (+91 7267060201) or submit an enquiry through our proposal form. Our media managers respond within 2 hours with customized rate cards and feasibility outlines.",
  },
];

// 4 Master Agency Pillars grouping the 12 services
const servicePillars = [
  {
    pillar: "Outdoor & Transit Media",
    tagline: "High-Visibility Physical Dominance Across Commuter Arteries",
    services: servicesData.slice(0, 3), // Air Pamphlets, Banners/Hoardings, Auto Ads
  },
  {
    pillar: "Mass Broadcast & Digital PR",
    tagline: "Authority, News Dominance & Calibrated Online Performance",
    services: [servicesData[3], servicesData[4], servicesData[7]], // Digital Marketing, Radio, Digital PR
  },
  {
    pillar: "Spatial Architecture & Design",
    tagline: "3D Corporate Environments, Signage & Strategic Outreach",
    services: [servicesData[5], servicesData[6]], // Office Design, Strategies & Research
  },
  {
    pillar: "Brand Craft & Experiential",
    tagline: "Packaging Systems, Merchandise & On-Ground Summits",
    services: servicesData.slice(8, 12), // Community, Packaging, Merchandising, Events
  },
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-[#FAF9F6] text-[#0B1930]">
      {/* =========================================================
          SECTION 1: EDITORIAL 3D HERO (ASYMMETRIC LUXURY SPLIT)
      ========================================================= */}
      <section className="relative min-h-[92vh] flex items-center bg-[#060E1A] text-white overflow-hidden border-b border-amber-500/20">
        {/* 3D Hyperboloid Particle Canvas from Bharat Voice */}
        <BharatVoiceParticleCanvas />

        {/* Subtle Ambient Radial Wash */}
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-900/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* LEFT COLUMN: EDITORIAL HEADLINE & AUTHORITY */}
            <div className="lg:col-span-7">
              {/* Technical Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-amber-400/30 backdrop-blur-md mb-6">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4AF37]">
                  Media Maitri &bull; Promoting What&apos;s Authentic
                </span>
              </div>

              {/* Solid Authoritative Typography (Zero Gradient Slop) */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white mb-6">
                12 Distinct Services.{" "}
                <span className="block mt-2 text-[#D4AF37]">
                  One Creative Communications Partner.
                </span>
              </h1>

              {/* Editorial Narrative Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-10 max-w-2xl">
                Media Maitri bridges large-format outdoor displays, transit media,
                and physical direct print with cutting-edge digital marketing, PR,
                and experiential brand environments across Uttar Pradesh and Northern India.
              </p>

              {/* Tactile Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-14">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2.5 bg-[#D4AF37] hover:bg-[#F3C644] text-[#0B1930] font-bold text-base px-8 py-4 rounded-xl shadow-xl transition-all duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <span>Explore 12 Services</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <a
                  href={`https://wa.me/${companyData.contact.whatsapp}?text=Hello%20Media%20Maitri,%20I%20would%20like%20to%20discuss%20a%20campaign.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-base px-6 py-4 rounded-xl border border-white/20 hover:border-[#D4AF37]/60 transition-all duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  <span>WhatsApp Direct</span>
                </a>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                {companyData.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-3xl lg:text-4xl font-extrabold text-[#D4AF37] font-mono">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-400 font-medium tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: 3D SPATIAL MAGAZINE PREVIEW CARD */}
            <div className="lg:col-span-5">
              <Card3D depth={16}>
                <div className="luxury-card rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden group">
                  {/* Glowing Medallion Emblem */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-full ring-2 ring-[#D4AF37] overflow-hidden bg-black/50 shadow-xl shrink-0">
                        <Image
                          src="/assets/brand/logo_master.png"
                          alt="Media Maitri Medallion"
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-white block leading-none">
                          MEDIA <span className="text-[#D4AF37]">MAITRI</span>
                        </span>
                        <span className="text-[10px] text-amber-300 font-medium block mt-1 tracking-wider uppercase">
                          Corporate Magazine 2027–2028
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#D4AF37] bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                      Official Issue
                    </span>
                  </div>

                  {/* Magazine Cover Artwork */}
                  <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 bg-slate-950 border border-white/10">
                    <Image
                      src="/assets/brand/cover_graphic.png"
                      alt="Media Maitri Magazine Cover 2027–2028"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 450px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040914] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                      <span className="font-semibold text-white drop-shadow">
                        32 Full-Color Pages
                      </span>
                      <span className="font-mono text-amber-300 font-bold drop-shadow">
                        Verified Portfolio
                      </span>
                    </div>
                  </div>

                  {/* Key Corporate Credibility Facts */}
                  <div className="space-y-3 text-xs mb-6">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/10">
                      <span className="text-slate-400">Headquarters:</span>
                      <span className="font-semibold text-slate-200 truncate max-w-[200px]">
                        Varanasi, Uttar Pradesh
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/10">
                      <span className="text-slate-400">Direct Hotline:</span>
                      <span className="font-mono font-semibold text-amber-300">
                        {companyData.contact.phone1}
                      </span>
                    </div>
                  </div>

                  {/* 1-Click Magazine Download CTA */}
                  <a
                    href="/documents/Media_Maitri_Company_magazine_2027-28.pdf"
                    download
                    className="w-full flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#F3C644] text-[#0B1930] font-bold text-xs py-3.5 px-4 rounded-xl shadow-lg transition-all active:scale-95"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Download Official Magazine 2027–2028 (PDF)</span>
                  </a>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: SIGNATURE CAPABILITIES (ASYMMETRIC BENTO GRID)
      ========================================================= */}
      <section className="py-24 bg-[#0B1930] text-white relative border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-3">
              Strategic In-House Execution
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Four Core Pillars of Brand Dominance.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              Every campaign is delivered through high-precision in-house fabrication,
              licensed outdoor arterial assets, and calibrated digital targeting.
            </p>
          </div>

          {/* ASYMMETRIC BENTO GRID (NO 3-IDENTICAL-CARDS TELL) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* LEAD BENTO CARD (Span 7) - Large Format Outdoor Dominance */}
            <div className="lg:col-span-7">
              <Card3D depth={10} className="h-full">
                <div className="luxury-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between h-full group overflow-hidden relative">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#D4AF37] bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                        PILLAR 01 &bull; OUTDOOR MEDIA
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        Arterial Highways &amp; Prime Junctions
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 leading-snug">
                      Prime Billboards, Hoardings &amp; Unipoles
                    </h3>
                    <p className="text-slate-300 text-sm mt-3 leading-relaxed max-w-xl">
                      Engineered for maximum commuter dwell-time and unmissable scale.
                      Strategically positioned along verified high-density routes in Varanasi,
                      Allahabad highway, and major commercial trade corridors.
                    </p>
                  </div>

                  <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden my-6 border border-white/10 bg-slate-950">
                    <Image
                      src="/assets/services/banners-hoardings-flex.png"
                      alt="Outdoor Hoardings and Billboards"
                      fill
                      sizes="(max-width: 1024px) 100vw, 700px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs">
                    <div>
                      <div className="text-[#D4AF37] font-bold font-mono text-base">
                        10-Day
                      </div>
                      <div className="text-slate-400 text-[11px]">Turnaround</div>
                    </div>
                    <div>
                      <div className="text-[#D4AF37] font-bold font-mono text-base">
                        Heavy-Flex
                      </div>
                      <div className="text-slate-400 text-[11px]">Weatherproof</div>
                    </div>
                    <div>
                      <div className="text-[#D4AF37] font-bold font-mono text-base">
                        Verified
                      </div>
                      <div className="text-slate-400 text-[11px]">Traffic Density</div>
                    </div>
                  </div>
                </div>
              </Card3D>
            </div>

            {/* STACKED BENTO SUPPORT CARDS (Span 5) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* SUPPORT CARD 1: Transit Fleet Advertising */}
              <Card3D depth={10} className="flex-1">
                <div className="luxury-card rounded-3xl p-7 flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#D4AF37]">
                        PILLAR 02 &bull; TRANSIT MEDIA
                      </span>
                      <Share2 className="w-4 h-4 text-amber-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Moving Transit Fleet &amp; Auto Wraps
                    </h4>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      Continuous mobile advertising cutting through densely populated markets,
                      residential colonies, and crowded business sectors where static billboards cannot reach.
                    </p>
                  </div>

                  <div className="relative h-36 w-full rounded-xl overflow-hidden my-4 border border-white/10 bg-slate-950">
                    <Image
                      src="/assets/services/auto-moving-advertisement.png"
                      alt="Auto Moving Advertisement"
                      fill
                      sizes="400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="text-[11px] text-amber-300 font-medium">
                    &bull; Complete vehicle hood, back-panel &amp; side-wrap branding
                  </div>
                </div>
              </Card3D>

              {/* SUPPORT CARD 2: Luxury Packaging & Box Architecture */}
              <Card3D depth={10} className="flex-1">
                <div className="luxury-card rounded-3xl p-7 flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#D4AF37]">
                        PILLAR 03 &bull; BRAND CRAFT
                      </span>
                      <Boxes className="w-4 h-4 text-amber-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Luxury Packaging &amp; Label Systems
                    </h4>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      Custom rigid boxes, gold foil embossing, and structural shelf packaging
                      engineered to communicate authentic product value and drive retail conversion.
                    </p>
                  </div>

                  <div className="relative h-36 w-full rounded-xl overflow-hidden my-4 border border-white/10 bg-slate-950">
                    <Image
                      src="/assets/services/packaging-branding.png"
                      alt="Luxury Packaging and Branding"
                      fill
                      sizes="400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="text-[11px] text-amber-300 font-medium">
                    &bull; Meticulous raw material selection &amp; unboxing design
                  </div>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: EDITORIAL BRAND NARRATIVE & LEADERSHIP MESSAGE
      ========================================================= */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* LEFT COLUMN: EDITORIAL STATEMENT */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#B89225]">
                Brand Philosophy &bull; Media Maitri
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1930] leading-snug">
                Communication is not simply about being seen; it is about being{" "}
                <span className="text-[#D4AF37]">understood and trusted</span>.
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                At Media Maitri, we believe every brand has a story worth telling
                and that the strongest communication begins with authenticity.
                Our philosophy, <strong>&ldquo;Promoting What&apos;s Authentic,&rdquo;</strong> guides
                our commitment to meaningful ideas, thoughtful execution, and
                relationships built on trust.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-9 h-9 rounded-xl bg-[#0B1930] text-[#D4AF37] flex items-center justify-center font-bold text-sm mb-3">
                    01
                  </div>
                  <h4 className="font-bold text-base text-[#0B1930]">
                    Authentic Ground Realities
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    No inflated footfall counts or generic stock creative. We deliver verified locations and transparent reporting.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-9 h-9 rounded-xl bg-[#0B1930] text-[#D4AF37] flex items-center justify-center font-bold text-sm mb-3">
                    02
                  </div>
                  <h4 className="font-bold text-base text-[#0B1930]">
                    End-to-End Craftsmanship
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    From raw paper stock selection and billboard placements to digital campaigns, every touchpoint is executed with precision.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[#0B1930] hover:text-[#D4AF37] font-bold text-sm group"
                >
                  <span>Read Full About Us &amp; Leadership Message</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: LEADERSHIP PORTRAIT & DIRECTORS DESK */}
            <div className="lg:col-span-5">
              <Card3D depth={14}>
                <div className="bg-[#0B1930] rounded-3xl p-8 text-white shadow-2xl border border-amber-500/30 overflow-hidden relative">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                    <div className="relative w-20 h-20 rounded-full ring-4 ring-[#D4AF37] overflow-hidden bg-slate-900 shadow-xl shrink-0">
                      <Image
                        src="/assets/team/member_1.png"
                        alt="Jeevesh Patel - Managing Director / CEO"
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Jeevesh Patel
                      </h3>
                      <p className="text-xs text-[#D4AF37] font-semibold">
                        Managing Director / CEO
                      </p>
                      <span className="text-[10px] text-slate-400 font-mono block mt-1">
                        From the Director&apos;s Desk
                      </span>
                    </div>
                  </div>

                  <blockquote className="text-xs text-slate-300 italic leading-relaxed mb-6">
                    &ldquo;At Media Maitri, we see advertising not merely as promotional space,
                    but as a sacred responsibility between brands and their communities.
                    When you promote what is truly authentic, your audience becomes your greatest advocate.&rdquo;
                  </blockquote>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Head Office:</span>
                    <span className="font-semibold text-amber-300">Varanasi, Uttar Pradesh</span>
                  </div>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: COMPLETE 12 BUSINESS SERVICES CATALOG
      ========================================================= */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#B89225] mb-2">
              Capabilities Catalog
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1930] mb-4">
              Our 12 Business Services
            </h2>
            <p className="text-slate-600 text-base">
              Every service is delivered with strategic rigor, creative distinction,
              and complete end-to-end execution.
            </p>
          </div>

          {/* 12 SERVICES GRID WITH ASYMMETRIC DEPTH */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((svc) => (
              <Card3D key={svc.id} depth={10}>
                <div className="group h-full flex flex-col justify-between bg-white rounded-2xl border border-slate-200 hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all duration-200 p-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#D4AF37] px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200">
                        SERVICE {svc.id} / 12
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400">
                        10-Day Turnaround
                      </span>
                    </div>

                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-5 bg-slate-900 border border-slate-100">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-[#0B1930] group-hover:text-[#B89225] transition-colors mb-1.5">
                      {svc.title}
                    </h3>
                    <p className="text-xs font-semibold text-amber-700 mb-3">
                      {svc.tagline}
                    </p>
                    <p className="text-slate-600 text-xs leading-relaxed mb-4 line-clamp-3">
                      {svc.introduction}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-6">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Key Inclusions:
                      </div>
                      {svc.inclusions.slice(0, 3).map((inc, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs text-slate-700"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span className="font-medium truncate">
                            {inc.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-xs font-bold text-[#0B1930] group-hover:text-[#D4AF37] transition-colors"
                  >
                    <span>View Inclusions &amp; Applications</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card3D>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#0B1930] hover:bg-slate-800 text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg transition-all"
            >
              <span>Explore All 12 Services in Detail</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5: FEATURED PORTFOLIO WORK
      ========================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#B89225] mb-2">
                Campaign Gallery
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1930]">
                Featured Creative Work
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0B1930] hover:text-[#D4AF37] group"
            >
              <span>Browse Full Portfolio Gallery</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {portfolioData.slice(0, 6).map((item) => (
              <Card3D key={item.id} depth={10}>
                <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
                  <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0B1930]/90 text-[#D4AF37] text-[11px] font-bold px-3 py-1 rounded-full border border-amber-400/20">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-lg font-bold text-[#0B1930] mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-500">
                        {item.client}
                      </span>
                      <a
                        href={`https://wa.me/${companyData.contact.whatsapp}?text=I%20am%20interested%20in%20a%20campaign%20similar%20to%20${encodeURIComponent(item.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#0B1930] hover:text-[#D4AF37] flex items-center gap-1"
                      >
                        <span>Inquire Similar</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: INDUSTRIES WE SERVE
      ========================================================= */}
      <section className="py-24 bg-[#0B1930] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-2">
              Sector Mastery
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Industries We Serve
            </h2>
            <p className="text-slate-300 text-sm mt-3 leading-relaxed">
              Tailored campaign strategy and media placement across 8 specialized commercial sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesData.map((ind) => (
              <div
                key={ind.id}
                className="luxury-card rounded-2xl p-6 flex flex-col justify-between hover:border-[#D4AF37] transition-all group"
              >
                <div>
                  <span className="font-mono text-[11px] font-bold text-[#D4AF37] bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                    SECTOR {ind.id}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-4 mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {ind.description}
                  </p>
                </div>

                <Link
                  href="/industries"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-white pt-3 border-t border-white/10"
                >
                  <span>Explore Sector Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 7: AGENCY FAQ ACCORDION
      ========================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#B89225] mb-2">
              Clarity &amp; Transparency
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1930]">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Everything you need to know about partnering with Media Maitri.
            </p>
          </div>

          <MotionAccordion items={agencyFaqs} />
        </div>
      </section>

      {/* =========================================================
          SECTION 8: BUSINESS ENQUIRY & CONTACT CONVERSION
      ========================================================= */}
      <section className="py-24 bg-[#060E1A] text-white relative border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* LEFT CONTACT INFO */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4AF37]">
                Start Your Campaign
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug">
                Let&apos;s Build Your Next{" "}
                <span className="text-[#D4AF37]">Authentic Campaign</span>.
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Connect directly with our planning and media team for custom
                proposals, rate cards, and on-ground execution timelines.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-slate-300 leading-relaxed">
                    {companyData.contact.address}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <a
                    href={`tel:${companyData.contact.phone1}`}
                    className="text-slate-300 hover:text-white"
                  >
                    {companyData.contact.phone1} / {companyData.contact.phone2}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <a
                    href={`mailto:${companyData.contact.email}`}
                    className="text-slate-300 hover:text-white"
                  >
                    {companyData.contact.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span className="text-slate-300">
                    Mon &ndash; Sat: 09:30 AM &ndash; 07:30 PM IST
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-3 text-xs text-slate-300">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>
                  All campaign proposals are backed by verified site feasibility and guaranteed SLAs.
                </span>
              </div>
            </div>

            {/* RIGHT FORM CONTAINER */}
            <div className="lg:col-span-7">
              <div className="luxury-card rounded-3xl p-8 sm:p-10 border border-amber-500/30">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Request a Campaign Proposal
                </h3>
                <p className="text-xs text-slate-400 mb-8">
                  Fill in your requirements below for prompt direct follow-up from our media managers.
                </p>

                <HomeEnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
