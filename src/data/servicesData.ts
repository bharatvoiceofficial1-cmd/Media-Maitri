export interface ServiceInclusion {
  title: string;
  desc: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  icon: string;
  image: string;
  introduction: string;
  inclusions: ServiceInclusion[];
  bestSuitedFor: string;
  ourCommitment: string;
  bonusFeature?: string;
}

export const servicesData: ServiceItem[] = [
  {
    "id": "01",
    "slug": "air-pamphlets-flyers",
    "title": "Air Pamphlets / Flyers",
    "tagline": "High-Impact Direct Print & Local Distribution",
    "icon": "FileText",
    "image": "/assets/services/air-pamphlets-flyers.png",
    "introduction": "At Media Maitri, we create impactful pamphlets and flyers that help businesses communicate directly with local audiences. Combining attractive design, persuasive messaging and coordinated distribution, our printed promotional solutions strengthen brand awareness, highlight offers and encourage customer engagement.",
    "inclusions": [
      {
        "title": "Creative Designing",
        "desc": "Customised pamphlets, flyers and leaflets featuring professional layouts, compelling imagery, consistent branding and clear information."
      },
      {
        "title": "Promotional Messaging",
        "desc": "Engaging headlines, product highlights, service descriptions, special offers and persuasive calls to action tailored to campaign objectives."
      },
      {
        "title": "Print-Ready Artwork",
        "desc": "High-resolution designs prepared for suitable paper sizes, printing specifications and professional production requirements."
      },
      {
        "title": "Distribution Planning",
        "desc": "Coordinated outreach across selected residential neighbourhoods, commercial markets, retail locations and relevant customer touchpoints."
      },
      {
        "title": "Campaign Support",
        "desc": "Promotional materials for business openings, product launches, festive offers, institutional announcements and community awareness initiatives."
      }
    ],
    "bestSuitedFor": "Retail stores, restaurants, educational institutions, healthcare providers, real estate businesses, corporate organisations, exhibitions and local promotional campaigns.",
    "ourCommitment": "Media Maitri combines creative thinking with practical advertising strategies to deliver accessible, professional and memorable printed communication. We focus on making every flyer informative, visually appealing and relevant to its intended audience, helping businesses build recognition, inspire enquiries and support market visibility.",
    "bonusFeature": "Alongside pamphlets and flyers, we also design and print premium visiting cards that create a strong and lasting professional impression."
  },
  {
    "id": "02",
    "slug": "banners-hoardings-flex",
    "title": "Banners, Hoardings & Flex",
    "tagline": "Large-Format Outdoor & Prominent Street Presence",
    "icon": "Maximize",
    "image": "/assets/services/banners-hoardings-flex.png",
    "introduction": "We develop striking large-format outdoor advertising that turns public spaces into powerful brand communication platforms. From retail frontage to prominent campaign displays, our solutions combine memorable design, clear messaging and practical installation planning.",
    "inclusions": [
      {
        "title": "CREATIVE BANNER DESIGN",
        "desc": "Custom promotional banners and flex graphics tailored to brand identity and viewing distance."
      },
      {
        "title": "HOARDING ARTWORK",
        "desc": "Bold large-format compositions with legible headlines and high-impact campaign imagery."
      },
      {
        "title": "PRINT PRODUCTION",
        "desc": "High-resolution artwork, suitable materials and size-specific production coordination."
      },
      {
        "title": "DISPLAY PLANNING",
        "desc": "Location-aware layout adaptations, visibility assessment and installation support."
      },
      {
        "title": "CAMPAIGN BRANDING",
        "desc": "Consistent designs for launches, storefront promotions, exhibitions and outdoor campaigns."
      }
    ],
    "bestSuitedFor": "Retail outlets, property developers, institutions, event organisers and businesses seeking outdoor visibility.",
    "ourCommitment": "We combine creative precision and practical execution to make each display distinctive, durable and easy to recognise."
  },
  {
    "id": "03",
    "slug": "auto-moving-advertisement",
    "title": "Auto / Moving Advertisement",
    "tagline": "Transit Media & High-Frequency Mobile Visibility",
    "icon": "Truck",
    "image": "/assets/services/auto-moving-advertisement.png",
    "introduction": "Our moving advertisement solutions transform everyday vehicles into mobile brand ambassadors. We design eye-catching graphics that communicate effectively across busy streets, neighbourhoods and commuting routes while reinforcing repeated brand recognition.",
    "inclusions": [
      {
        "title": "VEHICLE WRAP CONCEPTS",
        "desc": "Creative branding ideas for auto-rickshaws, vans, cars and promotional vehicles."
      },
      {
        "title": "FORMAT ADAPTATION",
        "desc": "Artwork designed around vehicle dimensions, panels, doors and visibility zones."
      },
      {
        "title": "CAMPAIGN MESSAGING",
        "desc": "Short, memorable headlines and contact details readable while vehicles move."
      },
      {
        "title": "ROUTE COORDINATION",
        "desc": "Support for placement planning across relevant local travel routes and markets."
      },
      {
        "title": "PRODUCTION SUPPORT",
        "desc": "Print-ready graphics and coordination for application and campaign maintenance."
      }
    ],
    "bestSuitedFor": "Local businesses, retail chains, property campaigns, product launches and neighbourhood promotions.",
    "ourCommitment": "We connect bold creativity with practical mobility, helping brands reach audiences beyond fixed advertising locations."
  },
  {
    "id": "04",
    "slug": "digital-marketing",
    "title": "Digital Marketing",
    "tagline": "Data-Driven Online Visibility & Multi-Channel Growth",
    "icon": "Globe",
    "image": "/assets/services/digital-marketing.png",
    "introduction": "Media Maitri develops coordinated digital campaigns that help brands connect with audiences across online channels. Our approach combines strategic messaging, appealing creative content and ongoing communication to strengthen visibility and encourage meaningful engagement.",
    "inclusions": [
      {
        "title": "CAMPAIGN PLANNING",
        "desc": "Digital promotional strategies aligned with business goals and audience interests."
      },
      {
        "title": "SOCIAL MEDIA CREATIVES",
        "desc": "Branded posts, campaign graphics and engaging promotional content."
      },
      {
        "title": "CONTENT & MESSAGING",
        "desc": "Clear copy, compelling calls to action and consistent brand storytelling."
      },
      {
        "title": "ONLINE PRESENCE",
        "desc": "Website and digital identity support for a coherent customer experience."
      },
      {
        "title": "PERFORMANCE INSIGHTS",
        "desc": "Review of campaign indicators to inform creative and communication improvements."
      }
    ],
    "bestSuitedFor": "Retailers, service providers, institutions, emerging brands and businesses growing their online reach.",
    "ourCommitment": "We balance creativity and strategy to build digital communication that is recognisable, relevant and audience-focused."
  },
  {
    "id": "05",
    "slug": "radio-on-air-advertisement",
    "title": "Radio / On-Air Advertisement",
    "tagline": "Distinctive Audio Presence & Broadcast Impact",
    "icon": "Radio",
    "image": "/assets/services/radio-on-air-advertisement.png",
    "introduction": "We create engaging audio advertising concepts that give brands a distinctive voice. Through memorable scripts, persuasive messages and coordinated broadcast planning, we help businesses share announcements and promotions with listeners.",
    "inclusions": [
      {
        "title": "CREATIVE SCRIPTWRITING",
        "desc": "Concise radio scripts built around clear brand messages and listener attention."
      },
      {
        "title": "AUDIO CONCEPTS",
        "desc": "Ideas for voiceovers, jingles, sound cues and memorable campaign narratives."
      },
      {
        "title": "BROADCAST PLANNING",
        "desc": "Support for spot length, timing and appropriate on-air promotional formats."
      },
      {
        "title": "CAMPAIGN COORDINATION",
        "desc": "Alignment of radio messaging with launches, events and wider promotions."
      },
      {
        "title": "BRAND CONSISTENCY",
        "desc": "Recognisable audio tone and calls to action across repeated advertisements."
      }
    ],
    "bestSuitedFor": "Local promotions, business announcements, public campaigns, product launches and brand awareness.",
    "ourCommitment": "Our goal is to turn every broadcast message into a clear, compelling and memorable brand experience. ON-AIR BRAND MESSAGE"
  },
  {
    "id": "06",
    "slug": "office-corporate-place-designing",
    "title": "Office / Corporate Place Designing",
    "tagline": "Environmental Branding & Inspiring Workspaces",
    "icon": "Building",
    "image": "/assets/services/office-corporate-place-designing.png",
    "introduction": "We help shape professional interior and exterior environments that express an organisation\u2019s identity. From reception areas and workplace branding to exterior signage, our concepts bring visual consistency, functionality and a welcoming corporate presence.",
    "inclusions": [
      {
        "title": "INTERIOR BRANDING",
        "desc": "Reception graphics, wall treatments and brand-aligned workspace presentation."
      },
      {
        "title": "EXTERIOR IDENTITY",
        "desc": "Facade concepts, entrance signage and prominent corporate brand displays."
      },
      {
        "title": "WAYFINDING SYSTEMS",
        "desc": "Directional signage and information graphics for easier visitor navigation."
      },
      {
        "title": "SPACE VISUALISATION",
        "desc": "Design concepts for display zones, client areas and branded environments."
      },
      {
        "title": "EXECUTION PLANNING",
        "desc": "Material selection, production guidance and onsite implementation coordination."
      }
    ],
    "bestSuitedFor": "Offices, corporate campuses, showrooms, reception areas and client-facing business premises.",
    "ourCommitment": "We blend aesthetics, clarity and practical planning to create spaces that communicate professionalism and trust."
  },
  {
    "id": "07",
    "slug": "strategies-research-outreach",
    "title": "Strategies, Research & Outreach",
    "tagline": "Data-Led Planning, Market Insights & Focused Reach",
    "icon": "Compass",
    "image": "/assets/services/strategies-research-outreach.png",
    "introduction": "Strong communication starts with understanding people and markets. Media Maitri supports brands through research-led planning, audience insight and focused outreach that make campaigns more relevant, purposeful and effective.",
    "inclusions": [
      {
        "title": "AUDIENCE RESEARCH",
        "desc": "Identify customer groups, interests, preferences and communication touchpoints."
      },
      {
        "title": "MARKET ASSESSMENT",
        "desc": "Review category trends, local context and competitive positioning."
      },
      {
        "title": "CAMPAIGN STRATEGY",
        "desc": "Define objectives, key messages and appropriate promotional channels."
      },
      {
        "title": "OUTREACH PLANNING",
        "desc": "Develop engagement approaches for communities, partners and prospective customers."
      },
      {
        "title": "INSIGHT APPLICATION",
        "desc": "Translate findings into practical creative and communication recommendations."
      }
    ],
    "bestSuitedFor": "Businesses entering new markets, organisations planning campaigns and brands seeking stronger audience relevance.",
    "ourCommitment": "We combine research, creative thinking and actionable planning to help brands communicate with greater confidence. RESEARCH & STRATEGY"
  },
  {
    "id": "08",
    "slug": "digital-pr-media-relations",
    "title": "Digital PR & Media Relations",
    "tagline": "Strategic Media Stories, Credibility & Public Relations",
    "icon": "Newspaper",
    "image": "/assets/services/digital-pr-media-relations.png",
    "introduction": "We support professional brand communication through carefully prepared media stories, announcements and digital public relations. Our work helps organisations present credible information and engage with journalists, publications and relevant audiences.",
    "inclusions": [
      {
        "title": "PRESS RELEASE WRITING",
        "desc": "Clear, newsworthy announcements with accurate and compelling brand information."
      },
      {
        "title": "MEDIA STORY DEVELOPMENT",
        "desc": "Identify relevant angles, narratives and expert perspectives for publication."
      },
      {
        "title": "JOURNALIST OUTREACH",
        "desc": "Prepare targeted pitches and coordinate appropriate media communication."
      },
      {
        "title": "THOUGHT LEADERSHIP",
        "desc": "Develop insightful articles, opinion pieces and professional commentary."
      },
      {
        "title": "REPUTATION MESSAGING",
        "desc": "Maintain consistent, responsible and credible communication across channels."
      }
    ],
    "bestSuitedFor": "Corporate announcements, institutional updates, launches, expert-led brands and public-facing organisations.",
    "ourCommitment": "We prioritise clarity, credibility and relevance to support long-term trust and meaningful media relationships."
  },
  {
    "id": "09",
    "slug": "community-building-cross-promotions",
    "title": "Community Building & Cross-Promotions",
    "tagline": "Collaborative Alliances & Trusted Local Engagement",
    "icon": "Users",
    "image": "/assets/services/community-building-cross-promotions.png",
    "introduction": "Meaningful partnerships help brands grow through shared audiences and trusted local connections. We plan collaborative campaigns, community initiatives and cross-promotions that bring complementary organisations together around common goals.",
    "inclusions": [
      {
        "title": "PARTNER IDENTIFICATION",
        "desc": "Explore suitable businesses, communities and organisations for collaboration."
      },
      {
        "title": "JOINT CAMPAIGNS",
        "desc": "Develop coordinated promotional concepts that benefit participating partners."
      },
      {
        "title": "COMMUNITY EVENTS",
        "desc": "Plan co-hosted activities, local engagement and brand interaction opportunities."
      },
      {
        "title": "REFERRAL INITIATIVES",
        "desc": "Create mutually supportive introductions and promotional referral concepts."
      },
      {
        "title": "OUTREACH MATERIALS",
        "desc": "Prepare branded messaging and collateral for coordinated partner communication."
      }
    ],
    "bestSuitedFor": "Local enterprises, institutions, lifestyle brands, community groups and complementary service businesses.",
    "ourCommitment": "We aim to build authentic relationships that create mutual visibility, engagement and lasting collaborative value. COMMUNITY PARTNERSHIPS"
  },
  {
    "id": "10",
    "slug": "packaging-branding",
    "title": "Packaging & Branding",
    "tagline": "Distinctive Identity Systems & Shelf-Ready Presentation",
    "icon": "Package",
    "image": "/assets/services/packaging-branding.png",
    "introduction": "We create distinctive brand identities and packaging that communicate product value at first glance. From logo systems to labels and retail boxes, our designs bring consistency, recognition and a professional presentation to every customer touchpoint.",
    "inclusions": [
      {
        "title": "BRAND IDENTITY",
        "desc": "Logo concepts, typography, colour palettes and coordinated visual guidelines."
      },
      {
        "title": "PACKAGING DESIGN",
        "desc": "Creative concepts for cartons, sleeves, bags, boxes and product containers."
      },
      {
        "title": "LABELS & TAGS",
        "desc": "Clear, attractive labels and tags suited to products and retail display."
      },
      {
        "title": "PRINT-READY FILES",
        "desc": "Production artwork prepared with appropriate dimensions and specifications."
      },
      {
        "title": "BRAND APPLICATIONS",
        "desc": "Consistent presentation across packaging, stationery and promotional collateral."
      }
    ],
    "bestSuitedFor": "Consumer products, food brands, retailers, startups, gifting businesses and product launches.",
    "ourCommitment": "We combine visual distinction and practical packaging needs to make brands recognisable, cohesive and shelf-ready."
  },
  {
    "id": "11",
    "slug": "corporate-merchandising",
    "title": "Corporate Merchandising",
    "tagline": "Custom Branded Products & Memorable Corporate Touchpoints",
    "icon": "Gift",
    "image": "/assets/services/corporate-merchandising.png",
    "introduction": "Media Maitri develops customised branded merchandise that keeps businesses visible in everyday interactions. From executive stationery to welcome kits and promotional gifts, our solutions combine useful products with thoughtful brand presentation.",
    "inclusions": [
      {
        "title": "BRANDED APPAREL",
        "desc": "Custom shirts, caps and wearable items with coordinated corporate identity."
      },
      {
        "title": "OFFICE ESSENTIALS",
        "desc": "Notebooks, pens, desk accessories and professional stationery."
      },
      {
        "title": "CORPORATE GIFTING",
        "desc": "Employee welcome kits, festive hampers and client appreciation sets."
      },
      {
        "title": "PROMOTIONAL PRODUCTS",
        "desc": "Drinkware, umbrellas, tote bags and event giveaway concepts."
      },
      {
        "title": "SOURCING SUPPORT",
        "desc": "Product selection, branding methods, packaging and supply coordination."
      }
    ],
    "bestSuitedFor": "Corporate teams, employee onboarding, client relations, trade shows and promotional campaigns.",
    "ourCommitment": "We focus on practical, appealing merchandise that strengthens brand recall and communicates appreciation."
  },
  {
    "id": "12",
    "slug": "event-management-promotions",
    "title": "Event Management & Promotions",
    "tagline": "Experiential Events, Product Launches & On-Ground Impact",
    "icon": "Calendar",
    "image": "/assets/services/event-management-promotions.png",
    "introduction": "We support memorable brand experiences through thoughtful event planning and coordinated promotional execution. From corporate launches to exhibitions and on-ground activations, we bring together creative presentation, clear communication and operational planning.",
    "inclusions": [
      {
        "title": "EVENT CONCEPTS",
        "desc": "Creative themes and formats for launches, corporate gatherings and activations."
      },
      {
        "title": "VENUE BRANDING",
        "desc": "Backdrops, standees, directional signs and branded event environments."
      },
      {
        "title": "PROMOTIONAL COLLATERAL",
        "desc": "Invitations, badges, banners, handouts and participant materials."
      },
      {
        "title": "VENDOR COORDINATION",
        "desc": "Planning support across venues, suppliers, production and onsite logistics."
      },
      {
        "title": "AUDIENCE ENGAGEMENT",
        "desc": "Branded touchpoints and activities that encourage meaningful participation."
      }
    ],
    "bestSuitedFor": "Product launches, exhibitions, conferences, corporate events and community outreach programmes.",
    "ourCommitment": "We bring creativity and organised execution together to help every event communicate a consistent brand story."
  }
];
