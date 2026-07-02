import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function PartnerWithUs() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="pt-28 pb-16 flex-1">
        <section className="container mx-auto px-6">
          <div className="max-w-3xl rounded-2xl border border-border/50 bg-card p-8 md:p-12 shadow-card">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Partner With Us
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              We are continuously looking for partners and agents and we are
              always open to applications on sales, distribution, installation,
              developers and technical engineers.
            </p>
            <Link to="/">
              <Button variant="solar">Back to Home</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
