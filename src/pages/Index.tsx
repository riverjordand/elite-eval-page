import { useState } from "react";
import Navigation from "@/components/Navigation";
import LandingHeroNew from "@/components/landing/LandingHeroNew";
import LandingStatsBar from "@/components/landing/LandingStatsBar";
import LandingAbout from "@/components/landing/LandingAbout";
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
      
      <LandingHeroNew onCtaClick={openEvaluationForm} />
      <LandingStatsBar />
      <LandingAbout />
      <LandingMediaStrip />
      <LandingCoachesCompact />
      <LandingTestimonialsCompact />
      <LandingResults />
      <LandingEvaluation onCtaClick={openEvaluationForm} />
      <LandingFAQCompact />
      <LandingFooterCompact />

      <EvaluationForm
        open={showEvaluationForm}
        onOpenChange={setShowEvaluationForm}
      />
    </div>
  );
};

export default Index;
