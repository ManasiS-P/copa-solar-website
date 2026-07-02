import energywallSystem from "@/assets/energywall-system.jpeg";

const TechSpecs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-outfit font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Technical Specifications
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-foreground">
            Engineering Excellence
          </h2>
          <p className="text-muted-foreground font-outfit mt-4 max-w-2xl mx-auto">
            Precision-engineered components delivering exceptional thermal performance
            with industry-leading durability.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl group-hover:bg-primary/30 transition-colors" />
            <img 
              src={energywallSystem} 
              alt="EnergyWall thermal system with integrated heat exchange tubing"
              className="relative rounded-2xl shadow-lg w-full object-cover aspect-[3/4]"
            />
          </div>
          
          {/* Specs */}
          <div className="space-y-8">
            <SpecCard 
              title="Dekton® Ultra-Compact Surface"
              subtitle="Premium architectural finish"
              specs={[
                { label: "Format Options", value: "Up to 3200 × 1440 mm" },
                { label: "Thickness Range", value: "8, 12, 20, 30 mm" },
                { label: "Density", value: "2,500 - 2,610 kg/m³" },
                { label: "Service Life", value: "60 years" },
                { label: "Chemical Composition", value: "100% Inorganic" },
                { label: "Manufacturing Energy", value: "100% Renewable" }
              ]}
            />
            
            <SpecCard 
              title="Copa Solar Radiant Panel"
              subtitle="High-efficiency heat transfer"
              specs={[
                { label: "Radiant Power", value: "Up to 960 W/m²" },
                { label: "Cooling Capacity", value: "Up to 120 W/m²" },
                { label: "Operating Pressure", value: "Up to 6 bar" },
                { label: "Temperature Range", value: "+15°C to +55°C" },
                { label: "Material", value: "100% Aluminium" },
                { label: "Connection", value: "Standard fittings" }
              ]}
            />
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <HighlightStat value="21-43" unit="mm" label="Total Thickness" />
              <HighlightStat value="0.25-3.18" unit="m²" label="Panel Size Range" />
              <HighlightStat value="3-5" unit="yr" label="Payback Period" />
              <HighlightStat value="25" unit="yr" label="Full Warranty" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SpecCard = ({ 
  title, 
  subtitle, 
  specs 
}: { 
  title: string; 
  subtitle: string; 
  specs: { label: string; value: string }[] 
}) => (
  <div className="p-6 rounded-xl bg-card border border-border">
    <h3 className="font-playfair text-xl text-foreground">{title}</h3>
    <p className="text-primary font-outfit text-sm mb-4">{subtitle}</p>
    <div className="grid grid-cols-1 gap-3">
      {specs.map((spec, i) => (
        <div key={i} className="flex justify-between items-baseline text-sm">
          <span className="text-muted-foreground font-outfit">{spec.label}</span>
          <span className="text-foreground font-outfit font-medium">{spec.value}</span>
        </div>
      ))}
    </div>
  </div>
);

const HighlightStat = ({ value, unit, label }: { value: string; unit: string; label: string }) => (
  <div className="text-center p-4 rounded-lg bg-secondary/50">
    <div className="text-primary font-playfair text-2xl">
      {value}
      <span className="text-sm text-primary/70">{unit}</span>
    </div>
    <div className="text-muted-foreground font-outfit text-xs mt-1">{label}</div>
  </div>
);

export default TechSpecs;
