import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
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
      <section className="section-dark py-fluid-section">
        <div className="px-fluid-container-px">
          <div className="max-w-[1800px] mx-auto">
            {/* Header */}
            <div className="text-center mb-fluid-xl">
              <div className="inline-flex items-center gap-4 px-fluid-md py-fluid-xs bg-primary/10 border border-primary/20 rounded-full mb-fluid-md">
                <GraduationCap className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary" />
                <span className="text-primary font-bebas uppercase tracking-widest text-fluid-xl font-bold">
                  {totalCount} College Commitments
                </span>
              </div>
              
              <h2 className="text-fluid-hero font-bebas font-black uppercase leading-[0.9] mb-fluid-md">
                Where LPA Athletes<br />
                <span className="text-primary glow-primary">Go Next</span>
              </h2>
              <p className="text-fluid-xl text-muted-foreground font-oswald max-w-4xl xl:max-w-5xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* Commitments Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-fluid-gap-lg mb-fluid-xl">
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
                  <div className="p-fluid-sm">
                    <p className="text-fluid-xl font-bebas uppercase text-primary mb-1">
                      {commitment.name}
                    </p>
                    <p className="text-fluid-sm text-muted-foreground font-oswald">
                      {commitment.school}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <p className="text-fluid-2xl text-foreground font-oswald mb-fluid-xs leading-relaxed">
                Every committed athlete started with the same free evaluation.
              </p>
              <p className="text-fluid-lg text-muted-foreground font-oswald mb-fluid-lg leading-relaxed max-w-4xl mx-auto">
                Get a clear development roadmap and the confidence to reach the next level.
              </p>
              <Link to="/appointments">
                <button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-fluid-xl py-fluid-md rounded-xl lg:rounded-2xl font-bebas text-fluid-2xl uppercase tracking-widest transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-primary/30 border-glow-intense"
                >
                  → Book Your Free Evaluation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingCommitments;
