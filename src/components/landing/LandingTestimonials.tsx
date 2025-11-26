import { Play } from "lucide-react";
import SectionDivider from "./SectionDivider";

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
    <>
      <SectionDivider fromColor="#1a1a1a" toColor="#0a0a0a" />
      <section className="py-12 md:py-24 bg-[#0a0a0a] relative">
      <div className="mx-auto px-4 md:px-6">
        <div className="mx-auto">
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
            <div className="flex gap-3" style={{ width: 'max-content' }}>
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-[75vw] bg-card border-2 border-border rounded-lg overflow-hidden"
                >
                  {/* Video - Vertical aspect ratio */}
                  <div className="relative aspect-[9/16] bg-black">
                    <video 
                      controls
                      className="w-full h-full object-cover"
                      preload="metadata"
                      playsInline
                      poster={`${testimonial.videoUrl.replace('.mp4', '-thumb.jpg')}?v=${Date.now()}`}
                    >
                      <source src={testimonial.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  {/* Caption */}
                  <div className="p-3">
                    <p className="text-sm text-muted-foreground font-oswald italic mb-2 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-2">
                      <div>
                        <p className="text-sm font-bebas uppercase text-foreground">
                          {testimonial.parentName}
                        </p>
                        <p className="text-xs text-primary font-oswald">
                          {testimonial.athleteName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid md:grid-cols-4 gap-6 max-w-[1600px] mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card border-2 border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Video - Vertical aspect ratio */}
                <div className="relative aspect-[9/16] bg-black">
                  <video 
                    controls
                    className="w-full h-full object-cover"
                    preload="metadata"
                    playsInline
                    poster={`${testimonial.videoUrl.replace('.mp4', '-thumb.jpg')}?v=${Date.now()}`}
                  >
                    <source src={testimonial.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Caption */}
                <div className="p-4">
                  <p className="text-sm text-muted-foreground font-oswald italic mb-3">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-sm font-bebas uppercase text-foreground">
                      {testimonial.parentName}
                    </p>
                    <p className="text-xs text-primary font-oswald">
                      {testimonial.athleteName}
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
    </>
  );
};

export default LandingTestimonials;
