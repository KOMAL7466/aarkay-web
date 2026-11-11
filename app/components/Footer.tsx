"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react"; // Youtube hata diya

// Custom Brand Icons (SVG)
const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const YoutubeIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const WHATSAPP = "917888847774";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-navy text-white">
      {/* CTA Band */}
      <div className="bg-gradient-to-r from-orange to-gold py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-sora">
            Ready to Switch to Smart Energy?
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" className="bg-white text-navy font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition">WhatsApp Us</a>
            <a href="tel:917888847774" className="bg-navy text-white font-bold py-3 px-8 rounded-full hover:bg-teal transition">Call Now</a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange to-gold flex items-center justify-center text-white font-bold">AK</div>
            <div>
              <h4 className="font-bold font-sora text-lg">Aar Kay</h4>
              <p className="text-[10px] text-gold tracking-widest">ELECTRONICS</p>
            </div>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">Trusted Solar & Lithium Experts since 2007. Pan India installations, Su-Kam Super Distributor, and authorized LG outlet.</p>
          <div className="flex gap-3">
            <a href="https://instagram.com" target="_blank" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange flex items-center justify-center transition"><InstagramIcon size={16} /></a>
            <a href="https://facebook.com" target="_blank" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange flex items-center justify-center transition"><FacebookIcon size={16} /></a>
            <a href="https://youtube.com" target="_blank" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange flex items-center justify-center transition"><YoutubeIcon size={16} /></a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-bold font-sora mb-4 text-gold">Products</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/lithium-battery" className="hover:text-orange transition">Lithium Battery</Link></li>
            <li><Link href="/hybrid-solar" className="hover:text-orange transition">Hybrid Solar</Link></li>
            <li><Link href="/on-grid-solar" className="hover:text-orange transition">On-Grid Solar</Link></li>
            <li><Link href="/compare" className="hover:text-orange transition">Compare Products</Link></li>
            <li><Link href="/solar-calculator" className="hover:text-orange transition">Solar Calculator</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold font-sora mb-4 text-gold">Company</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/about" className="hover:text-orange transition">About Us</Link></li>
            <li><Link href="/installations" className="hover:text-orange transition">Installations</Link></li>
            <li><Link href="/customers" className="hover:text-orange transition">Customers</Link></li>
            <li><Link href="/loan-subsidy" className="hover:text-orange transition">Loan & Subsidy</Link></li>
            <li><Link href="/service-support" className="hover:text-orange transition">Service Support</Link></li>
            <li><Link href="/blog" className="hover:text-orange transition">Blog</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold font-sora mb-4 text-gold">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex gap-2"><MapPin size={16} className="text-orange shrink-0 mt-0.5" /><span>Zirakpur, Mohali, Panchkula — Punjab</span></li>
            <li className="flex gap-2"><Phone size={16} className="text-orange shrink-0 mt-0.5" /><a href="tel:+919999999999" className="hover:text-orange">+91 917888847774</a></li>
            <li className="flex gap-2"><Mail size={16} className="text-orange shrink-0 mt-0.5" /><a href="mailto:info@aarkay.com" className="hover:text-orange">info@aarkay.com</a></li>
            <li className="flex gap-2"><Clock size={16} className="text-orange shrink-0 mt-0.5" /><span>Mon – Sat: 9 AM – 7 PM</span></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p>© {year ?? 2026} Aar Kay Electronics. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gold">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}