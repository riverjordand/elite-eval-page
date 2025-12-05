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
      <SectionDivider fromColor="#000000" toColor="#0a0a0a" />
      <StatsSection />
      <SectionDivider fromColor="#0a0a0a" toColor="#050505" />
      <IntroSection />
      <SectionDivider fromColor="#050505" toColor="#0a0a0a" />
      <AboutSection />
      <SectionDivider fromColor="#0a0a0a" toColor="#030303" />
      <FacilitySection />
      <SectionDivider fromColor="#030303" toColor="#0a0a0a" />
      <MediaSection />
      <SectionDivider fromColor="#0a0a0a" toColor="#050505" />
      <CoachesSection />
      <SectionDivider fromColor="#050505" toColor="#0a0a0a" />
      <TestimonialsSection />
      <SectionDivider fromColor="#0a0a0a" toColor="#030303" />
      <ResultsSection onCtaClick={openForm} />
      <SectionDivider fromColor="#030303" toColor="#0a0a0a" />
      <CTASection onCtaClick={openForm} />
      <SectionDivider fromColor="#0a0a0a" toColor="#050505" />
      <FAQSection />
      <SectionDivider fromColor="#050505" toColor="#000000" />
      <FooterSection />
      
      <EvaluationForm 
        open={showForm} 
        onOpenChange={setShowForm} 
      />
    </main>
  );
};

export default Index;
