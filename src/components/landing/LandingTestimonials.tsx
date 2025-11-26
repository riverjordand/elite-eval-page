import { Play } from "lucide-react";

interface Testimonial {
  videoUrl: string;
  parentName: string;
  athleteName: string;
  quote: string;
}

interface LandingTestimonialsProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

const LandingTestimonials = ({ title, subtitle, testimonials }: LandingTestimonialsProps) => {
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

          {/* Mobile: Horizontal Scroll Carousel */}
          <div className="md:hidden overflow-x-auto -mx-4 px-4 pb-4">
            <div className="flex gap-4" style={{ width: 'max-content' }}>
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-[85vw] bg-card border-2 border-border rounded-lg overflow-hidden"
                >
                  {/* Video */}
                  <div className="relative aspect-video bg-black">
                    <video 
                      controls
                      className="w-full h-full"
                      preload="metadata"
                    >
                      <source src={testimonial.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  {/* Caption */}
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground font-oswald italic mb-2 line-clamp-3">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-2">
                      <div>
                        <p className="text-sm font-bebas uppercase text-foreground">
                          {testimonial.parentName}
                        </p>
                        <p className="text-xs text-primary font-oswald">
                          Parent of {testimonial.athleteName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card border-2 border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Video */}
                <div className="relative aspect-video bg-black">
                  <video 
                    controls
                    className="w-full h-full"
                    preload="metadata"
                  >
                    <source src={testimonial.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Caption */}
                <div className="p-4">
                  <p className="text-sm text-muted-foreground font-oswald italic mb-3 line-clamp-3">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-sm font-bebas uppercase text-foreground">
                      {testimonial.parentName}
                    </p>
                    <p className="text-xs text-primary font-oswald">
                      Parent of {testimonial.athleteName}
                    </p>
                  </div>
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

export default LandingTestimonials;
