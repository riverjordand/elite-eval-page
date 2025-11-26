import facilityImage from "@/assets/facility-interior.jpg";

const staffMembers = [
  {
    name: "ROBERTO QUINONEZ - HEAD COACH",
    title: "Former Division I Baseball player at the University of Nevada",
    credentials: [
      "Staffed Red Level by Arizona Diamondbacks",
      "9 years of professional baseball experience"
    ]
  },
  {
    name: "JOE GARCIA - ASSISTANT COACH",
    title: "Former Division I Baseball player at the University of Nevada",
    credentials: [
      "Drafted Red Level by Arizona Diamondbacks",
      "9 years of professional baseball experience"
    ]
  },
  {
    name: "ERIC ORTIZ - COORDINATOR",
    title: "Former Division I Baseball player at the University of Nevada board",
    credentials: [
      "Drafted Red Level by Arizona Diamondbacks",
      "9 years of professional baseball experience"
    ]
  },
  {
    name: "TYRRELL GODWIN - ASSISTANT COACH",
    title: "Former Division I Baseball player at the University of New Mexico",
    credentials: [
      "Extensive experience in teaching and managing MLB youth baseball",
      ""
    ]
  },
  {
    name: "BILL BUCKLE - GM & CO-FOUNDER",
    title: "Strategic development advisor with extensive business and community leadership expertise",
    credentials: [
      "Brings Board of Development: Over 16 years of experience serving athletes and communities, fostering economic, athletic, and personal growth.",
      "Ex-PBR: de Bravo School Nonprofit consulting, known for driving meaningful impact, connecting resources, and at sustaining innovative change."
    ]
  }
];

const Staff = () => {
  return (
    <section id="staff" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bebas font-black uppercase mb-4">
            Meet The <span className="text-primary">Staff</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {staffMembers.map((member, index) => (
            <div
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300">
                {/* Staff Image */}
                <div className="relative h-80 overflow-hidden bg-secondary">
                  <img 
                    src={facilityImage}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
                </div>

                {/* Staff Info */}
                <div className="p-6 -mt-20 relative z-10">
                  <h3 className="text-xl font-bebas font-black uppercase mb-2 text-foreground">
                    {member.name}
                  </h3>
                  
                  <p className="text-sm text-primary font-oswald font-semibold mb-4">
                    {member.title}
                  </p>
                  
                  <div className="space-y-2">
                    {member.credentials.map((credential, cIndex) => (
                      credential && (
                        <p 
                          key={cIndex}
                          className="text-xs text-muted-foreground font-oswald leading-relaxed"
                        >
                          • {credential}
                        </p>
                      )
                    ))}
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

export default Staff;
