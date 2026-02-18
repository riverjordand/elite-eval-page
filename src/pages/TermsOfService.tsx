import Navigation from "@/components/Navigation";
import FooterSection from "@/components/landing/FooterSection";

const sections = [
  {
    num: "1",
    title: "Eligibility",
    content: "You must be at least 13 years of age to use our Service. Certain features, such as submitting inquiries or opting into communications, may require you to be 18 or older and have a valid payment method. If you are using our Service on behalf of another person or entity, you represent that you are authorized to accept these Terms on their behalf, and they agree to be responsible for any violations.",
  },
  {
    num: "2",
    title: "Communications Consent",
    content: `By providing your contact information (e.g., phone number or email) through our forms, you consent to receive communications from us, including marketing messages via SMS or email, only if you explicitly opt in via our consent checkboxes. Phone numbers are optional and not required to use our Service. You may opt out at any time by replying "STOP" to SMS messages or clicking the unsubscribe link in emails. See our Privacy Policy for details.`,
  },
  {
    num: "3",
    title: "User Content",
    content: `Our Service may allow you to submit content, such as messages, inquiries, or feedback ("User Content"). You retain all rights to your User Content, except for the license you grant below. You grant Legendary Prep Academy a nonexclusive, royalty-free, worldwide license to use, reproduce, modify, and display your User Content in connection with providing our Service. You represent that your User Content is accurate, does not violate these Terms, and will not infringe any third-party rights.`,
  },
  {
    num: "4",
    title: "Prohibited Conduct and Content",
    content: "You agree not to engage in the following:",
    list: [
      "Engage in harassing, threatening, or unlawful conduct.",
      "Use another user's account without authorization.",
      "Interfere with or disrupt our Service or servers.",
      "Attempt to reverse engineer or access unauthorized areas of our Service.",
      "Use our Service for any illegal or unauthorized purpose.",
    ],
    footer: "You may not post content that is unlawful, defamatory, obscene, or infringes any third-party rights. We may remove User Content at our discretion without notice.",
  },
  {
    num: "5",
    title: "Intellectual Property",
    content: `All content on our Service, including text, images, logos, and trademarks ("Our Content"), is owned by or licensed to Legendary Prep Academy. You are granted a limited, nonexclusive, nontransferable license to access Our Content for personal use, subject to these Terms. You may not copy, distribute, or create derivative works of Our Content without our written permission.`,
  },
  {
    num: "6",
    title: "Feedback",
    content: `Any feedback, suggestions, or ideas you submit about our Service ("Feedback") is non-confidential. We may use and disseminate Feedback for any purpose without compensation to you.`,
  },
  {
    num: "7",
    title: "Disclaimers",
    content: `Our Service is provided "as is" without warranties of any kind, express or implied, including merchantability or fitness for a particular purpose. We do not guarantee that our Service is error-free, secure, or free of viruses. You use our Service at your own risk.`,
  },
  {
    num: "8",
    title: "Limitation of Liability",
    content: `Legendary Prep Academy and its affiliates will not be liable for any indirect, consequential, or punitive damages arising from your use of our Service, even if advised of the possibility of such damages. Our total liability for any claim is limited to the amount you paid, if any, to use our Service. Some jurisdictions may not allow these limitations, so they may not apply to you.`,
  },
  {
    num: "9",
    title: "Indemnification",
    content: `You agree to indemnify and hold harmless Legendary Prep Academy, its officers, directors, and employees from any claims, damages, or costs (including attorney's fees) arising from your use of our Service, your User Content, or your violation of these Terms or any third-party rights.`,
  },
  {
    num: "10",
    title: "Dispute Resolution",
    content: `Any disputes arising from these Terms or our Service will be resolved through binding arbitration in Scottsdale, AZ, under the rules of the American Arbitration Association. You waive any right to a jury trial or to bring a class action. Arbitration will be conducted on an individual basis. You may opt out of arbitration within 30 days of accepting these Terms by emailing info@legendaryprepacademy.com with your full name and intent to opt out. Claims must be filed within one year of arising, or they are permanently barred.`,
  },
  {
    num: "11",
    title: "Governing Law",
    content: `These Terms are governed by the laws of Arizona, without regard to conflict of law principles. Any disputes not subject to arbitration will be resolved in the state or federal courts of Scottsdale, AZ.`,
  },
  {
    num: "12",
    title: "Changes to These Terms",
    content: `We may update these Terms periodically. Changes will be posted on our website with an updated "Last Updated" date. Your continued use of our Service after changes are posted constitutes acceptance of the updated Terms.`,
  },
  {
    num: "13",
    title: "Termination",
    content: `We may terminate or suspend your access to our Service at our discretion without notice if you violate these Terms. We are not liable for any loss resulting from such termination.`,
  },
  {
    num: "14",
    title: "Severability",
    content: `If any provision of these Terms is found unlawful or unenforceable, it will be severed, and the remaining provisions will remain in effect.`,
  },
  {
    num: "15",
    title: "Contact Us",
    content: `For questions about these Terms, contact us at info@legendaryprepacademy.com or 9382 E Bahia Dr B101 Scottsdale, AZ 85260.`,
  },
];

const TermsOfService = () => {
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
            Terms &amp; <span className="text-primary">Conditions</span>
          </h1>
          <p className="font-oswald text-sm text-foreground/30 uppercase tracking-wider">
            Last Updated: October 1, 2025
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 border-b border-border/10">
        <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
          <p className="font-oswald text-sm text-foreground/50 leading-relaxed">
            Welcome to Legendary Prep Academy. These Terms and Conditions ("Terms") govern your access to and use of our website (https://legendaryprepacademy.com), services, and communications (collectively, our "Service"). By accessing or using our Service, you agree to these Terms. If you do not agree, please do not access or use our Service.
          </p>
          <p className="font-oswald text-sm text-foreground/50 leading-relaxed mt-4">
            These Terms do not alter any other agreements you may have with Legendary Prep Academy for products or services. For questions about these Terms or our Service, contact us at{" "}
            <a href="mailto:info@legendaryprepacademy.com" className="text-primary hover:text-primary/80 transition-colors">
              info@legendaryprepacademy.com
            </a>.
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
                  {s.footer && (
                    <p className="font-oswald text-sm text-foreground/40 leading-relaxed mt-3">{s.footer}</p>
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

export default TermsOfService;
