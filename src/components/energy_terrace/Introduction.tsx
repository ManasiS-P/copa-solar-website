import { useTranslation } from "react-i18next";
import { Sun, Thermometer, Leaf, Volume2 } from "lucide-react";

const Introduction = () => {
  const { t } = useTranslation("terrace");

  const features = [
    {
      icon: Sun,
      title: t("introduction.features.dualEnergy.title"),
      description: t("introduction.features.dualEnergy.description"),
    },
    {
      icon: Thermometer,
      title: t("introduction.features.extendedSeason.title"),
      description: t("introduction.features.extendedSeason.description"),
    },
    {
      icon: Leaf,
      title: t("introduction.features.sustainable.title"),
      description: t("introduction.features.sustainable.description"),
    },
    {
      icon: Volume2,
      title: t("introduction.features.silent.title"),
      description: t("introduction.features.silent.description"),
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent font-medium tracking-wider uppercase text-sm">
                {t("introduction.label")}
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-semibold leading-tight mb-6">
              {t("introduction.title")}{" "}
              <span className="text-gradient-accent">
                {t("introduction.titleHighlight")}
              </span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t("introduction.description")}
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {t("introduction.description2")}
            </p>
          </div>

          {/* Right features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="stat-card group hover:border-accent/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
