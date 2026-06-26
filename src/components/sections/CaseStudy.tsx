import { useTranslation } from "react-i18next";
import { TrendingUp, Calendar, Banknote, Leaf, Building2 } from "lucide-react";

const CaseStudy = () => {
  const { t } = useTranslation();

  const projectItems = t("caseStudy.projectSetup.items", { returnObjects: true }) as string[];
  const customerItems = t("caseStudy.customerBackground.items", { returnObjects: true }) as string[];

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-medium tracking-wider uppercase text-sm">
              {t("caseStudy.label")}
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            {t("caseStudy.title")}
          </h2>
          
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto">
            {t("caseStudy.description")}
          </p>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/10">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-6 h-6 text-accent" />
              <h3 className="font-display text-xl font-semibold">{t("caseStudy.projectSetup.title")}</h3>
            </div>
            <ul className="space-y-4 text-primary-foreground/90">
              {projectItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/10">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-accent" />
              <h3 className="font-display text-xl font-semibold">{t("caseStudy.customerBackground.title")}</h3>
            </div>
            <ul className="space-y-4 text-primary-foreground/90">
              {customerItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-accent text-accent-foreground rounded-xl p-6 text-center shadow-[var(--shadow-accent)]">
            <Calendar className="w-8 h-8 mx-auto mb-4 opacity-80" />
            <div className="text-4xl font-bold mb-2">2.0</div>
            <div className="text-sm opacity-80">{t("caseStudy.metrics.roi")}</div>
          </div>
          
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center border border-primary-foreground/10">
            <Banknote className="w-8 h-8 mx-auto mb-4 text-accent" />
            <div className="text-4xl font-bold mb-2">€135k</div>
            <div className="text-sm text-primary-foreground/70">{t("caseStudy.metrics.capex")}</div>
          </div>
          
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center border border-primary-foreground/10">
            <TrendingUp className="w-8 h-8 mx-auto mb-4 text-accent" />
            <div className="text-4xl font-bold mb-2">€1.67M</div>
            <div className="text-sm text-primary-foreground/70">{t("caseStudy.metrics.savings")}</div>
          </div>
          
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center border border-primary-foreground/10">
            <Leaf className="w-8 h-8 mx-auto mb-4 text-accent" />
            <div className="text-4xl font-bold mb-2">39.5</div>
            <div className="text-sm text-primary-foreground/70">{t("caseStudy.metrics.co2")}</div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="text-2xl font-bold text-accent mb-2">€66,600</div>
            <div className="text-primary-foreground/70 text-sm">{t("caseStudy.metrics.yearlySavings")}</div>
          </div>
          <div className="text-center p-6">
            <div className="text-2xl font-bold text-accent mb-2">295 MWh</div>
            <div className="text-primary-foreground/70 text-sm">{t("caseStudy.metrics.cooling")}</div>
          </div>
          <div className="text-center p-6">
            <div className="text-2xl font-bold text-accent mb-2">€2,356</div>
            <div className="text-primary-foreground/70 text-sm">{t("caseStudy.metrics.opex")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
