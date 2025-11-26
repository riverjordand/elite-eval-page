import trainingAreaImage from "@/assets/facility-training-area.jpg";
import strengthConditioningImage from "@/assets/facility-strength-conditioning.jpg";
import videoAnalysisImage from "@/assets/facility-video-analysis.jpg";
import sportsMedicineImage from "@/assets/facility-sports-medicine.jpg";

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
    tagline: "Your athlete trains in a space designed for progress — not guesswork.",
    image: trainingAreaImage
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
    tagline: "They don't just get stronger — they become more explosive, durable, and recruitable.",
    image: strengthConditioningImage
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
    tagline: "This is how serious players remove the guesswork and finally break through plateaus.",
    image: videoAnalysisImage
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
    tagline: "Your athlete trains harder — and stays healthier — because everything is built with longevity in mind.",
    image: sportsMedicineImage
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

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto scrollbar-hide -mx-6 px-6">
          <div className="flex gap-4 pb-4">
            {facilityAreas.map((area, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85vw] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card border-2 border-primary/20 rounded-lg overflow-hidden h-full">
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-2xl font-bebas font-black uppercase text-primary mb-3">
                      {area.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-oswald mb-3 leading-relaxed">
                      {area.description}
                    </p>
                    
                    <ul className="space-y-2 mb-3">
                      {area.features.map((feature, fIndex) => (
                        <li 
                          key={fIndex}
                          className="flex items-start text-xs text-muted-foreground font-oswald"
                        >
                          <span className="text-primary mr-2 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <p className="text-xs font-oswald font-semibold text-foreground italic mt-3 pt-3 border-t border-border">
                      {area.tagline}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Single Row Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {facilityAreas.map((area, index) => (
            <div
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card border-2 border-primary/20 rounded-lg overflow-hidden h-full transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-2xl font-bebas font-black uppercase text-primary mb-3">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-oswald mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <ul className="space-y-2 mb-4">
                    {area.features.map((feature, fIndex) => (
                      <li 
                        key={fIndex}
                        className="flex items-start text-xs text-muted-foreground font-oswald"
                      >
                        <span className="text-primary mr-2 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-xs font-oswald font-semibold text-foreground italic mt-4 pt-4 border-t border-border">
                    {area.tagline}
                  </p>
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
