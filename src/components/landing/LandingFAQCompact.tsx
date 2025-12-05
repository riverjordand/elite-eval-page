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

const LandingFAQCompact = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-bebas text-2xl md:text-3xl lg:text-4xl text-foreground uppercase tracking-tight">
            Common Questions
          </h2>
        </div>
        
        <div className="max-w-xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="border border-border/50 rounded-lg px-4 bg-card/30 hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="font-bebas text-xs md:text-sm text-foreground uppercase hover:no-underline py-3">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-oswald text-xs md:text-sm text-muted-foreground pb-3">
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

export default LandingFAQCompact;
