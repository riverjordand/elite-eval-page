import { GraduationCap } from "lucide-react";
import SectionDivider from "./SectionDivider";

interface Commitment {
  name: string;
  school: string;
  image: string;
}

interface LandingCommitmentsProps {
  title: string;
  subtitle: string;
  commitments: Commitment[];
  totalCount: string;
  onCtaClick?: () => void;
}

const LandingCommitments = ({ title, subtitle, commitments, totalCount, onCtaClick }: LandingCommitmentsProps) => {
  return (
    <>
      <SectionDivider fromColor="#1a1a1a" toColor="#0a0a0a" />
      <section className="py-16 md:py-24 lg:py-32 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-4 md:px-8 lg:px-6">
        <div className="max-w-[2000px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center gap-3 md:gap-4 px-6 py-3 md:px-8 md:py-4 bg-primary/10 border border-primary/20 rounded-full mb-6 md:mb-8">
              <GraduationCap className="w-5 h-5 md:w-7 md:h-7 text-primary" />
              <span className="text-primary font-bebas uppercase tracking-wider text-sm sm:text-base md:text-xl lg:text-2xl font-bold">
                {totalCount} College Commitments
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas font-black uppercase mb-4 md:mb-6 px-4 leading-tight">
              {title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-oswald max-w-3xl mx-auto px-2 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Mobile: 2 Columns / Desktop: Single Row with Massive Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-10 mb-8 md:mb-12">
            {commitments.map((commitment, index) => (
              <div 
                key={index}
                className="bg-card border-2 border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Commitment Photo */}
                <div className="w-full aspect-square relative overflow-hidden">
                  <img 
                    src={commitment.image} 
                    alt={`${commitment.name} - ${commitment.school}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Caption */}
                <div className="p-3 md:p-8">
                  <p className="text-sm md:text-2xl font-bebas uppercase text-primary mb-1 md:mb-2">
                    {commitment.name}
                  </p>
                  <p className="text-xs md:text-lg text-muted-foreground font-oswald leading-relaxed">
                    {commitment.school}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 md:mt-20 text-center max-w-4xl mx-auto px-4">
            <p className="text-lg md:text-xl lg:text-2xl text-foreground font-oswald mb-3 leading-relaxed">
              Every committed athlete you see here started with the same free evaluation your athlete can book today.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-oswald mb-8 md:mb-10 leading-relaxed">
              Get a clear development roadmap and the confidence to reach the next level.
            </p>
            <button
              onClick={onCtaClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 md:px-14 py-5 md:py-7 rounded-lg font-bebas text-xl md:text-2xl lg:text-3xl uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-lg h-auto min-h-[56px]"
            >
              → Book Your Free Evaluation
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default LandingCommitments;
