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
}

const LandingCommitments = ({ title, subtitle, commitments, totalCount }: LandingCommitmentsProps) => {
  return (
    <>
      <SectionDivider fromColor="#0a0a0a" toColor="#1a1a1a" />
      <section className="py-16 md:py-32 bg-[#1a1a1a] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-[2000px] mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-20">
            <div className="inline-flex items-center gap-2 md:gap-4 px-5 py-3 md:px-8 md:py-4 bg-primary/10 border border-primary/20 rounded-full mb-6 md:mb-10">
              <GraduationCap className="w-5 h-5 md:w-8 md:h-8 text-primary" />
              <span className="text-primary font-bebas uppercase tracking-wider text-xs sm:text-sm md:text-xl font-bold">
                {totalCount} College Commitments
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bebas font-black uppercase mb-5 md:mb-10 px-4 leading-[0.95]">
              {title}
            </h2>
            <p className="text-sm sm:text-base md:text-2xl lg:text-3xl text-muted-foreground font-oswald max-w-4xl mx-auto px-2 leading-relaxed">
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
                  <p className="text-sm md:text-xl font-bebas uppercase text-primary mb-1 md:mb-2">
                    {commitment.name}
                  </p>
                  <p className="text-xs md:text-base text-muted-foreground font-oswald leading-relaxed">
                    {commitment.school}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Context - Updated Bridge Copy */}
          <div className="text-center px-4">
            <div className="bg-card border-2 border-primary/30 rounded-xl p-8 md:p-14 max-w-3xl mx-auto">
              <p className="text-base sm:text-lg md:text-3xl lg:text-4xl text-foreground font-oswald font-bold leading-relaxed md:leading-relaxed mb-5 md:mb-10">
                Every one of these athletes started with the same free evaluation you're about to book.
              </p>
              <p className="text-sm sm:text-base md:text-2xl lg:text-3xl text-muted-foreground font-oswald leading-relaxed md:leading-relaxed">
                The evaluation showed them exactly where they were—and gave them a clear roadmap to get here. Your athlete's journey starts the same way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default LandingCommitments;
