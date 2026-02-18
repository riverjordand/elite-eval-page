import { Trophy, Shield, Shirt, Dumbbell, Utensils, Scissors, Lock, Zap, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/landing/FooterSection";
const lockerRoomImg = "https://xhqqxukgsaxabyvbfinn.supabase.co/storage/v1/object/public/video/Pro-GradeLockerRoom";
const equipmentImg = "https://xhqqxukgsaxabyvbfinn.supabase.co/storage/v1/object/public/video/Pro-GradeEquipment";
const attireImg = "https://xhqqxukgsaxabyvbfinn.supabase.co/storage/v1/object/public/video/progradeuniform";

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
  { icon: Utensils, title: "Daily Meals", description: "Athletes are fed daily — fueling performance with proper nutrition so they can focus on development.", image: "/action-10.jpg" },
  { icon: Scissors, title: "On-Site Barber", description: "Look good, play good. Our on-site barber keeps athletes sharp and camera-ready for game day and showcases.", image: "/action-15.jpg" },
  { icon: Shirt, title: "Gear & Swag Drops", description: "Seasonal branded apparel drops — custom jerseys, practice gear, travel fits, and exclusive LPA merch.", image: attireImg },
  { icon: Lock, title: "Personal Locker Room", description: "Every athlete gets their own assigned locker — a professional home base that builds routine and accountability.", image: lockerRoomImg },
  { icon: Shield, title: "Pro-Grade Equipment", description: "Game bats, HitTrax, Rapsodo, weighted balls — the same tools used at the collegiate and professional level.", image: equipmentImg },
  { icon: Zap, title: "Recovery & Arm Care", description: "Dedicated recovery protocols, arm care programming, and injury prevention built into every training day.", image: "/action-20.jpg" },
];

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
          <div className="relative text-center px-fluid-container-px">
            <p className="font-oswald text-fluid-xs text-accent uppercase tracking-[0.3em] mb-2 glow-accent">
              The Full Athlete Experience
            </p>
            <h1 className="font-bebas text-fluid-5xl uppercase leading-none">
              More Than <span className="text-primary">Training</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <div className="container mx-auto px-fluid-container-px max-w-5xl pb-fluid-lg">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="font-oswald text-fluid-base text-muted-foreground leading-relaxed">
              At LPA, every detail is designed to build identity, discipline, and pride. From our elite level coaching mentorship to pro-grade facilities and custom branded attire — athletes don't just train here, they belong here.
            </p>
          </div>
        </SectionReveal>
      </div>

      {/* Day in the Life Video */}
      <div className="container mx-auto px-fluid-container-px max-w-6xl pb-fluid-xl">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-primary" />
            <span className="font-oswald text-fluid-xs text-accent uppercase tracking-[0.4em]">See It For Yourself</span>
          </div>
          <h2 className="font-bebas text-fluid-3xl text-foreground uppercase leading-[0.88] mb-fluid-md">
            A Day in <span className="text-primary">the Life</span>
          </h2>

          {/* Main video placeholder */}
          <div className="relative aspect-video bg-card/60 border border-border/30 overflow-hidden group cursor-pointer mb-4">
            <img src="/action-05.jpg" alt="Day in the life at LPA" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.4)' }}>
                <Play className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground ml-1" fill="currentColor" />
              </div>
              <p className="font-bebas text-fluid-lg text-foreground/60 uppercase tracking-wider">Coming Soon</p>
            </div>
          </div>

          {/* Secondary video placeholders */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-fluid-gap">
            {[
              { src: "/action-12.jpg", label: "Morning Training" },
              { src: "/action-25.jpg", label: "Team Culture" },
              { src: "/action-30.jpg", label: "Game Day Prep" },
            ].map((vid, i) => (
              <div key={i} className="relative aspect-video bg-card/60 border border-border/20 overflow-hidden group cursor-pointer">
                <img src={vid.src} alt={vid.label} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-4 h-4 text-primary-foreground ml-0.5" fill="currentColor" />
                  </div>
                  <p className="font-bebas text-fluid-xs text-foreground/50 uppercase tracking-wider">{vid.label}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>

      {/* Development Pillars */}
      <div className="container mx-auto px-fluid-container-px max-w-6xl pb-fluid-xl">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-primary" />
            <span className="font-oswald text-fluid-xs text-accent uppercase tracking-[0.4em]">On The Field</span>
          </div>
          <h2 className="font-bebas text-fluid-3xl text-foreground uppercase leading-[0.88] mb-fluid-lg">
            Built for the <span className="text-primary">Next Level</span>
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
          {developmentPillars.map((item, index) => (
            <SectionReveal key={index} delay={index * 150}>
              <div className="group relative bg-card/40 backdrop-blur-sm border border-border/30 p-fluid-md hover:border-primary/50 transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center gap-3 mb-fluid-xs">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/15 flex items-center justify-center flex-shrink-0" style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.15)' }}>
                    <item.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bebas text-fluid-xl text-foreground uppercase leading-tight">{item.title}</h3>
                </div>
                <p className="relative font-oswald text-fluid-xs text-muted-foreground leading-relaxed mb-fluid-sm">{item.description}</p>
                <div className="relative space-y-2">
                  {item.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      <span className="font-oswald text-fluid-xs text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-primary/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>

      {/* Lifestyle Perks */}
      <div className="relative py-fluid-xl">
        <div className="absolute inset-0 bg-card/30" />
        <div className="container relative mx-auto px-fluid-container-px max-w-6xl">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-primary" />
              <span className="font-oswald text-fluid-xs text-accent uppercase tracking-[0.4em]">Off The Field</span>
            </div>
            <h2 className="font-bebas text-fluid-3xl text-foreground uppercase leading-[0.88] mb-3">
              A Day at <span className="text-primary">LPA</span>
            </h2>
            <p className="font-oswald text-fluid-xs text-muted-foreground max-w-xl mb-fluid-lg">
              Parents ask what a typical day looks like. Here's the answer — every detail is handled so athletes can focus on one thing: getting better.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-fluid-gap">
            {lifestylePerks.map((perk, index) => (
              <SectionReveal key={index} delay={index * 100}>
                <div className="group relative bg-background/60 border border-border/20 overflow-hidden hover:border-primary/40 transition-all duration-300 h-full">
                  <div className="relative h-40 md:h-48 overflow-hidden">
                    <img src={perk.image} alt={perk.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <div className="w-8 h-8 bg-primary/90 flex items-center justify-center">
                        <perk.icon className="w-4 h-4 text-primary-foreground" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                  <div className="p-fluid-sm">
                    <h3 className="font-bebas text-fluid-lg text-foreground uppercase mb-2">{perk.title}</h3>
                    <p className="font-oswald text-fluid-xs text-muted-foreground leading-relaxed">{perk.description}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-primary/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="container mx-auto px-fluid-container-px max-w-6xl py-fluid-xl">
        <SectionReveal>
          <div className="text-center">
            <p className="font-oswald text-fluid-base text-muted-foreground mb-fluid-sm">
              Ready to see it in person?
            </p>
            <Link to="/appointments">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-widest text-fluid-lg px-fluid-lg py-fluid-sm h-auto border-glow transition-all duration-300 hover:scale-105">
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
