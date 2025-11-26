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

      {/* PARENT TESTIMONIALS - Video Carousel */}
      <LandingTestimonials
        title="Hear From LPA Families & Athletes"
        subtitle="Real families and athletes sharing their experience with our program"
        testimonials={[
          {
            videoUrl: "/testimonials/parent-testimonial-1.mp4",
            parentName: "Austin Smith",
            athleteName: "3B/C/RHP • Crowdettys",
            quote: "Leaving IMG Academy was tough, but for my recruiting process and development, it was crucial to come to LPA. The environment is everything. I've never had a real pitching coach until Terrell - the mechanics work has increased my velocity and taken strain off my arm."
          },
          {
            videoUrl: "/testimonials/parent-testimonial-2.mp4",
            parentName: "Adam Hayes",
            athleteName: "2025 Graduate",
            quote: "I'm committed to Texas Tech University. I came to LPA for my senior spring to have better development and a better chance at the MLB draft. Working with the pitching coaches every day has made my breaking ball a weapon - I can throw both my slider and curveball for strikes and swinging misses."
          },
          {
            videoUrl: "/testimonials/parent-testimonial-3.mp4",
            parentName: "LPA Parents",
            athleteName: "Multiple Families",
            quote: "We've seen incredible gains - not only on the baseball side, but on strength and development. The schools that were interested started calling to learn about what kind of program this is. Everything here is state of the art. For young kids that love baseball and are trying to play in college or professionally, seeing those little gains every day is amazing."
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
