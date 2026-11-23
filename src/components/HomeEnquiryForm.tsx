"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageCircle } from "lucide-react";
import { companyData } from "@/data/companyData";
import { servicesData } from "@/data/servicesData";

export default function HomeEnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: servicesData[0]?.title || "Air Pamphlets / Flyers",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const message = encodeURIComponent(
      `*New Campaign Enquiry — Media Maitri Website*\n\n` +
        `*Name:* ${formData.name}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Service:* ${formData.service}\n` +
        `*Requirements:* ${formData.details || "General campaign consultation"}\n\n` +
        `_Sent via mediamaitri.com_`
    );

    window.open(
      `https://wa.me/${companyData.contact.whatsapp}?text=${message}`,
      "_blank"
    );
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-emerald-950/60 border border-emerald-500/40 p-8 text-center space-y-4">
        <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
        <h4 className="text-lg font-bold text-white">
          Enquiry Transmitted to Media Maitri Team!
        </h4>
        <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
          Your campaign brief has been prepared and opened directly in WhatsApp.
          Our media managers will review your requirements and respond promptly.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              phone: "",
              service: servicesData[0]?.title || "Air Pamphlets / Flyers",
              details: "",
            });
          }}
          className="text-xs font-bold text-[#D4AF37] hover:underline pt-2 inline-block cursor-pointer"
        >
          Submit Another Campaign Enquiry &rarr;
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            placeholder="e.g. Ramesh Sharma"
            className="w-full bg-slate-950/80 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
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
            className="w-full bg-slate-950/80 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
          Service of Interest
        </label>
        <select
          value={formData.service}
          onChange={(e) =>
            setFormData({ ...formData, service: e.target.value })
          }
          className="w-full bg-slate-950/80 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
        >
          {servicesData.map((s) => (
            <option key={s.id} value={s.title}>
              {s.id}. {s.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
          Project Details / Target Audience
        </label>
        <textarea
          rows={3}
          value={formData.details}
          onChange={(e) =>
            setFormData({ ...formData, details: e.target.value })
          }
          placeholder="Share your campaign goals, locations, or requirements..."
          className="w-full bg-slate-950/80 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#D4AF37] hover:bg-[#F3C644] text-[#0B1930] font-bold text-sm py-4 rounded-xl shadow-xl transition-all duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
      >
        <Send className="w-4 h-4" />
        <span>Submit Enquiry &amp; Connect with Team</span>
      </button>
    </form>
  );
}
