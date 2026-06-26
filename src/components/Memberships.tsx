import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import shcLogo from "@/assets/shc-by-sweden-logo.png";
import businessSwedenLogo from "@/assets/business-sweden-logo.png";

// Memberships component
export const Memberships = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const memberships = [
    {
      name: "Sustainable Heating & Cooling by Sweden",
      shortName: "SHC by Sweden",
      description: t("memberships.shcDescription"),
      website: "https://www.shcbysweden.se",
      logo: shcLogo,
    },
    {
      name: "Business Sweden New York",
      shortName: "Business Sweden NY",
      description: t("memberships.businessSwedenDescription"),
      website: "https://www.business-sweden.com",
      logo: businessSwedenLogo,
    },
  ];

  return (
    <section id="memberships" className="py-8 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            {t("memberships.label")}
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            {t("memberships.title")}
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            {t("memberships.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {memberships.map((membership, index) => (
            <motion.div
              key={membership.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-background rounded-xl p-5 shadow-card border border-border/50 flex flex-col"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 overflow-hidden">
                {membership.logo ? (
                  <img src={membership.logo} alt={membership.name} className="w-full h-full object-contain p-2" />
                ) : (
                  <Users className="w-8 h-8 text-primary" />
                )}
              </div>
              
              <h3 className="font-display text-base font-bold text-foreground mb-1">
                {membership.shortName}
              </h3>
              <p className="text-muted-foreground text-xs mb-3 flex-grow">
                {membership.description}
              </p>
              
              <Button variant="outline" size="sm" asChild className="w-full mt-auto">
                <a href={membership.website} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {t("memberships.visitWebsite")}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
