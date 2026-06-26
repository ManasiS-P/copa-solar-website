import pvtHeroImage from "@/assets/pvt-hero.jpg";
import copaLogo from "@/assets/copa-logo-gray.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen copa-gradient-hero overflow-hidden">
      {/* Decorative diagonal element */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -right-1/4 -top-1/4 w-3/4 h-3/4 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-8 py-12 relative z-10">
        {/* Copa Solar Logo */}
        <div className="mb-12">
          <img 
            src={copaLogo} 
            alt="Copa Solar" 
            className="h-12 md:h-16 w-auto"
          />
        </div>

        {/* Main title */}
        <div className="max-w-2xl pt-8 md:pt-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white animate-fade-in copa-heading">
            PVT Panel
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/80 animate-fade-in mb-8" style={{ animationDelay: '0.2s' }}>
            The hybrid solar solution for electricity and thermal energy
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3">
              <span className="text-accent font-semibold text-lg">6x</span>
              <span className="text-white/90 ml-2">more energy per m²</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3">
              <span className="text-accent font-semibold text-lg">25</span>
              <span className="text-white/90 ml-2">year warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero image positioned like the reference */}
      <div 
        className="absolute right-0 top-1/4 w-3/5 max-w-3xl aspect-[4/3] animate-scale-in"
        style={{ animationDelay: '0.3s' }}
      >
        <div className="absolute inset-0 rounded-l-2xl overflow-hidden copa-shadow-elevated">
          <img 
            src={pvtHeroImage} 
            alt="PVT Solar Panels at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent" />
        </div>
      </div>

      {/* Bottom brand mark */}
      <div className="absolute bottom-8 left-8 flex items-center gap-4">
        <div className="w-12 h-px bg-white/40" />
        <span className="text-sm tracking-widest text-white/60 uppercase font-medium">
          Hybrid Solar Technology
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
