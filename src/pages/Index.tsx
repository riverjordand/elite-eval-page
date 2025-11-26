import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Academy from "@/components/Academy";
import Advantages from "@/components/Advantages";
import Facility from "@/components/Facility";
import Evaluation from "@/components/Evaluation";
import Staff from "@/components/Staff";
import Culture from "@/components/Culture";
import FAQ from "@/components/FAQ";
import TourCTA from "@/components/TourCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Academy />
      <Advantages />
      <Facility />
      <Evaluation />
      <Staff />
      <Culture />
      <FAQ />
      <TourCTA />
      <Footer />
    </div>
  );
};

export default Index;
