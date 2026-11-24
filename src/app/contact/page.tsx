"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  ShieldCheck,
  CheckCircle,
  Sparkles,
  Building2,
} from "lucide-react";
import PredictiveArcBackground from "@/components/PredictiveArcBackground";
import { companyData } from "@/data/companyData";
import { servicesData } from "@/data/servicesData";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: servicesData[0].title,
    city: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Format structured message for WhatsApp direct relay
    const waText = encodeURIComponent(
      `*New Campaign Enquiry — Media Maitri Website*\n\n` +
        `*Client Name:* ${formData.name}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Email:* ${formData.email || "N/A"}\n` +
        `*Target Region/City:* ${formData.city || "Varanasi / Pan-India"}\n` +
        `*Service Requested:* ${formData.service}\n` +
        `*Requirements:* ${formData.message || "Requesting custom rate card & timeline."}\n\n` +
        `_Sent via mediamaitri.com_`
    );

    // Open WhatsApp directly
    window.open(
      `https://wa.me/${companyData.contact.whatsapp}?text=${waText}`,
      "_blank"
    );
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#0B1930]">
      {/* =========================================================
          SECTION 1: 3D THREEUI PREDICTIVE ARC HERO BANNER
      ========================================================= */}
      <section className="relative min-h-[45vh] flex items-center bg-[#060E1A] text-white overflow-hidden border-b border-amber-500/20">
        {/* ThreeUI WebGL Predictive Arc Dynamic Shader Background */}
        <PredictiveArcBackground variant="amber-halftone" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#D4AF37] bg-white/[0.04] px-4 py-1.5 rounded-full border border-amber-400/30 backdrop-blur-md mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Connect With Media Maitri</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Contact &amp; Corporate Office
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Have a campaign in mind or need feasibility rate cards for outdoor hoardings,
            moving transit fleet, or digital performance? Reach our leadership and media managers directly.
          </p>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: MAIN PROPOSAL & CONTACT GRID
      ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* LEFT COLUMN: CORPORATE HEADQUARTERS & TELEPHONY */}
          <div className="lg:col-span-5 space-y-6">
            <div className="luxury-card p-8 rounded-3xl text-white space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">
                  Official Headquarters
                </span>
                <h3 className="text-2xl font-bold text-white">Media Maitri</h3>
                <p className="text-xs text-amber-300 italic mt-0.5">
                  &ldquo;{companyData.tagline}&rdquo;
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10 text-sm">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-slate-400 font-semibold mb-0.5">
                      Corporate Address:
                    </span>
                    <span className="text-slate-200 leading-snug">
                      {companyData.contact.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-slate-400 font-semibold mb-0.5">
                      Phone Lines:
                    </span>
                    <a
                      href={`tel:${companyData.contact.phone1}`}
                      className="block text-slate-200 hover:text-[#D4AF37] transition-colors"
                    >
                      {companyData.contact.phone1}
                    </a>
                    <a
                      href={`tel:${companyData.contact.phone2}`}
                      className="block text-slate-200 hover:text-[#D4AF37] transition-colors"
                    >
                      {companyData.contact.phone2}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-slate-400 font-semibold mb-0.5">
                      Official Email:
                    </span>
                    <a
                      href={`mailto:${companyData.contact.email}`}
                      className="text-slate-200 hover:text-[#D4AF37] transition-colors break-all"
                    >
                      {companyData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-slate-400 font-semibold mb-0.5">
                      Operating Hours:
                    </span>
                    <span className="text-slate-200">
                      Monday &ndash; Saturday: 09:30 AM &ndash; 07:30 PM IST
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <a
                  href={`https://wa.me/${companyData.contact.whatsapp}?text=Hello%20Media%20Maitri,%20I%20would%20like%20to%20connect%20with%20your%20team.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 px-6 rounded-2xl text-sm transition-all shadow-lg active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center gap-3 shadow-sm">
              <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0" />
              <span>
                <strong>Confidentiality Commitment:</strong> All campaign briefs,
                creative files, and strategic rate inquiries are protected under client NDA.
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE PROPOSAL FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-xl">
              <h2 className="text-2xl font-bold text-[#0B1930] mb-2">
                Request a Campaign Proposal
              </h2>
              <p className="text-xs text-slate-500 mb-8 leading-relaxed">
                Fill out the brief below. When submitted, our media planning team
                receives your exact requirements and reaches out within 2 hours.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-lg font-bold text-emerald-900">
                    Enquiry Forwarded to Media Maitri Team!
                  </h3>
                  <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                    Your brief has been formatted and opened with our WhatsApp
                    hotline. We look forward to connecting with you.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-emerald-700 underline cursor-pointer"
                  >
                    Submit another campaign brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-base sm:text-sm text-[#0B1930] focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-base sm:text-sm text-[#0B1930] focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@company.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-base sm:text-sm text-[#0B1930] focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        Target City / Region
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        placeholder="e.g. Varanasi, UP, Delhi-NCR"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-base sm:text-sm text-[#0B1930] focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Primary Service of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-base sm:text-sm text-[#0B1930] focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all"
                    >
                      {servicesData.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.id}. {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Campaign Requirements / Brief
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your brand, target audience, estimated budget, or launch dates..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-base sm:text-sm text-[#0B1930] focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#D4AF37] hover:bg-[#F3C644] text-[#0B1930] font-bold py-4 px-6 rounded-xl text-base shadow-xl transition-all duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Brief &amp; Connect via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* SECTION 3: INTERACTIVE GOOGLE MAPS HQ EMBED */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 mb-6 gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#B89225] block mb-1">
                Geographic Presence
              </span>
              <h3 className="text-2xl font-bold text-[#0B1930]">
                Varanasi Central Headquarters
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=Varanasi,+Uttar+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0B1930] hover:text-[#D4AF37] border border-slate-200 px-4 py-2.5 rounded-xl hover:border-[#D4AF37] transition-all"
            >
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>Open in Google Maps &rarr;</span>
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
            <iframe
              title="Media Maitri Headquarters Varanasi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.08799863484!2d82.9087063!3d25.3176452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
