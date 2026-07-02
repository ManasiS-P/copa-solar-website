import Header from "@/components/energy_terrace/Header";
import Hero from "@/components/energy_terrace/Hero";
import Introduction from "@/components/energy_terrace/Introduction";
import TechnicalSpecs from "@/components/energy_terrace/TechnicalSpecs";
import PillarSolution from "@/components/energy_terrace/PillarSolution";
import Applications from "@/components/energy_terrace/Applications";
import CaseStudy from "@/components/energy_terrace/CaseStudy";
import EPDSection from "@/components/energy_terrace/EPDSection";
import Contact from "@/components/energy_terrace/Contact";
import "@/styles/terrace.css";

const Index = () => {
  return (
    <div className="terrace-theme min-h-screen bg-background">
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
