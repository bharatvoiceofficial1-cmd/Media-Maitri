import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Phone,
  CheckCircle2,
  Sparkles,
  Users2,
  ShieldCheck,
  CreditCard,
} from "lucide-react";
import Card3D from "@/components/Card3D";
import { servicesData, ServiceItem } from "@/data/servicesData";
import { companyData } from "@/data/companyData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((svc) => ({
    slug: svc.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Media Maitri Services`,
    description: service.introduction.slice(0, 160),
    openGraph: {
      title: `${service.title} | Media Maitri`,
      description: service.tagline,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const serviceIndex = servicesData.findIndex((s) => s.slug === slug);

  if (serviceIndex === -1) {
    notFound();
  }

  const service = servicesData[serviceIndex];
  const prevService =
    serviceIndex > 0 ? servicesData[serviceIndex - 1] : null;
  const nextService =
    serviceIndex < servicesData.length - 1
      ? servicesData[serviceIndex + 1]
      : null;

  const whatsappMessage = encodeURIComponent(
    `Hello Media Maitri, I would like to enquire about your service: ${service.title}.`
  );

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-[#D4AF37] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/services"
            className="hover:text-[#D4AF37] transition-colors"
          >
            Services
          </Link>
          <span>/</span>
          <span className="text-[#0B1930] font-semibold">{service.title}</span>
        </div>

        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#D4AF37] bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full">
              SERVICE {service.id} OF 12 &bull; MEDIA MAITRI
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1930] leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg font-semibold text-amber-700">
              {service.tagline}
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              {service.introduction}
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Enquire via WhatsApp</span>
              </a>

              <a
                href={`tel:${companyData.contact.phone1}`}
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call {companyData.contact.phone1}</span>
              </a>
            </div>
          </div>

          {/* VISUAL SHOWCASE MOCKUP */}
          <div className="lg:col-span-5">
            <Card3D depth={18}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-950 border border-amber-500/30">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-[#0B1930] text-center border-t border-white/10">
                  <span className="text-xs font-semibold text-amber-300">
                    Official Portfolio Mockup &bull; Company Magazine 2027–2028
                  </span>
                </div>
              </div>
            </Card3D>
          </div>
        </div>

        {/* SECTION: 5 KEY INCLUSIONS */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm mb-16">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-bold tracking-widest uppercase text-[#B89225] mb-2">
              Capabilities &amp; Scope
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1930]">
              What This Service Includes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.inclusions.map((inc, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#D4AF37] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-[#D4AF37] mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-base text-[#0B1930] mb-2">
                    {inc.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {inc.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* BONUS CARD (IF PRESENT, e.g. VISITING CARDS) */}
            {service.bonusFeature && (
              <div className="p-6 rounded-2xl bg-amber-50 border border-amber-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 mb-3">
                    <CreditCard className="w-4 h-4 text-[#D4AF37]" />
                    <span>Bonus Inclusion</span>
                  </div>
                  <h3 className="font-bold text-base text-[#0B1930] mb-2">
                    Visiting Cards
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {service.bonusFeature}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* SECTION: TARGET SUITABILITY & OUR COMMITMENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* BEST SUITED FOR */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B89225] mb-3">
                <Users2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Target Sectors &amp; Audiences</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1930] mb-3">
                Best Suited For
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {service.bestSuitedFor}
              </p>
            </div>
          </div>

          {/* OUR COMMITMENT */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0B1930] to-[#060E1A] text-white border border-amber-500/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-300 mb-3">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Media Maitri Standard</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Our Commitment
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {service.ourCommitment}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/10 text-xs text-amber-400/90 italic">
              &ldquo;{companyData.tagline}&rdquo;
            </div>
          </div>
        </div>

        {/* PREV / NEXT SERVICE NAVIGATION */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200">
          {prevService ? (
            <Link
              href={`/services/${prevService.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#0B1930] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>
                Previous: <strong>{prevService.title}</strong>
              </span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            href="/services"
            className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider hover:underline"
          >
            All 12 Services
          </Link>

          {nextService ? (
            <Link
              href={`/services/${nextService.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#0B1930] transition-colors"
            >
              <span>
                Next: <strong>{nextService.title}</strong>
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
