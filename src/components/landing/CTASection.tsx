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
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="absolute inset-0" style={{ backgroundColor: '#0a0a0a' }} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-primary/10 rounded-full blur-[200px]" />
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container relative mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bebas text-xs px-4 py-1.5 mb-4 uppercase tracking-[0.2em]">
            <Gift className="w-3 h-3" />
            100% Free — No Catch
          </div>
          
          <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl text-foreground uppercase leading-none mb-4">
            Your Free College-Ready
            <span className="block text-primary" style={{ textShadow: '0 0 60px hsl(271 81% 56% / 0.4)' }}>
              Player Evaluation
            </span>
          </h2>
          
          <p className="font-oswald text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Most parents spend years wondering if their athlete has what it takes. In 60 minutes, 
            you'll know exactly where they stand and what needs to happen next.
          </p>
        </div>

        {/* Value Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mb-8 lg:mb-10">
          {includes.map((item, index) => (
            <div key={index} className="bg-background/50 backdrop-blur border border-border/40 p-4 hover:border-primary/40 transition-colors group">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="font-bebas text-sm text-foreground uppercase">{item.item}</span>
                </div>
                <span className="font-bebas text-sm text-primary">{item.value}</span>
              </div>
              <p className="font-oswald text-xs text-muted-foreground pl-6">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="text-center">
          <div className="inline-block bg-background/70 backdrop-blur border border-border/40 p-6 lg:p-8">
            <p className="font-bebas text-xl lg:text-2xl text-muted-foreground mb-1">
              Total Value: <span className="line-through">$375+</span>
            </p>
            <p className="font-bebas text-3xl lg:text-4xl text-primary mb-4">
              Yours Free Today
            </p>
            
            <Button 
              size="lg"
              onClick={onCtaClick}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-[0.15em] text-lg px-8 py-5 h-auto mb-4"
              style={{ boxShadow: '0 0 50px hsl(271 81% 56% / 0.4)' }}
            >
              Book My Free Evaluation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Timer className="w-3 h-3 text-primary" />
                <span className="font-oswald text-xs">60-Minute Session</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-3 h-3 text-primary" />
                <span className="font-oswald text-xs">No Obligation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;