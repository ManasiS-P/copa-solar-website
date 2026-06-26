import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Products } from "@/components/Products";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Products />
      </main>
      <Footer />
    </div>
  );
}
