import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import FAQSection from "../components/FAQSection";
import { Zap, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "On-Grid Solar | Aar Kay Electronics",
  description: "On-grid solar systems — lowest cost, highest ROI. Single & three phase for homes, shops, and industries.",
};

const WHATSAPP = "917888847774";

const products = [
  { name: "3kW Single Phase On-Grid", tagline: "For small homes", size: "3 kW", img: "/On Grid Inverter-1.png" },
  { name: "5kW Single Phase On-Grid", tagline: "For medium homes", size: "5 kW", img: "/On Grid Inverter-2.png" },
  { name: "6kW Three Phase On-Grid", tagline: "For large homes & offices", size: "6 kW", img: "/On Grid Inverter-3.png" },
  { name: "10kW Three Phase On-Grid", tagline: "Commercial use", size: "10 kW", img: "/On Grid Inverter-4.png" },
  { name: "15kW Three Phase On-Grid", tagline: "For factories & large spaces", size: "15 kW", img: "/On Grid Inverter-5.png" },
  { name: "20kW Three Phase On-Grid", tagline: "For large factories", size: "20 kW", img: "/On Grid Inverter-5.png" }, 
];

// Naya Specifications Data (PDF ke hisaab se)
const onGridSpecs = [
  { feature: "Max. DC Input Power", m3: "4.9 kW", m5: "7.5 kW", m6: "9 kW", m10: "15 kW", m15: "22.5 kW", m20: "30 kW" },
  { feature: "Max. DC Input Voltage", m3: "550 V", m5: "600 V", m6: "1100 V", m10: "1100 V", m15: "1100 V", m20: "1100 V" },
  { feature: "MPPT Range", m3: "40-550 V", m5: "40-600 V", m6: "180-1000 V", m10: "180-1000 V", m15: "180-1000 V", m20: "180-1000 V" },
  { feature: "No. of MPPT", m3: "1", m5: "1", m6: "2", m10: "2", m15: "2", m20: "2" },
  { feature: "Rated Output Power", m3: "3300 W", m5: "5000 W", m6: "6000 W", m10: "10000 W", m15: "15000 W", m20: "20000 W" },
  { feature: "Max. Output Power", m3: "3630 VA", m5: "5.5 kVA", m6: "6.6 kVA", m10: "11 kVA", m15: "16.5 kVA", m20: "22 kVA" },
  { feature: "Rated Grid Voltage", m3: "230 V", m5: "230 V", m6: "400 V", m10: "400 V", m15: "400 V", m20: "400 V" },
  { feature: "Max. Efficiency", m3: "98.00%", m5: "98.1%", m6: "98.5%", m10: "98.6%", m15: "98.7%", m20: "98.8%" },
  { feature: "Protection Class", m3: "IP66", m5: "IP66", m6: "IP66", m10: "IP66", m15: "IP66", m20: "IP66" },
  { feature: "Weight", m3: "5.5 kg", m5: "10 kg", m6: "15 kg", m10: "15 kg", m15: "18 kg", m20: "37 kg" },
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

        {/* HIGHLIGHT LINE */}
        <section className="bg-navy py-6 px-4 border-b border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <Sparkles className="text-gold animate-pulse" size={32} />
            <p className="text-xl md:text-3xl font-bold text-white font-sora tracking-wide">
              We also have <span className="text-gold text-2xl md:text-4xl drop-shadow-lg">100kW On-Grid</span> systems available for large-scale industries.
            </p>
          </div>
        </section>

        {/* PRODUCTS */}
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
                  <div className="h-64 bg-gradient-to-b from-sky/50 to-white p-6 relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                    <img
                      src={p.img}
                      alt={p.name}
                      className="h-full w-auto object-contain relative z-10 group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                    />
                  </div>
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

        {/* NAYA: Technical Specifications Table */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block bg-navy/10 text-navy font-bold text-xs tracking-widest px-3 py-1 rounded-full mb-3 uppercase">
                Technical Details
              </span>
              <h2 className="text-3xl font-bold text-navy font-sora mb-3">
                On-Grid Inverter Specifications
              </h2>
              <p className="text-gray-600">Compare technical specifications for our top on-grid models.</p>
            </div>
            
            <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-100">
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr className="bg-navy text-white text-sm font-sora">
                    <th className="p-4 font-semibold border-b border-white/10 w-1/6">Feature</th>
                    <th className="p-4 font-semibold border-b border-white/10 text-center">3.3 kW</th>
                    <th className="p-4 font-semibold border-b border-white/10 text-center">5 kW</th>
                    <th className="p-4 font-semibold border-b border-white/10 text-center">6 kW</th>
                    <th className="p-4 font-semibold border-b border-white/10 text-center">10 kW</th>
                    <th className="p-4 font-semibold border-b border-white/10 text-center">15 kW</th>
                    <th className="p-4 font-semibold border-b border-white/10 text-center">20 kW</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-sm text-gray-700">
                  {onGridSpecs.map((row, idx) => (
                    <tr key={idx} className={`border-b border-gray-100 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'} hover:bg-sky/30 transition-colors`}>
                      <td className="p-4 font-semibold text-navy">{row.feature}</td>
                      <td className="p-4 text-center">{row.m3}</td>
                      <td className="p-4 text-center">{row.m5}</td>
                      <td className="p-4 text-center">{row.m6}</td>
                      <td className="p-4 text-center">{row.m10}</td>
                      <td className="p-4 text-center">{row.m15}</td>
                      <td className="p-4 text-center">{row.m20}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-16 px-4 bg-slate-50">
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
                <div key={point} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
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