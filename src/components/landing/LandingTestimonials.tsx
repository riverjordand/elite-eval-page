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
  onCtaClick?: () => void;
}

const LandingTestimonials = ({ title, subtitle, testimonials, onCtaClick }: LandingTestimonialsProps) => {
  return (
    <>
      <SectionDivider fromColor="#0a0a0a" toColor="#1a1a1a" />
      <section className="py-16 md:py-24 lg:py-32 bg-[#1a1a1a] relative">
      <div className="mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-[1800px]">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas font-black uppercase mb-4 md:mb-6 px-4 leading-tight">
              {title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-oswald max-w-3xl mx-auto px-2 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Mobile: Horizontal Scroll Carousel */}
          <div className="md:hidden overflow-x-auto -mx-4 px-4 pb-4">
            <div className="flex gap-3" style={{ width: 'max-content' }}>
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-[65vw] bg-card border-2 border-border rounded-lg overflow-hidden"
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
                  <div className="p-2.5">
                    <p className="text-xs text-muted-foreground font-oswald italic mb-2 leading-relaxed line-clamp-3">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-2">
                      <div>
                        <p className="text-xs font-bebas uppercase text-foreground">
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
                  <p className="text-sm md:text-base text-muted-foreground font-oswald italic mb-3">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-sm md:text-lg font-bebas uppercase text-foreground">
                      {testimonial.parentName}
                    </p>
                    <p className="text-xs md:text-sm text-primary font-oswald">
                      {testimonial.athleteName}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 md:mt-20 text-center max-w-4xl mx-auto px-4">
            <p className="text-lg md:text-xl lg:text-2xl text-foreground font-oswald mb-3 leading-relaxed">
              Your athlete deserves this level of clarity, coaching, and progress.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-oswald mb-8 md:mb-10 leading-relaxed">
              Every player you see here started with the same free evaluation your athlete can book today.
            </p>
            <button
              onClick={onCtaClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 md:px-14 py-5 md:py-7 rounded-lg font-bebas text-xl md:text-2xl lg:text-3xl uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-lg h-auto min-h-[56px]"
            >
              → Book Your Free Evaluation
            </button>
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
