import HeroSection from "@/components/energy_facade/HeroSection";
import KeyBenefits from "@/components/energy_facade/KeyBenefits";
import TechnicalSpecs from "@/components/energy_facade/TechnicalSpecs";
import Applications from "@/components/energy_facade/Applications";
import EnergyPerformance from "@/components/energy_facade/EnergyPerformance";
import Certifications from "@/components/energy_facade/Certifications";
import Partners from "@/components/energy_facade/Partners";
import Footer from "@/components/energy_facade/Footer";
import "@/styles/facade.css";

const Index = () => {
  return (
    <main className="facade-theme min-h-screen">
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
