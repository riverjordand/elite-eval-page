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
      <SectionDivider />
      <section className="py-12 md:py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-3 bg-primary/10 border border-primary/20 rounded-full mb-4 md:mb-6">
              <GraduationCap className="w-4 h-4 md:w-6 md:h-6 text-primary" />
              <span className="text-primary font-bebas uppercase tracking-wider text-xs sm:text-sm md:text-lg font-bold">
                {totalCount} College Commitments
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bebas font-black uppercase mb-3 md:mb-4 px-4">
              {title}
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground font-oswald max-w-2xl mx-auto px-2">
              {subtitle}
            </p>
          </div>

          {/* Mobile & Desktop: Grid Layout */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12">
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
                <div className="p-4 md:p-4">
                  <p className="text-sm md:text-sm font-bebas uppercase text-primary mb-1 md:mb-1">
                    {commitment.name}
                  </p>
                  <p className="text-xs md:text-xs text-muted-foreground font-oswald leading-relaxed">
                    {commitment.school}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Context */}
          <div className="text-center px-4">
            <div className="bg-card border-2 border-primary/30 rounded-xl p-6 md:p-8 max-w-3xl mx-auto">
              <p className="text-sm sm:text-base md:text-lg text-foreground font-oswald leading-relaxed mb-3 md:mb-4">
                These athletes all started with the same <span className="text-primary font-bold">Free Evaluation</span> you're about to book.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-oswald">
                Your athlete could be next on this list.
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
