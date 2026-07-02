import { Flame, Snowflake, Zap } from "lucide-react";

const Performance = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-outfit font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Energy Performance
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-foreground">
            Measurable Impact
          </h2>
          <p className="text-muted-foreground font-outfit mt-4 max-w-2xl mx-auto">
            Proven energy cost reductions with verified performance data.
            Works efficiently with low-temperature heat sources like heat pumps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <PerformanceStat 
            icon={Flame}
            value=">40%"
            label="Heating Cost Reduction"
          />
          <PerformanceStat 
            icon={Snowflake}
            value=">35%"
            label="Cooling Cost Reduction"
          />
          <PerformanceStat 
            icon={Zap}
            value=">50%"
            label="Peak Load Reduction"
          />
        </div>
        
        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-playfair text-2xl text-foreground text-center mb-8">
            +EnergyWall vs Traditional Systems
          </h3>
          
          <div className="rounded-xl border border-border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-secondary/50">
                  <th className="text-left p-4 font-outfit text-sm text-muted-foreground">Feature</th>
                  <th className="text-center p-4 font-outfit text-sm text-primary">+EnergyWall</th>
                  <th className="text-center p-4 font-outfit text-sm text-muted-foreground">Radiators</th>
                  <th className="text-center p-4 font-outfit text-sm text-muted-foreground">Underfloor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <ComparisonRow 
                  feature="Noise Level"
                  energywall="Silent (0 dB)"
                  radiators="Low"
                  underfloor="Silent"
                />
                <ComparisonRow 
                  feature="Response Time"
                  energywall="15-30 min"
                  radiators="30-60 min"
                  underfloor="2-4 hours"
                />
                <ComparisonRow 
                  feature="Dust Circulation"
                  energywall="None"
                  radiators="High"
                  underfloor="Low"
                />
                <ComparisonRow 
                  feature="Visual Impact"
                  energywall="Premium Finish"
                  radiators="Visible Units"
                  underfloor="Hidden"
                />
                <ComparisonRow 
                  feature="Maintenance"
                  energywall="Zero"
                  radiators="Regular"
                  underfloor="Minimal"
                />
                <ComparisonRow 
                  feature="Cooling Capable"
                  energywall="Yes"
                  radiators="No"
                  underfloor="Limited"
                />
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Bottom Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <FeatureHighlight 
            icon="🔋"
            title="Peak Load Reduction"
            description="Radiant heating reduces conventional energy demand during peak hours"
          />
          <FeatureHighlight 
            icon="🌐"
            title="Heat Pump Compatible"
            description="Optimized for low-temperature systems with flow temps as low as 35°C"
          />
          <FeatureHighlight 
            icon="🛡️"
            title="Energy Resilience"
            description="Improved building energy security with thermal mass storage"
          />
        </div>
      </div>
    </section>
  );
};

const PerformanceStat = ({ 
  icon: Icon, 
  value, 
  label 
}: { 
  icon: typeof Flame; 
  value: string; 
  label: string 
}) => (
  <div className="text-center p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group">
    <Icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
    <div className="text-primary font-playfair text-4xl mb-2">{value}</div>
    <div className="text-muted-foreground font-outfit text-sm">{label}</div>
  </div>
);

const ComparisonRow = ({ 
  feature, 
  energywall, 
  radiators, 
  underfloor 
}: { 
  feature: string; 
  energywall: string; 
  radiators: string; 
  underfloor: string 
}) => (
  <tr className="bg-card hover:bg-secondary/20 transition-colors">
    <td className="p-4 font-outfit text-sm text-foreground">{feature}</td>
    <td className="p-4 font-outfit text-sm text-primary text-center font-medium">{energywall}</td>
    <td className="p-4 font-outfit text-sm text-muted-foreground text-center">{radiators}</td>
    <td className="p-4 font-outfit text-sm text-muted-foreground text-center">{underfloor}</td>
  </tr>
);

const FeatureHighlight = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: string; 
  title: string; 
  description: string 
}) => (
  <div className="flex items-start gap-4 p-6 rounded-xl bg-secondary/30">
    <span className="text-2xl">{icon}</span>
    <div>
      <h4 className="font-playfair text-lg text-foreground mb-1">{title}</h4>
      <p className="text-muted-foreground font-outfit text-sm">{description}</p>
    </div>
  </div>
);

export default Performance;
