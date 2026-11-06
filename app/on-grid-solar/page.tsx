import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import FAQSection from "../components/FAQSection";
import { Zap, CheckCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "On-Grid Solar | Aar Kay Electronics",
  description:
    "On-grid solar systems — lowest cost, highest ROI. Single & three phase for homes, shops, and industries.",
};

const WHATSAPP = "919999999999";

const products = [
  { name: "Single Phase On-Grid", tagline: "For small homes", size: "1–5 kW", img: "9875405" },
  { name: "Three Phase On-Grid", tagline: "For large homes & offices", size: "5–20 kW", img: "9875420" },
  { name: "Residential Rooftop", tagline: "1-10 kW homes", size: "1–10 kW", img: "9875441" },
  { name: "Commercial Rooftop", tagline: "10-20 kW shops/offices", size: "10–20 kW", img: "9875409" },
  { name: "Industrial Plant", tagline: "20kW+ factories", size: "20 kW+", img: "8853536" },
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
        <section className="relative bg-gradient-to-br from-navy via-navy to-teal py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 aurora opacity-40"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center text-white">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange to-gold mx-auto mb-4 flex items-center justify-center">
              <Zap size={30} />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold font-sora mb-4">
              On-Grid <span className="text-gradient-hero">Solar</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              Lowest cost, highest ROI. Bill savings without batteries — perfect for areas with stable power.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Aar Kay, I want to know about on-grid solar systems.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-eco hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition"
            >
              Get Quote on WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy font-sora mb-12">
              On-Grid Solar Range
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <div
                  key={p.name}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover-lift transition group"
                >
                  <div className="h-40 bg-gray-100 overflow-hidden">
                    <img
                      src={`https://images.pexels.com/photos/${p.img}/pexels-photo-${p.img}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-sora font-bold text-navy mb-1">{p.name}</h3>
                    <p className="text-xs text-orange font-semibold mb-2">{p.tagline}</p>
                    <p className="text-sm text-gray-600 mb-4">
                      Size: <strong>{p.size}</strong>
                    </p>
                    <a
                      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi, I want a quote for ${p.name} (${p.size}).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center w-full bg-teal hover:bg-navy text-white py-2 rounded-lg text-sm font-semibold transition"
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
        <section className="py-16 px-4 bg-sky">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy font-sora mb-4">
              On-Grid Benefits
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                "Lowest upfront cost",
                "Highest ROI (3-5 year payback)",
                "Net metering compatible",
                "PM Surya Ghar subsidy eligible (residential)",
                "No battery maintenance",
                "25-year panel warranty",
              ].map((point) => (
                <div key={point} className="flex items-start gap-2 bg-white p-4 rounded-xl">
                  <CheckCircle size={20} className="text-eco shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection items={faqs} title="On-Grid Solar FAQs" />

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange to-gold text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white font-sora mb-4">
              Ready to Slash Your Bill?
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-navy font-bold py-3 px-8 rounded-full"
              >
                WhatsApp Us
              </a>
              <Link href="/contact" className="bg-navy text-white font-bold py-3 px-8 rounded-full">
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