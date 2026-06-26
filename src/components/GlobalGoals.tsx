import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

import sdg07 from "@/assets/sdg/sdg-07.jpg";
import sdg08 from "@/assets/sdg/sdg-08.jpg";
import sdg09 from "@/assets/sdg/sdg-09.jpg";
import sdg10 from "@/assets/sdg/sdg-10.jpg";
import sdg11 from "@/assets/sdg/sdg-11.jpg";
import sdg12 from "@/assets/sdg/sdg-12.jpg";
import sdg17 from "@/assets/sdg/sdg-17.jpg";

export const GlobalGoals = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const sdgGoals = [
    { number: 7, icon: sdg07, name: t("globalGoals.sdg7.name"), impact: t("globalGoals.sdg7.impact") },
    { number: 8, icon: sdg08, name: t("globalGoals.sdg8.name"), impact: t("globalGoals.sdg8.impact") },
    { number: 9, icon: sdg09, name: t("globalGoals.sdg9.name"), impact: t("globalGoals.sdg9.impact") },
    { number: 10, icon: sdg10, name: t("globalGoals.sdg10.name"), impact: t("globalGoals.sdg10.impact") },
    { number: 11, icon: sdg11, name: t("globalGoals.sdg11.name"), impact: t("globalGoals.sdg11.impact") },
    { number: 12, icon: sdg12, name: t("globalGoals.sdg12.name"), impact: t("globalGoals.sdg12.impact") },
    { number: 17, icon: sdg17, name: t("globalGoals.sdg17.name"), impact: t("globalGoals.sdg17.impact") },
  ];

  return (
    <section id="global-goals" className="py-8 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center max-w-3xl mx-auto mb-6">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-2">{t("globalGoals.label")}</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">{t("globalGoals.title")}</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">{t("globalGoals.description")}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {sdgGoals.map((goal, index) => (
            <motion.div key={goal.number} initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.05 * index }} className="bg-card rounded-lg overflow-hidden border border-border/50 hover:shadow-card transition-all duration-300 group text-center">
              <div className="p-2">
                <img src={goal.icon} alt={`UN SDG ${goal.number}: ${goal.name}`} className="w-12 h-12 object-cover rounded mx-auto group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="px-2 pb-2">
                <p className="text-xs text-muted-foreground leading-snug">{goal.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }} className="mt-6 text-center">
          <a href="https://sdgs.un.org/goals" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
            {t("globalGoals.learnMore")}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
