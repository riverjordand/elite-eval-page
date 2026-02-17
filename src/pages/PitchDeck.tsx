import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Users, Home, Trophy, Building2, GraduationCap, Target } from "lucide-react";
import lpaBadge from "@/assets/lpa-badge-cactus.png";
import lpaArch from "@/assets/lpa-arch.png";
import facilityImg from "@/assets/facility-interior.jpg";
import strengthImg from "@/assets/facility-strength-conditioning.jpg";
import sportsMedImg from "@/assets/facility-sports-medicine.jpg";
import coachEric from "@/assets/coach-eric.webp";
import coachJoe from "@/assets/coach-joe.webp";
import coachMarcus from "@/assets/coach-marcus.webp";
import coachNeil from "@/assets/coach-neil.webp";
import coachTerrell from "@/assets/coach-terrell.webp";

// --- SLIDE COMPONENTS ---

const SlideWrapper = ({ children, bg }: { children: React.ReactNode; bg?: string }) => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden" style={{ background: bg || "hsl(var(--background))" }}>
    {children}
  </div>
);

// Slide 1: Title
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
      <p className="font-oswald text-base md:text-xl text-foreground/60 max-w-2xl mx-auto italic">
        "Arizona's premier player development academy for middle and high school athletes"
      </p>
    </div>
  </SlideWrapper>
);

