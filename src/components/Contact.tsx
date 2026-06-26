import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail, ArrowRight, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const locations = [
    {
      region: t("contact.locations.usa"),
      company: "Copa Solar US Inc",
      address: "1216 Broadway",
      city: "New York, NY 10001",
      phone: "+1 (332) 268-7215",
      whatsapp: "+13322687215",
      email: "info@copaus.com",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t("contact.form.successTitle"),
      description: t("contact.form.successMessage"),
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-8 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-2">
              {t("contact.label")}
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              {t("contact.title")}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {t("contact.description")}
            </p>

            {/* Locations */}
            <div className="space-y-4 mb-4">
              {locations.map((location, index) => (
                <motion.div
                  key={location.region}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="bg-card rounded-lg p-4 border border-border/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-2">
                        {location.region}
                      </h3>
                      {'company' in location && location.company && (
                        <p className="text-sm font-medium text-foreground mb-1">
                          {location.company}
                        </p>
                      )}
                      <p className="text-sm text-muted-foreground mb-1">
                        {location.address}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        {location.city}
                      </p>
                      {location.phone && (
                        <a
                          href={`tel:${location.phone}`}
                          className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          {location.phone}
                        </a>
                      )}
                      {'whatsapp' in location && location.whatsapp && (
                        <a
                          href={`https://wa.me/${location.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors mt-1"
                        >
                          <MessageCircle className="w-4 h-4" />
                          WhatsApp: {location.phone}
                        </a>
                      )}
                      <a
                        href={`mailto:${location.email}`}
                        className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors mt-1"
                      >
                        <Mail className="w-4 h-4" />
                        {location.email}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="solar" className="group">
              {t("contact.visitWebsite")}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-card rounded-xl border border-border/50 p-5">
              <h3 className="font-display text-lg font-bold text-foreground mb-4">
                {t("contact.form.title")}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.name")} *
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder={t("contact.form.namePlaceholder")}
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.email")} *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder={t("contact.form.emailPlaceholder")}
                      className="bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.company")}
                  </label>
                  <Input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder={t("contact.form.companyPlaceholder")}
                    className="bg-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.message")} *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder={t("contact.form.messagePlaceholder")}
                    rows={5}
                    className="bg-background resize-none"
                  />
                </div>

                <Button type="submit" variant="solar" className="w-full group">
                  {t("contact.form.submit")}
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
