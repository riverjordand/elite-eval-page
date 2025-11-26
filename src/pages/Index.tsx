import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import Evaluation from "@/components/Evaluation";
import Culture from "@/components/Culture";
import Commitments from "@/components/Commitments";
import TourCTA from "@/components/TourCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Advantages />
      <Evaluation />
      <Culture />
      <Commitments />
      <TourCTA />
      <Footer />
    </div>
  );
};

export default Index;
