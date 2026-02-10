import { Crown, Shield, Shirt, Users, Star, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/landing/FooterSection";

const experienceItems = [
  {
    icon: Crown,
    title: "Personal Locker Room",
    description: "Every athlete receives their own dedicated locker space — a professional home base that reinforces ownership, accountability, and daily routine. It's not just storage — it's a symbol of commitment.",
    features: ["Assigned personal locker", "Secure storage for gear", "Professional team environment", "Builds daily discipline"]
  },
  {
    icon: Shield,
    title: "Pro-Grade Equipment",
    description: "Athletes train with the same caliber of equipment used at the collegiate and professional level. We provide what they need so they can focus on getting better.",
    features: ["Game bats & training bats", "Catching & fielding gear", "Rapsodo & HitTrax access", "Weighted balls & resistance tools"]
  },
  {
    icon: Shirt,
    title: "LPA Branded Attire",
    description: "Custom team apparel that builds identity, pride, and belonging. When athletes wear the LPA brand, they represent something bigger than themselves.",
    features: ["Custom jerseys & game uniforms", "Practice & training gear", "Team travel apparel", "Seasonal gear drops"]
  },
  {
    icon: Users,
    title: "Team Culture & Identity",
    description: "The gear and locker room aren't just perks — they're part of a culture built on standards, pride, and accountability. Every detail reinforces what it means to be an LPA athlete.",
    features: ["Team-first mentality", "Accountability standards", "Brotherhood & belonging", "Represent the brand daily"]
  },
  {
    icon: Dumbbell,
    title: "Training-Ready Every Day",
    description: "With gear on-site and everything organized, athletes walk in and get to work. No excuses, no missing equipment — just focused development from day one.",
    features: ["Everything on-site", "No gear to carry daily", "Organized & ready", "Zero wasted time"]
  },
  {
    icon: Star,
    title: "The LPA Standard",
    description: "From the locker room to the field, every touchpoint reflects a professional standard that prepares athletes for what's next — college ball and beyond.",
    features: ["College-prep environment", "Professional presentation", "Attention to detail", "Next-level readiness"]
  },
];

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
      <div className="container mx-auto px-4 md:px-6 lg:px-16 max-w-5xl pb-8 md:pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-oswald text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
            At LPA, every detail is designed to build identity, discipline, and pride. From personal locker rooms to pro-grade equipment and custom branded attire — athletes don't just train here, they belong here.
          </p>
        </div>
      </div>

      {/* Experience Grid */}
      <div className="container mx-auto px-4 md:px-6 lg:px-16 max-w-6xl pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {experienceItems.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-card/40 backdrop-blur-sm border border-border/30 p-5 lg:p-6 hover:border-primary/50 transition-all duration-300"
              style={{ boxShadow: '0 15px 30px -10px rgba(0,0,0,0.4)' }}
            >
              {/* Hover effects */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -inset-px bg-gradient-to-b from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon & Title */}
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

              {/* Description */}
              <p className="relative font-oswald text-xs lg:text-sm text-muted-foreground leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Features */}
              <div className="relative space-y-2">
                {item.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    <span className="font-oswald text-xs lg:text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-primary/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="font-oswald text-sm md:text-base text-muted-foreground mb-5">
            Ready to see it in person?
          </p>
          <Link to="/appointments">
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-widest text-base md:text-lg px-8 md:px-12 py-5 md:py-6 h-auto border-glow transition-all duration-300 hover:scale-105"
            >
              Book a Tour
            </Button>
          </Link>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default Experience;
