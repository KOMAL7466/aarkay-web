"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Sun, Battery, Zap } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SolarCalculator from "./components/SolarCalculator";
import ShopNow from "./components/ShopNow";
import CustomerReviews from "./components/CustomerReviews";
import Achievements from "./components/Achievements";
import Chatbot from "./components/Chatbot";
import SectionHeading from "./components/SectionHeading";
import TrustedPartners from "./components/TrustedPartners";

const WHATSAPP = "919999999999";

const Counter = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / 120;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);
  return <span>{count}{suffix}</span>;
};

export default function Home() {
  return (
    <>
      <Header />
      <div className="overflow-hidden">
        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-cover bg-center scale-110" style={{ backgroundImage: "url('https://images.pexels.com/photos/9875405/pexels-photo-9875405.jpeg?auto=compress&cs=tinysrgb&w=1920')" }} />
            <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-teal/70"></div>
            <div className="absolute inset-0 aurora opacity-60"></div>
          </div>

          <div className="absolute top-20 right-10 w-96 h-96 opacity-20 pointer-events-none">
            <div className="relative w-full h-full animate-rays">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="absolute top-1/2 left-1/2 w-1 h-48 bg-gradient-to-t from-transparent via-gold to-transparent origin-bottom" style={{ transform: `rotate(${i * 30}deg) translateX(-50%)` }} />
              ))}
            </div>
          </div>

          <div className="absolute top-40 left-10 w-72 h-72 bg-orange/20 rounded-full blur-3xl animate-float-slow pointer-events-none"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal/30 rounded-full blur-3xl animate-float-slow pointer-events-none" style={{ animationDelay: "2s" }}></div>

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 glass-premium rounded-full px-4 py-2 text-xs md:text-sm mb-8">
              <span className="w-2 h-2 bg-eco rounded-full animate-pulse"></span>
              <span className="text-white/90">Trusted Since 2007 · Pan India · 1000+ Installations</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="font-sora font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 text-white text-shadow-premium tracking-tight">
              Power Your Future<br />with <span className="text-gradient-hero">Smart Solar</span><br />& Lithium
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-base md:text-xl font-noto mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed">
              हर घर को स्मार्ट एनर्जी, हर बिजनेस को पावर सिक्योरिटी
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="flex flex-col sm:flex-row gap-3 justify-center items-center flex-wrap">
              <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Aar Kay, I want a free solar quote.")}`} target="_blank" className="btn-premium text-white font-semibold py-3.5 px-7 rounded-full flex items-center gap-2 text-sm md:text-base">Get Free Quote <ArrowRight size={18} /></a>
              <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Aar Kay, I want to shop solar products.")}`} target="_blank" className="glass-premium hover:bg-white/20 text-white font-semibold py-3.5 px-7 rounded-full flex items-center gap-2 text-sm md:text-base transition-all hover:scale-105">🛒 Shop Now</a>
              <a href="#products" className="text-white/80 hover:text-white font-medium py-3.5 px-4 text-sm md:text-base transition border-b-2 border-transparent hover:border-gold">Explore Products →</a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="mt-12 flex flex-wrap justify-center gap-2 md:gap-3 text-[11px] md:text-xs">
              {["✓ 1000+ Installations", "✓ Subsidy Support", "✓ Pan India Service", "✓ 17+ Years", "✓ Su-Kam Partner"].map((chip) => (
                <span key={chip} className="glass-premium rounded-full px-3 py-1.5 text-white/90 whitespace-nowrap">{chip}</span>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-gold rounded-full animate-bounce"></div>
            </div>
          </motion.div>
        </section>

        {/* STATS */}
        <section className="relative bg-navy py-16 overflow-hidden">
          <div className="absolute inset-0 aurora opacity-30"></div>
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { end: 2007, suffix: "", label: "Since Year" },
                { end: 1000, suffix: "+", label: "Installations" },
                { end: 15, suffix: "+", label: "States Covered" },
                { end: 17, suffix: "+", label: "Years Experience" },
              ].map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center group">
                  <h3 className="text-4xl md:text-5xl font-bold font-sora mb-2 bg-gradient-to-br from-gold via-orange to-gold bg-clip-text text-transparent">
                    <Counter end={stat.end} suffix={stat.suffix} />
                  </h3>
                  <p className="text-sm text-gray-300 group-hover:text-gold transition-colors">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="py-20 px-4 max-w-6xl mx-auto" id="products">
          <SectionHeading badge="Our Products" title={<>Premium <span className="text-gradient-hero">Solar Ranges</span></>} subtitle="Lithium, Hybrid aur On-Grid — aapki har need ke liye ek perfect solution." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Battery, title: "Lithium Battery", img: "8853536", href: "/lithium-battery", points: ["Long Life (6000+ Cycles)", "Fast Charging", "Zero Maintenance"] },
              { icon: Sun, title: "Hybrid Solar", img: "9875441", href: "/hybrid-solar", points: ["Power Backup", "Bill Savings", "Govt. Subsidy Help"] },
              { icon: Zap, title: "On-Grid Solar", img: "9875420", href: "/on-grid-solar", points: ["Lowest Cost", "Net Metering", "High ROI"] },
            ].map((p) => (
              <motion.div key={p.title} whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3 }} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange via-gold to-teal"></div>
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img src={`https://images.pexels.com/photos/${p.img}/pexels-photo-${p.img}.jpeg?auto=compress&cs=tinysrgb&w=800`} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange to-gold flex items-center justify-center text-white"><p.icon size={20} /></div>
                    <h3 className="text-xl font-bold text-navy font-sora">{p.title}</h3>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2 mb-6">
                    {p.points.map((pt) => (<li key={pt} className="flex items-center gap-2"><span className="text-eco font-bold">✔</span> {pt}</li>))}
                  </ul>
                  <a href={p.href} className="block text-center w-full bg-gradient-to-r from-teal to-navy text-white py-2.5 rounded-xl hover:from-navy hover:to-teal transition font-semibold text-sm">View Range</a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TRUSTED PARTNERS (naya) */}
        <TrustedPartners />

        {/* CALCULATOR */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <SectionHeading badge="Calculator" title={<>Calculate Your <span className="text-gradient-hero">Savings</span></>} subtitle="Apna bill daaliye, turant system size aur savings jaaniye." />
            <SolarCalculator />
          </div>
        </section>

        {/* SHOP NOW */}
        <ShopNow />

        {/* CUSTOMER REVIEWS */}
        <CustomerReviews />

        {/* ACHIEVEMENTS */}
        <Achievements />
      </div>

      <Footer />
      <Chatbot />
    </>
  );
}