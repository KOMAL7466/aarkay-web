"use client";
import { motion } from "framer-motion";
import { Home, Building2, Factory, ArrowRight } from "lucide-react";

const options = [
  {
    icon: Home,
    title: "For Homes",
    subtitle: "Ghar ke liye solar",
    desc: "3kW – 10kW rooftop systems with subsidy help, battery backup, and quick installation.",
    color: "from-orange to-gold",
    href: "/hybrid-solar",
    tag: "Most Popular",
  },
  {
    icon: Building2,
    title: "For Shops & Offices",
    subtitle: "Commercial solar",
    desc: "10kW – 20kW systems for shops, offices and showrooms to cut electricity bills.",
    color: "from-teal to-navy",
    href: "/on-grid-solar",
    tag: "High ROI",
  },
  {
    icon: Factory,
    title: "For Industry",
    subtitle: "Industrial plants",
    desc: "20kW+ commercial solar plants, custom-designed for factories and warehouses.",
    color: "from-eco to-teal",
    href: "/on-grid-solar",
    tag: "Custom",
  },
];

export default function ShopNow() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-sky">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-orange/10 text-orange font-semibold text-xs tracking-widest px-3 py-1 rounded-full mb-3">
            SHOP NOW
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-navy font-poppins mb-3">
            What's Your Requirement?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the connection that matches your needs — home, commercial or industrial. Our experts will suggest the right system for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {options.map((opt, i) => (
            <motion.a
              key={opt.title}
              href={opt.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${opt.color} opacity-10 rounded-bl-full group-hover:opacity-20 transition`}></div>
              <span className="inline-block bg-sky text-teal text-xs font-semibold px-3 py-1 rounded-full mb-6">
                {opt.tag}
              </span>
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${opt.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <opt.icon size={30} />
              </div>
              <h3 className="text-2xl font-bold text-navy font-poppins mb-1">{opt.title}</h3>
              <p className="text-sm text-orange font-semibold mb-3">{opt.subtitle}</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">{opt.desc}</p>
              <span className="inline-flex items-center gap-2 text-teal font-semibold text-sm group-hover:gap-4 transition-all">
                Explore Options <ArrowRight size={16} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}