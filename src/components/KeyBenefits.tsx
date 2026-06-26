import { Sun, Thermometer, VolumeX, Leaf, ShieldCheck, Recycle } from "lucide-react";

const benefits = [
  {
    icon: Sun,
    title: "Solar Thermal Power",
    description: "1,400 W/m² peak power generation from solar irradiation, plus 200 W/m² radiative cooling at night.",
  },
  {
    icon: VolumeX,
    title: "Silent Operation",
    description: "Zero moving parts means completely silent energy generation with no operational maintenance required.",
  },
  {
    icon: Thermometer,
    title: "Heating & Cooling",
    description: "Dual functionality provides thermal energy for heating, hot water, and reduces cooling demand by over 40%.",
  },
  {
    icon: Leaf,
    title: "Carbon Negative",
    description: "100% fossil-free energy production with verified EPD & LCA. Net negative carbon footprint over service life.",
  },
  {
    icon: ShieldCheck,
    title: "25-Year Warranty",
    description: "Premium durability with Dekton® 60-year design life and Copa Thermal's comprehensive 25-year warranty coverage.",
  },
  {
    icon: Recycle,
    title: "Fully Recyclable",
    description: "100% recyclable materials with no rare earth metals. 96% aluminium recycling rate at end-of-life.",
  },
];

const KeyBenefits = () => {
  return (
    <section className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Why +Energy Façade
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
            Revolutionary Sustainable Energy
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our integrated system combines Copa Thermal's thermal absorber technology with 
            Cosentino's Dekton® ultra-compact surfaces for unmatched performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;