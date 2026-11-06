"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FAQItem = {
  q: string;
  a: string;
};

export default function FAQSection({
  items,
  title = "Frequently Asked Questions",
  subtitle = "Aapke sawaalon ke jawab yahan hain. Aur bhi help chahiye toh WhatsApp karein.",
  showSchema = true,
}: {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  showSchema?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 bg-white">
      {/* FAQ Schema for SEO */}
      {showSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: items.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              })),
            }),
          }}
        />
      )}

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-teal/10 text-teal font-semibold text-xs tracking-widest px-3 py-1 rounded-full mb-3">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy font-sora mb-3">
            {title}
          </h2>
          <p className="text-gray-600 text-sm md:text-base">{subtitle}</p>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-sky rounded-2xl overflow-hidden border border-gray-100 hover:border-teal/30 transition-colors"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-5 md:px-6 py-4 flex items-center justify-between gap-4 hover:bg-white/50 transition"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-navy text-sm md:text-base">
                  {item.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-teal shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 md:px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}