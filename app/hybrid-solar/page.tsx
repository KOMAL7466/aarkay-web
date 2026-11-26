import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import FAQSection from "../components/FAQSection";
import { Sun, CheckCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Hybrid Solar | Aar Kay Electronics",
  description: "Hybrid solar systems with battery backup — bill savings + power backup. Single phase available.",
};

const WHATSAPP = "917888847774";

const products = [
  { name: "3kW Hybrid Inverter", tagline: "3kW Hybrid", size: "3 kW", img: "/HYBRIDE INVERTER-1.png" },
  { name: "5kW Hybrid Inverter", tagline: "5kW Hybrid Single Phase", size: "5 kW", img: "/HYBRIDE INVERTER-2.png" },
  { name: "6kW Hybrid Inverter", tagline: "6kW Hybrid Single Phase", size: "6 kW", img: "/HYBRID INVERTER-3.png" },
  { name: "11kW Hybrid Inverter", tagline: "11kW Hybrid Single Phase", size: "11 kW", img: "/HYBRIDE INVERTER-4.png" }
];

// Naya Specifications Data
const hybridSpecs = [
  { feature: "Capacity", model3kw: "3000VA / 3000W", model625kw: "6200VA / 6200W", model11kw: "11000VA / 11000W" },
  { feature: "Max. Solar Panel Power", model3kw: "5000W", model625kw: "8500W", model11kw: "11000W (2x5500W)" },
  { feature: "Max. Charging Current", model3kw: "100A", model625kw: "120A", model11kw: "150A" },
  { feature: "Solar Voltage Range (Vmp)", model3kw: "60-500 VDC", model625kw: "60-500 VDC", model11kw: "90-500 VDC" },
  { feature: "Max. Solar Voltage", model3kw: "500 VDC", model625kw: "500 VDC", model11kw: "500 VDC" },
  { feature: "Battery Voltage Range", model3kw: "21-32 VDC", model625kw: "42-64 VDC", model11kw: "48 VDC" },
  { feature: "AC Output", model3kw: "230VAC, 13A, 1Φ", model625kw: "230VAC, 27A, 1Φ", model11kw: "230VAC, 47.8A, 1Φ" },
  { feature: "AC Input", model3kw: "230VAC, 20.1A", model625kw: "230VAC, 40A", model11kw: "230VAC, 60A" },
  { feature: "AC Charger", model3kw: "27VDC, 60A", model625kw: "54VDC, 100A", model11kw: "54VDC, 150A" },
  { feature: "Protection Degree", model3kw: "-", model625kw: "-", model11kw: "IP21" },
];

const faqs = [
  { q: "What is a hybrid solar system?", a: "A hybrid system combines solar panels, a hybrid inverter, and a battery. It saves on bills AND provides backup during power cuts." },
  { q: "Is hybrid eligible for PM Surya Ghar subsidy?", a: "Not automatically. Subsidy eligibility varies by scheme and DISCOM. Contact us to check your specific case." },
  { q: "How long is the battery backup?", a: "Typically 4-8 hours depending on load and battery capacity. We size the battery based on your critical load." },
  { q: "Can I expand later?", a: "Yes, with separate battery systems you can easily add more capacity later." },
  { q: "What's the payback period?", a: "Typically 4-6 years depending on system size, electricity rates, and usage. Our team can calculate your exact ROI." },
];

export default function HybridSolarPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-navy via-navy to-teal py-16 md:py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 aurora opacity-40"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center text-white">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange to-gold mx-auto mb-4 flex items-center justify-center">
              <Sun size={30} />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold font-sora mb-4">
              Hybrid <span className="text-gradient-hero">Solar</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Bill savings + power backup. Best of both worlds — perfect for homes and businesses in areas with power cuts.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Aar Kay, I want to know about hybrid solar systems.")}`}
              target="_blank"
              className="inline-flex items-center gap-2 bg-eco hover:bg-green-700 text-white font-semibold py-3.5 px-8 rounded-full transition shadow-lg"
            >
              Get Quote on WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12 md:py-16 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-sora mb-3">
                Hybrid Solar Range
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the perfect hybrid solution based on your backup needs and power load.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((p) => (
                <div key={p.name} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col">
                  <div className="h-56 bg-gradient-to-b from-sky/50 to-white p-4 relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                    <img
                      src={p.img}
                      alt={p.name}
                      className="h-full w-auto object-contain relative z-10 group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1 border-t border-gray-50">
                    <div className="mb-3">
                      <h3 className="font-sora font-bold text-navy text-base mb-1 leading-tight">{p.name}</h3>
                      <p className="text-[11px] text-orange font-bold mb-2 uppercase tracking-wider">{p.tagline}</p>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-sky text-teal text-[11px] font-semibold px-2.5 py-1 rounded-md">
                        Capacity: {p.size}
                      </span>
                    </div>
                    <a
                      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi, I want a quote for ${p.name} (${p.size}).`)}`}
                      target="_blank"
                      className="mt-auto block text-center w-full bg-gradient-to-r from-teal to-navy text-white py-2.5 rounded-xl text-sm font-bold transition-all hover:shadow-lg hover:from-navy hover:to-teal"
                    >
                      Request Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NAYA: Technical Specifications Table */}
        <section className="py-12 md:py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block bg-navy/10 text-navy font-bold text-xs tracking-widest px-3 py-1 rounded-full mb-3 uppercase">
                Technical Details
              </span>
              <h2 className="text-3xl font-bold text-navy font-sora mb-3">
                Hybrid Inverter Specifications
              </h2>
              <p className="text-gray-600">Compare technical specifications for our top hybrid models.</p>
            </div>
            
            <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-100">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-navy text-white text-sm font-sora">
                    <th className="p-4 font-semibold border-b border-white/10 w-1/4">Feature</th>
                    <th className="p-4 font-semibold border-b border-white/10 text-center">3 kW Hybrid</th>
                    <th className="p-4 font-semibold border-b border-white/10 text-center">6.25 kW Hybrid</th>
                    <th className="p-4 font-semibold border-b border-white/10 text-center">11 kW Hybrid</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-sm text-gray-700">
                  {hybridSpecs.map((row, idx) => (
                    <tr key={idx} className={`border-b border-gray-100 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'} hover:bg-sky/30 transition-colors`}>
                      <td className="p-4 font-semibold text-navy">{row.feature}</td>
                      <td className="p-4 text-center">{row.model3kw}</td>
                      <td className="p-4 text-center">{row.model625kw}</td>
                      <td className="p-4 text-center">{row.model11kw}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy font-sora mb-6">
              Hybrid Benefits
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {[
                "Power backup during outages",
                "Up to 90% bill reduction",
                "Net metering compatible",
                "Expandable battery capacity",
                "Government subsidy help",
                "Pan India installation",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <CheckCircle size={20} className="text-eco shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQSection items={faqs} title="Hybrid Solar FAQs" />

        <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-orange to-gold text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-sora mb-4">Ready to Go Hybrid?</h2>
            <p className="text-white/90 mb-6 text-lg">Get a customized quote for your home or business today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" className="bg-white text-navy font-bold py-3.5 px-8 rounded-full hover:bg-gray-100 transition shadow-lg">WhatsApp Us</a>
              <Link href="/contact" className="bg-navy text-white font-bold py-3.5 px-8 rounded-full hover:bg-teal transition shadow-lg">Visit Store</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}