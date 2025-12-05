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
    <section className="relative py-12 md:py-20 lg:py-28 bg-black overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-block bg-primary/20 text-primary font-bebas text-xs md:text-sm lg:text-base px-3 md:px-4 py-1 mb-3 md:mb-4 uppercase tracking-widest">
            16,000 Sq Ft
          </div>
          <h2 className="font-bebas text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground uppercase tracking-tight mb-2 md:mb-3">
            Where Elite Athletes Train
          </h2>
          <p className="font-oswald text-xs md:text-base lg:text-lg text-muted-foreground max-w-xl mx-auto">
            Professional-grade development built for serious players
          </p>
        </div>
        
        {/* Grid - 2x2 on desktop for larger images */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 max-w-7xl mx-auto">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="group relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-xl"
            >
              <img 
                src={facility.image} 
                alt={facility.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
                <h3 className="font-bebas text-sm md:text-xl lg:text-2xl text-foreground uppercase leading-tight mb-1 md:mb-2">
                  {facility.title}
                </h3>
                <p className="font-oswald text-[10px] md:text-sm lg:text-base text-foreground/60 leading-tight">
                  {facility.description}
                </p>
              </div>
              
              {/* Hover accent */}
              <div className="absolute top-0 left-0 w-full h-1 lg:h-2 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingFacilityGrid;
