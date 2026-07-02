import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-interior.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-primary font-outfit font-medium tracking-[0.3em] uppercase text-sm mb-6 animate-fade-in">
          Copa Solar × Cosentino Group
        </p>
        
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-normal mb-4">
          <span className="text-foreground">The +Energy</span>
          <br />
          <span className="text-gradient italic">Wall</span>
        </h1>
        
        <p className="text-foreground/80 font-outfit text-lg md:text-xl max-w-2xl mx-auto mt-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Revolutionary indoor climate control integrated into premium architectural surfaces. 
          Silent. Sustainable. Beautiful.
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <StatItem value="960" unit="W/m²" label="Radiant Power" />
          <StatItem value="70%" label="Energy Cost Reduction" />
          <StatItem value="25" label="Year Warranty" />
          <StatItem value="0" unit="dB" label="Silent Operation" />
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-8 h-12 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <ChevronDown className="w-4 h-4 text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ value, unit, label }: { value: string; unit?: string; label: string }) => (
  <div className="text-center">
    <div className="text-primary font-playfair text-3xl md:text-4xl font-normal">
      {value}
      {unit && <span className="text-lg">{unit}</span>}
    </div>
    <div className="text-muted-foreground font-outfit text-sm mt-1">{label}</div>
  </div>
);

export default Hero;
