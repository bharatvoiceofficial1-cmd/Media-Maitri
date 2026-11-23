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
  Send,
  Building,
  Sparkles,
} from "lucide-react";
import BharatVoiceParticleCanvas from "@/components/BharatVoiceParticleCanvas";
import Card3D from "@/components/Card3D";
import HomeEnquiryForm from "@/components/HomeEnquiryForm";
import { HoverExpand, HoverExpandItem } from "@/components/motion/hover-expand";
import {
  MotionAccordion,
  MotionAccordionItem,
} from "@/components/motion/motion-faqs-accordion";
import { companyData } from "@/data/companyData";
import { servicesData } from "@/data/servicesData";
import { industriesData } from "@/data/industriesData";
import { portfolioData } from "@/data/portfolioData";
import { teamData } from "@/data/teamData";

// Interactive showcase items for HoverExpand
const signatureShowcaseItems: HoverExpandItem[] = [
  {
    label: "Large-Format Prime Billboards & Flex",
    sublabel: "Outdoor Media • 2027",
    image: "/assets/services/banners-hoardings-flex.png",
    imageAlt: "Billboard Outdoor Hoardings",
    description:
      "Arterial highway hoardings, unipoles, and retail shopfronts engineered for high-visibility commuter reach.",
  },
  {
    label: "Transit Fleet & Auto-Rickshaw Wraps",
    sublabel: "Moving Ads • 2027",
    image: "/assets/services/auto-moving-advertisement.png",
    imageAlt: "Moving Transit Auto Ads",
    description:
      "High-frequency mobile brand ambassadors moving through dense residential and commercial traffic routes.",
  },
  {
    label: "Luxury Packaging Architecture & Identity",
    sublabel: "Brand Craft • 2027",
    image: "/assets/services/packaging-branding.png",
    imageAlt: "Luxury Packaging and Branding",
    description:
      "Custom rigid boxes, label systems, and shelf-dominant retail presentation conveying authentic product value.",
  },
  {
    label: "Corporate Workspace & 3D Architectural Signage",
    sublabel: "Spatial Design • 2027",
    image: "/assets/services/office-corporate-place-designing.png",
    imageAlt: "Corporate Office Design and 3D Signage",
    description:
      "Environmental brand spaces, reception graphics, and motivational corporate interiors.",
  },
  {
    label: "National Digital PR & Media Relations",
    sublabel: "Public Relations • 2027",
    image: "/assets/services/digital-pr-media-relations.png",
    imageAlt: "Digital PR and Media Relations",
    description:
      "Strategic news stories, press announcements, and media outreach establishing verifiable brand credibility.",
  },
  {
    label: "Flagship Corporate Summits & Expos",
    sublabel: "Events • 2027",
    image: "/assets/services/event-management-promotions.png",
    imageAlt: "Event Management and Product Launches",
    description:
      "Turnkey exhibition stalls, product unveilings, and experiential on-ground promotional activations.",
  },
];

