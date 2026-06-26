import facadeShowroom from "@/assets/facade-showroom.png";
import facadeSubway from "@/assets/facade-subway.jpeg";

const applications = [
  { name: "Residential Buildings", icon: "🏠" },
  { name: "Commercial Real Estate", icon: "🏢" },
  { name: "Community Buildings", icon: "🏛️" },
  { name: "Parking Structures", icon: "🅿️" },
  { name: "District Heating", icon: "🔥" },
  { name: "Transit Infrastructure", icon: "🚇" },
];

const Applications = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Applications
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
            Versatile Integration
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From new construction to retrofit projects, the +Energy Façade seamlessly integrates 
            with any building type while maintaining complete aesthetic integrity.
          </p>
        </div>

        {/* Application Images */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="group relative overflow-hidden rounded-2xl shadow-medium">
            <img
              src={facadeShowroom}
              alt="Energy Facade product display in showroom"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
              <div>
                <p className="text-highlight text-sm font-medium mb-2">Product Showcase</p>
                <h3 className="text-2xl font-semibold text-primary-foreground">BiSTF Thermal Façade System</h3>
                <p className="text-primary-foreground/80 mt-2">Building-integrated solar thermal façade with premium Dekton® finish</p>
              </div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-2xl shadow-medium">
            <img
              src={facadeSubway}
              alt="Energy Facade cooling system in subway station"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
              <div>
                <p className="text-highlight text-sm font-medium mb-2">Infrastructure Application</p>
                <h3 className="text-2xl font-semibold text-primary-foreground">Subway Station Cooling</h3>
                <p className="text-primary-foreground/80 mt-2">Passive radiative cooling for underground transit environments</p>
              </div>
            </div>
          </div>
        </div>

        {/* Application Types */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {applications.map((app) => (
            <div
              key={app.name}
              className="bg-card p-6 rounded-xl text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-3xl mb-3 block">{app.icon}</span>
              <p className="text-sm font-medium text-foreground">{app.name}</p>
            </div>
          ))}
        </div>

        {/* Integration Benefits */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-secondary rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">New Construction</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                Curtain wall integration with structural glazing systems
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                Precast panel factory integration
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                Composite panel and metal systems
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                Natural stone veneer combinations
              </li>
            </ul>
          </div>
          
          <div className="bg-secondary rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Retrofit Projects</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                Existing facade overlay with adhesive mounting
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                EIFS external insulation system integration
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                Complete cladding replacement upgrades
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                Strategic placement for optimal solar exposure
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;