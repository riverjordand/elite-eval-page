import facilityTraining from "@/assets/facility-training-area.jpg";
import facilityStrength from "@/assets/facility-strength-conditioning.jpg";
import facilityVideo from "@/assets/facility-video-analysis.jpg";
import facilitySports from "@/assets/facility-sports-medicine.jpg";

const facilities = [
  {
    title: "Training Area",
    description: "Indoor turf, live data, game-environment spacing",
    image: facilityTraining
  },
  {
    title: "Strength & Conditioning",
    description: "Olympic lifting, power development, injury prevention",
    image: facilityStrength
  },
  {
    title: "Video Analysis",
    description: "Multi-angle capture, frame-by-frame breakdowns",
    image: facilityVideo
  },
  {
    title: "Sports Medicine",
    description: "Recovery protocols and preventative care",
    image: facilitySports
  }
];

const LandingFacilityGrid = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-black overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-block bg-primary/20 text-primary font-bebas text-xs md:text-sm px-3 py-1 mb-3 uppercase tracking-widest">
            16,000 Sq Ft
          </div>
          <h2 className="font-bebas text-2xl md:text-3xl lg:text-4xl text-foreground uppercase tracking-tight mb-2">
            Where Elite Athletes Train
          </h2>
          <p className="font-oswald text-xs md:text-sm text-muted-foreground max-w-lg mx-auto">
            Professional-grade development built for serious players
          </p>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg"
            >
              <img 
                src={facility.image} 
                alt={facility.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <h3 className="font-bebas text-sm md:text-base text-foreground uppercase leading-tight mb-0.5">
                  {facility.title}
                </h3>
                <p className="font-oswald text-[10px] md:text-xs text-foreground/60 leading-tight hidden md:block">
                  {facility.description}
                </p>
              </div>
              
              {/* Hover accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingFacilityGrid;
