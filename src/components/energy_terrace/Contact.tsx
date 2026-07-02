import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import copaSolarLogo from "@/assets/copa-logo.png";

const Contact = () => {
  const { t } = useTranslation("terrace");
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-medium tracking-wider uppercase text-sm">
              {t("contact.label")}
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-semibold mb-6">
            {t("contact.title")}
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-[var(--shadow-card)]">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Company Info */}
              <div>
                <img
                  src={copaSolarLogo}
                  alt="Copa Solar"
                  className="h-16 w-auto mb-6"
                />
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                  {t("contact.companyName")}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  {t("contact.companyDescription")}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-foreground font-medium">
                        {t("contact.address")}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        Stålgatan 15A, 195 72 Rosersberg, Sweden
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-foreground font-medium">
                        {t("contact.phone")}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        +46 708 22 17 20
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-foreground font-medium">
                        {t("contact.email")}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        info@copasolar.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-foreground font-medium">
                        {t("contact.website")}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        www.copasolar.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-secondary rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-6">
                  {t("contact.certifications")}
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-card rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-success" />
                    <span className="text-foreground text-sm">
                      {t("contact.iso9001")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-card rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-success" />
                    <span className="text-foreground text-sm">
                      {t("contact.iso14001")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-card rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-success" />
                    <span className="text-foreground text-sm">
                      {t("contact.epdCert")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-card rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-success" />
                    <span className="text-foreground text-sm">
                      {t("contact.germanManufacturing")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-card rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-success" />
                    <span className="text-foreground text-sm">
                      {t("contact.yearWarranty")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer tagline */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground text-sm">
            Version 2.3 • Copa Solar AB © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
