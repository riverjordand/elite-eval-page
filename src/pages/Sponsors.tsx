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
        <div className="relative h-36 md:h-64 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-card via-background/80 to-background" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[160px]" />
          <h1 className="relative font-bebas text-fluid-5xl uppercase text-center leading-none">
            <span className="text-primary">Sponsors</span>
          </h1>
        </div>
      </section>

      {/* Sponsors Grid */}
      <div className="container mx-auto px-fluid-container-px pb-fluid-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-fluid-gap-lg">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="group bg-card/60 border border-border/30 rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              {/* Logo */}
              <div className="bg-black flex items-center justify-center p-6 md:p-10 aspect-[16/10]">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-28 md:max-h-40 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="p-fluid-sm">
                <h2 className="font-bebas text-fluid-xl uppercase text-foreground mb-2">
                  {sponsor.name}
                </h2>
                <ul className="space-y-1.5">
                  {sponsor.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1 text-[10px]">•</span>
                      <span className="font-oswald text-xs md:text-sm text-foreground/80">
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
