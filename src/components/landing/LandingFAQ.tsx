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
      <SectionDivider fromColor="#050505" toColor="#000000" />
      <section className="section-dark py-20 md:py-28 lg:py-40 xl:py-48">
        <div className="px-4 md:px-8 lg:px-12 xl:px-20">
          <div className="max-w-[1400px] mx-auto">
            {/* Header */}
            <div className="text-center mb-16 md:mb-20 lg:mb-28">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bebas font-black uppercase leading-[0.9] mb-6 lg:mb-8">
                Common Questions<br />
                <span className="text-primary glow-primary">From Parents</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground font-oswald leading-relaxed">
                Everything you need to know about the evaluation and next steps.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="bg-gradient-to-b from-card to-background border border-border/50 rounded-2xl lg:rounded-3xl p-6 md:p-10 lg:p-16 xl:p-20">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-border/30">
                    <AccordionTrigger className="text-left font-bebas text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase hover:text-primary py-6 lg:py-8 transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-oswald leading-relaxed text-base md:text-lg lg:text-xl xl:text-2xl pt-2 pb-6">
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
