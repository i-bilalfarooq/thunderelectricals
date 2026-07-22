import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Thunder Electrical Equipment Repairing | Dubai",
    template: "%s | Thunder Electrical Equipment",
  },
  description: "Professional AC, washing machine, fridge, microwave, and electrical repair services in Dubai. 24/7 support. Call 050 4962516.",
  keywords: ["AC repair Dubai", "electrical repair", "washing machine repair", "fridge repair", "appliance repair Dubai"],
  openGraph: {
    title: "Thunder Electrical Equipment Repairing | Dubai",
    description: "Professional appliance and electrical repair services in Dubai. 24/7 support.",
    url: "https://thunderelectricalsdubai.com", // Placeholder domain
    siteName: "Thunder Electrical",
    locale: "en_AE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Thunder Electrical Equipment Repairing",
    "image": "https://thunderelectricalsdubai.com/logo.png",
    "@id": "https://thunderelectricalsdubai.com",
    "url": "https://thunderelectricalsdubai.com",
    "telephone": "0504962516",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Satwa",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.2048,
      "longitude": 55.2708
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "22:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.85",
      "reviewCount": "120"
    }
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
