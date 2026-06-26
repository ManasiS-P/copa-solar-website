import { useTranslation } from "react-i18next";
import { Shield, Building2, Thermometer, AlertTriangle, CheckCircle2, Scale, Landmark } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export const NYCCompliance = () => {
  const { t } = useTranslation();

  const laws = [
    {
      icon: Building2,
      title: "Local Law 11 (FISP)",
      subtitle: "Façade Inspection & Safety Program",
      problem: "Buildings over 6 stories must undergo façade inspections every 5 years. Cycle 10 affects 4,000+ NYC buildings. Unsafe ratings require sidewalk sheds ($10K–$50K/yr) and repairs up to $1M+.",
      solution: "The +Energy Façade replaces aging materials, achieving automatic Safe classification under LL11 while generating thermal energy — turning compliance cost into revenue.",
      highlights: ["Auto-classified Safe under FISP", "Eliminates sidewalk sheds", "60-year Dekton® design life", "Non-combustible"]
    },
    {
      icon: Thermometer,
      title: "Local Law 97",
      subtitle: "Building Emissions Limits",
      problem: "50,000+ buildings over 25,000 sq ft must meet strict carbon caps. 65% projected to fail 2030 limits. Penalties: $268/metric ton CO₂ over cap — assessed annually.",
      solution: "Copa Solar's +Energy Façade closes ~60% of the LL97 emissions gap by generating thermal energy that feeds heat pumps, boosting COP and eliminating gas dependency.",
      highlights: ["Closes ~60% of LL97 gap", "5,050 kBTU/m²/yr output", "Feeds GSHP/ASHP systems", "Eliminates gas dependency"]
    },
    {
      icon: Scale,
      title: "ASHRAE 90.1-2019",
      subtitle: "Building Energy Standard",
      problem: "NYC's Energy Code based on ASHRAE 90.1 sets minimum efficiency requirements for envelope, HVAC, lighting. All new construction and major renovations must comply.",
      solution: "Copa Solar products are certified compliant with ASHRAE 90.1-2019, exceeding envelope requirements by turning passive surfaces into active energy systems.",
      highlights: ["ASHRAE 90.1-2019 compliant", "EPD & LCA certified", "Exceeds envelope requirements", "All HVAC compatible"]
    }
  ];

  return (
    <section id="nyc-compliance" className="py-8 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-3">
            <Landmark className="w-4 h-4" />
            {t("nycCompliance.label")}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            {t("nycCompliance.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("nycCompliance.description")}
          </p>
        </motion.div>

        {/* Problem Overview */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4"
        >
          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="p-4 md:p-5">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-destructive/10 shrink-0">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-1">
                    {t("nycCompliance.problemTitle")}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t("nycCompliance.problemDescription")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Law Cards */}
        <div className="space-y-3">
          {laws.map((law, index) => (
            <motion.div
              key={law.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="p-4 md:p-5 bg-muted/50">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="p-1.5 rounded-lg bg-primary/10">
                          <law.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground text-sm">{law.title}</h3>
                          <p className="text-xs text-muted-foreground">{law.subtitle}</p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-destructive">
                        {t("nycCompliance.challenge")}
                      </span>
                      <p className="text-muted-foreground text-xs leading-relaxed mt-1">
                        {law.problem}
                      </p>
                    </div>

                    <div className="p-4 md:p-5 bg-primary/5 border-t md:border-t-0 md:border-l border-border">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {t("nycCompliance.copaSolution")}
                      </span>
                      <p className="text-muted-foreground text-xs leading-relaxed mt-1 mb-3">
                        {law.solution}
                      </p>
                      <ul className="space-y-1">
                        {law.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-center gap-1.5 text-xs">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                            <span className="text-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-4 text-center"
        >
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-4 md:p-5">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-primary" />
                <h3 className="text-base font-bold text-foreground">
                  {t("nycCompliance.ctaTitle")}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
                {t("nycCompliance.ctaDescription")}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
