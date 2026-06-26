import { useTranslation } from "react-i18next";
import { Zap, ThermometerSun, Factory, Recycle, Shield, Globe } from "lucide-react";
import solarAbsorberCoreImage from "@/assets/solar-absorber-core.png";

const TechnicalSpecs = () => {
  const { t } = useTranslation();

  const specs = [
    {
      icon: Zap,
      value: "1,400",
      unit: "W/m²",
      label: t("specs.thermalPower.label"),
      description: t("specs.thermalPower.description")
    },
    {
      icon: ThermometerSun,
      value: "200",
      unit: "W/m²",
      label: t("specs.radiativeCooling.label"),
      description: t("specs.radiativeCooling.description")
    },
    {
      icon: Factory,
      value: "1,480",
      unit: "kWh/m²",
      label: t("specs.annualProduction.label"),
      description: t("specs.annualProduction.description")
    },
    {
      icon: Shield,
      value: "25",
      unit: t("specs.warranty.label").includes("Year") ? "Years" : "",
      label: t("specs.warranty.label"),
      description: t("specs.warranty.description")
    },
    {
      icon: Recycle,
      value: "100%",
      unit: "",
      label: t("specs.recyclable.label"),
      description: t("specs.recyclable.description")
    },
    {
      icon: Globe,
      value: "EU",
      unit: "",
      label: t("specs.produced.label"),
      description: t("specs.produced.description")
    }
  ];

  const absorberFeatures = t("specs.absorber.features", { returnObjects: true }) as string[];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-medium tracking-wider uppercase text-sm">
              {t("specs.label")}
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-semibold mb-6">
            {t("specs.title")}
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("specs.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 border border-border/50 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="feature-icon group-hover:bg-accent/20 transition-colors duration-300">
                  <spec.icon className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="flex items-baseline justify-end gap-1">
                    <span className="text-4xl font-bold text-foreground">{spec.value}</span>
                    {spec.unit && <span className="text-lg text-muted-foreground">{spec.unit}</span>}
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{spec.label}</h3>
              <p className="text-muted-foreground text-sm">{spec.description}</p>
            </div>
          ))}
        </div>

        {/* Absorber Technology Visual */}
        <div className="mt-12 bg-card rounded-xl p-8 border border-border/50 shadow-[var(--shadow-soft)]">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {t("specs.absorber.title")}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t("specs.absorber.description")}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {absorberFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={solarAbsorberCoreImage} 
                alt="Stainless steel solar absorber core - the core technology of +Energy Terrace"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                {t("specs.absorber.badge")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
