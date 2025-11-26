import LandingHero from "@/components/landing/LandingHero";
import LandingIncluded from "@/components/landing/LandingIncluded";
import LandingAuthority from "@/components/landing/LandingAuthority";
import LandingSocialProof from "@/components/landing/LandingSocialProof";
import LandingProcess from "@/components/landing/LandingProcess";
import LandingFAQ from "@/components/landing/LandingFAQ";
import LandingFinalCTA from "@/components/landing/LandingFinalCTA";
import LandingFooter from "@/components/landing/LandingFooter";

const FreeEvaluation = () => {
  return (
    <div className="min-h-screen bg-background">
      <LandingHero
        headline="Is Your Athlete College-Ready? Find Out in 90 Minutes"
        subheadline="Get a complete breakdown of where your athlete stands today and exactly what it takes to play at the next level—completely free."
        ctaPrimary="Claim My Free Evaluation"
        spotsLeft={10}
      />

      <LandingIncluded
        title="What's Included in Your Free Evaluation"
        subtitle="Everything you need to know about your athlete's current level and development path"
        items={[
          {
            title: "Advanced Metrics Testing",
            description: "Pitching velocity, exit velocity, or hitting metrics using professional-grade technology (Rapsodo, HitTrax)"
          },
          {
            title: "Complete Mechanics Analysis",
            description: "Video breakdown of throwing or hitting mechanics with frame-by-frame analysis from D1/Pro coaches"
          },
          {
            title: "Strength & Mobility Assessment",
            description: "Physical evaluation by certified strength coaches to identify strengths, weaknesses, and injury prevention needs"
          },
          {
            title: "Coach-Led Development Plan",
            description: "One-on-one consultation with our coaching staff about what your athlete needs to improve"
          },
          {
            title: "Personalized 6-12 Month Roadmap",
            description: "Written development plan with specific training recommendations tailored to your athlete's goals"
          },
          {
            title: "Full Facility Tour & Q&A",
            description: "Walk through our 16,000 sq ft facility and ask questions about our programs, training methods, and success stories"
          }
        ]}
        ctaText="Book My Free Evaluation Now"
        valueStatement="Normally $350 Value - Yours Free"
      />

      <LandingAuthority
        title="Why Parents Trust LPA With Their Athlete's Future"
        description="Arizona's premier baseball development academy with a proven track record of getting athletes to the next level"
        stats={[
          { icon: "trophy", number: "50+", label: "College Commitments" },
          { icon: "users", number: "200+", label: "Athletes Developed" },
          { icon: "trending", number: "15+ MPH", label: "Average Velo Gains" }
        ]}
        credentials={[
          "Former D1 & Professional Players on Staff",
          "Certified Strength & Conditioning Specialists",
          "Rapsodo & HitTrax Certified Coaches",
          "MLB Scout Advisory Board",
          "Sports Medicine & PT Partnership",
          "College Recruiting Network Access"
        ]}
      />

      <LandingSocialProof
        title="What Parents & Athletes Are Saying"
        testimonials={[
          {
            quote: "The evaluation showed us exactly where my son needed to improve. Within 6 months at LPA, he gained 8 mph and committed to U of A.",
            author: "Mike Rodriguez",
            role: "Parent of D1 Commit",
            result: "Committed to University of Arizona"
          },
          {
            quote: "We tried 3 other facilities before finding LPA. The difference is night and day - these coaches actually know what they're doing.",
            author: "Jennifer Martinez",
            role: "Parent of Junior Pitcher",
            result: "12 MPH Velocity Increase"
          },
          {
            quote: "The free evaluation opened our eyes. We had no idea what college coaches were looking for. LPA gave us a clear path forward.",
            author: "David Thompson",
            role: "Parent of Sophomore",
            result: "Multiple D2 Offers"
          }
        ]}
      />

      <LandingProcess
        title="How It Works"
        subtitle="Simple 4-step process to get your athlete evaluated"
        steps={[
          {
            number: "1",
            title: "Book Your Spot",
            description: "Fill out the simple form and choose a time that works for your schedule"
          },
          {
            number: "2",
            title: "Come Prepared",
            description: "Bring your athlete ready to throw/hit and any previous training history or injury information"
          },
          {
            number: "3",
            title: "Complete Evaluation",
            description: "90-minute session with metrics testing, video analysis, and strength assessment"
          },
          {
            number: "4",
            title: "Get Your Roadmap",
            description: "Walk away with a written development plan and clear next steps toward your athlete's goals"
          }
        ]}
        ctaText="Claim Your Evaluation Now"
      />

      <LandingFAQ
        title="Common Questions"
        faqs={[
          {
            question: "What age athletes is this for?",
            answer: "Our free evaluations are designed for high school athletes (ages 13-18) who are serious about playing at the college level. We occasionally evaluate younger athletes who show exceptional potential."
          },
          {
            question: "Is there really no cost or obligation?",
            answer: "Absolutely zero cost. This is a genuine free evaluation with no strings attached. You'll receive the full written development plan regardless of whether you choose to train with us or not."
          },
          {
            question: "How long does the evaluation take?",
            answer: "Plan for 90 minutes total. This includes metrics testing, video analysis, strength assessment, facility tour, and the development plan consultation."
          },
          {
            question: "What should my athlete bring?",
            answer: "Athletic wear, cleats or turf shoes, glove, bat (if applicable), and any previous medical/training history. We provide all testing equipment."
          },
          {
            question: "Why are spots limited to 10 per week?",
            answer: "We limit evaluations to ensure each athlete gets dedicated one-on-one time with our coaching staff. Quality over quantity is our standard."
          },
          {
            question: "What happens after the evaluation?",
            answer: "You'll receive a detailed written plan with specific recommendations. There's no pressure to join LPA, but we'll explain our programs if you're interested in continuing development with us."
          }
        ]}
      />

      <LandingFinalCTA
        title="Only 10 Spots Available This Week"
        urgency="Filling Fast"
        ctaText="Book My Free Evaluation"
        spotsLeft={10}
      />

      <LandingFooter />
    </div>
  );
};

export default FreeEvaluation;
