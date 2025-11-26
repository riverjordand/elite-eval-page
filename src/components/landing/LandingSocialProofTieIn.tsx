import SectionDivider from "./SectionDivider";

interface LandingSocialProofTieInProps {
  text: string;
}

const LandingSocialProofTieIn = ({ text }: LandingSocialProofTieInProps) => {
  return (
    <>
      <SectionDivider fromColor="#1a1a1a" toColor="#0a0a0a" />
      <section className="py-12 md:py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border-2 border-border rounded-xl p-6 md:p-10">
              <p className="text-base md:text-xl text-foreground font-oswald leading-relaxed text-center">
                {text}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingSocialProofTieIn;
