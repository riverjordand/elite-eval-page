import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Users, Home, Trophy, Building2, GraduationCap, Target, Dumbbell, Star } from "lucide-react";
import lpaBadge from "@/assets/lpa-badge-cactus.png";
import facilityImg from "@/assets/facility-interior.jpg";
import strengthImg from "@/assets/facility-strength-conditioning.jpg";
import sportsMedImg from "@/assets/facility-sports-medicine.jpg";

// ── SCALING ENGINE ──
// All slides render at 1920×1080 then scale to fit any viewport.
const SLIDE_W = 1920;
const SLIDE_H = 1080;

const useSlideScale = (containerRef: React.RefObject<HTMLDivElement | null>) => {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const { clientWidth: w, clientHeight: h } = containerRef.current;
      setScale(Math.min(w / SLIDE_W, h / SLIDE_H));
    };
    update();
    window.addEventListener("resize", update);
    const obs = new ResizeObserver(update);
    if (containerRef.current) obs.observe(containerRef.current);
    return () => { window.removeEventListener("resize", update); obs.disconnect(); };
  }, [containerRef]);
  return scale;
};

// Wrapper renders children at fixed 1920×1080
const SlideFrame = ({ children, scale }: { children: React.ReactNode; scale: number }) => (
  <div
    className="absolute slide-content"
    style={{
      width: SLIDE_W,
      height: SLIDE_H,
      left: "50%",
      top: "50%",
      marginLeft: -SLIDE_W / 2,
      marginTop: -SLIDE_H / 2,
      transform: `scale(${scale})`,
      transformOrigin: "center center",
    }}
  >
    {children}
  </div>
);

// Base for every slide – fills the 1920×1080 frame
const S = ({ children }: { children: React.ReactNode }) => (
  <div className="absolute inset-0 bg-background overflow-hidden">
    {children}
  </div>
);

