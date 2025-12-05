import { useState } from "react";
import { Play } from "lucide-react";

const testimonials = [
  {
    video: "/testimonials/parent-testimonial-1.mp4",
    thumb: "/testimonials/parent-testimonial-1-thumb.jpg",
    quote: "The mechanics work increased my velocity and took strain off my arm.",
    name: "Austin S.",
  },
  {
    video: "/testimonials/parent-testimonial-2.mp4",
    thumb: "/testimonials/parent-testimonial-2-thumb.jpg",
    quote: "Working with the pitching coaches made my breaking ball a weapon.",
    name: "Adam H.",
  },
  {
    video: "/testimonials/parent-testimonial-3.mp4",
    thumb: "/testimonials/parent-testimonial-3-thumb.jpg",
    quote: "Everything here is state of the art. Seeing those gains is amazing.",
    name: "LPA Parents",
  },
  {
    video: "/testimonials/parent-testimonial-4.mp4",
    thumb: "/testimonials/parent-testimonial-4-thumb.jpg",
    quote: "I got way stronger and my swing mechanics improved so much.",
    name: "Cash K.",
  },
];

const TestimonialsSection = () => {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden">
      {/* Ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-oswald text-xs md:text-sm text-primary uppercase tracking-[0.3em] mb-4">
            Real Results
          </p>
          <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl text-foreground uppercase leading-none">
            Hear From Athletes
          </h2>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <div key={index} className="group">
              {/* Video */}
              <div 
                className="relative aspect-[9/16] mb-4 cursor-pointer overflow-hidden bg-card"
                onClick={() => setPlaying(playing === index ? null : index)}
              >
                {playing === index ? (
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
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              {/* Quote */}
              <p className="font-oswald text-xs md:text-sm text-foreground/70 italic mb-2 line-clamp-2">
                "{item.quote}"
              </p>
              <p className="font-bebas text-sm text-primary">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
