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
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl text-foreground uppercase leading-none">
            Questions
          </h2>
        </div>
        
        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="border border-border/50 bg-card/30 px-6 hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="font-bebas text-base md:text-lg text-foreground uppercase hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-oswald text-sm md:text-base text-muted-foreground pb-5">
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
