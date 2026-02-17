import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Users, Home, Trophy, Building2, GraduationCap, Target, Dumbbell, Star } from "lucide-react";
import lpaBadge from "@/assets/lpa-badge-cactus.png";
import facilityImg from "@/assets/facility-interior.jpg";
import strengthImg from "@/assets/facility-strength-conditioning.jpg";
import sportsMedImg from "@/assets/facility-sports-medicine.jpg";

// ── Base slide wrapper – fills viewport, vertically centers on desktop, scrollable if overflow ──
const S = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-full h-full bg-background overflow-y-auto flex flex-col justify-center ${className}`}>
    {children}
  </div>
);

// ── Slide inner container with consistent padding ──
const Inner = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-full max-w-6xl mx-auto px-6 md:px-12 py-8 md:py-12 ${className}`}>
    {children}
  </div>
);

// ── SLIDE 1: Title ──
const Slide1 = () => (
  <S className="relative">
    <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-30">
      <source src="/hero-training.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80" />
    <div className="relative z-10 flex items-center justify-center min-h-full px-6">
      <div className="text-center">
        <img src={lpaBadge} alt="LPA" className="mx-auto mb-6 md:mb-10 w-24 h-24 md:w-40 md:h-40" style={{ filter: "drop-shadow(0 0 40px hsl(var(--primary) / 0.4))" }} />
        <p className="font-oswald uppercase tracking-[0.3em] md:tracking-[0.4em] text-primary mb-3 md:mb-5 text-sm md:text-lg">The Blueprint</p>
        <h1 className="font-bebas uppercase leading-[0.85] mb-4 md:mb-8 text-6xl md:text-9xl lg:text-[140px]">
          <span className="text-foreground">Legendary Prep</span><br />
          <span className="text-primary">Academy</span>
        </h1>
        <p className="font-oswald text-foreground/60 italic text-base md:text-xl lg:text-2xl max-w-3xl mx-auto">
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
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-12 gap-4">
          <h2 className="font-bebas uppercase leading-[0.88] text-5xl md:text-7xl lg:text-8xl">
            <span className="text-primary">Phase 1</span> <span className="text-foreground/40">|</span> Laying The Foundation
          </h2>
          <div className="bg-primary/20 border border-primary/40 rounded-sm px-4 py-1 self-start">
            <span className="font-bebas text-primary uppercase tracking-wider text-lg md:text-2xl">Completed</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {[
            { num: "1", title: "Secure Funding", desc: "$1M raised to kickstart our vision and build a cost-efficient facility." },
            { num: "2", title: "Build Elite Staff", desc: "5 Pro-level coaches and 1 MLB scouts assembled." },
            { num: "3", title: "Establish Partnerships", desc: "Wilson, EvoShield, Louisville Slugger, DeMarini, Under Armour secured contracts." },
            { num: "4", title: "Field First Team", desc: "65 enrolled players\n2030 class | 6 state ranked\n2029 class | 2 state ranked\n2028 class | 2 state ranked" },
          ].map((item) => (
            <div key={item.num} className="bg-card/60 border border-border/30 flex gap-4 md:gap-6 p-5 md:p-8">
              <span className="font-bebas text-foreground/20 flex-shrink-0 text-4xl md:text-5xl">{item.num}</span>
              <div>
                <h3 className="font-bebas uppercase text-foreground text-xl md:text-2xl mb-2">{item.title}</h3>
                <p className="font-oswald text-foreground/50 leading-relaxed whitespace-pre-line text-sm md:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Inner>
    </div>
  </S>
);

// ── SLIDE 3: Divider ──
const Slide3 = () => (
  <S className="relative">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
    <div className="absolute top-16 md:top-24 left-8 md:left-16 right-8 md:right-16 h-px bg-primary/60" />
    <div className="absolute bottom-16 md:bottom-24 left-8 md:left-16 right-8 md:right-16 h-px bg-primary/60" />
    <div className="relative z-10 flex items-center justify-center min-h-full px-6">
      <h2 className="font-bebas uppercase leading-[0.88] text-center text-5xl md:text-8xl lg:text-[100px]">
        <span className="text-primary">Phase 1</span> <span className="text-foreground/40">|</span> What We Have Built…
      </h2>
    </div>
  </S>
);

// ── SLIDE 4: Video ──
const Slide4 = () => (
  <S className="relative bg-black">
    <div className="relative z-10 flex items-center justify-center min-h-full px-4 md:px-16">
      <div className="relative w-full max-w-5xl bg-card/20 border border-border/30 overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/hero-training.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-3 left-3 md:bottom-5 md:left-5 bg-black/60 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2">
          <p className="font-bebas text-foreground/70 uppercase tracking-wider text-xs md:text-base">LPA Cinematic Pitch Video</p>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
          {[
            { img: facilityImg, label: "Training Area" },
            { img: "/action-20.jpg", label: "Recovery Center" },
            { img: strengthImg, label: "Strength Conditioning" },
            { img: sportsMedImg, label: "Sports Medicine" },
          ].map((f) => (
            <div key={f.label} className="relative overflow-hidden border border-foreground/20" style={{ aspectRatio: "3/4" }}>
              <img src={f.img} alt={f.label} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <h3 className="absolute bottom-3 left-3 right-3 font-bebas text-foreground uppercase leading-tight text-lg md:text-2xl">{f.label}</h3>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { text: "Our academy offers", hl: "over 18,000 sq. ft. of dedicated space", after: "for baseball training." },
            { text: "Features", hl: "cutting-edge recovery tools", after: "like hyperbaric chambers and infrared saunas." },
            { text: "Advanced weight room with", hl: "$250,000 of equipment", after: "for athletic enhancement." },
            { text: "Weekly visits from", hl: "Spooner Physical Therapy", after: "experts for injury prevention." },
          ].map((item, i) => (
            <p key={i} className="font-oswald text-foreground/60 leading-relaxed uppercase text-xs md:text-sm">
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
      <div className="relative z-10">
        <Inner>
          <h2 className="font-bebas uppercase text-foreground text-4xl md:text-6xl mb-6 md:mb-10">Coaching <span className="text-primary">Staff</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {staff.map((s) => (
              <div key={s.name} className="bg-card/40 border border-border/30 p-4 md:p-5">
                <h3 className="font-bebas text-foreground uppercase leading-tight text-xl md:text-2xl">{s.name}</h3>
                <p className="font-oswald text-primary uppercase tracking-wider text-xs md:text-sm mb-3">{s.title}</p>
                <ul className="flex flex-col gap-1.5">
                  {s.creds.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="bg-primary rounded-full flex-shrink-0 w-1.5 h-1.5 mt-1.5" />
                      <span className="font-oswald text-foreground/50 leading-relaxed text-xs md:text-sm">{c}</span>
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

// ── SLIDE 7: Academic Excellence ──
const Slide7 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-card/30 to-background" />
    <div className="relative z-10">
      <Inner>
        <h2 className="font-bebas uppercase leading-[0.88] text-5xl md:text-7xl mb-2">Academic Excellence:</h2>
        <h2 className="font-bebas uppercase leading-[0.88] text-primary text-4xl md:text-6xl mb-8 md:mb-12">Simplified</h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="flex-1">
            <p className="font-bebas text-foreground uppercase text-lg md:text-xl mb-1">Key Benefits of Our Streamlined</p>
            <p className="font-bebas text-primary uppercase text-lg md:text-xl mb-6 md:mb-8">Academic Program</p>
            <ul className="flex flex-col gap-4 md:gap-5">
              {[
                "Tailored curriculum designed to integrate with the student's athletic training schedule.",
                "Focusing instead on essential learning objectives and preparation to play at the NCAA Division 1 Level.",
                "Access to a dedicated Academic Advisor.",
                "Flexible online course structure that accommodates travel and training commitments.",
                "Collaboration with Premier Prep Academy ensures a high-quality educational experience that aligns with athletic goals.",
              ].map((item, i) => (
                <li key={i} className="font-oswald text-foreground/60 leading-relaxed text-sm md:text-lg">{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 md:w-64">
            <div className="bg-card/40 border border-border/20 flex items-center justify-center w-32 h-32 md:w-48 md:h-48">
              <GraduationCap className="text-primary/40 w-16 h-16 md:w-24 md:h-24" />
            </div>
            <p className="font-oswald text-foreground/40 text-center text-xs md:text-sm">Athletic Director | Principal | LPA Head Coach</p>
          </div>
        </div>
      </Inner>
    </div>
  </S>
);

// ── SLIDE 8: Phase 1 Goals Remaining ──
const Slide8 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
    <div className="relative z-10">
      <Inner>
        <h2 className="font-bebas uppercase leading-[0.88] text-5xl md:text-7xl mb-8 md:mb-12">
          <span className="text-primary">Phase 1</span> <span className="text-foreground/40">|</span> Goals Remaining
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <div>
            <Users className="text-foreground/60 w-10 h-10 md:w-14 md:h-14 mb-4" />
            <h3 className="font-bebas uppercase text-foreground text-xl md:text-2xl mb-3">Student Athletes</h3>
            <p className="font-oswald text-foreground/50 leading-relaxed text-sm md:text-base">
              Currently at 65 players with plans to reach 100+ players by Q1 2027. Secure athletic scholarship fund for financially eligible student.
            </p>
          </div>
          <div>
            <Home className="text-foreground/60 w-10 h-10 md:w-14 md:h-14 mb-4" />
            <h3 className="font-bebas uppercase text-foreground text-xl md:text-2xl mb-3">Housing (Phase 1)</h3>
            <p className="font-oswald text-foreground/50 leading-relaxed text-sm md:text-base">
              Rent a 4 to 5 bedroom house to host 8-10 high level out of state players with a on-site live-in coach.
            </p>
          </div>
          <div>
            <Trophy className="text-foreground/60 w-10 h-10 md:w-14 md:h-14 mb-4" />
            <h3 className="font-bebas uppercase text-foreground text-xl md:text-2xl mb-3">Recognition</h3>
            <p className="font-oswald text-foreground/50 leading-relaxed text-sm md:text-base mb-2">Players signed and committed:</p>
            <ul className="font-oswald text-foreground/50 text-sm md:text-base flex flex-col gap-1">
              {["Coastal Carolina", "Ole Miss", "Texas Tech", "Utah Valley", "New Mexico State", "Youngstown State"].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </Inner>
    </div>
  </S>
);

// ── SLIDE 9: Phase 2 Mini Campus ──
const Slide9 = () => (
  <S>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
    <div className="relative z-10">
      <Inner>
        <h2 className="font-bebas uppercase leading-[0.88] text-4xl md:text-7xl mb-2">
          <span className="text-primary">Phase 2</span> <span className="text-foreground/40">|</span> Baseball/Softball Mini Campus
        </h2>
        <div className="bg-foreground/20 w-full h-px mb-8 md:mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {[
            { icon: <Building2 className="w-10 h-10 md:w-14 md:h-14" />, title: "New Facility Expansion", desc: "Larger athletic center accommodating 150 baseball and 150 softball players. Access to professional-grade fields for practice and games. On site baseball and softball stadium with individual club house access." },
            { icon: <Building2 className="w-10 h-10 md:w-14 md:h-14" />, title: "Housing Expansion", desc: "Dorm style apartments for baseball and softball team. Out-of-state players create pipeline for broader reach." },
            { icon: <Target className="w-10 h-10 md:w-14 md:h-14" />, title: "National Recognition", desc: "Compete in national tournaments. Build ranked teams securing D1 scholarships, NIL deals, and MLB draft opportunities." },
          ].map((item) => (
            <div key={item.title}>
              <div className="text-foreground/60 mb-4">{item.icon}</div>
              <h3 className="font-bebas uppercase text-foreground text-xl md:text-2xl mb-3">{item.title}</h3>
              <p className="font-oswald text-foreground/50 leading-relaxed text-sm md:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-primary/60 w-full h-px mt-8 md:mt-12" />
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
        <h2 className="font-bebas uppercase leading-[0.88] text-5xl md:text-7xl mb-8 md:mb-10">
          <span className="text-primary">Phase 2</span> <span className="text-foreground/40">|</span> The Vision
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { img: "/action-30.jpg", label: "Professional-Grade Fields" },
            { img: "/action-25.jpg", label: "Full Campus Complex" },
          ].map((item) => (
            <div key={item.label} className="relative overflow-hidden border border-foreground/20 bg-card/40" style={{ aspectRatio: "4/3" }}>
              <img src={item.img} alt={item.label} className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <p className="absolute bottom-3 left-3 md:bottom-5 md:left-5 font-bebas text-foreground uppercase text-lg md:text-2xl">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="font-oswald text-foreground/40 uppercase tracking-wider text-sm md:text-base mt-6">Construction Partner: Pono Construction</p>
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
        <h2 className="font-bebas uppercase leading-[0.88] text-4xl md:text-6xl mb-6 md:mb-8">
          <span className="text-primary">Phase 2</span> <span className="text-foreground/40">|</span> Construction Vision
        </h2>
        <div className="grid grid-cols-3 gap-2 md:gap-3 mb-2 md:mb-3">
          {[
            { label: "Stadium Aerial", img: "/action-35.jpg" },
            { label: "Athletic Center", img: "/action-36.jpg" },
            { label: "Player Lounge", img: "/action-37.jpg" },
          ].map((item) => (
            <div key={item.label} className="relative overflow-hidden border border-foreground/20" style={{ aspectRatio: "4/3" }}>
              <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-2 left-2 md:bottom-4 md:left-4 font-bebas text-foreground uppercase text-sm md:text-lg">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 md:gap-3">
          {["/action-38.jpg", "/action-39.jpg"].map((img) => (
            <div key={img} className="relative overflow-hidden border border-foreground/20" style={{ aspectRatio: "16/9" }}>
              <img src={img} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
          ))}
        </div>
        <p className="font-oswald text-primary uppercase tracking-wider text-right text-sm md:text-base mt-4">Construction Partner: Pono Construction, LLC</p>
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
          <h2 className="font-bebas uppercase leading-[0.88] text-4xl md:text-6xl mb-6 md:mb-8">
            Legendary Prep Academy <span className="text-primary">Budget</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-10">
            {items.map((item) => (
              <div key={item.n} className="flex justify-between items-center border-b border-border/20 py-1.5 md:py-2">
                <span className="font-oswald text-foreground/60 text-sm md:text-base">{item.n}. {item.d}</span>
                <span className="font-bebas text-foreground text-sm md:text-lg">{item.a}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center border-t-2 border-primary mt-5 md:mt-6 pt-4">
            <span className="font-bebas uppercase text-foreground text-xl md:text-2xl">Construction Hard Cost Total</span>
            <span className="font-bebas text-primary text-2xl md:text-3xl">$39,965,000</span>
          </div>
          <p className="font-oswald text-foreground/30 uppercase tracking-wider text-xs md:text-sm mt-3">Pono Construction, LLC</p>
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
        <h2 className="font-bebas uppercase leading-[0.88] text-5xl md:text-7xl mb-2">
          <span className="text-primary">L</span>ohmeier<span className="text-primary">A</span>rchitecture
        </h2>
        <p className="font-oswald text-foreground/40 uppercase tracking-wider text-base md:text-lg mb-8 md:mb-10">Campus Master Plan</p>
        <div className="relative bg-card/30 border border-border/30 overflow-hidden mb-6" style={{ aspectRatio: "16/9" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Building2 className="text-primary/30 mx-auto w-12 h-12 md:w-20 md:h-20 mb-4" />
              <p className="font-bebas text-foreground/30 uppercase text-xl md:text-3xl">3D Site Plan Rendering</p>
              <p className="font-oswald text-foreground/20 text-sm md:text-base mt-2">Baseball Fields • Softball Fields • Training Center • Housing</p>
            </div>
          </div>
        </div>
        <p className="font-oswald text-foreground/40 text-sm md:text-base">Full athletic campus with multiple fields, indoor training facilities, and student housing</p>
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
        <h2 className="font-bebas uppercase leading-[0.88] text-center text-4xl md:text-6xl mb-6 md:mb-8">
          <span className="text-primary">L</span>ohmeier<span className="text-primary">A</span>rchitecture
        </h2>
        <div className="grid grid-cols-3 gap-2 md:gap-3 mb-2 md:mb-3">
          {["Main Building Exterior", "Aerial Campus View", "Field Complex"].map((label) => (
            <div key={label} className="relative overflow-hidden border border-foreground/20 bg-card/30 flex items-center justify-center" style={{ aspectRatio: "4/3" }}>
              <p className="font-bebas text-foreground/20 uppercase text-sm md:text-lg">{label}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {["Campus Walkway", "Indoor Training Center", "Weight Room"].map((label) => (
            <div key={label} className="relative overflow-hidden border border-foreground/20 bg-card/30 flex items-center justify-center" style={{ aspectRatio: "4/3" }}>
              <p className="font-bebas text-foreground/20 uppercase text-sm md:text-lg">{label}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div>
              <div className="bg-primary/20 border border-primary/40 px-4 py-2 mb-3">
                <h3 className="font-bebas text-primary uppercase tracking-wider text-lg md:text-xl">Money In (Estimated Annually)</h3>
              </div>
              {incomeItems.map((item) => (
                <div key={item.l} className="flex justify-between border-b border-border/20 py-1.5">
                  <span className="font-oswald text-foreground/60 uppercase text-xs md:text-sm">{item.l}</span>
                  <span className="font-bebas text-foreground text-sm md:text-base">{item.a}</span>
                </div>
              ))}
              <div className="flex justify-between border-t border-primary/60 pt-2 mt-2">
                <span className="font-bebas text-foreground uppercase text-lg md:text-xl">Total Income</span>
                <span className="font-bebas text-primary text-lg md:text-xl">$11,550,000</span>
              </div>
            </div>
            <div>
              <div className="bg-primary/20 border border-primary/40 px-4 py-2 mb-3">
                <h3 className="font-bebas text-primary uppercase tracking-wider text-lg md:text-xl">Money Out (Operating Cost)</h3>
              </div>
              {allExp.map((item) => (
                <div key={item.l} className="flex justify-between border-b border-border/20 py-1">
                  <span className="font-oswald text-foreground/60 uppercase text-xs md:text-sm">{item.l}</span>
                  <span className="font-bebas text-foreground text-xs md:text-sm">{item.a}</span>
                </div>
              ))}
              <div className="flex justify-between border-t border-primary/60 pt-2 mt-2">
                <span className="font-bebas text-primary uppercase text-lg md:text-xl">Total Expenses</span>
                <span className="font-bebas text-primary text-lg md:text-xl">$8,740,000</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between border-t-2 border-primary bg-primary/10 mt-6 p-4 md:p-5">
            <span className="font-bebas text-foreground uppercase text-xl md:text-2xl">Income Minus Expenses</span>
            <span className="font-bebas text-primary text-xl md:text-2xl">$2,810,000</span>
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
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
          <div>
            <h2 className="font-bebas uppercase leading-[0.88] text-4xl md:text-6xl mb-2">
              Projected <span className="text-primary">Profit Margin</span> For LPA
            </h2>
            <div className="bg-primary w-20 h-1 mb-6 md:mb-8" />
            <div className="flex flex-col gap-4 md:gap-6">
              <p className="font-oswald text-foreground/60 leading-relaxed text-sm md:text-lg">
                LPA projects a target profit margin of 30–40%, reflecting its unique offerings and demand for growth.
              </p>
              <p className="font-oswald text-foreground/60 leading-relaxed text-sm md:text-lg">
                With an updated total revenue of $11.55M and total expenses of $8.74M, LPA anticipates a profit margin of 24.3% in its initial phase.
              </p>
              <p className="font-oswald text-foreground/60 leading-relaxed text-sm md:text-lg">
                As LPA continues to scale operations, enhance enrollment, and optimize financial efficiency, it strives to reach the 30–40% profit margin benchmark.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="rounded-full border-4 border-primary/30 flex items-center justify-center w-40 h-40 md:w-56 md:h-56">
              <div className="text-center">
                <span className="font-bebas text-primary text-5xl md:text-6xl">24.3%</span>
                <p className="font-oswald text-foreground/40 uppercase text-xs md:text-sm">Initial Margin</p>
              </div>
            </div>
            <div className="bg-card/40 border border-border/30 text-center p-4">
              <span className="font-bebas text-foreground text-2xl md:text-3xl">30-40%</span>
              <p className="font-oswald text-foreground/40 uppercase text-xs md:text-sm">Target Range</p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8 md:gap-16">
          <div className="flex flex-col gap-8 md:gap-10">
            {[
              { num: "1", title: "Premium Tuition Model", desc: "LPA investment for a family is currently at $30,000 per year. Tuition will increase with new campus and on campus living." },
              { num: "2", title: "Mini Campus Efficiency", desc: "Initial phase aims for 36.41% profit margin, ideal for growth and reinvestment in the academy's facilities and programs." },
              { num: "3", title: "Full-Campus Expansion", desc: "Phase 3 involves expanding the campus size and adding other primary sports like golf, hockey, basketball, football, tennis, wrestling, etc." },
            ].map((item) => (
              <div key={item.num} className="flex gap-4">
                <div className="bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0 w-10 h-10 md:w-12 md:h-12">
                  <span className="font-bebas text-primary text-lg md:text-xl">{item.num}</span>
                </div>
                <div>
                  <h3 className="font-bebas text-primary uppercase text-xl md:text-2xl mb-2">{item.title}</h3>
                  <p className="font-oswald text-foreground/60 leading-relaxed text-sm md:text-lg">{item.desc}</p>
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
        <h2 className="font-bebas uppercase leading-[0.88] text-5xl md:text-7xl mb-8 md:mb-10">
          <span className="text-primary">Phase 3</span> : Flagship Campus
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {[
            { icon: <Dumbbell className="w-8 h-8 md:w-12 md:h-12" />, title: "Player Development Center", desc: "SEC-level player development center with strength, conditioning, sports science and rehab." },
            { icon: <Trophy className="w-8 h-8 md:w-12 md:h-12" />, title: "Full Spectrum Fields, Courts, and Gymnasium", desc: "Baseball, Softball, Football, Basketball, Soccer, Track n Field, Tennis, Volleyball etc." },
            { icon: <Users className="w-8 h-8 md:w-12 md:h-12" />, title: "Programs & National Impact", desc: "Establish scholarship programs for ELITE talent, achieve national ranking, travel and compete with private ELITE schools." },
            { icon: <Star className="w-8 h-8 md:w-12 md:h-12" />, title: "Housing", desc: "Dormitories or apartment living for all sports." },
          ].map((item) => (
            <div key={item.title}>
              <div className="text-foreground/60 mb-3">{item.icon}</div>
              <h3 className="font-bebas uppercase text-foreground text-xl md:text-2xl mb-2">{item.title}</h3>
              <p className="font-oswald text-foreground/50 leading-relaxed text-sm md:text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-primary w-full h-1 mt-8 md:mt-10" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
          <div className="relative overflow-hidden border border-foreground/20 hidden md:block" style={{ aspectRatio: "3/4" }}>
            <img src="/action-45.jpg" alt="LPA athlete" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div>
            <h2 className="font-bebas uppercase leading-[0.88] text-4xl md:text-6xl mb-6 md:mb-8">
              The <span className="text-primary">Path</span> to Domination
            </h2>
            <div className="bg-foreground/20 w-full h-px mb-6 md:mb-8" />
            <div className="flex flex-col gap-6 md:gap-8">
              {[
                { num: "1", phase: "Phase 1", title: "Foundation", desc: "Elite coaching, partnerships, winning season." },
                { num: "2", phase: "Phase 2", title: "Mini Campus", desc: "Baseball & softball stadiums, housing, performance center, national recognition." },
                { num: "3", phase: "Phase 3", title: "Flagship Campus", desc: "SEC-level player development center, stadiums, housing. Addition of ALL primary high school sports." },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4">
                  <div className="flex flex-col items-center flex-shrink-0 gap-1.5">
                    <span className="font-bebas text-foreground/30 text-3xl md:text-4xl">{item.num}</span>
                    <div className="bg-primary/40 w-px h-5 md:h-8" />
                  </div>
                  <div>
                    <h3 className="font-bebas uppercase text-lg md:text-xl">
                      <span className="text-primary">{item.phase}:</span> {item.title}
                    </h3>
                    <p className="font-oswald text-foreground/50 leading-relaxed text-sm md:text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-foreground/20 w-full h-px mt-6 md:mt-8" />
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
        <h2 className="font-bebas uppercase leading-[0.88] text-5xl md:text-7xl mb-8 md:mb-10">
          Traction and <span className="text-primary">Milestones</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          <div className="bg-card/40 border border-border/30 p-5 md:p-6">
            <h3 className="font-bebas uppercase text-foreground text-xl md:text-2xl mb-3">Enrollment</h3>
            <p className="font-oswald text-foreground/60 leading-relaxed text-sm md:text-lg">
              Launched in August 2024 with 65 players enrolled currently. Expecting to have 100+ by Q1 2027.
            </p>
          </div>
          <div className="bg-card/40 border border-border/30 p-5 md:p-6">
            <h3 className="font-bebas uppercase text-foreground text-xl md:text-2xl mb-3">Partnerships</h3>
            <p className="font-oswald text-foreground/60 leading-relaxed text-sm md:text-lg">
              Wilson, EvoShield, Louisville Slugger, Demarini, Under Armour, Spooner.
            </p>
          </div>
        </div>
        <div className="bg-card/40 border border-border/30 p-5 md:p-6">
          <h3 className="font-bebas uppercase text-foreground text-xl md:text-2xl mb-3">Social Media</h3>
          <p className="font-oswald text-foreground/60 leading-relaxed text-sm md:text-lg">
            431K views in 90 days, 7K interactions, 61K accounts reached, 768 New Followers in 90 Days, 8,060 profile visits in one month (100% organic).
          </p>
        </div>
        <div className="flex justify-end opacity-40 mt-6 gap-4">
          {["/sponsors/wilson.png", "/sponsors/demarini.png", "/sponsors/evoshield.png", "/sponsors/louisville-slugger.png", "/sponsors/spooner.png"].map((logo) => (
            <img key={logo} src={logo} alt="" className="object-contain grayscale h-6 md:h-10" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8 md:gap-16">
          <div className="relative overflow-hidden border border-foreground/20 hidden md:block" style={{ aspectRatio: "3/4" }}>
            <img src="/action-50.jpg" alt="LPA athlete training" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40" />
          </div>
          <div>
            <h2 className="font-bebas uppercase leading-[0.88] text-4xl md:text-6xl mb-8 md:mb-10">
              Investment Tiers and Competitive <span className="text-primary">Advantages</span>
            </h2>
            <div className="mb-8 md:mb-10">
              <span className="font-bebas text-primary italic text-5xl md:text-6xl">$5M</span>
              <div className="flex items-center gap-2 my-2">
                <div className="flex-1 bg-foreground/30 h-px" />
                <ChevronRight className="text-foreground/30 w-5 h-5" />
              </div>
              <h3 className="font-bebas text-foreground uppercase text-xl md:text-2xl mb-3">Initial Growth</h3>
              <ul className="flex flex-col gap-1.5">
                {[
                  "Renovate current building for female locker room and more equipment",
                  "Secure professional level field rentals and elite level tournament play",
                  "Addition of softball players plus coaching staff (Uniforms, gear, travel)",
                  "Addition of media team members",
                  "Addition of administrative staff",
                  "New travel buses and multiple rented homes for out of state transfers",
                ].map((item, i) => (
                  <li key={i} className="font-oswald text-foreground/50 leading-relaxed text-sm md:text-base">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-bebas text-primary italic text-5xl md:text-6xl">$40-50M</span>
              <div className="flex items-center gap-2 my-2">
                <div className="flex-1 bg-foreground/30 h-px" />
                <ChevronRight className="text-foreground/30 w-5 h-5" />
              </div>
              <h3 className="font-bebas text-foreground uppercase text-xl md:text-2xl mb-2">Mini Campus</h3>
              <p className="font-oswald text-foreground/50 text-sm md:text-base">Phase 2 build details (slides 12)</p>
            </div>
          </div>
        </div>
      </Inner>
    </div>
  </S>
);

// ── SLIDES ARRAY ──
const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10, Slide11, Slide12, Slide13, Slide14, Slide15, Slide16, Slide17, Slide18, Slide19, Slide20, Slide21];

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

      {/* Click navigation zones */}
      <div className="absolute inset-0 z-40 flex pointer-events-none">
        <div className="w-1/3 h-full cursor-w-resize pointer-events-auto" onClick={prev} />
        <div className="w-1/3 h-full" />
        <div className="w-1/3 h-full cursor-e-resize pointer-events-auto" onClick={next} />
      </div>

      {/* Bottom controls */}
      <div className="relative z-50 flex items-center justify-between bg-black/80 border-t border-border/20 px-4 md:px-6 py-2.5 md:py-3">
        <div className="flex items-center gap-3">
          <button onClick={prev} disabled={current === 0} className="text-foreground/50 hover:text-foreground disabled:opacity-20 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="font-bebas text-foreground/50 tracking-wider text-sm md:text-base">
            {current + 1} / {slides.length}
          </span>
          <button onClick={next} disabled={current === slides.length - 1} className="text-foreground/50 hover:text-foreground disabled:opacity-20 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 bg-foreground/10 rounded-full overflow-hidden h-1 mx-4 md:mx-8">
          <div className="h-full bg-primary transition-all duration-300" style={{ width: `${((current + 1) / slides.length) * 100}%` }} />
        </div>

        <button onClick={toggleFullscreen} className="text-foreground/50 hover:text-foreground transition-colors">
          {isFullscreen ? <Minimize className="w-4 h-4 md:w-5 md:h-5" /> : <Maximize className="w-4 h-4 md:w-5 md:h-5" />}
        </button>
      </div>
    </div>
  );
};

export default PitchDeck;
