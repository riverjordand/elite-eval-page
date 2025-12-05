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
      <SectionDivider fromColor="#000000" toColor="#050505" />
      <section className="section-darker py-20 md:py-28 lg:py-40 xl:py-48">
        <div className="px-4 md:px-8 lg:px-12 xl:px-20">
          <div className="max-w-[1800px] mx-auto">
            {/* Header */}
            <div className="text-center mb-16 md:mb-20 lg:mb-28">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bebas font-black uppercase leading-[0.9] mb-6 lg:mb-8">
                Hear From<br />
                <span className="text-primary glow-primary">LPA Families</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground font-oswald max-w-4xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* Mobile: Horizontal Scroll */}
            <div className="lg:hidden overflow-x-auto -mx-4 px-4 pb-4">
              <div className="flex gap-4" style={{ width: 'max-content' }}>
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-[65vw] bg-card border border-border/50 rounded-xl overflow-hidden"
                  >
                    <div className="relative aspect-[9/16] bg-black">
                      <video 
                        controls
                        className="w-full h-full object-cover"
                        preload="metadata"
                        playsInline
                        poster={`${testimonial.videoUrl.replace('.mp4', '-thumb.jpg')}?v=${Date.now()}`}
                      >
                        <source src={testimonial.videoUrl} type="video/mp4" />
                      </video>
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-muted-foreground font-oswald italic mb-2 line-clamp-3">"{testimonial.quote}"</p>
                      <p className="text-xs font-bebas uppercase text-foreground">{testimonial.parentName}</p>
                      <p className="text-xs text-primary font-oswald">{testimonial.athleteName}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: Grid Layout */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-8 xl:gap-10">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-b from-card to-background border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500"
                >
                  <div className="relative aspect-[9/16] bg-black">
                    <video 
                      controls
                      className="w-full h-full object-cover"
                      preload="metadata"
                      playsInline
                      poster={`${testimonial.videoUrl.replace('.mp4', '-thumb.jpg')}?v=${Date.now()}`}
                    >
                      <source src={testimonial.videoUrl} type="video/mp4" />
                    </video>
                  </div>
                  <div className="p-6 xl:p-8">
                    <p className="text-base xl:text-lg text-muted-foreground font-oswald italic mb-4">"{testimonial.quote}"</p>
                    <p className="text-lg xl:text-xl font-bebas uppercase text-foreground">{testimonial.parentName}</p>
                    <p className="text-sm xl:text-base text-primary font-oswald">{testimonial.athleteName}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-20 lg:mt-28 text-center">
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-foreground font-oswald mb-4 leading-relaxed">
                Your athlete deserves this level of clarity, coaching, and progress.
              </p>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground font-oswald mb-10 lg:mb-14 leading-relaxed max-w-4xl mx-auto">
                Every player you see here started with the same free evaluation your athlete can book today.
              </p>
              <button
                onClick={onCtaClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 md:px-16 lg:px-20 py-6 md:py-8 lg:py-10 rounded-xl lg:rounded-2xl font-bebas text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase tracking-widest transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-primary/30 border-glow-intense"
              >
                → Book Your Free Evaluation
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingTestimonials;
