import { Trophy, Shield, Shirt, Dumbbell, Utensils, Scissors, Lock, Zap, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/landing/FooterSection";
import lockerRoomImg from "@/assets/experience-locker-room.jpg";
import equipmentImg from "@/assets/experience-equipment.jpg";
import attireImg from "@/assets/experience-attire.jpg";

const developmentPillars = [
  {
    icon: Trophy,
    title: "College & MLB Recruiting",
    description: "The coaching staff has access through their playing careers to high level college and MLB scouts. Being open for little over a year LPA has already put 12 athletes at the next level.",
    features: ["12 players committed in 18 months", "MLB 4-corners scout on staff", "D1, SEC, and MiLB experience", "Scout focused tournaments and showcases"],
  },
  {
    icon: Dumbbell,
    title: "Development Focused",
    description: "Winning is not the LPA focus, it is the by-product of development. We focus on getting the player to the next level, period.",
    features: ["Position specific", "Strength & conditioning", "Recovery & rehab", "Mental performance"],
  },
];

const lifestylePerks = [
  {
    icon: Utensils,
    title: "Daily Meals",
    description: "Athletes are fed daily — fueling performance with proper nutrition so they can focus on development.",
  },
  {
    icon: Scissors,
    title: "On-Site Barber",
    description: "Look good, play good. Our on-site barber keeps athletes sharp and camera-ready for game day and showcases.",
  },
  {
    icon: Shirt,
    title: "Gear & Swag Drops",
    description: "Seasonal branded apparel drops — custom jerseys, practice gear, travel fits, and exclusive LPA merch.",
  },
  {
    icon: Lock,
    title: "Personal Locker Room",
    description: "Every athlete gets their own assigned locker — a professional home base that builds routine and accountability.",
  },
  {
    icon: Shield,
    title: "Pro-Grade Equipment",
    description: "Game bats, HitTrax, Rapsodo, weighted balls — the same tools used at the collegiate and professional level.",
  },
  {
    icon: Zap,
    title: "Recovery & Arm Care",
    description: "Dedicated recovery protocols, arm care programming, and injury prevention built into every training day.",
  },
];

const EditorialImage = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
  </div>
);

const SectionReveal = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Experience = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-20 md:pt-24 overflow-hidden">
        <div className="relative h-48 md:h-72 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-card via-background/80 to-background" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[160px]" />
          <div className="relative text-center px-4">
            <p className="font-oswald text-xs md:text-sm text-accent uppercase tracking-[0.3em] mb-2 glow-accent">
              The Full Athlete Experience
            </p>
            <h1 className="font-bebas text-4xl sm:text-5xl md:text-7xl lg:text-8xl uppercase leading-none">
              More Than <span className="text-primary">Training</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <div className="container mx-auto px-4 md:px-6 lg:px-16 max-w-5xl pb-12 md:pb-20">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="font-oswald text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              At LPA, every detail is designed to build identity, discipline, and pride. From our elite level coaching mentorship to pro-grade facilities and custom branded attire — athletes don't just train here, they belong here.
            </p>
          </div>
        </SectionReveal>
      </div>

      {/* Editorial Photo Strip */}
      <div className="container mx-auto px-4 md:px-6 lg:px-16 max-w-7xl pb-16 md:pb-24">
        <SectionReveal>
          <div className="grid grid-cols-3 gap-0.5 h-48 md:h-72 lg:h-96">
            <EditorialImage src={lockerRoomImg} alt="LPA locker room" />
            <EditorialImage src={equipmentImg} alt="Pro-grade equipment" />
            <EditorialImage src={attireImg} alt="LPA branded attire" />
          </div>
        </SectionReveal>
      </div>

      {/* Development Pillars */}
      <div className="container mx-auto px-4 md:px-6 lg:px-16 max-w-6xl pb-16 md:pb-24">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-primary" />
            <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">On The Field</span>
          </div>
          <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl text-foreground uppercase leading-[0.88] mb-10 md:mb-14">
            Built for the <span className="text-primary">Next Level</span>
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
          {developmentPillars.map((item, index) => (
            <SectionReveal key={index} delay={index * 150}>
              <div className="group relative bg-card/40 backdrop-blur-sm border border-border/30 p-6 lg:p-8 hover:border-primary/50 transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/15 flex items-center justify-center flex-shrink-0"
                    style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.15)' }}
                  >
                    <item.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bebas text-xl lg:text-2xl text-foreground uppercase leading-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="relative font-oswald text-xs lg:text-sm text-muted-foreground leading-relaxed mb-5">
                  {item.description}
                </p>

                <div className="relative space-y-2">
                  {item.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      <span className="font-oswald text-xs lg:text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-primary/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>

      {/* Lifestyle Perks — A Day at LPA */}
      <div className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-card/30" />
        <div className="container relative mx-auto px-4 md:px-6 lg:px-16 max-w-6xl">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-primary" />
              <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">Off The Field</span>
            </div>
            <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl text-foreground uppercase leading-[0.88] mb-3">
              A Day at <span className="text-primary">LPA</span>
            </h2>
            <p className="font-oswald text-xs md:text-sm text-muted-foreground max-w-xl mb-10 md:mb-14">
              Parents ask what a typical day looks like. Here's the answer — every detail is handled so athletes can focus on one thing: getting better.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {lifestylePerks.map((perk, index) => (
              <SectionReveal key={index} delay={index * 100}>
                <div className="group relative bg-background/60 border border-border/20 p-5 lg:p-6 hover:border-primary/40 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative">
                    <div className="w-9 h-9 bg-primary/10 flex items-center justify-center mb-4">
                      <perk.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bebas text-lg lg:text-xl text-foreground uppercase mb-2">{perk.title}</h3>
                    <p className="font-oswald text-xs text-muted-foreground leading-relaxed">{perk.description}</p>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-primary/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="container mx-auto px-4 md:px-6 lg:px-16 max-w-6xl py-16 md:py-24">
        <SectionReveal>
          <div className="text-center">
            <p className="font-oswald text-sm md:text-base text-muted-foreground mb-5">
              Ready to see it in person?
            </p>
            <Link to="/appointments">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-widest text-base md:text-lg px-8 md:px-12 py-5 md:py-6 h-auto border-glow transition-all duration-300 hover:scale-105"
              >
                Book a Tour <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </SectionReveal>
      </div>

      <FooterSection />
    </div>
  );
};

export default Experience;