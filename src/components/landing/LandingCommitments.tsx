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
      <SectionDivider fromColor="#050505" toColor="#000000" />
      <section className="section-dark py-20 md:py-28 lg:py-40 xl:py-48">
        <div className="px-4 md:px-8 lg:px-12 xl:px-20">
          <div className="max-w-[1800px] mx-auto">
            {/* Header */}
            <div className="text-center mb-16 md:mb-20 lg:mb-28">
              <div className="inline-flex items-center gap-4 px-8 py-4 bg-primary/10 border border-primary/20 rounded-full mb-8 lg:mb-10">
                <GraduationCap className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary" />
                <span className="text-primary font-bebas uppercase tracking-widest text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
                  {totalCount} College Commitments
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bebas font-black uppercase leading-[0.9] mb-6 lg:mb-8">
                Where LPA Athletes<br />
                <span className="text-primary glow-primary">Go Next</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground font-oswald max-w-4xl xl:max-w-5xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* Commitments Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-10 mb-16 lg:mb-24">
              {commitments.map((commitment, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-b from-card to-background border border-border/50 rounded-xl lg:rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={commitment.image} 
                      alt={`${commitment.name} - ${commitment.school}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>
                  <div className="p-4 md:p-6 lg:p-8">
                    <p className="text-base md:text-xl lg:text-2xl xl:text-3xl font-bebas uppercase text-primary mb-1 lg:mb-2">
                      {commitment.name}
                    </p>
                    <p className="text-xs md:text-base lg:text-lg xl:text-xl text-muted-foreground font-oswald">
                      {commitment.school}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-foreground font-oswald mb-4 leading-relaxed">
                Every committed athlete started with the same free evaluation.
              </p>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground font-oswald mb-10 lg:mb-14 leading-relaxed max-w-4xl mx-auto">
                Get a clear development roadmap and the confidence to reach the next level.
              </p>
              <button
                onClick={onCtaClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 md:px-16 lg:px-20 py-6 md:py-8 lg:py-10 rounded-xl lg:rounded-2xl font-bebas text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase tracking-widest transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-primary/30 border-glow-intense"
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
