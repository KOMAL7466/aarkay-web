"use client";
import { useState } from "react";
import { Zap, IndianRupee, ArrowRight } from "lucide-react";

const WHATSAPP = "917888847774";

// Aapke chart ke according exact logic mapping
const getSolarDetails = (bill: number) => {
  if (bill < 3000) return { size: "1.5", phase: "Single Phase (1P)" };
  if (bill >= 3000 && bill <= 4500) return { size: "3", phase: "Single Phase (1P)" };
  if (bill >= 5000 && bill <= 7500) return { size: "5", phase: "Single Phase (1P)" };
  if (bill >= 8000 && bill <= 11000) return { size: "6", phase: "Three Phase (3P)" };
  if (bill >= 13000 && bill <= 18000) return { size: "10", phase: "Three Phase (3P)" };
  if (bill >= 20000 && bill <= 25000) return { size: "15", phase: "Three Phase (3P)" };
  if (bill >= 27000 && bill <= 30000) return { size: "20", phase: "Three Phase (3P)" };
  if (bill >= 33000 && bill <= 38000) return { size: "25", phase: "Three Phase (3P)" };
  if (bill >= 40000 && bill <= 48000) return { size: "30", phase: "Three Phase (3P)" };
  if (bill >= 51000 && bill <= 60000) return { size: "40", phase: "Three Phase (3P)" };
  if (bill >= 65000 && bill <= 80000) return { size: "50", phase: "Three Phase (3P)" };
  if (bill >= 90000 && bill <= 120000) return { size: "70", phase: "Three Phase (3P)" };
  return { size: "100", phase: "Three Phase (3P)" }; // Above 1,30,000+
};

export default function SolarCalculator() {
  const [bill, setBill] = useState(5000);

  const details = getSolarDetails(bill);
  const systemSizeNum = parseFloat(details.size);
  
  // Approx savings logic: 85% of bill can be saved
  const monthlySavings = Math.round(bill * 0.85);
  const yearlySavings = monthlySavings * 12;
  const co2Saved = Math.round(systemSizeNum * 1.5 * 1000);
  const treesSaved = Math.round(co2Saved / 21);

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
      <div className="grid md:grid-cols-2">
        
        {/* Input Section */}
        <div className="p-8 md:p-10 bg-gradient-to-br from-navy to-teal text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs mb-4">
            <Zap size={14} className="text-gold" /> Interactive Calculator
          </div>
          <h3 className="text-2xl md:text-3xl font-bold font-sora mb-2">
            Solar Savings Calculator
          </h3>
          <p className="text-sm text-gray-200 mb-8">
            Apna monthly bill daaliye aur turant jaaniye kitna bada solar system chahiye.
          </p>

          <label className="block text-sm font-medium mb-2">
            Monthly Electricity Bill
          </label>
          <div className="relative mb-4">
            <IndianRupee size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" />
            <input
              type="number"
              value={bill}
              onChange={(e) => setBill(Number(e.target.value) || 0)}
              className="w-full bg-white/10 border border-white/20 rounded-xl pl-11 pr-4 py-3 text-2xl font-bold text-white focus:outline-none focus:border-gold"
            />
          </div>

          <input
            type="range"
            min="1000"
            max="150000"
            step="1000"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
            className="w-full mb-2"
          />
          <div className="flex justify-between text-xs text-gray-300 mb-8">
            <span>₹1,000</span>
            <span>₹1,50,000+</span>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi Aar Kay, my monthly bill is ₹${bill}. Please suggest a ${details.size}kW solar system.`)}`}
            target="_blank"
            className="inline-flex items-center gap-2 bg-orange hover:bg-gold text-white font-bold py-3 px-6 rounded-full transition shadow-lg"
          >
            Get Detailed Quote <ArrowRight size={18} />
          </a>
        </div>

        {/* Result Section */}
        <div className="p-8 md:p-10 bg-sky">
          <h4 className="text-sm font-semibold text-teal uppercase tracking-wider mb-6">
            Recommended System
          </h4>
          <div className="mb-6">
            <p className="text-5xl md:text-6xl font-bold text-navy font-sora">
              {details.size} <span className="text-2xl text-teal">kW</span>
            </p>
            <div className="mt-2 inline-block bg-navy text-white text-xs font-semibold px-3 py-1 rounded-full">
              {details.phase}
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Best suited for a bill of ₹{bill.toLocaleString('en-IN')}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="text-xs text-gray-500 mb-1">Monthly Savings</p>
              <p className="text-xl font-bold text-eco">₹{monthlySavings.toLocaleString("en-IN")}</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="text-xs text-gray-500 mb-1">Yearly Savings</p>
              <p className="text-xl font-bold text-eco">₹{yearlySavings.toLocaleString("en-IN")}</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="text-xs text-gray-500 mb-1">CO₂ Saved/yr</p>
              <p className="text-xl font-bold text-teal">{co2Saved.toLocaleString("en-IN")} kg</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="text-xs text-gray-500 mb-1">Trees Equivalent</p>
              <p className="text-xl font-bold text-teal">{treesSaved} 🌳</p>
            </div>
          </div>

          <p className="text-[11px] text-gray-400 leading-relaxed">
            * Indicative estimate only based on AAR KAY ELECTRONICS sizing guide. Final system size and savings depend on roof space, DISCOM rates, and site survey.
          </p>
        </div>
      </div>
    </div>
  );
}