import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Gift, Shield, Timer } from "lucide-react";

interface CTASectionProps {
  onCtaClick?: () => void;
}

const includes = [
  { item: "Velocity & Metrics Testing", value: "$75", desc: "Know exactly where you stack up against recruitable players" },
  { item: "Video Mechanics Analysis", value: "$100", desc: "Frame-by-frame breakdown of your swing or delivery" },
  { item: "Strength & Mobility Screen", value: "$50", desc: "Find the physical gaps holding back performance" },
  { item: "Personalized Development Plan", value: "$150", desc: "A clear roadmap with exact steps to reach the next level" },
  { item: "College Recruiting Assessment", value: "Priceless", desc: "Honest feedback on where you stand for college ball" },
  { item: "Full Facility Tour", value: "Included", desc: "See every inch of where elite athletes train" },
];

const CTASection = ({ onCtaClick }: CTASectionProps) => {
  return (
    <section className="relative py-12 md:py-20 lg:py-36 xl:py-44 overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-primary/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/15 via-transparent to-transparent" />
      
      {/* Large atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[900px] bg-primary/15 rounded-full blur-[250px]" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px]" />
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      
      {/* Vignette */}
      <div className="absolute inset-0 cinematic-vignette opacity-40" />
      
      <div className="container relative mx-auto px-4 md:px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-6 md:mb-10 lg:mb-14 xl:mb-16">
          <div 
            className="inline-flex items-center gap-1.5 md:gap-2 bg-primary text-primary-foreground font-bebas text-xs md:text-sm lg:text-base px-3 md:px-5 py-1.5 md:py-2 mb-3 md:mb-5 uppercase tracking-[0.15em] md:tracking-[0.2em] pulse-glow"
          >
            <Gift className="w-3 h-3 md:w-4 md:h-4" />
            100% Free — No Catch
          </div>
          
          <h2 className="font-bebas text-2xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground uppercase leading-none mb-3 md:mb-5 lg:mb-6 drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            Your Free College-Ready
            <span className="block text-primary glow-primary-ultra">
              Player Evaluation
            </span>
          </h2>
          
          <p className="font-oswald text-sm md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Most parents spend years wondering if their athlete has what it takes. In 60 minutes, 
            you'll know exactly where they stand and what needs to happen next.
          </p>
        </div>

        {/* Value Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-10 lg:mb-14">
          {includes.map((item, index) => (
            <div 
              key={index} 
              className="group bg-background/40 backdrop-blur-sm border border-border/40 p-5 lg:p-6 hover:border-primary/50 transition-all duration-500 hover:bg-background/60"
              style={{ boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5)' }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm pointer-events-none" />
              
              <div className="relative flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-bebas text-base lg:text-lg text-foreground uppercase">{item.item}</span>
                </div>
                <span className="font-bebas text-base lg:text-lg text-primary glow-primary">{item.value}</span>
              </div>
              <p className="relative font-oswald text-sm lg:text-base text-muted-foreground pl-8">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="text-center">
          <div 
            className="inline-block bg-background/60 backdrop-blur-sm border border-primary/30 p-5 md:p-8 lg:p-12"
            style={{ boxShadow: '0 0 100px hsl(var(--primary) / 0.2), 0 40px 80px -20px rgba(0,0,0,0.6)' }}
          >
            <p className="font-bebas text-lg md:text-2xl lg:text-3xl text-muted-foreground mb-1 md:mb-2">
              Total Value: <span className="line-through opacity-70">$375+</span>
            </p>
            <p className="font-bebas text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-primary mb-4 md:mb-6 glow-primary-intense">
              Yours Free Today
            </p>
            
            <Button 
              size="lg"
              onClick={onCtaClick}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-[0.1em] md:tracking-[0.15em] text-base md:text-xl lg:text-2xl px-6 md:px-10 lg:px-12 py-4 md:py-6 lg:py-8 h-auto mb-4 md:mb-6 transition-all duration-300 hover:scale-105"
              style={{ boxShadow: '0 0 80px hsl(var(--primary) / 0.5), 0 20px 40px -10px rgba(0,0,0,0.5)' }}
            >
              Book My Free Evaluation
              <ArrowRight className="ml-2 md:ml-3 w-4 h-4 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-muted-foreground">
              <div className="flex items-center gap-1.5 md:gap-2 group">
                <Timer className="w-3 h-3 md:w-4 md:h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-oswald text-xs md:text-sm lg:text-base">60-Minute Session</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 group">
                <Shield className="w-3 h-3 md:w-4 md:h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-oswald text-xs md:text-sm lg:text-base">No Obligation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;