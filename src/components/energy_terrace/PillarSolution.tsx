import { useTranslation } from "react-i18next";
import {
  Layers,
  Settings,
  Droplets,
  Building2,
  Flame,
  Award,
  Thermometer,
  Zap,
} from "lucide-react";
import publicPlazaImage from "@/assets/buzon-public-plaza.jpg";
import hotelTerraceImage from "@/assets/buzon-hotel-terrace.jpg";
import pedestalsImage from "@/assets/buzon-pedestals.jpg";
import corporateImage from "@/assets/buzon-corporate.jpg";
import energyTerraceSystemImage from "@/assets/energy-terrace-system.png";

const PillarSolution = () => {
  const { t } = useTranslation("terrace");

  const features = [
    {
      icon: Thermometer,
      title: t("pillar.features.absorber.title"),
      description: t("pillar.features.absorber.description"),
    },
    {
      icon: Zap,
      title: t("pillar.features.peakOutput.title"),
      description: t("pillar.features.peakOutput.description"),
    },
    {
      icon: Settings,
      title: t("pillar.features.adjustable.title"),
      description: t("pillar.features.adjustable.description"),
    },
    {
      icon: Droplets,
      title: t("pillar.features.slope.title"),
      description: t("pillar.features.slope.description"),
    },
    {
      icon: Flame,
      title: t("pillar.features.fireRated.title"),
      description: t("pillar.features.fireRated.description"),
    },
    {
      icon: Award,
      title: t("pillar.features.cradle.title"),
      description: t("pillar.features.cradle.description"),
    },
  ];

  const projects = [
    {
      image: publicPlazaImage,
      title: t("pillar.projects.plazas.title"),
      description: t("pillar.projects.plazas.description"),
    },
    {
      image: hotelTerraceImage,
      title: t("pillar.projects.hotel.title"),
      description: t("pillar.projects.hotel.description"),
    },
    {
      image: corporateImage,
      title: t("pillar.projects.corporate.title"),
      description: t("pillar.projects.corporate.description"),
    },
  ];

  return (
    <section id="pillar-solution" className="section-padding bg-muted/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-medium tracking-wider uppercase text-sm">
              {t("pillar.label")}
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-semibold mb-6">
            {t("pillar.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            {t("pillar.description")}
          </p>
        </div>

        {/* System Diagram - Stone with Pipes */}
        <div className="bg-card rounded-2xl p-8 md:p-12 mb-16 shadow-lg border border-border">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl md:text-3xl text-foreground font-semibold mb-4">
              {t("pillar.absorberTitle")}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("pillar.absorberDescription")}
            </p>
          </div>

          {/* Visual representation */}
          <div className="relative max-w-4xl mx-auto">
            {/* Stone Surface Layer */}
            <div className="bg-gradient-to-b from-stone-400 to-stone-500 rounded-t-xl h-16 md:h-20 flex items-center justify-center shadow-lg">
              <span className="text-white font-semibold text-lg">
                {t("pillar.stoneSurface")}
              </span>
            </div>

            {/* Absorber Pipes Image */}
            <div className="relative">
              <img
                src={energyTerraceSystemImage}
                alt="Complete +Energy Terrace system with absorber pipes and pedestals"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/20" />
            </div>

            {/* Pipe connections going down */}
            <div className="flex justify-center gap-8 md:gap-16">
              <div className="w-4 h-24 bg-gradient-to-b from-stone-400 to-accent rounded-b-full shadow-md" />
              <div className="w-4 h-24 bg-gradient-to-b from-stone-400 to-accent rounded-b-full shadow-md" />
            </div>

            {/* Labels */}
            <div className="text-center mt-4">
              <span className="text-accent font-medium">
                {t("pillar.toHeatPump")}
              </span>
            </div>
          </div>

          {/* Technical callouts */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-accent font-semibold text-xl mb-1">
                {t("pillar.stainlessSteel")}
              </div>
              <p className="text-muted-foreground text-sm">
                {t("pillar.stainlessSteelDesc")}
              </p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-accent font-semibold text-xl mb-1">
                {t("pillar.thermalBond")}
              </div>
              <p className="text-muted-foreground text-sm">
                {t("pillar.thermalBondDesc")}
              </p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-accent font-semibold text-xl mb-1">
                {t("pillar.glycolCircuit")}
              </div>
              <p className="text-muted-foreground text-sm">
                {t("pillar.glycolCircuitDesc")}
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden mb-16 shadow-2xl">
          <img
            src={publicPlazaImage}
            alt="Energy-generating terrace with integrated solar absorbers"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <h3 className="font-display text-2xl md:text-3xl text-primary-foreground font-semibold mb-3">
              {t("pillar.heroTitle")}
            </h3>
            <p className="text-primary-foreground/85 text-lg max-w-2xl">
              {t("pillar.heroDescription")}
            </p>
          </div>
        </div>

        {/* Project Showcase */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="font-semibold text-primary-foreground text-lg mb-2">
                  {project.title}
                </h4>
                <p className="text-primary-foreground/80 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Two Column Layout: Pedestals Image + Features */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Pedestal Product Image */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
              <img
                src={pedestalsImage}
                alt="PB Series adjustable pedestals supporting energy terrace"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h4 className="font-semibold text-foreground text-lg mb-2">
                {t("pillar.pbSeries.title")}
              </h4>
              <p className="text-muted-foreground text-sm">
                {t("pillar.pbSeries.description")}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-5 shadow-md border border-border text-center">
                <div className="text-accent font-semibold text-2xl mb-1">
                  {t("pillar.bcSeries.title")}
                </div>
                <div className="text-muted-foreground text-sm">
                  {t("pillar.bcSeries.subtitle")}
                </div>
                <p className="text-muted-foreground text-xs mt-2">
                  {t("pillar.bcSeries.description")}
                </p>
              </div>
              <div className="bg-card rounded-xl p-5 shadow-md border border-border text-center">
                <div className="text-accent font-semibold text-2xl mb-1">
                  {t("pillar.uBrs.title")}
                </div>
                <div className="text-muted-foreground text-sm">
                  {t("pillar.uBrs.subtitle")}
                </div>
                <p className="text-muted-foreground text-xs mt-2">
                  {t("pillar.uBrs.description")}
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Benefits */}
        <div className="bg-primary rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h3 className="font-display text-2xl md:text-3xl text-primary-foreground font-semibold mb-4">
                {t("pillar.integration.title")}
              </h3>
              <p className="text-primary-foreground/80">
                {t("pillar.integration.description")}
              </p>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
                <div className="text-accent font-semibold text-3xl mb-2">
                  1,480
                </div>
                <div className="text-primary-foreground font-medium mb-1">
                  {t("pillar.integration.annual")}
                </div>
                <p className="text-primary-foreground/70 text-sm">
                  {t("pillar.integration.annualDesc")}
                </p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
                <div className="text-accent font-semibold text-3xl mb-2">
                  18-955mm
                </div>
                <div className="text-primary-foreground font-medium mb-1">
                  {t("pillar.integration.heightRange")}
                </div>
                <p className="text-primary-foreground/70 text-sm">
                  {t("pillar.integration.heightRangeDesc")}
                </p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
                <div className="text-accent font-semibold text-3xl mb-2">
                  1,000kg
                </div>
                <div className="text-primary-foreground font-medium mb-1">
                  {t("pillar.integration.loadCapacity")}
                </div>
                <p className="text-primary-foreground/70 text-sm">
                  {t("pillar.integration.loadCapacityDesc")}
                </p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
                <div className="text-accent font-semibold text-3xl mb-2">
                  25+
                </div>
                <div className="text-primary-foreground font-medium mb-1">
                  {t("pillar.integration.lifespan")}
                </div>
                <p className="text-primary-foreground/70 text-sm">
                  {t("pillar.integration.lifespanDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reference Projects */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm mb-4">
            {t("pillar.trusted")}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-foreground/60 font-medium">
            <span>Marina Bay Sands</span>
            <span className="text-muted-foreground/40">•</span>
            <span>Google HQ King's Cross</span>
            <span className="text-muted-foreground/40">•</span>
            <span>Apple Park</span>
            <span className="text-muted-foreground/40">•</span>
            <span>Goldman Sachs HQ</span>
            <span className="text-muted-foreground/40">•</span>
            <span>Arche de la Défense</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarSolution;
