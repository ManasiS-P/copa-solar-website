const certifications = [
  { name: "LEED", description: "Leadership in Energy & Environmental Design" },
  { name: "BREEAM", description: "Building Research Environmental Assessment Method" },
  { name: "DGNB", description: "German Sustainable Building Council" },
  { name: "EPD", description: "Environmental Product Declaration" },
  { name: "ISO 14001", description: "Environmental Management Systems" },
  { name: "ISO 50001", description: "Energy Management" },
];

const Certifications = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-highlight font-medium tracking-widest uppercase text-sm mb-4">
            Certifications & Standards
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
            Globally Recognized
          </h2>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            Full support for the world's leading green building certification programs<br />
            with third-party verified environmental declarations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/10 transition-colors"
            >
              <h3 className="text-xl font-semibold text-highlight mb-2">{cert.name}</h3>
              <p className="text-primary-foreground/70">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* LEED & BREEAM Credits */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-primary-foreground/5 backdrop-blur rounded-2xl p-8 border border-primary-foreground/10">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-highlight/20 flex items-center justify-center text-highlight">L</span>
              LEED v4.1 Contributions
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-primary-foreground">Energy & Atmosphere</p>
                <p className="text-sm text-primary-foreground/60">EA Credit 2: Optimize Energy Performance</p>
                <p className="text-sm text-primary-foreground/60">EA Credit 3: Advanced Energy Metering</p>
              </div>
              <div>
                <p className="font-medium text-primary-foreground">Materials & Resources</p>
                <p className="text-sm text-primary-foreground/60">MR Credit 1: Building Product Disclosure</p>
                <p className="text-sm text-primary-foreground/60">MR Credit 2: Environmental Product Declarations</p>
              </div>
              <div>
                <p className="font-medium text-primary-foreground">Innovation</p>
                <p className="text-sm text-primary-foreground/60">IN Credit 1: Integrated facade thermal system</p>
              </div>
            </div>
          </div>
          
          <div className="bg-primary-foreground/5 backdrop-blur rounded-2xl p-8 border border-primary-foreground/10">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">B</span>
              BREEAM International
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-primary-foreground">Energy Category</p>
                <p className="text-sm text-primary-foreground/60">ENE 01: Energy Efficiency</p>
                <p className="text-sm text-primary-foreground/60">ENE 04: Low Carbon Design</p>
              </div>
              <div>
                <p className="font-medium text-primary-foreground">Materials Category</p>
                <p className="text-sm text-primary-foreground/60">MAT 01: Life Cycle Impacts</p>
                <p className="text-sm text-primary-foreground/60">MAT 02: Environmental Product Declarations</p>
              </div>
              <div>
                <p className="font-medium text-primary-foreground">Innovation</p>
                <p className="text-sm text-primary-foreground/60">INN 01: Innovation credits available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;