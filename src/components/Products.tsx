import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  Building2,
  Sun,
  Thermometer,
  Waves,
  ArrowRight,
  Factory,
  FileText,
  LayoutGrid,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import facadeExterior from "@/assets/facade-exterior.jpg";
import pvtPanels from "@/assets/pvt-panels.png";
import repvwerProduct from "@/assets/repvwer-product.png";

import energyTerrace from "@/assets/energy-terrace.png";
import pvtDistrictHeating from "@/assets/pvt-district-heating.jpg";
import energyWallSystem from "@/assets/energywall-system.jpeg";

export const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const products = [
    {
      id: "energy-facade",
      icon: Building2,
      name: t("products.items.energyFacade.name"),
      subtitle: t("products.items.energyFacade.subtitle"),
      description: t("products.items.energyFacade.description"),
      specs: [
        t("products.items.energyFacade.specs.spec1"),
        t("products.items.energyFacade.specs.spec2"),
        t("products.items.energyFacade.specs.spec3"),
        t("products.items.energyFacade.specs.spec4"),
      ],
      image: facadeExterior,
      technicalDoc: "/documents/Energy_Facade_Technical_datasheet.pdf",
      learnMoreDoc: "/documents/Energy_Facade_Brochure.pdf",
      // learnMoreUrl: "https://facade-showcase-builder.lovable.app",
      //learnMoreUrl: "https://main.d3dhvq01bqq596.amplifyapp.com/facade",
      path: "/products/energy-facade",
    },
    {
      id: "energy-terrace",
      icon: Waves,
      name: t("products.items.energyTerrace.name"),
      subtitle: t("products.items.energyTerrace.subtitle"),
      description: t("products.items.energyTerrace.description"),
      specs: [
        t("products.items.energyTerrace.specs.spec1"),
        t("products.items.energyTerrace.specs.spec2"),
        t("products.items.energyTerrace.specs.spec3"),
        t("products.items.energyTerrace.specs.spec4"),
      ],
      image: energyTerrace,
      // learnMoreUrl: "https://copasolarenergyterrace.lovable.app/",
      //learnMoreUrl: "https://main.d3dhvq01bqq596.amplifyapp.com/terrace",
      path: "/products/energy-terrace",
    },
    {
      id: "energy-wall",
      icon: LayoutGrid,
      name: t("products.items.energyWall.name"),
      subtitle: t("products.items.energyWall.subtitle"),
      description: t("products.items.energyWall.description"),
      specs: [
        t("products.items.energyWall.specs.spec1"),
        t("products.items.energyWall.specs.spec2"),
        t("products.items.energyWall.specs.spec3"),
        t("products.items.energyWall.specs.spec4"),
      ],
      image: energyWallSystem,
      // learnMoreUrl: "https://energywall-comfort-design.lovable.app",
      //learnMoreUrl: "https://main.d3dhvq01bqq596.amplifyapp.com/wall",
      path: "/products/energy-wall",
    },
    {
      id: "pvt-panels",
      icon: Sun,
      name: t("products.items.pvtPanels.name"),
      subtitle: t("products.items.pvtPanels.subtitle"),
      description: t("products.items.pvtPanels.description"),
      specs: [
        t("products.items.pvtPanels.specs.spec1"),
        t("products.items.pvtPanels.specs.spec2"),
        t("products.items.pvtPanels.specs.spec3"),
        t("products.items.pvtPanels.specs.spec4"),
      ],
      image: pvtPanels,
      // learnMoreUrl: "https://pvt-sparkle-maker.lovable.app",
      //learnMoreUrl: "https://main.d3dhvq01bqq596.amplifyapp.com/pvt",
      path: "/products/pvt-panels",
      technicalDoc: "/documents/Copa_Solar_Technical_Data_Sheet_PVT00205.pdf",
    },
    {
      id: "pvt-district-heating",
      icon: Factory,
      name: t("products.items.pvtDistrictHeating.name"),
      subtitle: t("products.items.pvtDistrictHeating.subtitle"),
      description: t("products.items.pvtDistrictHeating.description"),
      specs: [
        t("products.items.pvtDistrictHeating.specs.spec1"),
        t("products.items.pvtDistrictHeating.specs.spec2"),
        t("products.items.pvtDistrictHeating.specs.spec3"),
        t("products.items.pvtDistrictHeating.specs.spec4"),
      ],
      image: pvtDistrictHeating,
      //learnMoreUrl: "https://main.d3dhvq01bqq596.amplifyapp.com/district-heating",
      learnMoreUrl: "https://copasolarpvtdistrictheating.lovable.app/",
    },
    {
      id: "repvwer",
      icon: Thermometer,
      name: t("products.items.repvwer.name"),
      subtitle: t("products.items.repvwer.subtitle"),
      description: t("products.items.repvwer.description"),
      specs: [
        t("products.items.repvwer.specs.spec1"),
        t("products.items.repvwer.specs.spec2"),
        t("products.items.repvwer.specs.spec3"),
        t("products.items.repvwer.specs.spec4"),
      ],
      image: repvwerProduct,
      technicalDoc: "/documents/Copa_Solar_Technical_Data_Sheet_RAM00203.pdf",
    },
  ];

  return (
    <section id="products" className="py-8 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-3xl mx-auto mb-6"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            {t("products.label")}
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            {t("products.title")}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t("products.description")}
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index }}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-elevated transition-all duration-300"
            >
              {product.image && (
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                </div>
              )}

              <div className="p-4">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-9 h-9 bg-gradient-solar rounded-lg flex items-center justify-center flex-shrink-0">
                    <product.icon className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground leading-tight">
                      {product.name}
                    </h3>
                    <span className="text-xs text-primary font-medium">
                      {product.subtitle}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground text-xs mb-3 leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                <ul className="space-y-1 mb-3">
                  {product.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-center gap-1.5 text-xs"
                    >
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      <span className="text-foreground/80">{spec}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2">
                  {/* If there is a 'path', use Link. If only a 'doc' exists, use <a> to open in new tab */}
                  {product.path || product.learnMoreDoc ? (
                    <Button
                      variant="solar-outline"
                      size="sm"
                      className="group/btn"
                      asChild
                    >
                      {product.path ? (
                        <Link to={product.path}>
                          {t("products.learnMore")}
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      ) : (
                        <a
                          href={product.learnMoreDoc}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t("products.learnMore")}
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </a>
                      )}
                    </Button>
                  ) : (
                    <Button
                      variant="solar-outline"
                      size="sm"
                      className="group/btn"
                    >
                      {t("products.learnMore")}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  )}
                  {product.technicalDoc && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={product.technicalDoc}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="w-4 h-4 mr-1" />
                        {t("products.techSheet")}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
