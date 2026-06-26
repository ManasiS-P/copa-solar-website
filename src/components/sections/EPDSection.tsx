import { useTranslation } from "react-i18next";
import { FileCheck, Scale, Leaf } from "lucide-react";

const EPDSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent font-medium tracking-wider uppercase text-sm">
                {t("epd.label")}
              </span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-6">
              {t("epd.title")}
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t("epd.description")}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border/50">
                <div className="feature-icon">
                  <FileCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t("epd.epdNumber")}</div>
                  <div className="text-muted-foreground">HUB-1392</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border/50">
                <div className="feature-icon">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t("epd.declaredUnit")}</div>
                  <div className="text-muted-foreground">{t("epd.declaredUnitValue")}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border/50">
                <div className="feature-icon">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t("epd.gwp")}</div>
                  <div className="text-muted-foreground">{t("epd.gwpValue")}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right EPD Card */}
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-[var(--shadow-card)]">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 text-success mb-4">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                Copa Solar AB
              </h3>
              <p className="text-muted-foreground">{t("epd.product")}</p>
            </div>

            <div className="bg-secondary rounded-xl p-6 mb-6">
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-1">{t("epd.co2Footprint")}</div>
                <div className="text-4xl font-bold text-foreground mb-1">21.14</div>
                <div className="text-muted-foreground">kg CO₂e per m²</div>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-border/50">
                <span className="text-muted-foreground">{t("epd.published")}</span>
                <span className="text-foreground font-medium">2024-05-17</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border/50">
                <span className="text-muted-foreground">{t("epd.validUntil")}</span>
                <span className="text-foreground font-medium">2029-05-17</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border/50">
                <span className="text-muted-foreground">{t("epd.standard")}</span>
                <span className="text-foreground font-medium">EN 15804+A2 & ISO 14025</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">{t("epd.createdWith")}</span>
                <span className="text-foreground font-medium">One Click LCA</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <span className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-muted-foreground">
                ISO 9001
              </span>
              <span className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-muted-foreground">
                ISO 14001
              </span>
              <span className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-muted-foreground">
                EPD Hub
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EPDSection;
