import facadeExterior from "@/assets/facade-exterior.webp";
import copaLogo from "@/assets/copa-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={facadeExterior}
          alt="Energy Facade on modern building exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
      </div>

      {/* Logo in top left */}
      <div className="absolute top-6 left-6 z-20">
        <a href="https://copa-solar-shine.lovable.app" target="_blank" rel="noopener noreferrer">
          <img src={copaLogo} alt="Copa Thermal" className="h-12 md:h-16 w-auto brightness-0 invert hover:opacity-80 transition-opacity cursor-pointer" />
        </a>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-highlight font-medium tracking-widest uppercase text-sm mb-6 animate-fade-up">
            Copa Thermal × Cosentino Group
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-primary-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            The +Energy
            <span className="block text-highlight">Façade</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up font-light" style={{ animationDelay: '0.2s' }}>
            Revolutionary thermal energy generation integrated into premium architectural surfaces. 
            Silent. Sustainable. Beautiful.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-display text-highlight font-medium">1,400</p>
              <p className="text-sm text-primary-foreground/70 mt-1">W/m² Peak Thermal<br />Power</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-display text-highlight font-medium">80%</p>
              <p className="text-sm text-primary-foreground/70 mt-1">Energy Cost Reduction of<br />Hot Water</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-display text-highlight font-medium">25</p>
              <p className="text-sm text-primary-foreground/70 mt-1">Year Warranty</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-display text-highlight font-medium">100%</p>
              <p className="text-sm text-primary-foreground/70 mt-1">Recyclable</p>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-2.5 bg-highlight rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;