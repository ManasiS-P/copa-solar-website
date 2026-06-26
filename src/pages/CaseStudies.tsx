import { motion } from "framer-motion";
import { ArrowLeft, Building2, Sun, Factory, TrendingUp, Leaf, Thermometer } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import facadeRentalApt from "@/assets/case-studies/facade-rental-apt.jpg";
import pvtOsmo from "@/assets/case-studies/pvt-osmo.jpg";
import pvtDistrictHeating from "@/assets/case-studies/pvt-district-heating.jpg";

const caseStudies = [
  {
    id: "energy-facade-rental",
    icon: Building2,
    title: "+Energy Façade – Rental Apartments",
    subtitle: "Low CO₂ footprint concept buildings",
    image: facadeRentalApt,
    background: {
      title: "Customer Background – Low CO₂ Footprint Concept Buildings",
      points: [
        "Real estate owner with low carbon footprint ambitions",
        "Reduce from 4.7 kg CO₂ eq/m² (Opex) in previous project (2023) to 3.45 kg (2026)",
        "Wants to replace 80% of hot water from district heating with +EF as source",
        "Saving 10 cent/kWh (2025) for district heating cost in Denmark",
      ],
    },
    setup: {
      title: "Copa Solar Project Setup",
      points: [
        "Copa Solar absorber combined with façade stone (low CO₂ eq products with EPD)",
        "4500 m² Cosentino façade whereof 400 m² +Energy Façade with total 0.56 MWp (t)",
        "Estimated annual energy production 592 MWh (t)",
        "Connected to district heating through 2 m³ accumulator tank",
      ],
    },
    results: [
      { label: "ROI", value: "3.5 years", sublabel: "Copa installation" },
      { label: "Capex (+EF)", value: "$161,100", sublabel: "Copa" },
      { label: "Capex (peripheral)", value: "$29,300", sublabel: "Copa" },
      { label: "Opex", value: "$1,611/year", sublabel: "Copa" },
      { label: "25-Year Savings", value: "$2.17 million", sublabel: "" },
      { label: "Passive Cooling", value: "236 MWh", sublabel: "Added value" },
      { label: "CO₂ Reduction", value: "31.6 tonnes/year", sublabel: "" },
    ],
  },
  {
    id: "pvt-osmo",
    icon: Thermometer,
    title: "PVT – Ösmo",
    subtitle: "Frozen borehole recovery",
    image: pvtOsmo,
    background: {
      title: "Customer Background – Frozen Boreholes",
      points: [
        "Borehole temp had dropped from +52°F to +19°F",
        "Customer had installed an increased GSHP size, 70 to 100 kW (SCOP 5)",
        "67 apartments in 17 houses from 1986",
      ],
    },
    setup: {
      title: "Copa Solar Project Setup",
      points: [
        "44 PVT panels installed with total 119 kWp (t) and 18.2 kWp (e)",
        "Estimated annual energy production 121 MWh (t) and 14.5 MWh (e)",
      ],
    },
    results: [
      { label: "Result After 19 Months", value: "Borehole temp: +19°F → +43°F", sublabel: "" },
      { label: "ROI", value: "6 years", sublabel: "Copa installation" },
      { label: "Yearly Savings", value: "30% ($7,865)", sublabel: "Reduced GSHP electric bill" },
      { label: "Capex", value: "$200,000", sublabel: "Total installation" },
      { label: "Opex", value: "$36,700 / $400 per year", sublabel: "Copa" },
      { label: "CO₂ Reduction", value: "12.3 tonnes/year", sublabel: "" },
    ],
  },
  {
    id: "pvt-district-heating",
    icon: Factory,
    title: "PVT – District Heating",
    subtitle: "Replacing fossil fuel boilers",
    image: pvtDistrictHeating,
    background: {
      title: "Customer Background – Outdated Oil & Gas Boilers",
      points: [
        "Need substitute for fossil fuels to fulfil compliance with renewable energy",
        "Existing district heating net can be reused",
        "158°F system temperature preserved",
      ],
    },
    setup: {
      title: "Copa Solar Project Setup",
      points: [
        "Solar thermal and geosolar solution as alternative energy source",
        "1000 PVT panels (2050 m²) and 1000 PV panels (2050 m²) with total 2.75 MWp (t) and 0.89 MWp (e)",
        "Estimated annual energy production 2.89 GWh (t) and 0.73 GWh (e)",
        "20,000 m borehole with 700 kWp and 2800 MWh/year",
        "GSHP 2.5 MW whereof 700 kW electrical",
      ],
    },
    results: [
      { label: "ROI", value: "12 years", sublabel: "Total installation" },
      { label: "Capex", value: "$7.0 million (total) / $1.8 million (Copa)", sublabel: "" },
      { label: "Yearly Savings", value: "25% ($101,150)", sublabel: "Reduced GSHP electric bill" },
      { label: "COP Improvement", value: "0.7", sublabel: "" },
      { label: "Opex", value: "$3,600/year", sublabel: "Copa" },
      { label: "CO₂ Reduction", value: "428 tonnes/year", sublabel: "Copa" },
    ],
  },
];

export default function CaseStudies() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Link to="/">
              <Button variant="ghost" className="mb-6 -ml-4 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t("caseStudies.backToHome")}
              </Button>
            </Link>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              {t("caseStudies.label")}
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t("caseStudies.title")}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {t("caseStudies.description")}
            </p>
          </motion.div>
        </section>

        {/* Case Studies */}
        <section className="container mx-auto px-6 space-y-20">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 * index }}
              className="bg-card rounded-2xl border border-border/50 overflow-hidden"
            >
              {/* Header with Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-solar rounded-lg flex items-center justify-center">
                      <study.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-primary font-medium">{study.subtitle}</span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                    {study.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 md:p-10">
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {/* Background */}
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      {t("caseStudies.background")}
                    </h3>
                    <ul className="space-y-3">
                      {study.background.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Setup */}
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <Sun className="w-5 h-5 text-primary" />
                      {t("caseStudies.setup")}
                    </h3>
                    <ul className="space-y-3">
                      {study.setup.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Results Grid */}
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    {t("caseStudies.results")}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {study.results.map((result, i) => (
                      <div
                        key={i}
                        className="bg-muted/50 rounded-xl p-4 border border-border/30"
                      >
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                          {result.label}
                        </p>
                        <p className="font-display font-bold text-foreground text-lg">
                          {result.value}
                        </p>
                        {result.sublabel && (
                          <p className="text-xs text-muted-foreground mt-1">
                            {result.sublabel}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-solar rounded-2xl p-10 md:p-16 text-center"
          >
            <Leaf className="w-12 h-12 text-primary-foreground mx-auto mb-6" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Contact us to discuss how Copa Solar US Inc solutions can help you achieve 
              your sustainability and energy efficiency goals.
            </p>
            <Link to="/#contact">
              <Button variant="outline" size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