// Slide 2: Phase 1 - Laying the Foundation (Completed)
const Slide2Foundation = () => (
  <SlideWrapper>
    <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card" />
    <div className="relative z-10 max-w-5xl mx-auto px-12 w-full">
      <div className="flex items-center justify-between mb-10">
        <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.88]">
          <span className="text-primary">Phase 1</span> <span className="text-foreground/40">|</span> Laying The Foundation
        </h2>
        <div className="bg-primary/20 border border-primary/40 px-4 py-1.5 rounded-sm">
          <span className="font-bebas text-lg text-primary uppercase tracking-wider">Completed</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {[
          { num: "1", title: "Secure Funding", desc: "$1M raised to kickstart our vision and build a cost-efficient facility." },
          { num: "2", title: "Build Elite Staff", desc: "5 Pro-level coaches and 1 MLB scouts assembled." },
          { num: "3", title: "Establish Partnerships", desc: "Wilson, EvoShield, Louisville Slugger, DeMarini, Under Armour secured contracts." },
          { num: "4", title: "Field First Team", desc: "65 enrolled players\n2030 class | 6 state ranked\n2029 class | 2 state ranked\n2028 class | 2 state ranked" },
        ].map((item) => (
          <div key={item.num} className="bg-card/60 border border-border/30 p-8 flex gap-5">
            <span className="font-bebas text-4xl text-foreground/20 flex-shrink-0">{item.num}</span>
            <div>
              <h3 className="font-bebas text-xl uppercase text-foreground mb-3">{item.title}</h3>
              <p className="font-oswald text-sm text-foreground/50 leading-relaxed whitespace-pre-line">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SlideWrapper>
);

// Slide 3: Phase 1 - What We Have Built (Section Divider)
const Slide3Divider = () => (
  <SlideWrapper>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
    <div className="absolute top-24 left-12 right-12 h-px bg-primary/60" />
    <div className="absolute bottom-24 left-12 right-12 h-px bg-primary/60" />
    <div className="relative z-10 text-center px-12">
      <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase leading-[0.88]">
        <span className="text-primary">Phase 1</span> <span className="text-foreground/40">|</span> What We Have Built…
      </h2>
    </div>
  </SlideWrapper>
);

// Slide 4: Cinematic Pitch Video
const Slide4Video = () => (
  <SlideWrapper>
    <div className="absolute inset-0 bg-black" />
    <div className="relative z-10 w-full max-w-5xl mx-auto px-12">
      <div className="relative aspect-video bg-card/20 border border-border/30 overflow-hidden">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/hero-training.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-4 py-2">
          <p className="font-bebas text-sm text-foreground/70 uppercase tracking-wider">LPA Cinematic Pitch Video</p>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

// Slide 5: Facility
const Slide5Facility = () => (
  <SlideWrapper>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
    <div className="relative z-10 max-w-6xl mx-auto px-12 w-full">
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { img: facilityImg, label: "Training Area" },
          { img: "/action-20.jpg", label: "Recovery Center" },
          { img: strengthImg, label: "Strength Conditioning" },
          { img: sportsMedImg, label: "Sports Medicine" },
        ].map((f) => (
          <div key={f.label} className="relative aspect-[3/4] overflow-hidden border border-foreground/20">
            <img src={f.img} alt={f.label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <h3 className="absolute bottom-4 left-4 right-4 font-bebas text-lg md:text-xl text-foreground uppercase leading-tight">{f.label}</h3>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {[
          { text: "Our academy offers", highlight: "over 18,000 sq. ft. of dedicated space", after: "for baseball training." },
          { text: "Features", highlight: "cutting-edge recovery tools", after: "like hyperbaric chambers and infrared saunas." },
          { text: "Advanced weight room with", highlight: "$250,000 of equipment", after: "for athletic enhancement." },
          { text: "Weekly visits from", highlight: "Spooner Physical Therapy", after: "experts for injury prevention." },
        ].map((item, i) => (
          <p key={i} className="font-oswald text-xs md:text-sm text-foreground/60 leading-relaxed uppercase">
            {item.text} <span className="text-primary">{item.highlight}</span> {item.after}
          </p>
        ))}
      </div>
    </div>
  </SlideWrapper>
);

// Slide 6: Coaching Staff
const Slide6Coaching = () => {
  const staff = [
    { name: "Josh Garcia", title: "Head Strength & Conditioning", creds: ["Bachelor of Science in Kinesiology", "Certified S&C Specialist (CSCS)", "Performance Enhancement Specialist (PES)", "EXOS Performance Specialist (XPS)", "16 years of experience as a performance coach"] },
    { name: "Mark Karaviotis", title: "Head Baseball Coach | Athletic Director", creds: ["Former Division 1 baseball player at Oregon", "Drafted 19th round by the Arizona Diamondbacks", "2016 Hillsboro Hops batting champion", "3x MiLB All Star", "7 years of professional baseball experience"] },
    { name: "Alex Lontayo", title: "Pitching Coordinator | Cub's Scout", creds: ["Former Division 1 baseball player at Tulane University", "Drafted by the Boston Red Sox in 1999", "7 years of professional baseball experience", "12 years of professional scouting experience", "Current West Coast Cross Checker for the Chicago Cubs"] },
    { name: "Joe Dunigan", title: "Hitting Coordinator | Astro's Scout", creds: ["Former Division 1 baseball player at Oklahoma", "Drafted 41st round by the Montreal Expos", "Drafted 5th round by the Seattle Mariners", "10 years of professional baseball experience", "Current Area Scout for the Houston Astros"] },
    { name: "Eric Smith", title: "Recruiting Coordinator | Assistant Coach", creds: ["Former Division 1 baseball player at the University of Rhode Island", "Drafted 2nd round by Arizona Diamondbacks", "6 years of professional baseball experience"] },
    { name: "Terrell Hudson", title: "Assistant & Pitching Coach", creds: ["Former Division 1 baseball player at the University of New Mexico", "Extensive experience in training and managing ELITE youth baseball"] },
  ];

  return (
    <SlideWrapper>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/20 to-background" />
      <div className="absolute right-8 top-1/2 -translate-y-1/2">
        <p className="font-bebas text-7xl text-foreground/5 uppercase writing-mode-vertical" style={{ writingMode: "vertical-rl" }}>Coaching Staff</p>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-12 w-full">
        <div className="grid grid-cols-3 gap-4">
          {staff.map((s) => (
            <div key={s.name} className="bg-card/40 border border-border/30 p-4">
              <h3 className="font-bebas text-lg text-foreground uppercase leading-tight">{s.name}</h3>
              <p className="font-oswald text-[10px] text-primary uppercase tracking-wider mb-3">{s.title}</p>
              <ul className="space-y-1">
                {s.creds.map((c, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-1.5" />
                    <span className="font-oswald text-[10px] text-foreground/50 leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
};

// Slide 7: Academic Excellence
const Slide7Academics = () => (
  <SlideWrapper>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-card/30 to-background" />
    <div className="relative z-10 max-w-5xl mx-auto px-12 w-full">
      <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.88] mb-2">
        Academic Excellence:
      </h2>
      <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl uppercase leading-[0.88] text-primary mb-10">
        Simplified
      </h2>
      <div className="flex gap-12">
        <div className="flex-1">
          <p className="font-bebas text-lg text-foreground uppercase mb-2">Key Benefits of Our Streamlined</p>
          <p className="font-bebas text-lg text-primary uppercase mb-8">Academic Program</p>
          <ul className="space-y-5">
            {[
              "Tailored curriculum designed to integrate with the student's athletic training schedule.",
              "Focusing instead on essential learning objectives and preparation to play at the NCAA Division 1 Level.",
              "Access to a dedicated Academic Advisor.",
              "Flexible online course structure that accommodates travel and training commitments.",
              "Collaboration with Premier Prep Academy ensures a high-quality educational experience that aligns with athletic goals.",
            ].map((item, i) => (
              <li key={i} className="font-oswald text-sm text-foreground/60 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>
        <div className="w-72 flex flex-col items-center justify-center gap-4">
          <div className="w-48 h-48 bg-card/40 border border-border/20 flex items-center justify-center">
            <GraduationCap className="w-20 h-20 text-primary/40" />
          </div>
          <p className="font-oswald text-xs text-foreground/40 text-center">Athletic Director | Principal | LPA Head Coach</p>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

// Slide 8: Phase 1 Goals Remaining
const Slide8GoalsRemaining = () => (
  <SlideWrapper>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
    <div className="absolute top-16 left-12 right-12 h-px bg-primary/60" />
    <div className="absolute bottom-16 left-12 right-12 h-px bg-primary/60" />
    <div className="relative z-10 max-w-5xl mx-auto px-12 w-full">
      <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.88] mb-12">
        <span className="text-primary">Phase 1</span> <span className="text-foreground/40">|</span> Goals Remaining
      </h2>
      <div className="grid grid-cols-3 gap-8">
        <div>
          <Users className="w-12 h-12 text-foreground/60 mb-4" />
          <h3 className="font-bebas text-xl uppercase text-foreground mb-4">Student Athletes</h3>
          <p className="font-oswald text-sm text-foreground/50 leading-relaxed">
            Currently at 65 players with plans to reach 100+ players by Q1 2027. Secure athletic scholarship fund for financially eligible student.
          </p>
        </div>
        <div>
          <Home className="w-12 h-12 text-foreground/60 mb-4" />
          <h3 className="font-bebas text-xl uppercase text-foreground mb-4">Housing (Phase 1)</h3>
          <p className="font-oswald text-sm text-foreground/50 leading-relaxed">
            Rent a 4 to 5 bedroom house to host 8-10 high level out of state players with a on-site live-in coach.
          </p>
        </div>
        <div>
          <Trophy className="w-12 h-12 text-foreground/60 mb-4" />
          <h3 className="font-bebas text-xl uppercase text-foreground mb-4">Recognition</h3>
          <p className="font-oswald text-sm text-foreground/50 leading-relaxed mb-3">Players signed and committed:</p>
          <ul className="space-y-1 font-oswald text-sm text-foreground/50">
            {["Coastal Carolina", "Ole Miss", "Texas Tech", "Utah Valley", "New Mexico State", "Youngstown State"].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

// Slide 9: Phase 2 - Mini Campus
const Slide9Phase2 = () => (
  <SlideWrapper>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
    <div className="relative z-10 max-w-5xl mx-auto px-12 w-full">
      <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.88] mb-2">
        <span className="text-primary">Phase 2</span> <span className="text-foreground/40">|</span> Baseball/Softball Mini Campus
      </h2>
      <div className="w-full h-px bg-foreground/20 mb-12" />
      <div className="grid grid-cols-3 gap-8">
        <div>
          <Building2 className="w-12 h-12 text-foreground/60 mb-4" />
          <h3 className="font-bebas text-xl uppercase text-foreground mb-4">New Facility Expansion</h3>
          <p className="font-oswald text-sm text-foreground/50 leading-relaxed">
            Larger athletic center accommodating 150 baseball and 150 softball players. Access to professional-grade fields for practice and games. On site baseball and softball stadium with individual club house access.
          </p>
        </div>
        <div>
          <Building2 className="w-12 h-12 text-foreground/60 mb-4" />
          <h3 className="font-bebas text-xl uppercase text-foreground mb-4">Housing Expansion</h3>
          <p className="font-oswald text-sm text-foreground/50 leading-relaxed">
            Dorm style apartments for baseball and softball team. Out-of-state players create pipeline for broader reach.
          </p>
        </div>
        <div>
          <Target className="w-12 h-12 text-foreground/60 mb-4" />
          <h3 className="font-bebas text-xl uppercase text-foreground mb-4">National Recognition</h3>
          <p className="font-oswald text-sm text-foreground/50 leading-relaxed">
            Compete in national tournaments. Build ranked teams securing D1 scholarships, NIL deals, and MLB draft opportunities.
          </p>
        </div>
      </div>
      <div className="w-full h-px bg-primary/60 mt-12" />
    </div>
  </SlideWrapper>
);

// Slide 10: Phase 2 Facility Vision
const Slide10FacilityVision = () => (
  <SlideWrapper>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
    <div className="relative z-10 max-w-5xl mx-auto px-12 w-full text-center">
      <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.88] mb-10">
        <span className="text-primary">Phase 2</span> <span className="text-foreground/40">|</span> The Vision
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="relative aspect-[4/3] overflow-hidden border border-foreground/20 bg-card/40">
          <img src="/action-30.jpg" alt="Future stadium" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <p className="absolute bottom-4 left-4 font-bebas text-lg text-foreground uppercase">Professional-Grade Fields</p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden border border-foreground/20 bg-card/40">
          <img src="/action-25.jpg" alt="Future complex" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <p className="absolute bottom-4 left-4 font-bebas text-lg text-foreground uppercase">Full Campus Complex</p>
        </div>
      </div>
      <p className="font-oswald text-sm text-foreground/40 mt-6 uppercase tracking-wider">Construction Partner: Pono Construction</p>
    </div>
  </SlideWrapper>
);

const slides = [Slide1Title, Slide2Foundation, Slide3Divider, Slide4Video, Slide5Facility, Slide6Coaching, Slide7Academics, Slide8GoalsRemaining, Slide9Phase2, Slide10FacilityVision];

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
    <div className="fixed inset-0 bg-background select-none">
      <div className="absolute inset-0">
        <CurrentSlide />
      </div>

      {/* Click navigation zones */}
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
