
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import { Battery, CheckCircle, ArrowRight, Zap } from "lucide-react";

export const metadata = {
  title: "Li-Pro+ All-in-One | Aar Kay Electronics",
  description:
    "Explore Su-Kam Li-Pro+ 1250 and Li-Pro+ 2500 all-in-one lithium UPS systems with integrated lithium batteries.",
};

const WHATSAPP = "917888847774";

const products = [
  {
    name: "Li-Pro+ 1250",
    image: "/li-pro-1250.jpeg",
    battery: "1280Wh Integrated Lithium Battery",
    load: "840W",
    voltage: "12.8V",
    dimensions: "350 × 170 × 530 mm",
    weight: "30.65 kg",
    description:
      "Su-Kam Li-Pro+ 1250 combines smart lithium technology, reliable power backup and compact design. Integrated with a 1280Wh lithium battery, it delivers dependable performance for home and office use.",
    features: [
      "1280Wh Integrated Lithium Battery",
      "840W Load Capacity",
      "Pure Sine Wave Output",
      "Smart BMS Protection",
      "Zero Maintenance",
      "LCD Digital Display",
    ],
  },
  {
    name: "Li-Pro+ 2500",
    image: "/li-pro-2500.jpeg",
    battery: "2560Wh Integrated Lithium Battery",
    load: "2000W",
    voltage: "25.6V",
    dimensions: "530 × 550 × 230 mm",
    weight: "55 kg",
    description:
      "Su-Kam Li-Pro+ 2500 is designed for seamless performance, efficiency and reliable power backup. Its integrated lithium battery and intelligent energy management provide dependable power for homes and businesses.",
    features: [
      "2560Wh Integrated Lithium Battery",
      "2000W Load Capacity",
      "Pure Sine Wave Output",
      "Smart BMS Protection",
      "Zero Maintenance",
      "LCD Digital Display",
    ],
  },
];

export default function LiProSeriesPage() {
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
              Li-Pro+ <span className="text-gradient-hero">All-in-One</span>
            </h1>

            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Smart lithium power backup with integrated battery technology,
              pure sine wave output and intelligent protection for your home
              and business.
            </p>

            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                "Hi Aar Kay, I want to know about Li-Pro+ All-in-One products."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-eco hover:bg-green-700 text-white font-semibold py-3.5 px-8 rounded-full transition shadow-lg"
            >
              Get Quote on WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Products */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-sora mb-3">
                Explore Li-Pro+ Series
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Integrated lithium power backup solutions designed for
                reliable performance and convenience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {products.map((p) => (
                <div
                  key={p.name}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-80 bg-gradient-to-b from-sky/50 to-white p-6 flex items-center justify-center">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-navy font-sora mb-2">
                      {p.name}
                    </h3>

                    <p className="text-orange font-semibold mb-4">
                      {p.battery}
                    </p>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {p.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-slate-50 rounded-xl p-4">
                        <p className="text-xs text-gray-500 mb-1">
                          Load Capacity
                        </p>
                        <p className="font-bold text-navy">{p.load}</p>
                      </div>

                      <div className="bg-slate-50 rounded-xl p-4">
                        <p className="text-xs text-gray-500 mb-1">
                          Battery Voltage
                        </p>
                        <p className="font-bold text-navy">{p.voltage}</p>
                      </div>

                      <div className="bg-slate-50 rounded-xl p-4">
                        <p className="text-xs text-gray-500 mb-1">
                          Dimensions
                        </p>
                        <p className="font-bold text-navy text-sm">
                          {p.dimensions}
                        </p>
                      </div>

                      <div className="bg-slate-50 rounded-xl p-4">
                        <p className="text-xs text-gray-500 mb-1">
                          Weight
                        </p>
                        <p className="font-bold text-navy">{p.weight}</p>
                      </div>
                    </div>

                    <h4 className="font-bold text-navy mb-3">
                      Product Features
                    </h4>

                    <ul className="space-y-3 mb-6">
                      {p.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-gray-700"
                        >
                          <CheckCircle
                            size={18}
                            className="text-eco shrink-0 mt-0.5"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                        `Hi Aar Kay, I want a quote for ${p.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center w-full bg-gradient-to-r from-teal to-navy text-white py-3 rounded-xl font-bold transition hover:shadow-lg hover:from-navy hover:to-teal"
                    >
                      Enquire About {p.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-navy font-sora mb-3">
                Designed for Reliable Power
              </h2>
              <p className="text-gray-600">
                Smart features for convenient everyday power backup.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                "Integrated Lithium Battery",
                "Pure Sine Wave Output",
                "Smart BMS Protection",
                "Zero Maintenance",
                "Fast Charging",
                "LCD Digital Display",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 bg-slate-50 p-5 rounded-xl border border-gray-100"
                >
                  <Zap size={20} className="text-eco shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 font-medium">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-orange to-gold text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-sora mb-4">
              Looking for Smart Power Backup?
            </h2>

            <p className="text-white/90 mb-6 text-lg">
              Connect with our team to find the right Li-Pro+ solution.
            </p>

            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                "Hi Aar Kay, I want a quotation for Li-Pro+ All-in-One."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-navy font-bold py-3.5 px-8 rounded-full hover:bg-gray-100 transition shadow-lg"
            >
              WhatsApp Us <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <Chatbot />
    </>
  );
}
