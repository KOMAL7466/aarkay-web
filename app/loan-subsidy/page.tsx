import Header from "../components/Header";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import FAQSection from "../components/FAQSection";
import { CheckCircle, FileText, Calculator, Building2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Loan & Subsidy | Aar Kay Electronics",
  description: "PM Surya Ghar subsidy guidance and solar loan assistance. We help with paperwork, DISCOM approval and net metering.",
};

const WHATSAPP = "919999999999";

const steps = [
  { icon: CheckCircle, title: "1. Check Eligibility", desc: "Share your electricity bill and property details. We check if you qualify for PM Surya Ghar subsidy." },
  { icon: Calculator, title: "2. Choose System", desc: "We suggest the right system size based on your consumption. On-grid or hybrid, your choice." },
  { icon: FileText, title: "3. Apply for Loan / Subsidy", desc: "We help fill forms, connect with banks, and upload documents for subsidy." },
  { icon: Building2, title: "4. Install & Net Metering", desc: "Installation is done, DISCOM inspection passed, and net meter installed for bill savings." },
];

const faqs = [
  { q: "What is PM Surya Ghar Subsidy?", a: "PM Surya Ghar: Muft Bijli Yojana is a government scheme offering subsidy to residential rooftop solar customers. The subsidy amount depends on system size and government rules." },
  { q: "Am I eligible for subsidy?", a: "Residential rooftop customers with their own roof and a valid electricity connection are generally eligible. Final eligibility depends on DISCOM approval and government rules." },
  { q: "Do you help with the subsidy paperwork?", a: "Yes, we guide you through the entire process — from application to document upload and DISCOM coordination." },
  { q: "Is hybrid solar eligible for subsidy?", a: "Not automatically. Subsidy eligibility varies by scheme and DISCOM. Our team can check your specific case and advise." },
  { q: "Do you provide solar loans?", a: "Yes, we assist with loan paperwork through partner banks. Loan approval depends on the bank and your eligibility (income, credit score, etc.)." },
  { q: "What documents are required for subsidy?", a: "Generally: Aadhaar card, electricity bill, property proof, bank details, and passport-size photos. We provide the exact list after eligibility check." },
  { q: "How much subsidy can I get?", a: "Subsidy amounts are revised by the government from time to time. Please contact us for the current official figures for your system size." },
  { q: "How long does the subsidy process take?", a: "Typically 30-60 days from installation to subsidy credit, depending on DISCOM processing times." },
];

export default function LoanSubsidyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-navy py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 aurora opacity-40"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center text-white">
            <span className="inline-block bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-widest">
              LOAN & SUBSIDY
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-sora mb-4">
              Solar Made <span className="text-gradient-hero">Affordable</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We help with PM Surya Ghar subsidy, bank loans, and net metering — end to end.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Aar Kay, I want to know about loan and subsidy options.")}`}
              target="_blank"
              className="inline-flex items-center gap-2 mt-6 bg-eco hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition"
            >
              Check My Eligibility <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-sora mb-3">
                How It Works
              </h2>
              <p className="text-gray-600">4 simple steps — we handle the complicated part.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((s, i) => (
                <div key={s.title} className="relative bg-sky rounded-2xl p-6 hover:shadow-lg transition">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange to-gold text-white flex items-center justify-center mb-4">
                    <s.icon size={22} />
                  </div>
                  <h3 className="font-sora font-bold text-navy mb-2 text-sm">{s.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
                  {i < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-gold" size={20} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 px-4 bg-orange/5">
          <div className="max-w-4xl mx-auto bg-white border-l-4 border-orange rounded-xl p-5">
            <p className="text-xs text-gray-600 leading-relaxed">
              <strong className="text-navy">Disclaimer:</strong> Loans are subject to bank approval and customer eligibility. Subsidy depends on government rules, customer eligibility, and DISCOM approval. Hybrid systems are not automatically subsidy eligible. Please contact us for current official subsidy amounts. Aar Kay Electronics assists with paperwork but does not guarantee approval.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange to-gold text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-sora mb-4">
              Let&apos;s Check Your Eligibility
            </h2>
            <p className="text-white/90 mb-6">
              Share your bill on WhatsApp — we&apos;ll tell you exactly what you qualify for.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi, please check my solar subsidy eligibility.")}`} target="_blank" className="bg-white text-navy font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition">
                WhatsApp Us
              </a>
              <a href={`tel:+919999999999`} className="bg-navy text-white font-bold py-3 px-8 rounded-full hover:bg-teal transition">
                Call Now
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection items={faqs} title="Loan & Subsidy FAQs" />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}