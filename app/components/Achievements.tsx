"use client";
import { motion } from "framer-motion";
import { Award, Users, Zap, MapPin, ShieldCheck, Battery } from "lucide-react";

const achievements = [
  { icon: Award, number: "Pan India #1", label: "Su-Kam Distributor FY 2023-24", color: "from-orange to-gold" },
  { icon: Users, number: "1000+", label: "Happy Installations", color: "from-teal to-navy" },
  { icon: MapPin, number: "15+", label: "States Covered", color: "from-eco to-teal" },
  { icon: Zap, number: "10MW+", label: "Solar Capacity Installed", color: "from-orange to-gold" },
  { icon: Battery, number: "500+", label: "Lithium Installations", color: "from-teal to-navy" },
  { icon: ShieldCheck, number: "17+ Years", label: "Of Trusted Service", color: "from-eco to-teal" },
];

export default function Achievements() {
  return (
    <section className="py-20 px-4 bg-navy relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block bg-gold/20 text-gold font-semibold text-xs tracking-widest px-3 py-1 rounded-full mb-3">
            OUR ACHIEVEMENTS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-poppins mb-3">
            A Legacy of Green Energy
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Recognized, trusted and verified — with awards and numbers that speak for us.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-gold/40 transition-all"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${a.color} flex items-center justify-center text-white mb-4`}>
                <a.icon size={22} />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-gold font-poppins mb-1">{a.number}</p>
              <p className="text-sm text-gray-300">{a.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust row */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 opacity-80">
          <p className="text-xs text-gray-400 uppercase tracking-widest">Trusted Partners</p>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <span className="text-white font-bold text-lg">Su-Kam</span>
            <span className="text-white font-bold text-lg">Mepro Green Energy</span>
            <span className="text-white font-bold text-lg">Deye</span>
            <span className="text-white font-bold text-lg">Waaree</span>
            <span className="text-white font-bold text-lg">Saatvik Solar</span>
          </div>
        </div>
      </div>
    </section>
  );
}