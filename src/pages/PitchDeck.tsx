import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Users, Home, Trophy, Building2, GraduationCap, Target, Dumbbell, Star, TrendingUp, MapPin, DollarSign, BarChart3, Layers } from "lucide-react";
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

// Slide 11: Pono Construction - GCU Reference Photos
const Slide11PonoVision = () => (
  <SlideWrapper>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
    <div className="relative z-10 max-w-6xl mx-auto px-12 w-full">
      <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.88] mb-8">
        <span className="text-primary">Phase 2</span> <span className="text-foreground/40">|</span> Construction Vision
      </h2>
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { label: "Stadium Aerial", img: "/action-35.jpg" },
          { label: "Athletic Center", img: "/action-36.jpg" },
          { label: "Player Lounge", img: "/action-37.jpg" },
        ].map((item) => (
          <div key={item.label} className="relative aspect-[4/3] overflow-hidden border border-foreground/20">
            <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <p className="absolute bottom-3 left-3 font-bebas text-sm text-foreground uppercase">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="relative aspect-[16/9] overflow-hidden border border-foreground/20">
          <img src="/action-38.jpg" alt="Facility entrance" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        <div className="relative aspect-[16/9] overflow-hidden border border-foreground/20">
          <img src="/action-39.jpg" alt="Full stadium" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
      </div>
      <p className="font-oswald text-sm text-primary mt-6 uppercase tracking-wider text-right">Construction Partner: Pono Construction, LLC</p>
    </div>
  </SlideWrapper>
);

// Slide 12: Phase 2 Budget
const Slide12Budget = () => {
  const budgetItems = [
    { num: 1, desc: "Cafeteria", amount: "$2,900,000" },
    { num: 2, desc: "Housing", amount: "$9,300,000" },
    { num: 3, desc: "Executive Offices", amount: "$800,000" },
    { num: 4, desc: "Medical", amount: "$500,000" },
    { num: 5, desc: "Education", amount: "$1,400,000" },
    { num: 6, desc: "Performance/Gym", amount: "$1,225,000" },
    { num: 7, desc: "Personal Care", amount: "$350,000" },
    { num: 8, desc: "Recovery", amount: "$525,000" },
    { num: 9, desc: "Player Lounge/Locker Room", amount: "$2,100,000" },
    { num: 10, desc: "Indoor Cages", amount: "$1,575,000" },
    { num: 11, desc: "Sport Science/Research Center", amount: "$370,000" },
    { num: 12, desc: "Equipment Room/Laundry", amount: "$600,000" },
    { num: 13, desc: "Team Store", amount: "$500,000" },
    { num: 14, desc: "Baseball Field", amount: "$3,910,000" },
    { num: 15, desc: "Softball Field", amount: "$3,200,000" },
    { num: 16, desc: "Half Fields", amount: "$3,300,000" },
    { num: 17, desc: "Turf Field Soccer/Lacrosse", amount: "$1,700,000" },
    { num: 18, desc: "Parking", amount: "$710,000" },
    { num: 19, desc: "Site Infrastructure", amount: "$5,000,000" },
  ];

  return (
    <SlideWrapper>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="relative z-10 max-w-5xl mx-auto px-12 w-full">
        <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl uppercase leading-[0.88] mb-8">
          Legendary Prep Academy <span className="text-primary">Budget</span>
        </h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-0">
          {budgetItems.map((item) => (
            <div key={item.num} className="flex justify-between items-center py-1.5 border-b border-border/20">
              <span className="font-oswald text-xs text-foreground/60">{item.num}. {item.desc}</span>
              <span className="font-bebas text-sm text-foreground">{item.amount}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-6 pt-4 border-t-2 border-primary">
          <span className="font-bebas text-xl uppercase text-foreground">Construction Hard Cost Total</span>
          <span className="font-bebas text-2xl text-primary">$39,965,000</span>
        </div>
        <p className="font-oswald text-xs text-foreground/30 mt-4 uppercase tracking-wider">Pono Construction, LLC</p>
      </div>
    </SlideWrapper>
  );
};

// Slide 13: Lohmeier Architecture - Site Plan
const Slide13Architecture = () => (
  <SlideWrapper>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
    <div className="relative z-10 max-w-5xl mx-auto px-12 w-full text-center">
      <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.88] mb-2">
        <span className="text-primary">L</span>ohmeier<span className="text-primary">A</span>rchitecture
      </h2>
      <p className="font-oswald text-sm text-foreground/40 mb-10 uppercase tracking-wider">Campus Master Plan</p>
      <div className="relative aspect-[16/9] bg-card/30 border border-border/30 overflow-hidden mb-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <Building2 className="w-16 h-16 text-primary/30 mx-auto mb-4" />
            <p className="font-bebas text-xl text-foreground/30 uppercase">3D Site Plan Rendering</p>
            <p className="font-oswald text-xs text-foreground/20 mt-2">Baseball Fields • Softball Fields • Training Center • Housing</p>
          </div>
        </div>
      </div>
      <p className="font-oswald text-xs text-foreground/40">Full athletic campus with multiple fields, indoor training facilities, and student housing</p>
    </div>
  </SlideWrapper>
);

// Slide 14: Lohmeier Architecture - Renderings
const Slide14Renderings = () => (
  <SlideWrapper>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
    <div className="relative z-10 max-w-6xl mx-auto px-12 w-full">
      <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl uppercase leading-[0.88] mb-8 text-center">
        <span className="text-primary">L</span>ohmeier<span className="text-primary">A</span>rchitecture
      </h2>
      <div className="grid grid-cols-3 gap-3 mb-3">
        {["Main Building Exterior", "Aerial Campus View", "Field Complex"].map((label, i) => (
          <div key={label} className="relative aspect-[4/3] overflow-hidden border border-foreground/20 bg-card/30">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-bebas text-sm text-foreground/20 uppercase">{label}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3">
        {["Campus Walkway", "Indoor Training Center", "Weight Room"].map((label) => (
          <div key={label} className="relative aspect-[4/3] overflow-hidden border border-foreground/20 bg-card/30">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-bebas text-sm text-foreground/20 uppercase">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SlideWrapper>
);

// Slide 15: Financial Model
const Slide15Financials = () => {
  const incomeItems = [
    { label: "Legendary Prep Academy (300 Students)", amount: "$10,500,000" },
    { label: "Premier Prep Academy", amount: "$1,050,000" },
  ];
  const expenseItemsLeft = [
    { label: "CEO", amount: "$200,000" },
    { label: "COO", amount: "$150,000" },
    { label: "CFO", amount: "$150,000" },
    { label: "CTO", amount: "$150,000" },
    { label: "Athletic Director", amount: "$100,000" },
    { label: "1 HS Baseball Coach", amount: "$80,000" },
    { label: "1 MS Baseball Coach", amount: "$60,000" },
    { label: "1 HS Softball Coach", amount: "$80,000" },
    { label: "1 MS Softball Coach", amount: "$60,000" },
    { label: "9 Assistant Baseball Coaches", amount: "$315,000" },
    { label: "9 Assistant Softball Coaches", amount: "$315,000" },
    { label: "2 Academic Advisors", amount: "$120,000" },
    { label: "3 Academic Teachers (3 each sport)", amount: "$240,000" },
    { label: "Director of Strength & Conditioning", amount: "$120,000" },
    { label: "3 Assistant Strength Coaches", amount: "$120,000" },
    { label: "1 Director of Athletic Training", amount: "$120,000" },
  ];
  const expenseItemsRight = [
    { label: "4 Assistant Athletic Training", amount: "$160,000" },
    { label: "Head of Security", amount: "$100,000" },
    { label: "Admin/Aux Staff (30 staff)", amount: "$600,000" },
    { label: "Media Production Team (25 staff)", amount: "$1,000,000" },
    { label: "Land Leasing", amount: "$1,700,000" },
    { label: "Equipment/Apparel (Wilson, etc)", amount: "$1,000,000" },
    { label: "Insurance, Electrical, Internet, etc", amount: "$800,000" },
    { label: "Food Cost", amount: "$1,000,000" },
  ];

  return (
    <SlideWrapper>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="relative z-10 max-w-6xl mx-auto px-8 w-full">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <div className="bg-primary/20 border border-primary/40 px-4 py-2 mb-3">
              <h3 className="font-bebas text-lg text-primary uppercase tracking-wider">Money In (Estimated Annually)</h3>
            </div>
            {incomeItems.map((item) => (
              <div key={item.label} className="flex justify-between py-1.5 border-b border-border/20">
                <span className="font-oswald text-xs text-foreground/60 uppercase">{item.label}</span>
                <span className="font-bebas text-sm text-foreground">{item.amount}</span>
              </div>
            ))}
            <div className="flex justify-between py-2 border-t border-primary/60 mt-2">
              <span className="font-bebas text-base text-foreground uppercase">Total Income</span>
              <span className="font-bebas text-base text-primary">$11,550,000</span>
            </div>

            <div className="bg-primary/20 border border-primary/40 px-4 py-2 mt-6 mb-3">
              <h3 className="font-bebas text-lg text-primary uppercase tracking-wider">Money Out (Estimated Operating Cost)</h3>
            </div>
            {expenseItemsLeft.map((item) => (
              <div key={item.label} className="flex justify-between py-1 border-b border-border/20">
                <span className="font-oswald text-[10px] text-foreground/60 uppercase">{item.label}</span>
                <span className="font-bebas text-xs text-foreground">{item.amount}</span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="pt-10">
            {expenseItemsRight.map((item) => (
              <div key={item.label} className="flex justify-between py-1.5 border-b border-border/20">
                <span className="font-oswald text-xs text-foreground/60 uppercase">{item.label}</span>
                <span className="font-bebas text-sm text-foreground">{item.amount}</span>
              </div>
            ))}
            <div className="flex justify-between py-3 border-t border-primary/60 mt-4">
              <span className="font-bebas text-base text-primary uppercase">Total Expenses</span>
              <span className="font-bebas text-base text-primary">$8,740,000</span>
            </div>
            <div className="flex justify-between py-3 border-t-2 border-primary mt-6 bg-primary/10 px-4">
              <span className="font-bebas text-xl text-foreground uppercase">Income Minus Expenses</span>
              <span className="font-bebas text-xl text-primary">$2,810,000</span>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

// Slide 16: Projected Profit Margin
const Slide16ProfitMargin = () => (
  <SlideWrapper>
    <div className="absolute inset-0 bg-gradient-to-r from-background via-card/20 to-background" />
    <div className="relative z-10 max-w-5xl mx-auto px-12 w-full">
      <div className="grid grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl uppercase leading-[0.88] mb-2">
            Projected <span className="text-primary">Profit Margin</span> For LPA
          </h2>
          <div className="w-24 h-1 bg-primary mb-8" />
          <div className="space-y-6">
            <p className="font-oswald text-sm text-foreground/60 leading-relaxed">
              LPA projects a target profit margin of 30–40%, reflecting its unique offerings and demand for growth.
            </p>
            <p className="font-oswald text-sm text-foreground/60 leading-relaxed">
              With an updated total revenue of $11.55M and total expenses of $8.74M, LPA anticipates a profit margin of 24.3% in its initial phase. While slightly below the ideal range, this margin still supports reinvestment and sustainable growth.
            </p>
            <p className="font-oswald text-sm text-foreground/60 leading-relaxed">
              As LPA continues to scale operations, enhance enrollment, and optimize financial efficiency, it strives to reach the 30–40% profit margin benchmark, reinforcing its position as a top-tier athletic academy.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="relative w-48 h-48 rounded-full border-4 border-primary/30 flex items-center justify-center">
            <div className="text-center">
              <span className="font-bebas text-5xl text-primary">24.3%</span>
              <p className="font-oswald text-xs text-foreground/40 uppercase">Initial Margin</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-card/40 border border-border/30 p-4 text-center">
              <span className="font-bebas text-2xl text-foreground">30-40%</span>
              <p className="font-oswald text-[10px] text-foreground/40 uppercase">Target Range</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

// Slide 17: Business Model / Revenue Strategy
const Slide17BusinessModel = () => (
  <SlideWrapper>
    <div className="absolute inset-0 bg-gradient-to-r from-background via-card/20 to-background" />
    <div className="relative z-10 max-w-5xl mx-auto px-12 w-full">
      <div className="grid grid-cols-2 gap-12 items-start">
        <div className="space-y-10">
          {[
            { num: "1", title: "Premium Tuition Model", desc: "LPA investment for a family is currently at $30,000 per year. Tuition will increase with new campus and on campus living." },
            { num: "2", title: "Mini Campus Efficiency", desc: "Initial phase aims for 36.41% profit margin, ideal for growth and reinvestment in the academy's facilities and programs." },
            { num: "3", title: "Full-Campus Expansion", desc: "Phase 3 involves expanding the campus size and adding other primary sports like golf, hockey, basketball, football, tennis, wrestling, etc." },
          ].map((item) => (
            <div key={item.num} className="flex gap-4">
              <div className="w-10 h-10 bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0">
                <span className="font-bebas text-lg text-primary">{item.num}</span>
              </div>
              <div>
                <h3 className="font-bebas text-xl text-primary uppercase mb-2">{item.title}</h3>
                <p className="font-oswald text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="relative aspect-square w-full max-w-md bg-card/20 border border-border/20 overflow-hidden">
            <img src="/action-40.jpg" alt="Campus render" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

// Slide 18: Phase 3 - Flagship Campus
const Slide18Phase3 = () => (
  <SlideWrapper>
    <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />
    <div className="relative z-10 max-w-5xl mx-auto px-12 w-full">
      <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.88] mb-10">
        <span className="text-primary">Phase 3</span> : Flagship Campus
      </h2>
      <div className="grid grid-cols-2 gap-8">
        {[
          { icon: <Dumbbell className="w-10 h-10 text-foreground/60" />, title: "Player Development Center", desc: "SEC-level player development center with strength, conditioning, sports science and rehab." },
          { icon: <Trophy className="w-10 h-10 text-foreground/60" />, title: "Full Spectrum Fields, Courts, and Gymnasium", desc: "Baseball, Softball, Football, Basketball, Soccer, Track n Field, Tennis, Volleyball etc." },
          { icon: <Users className="w-10 h-10 text-foreground/60" />, title: "Programs & National Impact", desc: "Establish scholarship programs for ELITE talent, achieve national ranking, travel and compete with private ELITE schools." },
          { icon: <Star className="w-10 h-10 text-foreground/60" />, title: "Housing", desc: "Dormitories or apartment living for all sports." },
        ].map((item) => (
          <div key={item.title} className="space-y-3">
            {item.icon}
            <h3 className="font-bebas text-xl uppercase text-foreground">{item.title}</h3>
            <p className="font-oswald text-sm text-foreground/50 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="w-full h-1 bg-primary mt-10" />
    </div>
  </SlideWrapper>
);

// Slide 19: The Path to Domination
const Slide19PathToDomination = () => (
  <SlideWrapper>
    <div className="absolute inset-0 bg-gradient-to-r from-card/30 via-background to-background" />
    <div className="relative z-10 max-w-5xl mx-auto px-12 w-full">
      <div className="grid grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-full aspect-[3/4] overflow-hidden border border-foreground/20">
            <img src="/action-45.jpg" alt="LPA athlete" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
        <div>
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.88] mb-10">
            The <span className="text-primary">Path</span> to Domination
          </h2>
          <div className="w-full h-px bg-foreground/20 mb-10" />
          <div className="space-y-8">
            {[
              { num: "1", phase: "Phase 1", title: "Foundation", desc: "Elite coaching, partnerships, winning season." },
              { num: "2", phase: "Phase 2", title: "Mini Campus", desc: "Baseball & softball stadiums, housing, performance center, national recognition." },
              { num: "3", phase: "Phase 3", title: "Flagship Campus", desc: "SEC-level player development center, stadiums, housing. Addition of ALL primary high school sports. Football, basketball, soccer, track n field, etc." },
            ].map((item) => (
              <div key={item.num} className="flex gap-4 items-start">
                <div className="flex flex-col items-center gap-1 flex-shrink-0">
                  <span className="font-bebas text-3xl text-foreground/30">{item.num}</span>
                  <div className="w-px h-6 bg-primary/40" />
                </div>
                <div>
                  <h3 className="font-bebas text-lg uppercase">
                    <span className="text-primary">{item.phase}:</span> {item.title}
                  </h3>
                  <p className="font-oswald text-sm text-foreground/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full h-px bg-foreground/20 mt-10" />
        </div>
      </div>
    </div>
  </SlideWrapper>
);

// Slide 20: Traction and Milestones
const Slide20Traction = () => (
  <SlideWrapper>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
    <div className="relative z-10 max-w-5xl mx-auto px-12 w-full">
      <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.88] mb-10">
        Traction and <span className="text-primary">Milestones</span>
      </h2>
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-card/40 border border-border/30 p-6">
          <h3 className="font-bebas text-xl uppercase text-foreground mb-4">Enrollment</h3>
          <p className="font-oswald text-sm text-foreground/60 leading-relaxed">
            Launched in August 2024 with 65 players enrolled currently. Expecting to have 100+ by Q1 2027.
          </p>
        </div>
        <div className="bg-card/40 border border-border/30 p-6">
          <h3 className="font-bebas text-xl uppercase text-foreground mb-4">Partnerships</h3>
          <p className="font-oswald text-sm text-foreground/60 leading-relaxed">
            Wilson, EvoShield, Louisville Slugger, Demarini, Under Armour, Spooner.
          </p>
        </div>
      </div>
      <div className="bg-card/40 border border-border/30 p-6">
        <h3 className="font-bebas text-xl uppercase text-foreground mb-4">Social Media</h3>
        <p className="font-oswald text-sm text-foreground/60 leading-relaxed">
          431K views in 90 days, 7K interactions, 61K accounts reached, 768 New Followers in 90 Days, 8,060 profile visits in one month (100% organic).
        </p>
      </div>
      <div className="flex justify-end mt-6 gap-4 opacity-40">
        {["/sponsors/wilson.png", "/sponsors/demarini.png", "/sponsors/evoshield.png", "/sponsors/louisville-slugger.png", "/sponsors/spooner.png"].map((logo) => (
          <img key={logo} src={logo} alt="" className="h-8 object-contain grayscale" />
        ))}
      </div>
    </div>
  </SlideWrapper>
);

// Slide 21: Investment Tiers and Competitive Advantages
const Slide21Investment = () => (
  <SlideWrapper>
    <div className="absolute inset-0 bg-gradient-to-r from-card/30 via-background to-background" />
    <div className="relative z-10 max-w-5xl mx-auto px-12 w-full">
      <div className="grid grid-cols-2 gap-12 items-start">
        <div className="relative aspect-[3/4] overflow-hidden border border-foreground/20">
          <img src="/action-50.jpg" alt="LPA athlete training" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40" />
        </div>
        <div>
          <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl uppercase leading-[0.88] mb-10">
            Investment Tiers and Competitive <span className="text-primary">Advantages</span>
          </h2>

          <div className="mb-10">
            <span className="font-bebas text-5xl text-primary italic">$5M</span>
            <div className="flex items-center gap-2 my-2">
              <div className="flex-1 h-0.5 bg-foreground/30" />
              <ChevronRight className="w-5 h-5 text-foreground/30" />
            </div>
            <h3 className="font-bebas text-xl text-foreground uppercase mb-3">Initial Growth</h3>
            <ul className="space-y-1">
              {[
                "Renovate current building for female locker room and more equipment",
                "Secure professional level field rentals and elite level tournament play",
                "Addition of softball players plus coaching staff (Uniforms, gear, travel)",
                "Addition of media team members",
                "Addition of administrative staff",
                "New travel buses and multiple rented homes for out of state transfers",
              ].map((item, i) => (
                <li key={i} className="font-oswald text-xs text-foreground/50 leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-bebas text-5xl text-primary italic">$40-50M</span>
            <div className="flex items-center gap-2 my-2">
              <div className="flex-1 h-0.5 bg-foreground/30" />
              <ChevronRight className="w-5 h-5 text-foreground/30" />
            </div>
            <h3 className="font-bebas text-xl text-foreground uppercase mb-2">Mini Campus</h3>
            <p className="font-oswald text-xs text-foreground/50">Phase 2 build details (slides 12)</p>
          </div>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

const slides = [Slide1Title, Slide2Foundation, Slide3Divider, Slide4Video, Slide5Facility, Slide6Coaching, Slide7Academics, Slide8GoalsRemaining, Slide9Phase2, Slide10FacilityVision, Slide11PonoVision, Slide12Budget, Slide13Architecture, Slide14Renderings, Slide15Financials, Slide16ProfitMargin, Slide17BusinessModel, Slide18Phase3, Slide19PathToDomination, Slide20Traction, Slide21Investment];

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
