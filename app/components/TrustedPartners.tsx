"use client";

const partners = [
  { name: "Su-Kam", tagline: "Powering India", color: "from-blue-600 to-blue-800", letter: "SK" },
  { name: "LG", tagline: "Life's Good", color: "from-red-600 to-red-800", letter: "LG" },
  { name: "Luminous", tagline: "Power Solutions", color: "from-orange-500 to-red-600", letter: "L" },
  { name: "Exide", tagline: "Batteries", color: "from-red-700 to-rose-900", letter: "EX" },
  { name: "Waaree", tagline: "Solar Energy", color: "from-green-600 to-emerald-800", letter: "W" },
  { name: "Havells", tagline: "Electricals", color: "from-purple-600 to-indigo-800", letter: "H" },
  { name: "Microtek", tagline: "Inverters", color: "from-teal-600 to-cyan-800", letter: "MT" },
  { name: "V-Guard", tagline: "Trusted", color: "from-indigo-600 to-blue-800", letter: "V" },
];

export default function TrustedPartners() {
  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-2">
            Authorized Distributor
          </p>
          <h3 className="font-sora font-bold text-2xl md:text-3xl text-navy">
            Trusted Brands We Deal In
          </h3>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-6 animate-marquee whitespace-nowrap py-2">
            {[...Array(2)].map((_, loop) => (
              <div key={loop} className="flex gap-6 items-center">
                {partners.map((p) => (
                  <div
                    key={`${loop}-${p.name}`}
                    className="group flex-shrink-0 w-44 h-28 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-gold/50 transition-all duration-300 flex flex-col items-center justify-center gap-2 px-4"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} text-white font-bold font-sora flex items-center justify-center text-sm shadow-md group-hover:scale-110 transition-transform`}>
                      {p.letter}
                    </div>
                    <div className="text-center">
                      <p className="font-sora font-bold text-navy text-sm leading-tight">{p.name}</p>
                      <p className="text-[10px] text-gray-400 tracking-wide">{p.tagline}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs text-gray-500">
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-eco rounded-full"></span>Authorized Su-Kam Super Distributor</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-eco rounded-full"></span>Authorized LG Outlet</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-eco rounded-full"></span>Pan India #1 FY 2023-24</span>
        </div>
      </div>
    </section>
  );
}