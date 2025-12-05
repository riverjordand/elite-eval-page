import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What exactly happens during the free evaluation?",
    a: "Your athlete goes through velocity/metrics testing with Rapsodo, video mechanics analysis, a strength and mobility screen, and receives a personalized development plan. We also give you an honest college recruiting assessment. The whole session takes about 60 minutes."
  },
  {
    q: "Is there really no catch? Why is it free?",
    a: "No hidden fees. We offer free evaluations because once parents see the LPA difference — the coaching quality, the technology, the results — many decide to train with us. But there's zero pressure. Even if you never come back, you'll walk away with valuable insights."
  },
  {
    q: "What age or skill level should my athlete be?",
    a: "We work with athletes ages 10-18, from travel ball players who want to level up to varsity stars preparing for college recruitment. If your athlete is serious about improvement, they're a good fit."
  },
  {
    q: "What makes LPA different from other academies?",
    a: "Three things: (1) Our coaches have actually played D1 and pro ball. (2) We use the same technology MLB teams use. (3) We develop the complete athlete — mechanics, strength, mobility, and mental game. Most academies have one of these. We have all three."
  },
  {
    q: "How quickly do athletes typically see results?",
    a: "Most athletes see measurable improvements within 4-6 weeks. Our average athlete gains 3-5 MPH in their first 3 months. The real transformation happens over 6-12 months when everything compounds."
  },
  {
    q: "Do you help with college recruiting?",
    a: "Yes. Our coaches have connections with college programs across all levels — D1, D2, D3, NAIA, and JUCO. We've helped place 50+ athletes at the college level."
  },
];

const FAQSection = () => {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 xl:py-44 overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      {/* Atmospheric glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/8 rounded-full blur-[200px]" />
      
      {/* Vignette */}
      <div className="absolute inset-0 cinematic-vignette opacity-30" />
      
      <div className="container relative mx-auto px-6 lg:px-20">
        <div className="text-center mb-10 lg:mb-14 xl:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <HelpCircle className="w-5 h-5 text-primary" />
            <span className="font-oswald text-sm lg:text-base text-primary uppercase tracking-[0.3em] glow-primary">Common Questions</span>
          </div>
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground uppercase leading-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            Everything You Need To Know
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 lg:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="border border-border/40 bg-card/30 backdrop-blur-sm px-5 lg:px-6 data-[state=open]:border-primary/50 transition-all duration-300 data-[state=open]:bg-card/50"
                style={{ boxShadow: '0 15px 30px -10px rgba(0,0,0,0.4)' }}
              >
                <AccordionTrigger className="font-bebas text-left text-base md:text-lg lg:text-xl text-foreground uppercase hover:text-primary py-5 lg:py-6 hover:no-underline transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-oswald text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed pb-5 lg:pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;