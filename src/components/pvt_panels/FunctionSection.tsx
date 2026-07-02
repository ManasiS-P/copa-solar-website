import { motion } from "framer-motion";

const FunctionSection = () => {
  const benefits = [
    {
      icon: "☀️",
      title: "Harvest Built-up Heat",
      description: "Capture the thermal energy from PV solar panels exposed to the sun that would otherwise be wasted"
    },
    {
      icon: "⚡",
      title: "Maximize Energy Production",
      description: "Generate both photovoltaic and solar thermal energy simultaneously from the same surface area"
    },
    {
      icon: "🔄",
      title: "Repower Solar Installations",
      description: "Retrofit existing rooftop solar installations with thermal harvesting capability"
    },
    {
      icon: "🏘️",
      title: "District Heating Integration",
      description: "Provide district heating systems with both thermal and electric power"
    },
    {
      icon: "📈",
      title: "6x Power Increase",
      description: "PVT increases the installed power 6 times compared to PV panels alone"
    },
    {
      icon: "❄️",
      title: "Enhanced PV Efficiency",
      description: "The absorber cools the solar panel, increasing electrical power output by up to 15%"
    }
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-8">
        {/* Section header */}
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">
            Function
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6 copa-heading">
            PVT Hybrid Technology
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            PVT (Photovoltaic Thermal) panels combine traditional solar PV technology with our innovative thermal absorber. This hybrid approach harvests energy that conventional solar panels waste as heat, dramatically increasing the total energy yield from your roof space.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-background p-8 rounded-xl border border-border copa-shadow-soft hover:copa-shadow-card hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Technical highlight */}
        <motion.div 
          className="mt-16 copa-gradient-hero rounded-xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-accent mb-2">+600%</p>
              <p className="text-sm text-white/80">Total Energy vs PV Only</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent mb-2">+15%</p>
              <p className="text-sm text-white/80">Electrical Efficiency Boost</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent mb-2">25 yr</p>
              <p className="text-sm text-white/80">Product Warranty</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FunctionSection;
