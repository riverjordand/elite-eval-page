import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";
import lpaBadge from "@/assets/lpa-badge-cactus.png";
import lpaArch from "@/assets/lpa-arch.png";
import facilityImg from "@/assets/facility-interior.jpg";
import strengthImg from "@/assets/facility-strength-conditioning.jpg";
import videoAnalysisImg from "@/assets/facility-video-analysis.jpg";
import coachEric from "@/assets/coach-eric.webp";
import coachJoe from "@/assets/coach-joe.webp";
import coachMarcus from "@/assets/coach-marcus.webp";
import coachNeil from "@/assets/coach-neil.webp";
import coachTerrell from "@/assets/coach-terrell.webp";

const colleges = [
  { name: "Ole Miss", logo: "/colleges/ole-miss.png" },
  { name: "Coastal Carolina", logo: "/colleges/coastal-carolina.png" },
  { name: "Texas Tech", logo: "/colleges/texas-tech.png" },
  { name: "University of Mary", logo: "/colleges/university-of-mary.png?v=2" },
  { name: "Utah Valley", logo: "/colleges/utah-valley.png?v=3" },
  { name: "New Mexico State", logo: "/colleges/new-mexico-state.png?v=2" },
  { name: "Youngstown State", logo: "/colleges/youngstown-state.png?v=2" },
  { name: "Southwestern College", logo: "/colleges/southwestern-college.png?v=2" },
  { name: "Scottsdale CC", logo: "/colleges/scottsdale-cc.png?v=2" },
  { name: "Glendale CC", logo: "/colleges/glendale-cc.png?v=2" },
  { name: "Justice University", logo: "/colleges/justice-university.png?v=2" },
];

const coaches = [
  { name: "Eric Junge", title: "Head Coach / Founder", img: coachEric, cred: "15+ years coaching · Former D1 player" },
  { name: "Joe Muñoz", title: "Pitching Director", img: coachJoe, cred: "MLB Scout · Professional experience" },
  { name: "Marcus Nettles", title: "Hitting Coach", img: coachMarcus, cred: "Former MiLB · SEC experience" },
  { name: "Neil Walton", title: "Pitching Coach", img: coachNeil, cred: "D1 pitching experience" },
  { name: "Terrell Joyce", title: "Infield Coach", img: coachTerrell, cred: "Professional playing experience" },
];

// --- SLIDE COMPONENTS ---

const SlideWrapper = ({ children, bg }: { children: React.ReactNode; bg?: string }) => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden" style={{ background: bg || "hsl(var(--background))" }}>
    {children}
  </div>
);

const Slide1Title = () => (
  <SlideWrapper>
    <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-30">
      <source src="/hero-training.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80" />
    <div className="relative z-10 text-center px-12">
      <img src={lpaBadge} alt="LPA" className="w-28 h-28 md:w-40 md:h-40 mx-auto mb-8 drop-shadow-2xl" style={{ filter: "drop-shadow(0 0 40px hsl(var(--primary) / 0.4))" }} />
      <p className="font-oswald text-sm md:text-base uppercase tracking-[0.4em] text-primary mb-4">The Blueprint</p>
      <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl xl:text-9xl uppercase leading-[0.85] mb-6">
        <span className="text-foreground">Legendary Prep</span><br />
        <span className="text-primary">Academy</span>
      </h1>
      <p className="font-oswald text-base md:text-xl text-foreground/60 max-w-2xl mx-auto">
        Arizona's Premier Player Development Academy for Middle & High School Athletes
      </p>
    </div>
  </SlideWrapper>
);

const Slide2Mission = () => (
  <SlideWrapper>
    <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[200px]" />
    <div className="relative z-10 max-w-4xl mx-auto px-12 text-center">
      <div className="inline-block bg-primary/20 text-primary font-bebas text-xs px-6 py-1.5 mb-8 uppercase tracking-[0.2em] border border-primary/30">Our Mission</div>
      <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl uppercase leading-[0.88] mb-8">
        Developing <span className="text-primary">Elite Student-Athletes</span> For The Next Level
      </h2>
      <p className="font-oswald text-lg md:text-xl text-foreground/60 leading-relaxed max-w-3xl mx-auto">
        LPA exists to bridge the gap between travel ball and college baseball. We provide world-class coaching, pro-level technology, and a structured development environment that prepares serious athletes for collegiate competition.
      </p>
    </div>
  </SlideWrapper>
);

