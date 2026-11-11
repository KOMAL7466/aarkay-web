"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Lithium Battery", href: "/lithium-battery" },
  { name: "Hybrid Solar", href: "/hybrid-solar" },
  { name: "On-Grid Solar", href: "/on-grid-solar" },
  { name: "Installations", href: "/installations" },
  { name: "Customers", href: "/customers" },
  { name: "Loan & Subsidy", href: "/loan-subsidy" },
  { name: "Service", href: "/service-support" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-navy text-white text-xs md:text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-eco animate-pulse"></span>
            Since 2007 · Pan India Support · 1000+ Installations
          </p>
          <a href="tel:+917888847774" className="flex items-center gap-2 hover:text-gold transition">
            <Phone size={14} /> +91 78888 47774
          </a>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white shadow-sm"
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          
          <Link href="/" className="flex items-center gap-2">
            {/* Naya ARK Logo */}
            <img src="/ark-logo.png.jpeg" alt="Aar Kay Electronics" className="h-12 w-auto object-contain" 
              onError={(e) => {
                // Fallback if image not found
                e.currentTarget.style.display = 'none';
              }} 
            />
            {/* <div className="leading-tight">
              <h1 className="text-lg font-bold text-navy font-sora">Aar Kay</h1>
              <p className="text-[10px] text-teal font-semibold tracking-wider">ELECTRONICS</p>
            </div> */}
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.slice(0, 6).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-darkText hover:text-orange transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="relative group">
              <button className="text-sm font-medium text-darkText hover:text-orange flex items-center gap-1">
                More <ChevronDown size={14} />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {navItems.slice(6).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-darkText hover:bg-sky hover:text-orange"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/917888847774"
              target="_blank"
              className="hidden md:inline-block bg-orange hover:bg-gold text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all shadow-md btn-shine"
            >
              Get Quote
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-navy p-2"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-darkText hover:bg-sky hover:text-orange transition"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/917888847774"
                target="_blank"
                className="block text-center mt-3 bg-orange text-white font-semibold py-3 rounded-full"
              >
                Get Free Quote on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}