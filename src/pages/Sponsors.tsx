import Navigation from "@/components/Navigation";
import FooterSection from "@/components/landing/FooterSection";

const sponsors = [
  {
    name: "Wilson",
    logo: "/sponsors/wilson.png",
    benefits: [
      "Custom Wilson A2000 gloves per player.",
      "Two-way players receive 2 gloves.",
      "Baseballs for game play, practice, and in hitting cages.",
    ],
  },
  {
    name: "DeMarini",
    logo: "/sponsors/demarini.png",
    benefits: [
      "Voodoo, Goods, and Zen (middle school) metal bats for team use.",
      "Wood composite for practice and play.",
    ],
  },
  {
    name: "EvoShield",
    logo: "/sponsors/evoshield.png",
    benefits: [
      "Custom game uniforms.",
      "Practice uniforms.",
      "Travel attire and gear.",
      "Strength training gear.",
      "Batting gloves, helmets, belts, catching gear, etc.",
    ],
  },
  {
    name: "Spooner",
    logo: "/sponsors/spooner.png",
    benefits: [
      "Licensed PT's come on site every Monday for anything the athletes need rehab or prevention wise.",
      "Primarily manual manipulation and soft tissue treatment.",
      "Secondary treatments include cupping, dry needling, and chiropractic.",
    ],
  },
  {
    name: "Louisville Slugger",
    logo: "/sponsors/louisville-slugger.png",
    benefits: [
      "Individual wood bats to every player for practice and cage hitting.",
      'Team metal "Atlas" bats for play.',
    ],
  },
  {
    name: "Mad Fresh",
    logo: "/sponsors/madfresh.png",
    benefits: [
      "Daily meals are delivered to the academy by Mad Fresh.",
      "Meals are served family style. This ensures those who need to eat more can for recovery.",
      "Food variety changes weekly and gluten/dairy free options are available.",
    ],
  },
];

const Sponsors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-20 md:pt-24 overflow-hidden">
        <div className="relative h-48 md:h-64 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-card via-background/80 to-background" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[160px]" />
          <h1 className="relative font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase text-center leading-none">
            <span className="text-primary">Sponsors</span>
          </h1>
        </div>
      </section>

      {/* Sponsors Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="group bg-card/60 border border-border/30 rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-500"
              style={{ boxShadow: "0 20px 40px -15px rgba(0,0,0,0.4)" }}
            >
              {/* Logo */}
              <div className="bg-black flex items-center justify-center p-8 md:p-12 aspect-[16/10]">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-40 md:max-h-52 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-5 md:p-6">
                <h2 className="font-bebas text-2xl md:text-3xl uppercase text-foreground mb-3">
                  {sponsor.name}
                </h2>
                <ul className="space-y-2">
                  {sponsor.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 text-xs">•</span>
                      <span className="font-oswald text-sm md:text-base text-foreground/80 font-medium">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default Sponsors;
