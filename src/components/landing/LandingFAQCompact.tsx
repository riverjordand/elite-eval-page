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
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0 section-darker" />
      
      {/* Atmospheric lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[150px]" />
      
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-10 md:mb-14 lg:mb-20">
          <h2 className="font-bebas text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground uppercase tracking-tight glow-primary">
            Common Questions
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4 md:space-y-5">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="group border border-border/30 rounded-xl lg:rounded-2xl px-5 md:px-8 lg:px-10 bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-sm hover:border-primary/40 hover:bg-card/50 transition-all duration-300"
              >
                <AccordionTrigger className="font-bebas text-base md:text-xl lg:text-2xl text-foreground uppercase hover:no-underline py-5 md:py-6 lg:py-8 group-hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-oswald text-sm md:text-lg lg:text-xl text-muted-foreground pb-5 md:pb-6 lg:pb-8">
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
