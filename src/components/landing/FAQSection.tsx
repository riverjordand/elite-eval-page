import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "Who do we play?",
    a: "Spring: LPA competes in Division II of the Canyon Athletic Association (CAA). Fall: LPA plays a heavy JUCO circuit and participates in various college scrimmages. Summer: The team stays active with training, development, and club/high-school tournaments."
  },
  {
    q: "When does the school year start and end?",
    a: "The first day of school is August 5th and the official last day of school is May 2nd. For detailed dates and breaks, refer to the Premier Prep academic calendar — our online school partner."
  },
  {
    q: "What does the summer schedule look like?",
    a: "Summer at LPA focuses on continued training and development. The program includes various tournaments — usually club or high-school-level events — spaced throughout the summer to maintain competitive play and skill building."
  },
  {
    q: "What does the curriculum look like with Premier Prep?",
    a: "LPA partners with Premier Prep, an online charter high school that specializes in working with student-athletes. The curriculum is flexible, rigorous, and designed with the student-athlete in mind, making it easier to balance academics and athletics."
  },
  {
    q: "What does a typical day at LPA look like?",
    a: "LPA's schedule is designed to mirror a college athletics experience. Report times typically start around 7:00 AM, with a combination of academic work and athletic training sessions throughout the day. The day usually wraps up by early afternoon."
  },
  {
    q: "How can I learn more or apply?",
    a: "Book a tour to see the facilities and meet the staff in person. Our team can walk you through the application process and answer any remaining questions you have about the program."
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-16 md:py-24 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
      
      <div className="container relative mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="font-oswald text-xs text-accent uppercase tracking-[0.3em] mb-3">
            Common Questions
          </p>
          <h2 className="font-bebas text-3xl md:text-5xl lg:text-6xl text-foreground uppercase leading-none mb-4">
            Everything You Need To Know
          </h2>
          <p className="font-oswald text-sm text-foreground/50 max-w-xl mx-auto">
            Got questions about LPA? We've got answers.
          </p>
        </div>
        
        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                className="border border-border/15 bg-card/30 hover:bg-card/50 transition-colors duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 lg:p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-bebas text-sm w-8 text-center transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-foreground/30'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className={`font-bebas text-lg md:text-xl uppercase leading-tight transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-foreground'}`}>
                      {faq.q}
                    </h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-foreground/40 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-400 ease-out ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-5 lg:px-6 pb-6 pl-[4.25rem] lg:pl-[4.75rem]">
                    <p className="font-oswald text-sm md:text-base text-foreground/60 leading-relaxed border-l border-primary/20 pl-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Contact CTA */}
        <div className="text-center mt-10 md:mt-14">
          <Link to="/contact" className="inline-flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors group">
            <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="font-oswald text-sm">Still have questions? <span className="text-primary">Contact us</span></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
