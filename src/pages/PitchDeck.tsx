import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Users, Home, Trophy, Building2, GraduationCap, Target, Dumbbell, Star, Shield } from "lucide-react";
import lpaBadge from "@/assets/lpa-badge-cactus.png";

const STORAGE_URL = `https://xhqqxukgsaxabyvbfinn.supabase.co/storage/v1/object/public/video`;

// ── Persistent header bar with LPA logo (shown on all non-title slides) ──
const SlideHeader = () => (
  <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none">
    <div className="flex items-center justify-between px-fluid-container-px py-3">
      <img src={lpaBadge} alt="LPA" className="w-[clamp(2rem,4vw,3.5rem)] h-auto opacity-60" />
      <span className="font-bebas text-foreground/50 uppercase tracking-[0.4em] text-fluid-xs">LPA</span>
    </div>
  </div>
);

// ── Watermark logo shown on all non-title slides ──
const SlideWatermark = () => null;

// ── Slide wrapper: fills viewport, vertically centers, scrollable on overflow ──
const S = ({ children, className = "", watermark = true }: { children: React.ReactNode; className?: string; watermark?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [shouldCenter, setShouldCenter] = useState(true);

  useEffect(() => {
    const check = () => {
      if (containerRef.current && contentRef.current) {
        setShouldCenter(contentRef.current.scrollHeight <= containerRef.current.clientHeight);
      }
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  });

  useEffect(() => {
    containerRef.current?.scrollTo(0, 0);
  });

  return (
    <div ref={containerRef} className={`w-full h-full bg-background overflow-y-auto flex flex-col ${shouldCenter ? "justify-center" : "justify-start"} ${className}`}>
      <div ref={contentRef} className="flex-shrink-0">
        {children}
      </div>
      {watermark && <SlideHeader />}
      {watermark && <SlideWatermark />}
    </div>
  );
};

// ── Inner container with fluid padding ──
const Inner = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-full max-w-6xl mx-auto px-fluid-container-px py-fluid-md ${className}`}>
    {children}
  </div>
);

// ── SLIDE 1: Title ──
const Slide1 = () => (
  <S className="relative" watermark={false}>
    <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-30">
      <source src="/hero-training.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80" />
    <div className="relative z-10 flex items-center justify-center min-h-full px-fluid-container-px">
      <div className="text-center">
        <img src={lpaBadge} alt="LPA" className="mx-auto mb-fluid-sm w-[clamp(5rem,12vw,10rem)] h-auto" style={{ filter: "drop-shadow(0 0 40px hsl(var(--primary) / 0.4))" }} />
        <p className="font-oswald uppercase tracking-[0.3em] text-primary mb-fluid-xs text-fluid-sm">The Blueprint</p>
        <h1 className="font-bebas uppercase leading-[0.85] mb-fluid-sm text-fluid-hero">
          <span className="text-foreground">Legendary Prep</span><br />
          <span className="text-primary">Academy</span>
        </h1>
        <p className="font-oswald text-foreground/60 italic text-fluid-lg max-w-3xl mx-auto">
          "Arizona's premier player development academy for middle and high school athletes"
        </p>
      </div>
    </div>
  </S>
);

// ── SLIDE 2: Phase 1 Foundation ──
const Slide2 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card" />
    <div className="relative z-10">
      <Inner>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-fluid-md gap-fluid-xs">
          <h2 className="font-bebas uppercase leading-[0.88] text-fluid-4xl">
            <span className="text-primary">Phase 1</span> <span className="text-foreground/40">|</span> Laying The Foundation
          </h2>
          <div className="bg-primary/20 border border-primary/40 rounded-sm px-4 py-1 self-start">
            <span className="font-bebas text-primary uppercase tracking-wider text-fluid-lg">Completed</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-fluid-gap">
          {[
            { num: "1", title: "Secure Funding", desc: "$1M raised to kickstart our vision and build a cost-efficient facility." },
            { num: "2", title: "Build Elite Staff", desc: "5 Pro-Level coaches\nMLB scout (Houston Astro's)\nRecruiting Director\nAdministrative staff\nExecutive staff" },
            { num: "3", title: "Establish Partnerships", desc: "Wilson, EvoShield, Louisville Slugger, DeMarini, Under Armour secured contracts." },
            { num: "4", title: "4 Elite Teams", desc: "65 Enrolled players as of 2/19/26\n13U - 14U - JV - Varsity\n10 State Ranked Players\n7 Nationally Ranked\n12 Signed and Committed players" },
          ].map((item) => (
            <div key={item.num} className="bg-card/60 border border-border/30 flex gap-fluid-gap p-fluid-sm">
              <span className="font-bebas text-foreground/20 flex-shrink-0 text-fluid-3xl">{item.num}</span>
              <div>
                <h3 className="font-bebas uppercase text-foreground text-fluid-xl mb-1">{item.title}</h3>
                <p className="font-oswald text-foreground/50 leading-relaxed whitespace-pre-line text-fluid-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Inner>
    </div>
  </S>
);

// ── SLIDE: YouTube Video ──
const SlideYouTube = () => (
  <S className="relative bg-black">
    <div className="relative z-10 flex items-center justify-center min-h-full px-fluid-container-px">
      <div className="relative w-full max-w-5xl bg-card/20 border border-border/30 overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <video
          src="https://xhqqxukgsaxabyvbfinn.supabase.co/storage/v1/object/public/video/lpa_drone fly through.MP4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full absolute inset-0 object-cover"
        />
      </div>
    </div>
  </S>
);

// ── SLIDE 4: Video ──
const Slide4 = () => (
  <S className="relative bg-black">
    <div className="relative z-10 flex items-center justify-center min-h-full px-fluid-container-px">
      <div className="relative w-full max-w-5xl bg-card/20 border border-border/30 overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/hero-training.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-fluid-xs left-fluid-xs bg-black/60 backdrop-blur-sm px-3 py-1.5">
          <p className="font-bebas text-foreground/70 uppercase tracking-wider text-fluid-xs">LPA Cinematic Pitch Video</p>
        </div>
      </div>
    </div>
  </S>
);

// ── SLIDE 5: Facility ──
const Slide5 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
    <div className="relative z-10">
      <Inner>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-fluid-xs mb-fluid-sm">
          {[
            { img: `${STORAGE_URL}/BaseBallTraining`, label: "Training Area" },
            { img: `${STORAGE_URL}/Strengthandconditioning`, label: "Strength Conditioning" },
            { img: `${STORAGE_URL}/Classroom`, label: "Classroom" },
            { img: "/recovery-rehab-ai.png", label: "Recovery & Rehab" },
          ].map((f) => (
            <div key={f.label} className="relative overflow-hidden border border-foreground/20" style={{ aspectRatio: "3/4" }}>
              <img src={f.img} alt={f.label} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <h3 className="absolute bottom-2 left-2 right-2 font-bebas text-foreground uppercase leading-tight text-fluid-sm">{f.label}</h3>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-fluid-xs">
          {[
            { text: "Our academy offers", hl: "over 18,000 sq. ft. of dedicated space", after: "for baseball training." },
            { text: "Advanced weight room with", hl: "$250,000 of equipment", after: "for athletic enhancement." },
            { text: "Dedicated classroom space and", hl: "academic advisor", after: "for online school work." },
            { text: "Features", hl: "cutting-edge recovery tools", after: "like hot/cold contrast therapy, infrared saunas and light." },
          ].map((item, i) => (
            <p key={i} className="font-oswald text-foreground/60 leading-relaxed uppercase text-fluid-xs">
              {item.text} <span className="text-primary">{item.hl}</span> {item.after}
            </p>
          ))}
        </div>
      </Inner>
    </div>
  </S>
);

// ── SLIDE 6: Coaching Staff ──
const Slide6 = () => {
  const staff = [
    { name: "Mark Karaviotis", title: "Head Baseball Coach | Athletic Director", creds: ["Former Division 1 baseball player at Oregon", "Drafted 19th round by the Arizona Diamondbacks", "2016 Hillsboro Hops batting champion", "3x MiLB All Star", "7 years of professional baseball experience"] },
    { name: "Eric Smith", title: "Recruiting Coordinator | Assistant Coach", creds: ["Former Division 1 baseball player at the University of Rhode Island", "Drafted 2nd round by Arizona Diamondbacks", "6 years of professional baseball experience"] },
    { name: "Terrell Hudson", title: "Assistant & Pitching Coach", creds: ["Former Division 1 baseball player at the University of New Mexico", "Extensive experience in training and managing ELITE youth baseball"] },
    { name: "Joe Dunigan", title: "Hitting Coordinator | Astro's Scout", creds: ["Former Division 1 baseball player at Oklahoma", "Drafted 41st round by the Montreal Expos", "Drafted 5th round by the Seattle Mariners", "10 years of professional baseball experience", "Current Area Scout for the Houston Astros"] },
    { name: "Isaac Parra", title: "Head Middle School Coach", creds: ["4-year Arizona college career", "National Gold Glove Winner", "Best Shortstop in the Nation for JC in 2016", "Savannah Bananas - Banana Ball from 2024-2025"] },
    { name: "Josh Garcia", title: "Head Strength & Conditioning", creds: ["Bachelor of Science in Kinesiology", "Certified S&C Specialist (CSCS)", "Performance Enhancement Specialist (PES)", "EXOS Performance Specialist (XPS)", "16 years of experience as a performance coach"] },
  ];
  return (
    <S>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/20 to-background" />
      <div className="relative z-10">
        <Inner>
          <h2 className="font-bebas uppercase text-foreground text-fluid-3xl mb-fluid-sm">Coaching <span className="text-primary">Staff</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-fluid-xs">
            {staff.map((s) => (
              <div key={s.name} className="bg-card/40 border border-border/30 p-fluid-xs">
                <p className="font-oswald text-primary uppercase tracking-wider text-fluid-xs mb-1">{s.title}</p>
                <h3 className="font-bebas text-foreground uppercase leading-tight text-fluid-lg mb-2">{s.name}</h3>
                <ul className="flex flex-col gap-1">
                  {s.creds.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="bg-primary rounded-full flex-shrink-0 w-1.5 h-1.5 mt-1.5" />
                      <span className="font-oswald text-foreground/50 leading-relaxed text-fluid-xs">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Inner>
      </div>
    </S>
  );
};

// ── SLIDE 6B: Leadership ──
const Slide6B = () => {
  const leaders = [
    { name: "Will Armijo", title: "CEO & Co-Founder", creds: [] as string[] },
    { name: "RJ Etchebarren", title: "COO", creds: [] as string[] },
    { name: "Andy Leonard", title: "CFO", creds: [] as string[] },
    { name: "Tyler Thorne", title: "Legal Counsel", creds: ["Attorney", "Outside General Counsel", "Stanford Alumni"] },
  ];
  return (
    <S>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/20 to-background" />
      <div className="relative z-10">
        <Inner>
          <h2 className="font-bebas uppercase text-foreground text-fluid-3xl mb-fluid-sm">Executive <span className="text-primary">Leadership</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-fluid-xs">
            {leaders.map((s) => (
              <div key={s.name} className="bg-card/40 border border-border/30 p-fluid-xs">
                <p className="font-oswald text-primary uppercase tracking-wider text-fluid-xs mb-1">{s.title}</p>
                <h3 className="font-bebas text-foreground uppercase leading-tight text-fluid-lg mb-2">{s.name}</h3>
                {s.creds.length > 0 && (
                  <ul className="flex flex-col gap-1">
                    {s.creds.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="bg-primary rounded-full flex-shrink-0 w-1.5 h-1.5 mt-1.5" />
                        <span className="font-oswald text-foreground/50 leading-relaxed text-fluid-xs">{c}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Inner>
      </div>
    </S>
  );
};

// ── SLIDE 7: Academic Excellence ──
const Slide7 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-card/30 to-background" />
    <div className="relative z-10">
      <Inner>
        <h2 className="font-bebas uppercase leading-[0.88] text-fluid-4xl mb-1">Academic Excellence:</h2>
        <h2 className="font-bebas uppercase leading-[0.88] text-primary text-fluid-3xl mb-fluid-md">Simplified</h2>
        <div className="flex flex-col md:flex-row items-center gap-fluid-md">
          <div className="flex-1">
            <p className="font-bebas text-foreground uppercase text-fluid-sm mb-1">Key Benefits of Our Streamlined</p>
            <p className="font-bebas text-primary uppercase text-fluid-sm mb-fluid-sm">Academic Program</p>
            <ul className="flex flex-col gap-fluid-xs">
              {[
                "Tailored curriculum designed to integrate with the student's athletic training schedule.",
                "Focusing instead on essential learning objectives and preparation to play at the NCAA Division 1 Level.",
                "Access to a dedicated Academic Advisor.",
                "Flexible online course structure that accommodates travel and training commitments.",
                "Collaboration with Premier Prep Academy ensures a high-quality educational experience that aligns with athletic goals.",
              ].map((item, i) => (
                <li key={i} className="font-oswald text-foreground/60 leading-relaxed text-fluid-sm">{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center md:w-80">
            <div className="bg-card/40 border border-border/20 flex items-center justify-center w-[clamp(14rem,28vw,22rem)] h-[clamp(14rem,28vw,22rem)] p-6">
              <img src="/premier-prep-logo.png" alt="Premier Prep Online Academy" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </Inner>
    </div>
  </S>
);

// ── SLIDE 8: Signed and Committed ──
const Slide8 = () => {
  const schools = [
    { name: "Ole Miss", logo: "/colleges/ole-miss.png" },
    { name: "Coastal Carolina", logo: "/colleges/coastal-carolina.png" },
    { name: "Texas Tech University", logo: "/colleges/texas-tech.png" },
    { name: "University of Mary", logo: "/colleges/university-of-mary.png?v=2" },
    { name: "Utah Valley University", logo: "/colleges/utah-valley.png?v=3" },
    { name: "New Mexico St. University", logo: "/colleges/new-mexico-state.png?v=2" },
    { name: "Youngstown St. University", logo: "/colleges/youngstown-state.png?v=2" },
    { name: "Southwestern College", logo: "/colleges/southwestern-college.png?v=2", large: true },
    { name: "Scottsdale CC", logo: "/colleges/scottsdale-cc.png?v=2" },
    { name: "Glendale CC", logo: "/colleges/glendale-cc.png?v=2" },
    { name: "Justice University", logo: "/colleges/justice-university.png?v=2" },
  ];
  return (
    <S>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="relative z-10">
        <Inner className="text-center">
          <h2 className="font-bebas uppercase text-foreground text-fluid-4xl mb-2">Signed & <span className="text-primary">Committed</span></h2>
          <p className="font-oswald text-foreground/50 uppercase tracking-wider text-fluid-sm mb-fluid-md">11 players at the next level in 1.5 years</p>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-fluid-sm place-items-center overflow-visible">
            {schools.map((s) => (
              <div key={s.name} className="flex flex-col items-center gap-2 overflow-visible">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center relative overflow-visible">
                  <img src={s.logo} alt={s.name} className="w-full h-full object-contain brightness-125" style={s.name === 'Southwestern College' ? { transform: 'scale(3)' } : undefined} loading="lazy" />
                </div>
                <span className="font-oswald text-[8px] md:text-[10px] text-foreground/40 uppercase tracking-wider text-center leading-tight max-w-[80px]">{s.name}</span>
              </div>
            ))}
          </div>
        </Inner>
      </div>
    </S>
  );
};

// ── SLIDE 9: Campus Expansion ──
const Slide9 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
    <div className="relative z-10">
      <Inner>
        <h2 className="font-bebas uppercase text-foreground text-fluid-4xl mb-fluid-md">Campus <span className="text-primary">Expansion</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-fluid-md">
          <div>
            <Building2 className="text-foreground/60 w-[clamp(2rem,5vw,3.5rem)] h-[clamp(2rem,5vw,3.5rem)] mb-fluid-xs" />
            <h3 className="font-bebas uppercase text-foreground text-fluid-xl mb-2">Player Development Center</h3>
            <ul className="flex flex-col gap-1">
              {["Baseball stadium & clubhouse", "Softball stadium & clubhouse", "Practice fields", "Executive & coaches offices"].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="bg-primary rounded-full flex-shrink-0 w-1.5 h-1.5 mt-1.5" />
                  <span className="font-oswald text-foreground/50 leading-relaxed text-fluid-xs">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Home className="text-foreground/60 w-[clamp(2rem,5vw,3.5rem)] h-[clamp(2rem,5vw,3.5rem)] mb-fluid-xs" />
            <h3 className="font-bebas uppercase text-foreground text-fluid-xl mb-2">Housing Expansion</h3>
            <ul className="flex flex-col gap-1">
              {["Male dorms", "Female dorms", "Cafeteria and classrooms", "Student parking"].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="bg-primary rounded-full flex-shrink-0 w-1.5 h-1.5 mt-1.5" />
                  <span className="font-oswald text-foreground/50 leading-relaxed text-fluid-xs">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Shield className="text-foreground/60 w-[clamp(2rem,5vw,3.5rem)] h-[clamp(2rem,5vw,3.5rem)] mb-fluid-xs" />
            <h3 className="font-bebas uppercase text-foreground text-fluid-xl mb-2">Closed Campus</h3>
            <ul className="flex flex-col gap-1">
              {["Gated campus with security entrance", "24/7 security and surveillance", "Resource officer on campus"].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="bg-primary rounded-full flex-shrink-0 w-1.5 h-1.5 mt-1.5" />
                  <span className="font-oswald text-foreground/50 leading-relaxed text-fluid-xs">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Inner>
    </div>
  </S>
);

// ── SLIDE 10: Phase 2 Vision ──
const Slide10 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
    <div className="relative z-10">
      <Inner className="text-center">
        <h2 className="font-bebas uppercase leading-[0.88] text-fluid-4xl mb-fluid-sm">
          <span className="text-primary">Phase 2</span> <span className="text-foreground/40">|</span> The Vision
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-fluid-xs">
          {[
            { img: "/action-30.jpg", label: "Professional-Grade Fields" },
            { img: "/action-25.jpg", label: "Full Campus Complex" },
          ].map((item) => (
            <div key={item.label} className="relative overflow-hidden border border-foreground/20 bg-card/40" style={{ aspectRatio: "4/3" }}>
              <img src={item.img} alt={item.label} className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <p className="absolute bottom-fluid-xs left-fluid-xs font-bebas text-foreground uppercase text-fluid-lg">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="font-oswald text-foreground/40 uppercase tracking-wider text-fluid-xs mt-fluid-xs">Construction Partner: Pono Construction</p>
      </Inner>
    </div>
  </S>
);

// ── SLIDE 11: Pono Construction Vision ──
const Slide11 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
    <div className="relative z-10">
      <Inner>
        <h2 className="font-bebas uppercase leading-[0.88] text-fluid-3xl mb-fluid-sm">
          <span className="text-primary">Phase 2</span> <span className="text-foreground/40">|</span> Construction Vision
        </h2>
        <div className="grid grid-cols-3 gap-fluid-xs mb-fluid-xs">
          {[
            { label: "Stadium Aerial", img: "/action-35.jpg" },
            { label: "Athletic Center", img: "/action-36.jpg" },
            { label: "Player Lounge", img: "/action-37.jpg" },
          ].map((item) => (
            <div key={item.label} className="relative overflow-hidden border border-foreground/20" style={{ aspectRatio: "4/3" }}>
              <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-1 left-1 md:bottom-3 md:left-3 font-bebas text-foreground uppercase text-fluid-xs">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-fluid-xs">
          {["/action-38.jpg", "/action-39.jpg"].map((img) => (
            <div key={img} className="relative overflow-hidden border border-foreground/20" style={{ aspectRatio: "16/9" }}>
              <img src={img} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
          ))}
        </div>
        <p className="font-oswald text-primary uppercase tracking-wider text-right text-fluid-xs mt-fluid-xs">Construction Partner: Pono Construction, LLC</p>
      </Inner>
    </div>
  </S>
);

// ── SLIDE 12: Budget ──
const Slide12 = () => {
  const items = [
    { n: 1, d: "Cafeteria", a: "$2,900,000" }, { n: 2, d: "Housing", a: "$9,300,000" },
    { n: 3, d: "Executive Offices", a: "$800,000" }, { n: 4, d: "Medical", a: "$500,000" },
    { n: 5, d: "Education", a: "$1,400,000" }, { n: 6, d: "Performance/Gym", a: "$1,225,000" },
    { n: 7, d: "Personal Care", a: "$350,000" }, { n: 8, d: "Recovery", a: "$525,000" },
    { n: 9, d: "Player Lounge/Locker Room", a: "$2,100,000" }, { n: 10, d: "Indoor Cages", a: "$1,575,000" },
    { n: 11, d: "Sport Science/Research Center", a: "$370,000" }, { n: 12, d: "Equipment Room/Laundry", a: "$600,000" },
    { n: 13, d: "Team Store", a: "$500,000" }, { n: 14, d: "Baseball Field", a: "$3,910,000" },
    { n: 15, d: "Softball Field", a: "$3,200,000" }, { n: 16, d: "Half Fields", a: "$3,300,000" },
    { n: 17, d: "Turf Field Soccer/Lacrosse", a: "$1,700,000" }, { n: 18, d: "Parking", a: "$710,000" },
    { n: 19, d: "Site Infrastructure", a: "$5,000,000" },
  ];
  return (
    <S>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="relative z-10">
        <Inner>
          <h2 className="font-bebas uppercase leading-[0.88] text-fluid-3xl mb-fluid-sm">
            Legendary Prep Academy <span className="text-primary">Budget</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-fluid-md">
            {items.map((item) => (
              <div key={item.n} className="flex justify-between items-center border-b border-border/20 py-[clamp(0.2rem,0.5vw,0.5rem)]">
                <span className="font-oswald text-foreground/60 text-fluid-xs">{item.n}. {item.d}</span>
                <span className="font-bebas text-foreground text-fluid-sm">{item.a}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center border-t-2 border-primary mt-fluid-xs pt-fluid-xs">
            <span className="font-bebas uppercase text-foreground text-fluid-xl">Construction Hard Cost Total</span>
            <span className="font-bebas text-primary text-fluid-2xl">$39,965,000</span>
          </div>
          <p className="font-oswald text-foreground/30 uppercase tracking-wider text-fluid-xs mt-2">Pono Construction, LLC</p>
        </Inner>
      </div>
    </S>
  );
};

// ── SLIDE 13: Architecture Site Plan ──
const Slide13 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
    <div className="relative z-10">
      <Inner className="text-center">
        <h2 className="font-bebas uppercase leading-[0.88] text-fluid-4xl mb-1">
          <span className="text-primary">L</span>ohmeier<span className="text-primary">A</span>rchitecture
        </h2>
        <p className="font-oswald text-foreground/40 uppercase tracking-wider text-fluid-sm mb-fluid-sm">Campus Master Plan</p>
        <div className="relative bg-card/30 border border-border/30 overflow-hidden mb-fluid-xs" style={{ aspectRatio: "16/9" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Building2 className="text-primary/30 mx-auto w-[clamp(3rem,6vw,5rem)] h-[clamp(3rem,6vw,5rem)] mb-fluid-xs" />
              <p className="font-bebas text-foreground/30 uppercase text-fluid-2xl">3D Site Plan Rendering</p>
              <p className="font-oswald text-foreground/20 text-fluid-xs mt-1">Baseball Fields • Softball Fields • Training Center • Housing</p>
            </div>
          </div>
        </div>
        <p className="font-oswald text-foreground/40 text-fluid-xs">Full athletic campus with multiple fields, indoor training facilities, and student housing</p>
      </Inner>
    </div>
  </S>
);

// ── SLIDE 14: Architecture Renderings ──
const Slide14 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
    <div className="relative z-10">
      <Inner>
        <h2 className="font-bebas uppercase leading-[0.88] text-center text-fluid-3xl mb-fluid-sm">
          <span className="text-primary">L</span>ohmeier<span className="text-primary">A</span>rchitecture
        </h2>
        <div className="grid grid-cols-3 gap-fluid-xs mb-fluid-xs">
          {["Main Building Exterior", "Aerial Campus View", "Field Complex"].map((label) => (
            <div key={label} className="relative overflow-hidden border border-foreground/20 bg-card/30 flex items-center justify-center" style={{ aspectRatio: "4/3" }}>
              <p className="font-bebas text-foreground/20 uppercase text-fluid-xs text-center px-1">{label}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-fluid-xs">
          {["Campus Walkway", "Indoor Training Center", "Weight Room"].map((label) => (
            <div key={label} className="relative overflow-hidden border border-foreground/20 bg-card/30 flex items-center justify-center" style={{ aspectRatio: "4/3" }}>
              <p className="font-bebas text-foreground/20 uppercase text-fluid-xs text-center px-1">{label}</p>
            </div>
          ))}
        </div>
      </Inner>
    </div>
  </S>
);

// ── SLIDE 15: Financial Model ──
const Slide15 = () => {
  const incomeItems = [
    { l: "Legendary Prep Academy (300 Students)", a: "$10,500,000" },
    { l: "Premier Prep Academy", a: "$1,050,000" },
  ];
  const expLeft = [
    { l: "CEO", a: "$200,000" }, { l: "COO", a: "$150,000" }, { l: "CFO", a: "$150,000" },
    { l: "CTO", a: "$150,000" }, { l: "Athletic Director", a: "$100,000" },
    { l: "1 HS Baseball Coach", a: "$80,000" }, { l: "1 MS Baseball Coach", a: "$60,000" },
    { l: "1 HS Softball Coach", a: "$80,000" }, { l: "1 MS Softball Coach", a: "$60,000" },
    { l: "9 Assistant Baseball Coaches", a: "$315,000" }, { l: "9 Assistant Softball Coaches", a: "$315,000" },
    { l: "2 Academic Advisors", a: "$120,000" }, { l: "3 Academic Teachers (3 each sport)", a: "$240,000" },
    { l: "Director of Strength & Conditioning", a: "$120,000" }, { l: "3 Assistant Strength Coaches", a: "$120,000" },
    { l: "1 Director of Athletic Training", a: "$120,000" },
  ];
  const expRight = [
    { l: "4 Assistant Athletic Training", a: "$160,000" }, { l: "Head of Security", a: "$100,000" },
    { l: "Admin/Aux Staff (30 staff)", a: "$600,000" }, { l: "Media Production Team (25 staff)", a: "$1,000,000" },
    { l: "Land Leasing", a: "$1,700,000" }, { l: "Equipment/Apparel (Wilson, etc)", a: "$1,000,000" },
    { l: "Insurance, Electrical, Internet, etc", a: "$800,000" }, { l: "Food Cost", a: "$1,000,000" },
  ];
  const allExp = [...expLeft, ...expRight];
  return (
    <S>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="relative z-10">
        <Inner>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-fluid-md">
            <div>
              <div className="bg-primary/20 border border-primary/40 px-3 py-1.5 mb-2">
                <h3 className="font-bebas text-primary uppercase tracking-wider text-fluid-sm">Money In (Estimated Annually)</h3>
              </div>
              {incomeItems.map((item) => (
                <div key={item.l} className="flex justify-between border-b border-border/20 py-1">
                  <span className="font-oswald text-foreground/60 uppercase text-fluid-xs">{item.l}</span>
                  <span className="font-bebas text-foreground text-fluid-xs">{item.a}</span>
                </div>
              ))}
              <div className="flex justify-between border-t border-primary/60 pt-2 mt-2">
                <span className="font-bebas text-foreground uppercase text-fluid-lg">Total Income</span>
                <span className="font-bebas text-primary text-fluid-lg">$11,550,000</span>
              </div>
            </div>
            <div>
              <div className="bg-primary/20 border border-primary/40 px-3 py-1.5 mb-2">
                <h3 className="font-bebas text-primary uppercase tracking-wider text-fluid-sm">Money Out (Operating Cost)</h3>
              </div>
              {allExp.map((item) => (
                <div key={item.l} className="flex justify-between border-b border-border/20 py-[clamp(0.1rem,0.3vw,0.25rem)]">
                  <span className="font-oswald text-foreground/60 uppercase text-fluid-xs">{item.l}</span>
                  <span className="font-bebas text-foreground text-fluid-xs">{item.a}</span>
                </div>
              ))}
              <div className="flex justify-between border-t border-primary/60 pt-2 mt-2">
                <span className="font-bebas text-primary uppercase text-fluid-lg">Total Expenses</span>
                <span className="font-bebas text-primary text-fluid-lg">$8,740,000</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between border-t-2 border-primary bg-primary/10 mt-fluid-sm p-fluid-xs">
            <span className="font-bebas text-foreground uppercase text-fluid-xl">Income Minus Expenses</span>
            <span className="font-bebas text-primary text-fluid-xl">$2,810,000</span>
          </div>
        </Inner>
      </div>
    </S>
  );
};

// ── SLIDE 16: Projected Profit Margin ──
const Slide16 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-r from-background via-card/20 to-background" />
    <div className="relative z-10">
      <Inner>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-fluid-md">
          <div>
            <h2 className="font-bebas uppercase leading-[0.88] text-fluid-3xl mb-1">
              Projected <span className="text-primary">Profit Margin</span> For LPA
            </h2>
            <div className="bg-primary w-20 h-1 mb-fluid-sm" />
            <div className="flex flex-col gap-fluid-xs">
              <p className="font-oswald text-foreground/60 leading-relaxed text-fluid-sm">
                LPA projects a target profit margin of 30–40%, reflecting its unique offerings and demand for growth.
              </p>
              <p className="font-oswald text-foreground/60 leading-relaxed text-fluid-sm">
                With an updated total revenue of $11.55M and total expenses of $8.74M, LPA anticipates a profit margin of 24.3% in its initial phase.
              </p>
              <p className="font-oswald text-foreground/60 leading-relaxed text-fluid-sm">
                As LPA continues to scale operations, enhance enrollment, and optimize financial efficiency, it strives to reach the 30–40% profit margin benchmark.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-fluid-sm">
            <div className="rounded-full border-4 border-primary/30 flex items-center justify-center w-[clamp(8rem,18vw,14rem)] h-[clamp(8rem,18vw,14rem)]">
              <div className="text-center">
                <span className="font-bebas text-primary text-fluid-4xl">24.3%</span>
                <p className="font-oswald text-foreground/40 uppercase text-fluid-xs">Initial Margin</p>
              </div>
            </div>
            <div className="bg-card/40 border border-border/30 text-center p-fluid-xs">
              <span className="font-bebas text-foreground text-fluid-2xl">30-40%</span>
              <p className="font-oswald text-foreground/40 uppercase text-fluid-xs">Target Range</p>
            </div>
          </div>
        </div>
      </Inner>
    </div>
  </S>
);

// ── SLIDE 17: Business Model ──
const Slide17 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-r from-background via-card/20 to-background" />
    <div className="relative z-10">
      <Inner>
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-fluid-md">
          <div className="flex flex-col gap-fluid-sm">
            {[
              { num: "1", title: "Premium Tuition Model", desc: "LPA investment for a family is currently at $30,000 per year. Tuition will increase with new campus and on campus living." },
              { num: "2", title: "Mini Campus Efficiency", desc: "Initial phase aims for 36.41% profit margin, ideal for growth and reinvestment in the academy's facilities and programs." },
              { num: "3", title: "Full-Campus Expansion", desc: "Phase 3 involves expanding the campus size and adding other primary sports like golf, hockey, basketball, football, tennis, wrestling, etc." },
            ].map((item) => (
              <div key={item.num} className="flex gap-fluid-xs">
                <div className="bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0 w-[clamp(2rem,4vw,3rem)] h-[clamp(2rem,4vw,3rem)]">
                  <span className="font-bebas text-primary text-fluid-lg">{item.num}</span>
                </div>
                <div>
                  <h3 className="font-bebas text-primary uppercase text-fluid-xl mb-1">{item.title}</h3>
                  <p className="font-oswald text-foreground/60 leading-relaxed text-fluid-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <div className="relative overflow-hidden bg-card/20 border border-border/20 w-full" style={{ aspectRatio: "1/1" }}>
              <img src="/action-40.jpg" alt="Campus render" className="w-full h-full object-cover opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
          </div>
        </div>
      </Inner>
    </div>
  </S>
);

// ── SLIDE 18: Phase 3 Flagship Campus ──
const Slide18 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />
    <div className="relative z-10">
      <Inner>
        <h2 className="font-bebas uppercase leading-[0.88] text-fluid-4xl mb-fluid-sm">
          <span className="text-primary">Phase 3</span> : Flagship Campus
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-fluid-md">
          {[
            { icon: <Dumbbell className="w-[clamp(1.5rem,4vw,3rem)] h-[clamp(1.5rem,4vw,3rem)]" />, title: "Player Development Center", desc: "SEC-level player development center with strength, conditioning, sports science and rehab." },
            { icon: <Trophy className="w-[clamp(1.5rem,4vw,3rem)] h-[clamp(1.5rem,4vw,3rem)]" />, title: "Full Spectrum Fields, Courts, and Gymnasium", desc: "Baseball, Softball, Football, Basketball, Soccer, Track n Field, Tennis, Volleyball etc." },
            { icon: <Users className="w-[clamp(1.5rem,4vw,3rem)] h-[clamp(1.5rem,4vw,3rem)]" />, title: "Programs & National Impact", desc: "Establish scholarship programs for ELITE talent, achieve national ranking, travel and compete with private ELITE schools." },
            { icon: <Star className="w-[clamp(1.5rem,4vw,3rem)] h-[clamp(1.5rem,4vw,3rem)]" />, title: "Housing", desc: "Dormitories or apartment living for all sports." },
          ].map((item) => (
            <div key={item.title}>
              <div className="text-foreground/60 mb-fluid-xs">{item.icon}</div>
              <h3 className="font-bebas uppercase text-foreground text-fluid-xl mb-1">{item.title}</h3>
              <p className="font-oswald text-foreground/50 leading-relaxed text-fluid-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-primary w-full h-1 mt-fluid-sm" />
      </Inner>
    </div>
  </S>
);

// ── SLIDE 19: Path to Domination ──
const Slide19 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-r from-card/30 via-background to-background" />
    <div className="relative z-10">
      <Inner>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-fluid-md">
          <div className="relative overflow-hidden border border-foreground/20 hidden md:block" style={{ aspectRatio: "3/4" }}>
            <img src="/action-45.jpg" alt="LPA athlete" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div>
            <h2 className="font-bebas uppercase leading-[0.88] text-fluid-3xl mb-fluid-sm">
              The <span className="text-primary">Path</span> to Domination
            </h2>
            <div className="bg-foreground/20 w-full h-px mb-fluid-sm" />
            <div className="flex flex-col gap-fluid-sm">
              {[
                { num: "1", phase: "Phase 1", title: "Foundation", desc: "Elite coaching, partnerships, winning season." },
                { num: "2", phase: "Phase 2", title: "Mini Campus", desc: "Baseball & softball stadiums, housing, performance center, national recognition." },
                { num: "3", phase: "Phase 3", title: "Flagship Campus", desc: "SEC-level player development center, stadiums, housing. Addition of ALL primary high school sports." },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-fluid-xs">
                  <div className="flex flex-col items-center flex-shrink-0 gap-1">
                    <span className="font-bebas text-foreground/30 text-fluid-2xl">{item.num}</span>
                    <div className="bg-primary/40 w-px h-[clamp(0.75rem,2vw,2rem)]" />
                  </div>
                  <div>
                    <h3 className="font-bebas uppercase text-fluid-lg">
                      <span className="text-primary">{item.phase}:</span> {item.title}
                    </h3>
                    <p className="font-oswald text-foreground/50 leading-relaxed text-fluid-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-foreground/20 w-full h-px mt-fluid-sm" />
          </div>
        </div>
      </Inner>
    </div>
  </S>
);

// ── SLIDE 20: Traction & Milestones ──
const Slide20 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
    <div className="relative z-10">
      <Inner>
        <h2 className="font-bebas uppercase leading-[0.88] text-fluid-4xl mb-fluid-sm">
          Traction and <span className="text-primary">Milestones</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-fluid-xs mb-fluid-xs">
          <div className="bg-card/40 border border-border/30 p-fluid-sm">
            <h3 className="font-bebas uppercase text-foreground text-fluid-xl mb-2">Enrollment</h3>
            <p className="font-oswald text-foreground/60 leading-relaxed text-fluid-sm">
              Launched in August 2024 with 65 players enrolled currently. Expecting to have 100+ by Q1 2027.
            </p>
          </div>
          <div className="bg-card/40 border border-border/30 p-fluid-sm">
            <h3 className="font-bebas uppercase text-foreground text-fluid-xl mb-2">Partnerships</h3>
            <p className="font-oswald text-foreground/60 leading-relaxed text-fluid-sm">
              Wilson, EvoShield, Louisville Slugger, Demarini, Under Armour, Spooner.
            </p>
          </div>
        </div>
        <div className="bg-card/40 border border-border/30 p-fluid-sm">
          <h3 className="font-bebas uppercase text-foreground text-fluid-xl mb-2">Social Media</h3>
          <p className="font-oswald text-foreground/60 leading-relaxed text-fluid-sm">
            431K views in 90 days, 7K interactions, 61K accounts reached, 768 New Followers in 90 Days, 8,060 profile visits in one month (100% organic).
          </p>
        </div>
        <div className="flex justify-end opacity-40 mt-fluid-xs gap-fluid-xs">
          {["/sponsors/wilson.png", "/sponsors/demarini.png", "/sponsors/evoshield.png", "/sponsors/louisville-slugger.png", "/sponsors/spooner.png"].map((logo) => (
            <img key={logo} src={logo} alt="" className="object-contain grayscale h-[clamp(1rem,2.5vw,2.5rem)]" />
          ))}
        </div>
      </Inner>
    </div>
  </S>
);

// ── SLIDE 21: Investment Tiers ──
const Slide21 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-r from-card/30 via-background to-background" />
    <div className="relative z-10">
      <Inner>
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-fluid-md">
          <div className="relative overflow-hidden border border-foreground/20 hidden md:block" style={{ aspectRatio: "3/4" }}>
            <img src="/action-50.jpg" alt="LPA athlete training" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40" />
          </div>
          <div>
            <h2 className="font-bebas uppercase leading-[0.88] text-fluid-3xl mb-fluid-sm">
              Investment Tiers and Competitive <span className="text-primary">Advantages</span>
            </h2>
            <div className="mb-fluid-sm">
              <span className="font-bebas text-primary italic text-fluid-4xl">$5M</span>
              <div className="flex items-center gap-2 my-1">
                <div className="flex-1 bg-foreground/30 h-px" />
                <ChevronRight className="text-foreground/30 w-4 h-4" />
              </div>
              <h3 className="font-bebas text-foreground uppercase text-fluid-xl mb-2">Initial Growth</h3>
              <ul className="flex flex-col gap-1">
                {[
                  "Renovate current building for female locker room and more equipment",
                  "Secure professional level field rentals and elite level tournament play",
                  "Addition of softball players plus coaching staff (Uniforms, gear, travel)",
                  "Addition of media team members",
                  "Addition of administrative staff",
                  "New travel buses and multiple rented homes for out of state transfers",
                ].map((item, i) => (
                  <li key={i} className="font-oswald text-foreground/50 leading-relaxed text-fluid-xs">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-bebas text-primary italic text-fluid-4xl">$40-50M</span>
              <div className="flex items-center gap-2 my-1">
                <div className="flex-1 bg-foreground/30 h-px" />
                <ChevronRight className="text-foreground/30 w-4 h-4" />
              </div>
              <h3 className="font-bebas text-foreground uppercase text-fluid-xl mb-1">Mini Campus</h3>
              <p className="font-oswald text-foreground/50 text-fluid-xs">Phase 2 build details (slides 12)</p>
            </div>
          </div>
        </div>
      </Inner>
    </div>
  </S>
);

// ── SLIDES ARRAY ──
const slides = [Slide1, Slide2, SlideYouTube, Slide5, Slide6, Slide6B, Slide7, Slide8, Slide9, Slide10, Slide11, Slide12, Slide13, Slide14, Slide15, Slide16, Slide17, Slide18, Slide19, Slide20, Slide21];

// ── MAIN COMPONENT ──
const PitchDeck = () => {
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goTo = useCallback((target: number, dir: "next" | "prev") => {
    if (transitioning || target === current) return;
    setDirection(dir);
    setTransitioning(true);
    setTimeout(() => {
      setDisplayed(target);
      setCurrent(target);
      setTimeout(() => setTransitioning(false), 50);
    }, 300);
  }, [current, transitioning]);

  const next = useCallback(() => {
    if (current < slides.length - 1) goTo(current + 1, "next");
  }, [current, goTo]);
  const prev = useCallback(() => {
    if (current > 0) goTo(current - 1, "prev");
  }, [current, goTo]);

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

  // Touch/swipe support
  const touchStart = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); }
    touchStart.current = null;
  };

  const CurrentSlide = slides[displayed];

  const slideStyle: React.CSSProperties = {
    transition: "opacity 0.4s ease, transform 0.4s ease",
    opacity: transitioning ? 0 : 1,
    transform: transitioning ? `translateX(${direction === "next" ? "30px" : "-30px"})` : "translateX(0)",
  };

  return (
    <div
      className="fixed inset-0 bg-black select-none overflow-hidden flex flex-col"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slide content */}
      <div className="flex-1 relative overflow-hidden" style={slideStyle}>
        <CurrentSlide />
      </div>

      {/* Click navigation zones – desktop only */}
      <div className="absolute inset-0 z-40 hidden md:flex pointer-events-none">
        <div className="w-1/3 h-full cursor-w-resize pointer-events-auto" onClick={prev} />
        <div className="w-1/3 h-full" />
        <div className="w-1/3 h-full cursor-e-resize pointer-events-auto" onClick={next} />
      </div>

      {/* Bottom controls */}
      <div className="relative z-50 flex items-center justify-between bg-black/80 border-t border-border/20 px-fluid-container-px py-2">
        <div className="flex items-center gap-3">
          <img src={lpaBadge} alt="LPA" className="h-6 w-auto opacity-60" />
          <div className="w-px h-4 bg-border/40" />
          <button onClick={prev} disabled={current === 0} className="text-foreground/50 hover:text-foreground disabled:opacity-20 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="font-bebas text-foreground/50 tracking-wider text-fluid-xs">
            {current + 1} / {slides.length}
          </span>
          <button onClick={next} disabled={current === slides.length - 1} className="text-foreground/50 hover:text-foreground disabled:opacity-20 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 bg-foreground/10 rounded-full overflow-hidden h-1 mx-4">
          <div className="h-full bg-primary transition-all duration-300" style={{ width: `${((current + 1) / slides.length) * 100}%` }} />
        </div>

        <button onClick={toggleFullscreen} className="text-foreground/50 hover:text-foreground transition-colors">
          {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};

export default PitchDeck;
