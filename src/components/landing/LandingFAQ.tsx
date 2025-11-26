import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionDivider from "./SectionDivider";

interface FAQItem {
  question: string;
  answer: string;
}

interface LandingFAQProps {
  title: string;
  faqs: FAQItem[];
}

const LandingFAQ = ({ title, faqs }: LandingFAQProps) => {
  return (
    <>
      <SectionDivider fromColor="#1a1a1a" toColor="#0a0a0a" />
      <section className="py-12 md:py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bebas font-black uppercase mb-3 md:mb-4 px-4">
              Common Questions From Parents
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-oswald px-4">
              Everything you need to know about the evaluation and next steps.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-card border-2 border-border rounded-xl p-4 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-bebas text-base md:text-2xl uppercase hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-oswald leading-relaxed text-sm md:text-lg">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default LandingFAQ;
