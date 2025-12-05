import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/landing/HeroSection";
import StatsSection from "@/components/landing/StatsSection";
import IntroSection from "@/components/landing/IntroSection";
import AboutSection from "@/components/landing/AboutSection";
import FacilitySection from "@/components/landing/FacilitySection";
import MediaSection from "@/components/landing/MediaSection";
import CoachesSection from "@/components/landing/CoachesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ResultsSection from "@/components/landing/ResultsSection";
import CTASection from "@/components/landing/CTASection";
import FAQSection from "@/components/landing/FAQSection";
import FooterSection from "@/components/landing/FooterSection";
import EvaluationForm from "@/components/landing/EvaluationForm";

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => setShowForm(true);

  return (
    <main className="min-h-screen bg-background">
      <Navigation onBookNowClick={openForm} />
      <HeroSection onCtaClick={openForm} />
      <StatsSection />
      <IntroSection />
      <AboutSection />
      <FacilitySection />
      <MediaSection />
      <CoachesSection />
      <TestimonialsSection />
      <ResultsSection onCtaClick={openForm} />
      <CTASection onCtaClick={openForm} />
      <FAQSection />
      <FooterSection />
      
      <EvaluationForm 
        open={showForm} 
        onOpenChange={setShowForm} 
      />
    </main>
  );
};

export default Index;
