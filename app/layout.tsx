import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const notoHindi = Noto_Sans_Devanagari({ subsets: ["devanagari"], variable: "--font-noto" });

export const metadata: Metadata = {
  metadataBase: new URL("https://aarkayelectronics.com"),
  title: {
    default: "Aar Kay Electronics | Solar, Hybrid & Lithium Battery Experts",
    template: "%s | Aar Kay Electronics",
  },
  description: "Trusted solar & lithium battery experts since 2007. Su-Kam Super Distributor & Mepro Green Energy Partner. 1000+ installations. Get free quote on WhatsApp.",
  keywords: ["solar panel Mohali", "lithium battery Panchkula", "hybrid solar Punjab", "on-grid solar Zirakpur", "Su-Kam dealer", "Aar Kay Electronics"],
  
  // Google Search Console Verification Code Added Here
  verification: {
    google: "esCW5LtrOIQa5YjepNipKKgCKAsF_VyH2lMdqWS31JU",
  },

  openGraph: {
    title: "Aar Kay Electronics | Smart Solar & Lithium Experts",
    description: "Since 2007 · 1000+ installations · Pan India support.",
    url: "https://aarkayelectronics.com",
    siteName: "Aar Kay Electronics",
    images: [{ url: "/ark-logo.png.jpeg", width: 1200, height: 630, alt: "Aar Kay Electronics" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aar Kay Electronics | Smart Solar & Lithium Experts",
    images: ["/ark-logo.png.jpeg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://aarkayelectronics.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* LocalBusiness Schema for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Aar Kay Electronics",
              image: "https://aarkayelectronics.com/ark-logo.png.jpeg",
              "@id": "https://aarkayelectronics.com",
              url: "https://aarkayelectronics.com",
              telephone: "+91-78888-47774",
              priceRange: "₹₹",
              address: {
                "@type": "PostalAddress",
                streetAddress: "SCO 10, Opposite Motia Huys, Peer Muchalla",
                addressLocality: "Mohali",
                addressRegion: "Punjab",
                postalCode: "140603",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 30.6425,
                longitude: 76.8173,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "19:00",
              },
              sameAs: [
                "https://www.instagram.com/aar_kay_electronics/",
                "https://www.youtube.com/@Aarkayelectronics",
              ],
            }),
          }}
        />
      </head>
      <body className={`${sora.variable} ${jakarta.variable} ${notoHindi.variable} font-jakarta antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}