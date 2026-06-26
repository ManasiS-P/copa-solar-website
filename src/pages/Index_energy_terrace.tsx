import { Header } from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import TechnicalSpecs from "@/components/sections/TechnicalSpecs";
import PillarSolution from "@/components/sections/PillarSolution";
import Applications from "@/components/sections/Applications";
import CaseStudy from "@/components/sections/CaseStudy";
import EPDSection from "@/components/sections/EPDSection";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <div id="solutions">
          <Introduction />
        </div>
        <div id="specifications">
          <TechnicalSpecs />
        </div>
        <PillarSolution />
        <Applications />
        <div id="case-study">
          <CaseStudy />
        </div>
        <EPDSection />
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default Index;
