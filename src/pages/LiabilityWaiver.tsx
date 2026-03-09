import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/landing/FooterSection";

const LiabilityWaiver = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

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
            Liability <span className="text-primary">Waiver</span>
          </h1>
          <p className="font-oswald text-sm text-foreground/30 uppercase tracking-wider">
            Please read carefully before signing
          </p>
        </div>
      </section>

      {/* GHL Embedded Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/hZVAkXCko233qGzuN0KR"
            style={{ width: "100%", height: "1855px", border: "none", borderRadius: "3px" }}
            id="inline-hZVAkXCko233qGzuN0KR"
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Liability Waiver"
            data-height="1855"
            data-layout-iframe-id="inline-hZVAkXCko233qGzuN0KR"
            data-form-id="hZVAkXCko233qGzuN0KR"
            title="Liability Waiver"
          />
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default LiabilityWaiver;