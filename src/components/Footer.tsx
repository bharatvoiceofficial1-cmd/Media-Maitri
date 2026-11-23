import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  FileDown,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { companyData } from "@/data/companyData";
import { servicesData } from "@/data/servicesData";

export default function Footer() {
  return (
    <footer className="bg-[#040914] text-slate-300 border-t border-amber-500/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-white/10">
          {/* COLUMN 1: BRAND OVERVIEW & MAGAZINE */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 rounded-full ring-2 ring-[#D4AF37] shadow-xl overflow-hidden bg-black/50">
                <Image
                  src="/assets/brand/logo_master.png"
                  alt="Media Maitri Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block">
                  MEDIA <span className="text-[#D4AF37]">MAITRI</span>
                </span>
                <span className="text-[11px] tracking-wider uppercase text-amber-300/90 font-medium block">
                  Promoting What&apos;s Authentic.
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Media Maitri is a premier communications, advertising, and
              branding agency delivering multi-disciplinary creative campaigns
              across outdoor, transit, digital, and corporate environments.
            </p>

            <a
              href="/documents/Media_Maitri_Company_magazine_2027-28.pdf"
              download
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F3C644] text-[#0B1930] font-bold text-xs px-4 py-2.5 rounded-xl hover:shadow-lg hover:shadow-amber-500/20 transition-all hover:scale-105"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Official Magazine 2027–2028</span>
            </a>
          </div>

          {/* COLUMN 2: QUICK NAVIGATION */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span>Company Navigation</span>
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home Overview", href: "/" },
                { name: "About Us & Leadership", href: "/about" },
                { name: "All 12 Business Services", href: "/services" },
                { name: "Industries We Serve", href: "/industries" },
                { name: "Portfolio & Creative Work", href: "/portfolio" },
                { name: "Our Management & Team", href: "/team" },
                { name: "Contact & Corporate Office", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: ALL 12 SERVICES */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span>12 Business Services</span>
            </h3>
            <ul className="space-y-2 text-xs">
              {servicesData.slice(0, 8).map((svc) => (
                <li key={svc.id}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 truncate"
                  >
                    <span className="text-[#D4AF37] font-mono">{svc.id}.</span>
                    <span className="truncate">{svc.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-amber-400 font-semibold hover:underline inline-flex items-center gap-1 pt-1"
                >
                  <span>View All 12 Services</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: VERIFIED CONTACT & LOCATION */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span>Official Contact Info</span>
            </h3>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="leading-snug">{companyData.contact.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <div className="space-y-0.5">
                  <a
                    href={`tel:${companyData.contact.phone1}`}
                    className="block hover:text-[#D4AF37] transition-colors"
                  >
                    {companyData.contact.phone1}
                  </a>
                  <a
                    href={`tel:${companyData.contact.phone2}`}
                    className="block hover:text-[#D4AF37] transition-colors"
                  >
                    {companyData.contact.phone2}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="hover:text-[#D4AF37] transition-colors truncate"
                >
                  {companyData.contact.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${companyData.contact.whatsapp}?text=Hello%20Media%20Maitri,%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant WhatsApp Enquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & SECURITY BAR */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>
              Enterprise TLS 1.3 Encryption &bull; Static Edge Security &bull; Zero Server Vulnerabilities
            </span>
          </div>

          <div className="text-center md:text-right">
            <span>
              &copy; 2027–2028 <span className="text-white font-medium">Media Maitri</span>. All Rights Reserved.
            </span>
            <span className="block text-slate-400 mt-0.5">
              Official Corporate Portal &bull; www.mediamaitri.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
