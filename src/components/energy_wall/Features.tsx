import { 
  Thermometer, 
  Volume2, 
  Snowflake, 
  Leaf, 
  Shield, 
  Recycle 
} from "lucide-react";

const features = [
  {
    icon: Thermometer,
    title: "Radiant Climate",
    description: "600 W/m² heating capacity with even heat distribution. Comfortable radiant warmth like natural sunlight."
  },
  {
    icon: Volume2,
    title: "Silent Operation",
    description: "Zero moving parts means completely silent climate control. No fans, no noise, just comfort."
  },
  {
    icon: Snowflake,
    title: "Heating & Cooling",
    description: "Dual functionality provides efficient heating in winter and cooling in summer from the same elegant panels."
  },
  {
    icon: Leaf,
    title: "Carbon Negative",
    description: "100% fossil-free operation with verified EPD & LCA. Net negative carbon footprint over service life."
  },
  {
    icon: Shield,
    title: "25-Year Warranty",
    description: "Premium durability with Dekton® 60-year design life and Copa Solar's comprehensive warranty coverage."
  },
  {
    icon: Recycle,
    title: "Fully Recyclable",
    description: "100% recyclable materials with no rare earth metals. 96% aluminium recycling rate at end-of-life."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Subtle glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-outfit font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Why +EnergyWall
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-foreground">
            Revolutionary Indoor Climate
          </h2>
          <p className="text-muted-foreground font-outfit mt-4 max-w-2xl mx-auto">
            Our integrated system combines Copa Solar's radiant technology with Cosentino's 
            Dekton® ultra-compact surfaces for unmatched indoor comfort.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  index 
}: { 
  icon: typeof Thermometer; 
  title: string; 
  description: string;
  index: number;
}) => (
  <div 
    className="group p-8 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-glow"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="font-playfair text-xl text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground font-outfit text-sm leading-relaxed">{description}</p>
  </div>
);

export default Features;
