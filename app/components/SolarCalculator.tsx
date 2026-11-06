"use client";
import { useState } from "react";
import { Zap, IndianRupee, ArrowRight } from "lucide-react";

export default function SolarCalculator() {
  const [bill, setBill] = useState(3000);

  // Approx logic: 1 kW system generates ~120 units/month, avg rate ₹8/unit
  const units = Math.round(bill / 8);
  const systemSize = (units / 120).toFixed(1);
  const systemSizeNum = parseFloat(systemSize);
  const monthlySavings = Math.round(bill * 0.85);
  const yearlySavings = monthlySavings * 12;
  const co2Saved = Math.round(systemSizeNum * 1.5 * 1000); // kg per year
  const treesSaved = Math.round(co2Saved / 21); // ~21 kg CO2 per tree/year

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
      <div className="grid md:grid-cols-2">
        {/* Input */}
        <div className="p-8 md:p-10 bg-gradient-to-br from-navy to-teal text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs mb-4">
            <Zap size={14} className="text-gold" /> Interactive Calculator
          </div>
          <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-2">
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
            min="500"
            max="50000"
            step="500"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
            className="w-full mb-2"
          />
          <div className="flex justify-between text-xs text-gray-300 mb-8">
            <span>₹500</span>
            <span>₹50,000</span>
          </div>

          <a
            href={`https://wa.me/919999999999?text=Hi, my monthly bill is ₹${bill}. Please suggest a solar system.`}
            target="_blank"
            className="inline-flex items-center gap-2 bg-orange hover:bg-gold text-white font-bold py-3 px-6 rounded-full transition"
          >
            Get Detailed Quote <ArrowRight size={18} />
          </a>
        </div>

        {/* Result */}
        <div className="p-8 md:p-10 bg-sky">
          <h4 className="text-sm font-semibold text-teal uppercase tracking-wider mb-6">
            Your Recommended System
          </h4>
          <div className="mb-6">
            <p className="text-5xl md:text-6xl font-bold text-navy font-poppins">
              {systemSize} <span className="text-2xl text-teal">kW</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Suggested solar system size for ~{units} units/month
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
            * Indicative estimate only. Final system size and savings depend on roof space, DISCOM rates, and site survey. Contact our team for an accurate quote.
          </p>
        </div>
      </div>
    </div>
  );
}