import facilityImage from "@/assets/facility-interior.jpg";

const Advantages = () => {
  return (
    <section id="advantages" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Academy Info */}
          <div className="space-y-12">
            {/* The Academy Section */}
            <div>
              <h3 className="text-3xl font-bebas font-black uppercase mb-6 text-primary">
                The Academy
              </h3>
              <ul className="space-y-4 font-oswald text-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Located in Arizona, we provide a premier private environment dedicated to developing future elite college and professional baseball players.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Our academy offers a unique blend of cutting-edge training and top-tier coaching focused on high school player development.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>We provide personalized academics designed for student athletes in a state-of-the-art facility, ensuring well-rounded development.</span>
                </li>
              </ul>
            </div>

            {/* The Details Section */}
            <div>
              <h3 className="text-3xl font-bebas font-black uppercase mb-6 text-primary">
                The Details
              </h3>
              <ul className="space-y-3 font-oswald text-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Serving grades 6-12 (~post grad)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Fully Accredited Online Charter School</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Includes Spring, Summer, and Fall play</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Out of state student housing available (via host family)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Image and Beliefs */}
          <div className="space-y-8">
            {/* Tilted Image */}
            <div className="relative">
              <div className="transform rotate-3 overflow-hidden rounded-lg shadow-2xl border-4 border-primary/20">
                <img 
                  src={facilityImage} 
                  alt="LPA Training Facility" 
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
            </div>

            {/* Quote */}
            <div className="text-center px-4">
              <p className="text-xl md:text-2xl font-bebas uppercase text-primary leading-tight">
                "We believe in giving players the tools and resources they need to reach elite college and professional level baseball."
              </p>
            </div>

            {/* Beliefs List */}
            <div>
              <ul className="space-y-3 font-oswald text-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>We Believe in Development</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>We Believe in Fundamental Skills</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>We Believe in Repetition</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>We Believe in Playing Hard and Often</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>We Believe in Technology</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>We Believe in Elite Coaching</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>We Believe in Mental and Physical Strength</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>We Believe NIL is good for athletes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>We Believe in Baseball</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
