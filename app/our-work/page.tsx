"use client";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import SectionHeading from "../components/SectionHeading";
import { ArrowRight, Play, Camera, MapPin, Zap, CheckCircle } from "lucide-react";

const WHATSAPP = "917888847774";

// Customer Gallery Data
const galleryItems = [
  "/Customer1.jpeg",
  "/Customer2.jpeg",
  "/Customer3.mp4", // Video file
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

// Map Data
const statesData = [
  { id: "PB", name: "Punjab", x: 130, y: 120, count: "400+" },
  { id: "HR", name: "Haryana", x: 150, y: 160, count: "300+" },
  { id: "HP", name: "Himachal", x: 170, y: 80, count: "100+" },
  { id: "CH", name: "Chandigarh", x: 155, y: 110, count: "150+" },
  { id: "DL", name: "Delhi", x: 190, y: 180, count: "100+" },
  { id: "UP", name: "Uttar Pradesh", x: 230, y: 190, count: "50+" },
  { id: "RJ", name: "Rajasthan", x: 120, y: 230, count: "40+" },
  { id: "UK", name: "Uttarakhand", x: 220, y: 120, count: "20+" },
];

export default function OurWorkPage() {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  return (
    <>
      <Header />
      <main className="bg-sky min-h-screen">
        
        {/* ═══════════════ HERO SECTION ═══════════════ */}
        <section className="relative bg-navy py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 aurora opacity-40"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center text-white">
            <span className="inline-block bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-widest">
              OUR PORTFOLIO
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-sora mb-4 leading-tight">
              Powering India, <span className="text-gradient-hero">One Roof at a Time</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg mb-6">
              Explore our Pan-India presence and see the smiling faces of over 1000+ families and businesses who trust us.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
               <div className="text-center">
                  <p className="text-3xl font-bold text-gold">1000+</p>
                  <p className="text-xs text-gray-300 uppercase tracking-wider">Installations</p>
               </div>
               <div className="text-center">
                  <p className="text-3xl font-bold text-gold">15+</p>
                  <p className="text-xs text-gray-300 uppercase tracking-wider">States Covered</p>
               </div>
               <div className="text-center">
                  <p className="text-3xl font-bold text-gold">10MW+</p>
                  <p className="text-xs text-gray-300 uppercase tracking-wider">Capacity Installed</p>
               </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ MAP & IMPACT SECTION ═══════════════ */}
        <section className="py-20 px-4 max-w-7xl mx-auto -mt-10 relative z-20">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              
              {/* Left: Interactive Map */}
              <div className="p-8 md:p-12 bg-gradient-to-br from-sky to-white relative flex flex-col items-center justify-center min-h-[500px]">
                <h3 className="font-sora font-bold text-2xl text-navy mb-8 text-center">Our Presence Across States</h3>
                
                <div className="relative w-full max-w-md aspect-square border-2 border-dashed border-teal/20 rounded-full flex items-center justify-center bg-white shadow-inner overflow-hidden">
                   <div className="absolute w-[80%] h-[80%] border border-teal/10 rounded-full"></div>
                   <div className="absolute w-[60%] h-[60%] border border-teal/10 rounded-full"></div>
                   
                   {statesData.map((state) => (
                     <div 
                       key={state.id}
                       className="absolute z-10 group cursor-pointer"
                       style={{ left: `${state.x}px`, top: `${state.y}px` }}
                       onMouseEnter={() => setHoveredState(state.name)}
                       onMouseLeave={() => setHoveredState(null)}
                     >
                       <span className="absolute -inset-2 bg-orange/20 rounded-full animate-ping"></span>
                       <div className="w-4 h-4 bg-orange rounded-full border-2 border-white shadow-lg group-hover:scale-150 transition-transform"></div>
                       
                       <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-navy text-white text-xs py-1 px-3 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                         {state.name}: {state.count}
                       </div>
                     </div>
                   ))}
                   
                   <div className="text-center">
                      <p className="text-4xl font-extrabold text-navy font-sora">1000+</p>
                      <p className="text-sm text-gray-500 font-semibold uppercase tracking-widest mt-1">Installations</p>
                   </div>
                </div>
                <p className="text-center text-xs text-gray-400 mt-6">* Hover over the orange dots to see state-wise data.</p>
              </div>

              {/* Right: Stats & Impact */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-sora font-bold text-2xl text-navy mb-6">Why Trust Our Installations?</h3>
                
                <div className="space-y-6">
                  {[
                    { icon: Zap, title: "10MW+ Capacity", desc: "Successfully installed megawatts of solar power across residential and commercial sectors." },
                    { icon: CheckCircle, title: "Tier-1 Products", desc: "We only use Su-Kam, Mepro, and Waaree products ensuring 25+ years of performance." },
                    { icon: MapPin, title: "Pan-India Network", desc: "Our dedicated team travels across Punjab, Haryana, HP, and Delhi for seamless installation." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-sky text-orange flex items-center justify-center shrink-0">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy text-lg mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-gray-100">
                   <a
                      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Aar Kay, I want to check if you install in my city.")}`}
                      target="_blank"
                      className="inline-flex items-center gap-2 bg-orange hover:bg-gold text-white font-bold py-3.5 px-8 rounded-full transition shadow-lg w-full justify-center"
                    >
                      Check Availability in Your City <ArrowRight size={18} />
                    </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════ CUSTOMER GALLERY SECTION ═══════════════ */}
        <section className="py-20 px-4 max-w-7xl mx-auto bg-white rounded-3xl mb-20 shadow-sm border border-gray-100">
          <SectionHeading 
            badge="Happy Customers" 
            title={<>Real People. <span className="text-gradient-hero">Real Smiles.</span></>} 
            subtitle="A glimpse into the successful installations and happy families across India." 
          />

          {/* 4 Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            {galleryItems.map((item, index) => {
              const isVideo = item.endsWith(".mp4");

              return (
                <div 
                  key={index} 
                  className="group relative bg-gray-200 rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  {isVideo ? (
                    <>
                      <video 
                        src={item} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md p-2 rounded-full text-white z-20">
                        <Play size={16} fill="currentColor" />
                      </div>
                    </>
                  ) : (
                    <img 
                      src={item} 
                      alt={`Customer Installation ${index + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg";
                      }}
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-5 z-10">
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

        {/* ═══════════════ CTA SECTION ═══════════════ */}
        <section className="py-20 px-4 bg-gradient-to-r from-orange to-gold text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-sora mb-4">Ready to Join Them?</h2>
            <p className="text-white/90 mb-8 text-lg">Get a free consultation today and see how much you can save with our premium solar solutions.</p>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Aar Kay, I want to be your next happy customer.")}`}
              target="_blank"
              className="inline-flex items-center gap-2 bg-white text-navy hover:bg-gray-100 font-bold py-3.5 px-8 rounded-full transition shadow-lg hover:scale-105"
            >
              Get Free Quote <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}