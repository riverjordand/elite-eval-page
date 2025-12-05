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
import SectionDivider from "@/components/landing/SectionDivider";

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => setShowForm(true);

  return (
    <main className="min-h-screen bg-background">
      <Navigation onBookNowClick={openForm} />
      <HeroSection onCtaClick={openForm} />
      <StatsSection />
      <SectionDivider fromColor="#7c3aed" toColor="#1a1a1a" />
      <IntroSection />
      <SectionDivider fromColor="#1a1a1a" toColor="#0a0a0a" />
      <AboutSection />
      <SectionDivider fromColor="#0a0a0a" toColor="#1a1a1a" />
      <FacilitySection />
      <SectionDivider fromColor="#1a1a1a" toColor="#0a0a0a" />
      <MediaSection />
      <SectionDivider fromColor="#0a0a0a" toColor="#1a1a1a" />
      <CoachesSection />
      <SectionDivider fromColor="#1a1a1a" toColor="#0a0a0a" />
      <TestimonialsSection />
      <SectionDivider fromColor="#0a0a0a" toColor="#1a1a1a" />
      <ResultsSection onCtaClick={openForm} />
      <SectionDivider fromColor="#1a1a1a" toColor="#0a0a0a" />
      <CTASection onCtaClick={openForm} />
      <SectionDivider fromColor="#0a0a0a" toColor="#1a1a1a" />
      <FAQSection />
      <SectionDivider fromColor="#1a1a1a" toColor="#000000" />
      <FooterSection />
      
      <EvaluationForm 
        open={showForm} 
        onOpenChange={setShowForm} 
      />
    </main>
  );
};

export default Index;
