"use client";
import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "919999999999"; // ← Apna number yahan daalein

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
  options?: { label: string; value: string }[];
};

const quickReplies = [
  { label: "Home Solar", value: "home" },
  { label: "Commercial Solar", value: "commercial" },
  { label: "Hybrid vs On-Grid", value: "compare" },
  { label: "Lithium Battery", value: "lithium" },
  { label: "Loan & Subsidy", value: "subsidy" },
  { label: "Get Quote", value: "quote" },
  { label: "Talk to Team", value: "agent" },
];

const botAnswers: Record<string, { text: string; options?: { label: string; value: string }[] }> = {
  home: {
    text: "Ghar ke liye hum 3kW – 10kW solar systems recommend karte hain. Aapka monthly bill kitna aata hai? Hum sahi size suggest karenge.",
    options: [
      { label: "Under ₹2,000", value: "bill_low" },
      { label: "₹2,000 – ₹5,000", value: "bill_mid" },
      { label: "Above ₹5,000", value: "bill_high" },
      { label: "Get Quote on WhatsApp", value: "whatsapp" },
    ],
  },
  commercial: {
    text: "Shops, offices aur factories ke liye hum 10kW – 20kW+ systems offer karte hain. Aap kis type ka business chalate hain?",
    options: [
      { label: "Shop / Showroom", value: "shop" },
      { label: "Office", value: "office" },
      { label: "Factory / Industry", value: "factory" },
      { label: "Talk to Team", value: "agent" },
    ],
  },
  compare: {
    text: "On-Grid system sirf bill kam karta hai (grid zaroori hai). Hybrid system bill bhi kam karta hai aur battery se backup bhi deta hai. Aapko backup chahiye ya nahi?",
    options: [
      { label: "Backup chahiye", value: "hybrid" },
      { label: "Sirf bill kam karna hai", value: "ongrid" },
      { label: "Talk to Team", value: "agent" },
    ],
  },
  lithium: {
    text: "Hum LFP lithium batteries offer karte hain — 6000+ cycles, zero maintenance, fast charging. Aapko kis capacity ki zaroorat hai?",
    options: [
      { label: "5kWh (Home)", value: "lithium_home" },
      { label: "10kWh (Shop)", value: "lithium_shop" },
      { label: "Custom / Commercial", value: "lithium_commercial" },
      { label: "Talk to Team", value: "agent" },
    ],
  },
  subsidy: {
    text: "PM Surya Ghar subsidy residential rooftop customers ke liye hai. Hum paperwork mein help karte hain. Eligibility government rules par depend karti hai. Aap residential ya commercial ke liye puch rahe hain?",
    options: [
      { label: "Residential", value: "res_subsidy" },
      { label: "Commercial", value: "com_subsidy" },
      { label: "Talk to Team", value: "agent" },
    ],
  },
  quote: {
    text: "Bilkul! Aapka monthly bill aur city batayein, ya seedha WhatsApp par quote lein.",
    options: [
      { label: "WhatsApp par Quote", value: "whatsapp" },
      { label: "Call karwao", value: "callback" },
      { label: "Talk to Team", value: "agent" },
    ],
  },
  // fallback answers
  bill_low: { text: "₹2,000 tak ke bill ke liye 3kW solar system best hai. Subsidy ke saath cost aur kam ho jati hai. Detailed quote ke liye WhatsApp par connect karein." },
  bill_mid: { text: "₹2,000 – ₹5,000 bill ke liye 3kW – 5kW system sahi rahega. Aapko backup chahiye (hybrid) ya nahi (on-grid)?" },
  bill_high: { text: "₹5,000+ bill ke liye 5kW – 10kW system recommend karte hain. Hybrid system backup bhi dega. Detailed quote ke liye WhatsApp par connect karein." },
  shop: { text: "Shop/showroom ke liye 5kW – 10kW on-grid system best ROI deta hai. Aapka monthly bill kitna aata hai? WhatsApp par quote lein." },
  office: { text: "Office ke liye 5kW – 15kW system perfect hai. Detailed analysis ke liye WhatsApp par connect karein." },
  factory: { text: "Factory/industry ke liye 20kW+ commercial plant design karte hain. Site survey ke baad quote dete hain. WhatsApp par connect karein." },
  hybrid: { text: "Hybrid system aapke liye best hai — bill savings + power backup dono. WhatsApp par detailed quote lein." },
  ongrid: { text: "On-grid system lowest cost aur highest ROI deta hai. Sirf bill kam karna hai toh yeh best hai. WhatsApp par quote lein." },
  lithium_home: { text: "5kWh lithium battery home backup ke liye perfect hai. WhatsApp par price aur availability check karein." },
  lithium_shop: { text: "10kWh lithium battery shop/office ke liye ideal hai. WhatsApp par quote lein." },
  lithium_commercial: { text: "Commercial lithium battery banks custom design hote hain. WhatsApp par requirements share karein." },
  res_subsidy: { text: "Residential rooftop par PM Surya Ghar subsidy milti hai. Hum paperwork help karte hain. WhatsApp par apni details bhejein." },
  com_subsidy: { text: "Commercial systems generally subsidy eligible nahi hote, lekin loan options available hain. WhatsApp par baat karein." },
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [hasOpened, setHasOpened] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Show teaser after 25s or 35% scroll
  useEffect(() => {
    if (hasOpened) return;
    const timer = setTimeout(() => setShowTeaser(true), 25000);
    const onScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled > 0.35) setShowTeaser(true);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasOpened]);

  // Initial greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 1,
          from: "bot",
          text: "Namaste! 🙏 Main Aar Kay ka assistant hoon. Aap kis cheez mein help chahte hain?",
          options: quickReplies,
        },
      ]);
    }
  }, [isOpen, messages.length]);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const openChat = () => {
    setIsOpen(true);
    setShowTeaser(false);
    setHasOpened(true);
  };

  const handleOption = (value: string) => {
    // Add user message
    const userMsg: Message = {
      id: Date.now(),
      from: "user",
      text: value,
    };

    // WhatsApp / agent handling
    if (value === "whatsapp" || value === "agent" || value === "callback") {
      setMessages((prev) => [...prev, userMsg]);
      const waText = encodeURIComponent("Hi Aar Kay, I need help with solar products.");
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            from: "bot",
            text: "Aapko WhatsApp par connect kar rahe hain. Neeche button dabayein 👇",
            options: [{ label: "Continue on WhatsApp", value: "open_whatsapp" }],
          },
        ]);
      }, 500);
      return;
    }

    if (value === "open_whatsapp") {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Aar Kay, I need help with solar products.")}`, "_blank");
      return;
    }

    // Answer lookup
    const answer = botAnswers[value];
    setMessages((prev) => [
      ...prev,
      userMsg,
      {
        id: Date.now() + 1,
        from: "bot",
        text: answer?.text || "Iska answer mujhe nahi pata. Main aapko team se connect kar deta hoon.",
        options: answer?.options || [
          { label: "Talk to Team on WhatsApp", value: "open_whatsapp" },
          { label: "Ask something else", value: "restart" },
        ],
      },
    ]);

    if (value === "restart") {
      setMessages([
        {
          id: Date.now(),
          from: "bot",
          text: "Koi baat nahi! Aap kya jaanna chahte hain?",
          options: quickReplies,
        },
      ]);
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now(), from: "user", text: input };
    setMessages((prev) => [
      ...prev,
      userMsg,
      {
        id: Date.now() + 1,
        from: "bot",
        text: "Is specific question ke liye team se baat karna best hoga. Neeche WhatsApp button dabayein, hum turant reply karenge.",
        options: [{ label: "Continue on WhatsApp", value: "open_whatsapp" }],
      },
    ]);
    setInput("");
  };

  return (
    <>
      {/* Teaser bubble */}
      {showTeaser && !isOpen && (
        <div className="fixed bottom-24 right-4 z-40 max-w-[280px] bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 animate-in fade-in slide-in-from-bottom-4">
          <button onClick={() => setShowTeaser(false)} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
            <X size={16} />
          </button>
          <p className="text-sm font-semibold text-navy mb-1">Need help choosing a solar system?</p>
          <p className="text-xs text-gray-500 mb-3">Ask us — we reply in seconds!</p>
          <button
            onClick={openChat}
            className="w-full bg-orange text-white text-sm font-semibold py-2 rounded-full hover:bg-gold transition"
          >
            Chat Now
          </button>
        </div>
      )}

      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={openChat}
          className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-orange to-gold shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform"
          aria-label="Open chat"
        >
          <MessageCircle size={26} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-eco rounded-full border-2 border-white animate-pulse"></span>
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className={`fixed z-50 bg-white shadow-2xl flex flex-col overflow-hidden ${
          isMobile
            ? "inset-0 rounded-none"
            : "bottom-5 right-5 w-[380px] h-[600px] max-h-[85vh] rounded-2xl"
        }`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-navy to-teal text-white p-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-navy font-bold">AK</div>
              <div>
                <p className="font-semibold text-sm">Aar Kay Assistant</p>
                <p className="text-xs text-gray-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-eco rounded-full"></span> Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-full">
              <X size={22} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-sky">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                  m.from === "user"
                    ? "bg-teal text-white rounded-br-sm"
                    : "bg-white text-darkText shadow-sm rounded-bl-sm"
                }`}>
                  <p>{m.text}</p>
                  {m.options && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {m.options.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => handleOption(opt.value)}
                          className="text-xs bg-sky hover:bg-orange hover:text-white text-navy font-medium px-3 py-1.5 rounded-full border border-gray-200 transition"
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t p-3 flex gap-2 bg-white shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your question..."
              className="flex-1 border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-teal"
            />
            <button
              onClick={handleSend}
              className="w-10 h-10 rounded-full bg-orange text-white flex items-center justify-center hover:bg-gold transition shrink-0"
            >
              <Send size={16} />
            </button>
          </div>

          {/* WhatsApp quick action */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Aar Kay, I need help with solar products.")}`}
            target="_blank"
            className="bg-eco text-white text-xs font-semibold py-2.5 text-center flex items-center justify-center gap-1.5 hover:bg-green-700 transition"
          >
            <Phone size={12} /> Direct WhatsApp Support
          </a>
        </div>
      )}
    </>
  );
}