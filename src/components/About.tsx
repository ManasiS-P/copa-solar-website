import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { CheckCircle2, Award, Leaf, Factory } from "lucide-react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const features = [
    {
      icon: Factory,
      title: t("about.features.manufacturing.title"),
      description: t("about.features.manufacturing.description"),
    },
    {
      icon: Award,
      title: t("about.features.iso.title"),
      description: t("about.features.iso.description"),
    },
    {
      icon: Leaf,
      title: t("about.features.carbon.title"),
      description: t("about.features.carbon.description"),
    },
  ];

  const checklistItems = [
    t("about.checklist.item1"),
    t("about.checklist.item2"),
    t("about.checklist.item3"),
    t("about.checklist.item4"),
  ];

  return (
    <section id="about" className="py-8 bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-2">
              {t("about.label")}
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              {t("about.title")}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {t("about.description1")}
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {t("about.description2")}
            </p>

            {/* Checklist */}
            <div className="space-y-2">
              {checklistItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-background rounded-lg p-4 shadow-card border border-border/50 hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
