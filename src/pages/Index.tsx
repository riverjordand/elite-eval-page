import Navigation from "@/components/Navigation";
import LandingHero from "@/components/landing/LandingHero";
import LandingIntro from "@/components/landing/LandingIntro";
import LandingIncluded from "@/components/landing/LandingIncluded";
import LandingFacilityShowcase from "@/components/landing/LandingFacilityShowcase";
import LandingVideos from "@/components/landing/LandingVideos";
import LandingPhotos from "@/components/landing/LandingPhotos";
import LandingProcess from "@/components/landing/LandingProcess";
import LandingCoaches from "@/components/landing/LandingCoaches";
import LandingTestimonials from "@/components/landing/LandingTestimonials";
import LandingCommitments from "@/components/landing/LandingCommitments";

import LandingFAQ from "@/components/landing/LandingFAQ";
import LandingFinalCTA from "@/components/landing/LandingFinalCTA";
import LandingFooter from "@/components/landing/LandingFooter";

// Coach images
import coachNeil from "@/assets/coach-neil.webp";
import coachMarcus from "@/assets/coach-marcus.webp";
import coachJoe from "@/assets/coach-joe.webp";
import coachEric from "@/assets/coach-eric.webp";
import coachTerrell from "@/assets/coach-terrell.webp";

// Facility images
import facilityTraining from "@/assets/facility-training-area.jpg";
import facilityStrength from "@/assets/facility-strength-conditioning.jpg";
import facilityVideo from "@/assets/facility-video-analysis.jpg";
import facilitySports from "@/assets/facility-sports-medicine.jpg";

