import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import FAQSection from "../components/FAQSection";
import TrustedPartners from "../components/TrustedPartners";
import { Award, Zap, ShieldCheck, Heart } from "lucide-react";

export const metadata = {
  title: "About Us | Aar Kay Electronics",
  description:
    "Since 2007, Aar Kay Electronics has been powering homes and businesses across India with trusted solar & lithium solutions. Su-Kam Super Distributor & authorized LG outlet.",
};

const WHATSAPP = "919999999999";

const milestones = [
  { year: "2007", title: "Founded", desc: "Started as a small electronics shop in Zirakpur with a vision to bring reliable power to every home." },
  { year: "2012", title: "Solar Expansion", desc: "Became authorized Su-Kam distributor and entered the solar energy market." },
  { year: "2018", title: "1000+ Installations", desc: "Crossed the milestone of 1000+ successful solar installations across North India." },
  { year: "2023-24", title: "Pan India #1", desc: "Recognized as Pan India #1 Su-Kam distributor for FY 2023-24." },
  { year: "2024", title: "Lithium Leader", desc: "500+ lithium battery installations and growing as a trusted energy partner." },
];

const values = [
  { icon: ShieldCheck, title: "Trust", desc: "17+ years of transparent dealing and honest advice." },
  { icon: Zap, title: "Quality", desc: "Only certified products from top brands like Su-Kam and LG." },
  { icon: Heart, title: "Service", desc: "After-sales support that actually cares." },
  { icon: Award, title: "Excellence", desc: "Recognized as Pan India #1 — a title we earn every day." },
];

const faqs = [
  { q: "When was Aar Kay Electronics founded?", a: "Aar Kay Electronics was established in 2007 in Zirakpur, Punjab. We have been serving the region for over 17 years." },
  { q: "Are you an authorized Su-Kam distributor?", a: "Yes, we are a Super Distributor of Su-Kam products. We were also recognized as Pan India #1 in FY 2023-24." },
  { q: "Do you sell LG products?", a: "Yes, we are an authorized LG outlet and deal in LG appliances along with solar and lithium products." },
  { q: "How many installations have you done?", a: "We have completed over 1000+ solar installations and 500+ lithium battery installations across multiple states in India." },
  { q: "Which areas do you serve?", a: "Our primary service area includes Zirakpur, Mohali, Panchkula, Chandigarh, and surrounding regions. We also support Pan India projects." },
  { q: "Do you provide after-sales service?", a: "Yes, we offer comprehensive after-sales support including AMC, warranty service, and technical support." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative bg-navy py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 aurora opacity-40"></div>
          <div className="max-w-5xl mx-auto relative z-10 text-center text-white">
            <span className="inline-block bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-widest">
              ABOUT US
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-sora mb-4 leading-tight">
              A Legacy of <span className="text-gradient-hero">Green Energy</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
              Since 2007, Aar Kay Electronics has been powering homes and businesses with trusted solar & lithium solutions across India.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-orange/10 text-orange text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-widest">
                OUR STORY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-sora mb-5">
                17+ Years of Trust & Innovation
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  What started in 2007 as a small electronics shop in Zirakpur has grown into one of North India&apos;s most trusted solar and lithium energy partners.
                </p>
                <p>
                  We are proud to be a <strong className="text-navy">Su-Kam Super Distributor</strong> and an <strong className="text-navy">authorized LG outlet</strong>. Our Pan India #1 recognition for FY 2023-24 reflects our commitment to quality and customer service.
                </p>
                <p>
                  With 1000+ solar installations and 500+ lithium battery installations, we&apos;ve helped families cut their electricity bills, businesses reduce operational costs, and industries move towards sustainable energy.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { n: "1000+", l: "Installations" },
                  { n: "15+", l: "States" },
                  { n: "17+", l: "Years" },
                ].map((s) => (
                  <div key={s.l} className="bg-sky rounded-xl p-4 text-center">
                    <p className="font-sora font-bold text-2xl text-navy">{s.n}</p>
                    <p className="text-xs text-gray-500">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8853499/pexels-photo-8853499.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Aar Kay Electronics team"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500">Recognized by</p>
                <p className="font-sora font-bold text-navy text-lg">Su-Kam</p>
                <p className="text-[10px] text-eco font-semibold">Pan India #1 FY 2023-24</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-sky">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-sora">
                What We Stand For
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover-lift transition">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange to-gold text-white flex items-center justify-center mb-4">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-sora font-bold text-navy mb-2">{v.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-sora">
                Our Journey
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange via-gold to-teal"></div>
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <div key={m.year} className={`relative flex gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-2 w-4 h-4 rounded-full bg-gold border-4 border-white shadow-lg z-10"></div>
                    <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right md:order-1">
                      <div className="bg-sky rounded-2xl p-5">
                        <p className="font-sora font-bold text-2xl text-orange mb-1">{m.year}</p>
                        <h4 className="font-bold text-navy mb-1">{m.title}</h4>
                        <p className="text-sm text-gray-600">{m.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <TrustedPartners />

        <FAQSection items={faqs} title="About Aar Kay — FAQs" />

        <section className="py-16 px-4 bg-gradient-to-r from-orange to-gold text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-sora mb-4">
              Ready to Power Your Future?
            </h2>
            <p className="text-white/90 mb-6">
              Trusted by 1000+ families and businesses across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Aar Kay, I want to know more about your products.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-navy font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition"
              >
                WhatsApp Us
              </a>
              <Link href="/contact" className="bg-navy text-white font-bold py-3 px-8 rounded-full hover:bg-teal transition">
                Visit Our Store
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