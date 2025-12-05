import { useState } from "react";
import Navigation from "@/components/Navigation";
import LandingHeroNew from "@/components/landing/LandingHeroNew";
import LandingStatsBar from "@/components/landing/LandingStatsBar";
import LandingAbout from "@/components/landing/LandingAbout";
import LandingFacilityGrid from "@/components/landing/LandingFacilityGrid";
import LandingMediaStrip from "@/components/landing/LandingMediaStrip";
import LandingCoachesCompact from "@/components/landing/LandingCoachesCompact";
import LandingTestimonialsCompact from "@/components/landing/LandingTestimonialsCompact";
import LandingResults from "@/components/landing/LandingResults";
import LandingEvaluation from "@/components/landing/LandingEvaluation";
import LandingFAQCompact from "@/components/landing/LandingFAQCompact";
import LandingFooterCompact from "@/components/landing/LandingFooterCompact";
import EvaluationForm from "@/components/landing/EvaluationForm";

const Index = () => {
  const [showEvaluationForm, setShowEvaluationForm] = useState(false);

  const openEvaluationForm = () => setShowEvaluationForm(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onBookNowClick={openEvaluationForm} />
      
      {/* Hero */}
      <LandingHeroNew onCtaClick={openEvaluationForm} />
      
      {/* Stats bar */}
      <LandingStatsBar />
      
      {/* Why LPA */}
      <LandingAbout />
      
      {/* Facility */}
      <LandingFacilityGrid />
      
      {/* Media - videos & photos */}
      <LandingMediaStrip />
      
      {/* Coaches */}
      <LandingCoachesCompact />
      
      {/* Testimonials */}
      <LandingTestimonialsCompact />
      
      {/* Results / Commitments */}
      <LandingResults onCtaClick={openEvaluationForm} />
      
      {/* Main CTA - Evaluation */}
      <LandingEvaluation onCtaClick={openEvaluationForm} />
      
      {/* FAQ */}
      <LandingFAQCompact />
      
      {/* Footer */}
      <LandingFooterCompact />

      {/* Form modal */}
      <EvaluationForm
        open={showEvaluationForm}
        onOpenChange={setShowEvaluationForm}
      />
    </div>
  );
};

export default Index;
