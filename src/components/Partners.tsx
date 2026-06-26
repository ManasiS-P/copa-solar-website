import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Handshake, Building, Cog, Beaker, ExternalLink } from "lucide-react";

import cosentinoLogo from "@/assets/partners/cosentino-logo.png";
import tesaLogo from "@/assets/partners/tesa-logo.png";
import lawrenceLowyLogo from "@/assets/partners/lawrence-lowy-logo.png";
import helieneLogo from "@/assets/partners/heliene-logo.png";
import lavadaLogo from "@/assets/partners/lavada-logo.png";
import brightcoreEnergyLogo from "@/assets/partners/brightcore-energy-logo.png";

const partnerKeys = [
  { name: "Cosentino", key: "cosentino", website: "https://www.cosentino.com", logo: cosentinoLogo },
  { name: "tesa®", key: "tesa", website: "https://www.tesa.com", logo: tesaLogo },
  { name: "Lawrence Lowy Associates", key: "lawrenceLowy", website: "https://lawrencelowy.com", logo: lawrenceLowyLogo },
  { name: "Heliene", key: "heliene", website: "https://heliene.com", logo: helieneLogo },
  { name: "Lavada", key: "lavada", website: "https://www.lavadany.com", logo: lavadaLogo },
  { name: "Brightcore Energy", key: "brightcoreEnergy", website: "https://brightcoreenergy.com", logo: brightcoreEnergyLogo },
];

export const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const partnerBenefits = [
    { icon: Building, title: t("partners.benefits.localExpertise.title"), description: t("partners.benefits.localExpertise.description") },
    { icon: Cog, title: t("partners.benefits.fullSupport.title"), description: t("partners.benefits.fullSupport.description") },
    { icon: Handshake, title: t("partners.benefits.rapidScaling.title"), description: t("partners.benefits.rapidScaling.description") },
    { icon: Beaker, title: t("partners.benefits.innovationAccess.title"), description: t("partners.benefits.innovationAccess.description") },
  ];

  return (
    <section id="partners" className="py-8 bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center max-w-3xl mx-auto mb-6">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-2">{t("partners.label")}</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">{t("partners.title")}</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">{t("partners.description")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {partnerKeys.map((partner, index) => (
            <motion.div key={partner.name} initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.05 * index }} className="bg-background rounded-lg p-4 border border-border/50 hover:shadow-card transition-shadow duration-300 group">
              <div className="flex items-start gap-3 mb-2">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-white border border-border/30 overflow-hidden p-1">
                  <img src={partner.logo} alt={`${partner.name} logo`} className="w-full h-full object-contain" loading="lazy" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display text-sm font-bold text-foreground leading-tight">{partner.name}</div>
                  <div className="text-xs text-primary font-medium">{t(`partners.items.${partner.key}.role`)}</div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-2">{t(`partners.items.${partner.key}.description`)}</p>
              {partner.website !== "#" && (
                <a href={partner.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline opacity-0 group-hover:opacity-100 transition-opacity">
                  {t("partners.visitWebsite")} <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }} className="bg-background rounded-xl border border-border/50 p-5 md:p-8">
          <div className="text-center mb-6">
            <h3 className="font-display text-xl font-bold text-foreground mb-2">{t("partners.becomePartner.title")}</h3>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">{t("partners.becomePartner.description")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partnerBenefits.map((benefit, index) => (
              <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 + index * 0.1 }} className="text-center">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-display font-semibold text-sm text-foreground mb-1">{benefit.title}</h4>
                <p className="text-xs text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
