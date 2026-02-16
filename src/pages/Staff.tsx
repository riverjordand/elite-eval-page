import { useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/landing/FooterSection";
import coachMarcus from "@/assets/coach-marcus.webp";
import coachJoe from "@/assets/coach-joe.webp";
import coachEric from "@/assets/coach-eric.webp";
import coachTerrell from "@/assets/coach-terrell.webp";
import coachWill from "@/assets/coach-neil.webp";

interface StaffMember {
  name: string;
  title: string;
  image?: string;
  credentials?: string[];
}

const coachingStaff: StaffMember[] = [
  {
    name: "Mark Karaviotis",
    title: "Head Coach",
    image: coachMarcus,
    credentials: [
      "Former Division 1 baseball player at Oregon",
      "2016 Hillsboro Hops batting champion",
      "3x MiLB All Star",
      "7 years of professional baseball experience",
    ],
  },
  {
    name: "Joe Dunigan",
    title: "Hitting Coordinator & Astros Scout",
    image: coachJoe,
    credentials: [
      "Former Division 1 baseball player at Oklahoma",
      "10 years of professional baseball experience",
      "Current Area Scout for the Houston Astros",
    ],
  },
  {
    name: "Eric Smith",
    title: "Pitching Coordinator",
    image: coachEric,
    credentials: [
      "Former Division 1 baseball player at the University of Rhode Island",
      "6 years of professional baseball experience",
    ],
  },
  {
    name: "Terrell Hudson",
    title: "Assistant Coach",
    image: coachTerrell,
    credentials: [
      "Former Division 1 baseball player at the University of New Mexico",
      "Extensive experience in training and managing elite youth baseball",
    ],
  },
  {
    name: "Isaac",
    title: "Coach",
    credentials: [
      "Bio coming soon",
    ],
  },
  {
    name: "Josh Garcia",
    title: "Coach",
    credentials: [
      "Bio coming soon",
    ],
  },
];

const administrationStaff: StaffMember[] = [
  { name: "Diego", title: "Administration" },
  { name: "Martin", title: "Administration" },
  { name: "Billy", title: "Administration" },
  { name: "Todd", title: "Administration" },
  { name: "River", title: "Administration" },
];

const executiveStaff: StaffMember[] = [
  {
    name: "Will Armijo",
    title: "CEO",
    image: coachWill,
    credentials: [
      "Former Division 2 baseball player",
      "Holds an MBA",
      "Corporate & Entrepreneur experience",
      "Founder of 6 companies",
    ],
  },
  { name: "RJ Etchebarren", title: "COO" },
  { name: "Andy Leonard", title: "CFO" },
  { name: "Tyler Thorne", title: "CLO" },
];

const StaffCard = ({ member, onClick, size = "large" }: { member: StaffMember; onClick?: () => void; size?: "large" | "compact" }) => {
  if (size === "compact") {
    return (
      <div className="group bg-card/40 border border-border/30 p-4 lg:p-5 hover:border-primary/40 transition-all duration-300">
        <p className="font-oswald text-[10px] text-primary uppercase tracking-[0.2em] mb-1">{member.title}</p>
        <h3 className="font-bebas text-lg lg:text-xl text-foreground uppercase leading-none">{member.name}</h3>
      </div>
    );
  }

  return (
    <div
      className="group relative bg-card/40 border border-border/30 overflow-hidden hover:border-primary/40 transition-all duration-500 cursor-pointer"
      onClick={onClick}
      style={{ boxShadow: "0 20px 40px -15px rgba(0,0,0,0.5)" }}
    >
      <div className="flex flex-col sm:flex-row">
        {member.image ? (
          <div className="relative w-full sm:w-2/5 aspect-[3/4] sm:aspect-auto sm:min-h-[300px] lg:min-h-[340px] flex-shrink-0">
            <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-card via-card/40 to-transparent" />
          </div>
        ) : (
          <div className="relative w-full sm:w-2/5 sm:min-h-[300px] lg:min-h-[340px] flex-shrink-0 bg-card/80 flex items-center justify-center">
            <span className="font-bebas text-6xl text-foreground/10 uppercase">{member.name.charAt(0)}</span>
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-card via-card/40 to-transparent" />
          </div>
        )}

        <div className="flex-1 p-5 md:p-6 lg:p-8 flex flex-col justify-center">
          <p className="font-oswald text-xs text-primary uppercase tracking-[0.2em] mb-2 glow-primary">{member.title}</p>
          <h2 className="font-bebas text-2xl md:text-3xl lg:text-4xl text-foreground uppercase leading-none mb-4">{member.name}</h2>
          {member.credentials && (
            <ul className="space-y-2">
              {member.credentials.slice(0, 3).map((cred, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="font-oswald text-sm text-foreground/80">{cred}</span>
                </li>
              ))}
              {member.credentials.length > 3 && (
                <li className="font-oswald text-xs text-primary mt-1">+{member.credentials.length - 3} more →</li>
              )}
            </ul>
          )}
        </div>
      </div>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-4 bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

const Staff = () => {
  const [selectedMember, setSelectedMember] = useState<StaffMember | null>(null);
  const allDetailedStaff = [...coachingStaff, ...executiveStaff.filter(m => m.credentials)];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-28 md:pt-36 lg:pt-40 pb-12 md:pb-16 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[160px]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="container relative mx-auto px-4 md:px-6 lg:px-12">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-oswald text-sm uppercase tracking-wider mb-6 md:mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="font-bebas text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground uppercase leading-none mb-4">
            Meet The Staff
          </h1>
          <p className="font-oswald text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl">
            Our coaching, administrative, and executive staff are a carefully selected group of high performing individuals across college baseball, professional baseball, and business administration.
          </p>
        </div>
      </section>

      {/* Coaching Staff */}
      <section className="relative pb-16 md:pb-24">
        <div className="container relative mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-8 md:mb-12">
            <div className="w-8 h-px bg-primary" />
            <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">Coaching Staff</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {coachingStaff.map((member, index) => (
              <StaffCard key={index} member={member} onClick={() => setSelectedMember(member)} />
            ))}
          </div>
        </div>
      </section>

      {/* Administration Staff */}
      <section className="relative pb-16 md:pb-24">
        <div className="container relative mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-8 md:mb-12">
            <div className="w-8 h-px bg-primary" />
            <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">Administration Staff</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {administrationStaff.map((member, index) => (
              <StaffCard key={index} member={member} size="compact" />
            ))}
          </div>
        </div>
      </section>

      {/* Executive Staff */}
      <section className="relative pb-20 md:pb-28">
        <div className="container relative mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-8 md:mb-12">
            <div className="w-8 h-px bg-primary" />
            <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">Executive Staff</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {executiveStaff.map((member, index) => (
              member.credentials ? (
                <StaffCard key={index} member={member} onClick={() => setSelectedMember(member)} />
              ) : (
                <div key={index} className="group bg-card/40 border border-border/30 p-5 lg:p-6 hover:border-primary/40 transition-all duration-300 flex items-center gap-4">
                  <div className="w-12 h-12 bg-card/80 flex items-center justify-center flex-shrink-0">
                    <span className="font-bebas text-xl text-foreground/20">{member.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-oswald text-[10px] text-primary uppercase tracking-[0.2em] mb-1">{member.title}</p>
                    <h3 className="font-bebas text-xl lg:text-2xl text-foreground uppercase leading-none">{member.name}</h3>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8" onClick={() => setSelectedMember(null)}>
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px] pointer-events-none" />

          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-scale-in rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedMember(null)} className="absolute top-4 right-4 z-30 w-12 h-12 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300">
              <X className="w-5 h-5 text-white/80" />
            </button>

            <div className="flex flex-col lg:flex-row bg-card border border-white/5 overflow-hidden">
              {selectedMember.image ? (
                <div className="relative w-full lg:w-2/5 aspect-[3/4] lg:aspect-auto lg:min-h-[500px] flex-shrink-0">
                  <img src={selectedMember.image} alt={selectedMember.name} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-card via-card/50 to-transparent" />
                </div>
              ) : (
                <div className="relative w-full lg:w-2/5 lg:min-h-[500px] flex-shrink-0 bg-card/80 flex items-center justify-center">
                  <span className="font-bebas text-8xl text-foreground/10">{selectedMember.name.charAt(0)}</span>
                </div>
              )}

              <div className="flex-1 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                <p className="font-oswald text-xs text-primary uppercase tracking-[0.2em] mb-2 glow-primary">{selectedMember.title}</p>
                <h3 className="font-bebas text-3xl md:text-5xl lg:text-6xl text-foreground uppercase leading-none mb-6">{selectedMember.name}</h3>
                {selectedMember.credentials && (
                  <ul className="space-y-3">
                    {selectedMember.credentials.map((cred, i) => (
                      <li key={i} className="flex items-start gap-3 bg-primary/10 border border-primary/20 px-4 py-3 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span className="font-oswald text-sm lg:text-base text-foreground/90">{cred}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
            </div>
          </div>
        </div>
      )}

      <FooterSection />
    </main>
  );
};

export default Staff;