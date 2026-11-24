"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  MessageCircle,
  FileDown,
  ArrowRight,
} from "lucide-react";
import { companyData } from "@/data/companyData";
import { servicesData } from "@/data/servicesData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
  }, [pathname]);

  // Prevent background scrolling on iOS/Android when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services", hasDropdown: true },
    { name: "Industries", href: "/industries" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Our Team", href: "/team" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* TOP ANNOUNCEMENT & CONTACT BAR */}
      <div className="bg-[#060E1A] text-slate-300 text-xs py-2 px-4 border-b border-amber-500/20 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${companyData.contact.phone1}`}
              className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{companyData.contact.phone1}</span>
            </a>
            <a
              href={`mailto:${companyData.contact.email}`}
              className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{companyData.contact.email}</span>
            </a>
            <span className="text-slate-500">|</span>
            <span className="text-amber-400 font-medium tracking-wide">
              {companyData.tagline}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/documents/Media_Maitri_Company_magazine_2027-28.pdf"
              download
              className="flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Company Magazine 2027–2028</span>
            </a>
            <a
              href={`https://wa.me/${companyData.contact.whatsapp}?text=Hello%20Media%20Maitri,%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#D4AF37] hover:bg-[#F3C644] text-[#0B1930] font-semibold px-2.5 py-1 rounded-full text-xs transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION BAR */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B1930]/95 backdrop-blur-md shadow-xl border-b border-amber-500/20 py-2.5 sm:py-3"
            : "bg-[#0B1930] py-3.5 sm:py-4 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* BRAND LOGO */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full ring-2 ring-[#D4AF37]/50 shadow-lg group-hover:scale-105 transition-transform overflow-hidden bg-black/40 shrink-0">
              <Image
                src="/assets/brand/logo_master.png"
                alt="Media Maitri Logo"
                fill
                priority
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white block leading-none">
                MEDIA <span className="text-[#D4AF37]">MAITRI</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest uppercase text-slate-300 font-medium block mt-1">
                Promoting What&apos;s Authentic
              </span>
            </div>
          </Link>

          {/* DESKTOP & TABLET LANDSCAPE NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 text-[13px] xl:text-sm font-medium transition-colors py-2 ${
                        isActive
                          ? "text-[#D4AF37] font-semibold"
                          : "text-slate-200 hover:text-[#D4AF37]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 text-amber-400" />
                    </Link>

                    {/* MEGA DROPDOWN FOR 12 SERVICES */}
                    {servicesDropdown && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] bg-[#060E1A] border border-amber-500/30 rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        {servicesData.map((svc) => (
                          <Link
                            key={svc.id}
                            href={`/services/${svc.slug}`}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/60 transition-colors group/item"
                          >
                            <span className="text-xs font-mono font-bold text-[#D4AF37] px-1.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                              {svc.id}
                            </span>
                            <div>
                              <div className="text-xs font-semibold text-white group-hover/item:text-[#D4AF37] transition-colors">
                                {svc.title}
                              </div>
                              <div className="text-[11px] text-slate-400 line-clamp-1">
                                {svc.tagline}
                              </div>
                            </div>
                          </Link>
                        ))}
                        <div className="col-span-2 pt-3 border-t border-white/10 flex justify-between items-center text-xs">
                          <span className="text-slate-400">
                            12 Business Services tailored for multi-industry impact
                          </span>
                          <Link
                            href="/services"
                            className="text-[#D4AF37] hover:underline flex items-center gap-1 font-semibold"
                          >
                            <span>Explore All Services</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] xl:text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#D4AF37] font-semibold"
                      : "text-slate-200 hover:text-[#D4AF37]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* ACTION BUTTON */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-[#D4AF37] hover:bg-[#F3C644] text-[#0B1930] font-bold text-xs xl:text-sm px-4 xl:px-5 py-2.5 rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
            >
              Enquire Now
            </Link>
          </div>

          {/* MOBILE & TABLET HAMBURGER BUTTON (Min 44x44px Touch Target) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-200 hover:text-[#D4AF37] transition-colors focus:outline-none rounded-xl"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* MOBILE & TABLET DRAWER WITH BACKDROP CLICK-DISMISS */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden bg-black/75 backdrop-blur-md transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-[#060E1A] border-l border-amber-500/20 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto pb-[max(1.5rem,env(safe-area-inset-bottom))]"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-full ring-2 ring-[#D4AF37] overflow-hidden">
                    <Image
                      src="/assets/brand/logo_master.png"
                      alt="Logo"
                      fill
                      sizes="36px"
                      className="object-cover rounded-full"
                    />
                  </div>
                  <span className="font-bold text-white text-base sm:text-lg">
                    MEDIA <span className="text-[#D4AF37]">MAITRI</span>
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-400 hover:text-white rounded-lg"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* NAV LINKS */}
              <div className="py-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-base font-semibold text-slate-200 hover:text-[#D4AF37] py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors border-b border-white/5"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* DRAWER FOOTER ACTIONS */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=Hello%20Media%20Maitri,%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3.5 rounded-xl text-sm shadow-lg active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${companyData.contact.phone1}`}
                className="w-full flex items-center justify-center gap-2 bg-slate-800 text-slate-200 font-semibold py-3.5 rounded-xl text-sm active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call {companyData.contact.phone1}</span>
              </a>

              <div className="text-center pt-2">
                <span className="text-[11px] text-amber-300 font-mono">
                  &ldquo;{companyData.tagline}&rdquo;
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
