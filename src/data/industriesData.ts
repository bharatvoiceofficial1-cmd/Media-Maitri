export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  icon: string;
  description: string;
  solutions: string[];
}

export const industriesData: IndustryItem[] = [
  {
    "id": "01",
    "slug": "ecommerce-retail",
    "title": "E-Commerce & Retail",
    "tagline": "Turn Browsing into Buying with Cohesive Product Storytelling",
    "icon": "ShoppingCart",
    "description": "Turn browsing into buying with cohesive product storytelling across online storefronts, marketplaces and social channels.",
    "solutions": [
      "Product launches, catalogues and promotional creatives",
      "Social commerce content, paid campaigns and conversion messaging",
      "Seasonal offers, packaging and customer-retention promotions"
    ]
  },
  {
    "id": "02",
    "slug": "real-estate-infrastructure",
    "title": "Real Estate & Infrastructure",
    "tagline": "Present Properties & Developments with Persuasive Visuals",
    "icon": "Building2",
    "description": "Present properties and developments with clear, persuasive visuals that help prospective buyers understand location, design and value.",
    "solutions": [
      "Architectural photography and property walkthrough concepts",
      "3D visualisation and virtual-tour campaign coordination",
      "Project brochures, outdoor media and local lead-generation campaigns"
    ]
  },
  {
    "id": "03",
    "slug": "education-edtech",
    "title": "Education & EdTech",
    "tagline": "Connect with Students and Families Through Credible Stories",
    "icon": "GraduationCap",
    "description": "Help institutions connect with students and families through credible information, accessible course stories and targeted outreach.",
    "solutions": [
      "Admissions campaigns, prospectuses and campus promotions",
      "Course videos, digital advertising and enquiry generation",
      "Regional and cross-border outreach for learning programmes"
    ]
  },
  {
    "id": "04",
    "slug": "food-beverage-hospitality",
    "title": "Food, Beverage & Hospitality",
    "tagline": "Build Memorable Guest Experiences Through Appetite-Led Visuals",
    "icon": "Utensils",
    "description": "Build memorable guest experiences through appetite-led visuals, consistent brand identity and locally relevant promotions.",
    "solutions": [
      "Restaurant identity, menus, packaging and in-store branding",
      "Food photography, short-form videos and social media campaigns",
      "Local influencer collaborations, launches and seasonal offers"
    ]
  },
  {
    "id": "05",
    "slug": "healthcare-wellness-fitness",
    "title": "Healthcare, Wellness & Fitness",
    "tagline": "Trust-Centred Communication for Health & Wellness",
    "icon": "Activity",
    "description": "Support responsible, trust-centred communication that helps patients and wellness audiences understand services and make informed choices.",
    "solutions": [
      "Clinic visibility, service explainers and awareness campaigns",
      "Patient-friendly educational content and reputation messaging",
      "Fitness memberships, wellness launches and local outreach"
    ]
  },
  {
    "id": "06",
    "slug": "entertainment-film-music",
    "title": "Entertainment, Film & Music",
    "tagline": "Anticipation, Discovery & Community Around Live Experiences",
    "icon": "Film",
    "description": "Create anticipation, encourage discovery and build communities around creative releases, performances and live experiences.",
    "solutions": [
      "Film, trailer and music-release promotional concepts",
      "OTT, event and ticketing campaign communication",
      "Press outreach, influencer collaborations and fan engagement"
    ]
  },
  {
    "id": "07",
    "slug": "automotive-industrial-manufacturing",
    "title": "Automotive & Industrial Manufacturing",
    "tagline": "Translate Technical Strengths into Compelling Stories",
    "icon": "Car",
    "description": "Translate technical strengths into clear stories for consumers, dealers, distributors and business buyers.",
    "solutions": [
      "Vehicle and product-launch campaigns and showroom branding",
      "B2B collateral, trade-show promotion and buyer outreach",
      "Audience segmentation, lead generation and industrial photography"
    ]
  },
  {
    "id": "08",
    "slug": "fashion-beauty-lifestyle",
    "title": "Fashion, Beauty & Lifestyle",
    "tagline": "Style-Led Brands Brought to Life Through Distinctive Direction",
    "icon": "Sparkles",
    "description": "Bring style-led brands to life through distinctive visual direction, consistent positioning and culturally relevant campaigns.",
    "solutions": [
      "Fashion shoots, lookbooks and product storytelling",
      "Influencer marketing, short-form video and social commerce",
      "Collection launches, retail displays and packaging identity"
    ]
  }
];
