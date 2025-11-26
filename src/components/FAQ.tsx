import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "WHO DO WE PLAY?",
    answer: [
      {
        season: "Spring:",
        description: "LPA Competes in Division 1 of the Canyon Athletic Association (CAA)."
      },
      {
        season: "Fall:",
        description: "LPA typically plays a heavy JUCO Junior College) circuit and also participates in various college scrimmages (primarily NCCAA/ year-colleges)."
      },
      {
        season: "Summer:",
        description: "The team stays active with training, development, and club/high school tournaments."
      }
    ]
  },
  {
    question: "WHEN DOES THE SCHOOL YEAR END?",
    answer: [
      {
        description: "The official last day of school is May 2nd."
      },
      {
        description: "The first day of school is August 5th."
      },
      {
        description: "For detailed dates and breaks, refer to the Premier Prep academic calendar (the online school partner)."
      }
    ]
  },
  {
    question: "WHAT DOES THE SUMMER SCHEDULE LOOK LIKE?",
    answer: [
      {
        season: "Summer:",
        description: "All Focuses on continued training and development for student-athletes."
      },
      {
        description: "The program also includes various tournaments, usually club or high school level events, spaced throughout the summer to maintain competitive play and skill building."
      }
    ]
  },
  {
    question: "WHAT DOES THE CURRICULUM LOOK LIKE WITH PREMIER PREP?",
    answer: [
      {
        description: "LPA partners with Premier Prep, an online charter high school that specializes in working with student-athletes."
      },
      {
        description: "The curriculum is flexible, rigorous, and designed with the student athlete in mind, making it easier to balance academics and athletics."
      },
      {
        description: "For more specific details, consult the Premier Prep website or contact them directly."
      }
    ]
  },
  {
    question: "WHAT DOES A TYPICAL DAY AT LPA LOOK LIKE?",
    answer: [
      {
        description: "LPA's daily and annual schedules are designed to serve a unique athletics experience."
      },
      {
        description: "Report times typically start around 7:00 AM, with a combination of academic work (online coursework) and athletic training/conditioning sessions scheduled throughout the day."
      },
      {
        description: "The day usually wraps up by early afternoon, but exact times can vary based on practices, workouts, and competition."
      },
      {
        description: "For a deeper look or to experience it firsthand, book a tour to see the facilities and meet the staff."
      }
    ]
  },
  {
    question: "LEARN MORE",
    answer: [
      {
        description: "If you're interested in the FAQs and want to learn more or see LPA in action, consider booking a tour or contacting the staff. They can walk you through the application process (handed out through form) and answer any remaining questions."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bebas font-black uppercase mb-4">
              <span className="text-primary">FAQ</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border-2 border-border rounded-lg px-6 data-[state=open]:border-primary transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <h3 className="text-xl md:text-2xl font-bebas font-black uppercase text-foreground">
                    {faq.question}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-4 text-muted-foreground font-oswald">
                    {faq.answer.map((item, itemIndex) => (
                      <p key={itemIndex} className="leading-relaxed">
                        {item.season && (
                          <span className="font-bold text-primary">{item.season}</span>
                        )}
                        {' '}{item.description}
                      </p>
                    ))}
                  </div>

                  {/* Show buttons for specific questions */}
                  {faq.question === "WHEN DOES THE SCHOOL YEAR END?" && (
                    <div className="mt-6">
                      <Button 
                        variant="outline"
                        className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-oswald font-bold uppercase"
                      >
                        Premier Prep Calendar
                      </Button>
                    </div>
                  )}

                  {faq.question === "WHAT DOES THE CURRICULUM LOOK LIKE WITH PREMIER PREP?" && (
                    <div className="mt-6">
                      <Button 
                        variant="outline"
                        className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-oswald font-bold uppercase"
                      >
                        Premier Prep Online Academy
                      </Button>
                    </div>
                  )}

                  {faq.question === "WHAT DOES A TYPICAL DAY AT LPA LOOK LIKE?" && (
                    <div className="mt-6">
                      <Button 
                        variant="outline"
                        className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-oswald font-bold uppercase"
                      >
                        Book a Tour
                      </Button>
                    </div>
                  )}

                  {faq.question === "LEARN MORE" && (
                    <div className="mt-6">
                      <Button 
                        variant="outline"
                        className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-oswald font-bold uppercase"
                      >
                        Book a Tour
                      </Button>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
