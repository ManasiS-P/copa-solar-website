import { motion } from "framer-motion";

const EPDSection = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - EPD Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">
                Environmental Impact
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6 copa-heading">
                Environmental Product Declaration (EPD)
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Copa Solar's thermal absorber has been certified with a verified Environmental Product Declaration, developed together with One Click LCA and registered on EPD Hub.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📋</span>
                </div>
                <div>
                  <p className="font-semibold">EPD number: HUB-1392</p>
                  <p className="text-muted-foreground">In accordance with EN 15804+A2 & ISO 14025 / ISO 21930</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🏭</span>
                </div>
                <div>
                  <p className="font-semibold">Product: Retrofit Thermal Absorber</p>
                  <p className="text-muted-foreground">Published: 2024-05-17 • Valid until: 2029-05-17</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - CO2 Stats */}
          <motion.div 
            className="bg-background rounded-xl p-10 copa-shadow-card border border-border"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-light mb-8">CO₂ Footprint</h3>

            <div className="space-y-8">
              <div className="flex items-center justify-between pb-6 border-b border-border">
                <span className="text-muted-foreground">Declared unit</span>
                <span className="font-semibold">1 m² of Thermal Absorber</span>
              </div>

              <div className="flex items-center justify-between pb-6 border-b border-border">
                <span className="text-muted-foreground">Mass unit</span>
                <span className="font-semibold">2.48 kg</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">GWP-fossil, A1-A3</span>
                <span className="font-semibold text-primary text-2xl">21.14 kg CO₂e</span>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                  ISO 9001
                </div>
                <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                  EPD Verified
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EPDSection;
