import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/landing/FooterSection";

const Contact = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden border-b border-border/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[180px] pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-16 relative">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-primary" />
            <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">Get In Touch</span>
          </div>
          <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.85] mb-4">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="font-oswald text-sm text-foreground/40 leading-relaxed max-w-lg">
            Have questions? Fill out the form below and our team will get back to you shortly.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-primary" />
            <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">Contact Form</span>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border/20 shadow-2xl shadow-black/40 bg-card/30">
            <div className="bg-card/60 border-b border-border/20 px-5 py-3 flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
              <span className="font-oswald text-[10px] text-foreground/20 uppercase tracking-widest ml-2">Contact Us</span>
            </div>
            <div className="p-4 md:p-8 bg-background/40">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/Rw1AsllnPwMZN1s8ZMWf"
                style={{ width: "100%", height: "842px", border: "none", borderRadius: "3px", display: "block" }}
                id="inline-Rw1AsllnPwMZN1s8ZMWf"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Contact Us"
                data-height="842"
                data-layout-iframe-id="inline-Rw1AsllnPwMZN1s8ZMWf"
                data-form-id="Rw1AsllnPwMZN1s8ZMWf"
                title="Contact Us"
              />
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Contact;
