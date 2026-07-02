import Header from "@/components/energy_wall/Header";
import Hero from "@/components/energy_wall/Hero_Energy_wall";
import Features from "@/components/energy_wall/Features";
import TechSpecs from "@/components/energy_wall/TechSpecs";
import MountingSystem from "@/components/energy_wall/MountingSystem";
import Applications from "@/components/energy_wall/Applications";
import Performance from "@/components/energy_wall/Performance";
import Certifications from "@/components/energy_wall/Certifications";
import Partners from "@/components/energy_wall/Partners";
import { Footer } from "@/components/Footer";
import "@/styles/wall.css";

const Index = () => {
  return (
    <>
      <div className="wall-theme min-h-screen bg-background">
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
      </div>
      <Footer />
    </>
  );
};

export default Index;
