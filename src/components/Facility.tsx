import facilityImage from "@/assets/facility-interior.jpg";

const facilityAreas = [
  {
    title: "Training Area",
    description: "Our spaciously offers over 16,000 sq. ft. of dedicated space for baseball training.",
    features: [
      "Advanced pitching technology",
      "Multiple training bays",
      "Baseball specific technology"
    ]
  },
  {
    title: "Recovery Center",
    description: "Features cutting-edge recovery tools like red light therapy and infrared saunas.",
    features: [
      "Normatec lease therapy",
      "Red Light Therapy sessions",
      "Cold plunge / Hot tub"
    ]
  },
  {
    title: "Strength Conditioning",
    description: "Advanced weight room with $250,000 of equipment for baseball specific training.",
    features: [
      "Personalized strength programs",
      "Access to latest gym technology",
      "Baseball strength and conditioning saunas"
    ]
  },
  {
    title: "Sports Medicine",
    description: "Weekly visits from Sponsor Physical Therapy ensure for injury prevention.",
    features: [
      "Physical Therapy sessions",
      "Injury assessment and care",
      "Professional programs from licensed professional"
    ]
  }
];

const Facility = () => {
  return (
    <section id="facility" className="py-24 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bebas font-black uppercase mb-4">
            The <span className="text-primary">Facility</span>
          </h2>
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
                    
                    <ul className="space-y-2">
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facility;
