import facilityImage from "@/assets/facility-interior.jpg";

const facilityAreas = [
  {
    title: "Training Area",
    description: "The same hitting and pitching environment used by college programs — built to speed up development.",
    features: [
      "Real-time ball flight and data so athletes instantly see what's working",
      "Indoor turf + full-size spacing that mirrors game environments",
      "High-speed cameras that reveal what the eye can't",
      "Advanced training systems that help athletes add velocity, sharpen contact, and fix flaws fast"
    ],
    tagline: "Your athlete trains in a space designed for progress — not guesswork."
  },
  {
    title: "Strength & Conditioning",
    description: "A complete baseball-specific strength system designed to build power, health, and longevity.",
    features: [
      "Olympic lifting platforms for explosive power",
      "Mobility + stability work to protect joints and prevent injuries",
      "Speed + agility training built for in-game movements",
      "Recovery zone to keep athletes training year-round"
    ],
    tagline: "They don't just get stronger — they become more explosive, durable, and recruitable."
  },
  {
    title: "Video Analysis Room",
    description: "College-level breakdowns that reveal EXACTLY what's holding your athlete back.",
    features: [
      "Multi-angle video capture so nothing goes unnoticed",
      "Frame-by-frame analysis to isolate mechanical flaws",
      "Pro-grade side-by-side comparisons to track improvement",
      "Personalized coaching corrections that create immediate results"
    ],
    tagline: "This is how serious players remove the guesswork and finally break through plateaus."
  },
  {
    title: "Sports Medicine",
    description: "Injury prevention and recovery support built directly into development — so progress never stops.",
    features: [
      "Physical therapists and athletic trainers overseeing movement quality",
      "Preventative screenings to catch issues early",
      "Custom recovery plans to keep athletes healthy during high-volume seasons",
      "Rehabilitation protocols to accelerate safe return-to-play"
    ],
    tagline: "Your athlete trains harder — and stays healthier — because everything is built with longevity in mind."
  }
];

const facilityStats = [
  { number: "16K+", label: "Square feet of elite baseball development" },
  { number: "365", label: "Days open for year-round progress" },
  { number: "PRO", label: "Technology + coaching used at D1 and MLB levels" }
];

const Facility = () => {
  return (
    <section id="facility" className="py-24 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bebas font-black uppercase mb-6">
            Where Elite Athletes <span className="text-primary">Train</span>
          </h2>
          <p className="text-lg md:text-xl font-oswald text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            16,000 square feet of professional-grade development built for one thing — turning serious players into college-ready athletes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {facilityAreas.map((area, index) => (
            <div
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Tilted card effect */}
              <div className="relative transform transition-all duration-300 hover:scale-105">
                <div 
                  className="absolute inset-0 bg-primary/10 rounded-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"
                ></div>
                
                <div className="relative bg-card border-2 border-border rounded-lg overflow-hidden transform rotate-1 group-hover:rotate-0 transition-transform duration-300">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={facilityImage}
                      alt={area.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-6 text-3xl font-bebas font-black uppercase text-primary">
                      {area.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-muted-foreground font-oswald mb-4 leading-relaxed">
                      {area.description}
                    </p>
                    
                    <ul className="space-y-3 mb-4">
                      {area.features.map((feature, fIndex) => (
                        <li 
                          key={fIndex}
                          className="flex items-start text-sm text-muted-foreground font-oswald"
                        >
                          <span className="text-primary mr-2 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <p className="text-sm font-oswald font-semibold text-foreground italic mt-4 pt-4 border-t border-border">
                      {area.tagline}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
            {facilityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bebas font-black text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-xs md:text-sm font-oswald text-muted-foreground uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facility;
