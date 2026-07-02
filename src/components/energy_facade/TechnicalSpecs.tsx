const TechnicalSpecs = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-highlight font-medium tracking-widest uppercase text-sm mb-4">
            Technical Specifications
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
            Engineering Excellence
          </h2>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            Precision-engineered components delivering exceptional thermal performance<br />
            with industry-leading durability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Dekton Surface Specs */}
          <div className="bg-primary-foreground/5 backdrop-blur rounded-2xl p-8 border border-primary-foreground/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-3 h-12 bg-highlight rounded-full" />
              <div>
                <h3 className="text-2xl font-semibold">Dekton® Ultra-Compact Surface</h3>
                <p className="text-primary-foreground/60">Premium architectural facade</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-primary-foreground/10">
                <span className="text-primary-foreground/70">Format Options</span>
                <span className="font-medium">Up to 3200 × 1440 mm</span>
              </div>
              <div className="flex justify-between py-3 border-b border-primary-foreground/10">
                <span className="text-primary-foreground/70">Thickness Range</span>
                <span className="font-medium">8, 12, 20, 30 mm</span>
              </div>
              <div className="flex justify-between py-3 border-b border-primary-foreground/10">
                <span className="text-primary-foreground/70">Density</span>
                <span className="font-medium">2,500 - 2,610 kg/m³</span>
              </div>
              <div className="flex justify-between py-3 border-b border-primary-foreground/10">
                <span className="text-primary-foreground/70">Service Life</span>
                <span className="font-medium">60 years</span>
              </div>
              <div className="flex justify-between py-3 border-b border-primary-foreground/10">
                <span className="text-primary-foreground/70">Chemical Composition</span>
                <span className="font-medium">100% Inorganic</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-primary-foreground/70">Manufacturing Energy</span>
                <span className="font-medium">100% Renewable</span>
              </div>
            </div>
          </div>

          {/* Thermal Absorber Specs */}
          <div className="bg-primary-foreground/5 backdrop-blur rounded-2xl p-8 border border-primary-foreground/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-3 h-12 bg-accent rounded-full" />
              <div>
                <h3 className="text-2xl font-semibold">Copa Thermal Absorber</h3>
                <p className="text-primary-foreground/60">High-efficiency heat transfer</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-primary-foreground/10">
                <span className="text-primary-foreground/70">Peak Thermal Power</span>
                <span className="font-medium">1,400 W/m²</span>
              </div>
              <div className="flex justify-between py-3 border-b border-primary-foreground/10">
                <span className="text-primary-foreground/70">Radiative Cooling</span>
                <span className="font-medium">200 W/m²</span>
              </div>
              <div className="flex justify-between py-3 border-b border-primary-foreground/10">
                <span className="text-primary-foreground/70">Annual Yield (Stockholm)</span>
                <span className="font-medium">1,480 kWh/m²</span>
              </div>
              <div className="flex justify-between py-3 border-b border-primary-foreground/10">
                <span className="text-primary-foreground/70">Operating Pressure</span>
                <span className="font-medium">Up to 6 bar</span>
              </div>
              <div className="flex justify-between py-3 border-b border-primary-foreground/10">
                <span className="text-primary-foreground/70">Temperature Range</span>
                <span className="font-medium">-25°C to +150°C</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-primary-foreground/70">Material</span>
                <span className="font-medium">100% Aluminium</span>
              </div>
            </div>
          </div>
        </div>

        {/* Combined System */}
        <div className="mt-12 bg-accent/20 rounded-2xl p-8 border border-accent/30">
          <h3 className="text-2xl font-semibold mb-6 text-center">Combined +Energy Façade System</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-display text-highlight font-medium">21-43</p>
              <p className="text-sm text-primary-foreground/70 mt-2">mm Total Thickness</p>
            </div>
            <div>
              <p className="text-4xl font-display text-highlight font-medium">0.25-4.6</p>
              <p className="text-sm text-primary-foreground/70 mt-2">m² Absorber Size Range</p>
            </div>
            <div>
              <p className="text-4xl font-display text-highlight font-medium">3-5</p>
              <p className="text-sm text-primary-foreground/70 mt-2">Year Payback Period</p>
            </div>
            <div>
              <p className="text-4xl font-display text-highlight font-medium">25</p>
              <p className="text-sm text-primary-foreground/70 mt-2">Year Full Warranty</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;