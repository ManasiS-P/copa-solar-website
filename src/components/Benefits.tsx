import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { 
  Droplets, 
  ThermometerSun, 
  Snowflake, 
  Volume2, 
  Recycle, 
  Award,
  TrendingDown,
  Globe
} from "lucide-react";

export const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const benefits = [
    {
      icon: ThermometerSun,
      title: t("benefits.items.peakPower.title"),
      description: t("benefits.items.peakPower.description"),
    },
    {
      icon: Snowflake,
      title: t("benefits.items.radiativeCooling.title"),
      description: t("benefits.items.radiativeCooling.description"),
    },
    {
      icon: Droplets,
      title: t("benefits.items.heatingCooling.title"),
      description: t("benefits.items.heatingCooling.description"),
    },
    {
      icon: Volume2,
      title: t("benefits.items.silentOperation.title"),
      description: t("benefits.items.silentOperation.description"),
    },
    {
      icon: Recycle,
      title: t("benefits.items.recyclable.title"),
      description: t("benefits.items.recyclable.description"),
    },
    {
      icon: Award,
      title: t("benefits.items.warranty.title"),
      description: t("benefits.items.warranty.description"),
    },
    {
      icon: TrendingDown,
      title: t("benefits.items.energyReduction.title"),
      description: t("benefits.items.energyReduction.description"),
    },
    {
      icon: Globe,
      title: t("benefits.items.producedEurope.title"),
      description: t("benefits.items.producedEurope.description"),
    },
  ];

  const stats = [
    { value: "1,480", unit: "kWh/m²/year", label: t("benefits.stats.annualProduction") },
    { value: ">30%", unit: "", label: t("benefits.stats.hotWaterReduction") },
    { value: ">40%", unit: "", label: t("benefits.stats.heatingReduction") },
    { value: "3.5", unit: "years", label: t("benefits.stats.averageRoi") },
  ];

  return (
    <section id="benefits" className="py-8 bg-gradient-dark text-primary-foreground" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-3xl mx-auto mb-6"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            {t("benefits.label")}
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
            {t("benefits.title")}
          </h2>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            {t("benefits.description")}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="text-center bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-3"
            >
              <div className="font-display text-2xl md:text-3xl font-bold text-primary mb-0.5">
                {stat.value}
                <span className="text-lg text-primary-foreground/70">{stat.unit}</span>
              </div>
              <div className="text-sm text-primary-foreground/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.05 }}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-3 hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              <div className="w-8 h-8 bg-gradient-solar rounded-lg flex items-center justify-center mb-2">
                <benefit.icon className="w-4 h-4 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-sm text-primary-foreground mb-1">
                {benefit.title}
              </h3>
              <p className="text-xs text-primary-foreground/60 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
