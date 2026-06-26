import HeroSection from "@/components/HeroSection";
import KeyBenefits from "@/components/KeyBenefits";
import TechnicalSpecs from "@/components/TechnicalSpecs";
import Applications from "@/components/Applications";
import EnergyPerformance from "@/components/EnergyPerformance";
import Certifications from "@/components/Certifications";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <KeyBenefits />
      <TechnicalSpecs />
      <Applications />
      <EnergyPerformance />
      <Certifications />
      <Partners />
      <Footer />
    </main>
  );
};

export default Index;
