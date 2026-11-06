import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy | Aar Kay Electronics",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <h1 className="text-3xl md:text-4xl font-bold text-navy font-sora mb-6">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-6">Last updated: {new Date().toLocaleDateString("en-IN")}</p>

          <div className="space-y-6 text-gray-600 leading-relaxed text-sm">
            <p>
              Aar Kay Electronics (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy. This policy explains what data we collect and how we use it, in compliance with India&apos;s Digital Personal Data Protection Act (DPDP) 2023.
            </p>

            <h2 className="text-xl font-bold text-navy font-sora mt-8">1. Data We Collect</h2>
            <p>
              When you submit a form, contact us on WhatsApp, or chat with our bot, we may collect: your name, phone number, city, product interest, and query details. We do not automatically collect personal data from visitors browsing the site.
            </p>

            <h2 className="text-xl font-bold text-navy font-sora mt-8">2. How We Use Your Data</h2>
            <p>
              We use your data only to respond to enquiries, provide quotes, assist with loan/subsidy applications, and offer after-sales support. We do not sell or rent your data to third parties.
            </p>

            <h2 className="text-xl font-bold text-navy font-sora mt-8">3. WhatsApp Communication</h2>
            <p>
              When you click a WhatsApp link on our site, you initiate a conversation with us. WhatsApp&apos;s own privacy policy applies to messages sent through the platform.
            </p>

            <h2 className="text-xl font-bold text-navy font-sora mt-8">4. Cookies & Analytics</h2>
            <p>
              We use Google Analytics 4 and Meta Pixel to understand site traffic (pages visited, source). These tools collect anonymous data. You can disable cookies in your browser.
            </p>

            <h2 className="text-xl font-bold text-navy font-sora mt-8">5. Your Rights</h2>
            <p>
              You can request access, correction, or deletion of your personal data by contacting us on WhatsApp. We will respond within a reasonable time.
            </p>

            <h2 className="text-xl font-bold text-navy font-sora mt-8">6. Contact</h2>
            <p>
              For privacy concerns, WhatsApp us at <strong>+91 99999 99999</strong> or email <strong>info@aarkay.com</strong>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}