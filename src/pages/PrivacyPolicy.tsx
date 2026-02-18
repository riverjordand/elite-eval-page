import Navigation from "@/components/Navigation";
import FooterSection from "@/components/landing/FooterSection";

const sections = [
  {
    num: "1",
    title: "Information We Collect",
    content: "We may collect the following types of information:",
    list: [
      "Personal Information: Name, email address, phone number (optional), and other details you provide via forms or communications.",
      "Non-Personal Information: Browser type, IP address, and website usage data collected via cookies and analytics tools.",
    ],
  },
  {
    num: "2",
    title: "How We Use Your Information",
    content: "Your information is used to:",
    list: [
      "Respond to inquiries and provide services.",
      "Send marketing communications (e.g., SMS or email) only with your explicit consent.",
      "Improve our website and services through analytics.",
    ],
  },
  {
    num: "3",
    title: "Opt-In Consent for Communications",
    content: `We only send SMS or email marketing messages if you explicitly opt in. You can opt out at any time by replying "STOP" to SMS messages or clicking the unsubscribe link in emails.`,
  },
  {
    num: "4",
    title: "Data Sharing and Security",
    content: "We do not sell or share your personal information with third parties except as required by law or to provide services (e.g., with trusted service providers like Twilio for SMS). We use industry-standard encryption to protect your data.",
  },
  {
    num: "5",
    title: "Your Rights",
    content: "You have the right to access, update, or delete your personal information. Contact us at info@legendaryprepacademy.com to exercise these rights.",
  },
  {
    num: "6",
    title: "Updates to This Policy",
    content: "We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date.",
  },
  {
    num: "7",
    title: "Contact Us",
    content: "For questions about this Privacy Policy, contact us at info@legendaryprepacademy.com or 9382 E Bahia Dr B101, Scottsdale, Arizona 85260.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-border/10">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">Legal</span>
          </div>
          <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.88] mb-4">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="font-oswald text-sm text-foreground/30 uppercase tracking-wider">
            Effective Date: October 1, 2025
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 border-b border-border/10">
        <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
          <p className="font-oswald text-sm text-foreground/50 leading-relaxed">
            At Legendary Prep Academy, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, store, and protect your data when you interact with our website, services, or communications.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
          <div className="divide-y divide-border/10">
            {sections.map((s) => (
              <div key={s.num} className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-2">
                  <span className="font-bebas text-4xl text-foreground/10">{s.num.padStart(2, "0")}</span>
                </div>
                <div className="md:col-span-10">
                  <h2 className="font-bebas text-xl md:text-2xl uppercase text-foreground mb-3 tracking-wide">
                    {s.title}
                  </h2>
                  {s.content && (
                    <p className="font-oswald text-sm text-foreground/40 leading-relaxed">{s.content}</p>
                  )}
                  {s.list && (
                    <ul className="mt-3 space-y-2">
                      {s.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="font-oswald text-sm text-foreground/40 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default PrivacyPolicy;
