export interface Signatory {
  name: string;
  role: string;
}

export interface DirectorMessage {
  greeting: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4: string;
  paragraph5: string;
  signatories: Signatory[];
}

export interface CompanyValue {
  title: string;
  desc: string;
}

export interface CompanyStat {
  value: string;
  label: string;
}

export interface CompanyContact {
  phone1: string;
  phone2: string;
  email: string;
  address: string;
  domain: string;
  whatsapp: string;
  mapEmbedUrl: string;
}

export interface CompanyData {
  name: string;
  tagline: string;
  subtitle: string;
  overview: string;
  contact: CompanyContact;
  directorsMessage: DirectorMessage;
  values: CompanyValue[];
  stats: CompanyStat[];
}

export const companyData: CompanyData = {
  name: "Media Maitri",
  tagline: "Promoting What's Authentic.",
  subtitle: "12 Distinct Services. One Creative Communications Partner.",
  overview:
    "Media Maitri is a premier communications, advertising, and branding agency dedicated to bringing brand stories to life through authentic, high-impact strategies. From large-format outdoor hoardings, transit ads, and direct print outreach to cutting-edge digital marketing, radio broadcasts, corporate workspace branding, and event management—we deliver end-to-end creative excellence across physical and digital realms.",
  contact: {
    phone1: "+91 7267060201",
    phone2: "+91 9639599342",
    email: "mediamaitrigroup@gmail.com",
    address: "Awaleshpur, Varanasi, Kandwa, Uttar Pradesh 221106",
    domain: "www.mediamaitri.com",
    whatsapp: "917267060201",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14432.493928424177!2d82.9515284!3d25.2662058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3230c12808c1%3A0xe5417ae411ea99ee!2sAwaleshpur%2C%20Varanasi%2C%20Uttar%20Pradesh%20221106!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  directorsMessage: {
    greeting: "Dear Clients, Partners and Well-Wishers,",
    paragraph1:
      "At Media Maitri, we believe every brand has a story worth telling and that the strongest communication begins with authenticity. Our philosophy, 'Promoting What's Authentic,' guides our commitment to meaningful ideas, thoughtful execution and relationships built on trust.",
    paragraph2:
      "As we present our Company Magazine for 2027–2028, we are pleased to showcase twelve distinct services united by one creative vision. We bring together advertising, branding, marketing, public relations, merchandising and event experiences to help businesses communicate with clarity and confidence.",
    paragraph3:
      "From pamphlets, flyers, banners and outdoor displays to moving advertisements, radio campaigns and digital marketing, our capabilities also include corporate space design, research-led strategy, digital PR, community partnerships, packaging, branded merchandise and event promotions.",
    paragraph4:
      "For us, communication is not simply about being seen; it is about being understood, remembered and trusted. We combine creative imagination with practical planning, responsible messaging and close attention to each client's goals.",
    paragraph5:
      "Looking ahead, we aim to build lasting partnerships, strengthen brand identities and create work that delivers meaningful value. Thank you for your confidence in Media Maitri and for being part of our journey.",
    signatories: [
      { name: "Jeevesh Patel", role: "Managing Director / CEO" },
      { name: "Rajan K. Vishwakarma", role: "General Manager (Board of Director)" },
    ],
  },
  values: [
    {
      title: "Authentic Communication",
      desc: "Honest, transparent, and purposeful storytelling that builds enduring credibility.",
    },
    {
      title: "Creative Excellence",
      desc: "Original design and strategic messaging that captures attention and inspires action.",
    },
    {
      title: "End-to-End Execution",
      desc: "Seamless integration from concept and print production to on-ground distribution.",
    },
    {
      title: "Lasting Partnerships",
      desc: "Deep commitment to our clients' sustained business growth and brand value.",
    },
  ],
  stats: [
    { value: "12", label: "Core Business Services" },
    { value: "08", label: "Specialized Industry Sectors" },
    { value: "100%", label: "Authentic Creative Craft" },
    { value: "24/7", label: "Dedicated Client Support" },
  ],
};
