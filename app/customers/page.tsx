"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import SectionHeading from "../components/SectionHeading";
import { ArrowRight, Play, Camera } from "lucide-react";

const WHATSAPP = "917888847774";

// Exact images list without manual tags
const galleryItems = [
  "/Customer1.jpeg",
  "/Customer2.jpeg",
  "/Customer3.mp4", // Video file handled here
  "/Customer4.jpeg",
  "/Customer5.jpeg",
  "/Customer6.webp",
  "/Customer7.webp",
  "/Customer8.webp",
  "/Customer9.webp",
  "/Customer10.webp",
  "/Customer11.webp",
  "/Customer12.webp",
  "/Customer13.webp",
  "/Customer14.webp",
  "/Customer15.webp",
  "/Customer16.webp",
];

export default function CustomersPage() {
  return (
    <>
      <Header />
      <main className="bg-sky min-h-screen">
        
        {/* Hero Section */}
        <section className="relative bg-navy py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 aurora opacity-40"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center text-white">
            <span className="inline-block bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-widest">
              OUR GALLERY
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-sora mb-4">
              Real People. <span className="text-gradient-hero">Real Smiles.</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A glimpse into the 1000+ happy families and businesses who trusted us with their energy needs.
            </p>
          </div>
        </section>

        {/* Gallery Grid Section */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <SectionHeading 
            badge="Photo Gallery" 
            title={<>Our Happy <span className="text-gradient-hero">Customers</span></>} 
            subtitle="Moments captured during our successful solar and lithium installations across India." 
          />

          {/* 4 Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => {
              const isVideo = item.endsWith(".mp4");

              return (
                <div 
                  key={index} 
                  className="group relative bg-gray-200 rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  {isVideo ? (
                    <>
                      {/* Video Tag with autoplay, loop and muted */}
                      <video 
                        src={item} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      {/* Play Icon Indicator */}
                      <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md p-2 rounded-full text-white">
                        <Play size={16} fill="currentColor" />
                      </div>
                    </>
                  ) : (
                    /* Image Tag */
                    <img 
                      src={item} 
                      alt={`Customer Installation ${index + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg";
                      }}
                    />
                  )}

                  {/* Very Subtle Premium Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-5">
                    <div className="flex items-center gap-2 text-white">
                       <Camera size={16} className="text-gold" />
                       <span className="text-sm font-semibold tracking-wide">Aar Kay Installation</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-white border-t border-gray-100 text-center">
          <h2 className="text-3xl font-bold text-navy font-sora mb-4">Ready to Join Them?</h2>
          <p className="text-gray-500 mb-6 max-w-xl mx-auto">Get a free consultation today and see how much you can save with our premium solar solutions.</p>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Aar Kay, I want to be your next happy customer.")}`}
            target="_blank"
            className="inline-flex items-center gap-2 bg-orange hover:bg-gold text-white font-bold py-3.5 px-8 rounded-full transition shadow-lg hover:scale-105"
          >
            Get Free Quote <ArrowRight size={18} />
          </a>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}