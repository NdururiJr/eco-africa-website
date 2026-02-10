import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackgroundLogo from "./components/BackgroundLogo";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Eco Africa Industries Kenya | Industrial Laundry & Manufacturing Equipment",
  description: "Kenya's trusted supplier of premium industrial laundry machines, manufacturing equipment, and packaging machinery. Washing machines, dryers, cartoning machines, filling machines, hammer mills & more. Expert installation across East Africa.",
  keywords: "industrial equipment Kenya, laundry machines Kenya, manufacturing equipment East Africa, cartoning machine, filling machine, hammer mill, packaging machinery Nairobi, Eco Africa Industries",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ecoafricaindustries.com"),
  openGraph: {
    title: "Eco Africa Industries Kenya | Industrial Laundry & Manufacturing Equipment",
    description: "Kenya's leading supplier of industrial laundry machines, manufacturing equipment, and packaging machinery for businesses across East Africa.",
    type: "website",
    locale: "en_KE",
    siteName: "Eco Africa Industries Kenya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eco Africa Industries Kenya | Industrial Laundry & Manufacturing Equipment",
    description: "Kenya's leading supplier of industrial laundry machines, manufacturing equipment, and packaging machinery for businesses across East Africa.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-KE": "/",
    },
  },
  other: {
    "geo.region": "KE",
    "geo.placename": "Nairobi",
    "geo.position": "-1.2921;36.8219",
    "ICBM": "-1.2921, 36.8219",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Eco Africa Industries Kenya",
  description: "Kenya's trusted supplier of premium industrial laundry machines, manufacturing equipment, and packaging machinery for businesses across East Africa.",
  url: "https://ecoafricaindustries.com",
  telephone: "+254704585410",
  email: "info@ecoafricaindustries.co.ke",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -1.2921,
    longitude: 36.8219,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/p/Eco-Africa-Industries-Kenya-100065228815009/",
  ],
  priceRange: "$$",
  areaServed: ["Kenya", "Uganda", "Tanzania", "Rwanda", "East Africa"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <BackgroundLogo />
        <Header />
        <main className="min-h-screen relative z-10">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