// Athlete commitment images
import prestonGlendale from "@/assets/athletes/preston-francis-glendale.jpg";
import brayanSouthwestern from "@/assets/athletes/brayan-moreno-southwestern.jpg";
import prestonSigned from "@/assets/athletes/preston-francis-signed.jpg";
import milesCoastal from "@/assets/athletes/miles-keogh-coastal.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* HERO */}
      <LandingHero
        mainHeadline="Arizona's Premier Baseball Development Academy"
        subHeadline="Start with a Free College-Ready Player Evaluation"
        ctaPrimary="Claim My Free Evaluation"
        spotsLeft={10}
      />

      {/* INTRO - About LPA */}
      <LandingIntro
        subtitle="Arizona's Premier Baseball Academy"
        title="Welcome To Legendary Prep Academy"
        description={[
          "For over a decade, LPA has been Arizona's destination for serious high school baseball players. We've helped hundreds of athletes gain velocity, refine mechanics, and earn opportunities to play at the next level.",
        ]}
        highlight="We build college-ready players with the skills, metrics, and recruiting support needed to compete at the next level."
      />

      {/* LPA SECTION #1 - The Facility */}
      <LandingFacilityShowcase
        title="Where Elite Athletes Train"
        subtitle="16,000 square feet of professional-grade training space designed for maximum development"
        areas={[
          {
            title: "Training Area",
            description: "State-of-the-art hitting and pitching areas with the latest technology for real-time data analysis.",
            image: facilityTraining,
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
            image: facilityStrength,
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
            image: facilityVideo,
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
            image: facilitySports,
            specs: [
              "Pre-Season Screenings",
              "Injury Prevention Programs",
              "Rehabilitation Protocols",
              "Performance Recovery Plans"
            ]
          }
        ]}
      />

      {/* TRAINING VIDEOS SECTION */}
      <LandingVideos
        title="Training In Motion"
        subtitle="See our elite development program in action"
        videos={[
          { src: "/training-video-01.mp4", alt: "LPA training session in action" },
          { src: "/training-video-02.mp4", alt: "LPA athlete development training" },
          { src: "/training-video-03.mp4", alt: "LPA facility training footage" },
          { src: "/training-video-04.mp4", alt: "LPA athlete hitting practice" },
          { src: "/training-video-05.mp4", alt: "LPA pitching mechanics work" },
          { src: "/training-video-06.mp4", alt: "LPA strength and conditioning" },
          { src: "/training-video-07.mp4", alt: "LPA athlete development session" },
          { src: "/training-video-08.mp4", alt: "LPA team training environment" },
          { src: "/training-video-09.mp4", alt: "LPA advanced training techniques" }
        ]}
      />

      {/* ACTION PHOTOS SECTION */}
      <LandingPhotos
        title="Athletes In Action"
        subtitle="Elite training captured at every moment"
        photos={[
          { src: "/action-01.jpg", alt: "LPA athlete strength training with equipment" },
          { src: "/action-02.jpg", alt: "LPA athlete bat training session" },
          { src: "/action-03.jpg", alt: "LPA athlete batting practice action" },
          { src: "/action-04.jpg", alt: "LPA athlete core training with weight plate" },
          { src: "/action-05.jpg", alt: "LPA athlete focused in dugout" },
          { src: "/action-06.jpg", alt: "LPA athlete batting at field during golden hour" },
          { src: "/action-07.jpg", alt: "LPA athlete pitching on mound" },
          { src: "/action-08.jpg", alt: "LPA athletes team photo on field" },
          { src: "/action-09.jpg", alt: "LPA athlete fielding and throwing" },
          { src: "/action-10.jpg", alt: "LPA athlete defensive stance in outfield" }
        ]}
      />

      {/* LPA SECTION #2 - The Coaches */}
      <LandingCoaches
        title="Meet The Coaching Staff"
        subtitle="Learn from coaches who've played and coached at the highest levels"
        coaches={[
          {
            name: "Mark Karaviotis",
            title: "Head Coach",
            credentials: [
              "Former Division 1 baseball player at Oregon",
              "Drafted 19th round by the Arizona Diamondbacks",
              "2016 Hillsboro Hops batting champion",
              "3x MiLB All Star"
            ],
            image: coachMarcus
          },
          {
            name: "Joe Dunigan",
            title: "Hitting Coordinator & Astros Scout",
            credentials: [
              "Former Division 1 baseball player at Oklahoma",
              "Drafted 41st round by the Montreal Expos",
              "Drafted 5th round by the Seattle Mariners",
              "Current Area Scout for the Houston Astros"
            ],
            image: coachJoe
          },
          {
            name: "Eric Smith",
            title: "Coordinator",
            credentials: [
              "Former Division 1 baseball player at the University of Rhode Island",
              "Drafted 2nd round by Arizona Diamondbacks",
              "6 years of professional baseball experience"
            ],
            image: coachEric
          },
          {
            name: "Terrell Hudson",
            title: "Assistant Coach",
            credentials: [
              "Former Division 1 baseball player at the University of New Mexico",
              "Extensive experience in training and managing ELITE youth baseball"
            ],
            image: coachTerrell
          },
          {
            name: "Will Armijo",
            title: "CEO & Co-Founder",
            credentials: [
              "Former NCAA baseball player with an MBA",
              "Founder of six companies spanning across four industries",
              "Over 13 years of experience mentoring athletes and professionals",
              "Board member for CARE, Arizona nonprofit combating human trafficking"
            ],
            image: coachNeil
          }
        ]}
      />

      {/* PARENT TESTIMONIALS - Video Carousel */}
      <LandingTestimonials
        title="Hear From LPA Families & Athletes"
        subtitle="Real families and athletes sharing their experience with our program"
        testimonials={[
          {
            videoUrl: "/testimonials/parent-testimonial-1.mp4",
            parentName: "Austin Smith",
            athleteName: "3B/C/RHP • Crowdettys",
            quote: "Leaving IMG Academy to come to LPA was crucial for my development. The mechanics work with Terrell has increased my velocity and taken strain off my arm."
          },
          {
            videoUrl: "/testimonials/parent-testimonial-2.mp4",
            parentName: "Adam Hayes",
            athleteName: "2025 Graduate",
            quote: "I came to LPA for my senior spring to improve my MLB draft chances. Working with the pitching coaches every day made my breaking ball a weapon."
          },
          {
            videoUrl: "/testimonials/parent-testimonial-3.mp4",
            parentName: "LPA Parents",
            athleteName: "Multiple Families",
            quote: "We've seen incredible gains in baseball, strength, and development. Everything here is state of the art, and seeing those gains every day is amazing."
          },
          {
            videoUrl: "/testimonials/parent-testimonial-4.mp4",
            parentName: "Cash Kelly",
            athleteName: "Class of 2030 • SS/C",
            quote: "I made so many new friends so quickly - we're like brothers here. I got way stronger and my swing mechanics improved so much. I used to roll over a lot, but now I'm staying through the ball."
          }
        ]}
      />

      {/* LPA SECTION #3 - Player Commitments */}
      <LandingCommitments
        title="Where Our Athletes Go"
        subtitle="LPA athletes signing with top college programs"
        totalCount="50+"
        commitments={[
          { name: "Preston Francis", school: "Glendale Community College", image: prestonGlendale },
          { name: "Brayan Paredes Moreno", school: "Southwestern Community College", image: brayanSouthwestern },
          { name: "Preston Francis", school: "Glendale Community College", image: prestonSigned },
          { name: "Miles Keogh", school: "Coastal Carolina", image: milesCoastal }
        ]}
      />

      {/* OFFER SECTION #1 - What's Included */}
      <LandingIncluded
        title="What's Included in Your Free Evaluation"
        subtitle="Everything you need to know about your athlete's current level and development path"
        items={[
          {
            title: "Advanced Metrics Testing",
            value: 75,
            bullets: [
              "Pitching or hitting velocity testing",
              "Professional-grade tech (Rapsodo, HitTrax)",
              "Real-time performance data"
            ]
          },
          {
            title: "Complete Mechanics Analysis",
            value: 100,
            bullets: [
              "Frame-by-frame video breakdown",
              "Analyzed by D1/Pro coaches",
              "Identify technical flaws"
            ]
          },
          {
            title: "Strength & Mobility Assessment",
            value: 50,
            bullets: [
              "Certified strength coach evaluation",
              "Identify physical weaknesses",
              "Injury prevention insights"
            ]
          },
          {
            title: "Coach-Led Development Plan",
            value: 75,
            bullets: [
              "One-on-one coaching consultation",
              "Personalized improvement roadmap",
              "Specific training recommendations"
            ]
          },
          {
            title: "Personalized 6-12 Month Roadmap",
            value: 50,
            bullets: [
              "Written development plan",
              "Tailored to athlete's goals",
              "Clear next steps to improve"
            ]
          },
          {
            title: "Full Facility Tour & Q&A",
            value: 0,
            bullets: [
              "Walk through 16,000 sq ft facility",
              "Ask questions about programs",
              "Meet coaches and see success stories"
            ]
          }
        ]}
        ctaText="Book My Free Evaluation Now"
        valueStatement="Normally $350 Value - Yours Free"
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

      {/* FAQ */}
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
            question: "What makes LPA different from other academies?",
            answer: "LPA combines college-level coaching with professional-grade technology in a structured, focused environment. Our coaches have D1 and pro experience, and we've helped 50+ athletes earn college commitments through proven development systems."
          },
          {
            question: "What programs does LPA offer?",
            answer: "We offer year-round training programs including position-specific development, pitching instruction, strength and conditioning, hitting labs, and college recruiting support. Programs range from drop-in training to full academy enrollment."
          },
          {
            question: "How does LPA help with college recruiting?",
            answer: "Beyond skill development, we provide recruiting guidance, college contact support, video packages, and showcase preparation. Many of our athletes have gone on to play at D1, D2, JUCO, and NAIA programs across the country."
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
