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
      <section className="py-16 md:py-24 lg:py-32 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-4 md:px-8 lg:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas font-black uppercase mb-4 md:mb-6 px-4 leading-tight">
              Common Questions From Parents
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-oswald px-4 leading-relaxed">
              Everything you need to know about the evaluation and next steps.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-card border-2 border-border rounded-xl p-6 md:p-10 lg:p-12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-bebas text-lg md:text-2xl lg:text-3xl uppercase hover:text-primary py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-oswald leading-relaxed text-base md:text-lg lg:text-xl pt-2">
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
