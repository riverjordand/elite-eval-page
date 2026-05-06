import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users, Dumbbell, GraduationCap, Trophy, Activity, Flame } from "lucide-react";
import logoBadge from "@/assets/lpa-badge-seafoam.png";

// PLACEHOLDER — swap with real YouTube video ID
const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ";

// PLACEHOLDER — swap with real GHL form embed URL + ID
const GHL_FORM_URL = "https://api.leadconnectorhq.com/widget/form/bpdA0rL08AwKaoECkka5";
const GHL_FORM_ID = "inline-bpdA0rL08AwKaoECkka5";

// PLACEHOLDER camp sessions
const campSessions = [
  { name: "Session I", dates: "June 9 – June 13, 2026", ages: "Ages 12–14", location: "LPA Facility, AZ", price: "$495" },
  { name: "Session II", dates: "June 23 – June 27, 2026", ages: "Ages 14–16", location: "LPA Facility, AZ", price: "$525" },
  { name: "Session III", dates: "July 14 – July 18, 2026", ages: "Ages 15–18", location: "LPA Facility, AZ", price: "$595" },
  { name: "Elite Showcase", dates: "July 28 – Aug 1, 2026", ages: "HS Varsity", location: "LPA Facility, AZ", price: "$695" },
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

    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (script.parentNode) document.body.removeChild(script);
    };
  }, []);

  const scrollToForm = () => {
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Minimal header — logo only, no nav */}
      <header className="absolute top-0 left-0 right-0 z-50 py-5 px-6 lg:px-16">
        <Link to="/camps" className="inline-block">
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
              size="lg"
              onClick={scrollToForm}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-[0.2em] text-sm md:text-base px-10 py-5 h-auto"
            >
              Register Now <ArrowRight className="ml-2 w-4 h-4" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {campSessions.map((s) => (
              <div
                key={s.name}
                className="group rounded-2xl border border-border/20 bg-card/30 p-6 hover:border-primary/40 hover:bg-card/50 transition-all"
              >
                <div className="flex items-center gap-2 mb-4 text-primary">
                  <Calendar className="w-4 h-4" />
                  <span className="font-oswald text-[10px] uppercase tracking-[0.3em]">{s.name}</span>
                </div>
                <h3 className="font-bebas text-2xl md:text-3xl uppercase leading-tight mb-4">{s.dates}</h3>
                <div className="space-y-2 text-foreground/60 font-oswald text-sm">
                  <div className="flex items-center gap-2"><Users className="w-3.5 h-3.5 text-primary/70" />{s.ages}</div>
                  <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-primary/70" />{s.location}</div>
                </div>
                <div className="mt-5 pt-5 border-t border-border/10 flex items-center justify-between">
                  <span className="font-bebas text-2xl text-primary">{s.price}</span>
                  <button
                    onClick={scrollToForm}
                    className="font-oswald text-[11px] uppercase tracking-[0.25em] text-foreground/70 hover:text-primary transition-colors"
                  >
                    Register →
                  </button>
                </div>
              </div>
            ))}
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

      {/* Section 3 — Registration Form */}
      <section id="register" className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-primary" />
            <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">Registration</span>
          </div>
          <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl uppercase leading-[0.9] mb-4">
            Reserve Your <span className="text-primary">Spot</span>
          </h2>
          <p className="font-oswald text-sm md:text-base text-foreground/50 max-w-xl mb-10">
            Complete the form below to secure your camp registration. Our team will follow up with confirmation and next steps.
          </p>

          <div className="rounded-2xl overflow-hidden border border-border/20 shadow-2xl shadow-black/40 bg-card/30">
            <div className="bg-card/60 border-b border-border/20 px-5 py-3 flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
              <span className="font-oswald text-[10px] text-foreground/20 uppercase tracking-widest ml-2">Summer Camp Registration</span>
            </div>
            <div className="p-4 md:p-8 bg-background/40">
              <iframe
                src={GHL_FORM_URL}
                style={{ width: "100%", height: "4075px", border: "none", borderRadius: "3px", display: "block" }}
                id={GHL_FORM_ID}
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Summer Camp Registration"
                data-height="4075"
                data-layout-iframe-id={GHL_FORM_ID}
                data-form-id="camp-registration"
                title="Summer Camp Registration"
              />
            </div>
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