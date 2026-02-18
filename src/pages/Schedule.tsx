import Navigation from "@/components/Navigation";
import FooterSection from "@/components/landing/FooterSection";

const Schedule = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-20 md:pt-24 overflow-hidden">
        <div className="relative h-36 md:h-64 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-card via-background/80 to-background" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[160px]" />
          <h1 className="relative font-bebas text-fluid-5xl uppercase text-center leading-none">
            Game <span className="text-primary">Schedule</span>
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-fluid-container-px pb-fluid-xl">
        <iframe
          src="https://LPA-Calendar.replit.app/embed"
          width="100%"
          height="800"
          style={{ border: "none" }}
          title="LPA Team Calendar"
        />
      </div>

      <FooterSection />
    </div>
  );
};

export default Schedule;
