import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-12 md:py-20 lg:py-36 xl:py-44 overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      {/* Atmospheric glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/8 rounded-full blur-[200px]" />
      
      {/* Vignette */}
      <div className="absolute inset-0 cinematic-vignette opacity-30" />
      
      <div className="container relative mx-auto px-4 md:px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-accent blur-lg opacity-60" style={{ transform: 'scale(1.5)' }} />
              <div className="relative w-8 h-8 md:w-10 md:h-10 bg-accent/20 border border-accent/50 flex items-center justify-center">
                <HelpCircle className="w-4 h-4 md:w-5 md:h-5 text-accent" />
              </div>
            </div>
            <span className="font-oswald text-xs md:text-sm lg:text-base text-accent uppercase tracking-[0.2em] md:tracking-[0.3em] glow-accent">
              Common Questions
            </span>
          </div>
          <h2 className="font-bebas text-2xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground uppercase leading-none mb-3 md:mb-5 drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            Everything You Need To Know
          </h2>
          <p className="font-oswald text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions about LPA? We've got answers. If you don't see what you're looking for, 
            reach out — we're happy to help.
          </p>
        </div>
        
        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-3 md:gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-500 ${
                    isOpen ? 'z-10' : 'z-0'
                  }`}
                >
                  {/* Card */}
                  <div
                    onClick={() => toggleFAQ(index)}
                    className={`relative cursor-pointer transition-all duration-500 ${
                      isOpen 
                        ? 'bg-card/60 border-primary/50' 
                        : 'bg-card/30 border-border/40 hover:border-primary/30 hover:bg-card/40'
                    } border backdrop-blur-sm`}
                    style={{ 
                      boxShadow: isOpen 
                        ? '0 0 60px hsl(var(--primary) / 0.2), 0 20px 40px -15px rgba(0,0,0,0.5)' 
                        : '0 15px 30px -10px rgba(0,0,0,0.4)' 
                    }}
                  >
                    {/* Question row */}
                    <div className="flex items-start gap-4 p-5 lg:p-6">
                      {/* Number indicator */}
                      <div className={`relative flex-shrink-0 transition-all duration-500 ${
                        isOpen ? 'scale-110' : 'scale-100'
                      }`}>
                        <div className={`absolute inset-0 bg-primary blur-lg transition-opacity duration-500 ${
                          isOpen ? 'opacity-80' : 'opacity-0 group-hover:opacity-40'
                        }`} style={{ transform: 'scale(1.5)' }} />
                        <div className={`relative w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center font-bebas text-lg lg:text-xl transition-all duration-500 ${
                          isOpen 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-primary/15 text-primary border border-primary/30'
                        }`}>
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                      
                      {/* Question text */}
                      <div className="flex-1 pt-1">
                        <h3 className={`font-bebas text-lg md:text-xl lg:text-2xl uppercase leading-tight transition-colors duration-300 ${
                          isOpen ? 'text-primary' : 'text-foreground group-hover:text-primary/80'
                        }`}>
                          {faq.q}
                        </h3>
                      </div>
                      
                      {/* Toggle icon */}
                      <div className={`flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isOpen 
                          ? 'bg-primary text-primary-foreground rotate-180' 
                          : 'bg-primary/15 text-primary group-hover:bg-primary/25'
                      }`}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>
                    
                    {/* Answer - collapsible */}
                    <div className={`overflow-hidden transition-all duration-500 ease-out ${
                      isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-5 lg:px-6 pb-6 pt-0">
                        <div className="pl-14 lg:pl-16 border-l-2 border-primary/30 ml-5 lg:ml-6">
                          <p className="font-oswald text-sm md:text-base lg:text-lg text-foreground/80 leading-relaxed pl-4">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Active indicator line */}
                    <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-500 ${
                      isOpen ? 'w-full' : 'w-0'
                    }`} />
                  </div>
                  
                  {/* Glow under card when open */}
                  <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-primary/30 blur-xl transition-opacity duration-500 ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <div 
            className="inline-flex items-center gap-3 bg-card/40 backdrop-blur-sm border border-border/40 px-6 py-4 hover:border-primary/40 transition-colors cursor-pointer group"
            style={{ boxShadow: '0 15px 30px -10px rgba(0,0,0,0.4)' }}
          >
            <MessageCircle className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <span className="font-oswald text-sm lg:text-base text-foreground/80">
              Still have questions? <span className="text-primary glow-primary">Contact us</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
