import Navigation from "@/components/Navigation";
import CampBanner from "@/components/CampBanner";
import HeroSection from "@/components/landing/HeroSection";
import CommitmentsGrid from "@/components/landing/CommitmentsGrid";
import StatsSection from "@/components/landing/StatsSection";
import IntroSection from "@/components/landing/IntroSection";
import AboutSection from "@/components/landing/AboutSection";
import FacilitySection from "@/components/landing/FacilitySection";
import ExperienceSection from "@/components/landing/ExperienceSection";
import MediaSection from "@/components/landing/MediaSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";

import FAQSection from "@/components/landing/FAQSection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <CampBanner />
      <HeroSection />
      <StatsSection />
      <IntroSection />
      <CommitmentsGrid />
      <AboutSection />
      <FacilitySection />
      <ExperienceSection />
      <MediaSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
};

export default Index;
