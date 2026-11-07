import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const notoHindi = Noto_Sans_Devanagari({ subsets: ["devanagari"], variable: "--font-noto" });

export const metadata: Metadata = {
  title: "Aar Kay Electronics | Solar & Lithium Experts",
  description: "Since 2007. Pan India Solar Installations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${jakarta.variable} ${notoHindi.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}