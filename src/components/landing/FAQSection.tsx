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
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-card/30" />
      
      <div className="container relative mx-auto px-6 lg:px-16">
        <div className="text-center mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="font-oswald text-xs text-primary uppercase tracking-[0.3em]">Common Questions</span>
          </div>
          <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl text-foreground uppercase leading-none">
            Everything You Need To Know
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="border border-border/40 bg-card/30 px-4 data-[state=open]:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="font-bebas text-left text-sm md:text-base text-foreground uppercase hover:text-primary py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-oswald text-xs md:text-sm text-muted-foreground leading-relaxed pb-4">
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