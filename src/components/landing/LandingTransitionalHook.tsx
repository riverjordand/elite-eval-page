import SectionDivider from "./SectionDivider";

interface LandingTransitionalHookProps {
  headline: string;
  subheadline: string;
}

const LandingTransitionalHook = ({ headline, subheadline }: LandingTransitionalHookProps) => {
  return (
    <>
      <SectionDivider fromColor="#1a1a1a" toColor="#0a0a0a" />
      <section className="py-12 md:py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bebas font-black uppercase mb-6 md:mb-8 leading-tight">
              {headline}
            </h2>
            <p className="text-base md:text-xl text-muted-foreground font-oswald leading-relaxed">
              {subheadline}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingTransitionalHook;