// ── SLIDE 1: Title ──
const Slide1 = () => (
  <S>
    <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-30">
      <source src="/hero-training.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center px-[120px]">
        <img src={lpaBadge} alt="LPA" className="mx-auto mb-[40px]" style={{ width: 180, height: 180, filter: "drop-shadow(0 0 40px hsl(var(--primary) / 0.4))" }} />
        <p className="font-oswald uppercase tracking-[0.4em] text-primary mb-[20px]" style={{ fontSize: 22 }}>The Blueprint</p>
        <h1 className="font-bebas uppercase leading-[0.85] mb-[30px]" style={{ fontSize: 160 }}>
          <span className="text-foreground">Legendary Prep</span><br />
          <span className="text-primary">Academy</span>
        </h1>
        <p className="font-oswald text-foreground/60 italic mx-auto" style={{ fontSize: 28, maxWidth: 900 }}>
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
    <div className="absolute inset-0 flex items-center justify-center">
      <div style={{ width: 1560, padding: "0 60px" }}>
        <div className="flex items-center justify-between" style={{ marginBottom: 50 }}>
          <h2 className="font-bebas uppercase leading-[0.88]" style={{ fontSize: 90 }}>
            <span className="text-primary">Phase 1</span> <span className="text-foreground/40">|</span> Laying The Foundation
          </h2>
          <div className="bg-primary/20 border border-primary/40 rounded-sm" style={{ padding: "8px 24px" }}>
            <span className="font-bebas text-primary uppercase tracking-wider" style={{ fontSize: 28 }}>Completed</span>
          </div>
        </div>
        <div className="grid grid-cols-2" style={{ gap: 30 }}>
          {[
            { num: "1", title: "Secure Funding", desc: "$1M raised to kickstart our vision and build a cost-efficient facility." },
            { num: "2", title: "Build Elite Staff", desc: "5 Pro-level coaches and 1 MLB scouts assembled." },
            { num: "3", title: "Establish Partnerships", desc: "Wilson, EvoShield, Louisville Slugger, DeMarini, Under Armour secured contracts." },
            { num: "4", title: "Field First Team", desc: "65 enrolled players\n2030 class | 6 state ranked\n2029 class | 2 state ranked\n2028 class | 2 state ranked" },
          ].map((item) => (
            <div key={item.num} className="bg-card/60 border border-border/30 flex" style={{ padding: 40, gap: 24 }}>
              <span className="font-bebas text-foreground/20 flex-shrink-0" style={{ fontSize: 60 }}>{item.num}</span>
              <div>
                <h3 className="font-bebas uppercase text-foreground" style={{ fontSize: 32, marginBottom: 12 }}>{item.title}</h3>
                <p className="font-oswald text-foreground/50 leading-relaxed whitespace-pre-line" style={{ fontSize: 20 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </S>
);

// ── SLIDE 3: Divider ──
const Slide3 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
    <div className="absolute bg-primary/60" style={{ top: 120, left: 80, right: 80, height: 1 }} />
    <div className="absolute bg-primary/60" style={{ bottom: 120, left: 80, right: 80, height: 1 }} />
    <div className="absolute inset-0 flex items-center justify-center">
      <h2 className="font-bebas uppercase leading-[0.88] text-center" style={{ fontSize: 120, padding: "0 80px" }}>
        <span className="text-primary">Phase 1</span> <span className="text-foreground/40">|</span> What We Have Built…
      </h2>
    </div>
  </S>
);

// ── SLIDE 4: Video ──
const Slide4 = () => (
  <S>
    <div className="absolute inset-0 bg-black" />
    <div className="absolute inset-0 flex items-center justify-center" style={{ padding: "0 120px" }}>
      <div className="relative w-full bg-card/20 border border-border/30 overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/hero-training.mp4" type="video/mp4" />
        </video>
        <div className="absolute bg-black/60 backdrop-blur-sm" style={{ bottom: 20, left: 20, padding: "10px 20px" }}>
          <p className="font-bebas text-foreground/70 uppercase tracking-wider" style={{ fontSize: 20 }}>LPA Cinematic Pitch Video</p>
        </div>
      </div>
    </div>
  </S>
);

// ── SLIDE 5: Facility ──
const Slide5 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div style={{ width: 1680, padding: "0 60px" }}>
        <div className="grid grid-cols-4" style={{ gap: 20, marginBottom: 40 }}>
          {[
            { img: facilityImg, label: "Training Area" },
            { img: "/action-20.jpg", label: "Recovery Center" },
            { img: strengthImg, label: "Strength Conditioning" },
            { img: sportsMedImg, label: "Sports Medicine" },
          ].map((f) => (
            <div key={f.label} className="relative overflow-hidden border border-foreground/20" style={{ aspectRatio: "3/4" }}>
              <img src={f.img} alt={f.label} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <h3 className="absolute font-bebas text-foreground uppercase leading-tight" style={{ bottom: 20, left: 20, right: 20, fontSize: 28 }}>{f.label}</h3>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4" style={{ gap: 20 }}>
          {[
            { text: "Our academy offers", hl: "over 18,000 sq. ft. of dedicated space", after: "for baseball training." },
            { text: "Features", hl: "cutting-edge recovery tools", after: "like hyperbaric chambers and infrared saunas." },
            { text: "Advanced weight room with", hl: "$250,000 of equipment", after: "for athletic enhancement." },
            { text: "Weekly visits from", hl: "Spooner Physical Therapy", after: "experts for injury prevention." },
          ].map((item, i) => (
            <p key={i} className="font-oswald text-foreground/60 leading-relaxed uppercase" style={{ fontSize: 18 }}>
              {item.text} <span className="text-primary">{item.hl}</span> {item.after}
            </p>
          ))}
        </div>
      </div>
    </div>
  </S>
);

// ── SLIDE 6: Coaching Staff ──
const Slide6 = () => {
  const staff = [
    { name: "Josh Garcia", title: "Head Strength & Conditioning", creds: ["Bachelor of Science in Kinesiology", "Certified S&C Specialist (CSCS)", "Performance Enhancement Specialist (PES)", "EXOS Performance Specialist (XPS)", "16 years of experience as a performance coach"] },
    { name: "Mark Karaviotis", title: "Head Baseball Coach | Athletic Director", creds: ["Former Division 1 baseball player at Oregon", "Drafted 19th round by the Arizona Diamondbacks", "2016 Hillsboro Hops batting champion", "3x MiLB All Star", "7 years of professional baseball experience"] },
    { name: "Alex Lontayo", title: "Pitching Coordinator | Cub's Scout", creds: ["Former Division 1 baseball player at Tulane University", "Drafted by the Boston Red Sox in 1999", "7 years of professional baseball experience", "12 years of professional scouting experience", "Current West Coast Cross Checker for the Chicago Cubs"] },
    { name: "Joe Dunigan", title: "Hitting Coordinator | Astro's Scout", creds: ["Former Division 1 baseball player at Oklahoma", "Drafted 41st round by the Montreal Expos", "Drafted 5th round by the Seattle Mariners", "10 years of professional baseball experience", "Current Area Scout for the Houston Astros"] },
    { name: "Eric Smith", title: "Recruiting Coordinator | Assistant Coach", creds: ["Former Division 1 baseball player at the University of Rhode Island", "Drafted 2nd round by Arizona Diamondbacks", "6 years of professional baseball experience"] },
    { name: "Terrell Hudson", title: "Assistant & Pitching Coach", creds: ["Former Division 1 baseball player at the University of New Mexico", "Extensive experience in training and managing ELITE youth baseball"] },
  ];
  return (
    <S>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/20 to-background" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div style={{ width: 1680, padding: "0 60px" }}>
          <div className="grid grid-cols-3" style={{ gap: 24 }}>
            {staff.map((s) => (
              <div key={s.name} className="bg-card/40 border border-border/30" style={{ padding: 24 }}>
                <h3 className="font-bebas text-foreground uppercase leading-tight" style={{ fontSize: 28 }}>{s.name}</h3>
                <p className="font-oswald text-primary uppercase tracking-wider" style={{ fontSize: 16, marginBottom: 16 }}>{s.title}</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {s.creds.map((c, i) => (
                    <li key={i} className="flex items-start" style={{ gap: 8 }}>
                      <div className="bg-primary rounded-full flex-shrink-0" style={{ width: 6, height: 6, marginTop: 8 }} />
                      <span className="font-oswald text-foreground/50 leading-relaxed" style={{ fontSize: 16 }}>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </S>
  );
};

// ── SLIDE 7: Academic Excellence ──
const Slide7 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-card/30 to-background" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div style={{ width: 1400, padding: "0 60px" }}>
        <h2 className="font-bebas uppercase leading-[0.88]" style={{ fontSize: 90, marginBottom: 8 }}>Academic Excellence:</h2>
        <h2 className="font-bebas uppercase leading-[0.88] text-primary" style={{ fontSize: 72, marginBottom: 50 }}>Simplified</h2>
        <div className="flex" style={{ gap: 60 }}>
          <div className="flex-1">
            <p className="font-bebas text-foreground uppercase" style={{ fontSize: 26, marginBottom: 8 }}>Key Benefits of Our Streamlined</p>
            <p className="font-bebas text-primary uppercase" style={{ fontSize: 26, marginBottom: 40 }}>Academic Program</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                "Tailored curriculum designed to integrate with the student's athletic training schedule.",
                "Focusing instead on essential learning objectives and preparation to play at the NCAA Division 1 Level.",
                "Access to a dedicated Academic Advisor.",
                "Flexible online course structure that accommodates travel and training commitments.",
                "Collaboration with Premier Prep Academy ensures a high-quality educational experience that aligns with athletic goals.",
              ].map((item, i) => (
                <li key={i} className="font-oswald text-foreground/60 leading-relaxed" style={{ fontSize: 22 }}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center" style={{ width: 320, gap: 20 }}>
            <div className="bg-card/40 border border-border/20 flex items-center justify-center" style={{ width: 220, height: 220 }}>
              <GraduationCap className="text-primary/40" style={{ width: 100, height: 100 }} />
            </div>
            <p className="font-oswald text-foreground/40 text-center" style={{ fontSize: 16 }}>Athletic Director | Principal | LPA Head Coach</p>
          </div>
        </div>
      </div>
    </div>
  </S>
);

// ── SLIDE 8: Phase 1 Goals Remaining ──
const Slide8 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
    <div className="absolute bg-primary/60" style={{ top: 80, left: 80, right: 80, height: 1 }} />
    <div className="absolute bg-primary/60" style={{ bottom: 80, left: 80, right: 80, height: 1 }} />
    <div className="absolute inset-0 flex items-center justify-center">
      <div style={{ width: 1400, padding: "0 60px" }}>
        <h2 className="font-bebas uppercase leading-[0.88]" style={{ fontSize: 90, marginBottom: 60 }}>
          <span className="text-primary">Phase 1</span> <span className="text-foreground/40">|</span> Goals Remaining
        </h2>
        <div className="grid grid-cols-3" style={{ gap: 50 }}>
          <div>
            <Users className="text-foreground/60" style={{ width: 56, height: 56, marginBottom: 20 }} />
            <h3 className="font-bebas uppercase text-foreground" style={{ fontSize: 30, marginBottom: 16 }}>Student Athletes</h3>
            <p className="font-oswald text-foreground/50 leading-relaxed" style={{ fontSize: 20 }}>
              Currently at 65 players with plans to reach 100+ players by Q1 2027. Secure athletic scholarship fund for financially eligible student.
            </p>
          </div>
          <div>
            <Home className="text-foreground/60" style={{ width: 56, height: 56, marginBottom: 20 }} />
            <h3 className="font-bebas uppercase text-foreground" style={{ fontSize: 30, marginBottom: 16 }}>Housing (Phase 1)</h3>
            <p className="font-oswald text-foreground/50 leading-relaxed" style={{ fontSize: 20 }}>
              Rent a 4 to 5 bedroom house to host 8-10 high level out of state players with a on-site live-in coach.
            </p>
          </div>
          <div>
            <Trophy className="text-foreground/60" style={{ width: 56, height: 56, marginBottom: 20 }} />
            <h3 className="font-bebas uppercase text-foreground" style={{ fontSize: 30, marginBottom: 16 }}>Recognition</h3>
            <p className="font-oswald text-foreground/50 leading-relaxed" style={{ fontSize: 20, marginBottom: 12 }}>Players signed and committed:</p>
            <ul className="font-oswald text-foreground/50" style={{ fontSize: 20, display: "flex", flexDirection: "column", gap: 4 }}>
              {["Coastal Carolina", "Ole Miss", "Texas Tech", "Utah Valley", "New Mexico State", "Youngstown State"].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </S>
);

// ── SLIDE 9: Phase 2 Mini Campus ──
const Slide9 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div style={{ width: 1400, padding: "0 60px" }}>
        <h2 className="font-bebas uppercase leading-[0.88]" style={{ fontSize: 90, marginBottom: 8 }}>
          <span className="text-primary">Phase 2</span> <span className="text-foreground/40">|</span> Baseball/Softball Mini Campus
        </h2>
        <div className="bg-foreground/20" style={{ width: "100%", height: 1, marginBottom: 60 }} />
        <div className="grid grid-cols-3" style={{ gap: 50 }}>
          {[
            { icon: <Building2 style={{ width: 56, height: 56 }} />, title: "New Facility Expansion", desc: "Larger athletic center accommodating 150 baseball and 150 softball players. Access to professional-grade fields for practice and games. On site baseball and softball stadium with individual club house access." },
            { icon: <Building2 style={{ width: 56, height: 56 }} />, title: "Housing Expansion", desc: "Dorm style apartments for baseball and softball team. Out-of-state players create pipeline for broader reach." },
            { icon: <Target style={{ width: 56, height: 56 }} />, title: "National Recognition", desc: "Compete in national tournaments. Build ranked teams securing D1 scholarships, NIL deals, and MLB draft opportunities." },
          ].map((item) => (
            <div key={item.title}>
              <div className="text-foreground/60" style={{ marginBottom: 20 }}>{item.icon}</div>
              <h3 className="font-bebas uppercase text-foreground" style={{ fontSize: 30, marginBottom: 16 }}>{item.title}</h3>
              <p className="font-oswald text-foreground/50 leading-relaxed" style={{ fontSize: 20 }}>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-primary/60" style={{ width: "100%", height: 1, marginTop: 60 }} />
      </div>
    </div>
  </S>
);

// ── SLIDE 10: Phase 2 Vision ──
const Slide10 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center" style={{ width: 1400, padding: "0 60px" }}>
        <h2 className="font-bebas uppercase leading-[0.88]" style={{ fontSize: 90, marginBottom: 50 }}>
          <span className="text-primary">Phase 2</span> <span className="text-foreground/40">|</span> The Vision
        </h2>
        <div className="grid grid-cols-2" style={{ gap: 24 }}>
          {[
            { img: "/action-30.jpg", label: "Professional-Grade Fields" },
            { img: "/action-25.jpg", label: "Full Campus Complex" },
          ].map((item) => (
            <div key={item.label} className="relative overflow-hidden border border-foreground/20 bg-card/40" style={{ aspectRatio: "4/3" }}>
              <img src={item.img} alt={item.label} className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <p className="absolute font-bebas text-foreground uppercase" style={{ bottom: 20, left: 20, fontSize: 26 }}>{item.label}</p>
            </div>
          ))}
        </div>
        <p className="font-oswald text-foreground/40 uppercase tracking-wider" style={{ fontSize: 20, marginTop: 30 }}>Construction Partner: Pono Construction</p>
      </div>
    </div>
  </S>
);

// ── SLIDE 11: Pono Construction Vision ──
const Slide11 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div style={{ width: 1680, padding: "0 60px" }}>
        <h2 className="font-bebas uppercase leading-[0.88]" style={{ fontSize: 80, marginBottom: 40 }}>
          <span className="text-primary">Phase 2</span> <span className="text-foreground/40">|</span> Construction Vision
        </h2>
        <div className="grid grid-cols-3" style={{ gap: 16, marginBottom: 16 }}>
          {[
            { label: "Stadium Aerial", img: "/action-35.jpg" },
            { label: "Athletic Center", img: "/action-36.jpg" },
            { label: "Player Lounge", img: "/action-37.jpg" },
          ].map((item) => (
            <div key={item.label} className="relative overflow-hidden border border-foreground/20" style={{ aspectRatio: "4/3" }}>
              <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute font-bebas text-foreground uppercase" style={{ bottom: 16, left: 16, fontSize: 22 }}>{item.label}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2" style={{ gap: 16 }}>
          {["/action-38.jpg", "/action-39.jpg"].map((img) => (
            <div key={img} className="relative overflow-hidden border border-foreground/20" style={{ aspectRatio: "16/9" }}>
              <img src={img} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
          ))}
        </div>
        <p className="font-oswald text-primary uppercase tracking-wider text-right" style={{ fontSize: 20, marginTop: 24 }}>Construction Partner: Pono Construction, LLC</p>
      </div>
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
      <div className="absolute inset-0 flex items-center justify-center">
        <div style={{ width: 1400, padding: "0 60px" }}>
          <h2 className="font-bebas uppercase leading-[0.88]" style={{ fontSize: 72, marginBottom: 40 }}>
            Legendary Prep Academy <span className="text-primary">Budget</span>
          </h2>
          <div className="grid grid-cols-2" style={{ gap: "0 40px" }}>
            {items.map((item) => (
              <div key={item.n} className="flex justify-between items-center border-b border-border/20" style={{ padding: "10px 0" }}>
                <span className="font-oswald text-foreground/60" style={{ fontSize: 20 }}>{item.n}. {item.d}</span>
                <span className="font-bebas text-foreground" style={{ fontSize: 22 }}>{item.a}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center border-t-2 border-primary" style={{ marginTop: 30, paddingTop: 20 }}>
            <span className="font-bebas uppercase text-foreground" style={{ fontSize: 32 }}>Construction Hard Cost Total</span>
            <span className="font-bebas text-primary" style={{ fontSize: 38 }}>$39,965,000</span>
          </div>
          <p className="font-oswald text-foreground/30 uppercase tracking-wider" style={{ fontSize: 16, marginTop: 16 }}>Pono Construction, LLC</p>
        </div>
      </div>
    </S>
  );
};

// ── SLIDE 13: Architecture Site Plan ──
const Slide13 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center" style={{ width: 1400, padding: "0 60px" }}>
        <h2 className="font-bebas uppercase leading-[0.88]" style={{ fontSize: 90, marginBottom: 12 }}>
          <span className="text-primary">L</span>ohmeier<span className="text-primary">A</span>rchitecture
        </h2>
        <p className="font-oswald text-foreground/40 uppercase tracking-wider" style={{ fontSize: 22, marginBottom: 50 }}>Campus Master Plan</p>
        <div className="relative bg-card/30 border border-border/30 overflow-hidden" style={{ aspectRatio: "16/9", marginBottom: 30 }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Building2 className="text-primary/30 mx-auto" style={{ width: 80, height: 80, marginBottom: 20 }} />
              <p className="font-bebas text-foreground/30 uppercase" style={{ fontSize: 32 }}>3D Site Plan Rendering</p>
              <p className="font-oswald text-foreground/20" style={{ fontSize: 18, marginTop: 12 }}>Baseball Fields • Softball Fields • Training Center • Housing</p>
            </div>
          </div>
        </div>
        <p className="font-oswald text-foreground/40" style={{ fontSize: 18 }}>Full athletic campus with multiple fields, indoor training facilities, and student housing</p>
      </div>
    </div>
  </S>
);

// ── SLIDE 14: Architecture Renderings ──
const Slide14 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div style={{ width: 1680, padding: "0 60px" }}>
        <h2 className="font-bebas uppercase leading-[0.88] text-center" style={{ fontSize: 72, marginBottom: 40 }}>
          <span className="text-primary">L</span>ohmeier<span className="text-primary">A</span>rchitecture
        </h2>
        <div className="grid grid-cols-3" style={{ gap: 16, marginBottom: 16 }}>
          {["Main Building Exterior", "Aerial Campus View", "Field Complex"].map((label) => (
            <div key={label} className="relative overflow-hidden border border-foreground/20 bg-card/30 flex items-center justify-center" style={{ aspectRatio: "4/3" }}>
              <p className="font-bebas text-foreground/20 uppercase" style={{ fontSize: 22 }}>{label}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3" style={{ gap: 16 }}>
          {["Campus Walkway", "Indoor Training Center", "Weight Room"].map((label) => (
            <div key={label} className="relative overflow-hidden border border-foreground/20 bg-card/30 flex items-center justify-center" style={{ aspectRatio: "4/3" }}>
              <p className="font-bebas text-foreground/20 uppercase" style={{ fontSize: 22 }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
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
  return (
    <S>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-2" style={{ width: 1680, padding: "0 60px", gap: 50 }}>
          <div>
            <div className="bg-primary/20 border border-primary/40" style={{ padding: "10px 20px", marginBottom: 16 }}>
              <h3 className="font-bebas text-primary uppercase tracking-wider" style={{ fontSize: 24 }}>Money In (Estimated Annually)</h3>
            </div>
            {incomeItems.map((item) => (
              <div key={item.l} className="flex justify-between border-b border-border/20" style={{ padding: "8px 0" }}>
                <span className="font-oswald text-foreground/60 uppercase" style={{ fontSize: 18 }}>{item.l}</span>
                <span className="font-bebas text-foreground" style={{ fontSize: 20 }}>{item.a}</span>
              </div>
            ))}
            <div className="flex justify-between border-t border-primary/60" style={{ padding: "12px 0", marginTop: 8 }}>
              <span className="font-bebas text-foreground uppercase" style={{ fontSize: 24 }}>Total Income</span>
              <span className="font-bebas text-primary" style={{ fontSize: 24 }}>$11,550,000</span>
            </div>
            <div className="bg-primary/20 border border-primary/40" style={{ padding: "10px 20px", marginTop: 30, marginBottom: 16 }}>
              <h3 className="font-bebas text-primary uppercase tracking-wider" style={{ fontSize: 24 }}>Money Out (Estimated Operating Cost)</h3>
            </div>
            {expLeft.map((item) => (
              <div key={item.l} className="flex justify-between border-b border-border/20" style={{ padding: "5px 0" }}>
                <span className="font-oswald text-foreground/60 uppercase" style={{ fontSize: 16 }}>{item.l}</span>
                <span className="font-bebas text-foreground" style={{ fontSize: 18 }}>{item.a}</span>
              </div>
            ))}
          </div>
          <div style={{ paddingTop: 50 }}>
            {expRight.map((item) => (
              <div key={item.l} className="flex justify-between border-b border-border/20" style={{ padding: "8px 0" }}>
                <span className="font-oswald text-foreground/60 uppercase" style={{ fontSize: 18 }}>{item.l}</span>
                <span className="font-bebas text-foreground" style={{ fontSize: 20 }}>{item.a}</span>
              </div>
            ))}
            <div className="flex justify-between border-t border-primary/60" style={{ padding: "16px 0", marginTop: 20 }}>
              <span className="font-bebas text-primary uppercase" style={{ fontSize: 24 }}>Total Expenses</span>
              <span className="font-bebas text-primary" style={{ fontSize: 24 }}>$8,740,000</span>
            </div>
            <div className="flex justify-between border-t-2 border-primary bg-primary/10" style={{ marginTop: 30, padding: "16px 24px" }}>
              <span className="font-bebas text-foreground uppercase" style={{ fontSize: 32 }}>Income Minus Expenses</span>
              <span className="font-bebas text-primary" style={{ fontSize: 32 }}>$2,810,000</span>
            </div>
          </div>
        </div>
      </div>
    </S>
  );
};

// ── SLIDE 16: Projected Profit Margin ──
const Slide16 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-r from-background via-card/20 to-background" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="grid grid-cols-2 items-center" style={{ width: 1400, padding: "0 60px", gap: 80 }}>
        <div>
          <h2 className="font-bebas uppercase leading-[0.88]" style={{ fontSize: 72, marginBottom: 12 }}>
            Projected <span className="text-primary">Profit Margin</span> For LPA
          </h2>
          <div className="bg-primary" style={{ width: 120, height: 4, marginBottom: 40 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <p className="font-oswald text-foreground/60 leading-relaxed" style={{ fontSize: 22 }}>
              LPA projects a target profit margin of 30–40%, reflecting its unique offerings and demand for growth.
            </p>
            <p className="font-oswald text-foreground/60 leading-relaxed" style={{ fontSize: 22 }}>
              With an updated total revenue of $11.55M and total expenses of $8.74M, LPA anticipates a profit margin of 24.3% in its initial phase. While slightly below the ideal range, this margin still supports reinvestment and sustainable growth.
            </p>
            <p className="font-oswald text-foreground/60 leading-relaxed" style={{ fontSize: 22 }}>
              As LPA continues to scale operations, enhance enrollment, and optimize financial efficiency, it strives to reach the 30–40% profit margin benchmark, reinforcing its position as a top-tier athletic academy.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center" style={{ gap: 30 }}>
          <div className="rounded-full border-4 border-primary/30 flex items-center justify-center" style={{ width: 260, height: 260 }}>
            <div className="text-center">
              <span className="font-bebas text-primary" style={{ fontSize: 72 }}>24.3%</span>
              <p className="font-oswald text-foreground/40 uppercase" style={{ fontSize: 18 }}>Initial Margin</p>
            </div>
          </div>
          <div className="bg-card/40 border border-border/30 text-center" style={{ padding: 24 }}>
            <span className="font-bebas text-foreground" style={{ fontSize: 36 }}>30-40%</span>
            <p className="font-oswald text-foreground/40 uppercase" style={{ fontSize: 16 }}>Target Range</p>
          </div>
        </div>
      </div>
    </div>
  </S>
);

// ── SLIDE 17: Business Model ──
const Slide17 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-r from-background via-card/20 to-background" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="grid grid-cols-2 items-start" style={{ width: 1400, padding: "0 60px", gap: 80 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 50 }}>
          {[
            { num: "1", title: "Premium Tuition Model", desc: "LPA investment for a family is currently at $30,000 per year. Tuition will increase with new campus and on campus living." },
            { num: "2", title: "Mini Campus Efficiency", desc: "Initial phase aims for 36.41% profit margin, ideal for growth and reinvestment in the academy's facilities and programs." },
            { num: "3", title: "Full-Campus Expansion", desc: "Phase 3 involves expanding the campus size and adding other primary sports like golf, hockey, basketball, football, tennis, wrestling, etc." },
          ].map((item) => (
            <div key={item.num} className="flex" style={{ gap: 20 }}>
              <div className="bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0" style={{ width: 50, height: 50 }}>
                <span className="font-bebas text-primary" style={{ fontSize: 26 }}>{item.num}</span>
              </div>
              <div>
                <h3 className="font-bebas text-primary uppercase" style={{ fontSize: 30, marginBottom: 10 }}>{item.title}</h3>
                <p className="font-oswald text-foreground/60 leading-relaxed" style={{ fontSize: 22 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="relative overflow-hidden bg-card/20 border border-border/20" style={{ width: "100%", aspectRatio: "1/1" }}>
            <img src="/action-40.jpg" alt="Campus render" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  </S>
);

// ── SLIDE 18: Phase 3 Flagship Campus ──
const Slide18 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div style={{ width: 1400, padding: "0 60px" }}>
        <h2 className="font-bebas uppercase leading-[0.88]" style={{ fontSize: 90, marginBottom: 50 }}>
          <span className="text-primary">Phase 3</span> : Flagship Campus
        </h2>
        <div className="grid grid-cols-2" style={{ gap: 50 }}>
          {[
            { icon: <Dumbbell style={{ width: 50, height: 50 }} />, title: "Player Development Center", desc: "SEC-level player development center with strength, conditioning, sports science and rehab." },
            { icon: <Trophy style={{ width: 50, height: 50 }} />, title: "Full Spectrum Fields, Courts, and Gymnasium", desc: "Baseball, Softball, Football, Basketball, Soccer, Track n Field, Tennis, Volleyball etc." },
            { icon: <Users style={{ width: 50, height: 50 }} />, title: "Programs & National Impact", desc: "Establish scholarship programs for ELITE talent, achieve national ranking, travel and compete with private ELITE schools." },
            { icon: <Star style={{ width: 50, height: 50 }} />, title: "Housing", desc: "Dormitories or apartment living for all sports." },
          ].map((item) => (
            <div key={item.title}>
              <div className="text-foreground/60" style={{ marginBottom: 16 }}>{item.icon}</div>
              <h3 className="font-bebas uppercase text-foreground" style={{ fontSize: 30, marginBottom: 12 }}>{item.title}</h3>
              <p className="font-oswald text-foreground/50 leading-relaxed" style={{ fontSize: 22 }}>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-primary" style={{ width: "100%", height: 4, marginTop: 50 }} />
      </div>
    </div>
  </S>
);

// ── SLIDE 19: Path to Domination ──
const Slide19 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-r from-card/30 via-background to-background" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="grid grid-cols-2 items-center" style={{ width: 1400, padding: "0 60px", gap: 80 }}>
        <div className="relative overflow-hidden border border-foreground/20" style={{ aspectRatio: "3/4" }}>
          <img src="/action-45.jpg" alt="LPA athlete" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div>
          <h2 className="font-bebas uppercase leading-[0.88]" style={{ fontSize: 80, marginBottom: 40 }}>
            The <span className="text-primary">Path</span> to Domination
          </h2>
          <div className="bg-foreground/20" style={{ width: "100%", height: 1, marginBottom: 40 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            {[
              { num: "1", phase: "Phase 1", title: "Foundation", desc: "Elite coaching, partnerships, winning season." },
              { num: "2", phase: "Phase 2", title: "Mini Campus", desc: "Baseball & softball stadiums, housing, performance center, national recognition." },
              { num: "3", phase: "Phase 3", title: "Flagship Campus", desc: "SEC-level player development center, stadiums, housing. Addition of ALL primary high school sports. Football, basketball, soccer, track n field, etc." },
            ].map((item) => (
              <div key={item.num} className="flex items-start" style={{ gap: 20 }}>
                <div className="flex flex-col items-center flex-shrink-0" style={{ gap: 6 }}>
                  <span className="font-bebas text-foreground/30" style={{ fontSize: 40 }}>{item.num}</span>
                  <div className="bg-primary/40" style={{ width: 1, height: 30 }} />
                </div>
                <div>
                  <h3 className="font-bebas uppercase" style={{ fontSize: 26 }}>
                    <span className="text-primary">{item.phase}:</span> {item.title}
                  </h3>
                  <p className="font-oswald text-foreground/50 leading-relaxed" style={{ fontSize: 20 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-foreground/20" style={{ width: "100%", height: 1, marginTop: 40 }} />
        </div>
      </div>
    </div>
  </S>
);

// ── SLIDE 20: Traction & Milestones ──
const Slide20 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div style={{ width: 1400, padding: "0 60px" }}>
        <h2 className="font-bebas uppercase leading-[0.88]" style={{ fontSize: 90, marginBottom: 50 }}>
          Traction and <span className="text-primary">Milestones</span>
        </h2>
        <div className="grid grid-cols-2" style={{ gap: 30, marginBottom: 30 }}>
          <div className="bg-card/40 border border-border/30" style={{ padding: 30 }}>
            <h3 className="font-bebas uppercase text-foreground" style={{ fontSize: 30, marginBottom: 16 }}>Enrollment</h3>
            <p className="font-oswald text-foreground/60 leading-relaxed" style={{ fontSize: 22 }}>
              Launched in August 2024 with 65 players enrolled currently. Expecting to have 100+ by Q1 2027.
            </p>
          </div>
          <div className="bg-card/40 border border-border/30" style={{ padding: 30 }}>
            <h3 className="font-bebas uppercase text-foreground" style={{ fontSize: 30, marginBottom: 16 }}>Partnerships</h3>
            <p className="font-oswald text-foreground/60 leading-relaxed" style={{ fontSize: 22 }}>
              Wilson, EvoShield, Louisville Slugger, Demarini, Under Armour, Spooner.
            </p>
          </div>
        </div>
        <div className="bg-card/40 border border-border/30" style={{ padding: 30 }}>
          <h3 className="font-bebas uppercase text-foreground" style={{ fontSize: 30, marginBottom: 16 }}>Social Media</h3>
          <p className="font-oswald text-foreground/60 leading-relaxed" style={{ fontSize: 22 }}>
            431K views in 90 days, 7K interactions, 61K accounts reached, 768 New Followers in 90 Days, 8,060 profile visits in one month (100% organic).
          </p>
        </div>
        <div className="flex justify-end opacity-40" style={{ marginTop: 30, gap: 20 }}>
          {["/sponsors/wilson.png", "/sponsors/demarini.png", "/sponsors/evoshield.png", "/sponsors/louisville-slugger.png", "/sponsors/spooner.png"].map((logo) => (
            <img key={logo} src={logo} alt="" className="object-contain grayscale" style={{ height: 40 }} />
          ))}
        </div>
      </div>
    </div>
  </S>
);

// ── SLIDE 21: Investment Tiers ──
const Slide21 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-r from-card/30 via-background to-background" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="grid grid-cols-2 items-start" style={{ width: 1400, padding: "0 60px", gap: 80 }}>
        <div className="relative overflow-hidden border border-foreground/20" style={{ aspectRatio: "3/4" }}>
          <img src="/action-50.jpg" alt="LPA athlete training" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40" />
        </div>
        <div>
          <h2 className="font-bebas uppercase leading-[0.88]" style={{ fontSize: 72, marginBottom: 50 }}>
            Investment Tiers and Competitive <span className="text-primary">Advantages</span>
          </h2>
          <div style={{ marginBottom: 50 }}>
            <span className="font-bebas text-primary italic" style={{ fontSize: 72 }}>$5M</span>
            <div className="flex items-center" style={{ gap: 10, margin: "10px 0" }}>
              <div className="flex-1 bg-foreground/30" style={{ height: 2 }} />
              <ChevronRight className="text-foreground/30" style={{ width: 24, height: 24 }} />
            </div>
            <h3 className="font-bebas text-foreground uppercase" style={{ fontSize: 30, marginBottom: 16 }}>Initial Growth</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                "Renovate current building for female locker room and more equipment",
                "Secure professional level field rentals and elite level tournament play",
                "Addition of softball players plus coaching staff (Uniforms, gear, travel)",
                "Addition of media team members",
                "Addition of administrative staff",
                "New travel buses and multiple rented homes for out of state transfers",
              ].map((item, i) => (
                <li key={i} className="font-oswald text-foreground/50 leading-relaxed" style={{ fontSize: 20 }}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-bebas text-primary italic" style={{ fontSize: 72 }}>$40-50M</span>
            <div className="flex items-center" style={{ gap: 10, margin: "10px 0" }}>
              <div className="flex-1 bg-foreground/30" style={{ height: 2 }} />
              <ChevronRight className="text-foreground/30" style={{ width: 24, height: 24 }} />
            </div>
            <h3 className="font-bebas text-foreground uppercase" style={{ fontSize: 30, marginBottom: 8 }}>Mini Campus</h3>
            <p className="font-oswald text-foreground/50" style={{ fontSize: 20 }}>Phase 2 build details (slides 12)</p>
          </div>
        </div>
      </div>
    </div>
  </S>
);

// ── SLIDES ARRAY ──
const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10, Slide11, Slide12, Slide13, Slide14, Slide15, Slide16, Slide17, Slide18, Slide19, Slide20, Slide21];

// ── MAIN COMPONENT ──
const PitchDeck = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useSlideScale(containerRef);
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
      ref={containerRef}
      className="fixed inset-0 bg-black select-none overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Scaled slide */}
      <div style={slideStyle}>
        <SlideFrame scale={scale}>
          <CurrentSlide />
        </SlideFrame>
      </div>

      {/* Click navigation zones */}
      <div className="absolute inset-0 z-50 flex">
        <div className="w-1/3 h-full cursor-w-resize" onClick={prev} />
        <div className="w-1/3 h-full" />
        <div className="w-1/3 h-full cursor-e-resize" onClick={next} />
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-0 left-0 right-0 z-50 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" style={{ padding: "16px 24px" }}>
        <div className="flex items-center" style={{ gap: 16 }}>
          <button onClick={prev} disabled={current === 0} className="text-foreground/50 hover:text-foreground disabled:opacity-20 transition-colors">
            <ChevronLeft style={{ width: 24, height: 24 }} />
          </button>
          <span className="font-bebas text-foreground/50 tracking-wider" style={{ fontSize: 16 }}>
            {current + 1} / {slides.length}
          </span>
          <button onClick={next} disabled={current === slides.length - 1} className="text-foreground/50 hover:text-foreground disabled:opacity-20 transition-colors">
            <ChevronRight style={{ width: 24, height: 24 }} />
          </button>
        </div>

        <div className="flex-1 bg-foreground/10 rounded-full overflow-hidden" style={{ height: 3, margin: "0 32px" }}>
          <div className="h-full bg-primary transition-all duration-300" style={{ width: `${((current + 1) / slides.length) * 100}%` }} />
        </div>

        <button onClick={toggleFullscreen} className="text-foreground/50 hover:text-foreground transition-colors">
          {isFullscreen ? <Minimize style={{ width: 20, height: 20 }} /> : <Maximize style={{ width: 20, height: 20 }} />}
        </button>
      </div>

      {/* Dot indicators */}
      <div className="absolute left-1/2 -translate-x-1/2 z-50 flex opacity-0 hover:opacity-100 transition-opacity" style={{ bottom: 56, gap: 6 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { if (i !== current) goTo(i, i > current ? "next" : "prev"); }}
            className="rounded-full transition-all"
            style={{ width: i === current ? 24 : 8, height: 8, background: i === current ? "hsl(var(--primary))" : "hsl(var(--foreground) / 0.2)" }}
          />
        ))}
      </div>
    </div>
  );
};

export default PitchDeck;
