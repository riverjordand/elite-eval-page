import facilityImage from "@/assets/facility-interior.jpg";

const Culture = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bebas font-black uppercase mb-4">
            Inside the <span className="text-primary">LPA Culture</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-oswald">
            Where discipline, growth, and excellence become a lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="space-y-6">
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="text-2xl font-bebas font-bold uppercase mb-3 text-primary">Immersive Training</h3>
              <p className="text-muted-foreground leading-relaxed font-oswald">
                Connect engage in daily intensive baseball training with a focus on skill development and strategic understanding. Our comprehensive approach combines cutting-edge technology with proven coaching methods.
              </p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="text-2xl font-bebas font-bold uppercase mb-3 text-primary">Academic Excellence</h3>
              <p className="text-muted-foreground leading-relaxed font-oswald">
                Partnership with Premier Prep Academy ensures our student-athletes maintain academic excellence. Fully accredited by NCAA with flexible class schedules and 24/7 academic tutors.
              </p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="text-2xl font-bebas font-bold uppercase mb-3 text-primary">Professional Exposure</h3>
              <p className="text-muted-foreground leading-relaxed font-oswald">
                Regular interactions with college scouts and professional coaches provide students with exposure to future opportunities. All coaches have played at Division 1 or Pro level.
              </p>
            </div>
          </div>

          <div className="relative h-[600px] rounded-xl overflow-hidden">
            <img 
              src={facilityImage} 
              alt="LPA Training Facility" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-3xl font-bebas font-bold uppercase text-foreground mb-2">
                State-of-the-Art Facility
              </h3>
              <p className="text-muted-foreground font-oswald">
                16,000+ sq ft of dedicated space for baseball training excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
