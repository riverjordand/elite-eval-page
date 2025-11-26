import { GraduationCap } from "lucide-react";

interface Commitment {
  name: string;
  position: string;
  school: string;
  year: string;
}

interface LandingCommitmentsProps {
  title: string;
  subtitle: string;
  commitments: Commitment[];
  totalCount: string;
}

const LandingCommitments = ({ title, subtitle, commitments, totalCount }: LandingCommitmentsProps) => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
              <span className="text-primary font-bebas uppercase tracking-wider text-lg font-bold">
                {totalCount} College Commitments & Counting
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bebas font-black uppercase mb-4">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground font-oswald max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Commitments Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {commitments.map((commitment, index) => (
              <div 
                key={index}
                className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bebas text-lg uppercase text-foreground mb-1">
                      {commitment.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-oswald mb-2">
                      {commitment.position} • Class of {commitment.year}
                    </p>
                    <p className="text-primary font-oswald font-semibold text-sm">
                      {commitment.school}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Context */}
          <div className="text-center">
            <div className="bg-card border-2 border-primary/30 rounded-xl p-8 max-w-3xl mx-auto">
              <p className="text-lg text-foreground font-oswald leading-relaxed mb-4">
                These athletes all started with the same <span className="text-primary font-bold">Free Evaluation</span> you're about to book.
              </p>
              <p className="text-muted-foreground font-oswald">
                Your athlete could be next on this list.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingCommitments;
