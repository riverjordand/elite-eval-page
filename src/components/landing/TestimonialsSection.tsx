import { useState } from "react";
import { Play, Star, X } from "lucide-react";

const testimonials = [
  {
    video: "/testimonials/parent-testimonial-1.mp4",
    thumb: "/testimonials/parent-testimonial-1-thumb.jpg",
    quote: "In 6 months, my son gained 7 MPH on his fastball. The coaches see things others miss.",
    name: "Mike D.",
    role: "Father of 2024 D2 Commit",
    highlight: "+7 MPH"
  },
  {
    video: "/testimonials/parent-testimonial-2.mp4",
    thumb: "/testimonials/parent-testimonial-2-thumb.jpg",
    quote: "LPA gave my daughter clarity on exactly what to work on. Now she has 3 college offers.",
    name: "Sarah T.",
    role: "Mother of HS Junior",
    highlight: "3 Offers"
  },
  {
    video: "/testimonials/parent-testimonial-3.mp4",
    thumb: "/testimonials/parent-testimonial-3-thumb.jpg",
    quote: "Worth every penny. The technology and coaching are on another level.",
    name: "James R.",
    role: "Father of Travel Ball Player",
    highlight: "Pro-Level"
  },
  {
    video: "/testimonials/parent-testimonial-4.mp4",
    thumb: "/testimonials/parent-testimonial-4-thumb.jpg",
    quote: "My son's confidence transformed. He went from doubting himself to team captain.",
    name: "Linda M.",
    role: "Mother of Varsity Starter",
    highlight: "Captain"
  },
];

const TestimonialsSection = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const openVideo = (index: number) => {
    setActiveVideo(index);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setActiveVideo(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/5 to-background" />
      
      <div className="container relative mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="max-w-2xl mb-10 md:mb-14">
          <p className="font-oswald text-xs text-accent uppercase tracking-[0.3em] mb-3">
            Real Stories, Real Results
          </p>
          <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground uppercase leading-none mb-3">
            Hear From LPA Families
          </h2>
          <p className="font-oswald text-sm text-foreground/50">
            Real parents sharing real experiences from their athlete's journey.
          </p>
        </div>
        
        {/* Testimonial cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
          {testimonials.map((item, index) => (
            <div key={index} className="group">
              {/* Video thumbnail */}
              <div 
                className="relative aspect-[9/14] mb-3 cursor-pointer overflow-hidden bg-card"
                onClick={() => openVideo(index)}
              >
                <img 
                  src={item.thumb} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-11 h-11 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-4 h-4 text-primary-foreground ml-0.5" fill="currentColor" />
                  </div>
                </div>
                
                {/* Highlight */}
                <div className="absolute top-2 left-2">
                  <span className="bg-primary text-primary-foreground font-bebas text-[10px] px-2 py-0.5 uppercase tracking-wider">
                    {item.highlight}
                  </span>
                </div>
              </div>
              
              <div className="flex gap-0.5 mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-oswald text-xs text-foreground/60 mb-2 line-clamp-2">"{item.quote}"</p>
              <p className="font-bebas text-sm text-foreground">{item.name}</p>
              <p className="font-oswald text-[10px] text-foreground/40">{item.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={closeVideo}>
          <div className="absolute inset-0 bg-black/95" />
          <div className="relative w-full max-w-lg animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={closeVideo}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-foreground/10 border border-border/20 flex items-center justify-center hover:bg-primary transition-colors z-20"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
            <div className="relative aspect-[9/16] overflow-hidden bg-card">
              <video src={testimonials[activeVideo].video} autoPlay controls className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 text-center">
              <p className="font-bebas text-xl text-foreground">{testimonials[activeVideo].name}</p>
              <p className="font-oswald text-sm text-primary">{testimonials[activeVideo].role}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;
