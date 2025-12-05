import { useState } from "react";
import { Play, Star, Quote } from "lucide-react";

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
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <section className="relative py-20 md:py-28 lg:py-36 bg-black overflow-hidden">
      <div className="container relative mx-auto px-6 lg:px-16">
        <div className="text-center mb-12 lg:mb-16">
          <p className="font-oswald text-sm text-primary uppercase tracking-[0.3em] mb-4">Real Stories, Real Results</p>
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-foreground uppercase leading-none mb-4">
            Hear From LPA Families
          </h2>
          <p className="font-oswald text-base text-muted-foreground max-w-lg mx-auto">
            These are real parents sharing real experiences from their athlete's journey.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {testimonials.map((item, index) => (
            <div key={index} className="group">
              <div 
                className="relative aspect-[9/16] mb-4 cursor-pointer overflow-hidden bg-card"
                onClick={() => setPlaying(playing === index ? null : index)}
              >
                {playing === index ? (
                  <video src={item.video} autoPlay controls className="w-full h-full object-cover" />
                ) : (
                  <>
                    <img src={item.thumb} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary text-primary-foreground font-bebas text-xs px-2 py-1">{item.highlight}</span>
                    </div>
                  </>
                )}
              </div>
              
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-primary text-primary" />)}
              </div>
              <p className="font-oswald text-sm text-foreground/80 mb-2">"{item.quote}"</p>
              <p className="font-bebas text-foreground">{item.name}</p>
              <p className="font-oswald text-xs text-muted-foreground">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;