const commitments = [
  { player: "Marcus Rodriguez", school: "University of Arizona", year: "2024" },
  { player: "Jake Mitchell", school: "Arizona State University", year: "2024" },
  { player: "Carlos Hernandez", school: "University of Southern California", year: "2023" },
  { player: "Tyler Johnson", school: "Stanford University", year: "2023" },
  { player: "David Chen", school: "UCLA", year: "2024" },
  { player: "Brandon Smith", school: "University of Texas", year: "2023" },
  { player: "Miguel Santos", school: "Vanderbilt University", year: "2024" },
  { player: "Ryan Parker", school: "Florida State University", year: "2023" },
  { player: "Justin Lee", school: "University of Miami", year: "2024" },
  { player: "Anthony Garcia", school: "Louisiana State University", year: "2023" },
  { player: "Kevin Thompson", school: "Oregon State University", year: "2024" },
  { player: "Daniel Martinez", school: "University of Florida", year: "2023" }
];

const Commitments = () => {
  return (
    <section id="commitments" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-4">
            Where LPA Athletes <span className="text-primary">Go Next</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our players have committed to top-tier college baseball programs across the nation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {commitments.map((commitment, index) => (
            <div 
              key={index}
              className="bg-card border border-border p-6 rounded-lg hover:border-primary transition-all duration-300 group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {commitment.player}
                  </h3>
                  <p className="text-primary font-semibold mb-1">
                    {commitment.school}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Class of {commitment.year}
                  </p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-bold">{commitment.year.slice(-2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-card border-2 border-primary/20 rounded-xl p-12">
          <h3 className="text-3xl font-bold uppercase mb-4">
            Ready to Join Them?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your journey to college baseball with a comprehensive evaluation from our expert coaching staff.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Commitments;
