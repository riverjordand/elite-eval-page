import facilityImage from "@/assets/facility-interior.jpg";

const Academy = () => {
  const beliefs = [
    "We Believe in Development",
    "We Believe in Fundamental Skills",
    "We Believe in Repetition",
    "We Believe in Playing Hard and Often",
    "We Believe in Competition",
    "We Believe in Elite Coaching",
    "We Believe in Mental and Physical Strength",
    "We Believe lift is good for athletes",
    "We Believe in Baseball"
  ];

  return (
    <section id="academy" className="py-24 bg-background relative overflow-hidden">
      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bebas font-black uppercase mb-4 text-primary">
              The Academy
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-oswald">
              <p className="text-lg leading-relaxed">
                Located in Arizona, we provide a premier prep environment dedicated to developing 
                future elite college and professional baseball players.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our academy offers a unique blend of cutting-edge training and top-tier coaching focused 
                on high school player development.
              </p>
              
              <p className="text-lg leading-relaxed">
                We provide personalized instruction and state-of-the-art facility, ensuring well-rounded development.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl md:text-3xl font-bebas font-black uppercase mb-4 text-foreground">
                The Details
              </h3>
              <ul className="space-y-2 text-muted-foreground font-oswald">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Serving grades 9-12 (post grad)
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Fully Accredited Online Charter School
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Includes Spring, Summer, and Fall play
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Out of state student housing available (via host family)
                </li>
              </ul>
            </div>
          </div>

          {/* Right content - Image and Beliefs */}
          <div className="space-y-8">
            <div className="relative group">
              <img 
                src={facilityImage}
                alt="LPA Training Facility"
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-lg"></div>
            </div>

            <div className="bg-card border-2 border-primary/20 rounded-lg p-8">
              <h3 className="text-2xl md:text-3xl font-bebas font-black uppercase mb-6 text-center text-primary">
                "We Believe in Going Beyond the Tools and Mechanics that gets to 
                <span className="block text-accent">play elite college and professional level baseball."</span>
              </h3>
              
              <div className="grid grid-cols-1 gap-2">
                {beliefs.map((belief, index) => (
                  <div 
                    key={index}
                    className="flex items-center text-muted-foreground font-oswald animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <span className="text-primary font-bold mr-2">›</span>
                    {belief}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academy;
