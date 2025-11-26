import { Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  result?: string;
}

interface LandingSocialProofProps {
  title: string;
  testimonials: Testimonial[];
}

const LandingSocialProof = ({ title, testimonials }: LandingSocialProofProps) => {
  return (
    <section className="py-12 md:py-24 bg-[#1a1a1a] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bebas font-black uppercase px-4">
              {title}
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card border-2 border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Parent/Athlete Photo Placeholder - Compact for mobile */}
                <div className="w-full h-32 md:h-40 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
                  <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
                    <span className="text-xl md:text-2xl font-bebas text-primary">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-8">
                  {/* Stars */}
                  <div className="flex gap-0.5 md:gap-1 mb-3 md:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-xs sm:text-sm md:text-base text-foreground font-oswald italic mb-4 md:mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  {/* Result Badge (if exists) */}
                  {testimonial.result && (
                    <div className="mb-3 md:mb-4 px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 border border-primary/20 rounded-lg inline-block">
                      <p className="text-primary font-bebas uppercase text-xs md:text-sm tracking-wide">
                        {testimonial.result}
                      </p>
                    </div>
                  )}

                  {/* Author */}
                  <div className="border-t border-border pt-3 md:pt-4">
                    <p className="font-bebas text-base md:text-lg uppercase text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground font-oswald">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSocialProof;
