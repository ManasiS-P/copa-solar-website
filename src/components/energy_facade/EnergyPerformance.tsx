const EnergyPerformance = () => {
  return (
    <section className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Energy Performance
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
            Measurable Impact
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Proven energy cost reductions with verified performance data across multiple climate zones.
          </p>
        </div>

        {/* Cost Reduction Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-medium transition-all">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="text-2xl">💧</span>
            </div>
            <p className="text-4xl font-display text-accent font-medium mb-2">&gt;30%</p>
            <p className="text-foreground font-medium">Hot Water</p>
            <p className="text-sm text-muted-foreground mt-1">Cost Reduction</p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-medium transition-all">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="text-2xl">🔥</span>
            </div>
            <p className="text-4xl font-display text-accent font-medium mb-2">&gt;40%</p>
            <p className="text-foreground font-medium">Space Heating</p>
            <p className="text-sm text-muted-foreground mt-1">Cost Reduction</p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-medium transition-all">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="text-2xl">❄️</span>
            </div>
            <p className="text-4xl font-display text-accent font-medium mb-2">&gt;35%</p>
            <p className="text-foreground font-medium">Space Cooling</p>
            <p className="text-sm text-muted-foreground mt-1">Cost Reduction</p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-medium transition-all">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-highlight/20 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <p className="text-4xl font-display text-highlight font-medium mb-2">&gt;40%</p>
            <p className="text-foreground font-medium">Cooling Demand</p>
            <p className="text-sm text-muted-foreground mt-1">Reduction</p>
          </div>
        </div>

        {/* Annual Yield Comparison */}
        <div className="bg-card rounded-2xl p-8 shadow-medium">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Annual Thermal Yield by Location
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="font-medium text-foreground">Stockholm, Sweden</p>
                  <p className="text-sm text-muted-foreground">59.3°N Latitude</p>
                </div>
                <p className="text-2xl font-display text-accent font-medium">1,480 kWh/m²</p>
              </div>
              <div className="h-4 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-accent rounded-full" style={{ width: '89%' }} />
              </div>
            </div>
            
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="font-medium text-foreground">Würzburg, Germany</p>
                  <p className="text-sm text-muted-foreground">49.8°N Latitude</p>
                </div>
                <p className="text-2xl font-display text-highlight font-medium">1,660 kWh/m²</p>
              </div>
              <div className="h-4 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-highlight rounded-full" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-8">
            Based on mean thermal fluid temperature of 5°C
          </p>
        </div>

        {/* System Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
              <span className="text-2xl">🔋</span>
            </div>
            <h4 className="font-semibold text-foreground mb-2">Peak Load Reduction</h4>
            <p className="text-sm text-muted-foreground">Thermal generation reduces conventional energy demand<br />during peak hours</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
              <span className="text-2xl">🌐</span>
            </div>
            <h4 className="font-semibold text-foreground mb-2">Grid Independence</h4>
            <p className="text-sm text-muted-foreground">Reduced reliance on utility thermal energy<br />with on-site generation</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
              <span className="text-2xl">🛡️</span>
            </div>
            <h4 className="font-semibold text-foreground mb-2">Energy Resilience</h4>
            <p className="text-sm text-muted-foreground">Improved building energy security<br />with thermal storage integration</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergyPerformance;