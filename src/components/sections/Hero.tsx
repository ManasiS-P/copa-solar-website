import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-terrace.png";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-end pb-16 md:pb-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Copa Solar +Energy Terrace - Heated terrace with solar absorber system"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide section-padding pt-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-medium tracking-wider uppercase text-sm">
              {t("hero.company")}
            </span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground font-semibold leading-tight mb-6">
            {t("hero.title")}
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed max-w-2xl mb-8">
            {t("hero.description")}
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg px-5 py-3">
              <span className="text-accent font-semibold text-xl">1,400</span>
              <span className="text-primary-foreground/70 text-sm ml-2">{t("hero.peakPower")}</span>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg px-5 py-3">
              <span className="text-accent font-semibold text-xl">100%</span>
              <span className="text-primary-foreground/70 text-sm ml-2">{t("hero.fossilFree")}</span>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg px-5 py-3">
              <span className="text-accent font-semibold text-xl">25</span>
              <span className="text-primary-foreground/70 text-sm ml-2">{t("hero.warranty")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
