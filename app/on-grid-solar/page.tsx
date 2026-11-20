import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import FAQSection from "../components/FAQSection";
import { Zap, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "On-Grid Solar | Aar Kay Electronics",
  description:
    "On-grid solar systems — lowest cost, highest ROI. Single & three phase for homes, shops, and industries.",
};

const WHATSAPP = "917888847774"; // Updated Number

const products = [
  { name: "3kW Single Phase On-Grid", tagline: "For small homes", size: "3 kW", img: "/On Grid Inverter-1.png" },
  { name: "5kW Single Phase On-Grid", tagline: "For medium homes", size: "5 kW", img: "/On Grid Inverter-2.png" },
  { name: "6kW Three Phase On-Grid", tagline: "For large homes & offices", size: "6 kW", img: "/On Grid Inverter-3.png" },
  { name: "10kW Three Phase On-Grid", tagline: "Commercial use", size: "10 kW", img: "/On Grid Inverter-4.png" },
  { name: "15kW Three Phase On-Grid", tagline: "For factories & large spaces", size: "15 kW", img: "/On Grid Inverter-5.png" },
  // 6th image added (same as 5th) for 20kW
  { name: "20kW Three Phase On-Grid", tagline: "For large factories", size: "20 kW", img: "/On Grid Inverter-5.png" }, 
];

const faqs = [
  { q: "What is an on-grid solar system?", a: "An on-grid (grid-tied) system works with the electricity grid. It generates power during the day, and surplus is exported to the grid via net metering." },
  { q: "Does it work during a power cut?", a: "No — on-grid systems shut down during outages for safety (anti-islanding). If you need backup, consider a hybrid system." },
  { q: "Is it eligible for subsidy?", a: "Residential rooftop on-grid systems are eligible for PM Surya Ghar subsidy. Commercial systems generally are not." },
  { q: "What is net metering?", a: "Net metering lets you export excess power to the grid and get credited on your bill. Requires DISCOM approval." },
  { q: "How much roof space is needed?", a: "Approximately 100 sq ft per kW. So a 5kW system needs ~500 sq ft of shadow-free area." },
  { q: "Payback period?", a: "Typically 3-5 years for residential, 2-4 years for commercial. High ROI is the main advantage of on-grid." },
];

export default function OnGridSolarPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative bg-gradient-to-br from-navy via-navy to-teal py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 aurora opacity-40"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center text-white">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange to-gold mx-auto mb-4 flex items-center justify-center">
              <Zap size={30} />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold font-sora mb-4">
              On-Grid <span className="text-gradient-hero">Solar</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Lowest cost, highest ROI. Bill savings without batteries — perfect for areas with stable power.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Aar Kay, I want to know about on-grid solar systems.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-eco hover:bg-green-700 text-white font-semibold py-3.5 px-8 rounded-full transition shadow-lg"
            >
              Get Quote on WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* HIGHLIGHT LINE FOR 100KW */}
        <section className="bg-navy py-6 px-4 border-b border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <Sparkles className="text-gold animate-pulse" size={32} />
            <p className="text-xl md:text-3xl font-bold text-white font-sora tracking-wide">
              We also have <span className="text-gold text-2xl md:text-4xl drop-shadow-lg">100kW On-Grid</span> systems available for large-scale industries.
            </p>
          </div>
        </section>

        {/* PRODUCTS (Updated with Images) */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-sora mb-3">
                On-Grid Solar Range
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the perfect on-grid solution based on your power consumption and property size.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((p) => (
                <div key={p.name} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col">
                  
                  {/* Image Box */}
                  <div className="h-64 bg-gradient-to-b from-sky/50 to-white p-6 relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                    <img
                      src={p.img}
                      alt={p.name}
                      className="h-full w-auto object-contain relative z-10 group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                    />
                  </div>
                  
                  {/* Content Box */}
                  <div className="p-6 flex flex-col flex-1 border-t border-gray-50">
                    <div className="mb-4">
                      <h3 className="font-sora font-bold text-navy text-lg mb-1 leading-tight">{p.name}</h3>
                      <p className="text-xs text-orange font-bold mb-3 uppercase tracking-wider">{p.tagline}</p>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-6">
                      <span className="bg-sky text-teal text-xs font-semibold px-3 py-1.5 rounded-md">
                        Capacity: {p.size}
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi, I want a quote for ${p.name} (${p.size}).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto block text-center w-full bg-gradient-to-r from-teal to-navy text-white py-3 rounded-xl text-sm font-bold transition-all hover:shadow-lg hover:from-navy hover:to-teal"
                    >
                      Request Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy font-sora mb-8">
              On-Grid Benefits
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {[
                "Lowest upfront cost",
                "Highest ROI (3-5 year payback)",
                "Net metering compatible",
                "PM Surya Ghar subsidy eligible (residential)",
                "No battery maintenance",
                "25-year panel warranty",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle size={20} className="text-eco shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection items={faqs} title="On-Grid Solar FAQs" />

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-orange to-gold text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-sora mb-4">
              Ready to Slash Your Bill?
            </h2>
            <p className="text-white/90 mb-8 text-lg">Get a customized quote for your home or business today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-navy font-bold py-3.5 px-8 rounded-full hover:bg-gray-100 transition shadow-lg"
              >
                WhatsApp Us
              </a>
              <Link href="/contact" className="bg-navy text-white font-bold py-3.5 px-8 rounded-full hover:bg-teal transition shadow-lg">
                Visit Store
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}