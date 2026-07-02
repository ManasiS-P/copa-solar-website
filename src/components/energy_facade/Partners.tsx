const partners = [
  {
    name: "Copa Thermal AB",
    role: "Thermal Technology",
    location: "Rosersberg, Sweden",
    description:
      "Swedish company specializing in solar energy products and green energy systems. Years of experience as OEM supplier and energy consultant.",
    contact: {
      address: "Stålgatan 15A, 195 72 Rosersberg",
      phone: "+46 708 22 17 20",
      email: "info@copathermal.com",
      web: "www.copathermal.com",
    },
  },
  {
    name: "Cosentino Group",
    role: "Dekton® Surfaces",
    location: "Göteborg, Sweden",
    description:
      "Global, family-owned Spanish company manufacturing innovative, sustainable surface materials for architecture. Dekton is carbon-neutral.",
    contact: {
      address: "Lärjeågatan 6, 415 02 Göteborg",
      phone: "+46 31 78 78 980",
      email: "customerservice.se@cosentino.com",
      web: "www.cosentino.com",
    },
  },
  {
    name: "SFS Group Sweden AB",
    role: "Fastening Solutions",
    location: "Strängnäs, Sweden",
    description:
      "Specialist for fastening solutions in the building envelope. Inventor of the first rust-free self-drilling screw over 30 years ago.",
    contact: {
      address: "Olivehällsvägen 10, 645 42 Strängnäs",
      phone: "+46 152 71 50 10",
      email: "info.se@sfs.com",
      web: "www.sfs.com",
    },
  },
];

const Partners = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Our Partners
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
            Industry Leaders United
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Three European companies combining expertise in thermal technology,
            premium surfaces, and precision engineering.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className="mb-6">
                <p className="text-sm text-accent font-medium mb-1">
                  {partner.role}
                </p>
                <h3 className="text-2xl font-semibold text-foreground">
                  {partner.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {partner.location}
                </p>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {partner.description}
              </p>

              <div className="pt-6 border-t border-border space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Address:</span>{" "}
                  {partner.contact.address}
                </p>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Phone:</span>{" "}
                  {partner.contact.phone}
                </p>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Email:</span>{" "}
                  {partner.contact.email}
                </p>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Web:</span>{" "}
                  {partner.contact.web}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
