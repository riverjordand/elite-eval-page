import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Users, Dumbbell, GraduationCap, Trophy, Activity, Flame } from "lucide-react";
import logoBadge from "@/assets/lpa-badge-seafoam.png";

const YOUTUBE_VIDEO_ID = "HqhgUta-pRE";

// GoHighLevel storefront — all "Register for Camp" CTAs link here
const STORE_URL = "https://store.legendaryprepacademy.com/camps";

const campSessions = [
  { id: "may", name: "May Camp", dates: "May 28th & 29th", times: "9am – 12pm", ages: "Ages 8–14", price: "$299" },
  { id: "june", name: "June Camp", dates: "June 17th & 18th", times: "9am – 12pm", ages: "Ages 8–14", price: "$299" },
  { id: "july", name: "July Camp", dates: "July 1st, 8th, 15th, 22nd, & 29th", times: "9am – 2pm", ages: "Ages 8–14", price: "Price Varies" },
];

const experienceFeatures = [
  { icon: Trophy, title: "Elite Coaching", desc: "Direct instruction from our pro and college-level coaching staff." },
  { icon: Activity, title: "Velocity & Mechanics", desc: "Data-driven throwing, hitting, and movement assessments." },
  { icon: Dumbbell, title: "Strength & Mobility", desc: "Sport-specific training built for long-term athlete development." },
  { icon: GraduationCap, title: "College-Readiness", desc: "Recruiting guidance and a personalized development plan." },
  { icon: Users, title: "High-Level Culture", desc: "Train alongside serious athletes in a disciplined environment." },
  { icon: Flame, title: "Full Facility Access", desc: "Cages, mounds, turf, weight room — everything you need." },
];

const Camps = () => {
  useEffect(() => {
    document.title = "LPA Summer Camps | Legendary Prep Academy";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Register for Legendary Prep Academy's elite summer baseball camps in Arizona. Velocity work, mechanics, strength training, and college-readiness coaching.";
    if (meta) meta.setAttribute("content", content);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Minimal header — logo only, no nav */}
      <header className="absolute top-0 left-0 right-0 z-50 py-5 px-6 lg:px-16">
        <Link to="/" className="inline-block">
          <img src={logoBadge} alt="Legendary Prep Academy" className="h-12 md:h-14 w-auto" />
        </Link>
      </header>

      {/* Hero + Video */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden border-b border-border/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[180px] pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-16 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-px bg-primary" />
              <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">Summer 2026</span>
              <div className="w-8 h-px bg-primary" />
            </div>
            <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.85] mb-5">
              Legendary <span className="text-primary">Summer Camps</span>
            </h1>
            <p className="font-oswald text-base md:text-lg text-foreground/60 max-w-2xl mx-auto mb-10">
              Arizona's premier baseball development experience. Built for serious middle and high school athletes who want to play at the next level.
            </p>

            {/* YouTube video embed */}
            <div className="relative aspect-video w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-border/20 shadow-2xl shadow-black/40 mb-8">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                title="LPA Summer Camps"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-[0.2em] text-sm md:text-base px-10 py-5 h-auto"
            >
              <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
                Register for Camp <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 1 — Camp Dates */}
      <section className="py-16 md:py-24 border-b border-border/10">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-primary" />
            <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">Camp Dates</span>
          </div>
          <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl uppercase leading-[0.9] mb-4">
            Pick Your <span className="text-primary">Session</span>
          </h2>
          <p className="font-oswald text-sm md:text-base text-foreground/50 max-w-xl mb-12">
            Limited spots per session. Reserve early — camps fill fast.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {campSessions.map((s) => (
              <div
                key={s.id}
                className="rounded-2xl border border-border/20 bg-card/30 p-6 hover:border-primary/40 hover:bg-card/50 transition-all"
              >
                <div className="flex items-center gap-2 mb-4 text-primary">
                  <Calendar className="w-4 h-4" />
                  <span className="font-oswald text-[10px] uppercase tracking-[0.3em]">{s.name}</span>
                </div>
                <h3 className="font-bebas text-2xl md:text-3xl uppercase leading-tight mb-4">{s.dates}</h3>
                <div className="space-y-2 text-foreground/60 font-oswald text-sm">
                  <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-primary/70" />{s.times}</div>
                  <div className="flex items-center gap-2"><Users className="w-3.5 h-3.5 text-primary/70" />{s.ages}</div>
                </div>
                <div className="mt-5 pt-5 border-t border-border/10">
                  <span className="font-bebas text-2xl text-primary">{s.price}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Main registration CTA */}
          <div className="mt-16 md:mt-20 text-center">
            <h3 className="font-bebas text-3xl md:text-5xl uppercase leading-[0.9] mb-4">
              Ready to <span className="text-primary">Register?</span>
            </h3>
            <p className="font-oswald text-sm md:text-base text-foreground/50 max-w-xl mx-auto mb-8">
              Secure your spot through our camp store. Registration details and payment are handled there.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-[0.2em] text-base md:text-lg px-12 py-6 h-auto"
            >
              <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
                Register for Camp <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2 — The Camp Experience */}
      <section className="py-16 md:py-24 border-b border-border/10 relative overflow-hidden">
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-16 relative">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-primary" />
            <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">The Camp Experience</span>
          </div>
          <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl uppercase leading-[0.9] mb-4">
            Built <span className="text-primary">Different.</span>
          </h2>
          <p className="font-oswald text-sm md:text-base text-foreground/50 max-w-xl mb-12">
            Every camper gets the full LPA training environment — pro-level instruction, advanced technology, and a culture built for serious development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {experienceFeatures.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-border/20 bg-card/30 p-6 hover:border-primary/40 transition-all"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bebas text-2xl uppercase tracking-wide mb-2">{title}</h3>
                <p className="font-oswald text-sm text-foreground/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal footer — legal only */}
      <footer className="py-8 border-t border-border/20">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-foreground/40 font-oswald">
            <p>© {new Date().getFullYear()} Legendary Prep Academy. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Camps;