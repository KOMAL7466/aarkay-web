"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import SectionHeading from "../components/SectionHeading";
import { MapPin, Zap, CheckCircle, ArrowRight } from "lucide-react";

const WHATSAPP = "917888847774";

// Approximate SVG Map Coordinates for Indian States (For visual representation)
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

export default function InstallationsPage() {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  return (
    <>
      <Header />
      <main className="bg-sky min-h-screen">
        
        {/* Hero Section */}
        <section className="relative bg-navy py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 aurora opacity-40"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center text-white">
            <span className="inline-block bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-widest">
              OUR INSTALLATIONS
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-sora mb-4">
              Powering India, <span className="text-gradient-hero">One Roof at a Time</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From the fields of Punjab to the industries of Haryana, we have successfully lit up over 1000+ homes and businesses.
            </p>
          </div>
        </section>

        {/* Map & Stats Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              
              {/* Left: Interactive Map */}
              <div className="p-8 md:p-12 bg-gradient-to-br from-sky to-white relative flex flex-col items-center justify-center min-h-[500px]">
                <h3 className="font-sora font-bold text-2xl text-navy mb-8 text-center">Our Presence Across States</h3>
                
                {/* SVG Map Visual */}
                <div className="relative w-full max-w-md aspect-square border-2 border-dashed border-teal/20 rounded-full flex items-center justify-center bg-white shadow-inner overflow-hidden">
                   {/* Decorative circles */}
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
                       
                       {/* Tooltip */}
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
                    { icon: CheckCircle, title: "Tier-1 Products", desc: "We only use Su-Kam, Deye, and Waaree products ensuring 25+ years of performance." },
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
                      className="inline-flex items-center gap-2 bg-orange hover:bg-gold text-white font-bold py-3 px-8 rounded-full transition shadow-lg w-full justify-center"
                    >
                      Check Availability in Your City <ArrowRight size={18} />
                    </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Recent Projects Highlight */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <SectionHeading 
            badge="Recent Projects" 
            title={<>Our Latest <span className="text-gradient-hero">Installations</span></>} 
            subtitle="A glimpse into the projects we recently completed." 
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: "/Customer6.webp", title: "20kW Commercial", location: "Ludhiana, Punjab" },
              { img: "/Customer14.webp", title: "10kW Hybrid", location: "Bathinda, Punjab" },
              { img: "/Customer10.webp", title: "50kW Industrial", location: "Delhi NCR" },
            ].map((project, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-white font-bold text-xl font-sora">{project.title}</h4>
                  <p className="text-gold text-sm flex items-center gap-1 mt-1"><MapPin size={14}/> {project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
      <Chatbot />
    </>
  );
}