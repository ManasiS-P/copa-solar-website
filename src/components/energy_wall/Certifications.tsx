const certifications = [
  { name: "LEED", description: "Leadership in Energy & Environmental Design", certified: false },
  { name: "BREEAM", description: "Building Research Establishment Environmental Assessment Method", certified: false },
  { name: "DGNB", description: "German Sustainable Building Council", certified: false },
  { name: "EPD", description: "Environmental Product Declaration", certified: false },
  { name: "ISO 14001", description: "Environmental Management Systems", certified: true },
  { name: "ISO 50001", description: "Energy Management", certified: true }
];

const leedContributions = [
  { category: "Energy & Atmosphere", items: ["EA Credit 2: Optimize Energy Performance", "EA Credit 3: Advanced Energy Metering"] },
  { category: "Materials & Resources", items: ["MR Credit 1: Building Product Disclosure", "MR Credit 2: Environmental Product Declarations"] },
  { category: "Innovation", items: ["IN Credit 1: Integrated radiant wall system"] }
];

const breeamContributions = [
  { category: "Energy Category", items: ["ENE 01: Energy Efficiency", "ENE 04: Low Carbon Design"] },
  { category: "Materials Category", items: ["MAT 01: Life Cycle Impacts", "MAT 02: Environmental Product Declarations"] },
  { category: "Innovation", items: ["INN 01: Innovation credits available"] }
];

const Certifications = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-outfit font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Certifications & Standards
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-foreground">
            Globally Recognized
          </h2>
          <p className="text-muted-foreground font-outfit mt-4 max-w-2xl mx-auto">
            Full support for the world's leading green building certification programs
            with third-party verified environmental declarations.
          </p>
        </div>
        
        {/* Certification Badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {certifications.map((cert, i) => (
            <div 
              key={i}
              className={`p-6 rounded-xl border transition-all text-center group relative ${
                cert.certified 
                  ? "bg-primary/10 border-primary/50 hover:border-primary" 
                  : "bg-secondary/30 border-border hover:border-primary/30"
              }`}
            >
              {cert.certified && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-outfit font-semibold px-2 py-0.5 rounded-full">
                  IN COMPLIANCE
                </span>
              )}
              <h3 className="font-playfair text-xl text-primary group-hover:scale-105 transition-transform">
                {cert.name}
              </h3>
              <p className="text-muted-foreground font-outfit text-xs mt-2 leading-tight">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Detailed Contributions */}
        <div className="grid md:grid-cols-2 gap-8">
          <ContributionCard title="LEED v4.1 Contributions" contributions={leedContributions} />
          <ContributionCard title="BREEAM International" contributions={breeamContributions} />
        </div>
      </div>
    </section>
  );
};

const ContributionCard = ({ 
  title, 
  contributions 
}: { 
  title: string; 
  contributions: { category: string; items: string[] }[] 
}) => (
  <div className="p-8 rounded-xl bg-background border border-border">
    <h3 className="font-playfair text-2xl text-foreground mb-6">{title}</h3>
    <div className="space-y-6">
      {contributions.map((section, i) => (
        <div key={i}>
          <h4 className="text-primary font-outfit text-sm font-medium mb-2">{section.category}</h4>
          <ul className="space-y-2">
            {section.items.map((item, j) => (
              <li key={j} className="flex items-center gap-2 text-muted-foreground font-outfit text-sm">
                <span className="w-1 h-1 rounded-full bg-primary/50" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Certifications;
