interface AthletePhoto {
  caption: string;
  category: string;
  image: string;
}

interface LandingAthletesProps {
  title: string;
  subtitle: string;
  photos: AthletePhoto[];
}

const LandingAthletes = ({ title, subtitle, photos }: LandingAthletesProps) => {
  return (
    <section className="py-12 md:py-24 bg-[#1a1a1a] relative">
      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0a0a0a] pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bebas font-black uppercase mb-3 md:mb-4 px-4">
              {title}
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground font-oswald max-w-2xl mx-auto px-2">
              {subtitle}
            </p>
          </div>

          {/* Mobile: Horizontal Scroll Gallery | Desktop: Grid */}
          <div className="md:hidden overflow-x-auto -mx-4 px-4 pb-4">
            <div className="flex gap-3" style={{ width: 'max-content' }}>
              {photos.map((photo, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-64 bg-card border-2 border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
                >
                  {/* Athlete Photo */}
                  <div className="w-full aspect-square relative overflow-hidden">
                    <img 
                      src={photo.image} 
                      alt={photo.caption}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Caption */}
                  <div className="p-3">
                    <p className="text-xs font-bebas uppercase text-primary mb-1">
                      {photo.category}
                    </p>
                    <p className="text-xs text-muted-foreground font-oswald leading-relaxed">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photos.map((photo, index) => (
              <div 
                key={index}
                className="bg-card border-2 border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Athlete Photo */}
                <div className="w-full aspect-square relative overflow-hidden">
                  <img 
                    src={photo.image} 
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Caption */}
                <div className="p-4">
                  <p className="text-sm font-bebas uppercase text-primary mb-1">
                    {photo.category}
                  </p>
                  <p className="text-xs text-muted-foreground font-oswald leading-relaxed">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Swipe Indicator (Mobile Only) */}
          <div className="md:hidden text-center mt-4">
            <p className="text-xs text-muted-foreground font-oswald italic">
              ← Swipe to see more →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingAthletes;
