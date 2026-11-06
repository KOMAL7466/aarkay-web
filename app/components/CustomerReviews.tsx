"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const GOOGLE_REVIEW_URL = "https://g.page/r/CW3Ob1tpy-t1EBM/review";
const WHATSAPP = "919999999999";

const reviews = [
  {
    name: "Rajesh Kumar",
    location: "Zirakpur",
    rating: 5,
    text: "Installed 5kW hybrid solar at my home. Bill reduced from ₹6,000 to ₹800. Team was very professional and explained everything clearly. Highly recommended!",
    system: "5kW Hybrid Solar",
  },
  {
    name: "Priya Sharma",
    location: "Mohali",
    rating: 5,
    text: "Got lithium battery for my shop. Zero maintenance, fast charging, and the after-sales support is excellent. Best decision for my business.",
    system: "10kWh Lithium Battery",
  },
  {
    name: "Amit Verma",
    location: "Panchkula",
    rating: 5,
    text: "Aar Kay helped me get the PM Surya Ghar subsidy. The whole process was smooth and I saved almost ₹78,000. Very trustworthy team.",
    system: "3kW On-Grid Solar",
  },
  {
    name: "Sandeep Kaur",
    location: "Chandigarh",
    rating: 5,
    text: "The installation was done in 2 days. Very clean work and the team even set up the monitoring app. Genuine people, genuine service.",
    system: "5kW Hybrid Solar",
  },
  {
    name: "Vikram Singh",
    location: "Ambala",
    rating: 5,
    text: "Bought commercial solar for my factory. Payback is coming in around 3 years. Great ROI and quality products from Su-Kam.",
    system: "20kW Commercial Solar",
  },
  {
    name: "Neha Gupta",
    location: "Ludhiana",
    rating: 5,
    text: "I was confused about which system to choose. Their team patiently explained on-grid vs hybrid and helped me pick the right one. Excellent guidance!",
    system: "3kW On-Grid Solar",
  },
];

export default function CustomerReviews() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-gold/10 text-gold font-semibold text-xs tracking-widest px-3 py-1 rounded-full mb-3">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-navy font-sora mb-3">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="font-semibold">4.9/5</span>
            <span className="text-gray-400">· 500+ happy customers</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-sky rounded-2xl p-6 relative hover:shadow-xl transition-shadow"
            >
              <Quote size={36} className="text-orange/20 absolute top-4 right-4" />
              <div className="flex mb-3">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star key={idx} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-darkText leading-relaxed mb-5">
                &quot;{r.text}&quot;
              </p>
              <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal to-navy text-white flex items-center justify-center font-bold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm text-navy">{r.name}</p>
                  <p className="text-xs text-gray-500">
                    {r.location} · {r.system}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Review CTA — Google Review + WhatsApp */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 hover:border-gold text-navy font-semibold px-6 py-3 rounded-full transition-all shadow-sm hover:shadow-md"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Share Your Experience
          </a>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Aar Kay, I want to share my experience.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-eco hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-md"
          >
            WhatsApp Your Feedback →
          </a>
        </div>
      </div>
    </section>
  );
}