import Navigation from "@/components/Navigation";
import FooterSection from "@/components/landing/FooterSection";
import { Link } from "react-router-dom";

const Schedule = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden border-b border-border/10">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[180px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-16 relative">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-primary" />
            <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">2025–26 Season</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <div>
              <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.85] mb-6">
                Game<br /><span className="text-primary">Schedule</span>
              </h1>
              <p className="font-oswald text-sm text-foreground/40 leading-relaxed max-w-md">
                Stay up to date with all LPA games, tournaments, and events across every team. Updated in real time throughout the season.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:justify-end">
              <div className="bg-card/50 border border-border/20 rounded-xl p-5 flex-1">
                <p className="font-bebas text-3xl text-primary leading-none">Spring</p>
                <p className="font-oswald text-xs text-foreground/30 mt-1 uppercase tracking-wider">NAA League Play</p>
              </div>
              <div className="bg-card/50 border border-border/20 rounded-xl p-5 flex-1">
                <p className="font-bebas text-3xl text-foreground leading-none">Fall</p>
                <p className="font-oswald text-xs text-foreground/30 mt-1 uppercase tracking-wider">College &amp; HS Circuit</p>
              </div>
              <div className="bg-card/50 border border-border/20 rounded-xl p-5 flex-1">
                <p className="font-bebas text-3xl text-foreground leading-none">Summer</p>
                <p className="font-oswald text-xs text-foreground/30 mt-1 uppercase tracking-wider">Club Tournaments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Embed */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-primary" />
              <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">Live Calendar</span>
            </div>
            <Link
              to="/contact"
              className="font-oswald text-xs text-foreground/30 hover:text-primary uppercase tracking-[0.2em] transition-colors"
            >
              Questions? Contact Us →
            </Link>
          </div>

          {/* Iframe wrapper */}
          <div className="rounded-2xl overflow-hidden border border-border/20 shadow-2xl shadow-black/40 bg-card/30">
            <div className="bg-card/60 border-b border-border/20 px-5 py-3 flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
              <span className="font-oswald text-[10px] text-foreground/20 uppercase tracking-widest ml-2">LPA Team Calendar</span>
            </div>
            <iframe
              src="https://LPA-Calendar.replit.app/embed"
              width="100%"
              height="800"
              style={{ border: "none", display: "block" }}
              title="LPA Team Calendar"
            />
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-12 border-t border-border/10">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-bebas text-2xl md:text-3xl uppercase">Want to come watch?</h3>
              <p className="font-oswald text-sm text-foreground/30 mt-1">Book a facility tour and see the team in action.</p>
            </div>
            <Link
              to="/appointments"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-[0.2em] text-sm px-8 py-4 rounded transition-all duration-300 hover:scale-105"
            >
              Schedule a Tour
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Schedule;
