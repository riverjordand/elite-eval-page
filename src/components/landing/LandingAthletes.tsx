interface AthletePhoto {
  caption: string;
  category: string;
}

interface LandingAthletesProps {
  title: string;
  subtitle: string;
  photos: AthletePhoto[];
}

const LandingAthletes = ({ title, subtitle, photos }: LandingAthletesProps) => {
  return (
    <section className="py-12 md:py-24 bg-background">
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
                  {/* Photo Placeholder - Square for mobile scroll */}
                  <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
                    <div className="relative z-10 text-center p-4">
                      <p className="text-primary/60 font-bebas text-sm uppercase tracking-wider">
                        Athlete Photo {index + 1}
                      </p>
                    </div>
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
                {/* Photo Placeholder - Square */}
                <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
                  <div className="relative z-10 text-center p-4">
                    <p className="text-primary/60 font-bebas text-xs uppercase tracking-wider">
                      Athlete Photo
                    </p>
                  </div>
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
