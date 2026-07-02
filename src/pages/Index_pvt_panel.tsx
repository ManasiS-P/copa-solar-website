import HeroSection from "@/components/pvt_panels/HeroSection";
import IntroSection from "@/components/pvt_panels/IntroSection";
import FunctionSection from "@/components/pvt_panels/FunctionSection";
import PVTBoreholeChart from "@/components/pvt_panels/PVTBoreholeChart";
import CaseStudySection from "@/components/pvt_panels/CaseStudySection";
import EPDSection_PVT_Panel from "@/components/pvt_panels/EPDSection";
import CompanySection from "@/components/pvt_panels/CompanySection";
import ContactSection from "@/components/pvt_panels/ContactSection";
import { Footer } from "@/components/Footer";
import "@/styles/pvt.css";

const Index = () => {
  return (
    <>
      <main className="pvt-theme min-h-screen">
        <HeroSection />
        <IntroSection />
        <FunctionSection />
        <PVTBoreholeChart />
        <CaseStudySection />
        <EPDSection_PVT_Panel />
        <CompanySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
