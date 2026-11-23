import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLogoBadge from "@/components/FloatingLogoBadge";
import { companyData } from "@/data/companyData";

export const viewport: Viewport = {
  themeColor: "#0B1930",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mediamaitri.com"),
  title: {
    default: "Media Maitri | Promoting What's Authentic | Official Corporate Website",
    template: "%s | Media Maitri",
  },
  description:
    "Official website of Media Maitri. 12 distinct business services united by one creative vision: Out-of-Home billboards, transit advertising, digital marketing, radio campaigns, corporate place design, PR, and event management.",
  keywords: [
    "Media Maitri",
    "Promoting What's Authentic",
    "Advertising Agency Varanasi",
    "Outdoor Hoardings and Flex",
    "Moving Transit Advertisements",
    "Digital Marketing Agency",
    "Radio On-Air Advertisements",
    "Corporate Workspace Designing",
    "Digital PR and Media Relations",
    "Event Management and Promotions",
    "Corporate Merchandising",
    "Packaging and Branding",
  ],
  authors: [{ name: "Media Maitri Leadership" }],
  creator: "Media Maitri",
  publisher: "Media Maitri",
  icons: {
    icon: "/assets/brand/logo_master.png",
    apple: "/assets/brand/logo_master.png",
  },
  openGraph: {
    title: "Media Maitri | Promoting What's Authentic",
    description:
      "12 Distinct Services. One Creative Communications Partner. Official Corporate Magazine 2027–2028.",
    url: "https://www.mediamaitri.com",
    siteName: "Media Maitri",
    images: [
      {
        url: "/assets/brand/cover_graphic.png",
        width: 1200,
        height: 630,
        alt: "Media Maitri Corporate Brand Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Maitri | Promoting What's Authentic",
    description:
      "12 Distinct Business Services: Outdoor, Transit, Digital Marketing, PR, Workspace Design & Events.",
    images: ["/assets/brand/cover_graphic.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AdvertisingAgency",
    name: companyData.name,
    alternateName: "Media Maitri Group",
    url: "https://www.mediamaitri.com",
    logo: "https://www.mediamaitri.com/assets/brand/logo_master.png",
    slogan: companyData.tagline,
    description: companyData.overview,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Awaleshpur, Kandwa",
      addressLocality: "Varanasi",
      addressRegion: "Uttar Pradesh",
      postalCode: "221106",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: companyData.contact.phone1,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        telephone: companyData.contact.phone2,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    sameAs: [
      "https://www.instagram.com/mediamaitri",
      "https://www.facebook.com/mediamaitri",
      "https://www.linkedin.com/company/mediamaitri",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#0B1930] selection:bg-[#D4AF37] selection:text-[#0B1930]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <FloatingLogoBadge />
        <Footer />
      </body>
    </html>
  );
}
