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
    <section className="relative py-16 lg:py-20 xl:py-24 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-black to-background" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="container relative mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8 lg:mb-10">
          <div>
            <p className="font-oswald text-xs lg:text-sm text-primary uppercase tracking-[0.3em] mb-3 glow-primary">
              Real Stories, Real Results
            </p>
            <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground uppercase leading-none drop-shadow-lg">
              Hear From LPA Families
            </h2>
          </div>
          <p className="font-oswald text-xs lg:text-sm text-muted-foreground lg:max-w-xs lg:text-right">
            Real parents sharing real experiences from their athlete's journey.
          </p>
        </div>
        
        {/* Desktop: Horizontal layout with all 4 testimonials */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {testimonials.map((item, index) => (
            <div key={index} className="group">
              {/* Video thumbnail */}
              <div 
                className="relative aspect-[9/16] lg:aspect-[9/14] mb-3 cursor-pointer overflow-hidden bg-card"
                onClick={() => openVideo(index)}
              >
                <img 
                  src={item.thumb} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div 
                    className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ boxShadow: '0 0 25px hsl(271 81% 56% / 0.6)' }}
                  >
                    <Play className="w-5 h-5 text-primary-foreground ml-0.5" fill="currentColor" />
                  </div>
                </div>
                
                {/* Highlight badge */}
                <div className="absolute top-2 left-2">
                  <span className="bg-primary text-primary-foreground font-bebas text-[10px] lg:text-xs px-2 py-0.5 uppercase"
                    style={{ boxShadow: '0 0 12px hsl(271 81% 56% / 0.5)' }}>
                    {item.highlight}
                  </span>
                </div>
                
                {/* Hover border */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 transition-colors duration-300 pointer-events-none" />
              </div>
              
              {/* Text content */}
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-oswald text-xs lg:text-sm text-foreground/80 mb-2 line-clamp-2">"{item.quote}"</p>
              <p className="font-bebas text-sm text-foreground">{item.name}</p>
              <p className="font-oswald text-[10px] lg:text-xs text-muted-foreground">{item.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={closeVideo}>
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" />
          
          <div 
            className="relative w-full max-w-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeVideo}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-primary/80 transition-colors z-20"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            
            <div className="relative aspect-[9/16] overflow-hidden bg-card"
              style={{ boxShadow: '0 0 80px hsl(271 81% 56% / 0.2)' }}>
              <video 
                src={testimonials[activeVideo].video} 
                autoPlay 
                controls 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Info below video */}
            <div className="mt-4 text-center">
              <p className="font-bebas text-xl text-foreground">{testimonials[activeVideo].name}</p>
              <p className="font-oswald text-sm text-primary glow-primary">{testimonials[activeVideo].role}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;