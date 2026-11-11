"use client";

import { motion } from "framer-motion";

// Sequence exactly as requested: Su-Kam, Mepro, Deye, Waaree, Saatvik
const partners = [
  { 
    name: "Su-Kam", 
    tagline: "Powering India", 
    img: "/Su-Cam.jpeg" 
  },
  { 
    name: "Mepro", 
    tagline: "Green Energy", 
    img: "/MeproGreen.webp" 
  },
  { 
    name: "Deye", 
    tagline: "Inverters", 
    img: "/Deye.webp" 
  },
  { 
    name: "Waaree", 
    tagline: "Solar Panels", 
    img: "/warreelogo.webp" 
  },
  { 
    name: "Saatvik Solar", 
    tagline: "For a Better Future", 
    img: "/Satviklogo.webp" 
  },
];

export default function TrustedPartners() {
  return (
    <section className="relative py-20 bg-sky overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-10 left-10 w-72 h-72 bg-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block bg-navy/5 text-navy font-semibold text-xs tracking-widest px-4 py-1.5 rounded-full mb-3 uppercase">
            Authorized Distributor
          </span>
          <h3 className="font-sora font-extrabold text-3xl md:text-4xl text-navy">
            Trusted Brands We Deal In
          </h3>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm md:text-base">
            We partner with India's leading solar and energy brands to bring you the best quality products.
          </p>
        </div>

        {/* Marquee Container with Edge Fades */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-sky to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-sky to-transparent z-20 pointer-events-none"></div>

          <div className="flex gap-8 animate-marquee whitespace-nowrap py-4">
            {[...Array(2)].map((_, loop) => (
              <div key={loop} className="flex gap-8 items-center">
                {partners.map((p) => (
                  <motion.div
                    key={`${loop}-${p.name}`}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="group flex-shrink-0 w-64 h-40 bg-white/80 backdrop-blur-md rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-gold/50 transition-all duration-300 flex flex-col items-center justify-center gap-4 px-6 relative overflow-hidden"
                  >
                    {/* Top Gradient Line on Hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange via-gold to-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Clean White Logo Box */}
                    <div className="h-16 w-full flex items-center justify-center bg-white rounded-xl p-2 shadow-sm border border-gray-50 group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src={p.img} 
                        alt={p.name} 
                        className="max-h-12 max-w-[140px] object-contain mix-blend-multiply" 
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }} 
                      />
                      <span className="hidden font-sora font-bold text-navy text-lg">{p.name}</span>
                    </div>
                    
                    <div className="text-center">
                      <p className="font-sora font-bold text-navy text-base leading-tight group-hover:text-orange transition-colors">{p.name}</p>
                      <p className="text-[11px] text-gray-500 tracking-wide mt-1 font-medium">{p.tagline}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Badges - Premium Pills */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-4">
          {[
            "Authorized Su-Kam Super Distributor",
            "Authorized LG Outlet",
            "Pan India #1 FY 2023-24"
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all">
              <span className="w-2 h-2 bg-eco rounded-full animate-pulse"></span>
              <span className="text-xs md:text-sm font-semibold text-navy">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}