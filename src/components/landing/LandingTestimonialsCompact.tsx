import { useState } from "react";
import { Play } from "lucide-react";

const testimonials = [
  {
    video: "/testimonials/parent-testimonial-1.mp4",
    thumb: "/testimonials/parent-testimonial-1-thumb.jpg",
    quote: "The mechanics work has increased my velocity and taken strain off my arm.",
    name: "Austin S.",
    role: "LPA Athlete"
  },
  {
    video: "/testimonials/parent-testimonial-2.mp4",
    thumb: "/testimonials/parent-testimonial-2-thumb.jpg",
    quote: "Working with the pitching coaches made my breaking ball a weapon.",
    name: "Adam H.",
    role: "2025 Graduate"
  },
  {
    video: "/testimonials/parent-testimonial-3.mp4",
    thumb: "/testimonials/parent-testimonial-3-thumb.jpg",
    quote: "Everything here is state of the art. Seeing those gains every day is amazing.",
    name: "LPA Parents",
    role: "Multiple Families"
  },
  {
    video: "/testimonials/parent-testimonial-4.mp4",
    thumb: "/testimonials/parent-testimonial-4-thumb.jpg",
    quote: "I got way stronger and my swing mechanics improved so much.",
    name: "Cash K.",
    role: "Class of 2030"
  },
];

const LandingTestimonialsCompact = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <section className="relative py-fluid-section overflow-hidden">
      {/* Dark cinematic background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Atmospheric lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[180px]" />
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent" />
      
      <div className="container relative mx-auto px-fluid-container-px">
        {/* Section header */}
        <div className="text-center mb-fluid-xl">
          <div className="inline-block bg-primary/20 backdrop-blur-sm text-primary font-bebas text-fluid-xs px-fluid-sm py-1.5 mb-fluid-xs uppercase tracking-[0.15em] border border-primary/30 rounded-sm">
            Real Results
          </div>
          <h2 className="font-bebas text-fluid-4xl text-foreground uppercase tracking-tight glow-primary">
            Hear From LPA Families
          </h2>
        </div>
        
        {/* Testimonials grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-fluid-gap-lg max-w-7xl mx-auto">
          {testimonials.map((item, index) => (
            <div key={index} className="group">
              {/* Video thumbnail */}
              <div 
                className="relative aspect-[9/16] rounded-xl lg:rounded-2xl overflow-hidden cursor-pointer mb-fluid-xs shadow-2xl"
                onClick={() => setPlayingIndex(playingIndex === index ? null : index)}
              >
                {/* Border glow */}
                <div className="absolute -inset-px rounded-xl lg:rounded-2xl bg-gradient-to-b from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                
                {playingIndex === index ? (
                  <video
                    src={item.video}
                    autoPlay
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <img 
                      src={item.thumb} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Cinematic overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 group-hover:via-black/20 transition-colors" />
                    
                    {/* Play button with glow */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/50 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative w-14 h-14 md:w-18 md:h-18 lg:w-24 lg:h-24 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl border-glow">
                          <Play className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary-foreground ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              {/* Quote & name */}
              <p className="font-oswald text-fluid-sm text-foreground/70 italic mb-fluid-xs line-clamp-2">"{item.quote}"</p>
              <p className="font-bebas text-fluid-base text-primary">{item.name}</p>
              <p className="font-oswald text-fluid-xs text-muted-foreground">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingTestimonialsCompact;
