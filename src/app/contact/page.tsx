"use client";

import React, { useState } from "react";
import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
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
    // Format message for WhatsApp direct relay
    const waText = encodeURIComponent(
      `*New Campaign Enquiry via Website:*\n\n` +
        `*Name:* ${formData.name}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Email:* ${formData.email || "N/A"}\n` +
        `*City/State:* ${formData.city || "N/A"}\n` +
        `*Service:* ${formData.service}\n` +
        `*Requirements:* ${formData.message || "Please share details."}`
    );

    // Open WhatsApp in new tab
    window.open(
      `https://wa.me/${companyData.contact.whatsapp}?text=${waText}`,
      "_blank"
    );
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B89225] bg-amber-100/70 px-4 py-1.5 rounded-full border border-amber-300 mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Connect With Media Maitri</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1930] mb-6">
            Contact &amp; Corporate Office
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Have a campaign in mind or need rate cards for outdoor, transit, or
            digital advertising? Reach out to our leadership and media managers
            directly.
          </p>
        </div>

        {/* MAIN CONTACT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* LEFT COLUMN: VERIFIED CONTACT CARDS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#0B1930] text-white border border-amber-500/30 shadow-xl space-y-6">
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
                      Monday &ndash; Saturday: 09:30 AM &ndash; 07:30 PM
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <a
                  href={`https://wa.me/${companyData.contact.whatsapp}?text=Hello%20Media%20Maitri,%20I%20would%20like%20to%20connect%20with%20your%20team.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 px-6 rounded-2xl text-sm transition-all shadow-lg hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>
                Your privacy is paramount. Information submitted is handled with
                strict corporate confidentiality.
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: CONSULTATION FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0B1930] mb-2">
                Request a Campaign Proposal
              </h2>
              <p className="text-xs text-slate-500 mb-8">
                Fill out the form below. When submitted, our team receives your
                exact brief and reaches out within 2 hours.
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
                    className="text-xs font-bold text-emerald-700 underline"
                  >
                    Submit another enquiry
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
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0B1930] focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all"
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
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0B1930] focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all"
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
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0B1930] focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        City / Target Region
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        placeholder="Varanasi / Lucknow / Delhi NCR..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0B1930] focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Primary Service of Interest *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0B1930] focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all"
                    >
                      {servicesData.map((svc) => (
                        <option key={svc.id} value={svc.title}>
                          {svc.id}. {svc.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Project Details, Campaign Size &amp; Timelines
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your brand goals, target locations, or key deliverables..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0B1930] focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F3C644] hover:from-[#F3C644] hover:to-[#D4AF37] text-[#0B1930] font-bold text-sm py-4 rounded-xl shadow-xl hover:shadow-amber-500/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Proposal Request Directly</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* SECTION: GOOGLE MAPS EMBED */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-bold tracking-widest uppercase text-[#B89225] mb-2">
              Physical Location
            </div>
            <h2 className="text-2xl font-bold text-[#0B1930]">
              Visit Our Corporate Office
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Located in Varanasi, Uttar Pradesh. Schedule an appointment or visit
              for campaign creative reviews.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md h-96 w-full relative">
            <iframe
              src={companyData.contact.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Media Maitri Office Location - Awaleshpur Varanasi"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
