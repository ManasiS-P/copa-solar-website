import { MapPin, Phone, Mail, Globe } from "lucide-react";

const partners = [
  {
    category: "Thermal Technology",
    name: "Copa Solar AB",
    location: "Rosersberg, Sweden",
    description: "Swedish company specializing in solar energy products and green energy systems. Years of experience as OEM supplier and energy consultant.",
    address: "Stålgatan 15A, 195 72 Rosersberg",
    phone: "+46 708 22 17 20",
    email: "info@copathermal.com",
    website: "www.copathermal.com"
  },
  {
    category: "Dekton® Surfaces",
    name: "Cosentino Group",
    location: "Göteborg, Sweden",
    description: "Global, family-owned Spanish company manufacturing innovative, sustainable surface materials for architecture. Dekton is carbon-neutral.",
    address: "Lärjeågatan 6, 415 02 Göteborg",
    phone: "+46 31 78 78 980",
    email: "customerservice.se@cosentino.com",
    website: "www.cosentino.com"
  },
  {
    category: "Fastening Solutions",
    name: "SFS Group Sweden AB",
    location: "Strängnäs, Sweden",
    description: "Specialist for fastening solutions in the building envelope. Inventor of the first rust-free self-drilling screw over 30 years ago.",
    address: "Olivehällsvägen 10, 645 42 Strängnäs",
    phone: "+46 152 71 50 10",
    email: "info.se@sfs.com",
    website: "www.sfs.com"
  }
];

const Partners = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-outfit font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Our Partners
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-foreground">
            Industry Leaders United
          </h2>
          <p className="text-muted-foreground font-outfit mt-4 max-w-2xl mx-auto">
            Three European companies combining expertise in thermal technology, 
            premium surfaces, and precision engineering.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, i) => (
            <PartnerCard key={i} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PartnerCard = ({
  category,
  name,
  location,
  description,
  address,
  phone,
  email,
  website
}: typeof partners[0]) => (
  <div className="p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group">
    <p className="text-primary font-outfit text-sm font-medium mb-2">{category}</p>
    <h3 className="font-playfair text-2xl text-foreground mb-1">{name}</h3>
    <p className="text-muted-foreground font-outfit text-sm mb-4">{location}</p>
    <p className="text-muted-foreground font-outfit text-sm leading-relaxed mb-6">{description}</p>
    
    <div className="space-y-3 text-sm">
      <ContactItem icon={MapPin} text={address} />
      <ContactItem icon={Phone} text={phone} />
      <ContactItem icon={Mail} text={email} />
      <ContactItem icon={Globe} text={website} />
    </div>
  </div>
);

const ContactItem = ({ icon: Icon, text }: { icon: typeof MapPin; text: string }) => (
  <div className="flex items-start gap-3">
    <Icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
    <span className="text-muted-foreground font-outfit">{text}</span>
  </div>
);

export default Partners;
