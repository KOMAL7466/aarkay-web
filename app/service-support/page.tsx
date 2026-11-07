"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import FAQSection from "../components/FAQSection";
import { Wrench, MessageCircle, Phone, Clock } from "lucide-react";

export const metadata = {
  title: "Service Support | Aar Kay Electronics",
  description: "Raise a complaint, book AMC, or get technical support for your solar and lithium systems. Fast response via WhatsApp.",
};

const WHATSAPP = "919999999999";

const faqs = [
  { q: "How do I raise a complaint?", a: "You can fill the form on this page (which opens WhatsApp), or directly WhatsApp us with your name, product, and issue. We respond within 24 hours." },
  { q: "What is AMC and why do I need it?", a: "AMC (Annual Maintenance Contract) is a yearly service plan covering system checkups, cleaning, and priority support. It keeps your solar system running efficiently." },
  { q: "Do you provide service outside Punjab?", a: "Yes, we support Pan India service through our network. Response time may vary by location." },
  { q: "What is covered under warranty?", a: "Warranty varies by product — typically 5-10 years for inverters, 25 years for panels, and 5-10 years for lithium batteries. Check your product manual or contact us." },
  { q: "How often should I service my solar system?", a: "We recommend a professional checkup every 6 months. Regular cleaning of panels improves generation by up to 15%." },
  { q: "My inverter shows an error. What should I do?", a: "Note the error code and WhatsApp us a photo. Our technical team will diagnose and guide you. If needed, we'll schedule a site visit." },
];

export default function ServiceSupportPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-navy py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 aurora opacity-40"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center text-white">
            <span className="inline-block bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-widest">
              SERVICE SUPPORT
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-sora mb-4">
              We&apos;re Here to <span className="text-gradient-hero">Help</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Complaint, AMC, or technical issue — get fast support from our expert team.
            </p>
          </div>
        </section>

        {/* Quick actions */}
        <section className="py-12 px-4 bg-white -mt-10 relative z-10">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-4">
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover-lift transition border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-eco/10 text-eco mx-auto mb-3 flex items-center justify-center">
                <MessageCircle size={22} />
              </div>
              <p className="text-xs text-gray-500 mb-1">WhatsApp Support</p>
              <p className="font-semibold text-navy text-sm">Instant Reply</p>
            </a>
            <a href="tel:+919999999999" className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover-lift transition border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-orange/10 text-orange mx-auto mb-3 flex items-center justify-center">
                <Phone size={22} />
              </div>
              <p className="text-xs text-gray-500 mb-1">Call Support</p>
              <p className="font-semibold text-navy text-sm">+91 99999 99999</p>
            </a>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-teal/10 text-teal mx-auto mb-3 flex items-center justify-center">
                <Clock size={22} />
              </div>
              <p className="text-xs text-gray-500 mb-1">Hours</p>
              <p className="font-semibold text-navy text-sm">Mon-Sat, 9 AM - 7 PM</p>
            </div>
          </div>
        </section>

        {/* Complaint form */}
        <section className="py-16 px-4 bg-sky">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange to-gold text-white flex items-center justify-center mx-auto mb-4">
                <Wrench size={26} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-sora mb-2">
                Raise a Complaint
              </h2>
              <p className="text-gray-600 text-sm">
                Fill the details and we&apos;ll get back to you on WhatsApp within 24 hours.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
                const product = (form.elements.namedItem("product") as HTMLInputElement).value;
                const issue = (form.elements.namedItem("issue") as HTMLTextAreaElement).value;
                const text = `*SERVICE COMPLAINT*%0A%0AName: ${name}%0APhone: ${phone}%0AProduct: ${product}%0AIssue: ${issue}`;
                window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
              }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <input name="name" required placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-teal" />
                <input name="phone" required type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-teal" />
              </div>
              <input name="product" required placeholder="Product (e.g., 5kW Hybrid Solar)" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-teal" />
              <textarea name="issue" required rows={4} placeholder="Describe the issue..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-teal"></textarea>
              <button type="submit" className="w-full btn-premium text-white font-bold py-3.5 rounded-full">
                Submit via WhatsApp →
              </button>
            </form>
          </div>
        </section>

        {/* AMC CTA */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-navy to-teal rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-sora mb-3">
              Protect Your Investment with AMC
            </h2>
            <p className="text-gray-200 mb-6 max-w-xl mx-auto">
              Annual Maintenance Contract — regular checkups, cleaning, and priority support. Keep your system running at peak efficiency.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi, I want to know about AMC plans.")}`}
              target="_blank"
              className="inline-block bg-gold hover:bg-yellow-400 text-navy font-bold py-3 px-8 rounded-full transition"
            >
              Enquire About AMC →
            </a>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection items={faqs} title="Service FAQs" />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}