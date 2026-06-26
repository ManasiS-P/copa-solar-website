import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Benefits } from "@/components/Benefits";

export default function BenefitsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="pt-20 flex-1">
        <Benefits />
      </main>
      <Footer />
    </div>
  );
}
