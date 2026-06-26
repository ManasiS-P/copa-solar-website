import { useTranslation } from "react-i18next";
import { Building2, Home, Hotel, ParkingCircle, Factory, MapPin } from "lucide-react";

const Applications = () => {
  const { t } = useTranslation();

  const applications = [
    {
      icon: Home,
      title: t("applications.types.residential.title"),
      description: t("applications.types.residential.description")
    },
    {
      icon: Building2,
      title: t("applications.types.commercial.title"),
      description: t("applications.types.commercial.description")
    },
    {
      icon: Hotel,
      title: t("applications.types.hospitality.title"),
      description: t("applications.types.hospitality.description")
    },
    {
      icon: Factory,
      title: t("applications.types.community.title"),
      description: t("applications.types.community.description")
    },
    {
      icon: ParkingCircle,
      title: t("applications.types.parking.title"),
      description: t("applications.types.parking.description")
    },
    {
      icon: MapPin,
      title: t("applications.types.district.title"),
      description: t("applications.types.district.description")
    }
  ];

  const savings = [
    { category: t("applications.economy.hotWater.title"), value: ">30%", description: t("applications.economy.hotWater.description") },
    { category: t("applications.economy.heating.title"), value: ">40%", description: t("applications.economy.heating.description") },
    { category: t("applications.economy.cooling.title"), value: ">35%", description: t("applications.economy.cooling.description") },
    { category: t("applications.economy.coolingDemand.title"), value: ">40%", description: t("applications.economy.coolingDemand.description") }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Applications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent font-medium tracking-wider uppercase text-sm">
                {t("applications.label")}
              </span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-8">
              {t("applications.title")}
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t("applications.description")}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {applications.map((app, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <app.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{app.title}</h3>
                    <p className="text-muted-foreground text-sm">{app.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Economy */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-success" />
              <span className="text-success font-medium tracking-wider uppercase text-sm">
                {t("applications.economy.label")}
              </span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-8">
              {t("applications.economy.title")}
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t("applications.economy.description")}
            </p>

            <div className="space-y-4">
              {savings.map((saving, index) => (
                <div 
                  key={index}
                  className="bg-secondary rounded-xl p-6 border border-border/30"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{saving.category}</h3>
                    <span className="text-2xl font-bold text-success">{saving.value}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{saving.description}</p>
                  <div className="mt-3 h-2 bg-background rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-success to-success/60 rounded-full"
                      style={{ width: saving.value.replace(">", "").replace("%", "") + "%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;
