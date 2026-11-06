import Header from "../components/Header";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import { ShoppingBag, Home, Building2, Factory, Battery, Sun, Phone, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Shop | Aar Kay Electronics",
  description: "Quick shop links — solar for homes, commercial, industrial, lithium batteries. Chat with us on WhatsApp.",
};

const WHATSAPP = "919999999999";

const links = [
  { icon: Home, title: "Solar for Homes", desc: "3kW – 10kW rooftop with subsidy help", href: "/hybrid-solar", color: "from-orange to-gold" },
  { icon: Building2, title: "Commercial Solar", desc: "10kW – 20kW for shops & offices", href: "/on-grid-solar", color: "from-teal to-navy" },
  { icon: Factory, title: "Industrial Solar", desc: "20kW+ custom plants for factories", href: "/on-grid-solar", color: "from-eco to-teal" },
  { icon: Battery, title: "Lithium Batteries", desc: "Wall, rack, all-in-one modules", href: "/lithium-battery", color: "from-orange to-gold" },
  { icon: Sun, title: "Hybrid Solar", desc: "Bill savings + power backup", href: "/hybrid-solar", color: "from-teal to-navy" },
  { icon: Phone, title: "Talk to Expert", desc: "Get personalized recommendation", href: `https://wa.me/${WHATSAPP}`, color: "from-eco to-teal" },
];

export default function ShopPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-navy via-navy to-teal py-16 px-4 overflow-hidden">
          <div className="absolute inset-0 aurora opacity-40"></div>
          <div className="max-w-2xl mx-auto relative z-10 text-center text-white">
            <div className="w-16 h-16 rounded-full bg-gold mx-auto mb-4 flex items-center justify-center">
              <ShoppingBag size={28} className="text-navy" />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold font-sora mb-3">
              Shop <span className="text-gradient-hero">Aar Kay</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base mb-6">
              Aapko kya chahiye? Choose a category below — ya seedha WhatsApp par poochein.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Aar Kay, I'm visiting from Instagram/social. Please help me choose a solar system.")}`}
              target="_blank"
              className="inline-flex items-center gap-2 bg-eco hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition"
            >
              Chat With Us <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Link cards */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-2xl mx-auto space-y-3">
            {links.map((link) => {
              const isExternal = link.href.startsWith("http");
              const Comp: any = isExternal ? "a" : (require("next/link").default);
              return (
                <Comp
                  key={link.title}
                  href={link.href}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 bg-sky hover:bg-white border border-transparent hover:border-gold/40 rounded-2xl p-4 transition-all hover:shadow-lg"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${link.color} text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <link.icon size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-sora font-bold text-navy">{link.title}</h3>
                    <p className="text-xs text-gray-500">{link.desc}</p>
                  </div>
                  <ArrowRight size={20} className="text-gray-300 group-hover:text-orange transition" />
                </Comp>
              );
            })}
          </div>
        </section>

        {/* Footer-like info */}
        <section className="py-8 px-4 bg-sky text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Aar Kay Electronics · Since 2007 · Zirakpur, Punjab
          </p>
          <p className="text-xs text-gray-400 mt-1">
            This is our official Instagram bio link page.
          </p>
        </section>
      </main>
      <Chatbot />
    </>
  );
}