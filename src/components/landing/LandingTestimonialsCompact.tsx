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
    <section className="py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block bg-primary/20 text-primary font-bebas text-sm px-4 py-1 mb-4 uppercase tracking-widest">
            Real Results
          </div>
          <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl text-foreground uppercase tracking-tight mb-3">
            Hear From LPA Families
          </h2>
        </div>
        
        {/* Testimonials grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {testimonials.map((item, index) => (
            <div key={index} className="group">
              {/* Video thumbnail */}
              <div 
                className="relative aspect-[9/16] rounded-lg overflow-hidden cursor-pointer mb-3"
                onClick={() => setPlayingIndex(playingIndex === index ? null : index)}
              >
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
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              {/* Quote & name */}
              <p className="font-oswald text-xs md:text-sm text-foreground/70 italic mb-2 line-clamp-2">"{item.quote}"</p>
              <p className="font-bebas text-xs text-primary">{item.name}</p>
              <p className="font-oswald text-[10px] text-muted-foreground">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingTestimonialsCompact;
