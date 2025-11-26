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
      <section className="py-16 md:py-32 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bebas font-black uppercase px-4 leading-[0.95]">
              {title}
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-card border-2 border-border rounded-xl p-6 md:p-12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="py-2 md:py-4">
                  <AccordionTrigger className="text-left font-bebas text-base md:text-2xl lg:text-3xl uppercase hover:text-primary leading-tight py-4 md:py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-oswald leading-relaxed md:leading-relaxed text-sm md:text-xl lg:text-2xl pt-2 md:pt-4">
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
