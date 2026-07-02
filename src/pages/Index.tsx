import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { NYCCompliance } from "@/components/NYCCompliance";
import { EpdSection } from "@/components/EpdSection";
import { GlobalGoals } from "@/components/GlobalGoals";
import { Memberships } from "@/components/Memberships";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <NYCCompliance />
        <EpdSection />
        <GlobalGoals />
        <Memberships />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
