import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  { q: "Who do we play?", a: "Spring: LPA competes in the National Academies Association (NAA). Fall: LPA plays a heavy college and high school circuit. Summer: The team stays active with training, development, and club/high-school tournaments." },
  { q: "When does the school year start and end?", a: "The academic year runs from August to May. Players remain active throughout the entire year training and competing. Please contact us for detailed dates and breaks." },
  { q: "What does the summer schedule look like?", a: "Summer at LPA focuses on continued training and development. The program includes various tournaments — usually club or high-school-level events — spaced throughout the summer to maintain competitive play and skill building." },
  { q: "What does the curriculum look like with Premier Prep?", a: "LPA partners with Premier Prep, an online charter high school that specializes in working with student-athletes. The curriculum is flexible, rigorous, and designed with the student-athlete in mind." },
  { q: "What does a typical day at LPA look like?", a: "Report times typically start around 8:00 AM. Athletes spend 2 hours in the classroom focused on academics and the rest of the day allocated to baseball skills training, strength, and speed work." },
  { q: "How can I learn more or apply?", a: "Book a tour to see the facilities and meet the staff in person. Our team can walk you through the application process and answer any remaining questions." },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  return (
    <section ref={ref} className="relative py-20 md:py-28 lg:py-36 border-t border-border/10">
      <div className="container relative mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className={`lg:col-span-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-primary" />
                <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">FAQ</span>
              </div>
              <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-foreground uppercase leading-[0.88] mb-4">
                Common<br /><span className="text-primary">Questions</span>
              </h2>
              <p className="font-oswald text-sm text-foreground/30 leading-relaxed mb-6">
                Everything you need to know about the academy and the program.
              </p>
              <Link to="/contact" className="font-oswald text-xs text-primary hover:text-primary/80 uppercase tracking-[0.2em] transition-colors">
                Contact Us →
              </Link>
            </div>
          </div>

          <div className={`lg:col-span-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="divide-y divide-border/10">
              {faqs.map((faq, i) => {
                const isOpen = openIndices.has(i);
                return (
                  <div key={i}>
                    <button onClick={() => setOpenIndices(prev => { const next = new Set(prev); if (next.has(i)) next.delete(i); else next.add(i); return next; })} className="w-full flex items-center justify-between gap-6 py-6 text-left group">
                      <div className="flex items-start gap-5">
                        <span className="font-bebas text-sm text-foreground/15 pt-0.5">{String(i + 1).padStart(2, '0')}</span>
                        <h3 className={`font-bebas text-lg md:text-xl uppercase leading-tight transition-colors ${isOpen ? 'text-primary' : 'text-foreground group-hover:text-foreground/70'}`}>{faq.q}</h3>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-foreground/20 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-400 ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="pb-6 pl-10 md:pl-12">
                        <p className="font-oswald text-sm text-foreground/40 leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
