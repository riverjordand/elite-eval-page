import Navigation from "@/components/Navigation";
import LandingHero from "@/components/landing/LandingHero";
import LandingIntro from "@/components/landing/LandingIntro";
import LandingIncluded from "@/components/landing/LandingIncluded";
import LandingFacilityShowcase from "@/components/landing/LandingFacilityShowcase";
import LandingProcess from "@/components/landing/LandingProcess";
import LandingCoaches from "@/components/landing/LandingCoaches";
import LandingSocialProof from "@/components/landing/LandingSocialProof";
import LandingCommitments from "@/components/landing/LandingCommitments";
import LandingAthletes from "@/components/landing/LandingAthletes";
import LandingFAQ from "@/components/landing/LandingFAQ";
import LandingFinalCTA from "@/components/landing/LandingFinalCTA";
import LandingFooter from "@/components/landing/LandingFooter";

// Coach images
import coachNeil from "@/assets/coach-neil.webp";
import coachMarcus from "@/assets/coach-marcus.webp";
import coachJoe from "@/assets/coach-joe.webp";
import coachEric from "@/assets/coach-eric.webp";
import coachTerrell from "@/assets/coach-terrell.webp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* HERO */}
      <LandingHero
        headline="Is Your Athlete College-Ready? Find Out in 90 Minutes"
        subheadline="Get a complete breakdown of where your athlete stands today and exactly what it takes to play at the next level—completely free."
        ctaPrimary="Claim My Free Evaluation"
        spotsLeft={10}
      />

      {/* INTRO - About LPA */}
      <LandingIntro
        subtitle="Arizona's Premier Baseball Academy"
        title="Welcome To Legendary Prep Academy"
        description={[
          "For over a decade, LPA has been the destination for Arizona's most serious high school baseball players. We've helped hundreds of athletes gain velocity, refine mechanics, build strength, and ultimately earn opportunities to play at the next level.",
          "Our approach combines elite-level coaching from former D1 and professional players, cutting-edge technology like Rapsodo and HitTrax, and a proven development system that's produced 50+ college commitments and counting."
        ]}
        highlight="We don't just train athletes. We build college-ready players with the skills, metrics, and recruiting support needed to compete at the next level."
      />

      {/* OFFER SECTION #1 - What's Included */}
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

      {/* LPA SECTION #1 - The Facility */}
      <LandingFacilityShowcase
        title="Where Elite Athletes Train"
        subtitle="16,000 square feet of professional-grade training space designed for maximum development"
        areas={[
          {
            title: "Training Area",
            description: "State-of-the-art hitting and pitching areas with the latest technology for real-time data analysis.",
            specs: [
              "Rapsodo Pitching & Hitting Units",
              "HitTrax Motion Capture System",
              "Edgertronic High-Speed Cameras",
              "Professional Turf Surfaces"
            ]
          },
          {
            title: "Strength & Conditioning",
            description: "Fully equipped performance center focused on baseball-specific strength, power, and injury prevention.",
            specs: [
              "Olympic Lifting Platforms",
              "Plyometric Training Equipment",
              "Speed & Agility Stations",
              "Recovery & Mobility Zone"
            ]
          },
          {
            title: "Video Analysis Room",
            description: "Dedicated space for detailed video breakdown and athlete education using professional software.",
            specs: [
              "Multi-Angle Video Capture",
              "Frame-by-Frame Analysis Tools",
              "Side-by-Side Comparison Tech",
              "Individual Video Libraries"
            ]
          },
          {
            title: "Sports Medicine",
            description: "On-site partnership with certified physical therapists and athletic trainers for injury prevention and recovery.",
            specs: [
              "Pre-Season Screenings",
              "Injury Prevention Programs",
              "Rehabilitation Protocols",
              "Performance Recovery Plans"
            ]
          }
        ]}
      />

      {/* OFFER SECTION #2 - How It Works */}
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

      {/* LPA SECTION #2 - The Coaches */}
      <LandingCoaches
        title="Meet The Coaching Staff"
        subtitle="Learn from coaches who've played and coached at the highest levels"
        coaches={[
          {
            name: "Marcus Rodriguez",
            title: "Head Coach",
            credentials: [
              "Former D1 Player - University of Oregon",
              "Certified Bad Ass Hitting Instructor",
              "10+ years of professional baseball experience",
              "Specialized in advanced swing mechanics"
            ],
            image: coachMarcus
          },
          {
            name: "Joe Mejia",
            title: "Hitting Coach & Outfield Coordinator",
            credentials: [
              "Former Division I baseball player at the University of Nevada-Reno",
              "Drafted and played for the Westside Wooly Mammoths",
              "10 years of professional baseball experience",
              "Certified instructor in hitting development"
            ],
            image: coachJoe
          },
          {
            name: "Eric Lowe",
            title: "Pitching Coordinator",
            credentials: [
              "Former Division I baseball player at the University of Nevada-Reno",
              "Drafted Bad Ass by the Arizona Diamondbacks",
              "9 years of professional baseball experience",
              "Focus on mechanics and mental game development"
            ],
            image: coachEric
          },
          {
            name: "Terrell Barlow",
            title: "Assistant Coach",
            credentials: [
              "Former Division I baseball player at the University of New Mexico",
              "Extensive experience in coaching and developing youth baseball",
              "Specializes in hitting and defensive development",
              "Over 10 years in baseball instruction"
            ],
            image: coachTerrell
          },
          {
            name: "Neil Khaian",
            title: "CEO & Co-Founder",
            credentials: [
              "Founder and leader of Legendary Prep Academy",
              "Oversees all academy operations, growth, and training excellence",
              "Over 10 years of experience running training facilities and elite athlete development",
              "Expert in athlete mindset, long-term consulting, business strategy, and training program design"
            ],
            image: coachNeil
          }
        ]}
      />

      {/* OFFER SECTION #3 - Social Proof */}
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

      {/* LPA SECTION #3 - Player Commitments */}
      <LandingCommitments
        title="Where Our Athletes Go"
        subtitle="Recent commitments from LPA-trained athletes"
        totalCount="50+"
        commitments={[
          { name: "Jake Morrison", position: "RHP", school: "University of Arizona", year: "2025" },
          { name: "Tyler Chen", position: "SS", school: "Arizona State University", year: "2025" },
          { name: "Marcus Johnson", position: "OF", school: "Grand Canyon University", year: "2024" },
          { name: "Ryan Foster", position: "C", school: "UC San Diego", year: "2024" },
          { name: "Alex Rivera", position: "LHP", school: "University of New Mexico", year: "2025" },
          { name: "Brandon Lee", position: "3B", school: "Cal State Fullerton", year: "2024" },
          { name: "Daniel Santos", position: "RHP", school: "Gonzaga University", year: "2025" },
          { name: "Connor Walsh", position: "OF", school: "Santa Clara University", year: "2024" },
          { name: "Isaiah Brown", position: "1B", school: "University of San Diego", year: "2025" }
        ]}
      />

      {/* ATHLETES IN ACTION - Photo Gallery */}
      <LandingAthletes
        title="See LPA Athletes in Action"
        subtitle="Real athletes, real training, real results"
        photos={[
          { category: "Pitching Training", caption: "Working on mechanics with velocity tech" },
          { category: "Hitting Sessions", caption: "Dialing in swing path with HitTrax" },
          { category: "Strength Training", caption: "Building explosive power in the weight room" },
          { category: "Video Analysis", caption: "Breaking down mechanics frame by frame" },
          { category: "Team Workouts", caption: "Competitive training environment" },
          { category: "Individual Focus", caption: "One-on-one coaching attention" },
          { category: "Recovery Work", caption: "Mobility and injury prevention" },
          { category: "Celebration", caption: "Commitment day at LPA" }
        ]}
      />

      {/* OFFER SECTION #4 - FAQ */}
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

      {/* FINAL CTA */}
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

export default Index;
