import { motion } from "framer-motion";
import { Sun, Zap, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import facadeBuilding from "@/assets/facade-building.jpg";

export const Hero = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Zap, value: "1,400", label: t("hero.stats.peakPower") },
    { icon: Building2, value: "13+", label: t("hero.stats.countries") },
    { icon: Sun, value: "300%", label: t("hero.stats.annualGrowth") },
  ];

  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-gradient-hero pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1.5 mb-4"
            >
              <Sun className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground/80">
                {t("hero.badge")}
              </span>
            </motion.div>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              {t("hero.title")}{" "}
              <span className="text-gradient-solar">
                {t("hero.titleHighlight")}
              </span>
            </h1>

            <p className="text-base text-muted-foreground mb-6 max-w-xl leading-relaxed">
              {t("hero.description")}
            </p>

            <div className="mb-6">
              <Button asChild variant="hero-outline">
                <Link to="/partner-with-us">{t("hero.partnerWithUs")}</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <stat.icon className="w-5 h-5 text-primary mb-2 mx-auto sm:mx-0" />
                  <div className="font-display text-xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={facadeBuilding}
                alt="Copa Solar Energy Facade on modern building"
                className="w-full h-[300px] lg:h-[400px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-md rounded-xl p-4 shadow-card"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-solar rounded-lg flex items-center justify-center">
                    <Sun className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-foreground">
                      {t("hero.floatingBadge.title")}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t("hero.floatingBadge.subtitle")}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
