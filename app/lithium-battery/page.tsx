import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import FAQSection from "../components/FAQSection";
import { Battery, CheckCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Lithium Battery | Aar Kay Electronics",
  description: "Premium LFP lithium batteries — all-in-one, wall-mounted, rack-mounted & commercial. 6000+ cycles, zero maintenance.",
};

const WHATSAPP = "919999999999";

const products = [
  { name: "All-in-One Lithium", tagline: "Battery + Inverter combo", kwh: "5 kWh", img: "8853536" },
  { name: "External Modules", tagline: "Modular & expandable", kwh: "2.4–10 kWh", img: "8853499" },
  { name: "Wall-Mounted 51.2V", tagline: "Space-saving design", kwh: "5–10 kWh", img: "9875441" },
  { name: "Rack-Mounted", tagline: "For server/office backup", kwh: "10–20 kWh", img: "9875420" },
  { name: "Commercial Battery Bank", tagline: "Industrial-grade power", kwh: "20+ kWh", img: "9875405" },
];

const faqs = [
  { q: "What is LFP chemistry?", a: "LFP (Lithium Iron Phosphate) is the safest lithium chemistry with 6000+ cycles and no thermal runaway risk." },
  { q: "How long do these batteries last?", a: "Typically 10+ years with proper usage. We provide 5-10 year warranties depending on model." },
  { q: "Are these compatible with my existing inverter?", a: "Most models are compatible with standard hybrid and off-grid inverters. Share your inverter model on WhatsApp and we'll confirm." },
  { q: "Do you provide installation?", a: "Yes, we provide professional installation across Pan India. Installation is usually included in the quote." },
  { q: "What's the difference between inbuilt and separate battery?", a: "Inbuilt is one integrated unit for easy setup. Separate gives flexibility to expand capacity later." },
];

export default function LithiumBatteryPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative bg-gradient-to-br from-navy via-navy to-teal py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 aurora opacity-40"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center text-white">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange to-gold mx-auto mb-4 flex items-center justify-center">
              <Battery size={30} />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold font-sora mb-4">
              Lithium <span className="text-gradient-hero">Batteries</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              Premium LFP batteries with 6000+ cycles, zero maintenance, and fast charging. Perfect for homes, shops, and industries.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Aar Kay, I want to know about lithium batteries.")}`}
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
              Our Lithium Range
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
                    <p className="text-sm text-gray-600 mb-4">Capacity: <strong>{p.kwh}</strong></p>
                    <a
                      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi, I want a quote for ${p.name} (${p.kwh}).`)}`}
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
              Why Choose Our Lithium Batteries?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                "6000+ cycles (10+ years life)",
                "Zero maintenance required",
                "Fast charging (2-3 hours)",
                "Safe LFP chemistry",
                "5-10 year warranty",
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

        <FAQSection items={faqs} title="Lithium Battery FAQs" />

        <section className="py-16 px-4 bg-gradient-to-r from-orange to-gold text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white font-sora mb-4">Ready to Power Up?</h2>
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