import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const notoHindi = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "700"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aarkayelectronics.com"),
  title: {
    default: "Aar Kay Electronics | Solar, Hybrid & Lithium Battery Experts Since 2007",
    template: "%s | Aar Kay Electronics",
  },
  description:
    "Trusted solar & lithium battery experts in Zirakpur, Mohali, Panchkula since 2007. Su-Kam Super Distributor & authorized LG outlet. 1000+ installations. Get free quote on WhatsApp.",
  keywords: [
    "solar panel Zirakpur",
    "lithium battery Mohali",
    "hybrid solar Panchkula",
    "on-grid solar Punjab",
    "Su-Kam dealer",
    "PM Surya Ghar subsidy",
    "solar installation Chandigarh",
    "Aar Kay Electronics",
  ],
  authors: [{ name: "Aar Kay Electronics" }],
  openGraph: {
    title: "Aar Kay Electronics | Smart Solar & Lithium Experts",
    description:
      "Since 2007 · 1000+ installations · Pan India support. Get your free solar quote today.",
    url: "https://aarkayelectronics.com",
    siteName: "Aar Kay Electronics",
    images: [
      {
        url: "https://images.pexels.com/photos/9875405/pexels-photo-9875405.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Aar Kay Electronics Solar Installation",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aar Kay Electronics | Smart Solar & Lithium Experts",
    description: "Since 2007 · 1000+ installations · Pan India support.",
    images: [
      "https://images.pexels.com/photos/9875405/pexels-photo-9875405.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://aarkayelectronics.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Aar Kay Electronics",
              image:
                "https://images.pexels.com/photos/9875405/pexels-photo-9875405.jpeg",
              "@id": "https://aarkayelectronics.com",
              url: "https://aarkayelectronics.com",
              telephone: "+91-99999-99999",
              priceRange: "₹₹",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Zirakpur",
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
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "09:00",
                closes: "19:00",
              },
              sameAs: [
                "https://www.instagram.com/aarkayelectronics",
                "https://www.facebook.com/aarkayelectronics",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${sora.variable} ${jakarta.variable} ${notoHindi.variable} font-jakarta antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}