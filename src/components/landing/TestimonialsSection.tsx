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
    <section className="relative py-16 md:py-24 lg:py-32 xl:py-40 bg-black overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container relative mx-auto px-6 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <p className="font-oswald text-xs md:text-sm lg:text-base text-primary uppercase tracking-[0.3em] mb-3 lg:mb-4">
            Real Results
          </p>
          <h2 className="font-bebas text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-foreground uppercase leading-none">
            Hear From Athletes
          </h2>
        </div>
        
        {/* Grid - 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-10">
          {testimonials.map((item, index) => (
            <div key={index} className="group">
              <div 
                className="relative aspect-[9/16] mb-3 lg:mb-4 cursor-pointer overflow-hidden bg-card"
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
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                      <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              <p className="font-oswald text-xs md:text-sm lg:text-base text-foreground/70 italic mb-2 line-clamp-2">
                "{item.quote}"
              </p>
              <p className="font-bebas text-sm lg:text-base text-primary">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
