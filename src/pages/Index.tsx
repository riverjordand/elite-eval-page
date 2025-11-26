import { useState } from "react";
import Navigation from "@/components/Navigation";
import LandingHero from "@/components/landing/LandingHero";
import LandingIntro from "@/components/landing/LandingIntro";
import LandingFacilityShowcase from "@/components/landing/LandingFacilityShowcase";
import LandingVideos from "@/components/landing/LandingVideos";
import LandingPhotos from "@/components/landing/LandingPhotos";
import LandingProcess from "@/components/landing/LandingProcess";
import LandingCoaches from "@/components/landing/LandingCoaches";
import LandingTestimonials from "@/components/landing/LandingTestimonials";
import LandingCommitments from "@/components/landing/LandingCommitments";
import LandingEvaluationHook from "@/components/landing/LandingEvaluationHook";
import LandingProblemAgitation from "@/components/landing/LandingProblemAgitation";
import LandingEvaluationIntro from "@/components/landing/LandingEvaluationIntro";
import LandingValueStack from "@/components/landing/LandingValueStack";

import EvaluationForm from "@/components/landing/EvaluationForm";
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
  const [formOpen, setFormOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* HERO */}
      <LandingHero
        onCtaClick={() => setFormOpen(true)}
        onTourClick={() => setFormOpen(true)}
      />

      {/* INTRO - About LPA */}
      <LandingIntro />

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
              "Played D1 at Oregon and pro ball with the Diamondbacks organization. Minor League batting champion and 3x All-Star who brings elite-level hitting expertise to every session."
            ],
            image: coachMarcus
          },
          {
            name: "Joe Dunigan",
            title: "Hitting Coordinator & Astros Scout",
            credentials: [
              "D1 player at Oklahoma who was drafted twice in the MLB Draft. Currently scouts for the Houston Astros, giving athletes a direct connection to professional opportunities."
            ],
            image: coachJoe
          },
          {
            name: "Eric Smith",
            title: "Coordinator",
            credentials: [
              "D1 player at Rhode Island and 2nd round draft pick by the Arizona Diamondbacks. 6 years of professional baseball experience competing at the highest level."
            ],
            image: coachEric
          },
          {
            name: "Terrell Hudson",
            title: "Assistant Coach",
            credentials: [
              "Former D1 player at the University of New Mexico. Specializes in developing elite youth baseball players for college and beyond."
            ],
            image: coachTerrell
          },
          {
            name: "Will Armijo",
            title: "CEO & Co-Founder",
            credentials: [
              "Former NCAA player with an MBA who built 6 successful companies across four industries. Over 13 years mentoring athletes and professionals with a focus on long-term development and recruiting strategy."
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

      {/* SECTION A - Evaluation Hook (Performance Gaps Transition) */}
      <LandingEvaluationHook onCtaClick={() => setFormOpen(true)} />

      {/* SECTION B - Problem Agitation (Cost of Not Knowing) */}
      <LandingProblemAgitation />

      {/* SECTION C - Evaluation Intro (Free College-Ready Player Evaluation) */}
      <LandingEvaluationIntro />

      {/* SECTION D - Value Stack (What's Included) */}
      <LandingValueStack onCtaClick={() => setFormOpen(true)} />


      {/* SECTION E - How It Works */}
      <LandingProcess
        title="How the Evaluation Works"
        subtitle="A simple, proven process for serious athletes."
        steps={[
          {
            number: "1",
            title: "Book Your Spot",
            description: "Choose a time that works for your family."
          },
          {
            number: "2",
            title: "Show Up Ready",
            description: "Bring your athlete prepared to throw, hit, and be evaluated."
          },
          {
            number: "3",
            title: "Complete the Evaluation",
            description: "90 minutes of testing, mechanical analysis, and strength assessment."
          },
          {
            number: "4",
            title: "Get Your Roadmap",
            description: "Leave with your personalized development plan and next steps."
          }
        ]}
        ctaText="Book My Free Evaluation"
        onCtaClick={() => setFormOpen(true)}
      />

      {/* SECTION F - FAQ */}
      <LandingFAQ
        title="Common Questions From Parents"
        faqs={[
          {
            question: "What exactly is the Free College-Ready Player Evaluation?",
            answer: "It's a comprehensive 90-minute assessment that includes velocity testing, mechanics analysis, strength and mobility evaluation, and a personalized development roadmap created by our D1/Pro coaching staff. You'll leave with a written plan, baseline metrics, and recruiting guidance."
          },
          {
            question: "How long does the evaluation take?",
            answer: "The full evaluation takes approximately 90 minutes. This includes testing, video analysis, coach consultation, and facility walkthrough. We also provide time for Q&A so you can ask our coaches anything about your athlete's development path."
          },
          {
            question: "Is this really free? What's the catch?",
            answer: "Yes, it's 100% free with no obligation. We offer this evaluation because we believe every athlete and family should have access to professional assessment before making development decisions. There's no pressure to join our program afterward."
          },
          {
            question: "What happens after the evaluation?",
            answer: "You'll receive a written development plan, recorded metrics, and recruiting guidance. If you're interested in training at LPA, we'll discuss program options. But there's zero pressure — the evaluation results are yours to use however you choose."
          },
          {
            question: "Who conducts the evaluation?",
            answer: "All evaluations are conducted by our D1 and professional coaching staff with 50+ combined years of experience. You'll work directly with coaches who have developed hundreds of college-bound athletes."
          },
          {
            question: "What does LPA's training program include?",
            answer: "Our program includes professional coaching, velocity development, mechanics training, strength and conditioning, mental performance work, and recruiting support. Programs are customized based on your athlete's position, age, and goals."
          },
          {
            question: "How much does the training program cost?",
            answer: "We offer several program options at different investment levels. Pricing and program details are discussed after your evaluation once we understand your athlete's specific needs and development timeline."
          }
        ]}
      />

      {/* SECTION G - Final CTA */}
      <LandingFinalCTA
        title="Your Athlete's Next Level Starts Here"
        ctaText="Book My Free Evaluation Now"
        onCtaClick={() => setFormOpen(true)}
      />

      <LandingFooter />

      {/* Evaluation Form Modal */}
      <EvaluationForm open={formOpen} onOpenChange={setFormOpen} />
    </div>
  );
};

export default Index;
