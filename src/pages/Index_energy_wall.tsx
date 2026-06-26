import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import Features from "@/components/Features";
import TechSpecs from "@/components/TechSpecs";
import MountingSystem from "@/components/MountingSystem";
import Applications from "@/components/Applications";
import Performance from "@/components/Performance";
import Certifications from "@/components/Certifications";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <section id="features">
        <Features />
      </section>
      <section id="specifications">
        <TechSpecs />
      </section>
      <MountingSystem />
      <section id="applications">
        <Applications />
      </section>
      <Performance />
      <Certifications />
      <section id="partners">
        <Partners />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
