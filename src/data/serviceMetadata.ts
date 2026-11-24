export interface ServiceMeta {
  category:
    | "Outdoor & Transit Media"
    | "Print, Packaging & Merch"
    | "Spatial & Event Architecture"
    | "Digital, PR & Strategy";
  sla: string;
  specs: {
    material: string;
    turnaround: string;
    coverage: string;
    verification: string;
  };
  synergies: string[]; // slugs of 2 complementary services
  sampleMetrics: string;
}

export const serviceMetadataMap: Record<string, ServiceMeta> = {
  "air-pamphlets-flyers": {
    category: "Print, Packaging & Merch",
    sla: "24–48h Print & Distribution",
    specs: {
      material: "130–300 GSM Premium Gloss / Matte Art Paper with protective aqueous coating",
      turnaround: "Digital proofs within 12h; full batch printing & distribution plan in 24–48h",
      coverage: "Direct residential doorstep drop, high-footfall commercial bazaars & institutional hubs",
      verification: "Area-wise delivery logs, geo-tagged distribution checkpoints & supervisor verification",
    },
    synergies: ["banners-hoardings-flex", "packaging-branding"],
    sampleMetrics: "94% targeted household delivery precision across North India micro-zones",
  },
  "banners-hoardings-flex": {
    category: "Outdoor & Transit Media",
    sla: "48–72h Staged Mounting",
    specs: {
      material: "Weather-resistant 340–510 GSM flex, frontlit/backlit grade with heavy-duty MS framing",
      turnaround: "Large-format printing in 24h; on-site structural rigging and night lighting in 48h",
      coverage: "Prime highway arterial corridors, key city intersections, bypasses & commercial roundabouts",
      verification: "High-resolution geo-tagged mounting photography, luminaire checks & periodic maintenance audits",
    },
    synergies: ["auto-moving-advertisement", "air-pamphlets-flyers"],
    sampleMetrics: "150,000+ daily commuter impressions per prime arterial hoarding",
  },
  "auto-moving-advertisement": {
    category: "Outdoor & Transit Media",
    sla: "3–5 Days Full Fleet Wrap",
    specs: {
      material: "High-grade cast vinyl with UV-resistant anti-scratch cold lamination",
      turnaround: "Batch vehicle branding of 10–50+ vehicles completed in 72 hours",
      coverage: "Complete arterial routes, railway stations, university campuses, market hubs & residential routes",
      verification: "Driver fleet route tracking, vehicle registration log sheets & initial/final photo documentation",
    },
    synergies: ["banners-hoardings-flex", "radio-on-air-advertisement"],
    sampleMetrics: "18+ hours daily on-road circulation reaching mobile, working-age demographics",
  },
  "digital-marketing": {
    category: "Digital, PR & Strategy",
    sla: "24h Campaign Setup",
    specs: {
      material: "High-definition motion creatives, responsive ad sets, conversion landing experiences & pixel architectures",
      turnaround: "Audience targeting matrix & creative variants live within 24–48 hours",
      coverage: "Meta (Instagram / Facebook), Google Ads (Search, Display, Performance Max) & YouTube",
      verification: "Real-time looker studio analytics dashboards, cost-per-lead tracking & transparent conversion logs",
    },
    synergies: ["digital-pr-media-relations", "strategies-research-outreach"],
    sampleMetrics: "3.8x – 6.2x average ROAS across regional retail and education campaigns",
  },
  "radio-on-air-advertisement": {
    category: "Outdoor & Transit Media",
    sla: "48h Broadcast Slotting",
    specs: {
      material: "Broadcast-mastered WAV/MP3 audio at 320kbps, professional regional voiceover & memorable sound signature",
      turnaround: "Scripting & voice production within 24h; broadcast transmission clearance within 48h",
      coverage: "Top regional FM radio networks covering Varanasi, Prayagraj, Lucknow, Gorakhpur & adjoining belts",
      verification: "Official station telecast logs (RO certificates), prime time placement audit & frequency monitoring",
    },
    synergies: ["banners-hoardings-flex", "auto-moving-advertisement"],
    sampleMetrics: "High frequency audio recall reaching commuting vehicle owners & household listeners",
  },
  "office-corporate-place-designing": {
    category: "Spatial & Event Architecture",
    sla: "5–10 Days Fabrication & Staging",
    specs: {
      material: "Cast acrylic, laser-cut ACP sheets, stainless steel stud-mounts, warm LED backlight & architectural vinyl",
      turnaround: "3D CAD space visualization in 48h; on-site installation within 5–10 business days",
      coverage: "Corporate headquarters, retail flagships, branch offices, customer lounges & executive suites",
      verification: "Pre-installation structural survey, electrical load sign-off & final walk-through inspection",
    },
    synergies: ["packaging-branding", "corporate-merchandising"],
    sampleMetrics: "100% bespoke corporate environment transformation reflecting institutional prestige",
  },
  "strategies-research-outreach": {
    category: "Digital, PR & Strategy",
    sla: "3–5 Days Comprehensive Dossier",
    specs: {
      material: "Comprehensive demographic intelligence reports, competitor media spend audits & media route heatmaps",
      turnaround: "Initial market orientation in 48h; complete multi-channel allocation strategy in 5 business days",
      coverage: "Hyperlocal tier-2 and tier-3 northern Indian markets with nuanced consumer buying behaviors",
      verification: "Primary field questionnaires, empirical footfall counts & competitive media placement indices",
    },
    synergies: ["digital-marketing", "banners-hoardings-flex"],
    sampleMetrics: "Data-calibrated media distribution minimizing ad spend leakage by up to 35%",
  },
  "digital-pr-media-relations": {
    category: "Digital, PR & Strategy",
    sla: "24–48h Press Dissemination",
    specs: {
      material: "Journalistic press releases, founder editorial profiles, high-authority backlink integrations & syndicated coverage",
      turnaround: "Draft approval within 24h; publication rollout across tier-1 business and regional portals within 48h",
      coverage: "Major national business portals, regional Hindi/English dailies, tech blogs & Google News indices",
      verification: "Live publication links, domain authority ratings, Google Indexation checks & reach metrics report",
    },
    synergies: ["digital-marketing", "strategies-research-outreach"],
    sampleMetrics: "Guaranteed editorial syndication establishing immediate search engine authority and trust",
  },
  "community-building-cross-promotions": {
    category: "Digital, PR & Strategy",
    sla: "Continuous Campaign Activation",
    specs: {
      material: "Co-branded collaterals, digital community moderation guidelines, partner incentive frameworks & affiliate assets",
      turnaround: "Partnership mapping in 3 days; joint activation kickoff within 7 business days",
      coverage: "Regional industry chambers, trade associations, merchant networks & online community groups",
      verification: "Joint member engagement reports, shared customer acquisition tallies & partner sign-offs",
    },
    synergies: ["event-management-promotions", "digital-marketing"],
    sampleMetrics: "Organic referral amplification through mutually aligned regional brand partnerships",
  },
  "packaging-branding": {
    category: "Print, Packaging & Merch",
    sla: "5–7 Days Production Batch",
    specs: {
      material: "Rigid kappa board, food-grade virgin kraft, foil stamping, spot UV, embossed textures & tamper-evident seals",
      turnaround: "3D packaging renders & unprinted die-cut dummy in 48h; production run in 5–7 business days",
      coverage: "FMCG retail shelves, e-commerce direct dispatch boxes, boutique gifting & luxury product packaging",
      verification: "Drop-test structural assessment, color match against Pantone standards & burst factor certification",
    },
    synergies: ["corporate-merchandising", "air-pamphlets-flyers"],
    sampleMetrics: "Enhanced unboxing experience driving customer retention and premium shelf presence",
  },
  "corporate-merchandising": {
    category: "Print, Packaging & Merch",
    sla: "4–7 Days Custom Execution",
    specs: {
      material: "100% bio-washed combed cotton, premium stainless steel drinkware, matte metal rollerballs & PU leather binders",
      turnaround: "Sample approval within 48h; batch personalization and executive packaging within 4–7 business days",
      coverage: "Corporate employee onboardings, annual general meetings, VIP client gifting & trade conference giveaways",
      verification: "Pre-shipment embroidery/screen print inspection, batch quantity audit & tamper-safe packaging",
    },
    synergies: ["packaging-branding", "event-management-promotions"],
    sampleMetrics: "Long-term daily brand exposure through functional, high-utility lifestyle corporate assets",
  },
  "event-management-promotions": {
    category: "Spatial & Event Architecture",
    sla: "Turnkey Staged Activation",
    specs: {
      material: "Modular octanorm & custom wooden stall fabrication, LED video walls, line-array audio & branded registration desks",
      turnaround: "Stall 3D walkthrough in 72h; on-site setup 24h prior to event commencement",
      coverage: "Exhibition centers, trade expos, hotel ballrooms, open-air grounds & corporate conference facilities",
      verification: "Safety structural compliance check, live event floor supervision & post-event visitor analytics dossier",
    },
    synergies: ["office-corporate-place-designing", "corporate-merchandising"],
    sampleMetrics: "End-to-end crowd orchestration ensuring frictionless VIP and visitor engagement",
  },
};
