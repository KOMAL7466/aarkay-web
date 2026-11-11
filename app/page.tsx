"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Sun, Battery, Zap, Award, ShieldCheck } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SolarCalculator from "./components/SolarCalculator";
import ShopNow from "./components/ShopNow";
import CustomerReviews from "./components/CustomerReviews";
import Achievements from "./components/Achievements";
import Chatbot from "./components/Chatbot";
import SectionHeading from "./components/SectionHeading";
import TrustedPartners from "./components/TrustedPartners";

const WHATSAPP = "917888847774"; // Updated Number

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
        
        {/* ═══════════════ HERO ═══════════════ */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-cover bg-center scale-105" style={{ backgroundImage: "url('https://images.pexels.com/photos/9875405/pexels-photo-9875405.jpeg?auto=compress&cs=tinysrgb&w=1920')" }} />
            <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/80 to-teal/60"></div>
            <div className="absolute inset-0 aurora opacity-60"></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 glass-premium rounded-full px-4 py-2 text-xs md:text-sm mb-8">
              <span className="w-2 h-2 bg-eco rounded-full animate-pulse"></span>
              <span className="text-white/90">Trusted Since 2007 · Pan India · 1000+ Installations</span>
            </motion.div>

            {/* Logo Background in Hero */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.1, scale: 1.2 }} transition={{ duration: 1.5 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
               <img src="/ark-logo.png" alt="Watermark" className="w-[500px] md:w-[800px] object-contain" />
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="font-sora font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-4 text-white text-shadow-premium tracking-tight relative z-10">
              Power Your Future<br />with <span className="text-gradient-hero">Smart Solar</span><br />& Lithium
            </motion.h1>

            {/* New Line added here */}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-sm md:text-lg text-white font-semibold mb-4 tracking-widest uppercase relative z-10">
              — with <span className="text-gold">Aar Kay Electronics</span> & <span className="text-eco">Mepro Green Energy</span>
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-base md:text-xl font-noto mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed relative z-10">
              हर घर को स्मार्ट एनर्जी, हर बिजनेस को पावर सिक्योरिटी
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="flex flex-col sm:flex-row gap-3 justify-center items-center flex-wrap relative z-10">
              <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Aar Kay, I want a free solar quote.")}`} target="_blank" className="btn-premium text-white font-semibold py-3.5 px-7 rounded-full flex items-center gap-2 text-sm md:text-base">Get Free Quote <ArrowRight size={18} /></a>
              <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Aar Kay, I want to shop solar products.")}`} target="_blank" className="glass-premium hover:bg-white/20 text-white font-semibold py-3.5 px-7 rounded-full flex items-center gap-2 text-sm md:text-base transition-all hover:scale-105">🛒 Shop Now</a>
              <a href="#products" className="text-white/80 hover:text-white font-medium py-3.5 px-4 text-sm md:text-base transition border-b-2 border-transparent hover:border-gold">Explore Products →</a>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ STATS & TRUST BADGES ═══════════════ */}
        <section className="relative bg-navy py-12 overflow-hidden">
          <div className="absolute inset-0 aurora opacity-30"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center w-full lg:w-2/3">
              {[
                { end: 2007, suffix: "", label: "Since Year" },
                { end: 1000, suffix: "+", label: "Installations" },
                { end: 15, suffix: "+", label: "States Covered" },
                { end: 19, suffix: "+", label: "Years Trust" },
              ].map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center group">
                  <h3 className="text-3xl md:text-4xl font-bold font-sora mb-1 bg-gradient-to-br from-gold via-orange to-gold bg-clip-text text-transparent">
                    <Counter end={stat.end} suffix={stat.suffix} />
                  </h3>
                  <p className="text-xs text-gray-300 group-hover:text-gold transition-colors">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 items-center justify-center w-full lg:w-1/3 lg:justify-end">
               <div className="bg-white/10 rounded-xl p-2 backdrop-blur-sm border border-white/10 flex items-center gap-2">
                  <img src="/19-years.png.webp" alt="19 Years of Trust" className="h-14 w-auto object-contain" onError={(e) => e.currentTarget.style.display='none'} />
               </div>
               <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/10 flex items-center gap-2">
                  <ShieldCheck className="text-eco" size={28} />
                  <div className="text-left leading-tight">
                     <p className="text-white font-bold text-sm font-sora">ISO 9001:2015</p>
                     <p className="text-[10px] text-white">Certified Company</p>
                  </div>
               </div>
            </div>

          </div>
        </section>

        {/* ═══════════════ PRODUCTS ═══════════════ */}
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

        {/* ═══════════════ AWARDS & RECOGNITIONS ═══════════════ */}
        <section className="py-20 px-4 bg-sky">
          <div className="max-w-6xl mx-auto">
            <SectionHeading 
              badge="Awards & Recognition" 
              title={<>A Legacy of <span className="text-gradient-hero">Excellence</span></>} 
              subtitle="Honoured with four prestigious awards by renowned organisations and distinguished personalities." 
            />
            
                              <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                { src: "/award1.jpg.webp", alt: "HT Millennial Award", isPortrait: false },
                { src: "/award2.jpg.webp", alt: "Eminence Award", isPortrait: false },
                { src: "/award3.jpg.jpeg", alt: "Titans of Punjab Award", isPortrait: true }, // Special handling
                { src: "/award4.jpg.jpeg", alt: "Pan India No 1 Distributor", isPortrait: false }
              ].map((img, index) => (
                <div key={index} className="group relative rounded-3xl overflow-hidden shadow-xl bg-gray-100 aspect-[4/3] md:aspect-video border border-gray-100">
                  
                  {/* Stretched background of the SAME image to cover sides (Only for portrait image) */}
                  {img.isPortrait && (
                    <img 
                      src={img.src} 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 blur-[2px] scale-110"  
                      aria-hidden="true"
                    />
                  )}

                  {/* Main Image (Full Fit, No Face Cut) */}
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className={`relative z-10 w-full h-full ${img.isPortrait ? 'object-contain' : 'object-cover object-center'} group-hover:scale-105 transition-transform duration-500`} 
                    onError={(e) => { e.currentTarget.src = "https://images.pexels.com/photos/9875420/pexels-photo-9875420.jpeg"; }} 
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "HT Millennial Award 2026 – Presented by Hon’ble Cabinet Minister of Punjab",
                "Eminence Award 2026 – Presented by Hon’ble Food Minister of Punjab",
                "Titans of Punjab Award – Presented by Bollywood Celebrity Mr Rahul Dev",
                "Four-Time Pan India No. 1 Distributor Award – By Su-Kam Director Mr Rajneesh Bansal"
              ].map((award, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-gold/50 hover:shadow-md transition-all">
                  <Award className="text-gold shrink-0 mt-1" size={20} />
                  <p className="text-sm text-navy font-medium leading-relaxed">{award}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TrustedPartners />

        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <SectionHeading badge="Calculator" title={<>Calculate Your <span className="text-gradient-hero">Savings</span></>} subtitle="Apna bill daaliye, turant system size aur savings jaaniye." />
            <SolarCalculator />
          </div>
        </section>

        <ShopNow />
        <CustomerReviews />
        <Achievements />
      </div>

      <Footer />
      <Chatbot />
    </>
  );
}