"use client";

const WHATSAPP = "919999999999";

export default function ServiceForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const product = (form.elements.namedItem("product") as HTMLInputElement).value;
    const issue = (form.elements.namedItem("issue") as HTMLTextAreaElement).value;
    const text = `*SERVICE COMPLAINT*%0A%0AName: ${name}%0APhone: ${phone}%0AProduct: ${product}%0AIssue: ${issue}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg space-y-4">
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
  );
}