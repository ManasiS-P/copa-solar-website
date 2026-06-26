import HeroSection_PVT from "@/components/HeroSection_PVT";
import IntroSection from "@/components/IntroSection";
import FunctionSection from "@/components/FunctionSection";
import PVTBoreholeChart from "@/components/PVTBoreholeChart";
import CaseStudySection from "@/components/CaseStudySection";
import EPDSection_PVT_Panel from "@/components/EPDSection_PVT_Panel";
import CompanySection from "@/components/CompanySection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection_PVT />
      <IntroSection />
      <FunctionSection />
      <PVTBoreholeChart />
      <CaseStudySection />
      <EPDSection_PVT_Panel />
      <CompanySection />
      <ContactSection />
    </main>
  );
};

export default Index;
