import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What ages do you work with?",
    a: "We train athletes ages 10-18, with programming tailored to each developmental stage."
  },
  {
    q: "How long is the evaluation?",
    a: "About 90 minutes. You'll walk away with actionable insights and a clear development plan."
  },
  {
    q: "Is there really no cost?",
    a: "Correct. The evaluation is completely free with no obligation to join any program."
  },
  {
    q: "What should my athlete bring?",
    a: "Baseball gear (glove, bat if hitting), athletic clothing, and water."
  },
  {
    q: "Who conducts the evaluation?",
    a: "Our D1/Pro coaching staff personally evaluates every athlete—not assistants."
  },
  {
    q: "What happens after?",
    a: "You'll receive a written plan and metrics. If interested in training, we'll discuss options—zero pressure."
  },
];

const FAQSection = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 xl:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
      
      <div className="container relative mx-auto px-6 lg:px-16 xl:px-24">
        {/* Desktop: Two column layout */}
        <div className="flex flex-col lg:flex-row lg:gap-16 xl:gap-24">
          {/* Left - Header */}
          <div className="lg:w-1/3 mb-10 lg:mb-0">
            <div className="lg:sticky lg:top-32">
              <h2 className="font-bebas text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground uppercase leading-none mb-4 lg:mb-6 text-center lg:text-left">
                Questions
              </h2>
              <p className="font-oswald text-sm md:text-base lg:text-lg text-muted-foreground text-center lg:text-left">
                Everything you need to know about the free evaluation.
              </p>
            </div>
          </div>
          
          {/* Right - FAQ */}
          <div className="lg:w-2/3">
            <Accordion type="single" collapsible className="space-y-3 lg:space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="border border-border/30 bg-card/20 px-5 lg:px-8 hover:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="font-bebas text-base md:text-lg lg:text-xl xl:text-2xl text-foreground uppercase hover:no-underline py-5 lg:py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-oswald text-sm md:text-base lg:text-lg text-muted-foreground pb-5 lg:pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
