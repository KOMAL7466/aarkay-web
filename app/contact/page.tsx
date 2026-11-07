"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const WHATSAPP = "919999999999";

const outlets = [
  {
    name: "Zirakpur (Head Office)",
    address: "Shop No. 12, Main Market, Zirakpur, Punjab 140603",
    phone: "+91 99999 99999",
    hours: "Mon – Sat: 9:00 AM – 7:00 PM",
    mapQuery: "Aar Kay Electronics Zirakpur",
  },
  {
    name: "Mohali Outlet",
    address: "Sector 70, Mohali, Punjab 160071",
    phone: "+91 99999 99999",
    hours: "Mon – Sat: 10:00 AM – 7:00 PM",
    mapQuery: "Aar Kay Electronics Mohali",
  },
  {
    name: "Panchkula Outlet",
    address: "Sector 11, Panchkula, Haryana 134112",
    phone: "+91 99999 99999",
    hours: "Mon – Sat: 10:00 AM – 7:00 PM",
    mapQuery: "Aar Kay Electronics Panchkula",
  },
];

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const city = (form.elements.namedItem("city") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const text = `Hi Aar Kay!%0A%0AName: ${name}%0APhone: ${phone}%0ACity: ${city}%0AMessage: ${message}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-navy py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 aurora opacity-40"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center text-white">
            <span className="inline-block bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-widest">
              CONTACT US
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-sora mb-4">
              Let&apos;s <span className="text-gradient-hero">Talk Solar</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Visit our store, call us, or drop a WhatsApp message — we reply fast!
            </p>
          </div>
        </section>

        {/* Quick contact cards */}
        <section className="py-12 px-4 bg-white -mt-10 relative z-10">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-4">
            <a href={`tel:+919999999999`} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover-lift transition border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-orange/10 text-orange mx-auto mb-3 flex items-center justify-center">
                <Phone size={22} />
              </div>
              <p className="text-xs text-gray-500 mb-1">Call Us</p>
              <p className="font-semibold text-navy text-sm">+91 99999 99999</p>
            </a>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover-lift transition border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-eco/10 text-eco mx-auto mb-3 flex items-center justify-center">
                <MessageCircle size={22} />
              </div>
              <p className="text-xs text-gray-500 mb-1">WhatsApp</p>
              <p className="font-semibold text-navy text-sm">Chat Now</p>
            </a>
            <a href="mailto:info@aarkay.com" className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover-lift transition border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-teal/10 text-teal mx-auto mb-3 flex items-center justify-center">
                <Mail size={22} />
              </div>
              <p className="text-xs text-gray-500 mb-1">Email Us</p>
              <p className="font-semibold text-navy text-sm">info@aarkay.com</p>
            </a>
          </div>
        </section>

        {/* Outlets */}
        <section className="py-16 px-4 bg-sky">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-sora mb-2">
                Our Outlets
              </h2>
              <p className="text-gray-600">Visit us in person — we&apos;d love to help!</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {outlets.map((o) => (
                <div key={o.name} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition">
                  <div className="h-40 bg-navy relative">
                    <iframe
                      src={`https://www.google.com/maps?q=${encodeURIComponent(o.mapQuery)}&output=embed`}
                      className="w-full h-full border-0"
                      loading="lazy"
                      title={o.name}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-sora font-bold text-navy mb-3">{o.name}</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex gap-2"><MapPin size={16} className="text-orange shrink-0 mt-0.5" /> {o.address}</li>
                      <li className="flex gap-2"><Phone size={16} className="text-orange shrink-0 mt-0.5" /> {o.phone}</li>
                      <li className="flex gap-2"><Clock size={16} className="text-orange shrink-0 mt-0.5" /> {o.hours}</li>
                    </ul>
                    <a
                      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi, I want to visit ${o.name}. Please share directions.`)}`}
                      target="_blank"
                      className="mt-4 block text-center bg-eco hover:bg-green-700 text-white text-sm font-semibold py-2 rounded-lg transition"
                    >
                      Get Directions on WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enquiry Form (opens WhatsApp) */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-sora mb-2">
                Send Us an Enquiry
              </h2>
              <p className="text-gray-600 text-sm">
                Form fill karein — we&apos;ll redirect you to WhatsApp with your details.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input name="name" required placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-teal" />
                <input name="phone" required type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-teal" />
              </div>
              <input name="city" required placeholder="City" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-teal" />
              <textarea name="message" rows={4} placeholder="Your Message / Requirement" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-teal"></textarea>
              <button type="submit" className="w-full btn-premium text-white font-bold py-3.5 rounded-full">
                Send on WhatsApp →
              </button>
              <p className="text-xs text-gray-400 text-center">
                By submitting, you agree to be contacted via WhatsApp. We never share your data.
              </p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}