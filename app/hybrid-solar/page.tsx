import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import FAQSection from "../components/FAQSection";
import { Sun, CheckCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Hybrid Solar | Aar Kay Electronics",
  description: "Hybrid solar systems with battery backup — bill savings + power backup. Single & three phase available.",
};

const WHATSAPP = "919999999999";

const products = [
  { name: "Inbuilt Battery Hybrid", tagline: "All-in-one unit", size: "3–5 kW", img: "9875441" },
  { name: "Hybrid Inverter + Separate Battery", tagline: "Flexible & expandable", size: "3–10 kW", img: "9875420" },
  { name: "Single Phase Hybrid", tagline: "For homes & small shops", size: "3–5 kW", img: "9875405" },
  { name: "Three Phase Hybrid", tagline: "For large homes & offices", size: "5–15 kW", img: "9875409" },
  { name: "Commercial Hybrid", tagline: "Business-grade backup", size: "10–20 kW+", img: "8853536" },
];

const faqs = [
  { q: "What is a hybrid solar system?", a: "A hybrid system combines solar panels, a hybrid inverter, and a battery. It saves on bills AND provides backup during power cuts." },
  { q: "Is hybrid eligible for PM Surya Ghar subsidy?", a: "Not automatically. Subsidy eligibility varies by scheme and DISCOM. Contact us to check your specific case." },
  { q: "How long is the battery backup?", a: "Typically 4-8 hours depending on load and battery capacity. We size the battery based on your critical load." },
  { q: "Can I expand later?", a: "Yes, with separate battery systems you can easily add more capacity later." },
  { q: "Single phase vs three phase?", a: "Single phase is for homes with normal load. Three phase is for large homes, offices, and businesses with heavy equipment." },
  { q: "What's the payback period?", a: "Typically 4-6 years depending on system size, electricity rates, and usage. Our team can calculate your exact ROI." },
];

export default function HybridSolarPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative bg-gradient-to-br from-navy via-navy to-teal py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 aurora opacity-40"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center text-white">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange to-gold mx-auto mb-4 flex items-center justify-center">
              <Sun size={30} />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold font-sora mb-4">
              Hybrid <span className="text-gradient-hero">Solar</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              Bill savings + power backup. Best of both worlds — perfect for homes and businesses in areas with power cuts.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Aar Kay, I want to know about hybrid solar systems.")}`}
              target="_blank"
              className="inline-flex items-center gap-2 bg-eco hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition"
            >
              Get Quote on WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy font-sora mb-12">
              Hybrid Solar Range
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <div key={p.name} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover-lift transition group">
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
                    <p className="text-sm text-gray-600 mb-4">Size: <strong>{p.size}</strong></p>
                    <a
                      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi, I want a quote for ${p.name} (${p.size}).`)}`}
                      target="_blank"
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

        <section className="py-16 px-4 bg-sky">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy font-sora mb-4">
              Hybrid Benefits
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                "Power backup during outages",
                "Up to 90% bill reduction",
                "Net metering compatible",
                "Expandable battery capacity",
                "Government subsidy help",
                "Pan India installation",
              ].map((point) => (
                <div key={point} className="flex items-start gap-2 bg-white p-4 rounded-xl">
                  <CheckCircle size={20} className="text-eco shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQSection items={faqs} title="Hybrid Solar FAQs" />

        <section className="py-16 px-4 bg-gradient-to-r from-orange to-gold text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white font-sora mb-4">Ready to Go Hybrid?</h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" className="bg-white text-navy font-bold py-3 px-8 rounded-full">WhatsApp Us</a>
              <Link href="/contact" className="bg-navy text-white font-bold py-3 px-8 rounded-full">Visit Store</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}