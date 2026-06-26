import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FileText, Leaf, Recycle, Shield, Download, ExternalLink, Award, Calendar, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import isoLogo from "@/assets/iso-9001-logo.png";

export const EpdSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const epdHighlights = [
    {
      icon: Leaf,
      label: t("epd.gwpLabel", "GWP-fossil A1-A3"),
      value: "21.1 kg CO₂e/m²",
      description: t("epd.gwpDescription", "Global Warming Potential")
    },
    {
      icon: Recycle,
      label: t("epd.secondaryLabel", "Secondary Materials"),
      value: "122%",
      description: t("epd.secondaryDescription", "Material outputs recyclable")
    },
    {
      icon: Shield,
      label: t("epd.validLabel", "Valid Until"),
      value: "May 2029",
      description: t("epd.validDescription", "5-year certification")
    },
  ];

  return (
    <section id="epd" className="py-8 bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            {t("epd.label")}
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            {t("epd.title")}
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            {t("epd.description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* EPD Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background rounded-xl p-5 shadow-card border border-border/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground text-lg">
                  Retrofit Thermal Absorber
                </h3>
                <p className="text-muted-foreground text-sm">EPD HUB-1392</p>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between py-2 border-b border-border/50">
                <span className="text-muted-foreground">{t("epd.manufacturer", "Manufacturer")}</span>
                <span className="text-foreground font-medium">Copa Solar AB</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border/50">
                <span className="text-muted-foreground">{t("epd.declaredUnit", "Declared Unit")}</span>
                <span className="text-foreground font-medium">1 m² (2.48 kg)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border/50">
                <span className="text-muted-foreground">{t("epd.productionLocation", "Production Location")}</span>
                <span className="text-foreground font-medium">SSAB Braunschweig, Germany</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border/50">
                <span className="text-muted-foreground">{t("epd.referenceStandard", "Reference Standard")}</span>
                <span className="text-foreground font-medium">EN 15804+A2:2019</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border/50">
                <span className="text-muted-foreground">{t("epd.scope", "Scope")}</span>
                <span className="text-foreground font-medium">{t("epd.scopeValue", "Cradle to gate (C1-C4, D)")}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">{t("epd.verification", "Verification")}</span>
                <span className="text-foreground font-medium">{t("epd.verificationValue", "Third-party verified")}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="flex-1">
                <a href="/documents/EPD_Copa_Solar_Retrofit_Thermal_Absorber.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  {t("epd.downloadEpd")}
                </a>
              </Button>
              <Button variant="outline" asChild className="flex-1">
                <a href="https://www.epdhub.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  EPD Hub
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <div className="bg-background rounded-xl p-5 shadow-card border border-border/50">
              <h4 className="font-display font-semibold text-foreground mb-4">
                {t("epd.impactSummary")}
              </h4>
              
              <div className="grid gap-3">
                {epdHighlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-muted/30 rounded-xl"
                  >
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-muted-foreground text-sm">{item.label}</p>
                      <p className="text-foreground font-semibold text-lg">{item.value}</p>
                    </div>
                    <span className="text-muted-foreground text-xs hidden sm:block">
                      {item.description}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
              <p className="text-foreground text-sm leading-relaxed">
                <strong className="text-secondary">{t("epd.circularEconomy")}:</strong> {t("epd.circularDescription")}
              </p>
            </div>
          </motion.div>
        </div>

        {/* ISO 9001 Certification Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6"
        >
          <div className="text-center mb-5">
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
              {t("epd.certificationsTitle")}
            </h3>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
              {t("epd.certificationsDescription")}
            </p>
          </div>

          <div className="bg-background rounded-xl p-5 shadow-card border border-border/50">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="flex justify-center">
                <img 
                  src={isoLogo} 
                  alt="ISO 9001 Certified by A3CERT" 
                  className="h-24 w-auto"
                />
              </div>

              <div className="md:col-span-2 grid sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{t("epd.certification", "Certification")}</p>
                    <p className="text-foreground font-semibold">ISO 9001:2015</p>
                    <p className="text-muted-foreground text-xs mt-1">{t("epd.qualityManagement", "Quality Management System")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{t("epd.certifiedCompany", "Certified Company")}</p>
                    <p className="text-foreground font-semibold">Copa Solar AB</p>
                    <p className="text-muted-foreground text-xs mt-1">Sweden</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{t("epd.certifiedSince", "Certified Since")}</p>
                    <p className="text-foreground font-semibold">5 August 2024</p>
                    <p className="text-muted-foreground text-xs mt-1">{t("epd.certifiedBy", "Certified by A3CERT")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
