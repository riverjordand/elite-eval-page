import { useState } from "react";
import { Play } from "lucide-react";

const testimonials = [
  {
    video: "/testimonials/parent-testimonial-1.mp4",
    thumb: "/testimonials/parent-testimonial-1-thumb.jpg",
    quote: "The coaches here actually care about development.",
    name: "Sarah M."
  },
  {
    video: "/testimonials/parent-testimonial-2.mp4",
    thumb: "/testimonials/parent-testimonial-2-thumb.jpg",
    quote: "My son's velocity jumped 8 mph in 4 months.",
    name: "Mike T."
  },
  {
    video: "/testimonials/parent-testimonial-3.mp4",
    thumb: "/testimonials/parent-testimonial-3-thumb.jpg",
    quote: "Best investment we've made in his baseball career.",
    name: "Jennifer R."
  },
];

const LandingTestimonialsCompact = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-16 bg-card/30">
      <div className="container mx-auto px-4">
        <h2 className="font-bebas text-2xl md:text-3xl text-center text-foreground mb-8 uppercase tracking-wide">
          What Parents Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {testimonials.map((item, index) => (
            <div key={index} className="text-center">
              <div 
                className="relative aspect-[9/16] max-h-64 md:max-h-80 mx-auto mb-3 rounded-lg overflow-hidden cursor-pointer group"
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
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                      <Play className="w-10 h-10 text-white" fill="white" />
                    </div>
                  </>
                )}
              </div>
              <p className="font-oswald text-sm text-foreground/80 italic mb-1">"{item.quote}"</p>
              <p className="font-bebas text-xs text-primary">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingTestimonialsCompact;
