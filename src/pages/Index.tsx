import Navigation from "@/components/Navigation";
import HeroSection from "@/components/landing/HeroSection";
import StatsSection from "@/components/landing/StatsSection";
import IntroSection from "@/components/landing/IntroSection";
import AboutSection from "@/components/landing/AboutSection";
import FacilitySection from "@/components/landing/FacilitySection";
import MediaSection from "@/components/landing/MediaSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ResultsSection from "@/components/landing/ResultsSection";
import FAQSection from "@/components/landing/FAQSection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <IntroSection />
      <AboutSection />
      <FacilitySection />
      <MediaSection />
      <TestimonialsSection />
      <ResultsSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
};

export default Index;