const Slide3Problem = () => (
  <SlideWrapper>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
    <div className="relative z-10 max-w-5xl mx-auto px-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-px bg-primary" />
        <span className="font-oswald text-xs text-primary uppercase tracking-[0.4em]">The Problem</span>
      </div>
      <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.88] mb-10">
        Most Academies <span className="text-primary">Fall Short</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { num: "01", title: "No Structure", desc: "Travel ball programs focus on games, not development. Athletes play 60+ games with minimal skill-building." },
          { num: "02", title: "No Technology", desc: "Without tools like Rapsodo, HitTrax, and video analysis, athletes train blind — guessing instead of measuring." },
          { num: "03", title: "No Pathway", desc: "Most programs don't have the coaching connections or recruiting infrastructure to get athletes seen at the next level." },
        ].map((item) => (
          <div key={item.num} className="bg-card/40 border border-border/30 p-8">
            <span className="font-bebas text-3xl text-primary/40 block mb-3">{item.num}</span>
            <h3 className="font-bebas text-xl uppercase text-foreground mb-3">{item.title}</h3>
            <p className="font-oswald text-sm text-foreground/50 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideWrapper>
);

const Slide4Solution = () => (
  <SlideWrapper>
    <div className="absolute inset-0 bg-gradient-to-tr from-background via-primary/5 to-background" />
    <div className="relative z-10 max-w-5xl mx-auto px-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-px bg-primary" />
        <span className="font-oswald text-xs text-primary uppercase tracking-[0.4em]">The LPA Solution</span>
      </div>
      <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.88] mb-10">
        Four Pillars of <span className="text-primary">Development</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: "Complete Development", items: ["Position-specific training", "Strength & conditioning", "Mental performance", "Recovery protocols"] },
          { title: "Elite Coaching", items: ["D1 & professional staff", "MLB scout on staff", "1-on-1 mentorship", "College recruiting guidance"] },
          { title: "Pro-Level Tech", items: ["Rapsodo pitching analytics", "HitTrax hitting data", "Video analysis systems", "Performance tracking"] },
          { title: "Education First", items: ["GPA monitoring", "Study hall support", "Time management", "Character development"] },
        ].map((pillar) => (
          <div key={pillar.title} className="bg-card/40 border border-border/30 p-6 hover:border-primary/40 transition-colors">
            <h3 className="font-bebas text-lg uppercase text-primary mb-4">{pillar.title}</h3>
            <ul className="space-y-2">
              {pillar.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                  <span className="font-oswald text-xs text-foreground/60">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </SlideWrapper>
);

const Slide5Facility = () => (
  <SlideWrapper>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
    <div className="relative z-10 max-w-5xl mx-auto px-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-px bg-primary" />
        <span className="font-oswald text-xs text-primary uppercase tracking-[0.4em]">The Facility</span>
      </div>
      <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.88] mb-8">
        24,000 Sq Ft <span className="text-primary">Training Center</span>
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {[
          { img: facilityImg, label: "Indoor Training Area" },
          { img: strengthImg, label: "Strength & Conditioning" },
          { img: videoAnalysisImg, label: "Video Analysis Lab" },
        ].map((f) => (
          <div key={f.label} className="relative aspect-[4/3] overflow-hidden border border-border/20">
            <img src={f.img} alt={f.label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 font-bebas text-sm md:text-base text-foreground uppercase">{f.label}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {[
          { stat: "6", label: "Batting Cages" },
          { stat: "2", label: "Pitching Tunnels" },
          { stat: "Full", label: "Weight Room" },
          { stat: "Pro", label: "Video Analysis" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <span className="font-bebas text-3xl md:text-4xl text-primary block">{s.stat}</span>
            <span className="font-oswald text-xs text-foreground/40 uppercase tracking-wider">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </SlideWrapper>
);

const Slide6Coaching = () => (
  <SlideWrapper>
    <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card" />
    <div className="relative z-10 max-w-5xl mx-auto px-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-px bg-primary" />
        <span className="font-oswald text-xs text-primary uppercase tracking-[0.4em]">The Staff</span>
      </div>
      <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.88] mb-10">
        <span className="text-primary">12</span> Staff & Coaches
      </h2>
      <div className="grid grid-cols-5 gap-4">
        {coaches.map((c) => (
          <div key={c.name} className="text-center">
            <div className="w-full aspect-[3/4] overflow-hidden border border-border/20 mb-3 bg-card/60">
              <img src={c.img} alt={c.name} className="w-full h-full object-cover object-top" />
            </div>
            <h3 className="font-bebas text-base md:text-lg text-foreground uppercase leading-tight">{c.name}</h3>
            <p className="font-oswald text-[10px] text-primary uppercase tracking-wider">{c.title}</p>
            <p className="font-oswald text-[9px] text-foreground/30 mt-1">{c.cred}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideWrapper>
);

const Slide7Results = () => (
  <SlideWrapper>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px]" />
    <div className="relative z-10 max-w-5xl mx-auto px-12 text-center">
      <div className="inline-block bg-primary/20 text-primary font-bebas text-xs px-6 py-1.5 mb-8 uppercase tracking-[0.2em] border border-primary/30">Results</div>
      <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl uppercase leading-[0.88] mb-4">
        <span className="text-primary">12</span> College Commitments
      </h2>
      <p className="font-oswald text-base text-foreground/50 mb-10">In just 18 months of operation — and counting.</p>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {colleges.map((c) => (
          <div key={c.name} className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
              <img src={c.logo} alt={c.name} className="w-full h-full object-contain brightness-125" />
            </div>
            <span className="font-oswald text-[8px] md:text-[9px] text-foreground/40 uppercase tracking-wider text-center max-w-[70px]">{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  </SlideWrapper>
);

const Slide8Experience = () => (
  <SlideWrapper>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-card/40 to-background" />
    <div className="relative z-10 max-w-5xl mx-auto px-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-px bg-primary" />
        <span className="font-oswald text-xs text-primary uppercase tracking-[0.4em]">The Experience</span>
      </div>
      <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.88] mb-10">
        More Than <span className="text-primary">Training</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { title: "Daily Meals", desc: "Athletes are fed daily — fueling performance with proper nutrition." },
          { title: "On-Site Barber", desc: "Look good, play good. Kept sharp and camera-ready for game day." },
          { title: "Gear & Swag Drops", desc: "Seasonal branded apparel — custom jerseys, travel fits, exclusive LPA merch." },
          { title: "Personal Lockers", desc: "Every athlete gets their own assigned locker — a professional home base." },
          { title: "Pro Equipment", desc: "HitTrax, Rapsodo, weighted balls — the same tools used at the pro level." },
          { title: "Recovery & Arm Care", desc: "Dedicated recovery protocols and injury prevention in every training day." },
        ].map((p) => (
          <div key={p.title} className="bg-card/40 border border-border/30 p-6">
            <h3 className="font-bebas text-lg uppercase text-primary mb-2">{p.title}</h3>
            <p className="font-oswald text-xs text-foreground/50 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideWrapper>
);

const Slide9Stats = () => (
  <SlideWrapper bg="hsl(var(--primary))">
    <div className="relative z-10 max-w-4xl mx-auto px-12 text-center">
      <h2 className="font-bebas text-5xl md:text-7xl uppercase leading-[0.88] text-primary-foreground mb-12">
        By The Numbers
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { num: "12", label: "College Commits", sub: "SEC · D1 · D2 · JUCO" },
          { num: "4", label: "Teams", sub: "13U · 14U · JV · Varsity" },
          { num: "12", label: "Staff & Coaches", sub: "D1 · MiLB · MLB Scout" },
          { num: "24K", label: "Sq Ft Facility", sub: "Scottsdale, AZ" },
        ].map((s) => (
          <div key={s.label}>
            <span className="font-bebas text-5xl md:text-6xl text-primary-foreground block">{s.num}</span>
            <span className="font-bebas text-lg text-primary-foreground/80 uppercase block">{s.label}</span>
            <span className="font-oswald text-[10px] text-primary-foreground/50 uppercase tracking-wider">{s.sub}</span>
          </div>
        ))}
      </div>
    </div>
  </SlideWrapper>
);

const Slide10CTA = () => (
  <SlideWrapper>
    <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-20">
      <source src="/hero-training.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
    <div className="relative z-10 text-center px-12">
      <img src={lpaArch} alt="LPA" className="h-12 w-auto mx-auto mb-8 opacity-40" />
      <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.85] mb-6">
        <span className="text-foreground">Ready to Build</span><br />
        <span className="text-primary">Something Legendary?</span>
      </h2>
      <p className="font-oswald text-lg text-foreground/60 mb-10 max-w-2xl mx-auto">
        Schedule a tour, book a free evaluation, or apply today.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="bg-primary text-primary-foreground font-bebas uppercase tracking-[0.15em] text-xl px-10 py-4">
          Book Free Evaluation
        </div>
        <div className="border border-foreground/30 text-foreground font-bebas uppercase tracking-[0.15em] text-xl px-10 py-4">
          Schedule a Tour
        </div>
      </div>
      <div className="mt-12 space-y-1">
        <p className="font-oswald text-sm text-foreground/40">9382 E Bahia Drive, Suite B101 · Scottsdale, AZ 85260</p>
        <p className="font-oswald text-sm text-foreground/40">(480) 485-4855 · info@legendaryprepacademy.com</p>
      </div>
    </div>
  </SlideWrapper>
);

const slides = [Slide1Title, Slide2Mission, Slide3Problem, Slide4Solution, Slide5Facility, Slide6Coaching, Slide7Results, Slide8Experience, Slide9Stats, Slide10CTA];

const PitchDeck = () => {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const next = useCallback(() => setCurrent((c) => Math.min(c + 1, slides.length - 1)), []);
  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "f" || e.key === "F") {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
        else document.exitFullscreen?.();
      }
      if (e.key === "Escape" && document.fullscreenElement) document.exitFullscreen?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  };

  const CurrentSlide = slides[current];

  return (
    <div className="fixed inset-0 bg-background select-none" style={{ cursor: "none" }} onMouseMove={(e) => { (e.currentTarget as HTMLDivElement).style.cursor = "default"; }}>
      {/* Slide */}
      <div className="absolute inset-0">
        <CurrentSlide />
      </div>

      {/* Navigation overlay */}
      <div className="absolute inset-0 z-50 flex">
        <div className="w-1/3 h-full cursor-w-resize" onClick={prev} />
        <div className="w-1/3 h-full" />
        <div className="w-1/3 h-full cursor-e-resize" onClick={next} />
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center gap-4">
          <button onClick={prev} disabled={current === 0} className="text-foreground/50 hover:text-foreground disabled:opacity-20 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <span className="font-bebas text-sm text-foreground/50 tracking-wider">
            {current + 1} / {slides.length}
          </span>
          <button onClick={next} disabled={current === slides.length - 1} className="text-foreground/50 hover:text-foreground disabled:opacity-20 transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="flex-1 mx-8 h-0.5 bg-foreground/10 rounded-full overflow-hidden">
          <div className="h-full bg-primary transition-all duration-300" style={{ width: `${((current + 1) / slides.length) * 100}%` }} />
        </div>

        <button onClick={toggleFullscreen} className="text-foreground/50 hover:text-foreground transition-colors">
          {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-50 flex gap-1.5 opacity-0 hover:opacity-100 transition-opacity">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-foreground/20 hover:bg-foreground/40"}`} />
        ))}
      </div>
    </div>
  );
};

export default PitchDeck;
