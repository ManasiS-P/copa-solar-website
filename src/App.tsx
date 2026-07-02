import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import CaseStudies from "./pages/CaseStudies";
import PartnerWithUs from "./pages/PartnerWithUs";
import ProductsPage from "./pages/ProductsPage";
import BenefitsPage from "./pages/BenefitsPage";
import PartnersPage from "./pages/PartnersPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import Index_energy_fascade from "./pages/Index_energy_fascade";
import Index_energy_terrace from "./pages/Index_energy_terrace";
import Index_energy_wall from "./pages/Index_energy_wall";
import Index_pvt_panel from "./pages/Index_pvt_panel";
const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/benefits" element={<BenefitsPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
          <Route
            path="/products/energy-facade"
            element={<Index_energy_fascade />}
          />
          <Route
            path="/products/energy-terrace"
            element={<Index_energy_terrace />}
          />
          <Route path="/products/energy-wall" element={<Index_energy_wall />} />
          <Route path="/products/pvt-panels" element={<Index_pvt_panel />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
