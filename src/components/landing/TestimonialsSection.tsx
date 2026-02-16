import { useState } from "react";
import { Play, Star, X } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  { video: "/testimonials/parent-testimonial-1.mp4", thumb: "/testimonials/parent-testimonial-1-thumb.jpg", quote: "In 6 months, my son gained 7 MPH on his fastball. The coaches see things others miss.", name: "Mike D.", role: "Father of 2024 D2 Commit", highlight: "+7 MPH" },
  { video: "/testimonials/parent-testimonial-2.mp4", thumb: "/testimonials/parent-testimonial-2-thumb.jpg", quote: "All of us push each other to improve and it's really made us come together as a team. Being able to work with the pitching coaches every day has really made me have confidence.", name: "Adam Hayes", role: "2025 Graduate · Committed to Texas Tech", highlight: "Texas Tech" },
  { video: "/testimonials/parent-testimonial-3.mp4", thumb: "/testimonials/parent-testimonial-3-thumb.jpg", quote: "We've seen incredible gains — not only on the baseball side, but the physical and strength side. The confidence and authority taught here by the coaches has helped him outside LPA.", name: "LPA Parent", role: "Parent of LPA Athlete", highlight: "Parent" },
  { video: "/testimonials/parent-testimonial-4.mp4", thumb: "/testimonials/parent-testimonial-4-thumb.jpg", quote: "My son's confidence transformed. He went from doubting himself to team captain.", name: "Linda M.", role: "Mother of Varsity Starter", highlight: "Captain" },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const openVideo = (i: number) => { setActiveVideo(i); document.body.style.overflow = 'hidden'; };
  const closeVideo = () => { setActiveVideo(null); document.body.style.overflow = 'unset'; };

  return (
    <section ref={ref} className="relative py-20 md:py-28 lg:py-36 border-t border-border/10">
      <div className="container relative mx-auto px-6 lg:px-16">
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-primary" />
              <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">Testimonials</span>
            </div>
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-foreground uppercase leading-[0.88]">
              From LPA<br /><span className="text-primary">Families</span>
            </h2>
          </div>
          <p className="font-oswald text-xs text-foreground/30 lg:max-w-xs lg:text-right">
            Real parents sharing real experiences from their athlete's journey.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
            >
              <div className="relative aspect-[9/14] mb-4 cursor-pointer overflow-hidden" onClick={() => openVideo(i)}>
                <img src={item.thumb} alt={item.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                    <Play className="w-4 h-4 text-primary-foreground ml-0.5" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-primary text-primary-foreground font-bebas text-[9px] px-2 py-0.5 uppercase tracking-wider">{item.highlight}</span>
                </div>
              </div>
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, s) => <Star key={s} className="w-2.5 h-2.5 fill-primary text-primary" />)}
              </div>
              <p className="font-oswald text-[11px] text-foreground/40 mb-2 line-clamp-2 leading-relaxed">"{item.quote}"</p>
              <p className="font-bebas text-sm text-foreground">{item.name}</p>
              <p className="font-oswald text-[9px] text-foreground/25 uppercase tracking-wider">{item.role}</p>
            </div>
          ))}
        </div>
      </div>

      {activeVideo !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={closeVideo}>
          <div className="absolute inset-0 bg-black/95" />
          <div className="relative w-full max-w-lg animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeVideo} className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-primary transition-colors z-20">
              <X className="w-5 h-5 text-foreground" />
            </button>
            <div className="relative aspect-[9/16] overflow-hidden bg-card">
              <video src={testimonials[activeVideo].video} autoPlay controls className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 text-center">
              <p className="font-bebas text-lg text-foreground">{testimonials[activeVideo].name}</p>
              <p className="font-oswald text-xs text-primary">{testimonials[activeVideo].role}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;
