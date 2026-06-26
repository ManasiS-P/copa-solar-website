import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Partners } from "@/components/Partners";

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
