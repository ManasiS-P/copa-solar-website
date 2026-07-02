import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import copaLogo from "@/assets/copa-solar-logo.png";

export const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = {
    products: [
      {
        name: "+Energy Facade",
        href: "/products/energy-facade",
        isRoute: true,
      },
      {
        name: "PVT Panels",
        href: "/products/pvt-panels",
        isRoute: true,
      },
      { name: "RePvWer", href: "/products", isRoute: true },
      {
        name: "+Energy Terrace",
        href: "/products/energy-terrace",
        isRoute: true,
      },
    ],
    company: [
      { name: t("footer.links.aboutUs"), href: "/#about" },
      { name: t("footer.links.partners"), href: "/partners", isRoute: true },
      { name: t("footer.links.careers"), href: "#" },
      { name: t("footer.links.contact"), href: "/contact", isRoute: true },
    ],
    resources: [
      {
        name: t("footer.links.caseStudies"),
        href: "/case-studies",
        isRoute: true,
      },
      { name: t("footer.links.downloads"), href: "#" },
      { name: t("footer.links.epdCertifications"), href: "#epd" },
      {
        name: t("footer.links.partnerPortal"),
        href: "/partner-with-us",
        isRoute: true,
      },
    ],
  };

  return (
    <footer className="bg-gradient-dark text-primary-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src={copaLogo}
                alt="Copa Solar"
                className="h-[60px] w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed mb-6 max-w-sm">
              {t("footer.description")}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/copa-solar-ab/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/copa-solar-ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Visit our LinkedIn page
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">
              {t("footer.products")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-primary-foreground/60 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-primary-foreground/60 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">
              {t("footer.company")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-primary-foreground/60 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-primary-foreground/60 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">
              {t("footer.resources")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-primary-foreground/60 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-primary-foreground/60 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-primary-foreground/50">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </div>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <a
              href="#"
              className="hover:text-primary-foreground transition-colors"
            >
              {t("footer.privacyPolicy")}
            </a>
            <a
              href="#"
              className="hover:text-primary-foreground transition-colors"
            >
              {t("footer.termsOfService")}
            </a>
            <a
              href="#"
              className="hover:text-primary-foreground transition-colors"
            >
              {t("footer.cookiePolicy")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
