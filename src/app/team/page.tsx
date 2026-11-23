import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Users2, ArrowRight, ShieldCheck, Mail, Sparkles } from "lucide-react";
import Card3D from "@/components/Card3D";
import { teamData } from "@/data/teamData";
import { companyData } from "@/data/companyData";

export const metadata: Metadata = {
  title: "Our Team & Leadership | The People Behind Media Maitri",
  description:
    "Meet the leadership and multidisciplinary creative team at Media Maitri, including Managing Director Jeevesh Patel and General Manager Rajan K. Vishwakarma.",
};

export default function TeamPage() {
  const leadership = teamData.slice(0, 2);
  const coreTeam = teamData.slice(2);

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B89225] bg-amber-100/70 px-4 py-1.5 rounded-full border border-amber-300 mb-4">
            <Users2 className="w-3.5 h-3.5" />
            <span>The Minds Behind The Work</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1930] mb-6">
            Our Leadership &amp; Team
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            A dedicated collective of advertising strategists, media planners,
            digital creators, and technical engineers committed to promoting
            what is authentic.
          </p>
        </div>

        {/* SECTION 1: EXECUTIVE LEADERSHIP */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="text-xs font-bold tracking-widest uppercase text-[#B89225] mb-2">
              Executive Governance
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1930]">
              Board of Directors &amp; Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((leader, idx) => (
              <Card3D key={idx} depth={15}>
                <div className="bg-white rounded-3xl border border-amber-500/30 p-8 shadow-xl flex flex-col items-center text-center group hover:border-[#D4AF37] transition-all">
                  <div className="relative w-36 h-36 rounded-full ring-4 ring-[#D4AF37] overflow-hidden mb-6 shadow-xl bg-slate-950">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes="144px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <span className="text-[11px] font-mono font-bold text-[#D4AF37] bg-amber-50 border border-amber-200 px-3 py-1 rounded-full mb-3">
                    {leader.department}
                  </span>

                  <h3 className="text-2xl font-bold text-[#0B1930] mb-1">
                    {leader.name}
                  </h3>

                  <p className="text-sm font-semibold text-amber-700 mb-4">
                    {leader.role}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed max-w-sm mb-6">
                    {leader.bio}
                  </p>

                  <div className="pt-4 border-t border-slate-100 w-full flex items-center justify-center text-xs text-slate-500 font-mono">
                    Media Maitri Leadership &bull; 2027–2028
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>

        {/* SECTION 2: MANAGEMENT & CREATIVE TEAM */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="text-xs font-bold tracking-widest uppercase text-[#B89225] mb-2">
              Cross-Disciplinary Powerhouse
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1930]">
              Management, Tech &amp; Creative Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((member, idx) => (
              <Card3D key={idx} depth={10}>
                <div className="bg-white rounded-3xl border border-slate-200/90 hover:border-[#D4AF37] p-7 shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center h-full justify-between group">
                  <div>
                    <div className="relative w-28 h-28 rounded-full ring-2 ring-slate-200 group-hover:ring-[#D4AF37] overflow-hidden mb-5 shadow-md bg-slate-900 transition-all">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="112px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md mb-2 inline-block">
                      {member.department}
                    </span>

                    <h3 className="text-xl font-bold text-[#0B1930] group-hover:text-[#B89225] transition-colors mb-1">
                      {member.name}
                    </h3>

                    <p className="text-xs font-bold text-amber-700 mb-3">
                      {member.role}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {member.bio}
                    </p>
                  </div>

                  <div className="w-full pt-4 border-t border-slate-100 text-[11px] font-medium text-slate-400">
                    Media Maitri Team
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>

        {/* BOTTOM CAREERS / PARTNER BANNER */}
        <div className="bg-[#0B1930] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl border border-amber-500/20">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Want to collaborate with our creative team?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8">
            Whether you need a dedicated media manager, large-format outdoor
            execution, or digital PR campaigns—our specialists are ready.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F3C644] text-[#0B1930] font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg hover:scale-105 transition-all"
          >
            <span>Initiate Campaign Discussion</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
