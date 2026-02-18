import Navigation from "@/components/Navigation";
import FooterSection from "@/components/landing/FooterSection";

const Appointments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-20 md:pt-24 overflow-hidden">
        <div className="relative h-36 md:h-64 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-card via-background/80 to-background" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[160px]" />
          <div className="relative text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-px bg-primary" />
              <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">Elite Facility · Scottsdale, AZ</span>
              <div className="w-8 h-px bg-primary" />
            </div>
            <h1 className="font-bebas text-fluid-5xl uppercase leading-none">
              Book a <span className="text-primary">Tour</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Booking Embed */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="rounded-2xl overflow-hidden border border-border/20 shadow-2xl shadow-black/40 bg-card/30">
            <div className="bg-card/60 border-b border-border/20 px-5 py-3 flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
              <span className="font-oswald text-[10px] text-foreground/20 uppercase tracking-widest ml-2">Schedule Your Visit</span>
            </div>
            <div className="bg-background/40">
              <iframe
                src="https://outlook.office.com/book/LPATour@legendaryprepacademy.com/"
                style={{ border: 0, width: "100%", height: "100vh", display: "block" }}
                scrolling="yes"
                frameBorder={0}
                title="Book a Tour – Legendary Prep Academy"
              />
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Appointments;

