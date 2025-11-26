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
    <section className="py-12 md:py-24 bg-background">
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
                className="bg-card border-2 border-border rounded-xl p-4 md:p-8 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSocialProof;
