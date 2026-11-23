export interface PortfolioItem {
  id: string;
  title: string;
  category: "Outdoor & Moving" | "Print & Merch" | "Digital & PR" | "Spaces & Events" | "Branding & Packaging";
  image: string;
  client?: string;
  year: string;
  description: string;
  tags: string[];
}

export const portfolioCategories = [
  "All",
  "Outdoor & Moving",
  "Print & Merch",
  "Digital & PR",
  "Spaces & Events",
  "Branding & Packaging",
] as const;

export const portfolioData: PortfolioItem[] = [
  {
    id: "port-1",
    title: "Large-Format Prime Corridor Billboard",
    category: "Outdoor & Moving",
    image: "/assets/services/banners-hoardings-flex.png",
    client: "Highway Commercial Hub",
    year: "2027",
    description: "High-visibility large-format outdoor hoarding engineered for maximum legibility and brand recall along busy arterial routes.",
    tags: ["Billboard", "Flex Print", "Outdoor Media", "OOH"],
  },
  {
    id: "port-2",
    title: "Hyperlocal Transit Brand Fleet",
    category: "Outdoor & Moving",
    image: "/assets/services/auto-moving-advertisement.png",
    client: "Urban Commuter Mobility",
    year: "2027",
    description: "Full transit vehicle wraps turning everyday urban vehicles into mobile brand ambassadors across high-density metro routes.",
    tags: ["Auto Advertising", "Transit Media", "Mobile Wraps"],
  },
  {
    id: "port-3",
    title: "Luxury Retail Packaging Architecture",
    category: "Branding & Packaging",
    image: "/assets/services/packaging-branding.png",
    client: "Artisan Consumer Goods",
    year: "2027",
    description: "Complete packaging suite including custom rigid gift boxes, label systems, and shelf-dominant retail presentation.",
    tags: ["Packaging", "Box Design", "Brand Identity", "Labels"],
  },
  {
    id: "port-4",
    title: "Corporate Headquarters Environmental Branding",
    category: "Spaces & Events",
    image: "/assets/services/office-corporate-place-designing.png",
    client: "Tech & Corporate Tower",
    year: "2027",
    description: "3D architectural signage, reception wall graphics, and immersive culture spaces reflecting modern enterprise identity.",
    tags: ["Workspace Design", "3D Signage", "Interior Branding"],
  },
  {
    id: "port-5",
    title: "Omnichannel Digital Growth & Ads Campaign",
    category: "Digital & PR",
    image: "/assets/services/digital-marketing.png",
    client: "E-Commerce Growth Retail",
    year: "2027",
    description: "Integrated paid social advertising, high-converting motion graphics, and targeted audience acquisition funnel.",
    tags: ["Performance Ads", "Social Media", "SEO", "Content"],
  },
  {
    id: "port-6",
    title: "National Digital PR & Editorial Feature Rollout",
    category: "Digital & PR",
    image: "/assets/services/digital-pr-media-relations.png",
    client: "Venture Brand Launch",
    year: "2027",
    description: "Strategic press announcements, publication coverage, and reputation management establishing brand authority.",
    tags: ["Digital PR", "Media Relations", "Press Release"],
  },
  {
    id: "port-7",
    title: "Executive Corporate Welcome & Gift Kits",
    category: "Print & Merch",
    image: "/assets/services/corporate-merchandising.png",
    client: "Enterprise Leadership",
    year: "2027",
    description: "Premium branded executive apparel, luxury metal stationery, custom journals, and client appreciation sets.",
    tags: ["Merchandising", "Corporate Gifting", "Stationery"],
  },
  {
    id: "port-8",
    title: "Mass Door-to-Door Promotional Flyer Outreach",
    category: "Print & Merch",
    image: "/assets/services/air-pamphlets-flyers.png",
    client: "Healthcare & Education Expo",
    year: "2027",
    description: "High-grade offset printed pamphlets paired with targeted residential and commercial distribution planning.",
    tags: ["Flyers", "Direct Marketing", "Print Production"],
  },
  {
    id: "port-9",
    title: "Flagship Corporate Summit & Exhibition Pavilion",
    category: "Spaces & Events",
    image: "/assets/services/event-management-promotions.png",
    client: "Annual Industry Expo",
    year: "2027",
    description: "Custom exhibition stall design, audiovisual staging, promotional collateral, and live on-ground coordination.",
    tags: ["Event Management", "Exhibition Stall", "Promotions"],
  },
];