// Agency FAQ Accordion items
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

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* =========================================================
          SECTION 1: EDITORIAL 3D HERO (CLEAN, SOLID TYPOGRAPHY)
      ========================================================= */}
      <section className="relative min-h-[90vh] flex items-center bg-[#071326] text-white overflow-hidden">
        {/* 3D Hyperboloid Waving Particle Strand & Comet Canvas (from Bharat Voice) */}
        <BharatVoiceParticleCanvas />

        {/* Ambient Depth Tint */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-3xl">
            {/* CLEAN TYPOGRAPHIC EYEBROW (NO AWKWARD PILL SYMBOLS) */}
            <div className="text-xs font-bold tracking-[0.22em] uppercase text-[#D4AF37] mb-4">
              Media Maitri &bull; Promoting What&apos;s Authentic
            </div>

            {/* SOLID BRAND TYPOGRAPHY (ZERO GRADIENT TEXT) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white mb-6">
              12 Distinct Services.{" "}
              <span className="block mt-2 text-[#D4AF37]">
                One Creative Communications Partner.
              </span>
            </h1>

            {/* EDITORIAL NARRATIVE SUBTITLE */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-10 max-w-2xl">
              Media Maitri bridges large-scale outdoor displays, transit media,
              and physical direct print with cutting-edge digital marketing, PR,
              and experiential event promotions.
            </p>

            {/* TACTILE ACTION BUTTONS (NO DEAD HOVER STATES) */}
            <div className="flex flex-wrap items-center gap-4 mb-14">
              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 bg-[#D4AF37] hover:bg-[#F3C644] text-[#0B1930] font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-all duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.98]"
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

            {/* METRICS ROW */}
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
        </div>
      </section>

      {/* =========================================================
          SECTION 2: INTERACTIVE MOTION EXPAND SHOWCASE (TOOL ADDED)
      ========================================================= */}
      <section className="py-20 bg-[#0B1930] text-white border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-2">
                Motion Showcase
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Signature Campaign Capabilities
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Hover across each capability to preview live campaign photography,
              materials, and production specs.
            </p>
          </div>

          {/* HOVER EXPAND ROW INTERACTION */}
          <div className="bg-slate-900/60 rounded-3xl p-4 sm:p-6 border border-white/10">
            <HoverExpand
              items={signatureShowcaseItems}
              collapsedHeight={72}
              expandedHeight={320}
              className="text-white"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: ASYMMETRIC COMPANY INTRODUCTION & PILLARS
      ========================================================= */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* LEFT COLUMN: EDITORIAL NARRATIVE */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#B89225]">
                About Media Maitri
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

              <p className="text-slate-600 text-base leading-relaxed">
                We bring together twelve distinct disciplines under one roof: from
                direct pamphlets, banners, and moving advertisements to digital PR,
                strategic market research, workspace design, packaging, and
                on-ground event management.
              </p>

              {/* ASYMMETRIC VALUES CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {companyData.values.map((v, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#D4AF37] transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-2 font-bold text-[#0B1930] text-sm mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{v.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                ))}
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

            {/* RIGHT COLUMN: CORPORATE HEADQUARTERS CARD */}
            <div className="lg:col-span-5">
              <Card3D depth={14} className="w-full">
                <div className="relative rounded-3xl bg-[#0B1930] p-8 text-white shadow-2xl border border-amber-500/20 overflow-hidden">
                  <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                    <div className="relative w-14 h-14 rounded-full ring-2 ring-[#D4AF37] overflow-hidden bg-black/40 shadow-xl">
                      <Image
                        src="/assets/brand/logo_master.png"
                        alt="Media Maitri Logo Emblem"
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#D4AF37] bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                      Magazine 2027–2028
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    Media Maitri Headquarters
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {companyData.contact.address}
                  </p>

                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-slate-400">Direct Contact:</span>
                      <span className="font-semibold text-amber-300">
                        {companyData.contact.phone1}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-slate-400">Official Email:</span>
                      <span className="font-semibold text-slate-200">
                        {companyData.contact.email}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-slate-400">Official Portal:</span>
                      <span className="font-semibold text-amber-300">
                        {companyData.contact.domain}
                      </span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <p className="text-xs text-slate-400 italic">
                      &ldquo;{companyData.tagline}&rdquo;
                    </p>
                  </div>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: 12 BUSINESS SERVICES CATALOG
      ========================================================= */}
      <section className="py-24 bg-[#FAF9F6] border-y border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#B89225] mb-2">
              Capabilities Catalog
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1930] mb-4">
              Our 12 Business Services
            </h2>
            <p className="text-slate-600 text-base">
              Every service is delivered with strategic rigor, creative
              distinction, and complete end-to-end execution.
            </p>
          </div>

          {/* 12 SERVICES GRID WITH VARYING HIERARCHY */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((svc) => (
              <Card3D key={svc.id} depth={10}>
                <div className="group h-full flex flex-col justify-between bg-white rounded-2xl border border-slate-200 hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all duration-200 p-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#D4AF37] px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200">
                        SERVICE {svc.id} / 12
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Media Maitri
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0B1930] group-hover:text-[#B89225] transition-colors mb-2">
                      {svc.title}
                    </h3>

                    <p className="text-xs font-semibold text-amber-700/80 mb-4 line-clamp-1">
                      {svc.tagline}
                    </p>

                    <p className="text-slate-600 text-xs leading-relaxed mb-6 line-clamp-3">
                      {svc.introduction}
                    </p>

                    <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Key Inclusions:
                      </div>
                      {svc.inclusions.slice(0, 3).map((inc, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs text-slate-700"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
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

          <div className="text-center mt-12">
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
                      <span className="font-mono font-bold text-[#D4AF37]">
                        {item.year}
                      </span>
                    </div>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: INDUSTRIES WE SERVE (8 SECTORS)
      ========================================================= */}
      <section className="py-24 bg-[#0B1930] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-2">
              Domain Specialization
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-slate-300 text-base">
              From commercial retail storefronts to healthcare, real estate, and
              industrial manufacturing—we craft communication tailored to
              industry-specific buyer behaviors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesData.map((ind) => (
              <div
                key={ind.id}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 hover:bg-white/10 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-[#D4AF37] mb-3">
                    SECTOR {ind.id} / 08
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider mb-2">
                    Media Maitri Solutions:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {ind.solutions.slice(0, 2).map((sol, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#D4AF37]">&bull;</span>
                        <span className="line-clamp-2">{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 7: AGENCY FAQ ACCORDION (TOOL ADDED)
      ========================================================= */}
      <section className="py-24 bg-[#FAF9F6] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#B89225] mb-2">
              Common Inquiries
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1930] mb-4">
              Campaign Planning &amp; Execution FAQ
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              Clear answers regarding execution timelines, geographic coverage,
              and multi-channel media coordination.
            </p>
          </div>

          {/* MOTION ACCORDION */}
          <MotionAccordion items={agencyFaqs} gap={12} />
        </div>
      </section>

      {/* =========================================================
          SECTION 8: LEADERSHIP & DIRECTOR'S DESK
      ========================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#B89225]">
                  From the Desk of the Director
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1930]">
                  Leadership &amp; Creative Commitment
                </h2>
                <p className="text-slate-700 text-base leading-relaxed italic">
                  &ldquo;{companyData.directorsMessage.paragraph1}&rdquo;
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {companyData.directorsMessage.paragraph4}
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-8 border-t border-slate-200">
                  {companyData.directorsMessage.signatories.map((sig, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="font-bold text-[#0B1930] text-sm">
                        {sig.name}
                      </div>
                      <div className="text-xs font-medium text-amber-700">
                        {sig.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-200 shadow-sm text-center">
                <div className="relative w-24 h-24 rounded-full ring-4 ring-[#D4AF37] overflow-hidden mb-4 shadow-md bg-slate-900">
                  <Image
                    src="/assets/team/member_1.png"
                    alt="Jeevesh Patel - Managing Director / CEO"
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold text-base text-[#0B1930]">
                  Jeevesh Patel
                </h4>
                <p className="text-xs text-amber-600 font-semibold mb-3">
                  Managing Director / CEO
                </p>
                <Link
                  href="/team"
                  className="text-xs font-bold text-[#0B1930] hover:text-[#D4AF37] flex items-center gap-1"
                >
                  <span>Meet Our Complete 7-Member Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 9: BUSINESS ENQUIRY & CONTACT CONVERSION
      ========================================================= */}
      <section className="py-24 bg-[#071326] text-white relative">
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

              <div className="space-y-4 pt-4 text-sm">
                <a
                  href={`tel:${companyData.contact.phone1}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-all"
                >
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                  <div>
                    <span className="block text-xs text-slate-400">
                      Primary Phone Line:
                    </span>
                    <span className="font-bold text-white">
                      {companyData.contact.phone1}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-all"
                >
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                  <div>
                    <span className="block text-xs text-slate-400">
                      Corporate Email:
                    </span>
                    <span className="font-bold text-white">
                      {companyData.contact.email}
                    </span>
                  </div>
                </a>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 leading-relaxed">
                  <span className="block text-slate-400 font-semibold mb-1">
                    Corporate Office Address:
                  </span>
                  {companyData.contact.address}
                </div>
              </div>
            </div>

            {/* RIGHT QUICK ENQUIRY FORM */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-amber-500/20 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-2">
                  Request a Campaign Consultation
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Fill in your requirements below for prompt direct follow-up.
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
