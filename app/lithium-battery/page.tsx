import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import FAQSection from "../components/FAQSection";
import { Battery, CheckCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Lithium Battery | Aar Kay Electronics",
  description: "Premium LFP lithium batteries — all-in-one, wall-mounted, rack-mounted & commercial. 4000+ cycles, zero maintenance.",
};

const WHATSAPP = "917888847774";

const products = [
  { name: "02.56KWH LITHIUM BATTERY", tagline: "", size: "", img: "/lithium1.jpeg" },
  { name: "5.12KWH LITHIUM BATTERY", tagline: "", size: "", img: "/lithium2.jpeg" },
  { name: "10.24KWH LITHIUM BATTERY", tagline: "", size: "", img: "/lithium3.jpeg" },
  { name: "16.07 KWh LITHIUM BATTERY", tagline: "", size: "", img: "/lithium4.jpeg" },
];

const faqs = [
  { q: "What is LFP chemistry?", a: "LFP (Lithium Iron Phosphate) is the safest lithium chemistry with 4000+ cycles and no thermal runaway risk." },
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
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-navy via-navy to-teal py-16 md:py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 aurora opacity-40"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center text-white">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange to-gold mx-auto mb-4 flex items-center justify-center">
              <Battery size={30} />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold font-sora mb-4">
              Lithium <span className="text-gradient-hero">Batteries</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Premium LFP batteries with 4000+ cycles, zero maintenance, and fast charging. Perfect for homes, shops, and industries.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Aar Kay, I want to know about lithium batteries.")}`}
              target="_blank"
              className="inline-flex items-center gap-2 bg-eco hover:bg-green-700 text-white font-semibold py-3.5 px-8 rounded-full transition shadow-lg"
            >
              Get Quote on WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Products */}
        <section className="py-12 md:py-16 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-sora mb-3">
                Our Lithium Range
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Safe, long-lasting, and maintenance-free batteries for every need.
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

        {/* Benefits */}
        <section className="py-12 md:py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy font-sora mb-6">
              Why Choose Our Lithium Batteries?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {[
                "4000+ cycles (10+ years life)",
                "Zero maintenance required",
                "Fast charging (2-3 hours)",
                "Safe LFP chemistry",
                "5-10 year warranty",
                "Pan India installation",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle size={20} className="text-eco shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQSection items={faqs} title="Lithium Battery FAQs" />

        {/* CTA */}
        <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-orange to-gold text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-sora mb-4">Ready to Power Up?</h2>
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