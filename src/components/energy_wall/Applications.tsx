import { Home, Building2, Hotel, Stethoscope, GraduationCap, Dumbbell, Download } from "lucide-react";
import officeImage from "@/assets/office-interior.webp";
import bathroomImage from "@/assets/bathroom-interior.webp";
import installationImage from "@/assets/energywall-installation.jpeg";

const applications = [
  { icon: Home, label: "Residential Homes" },
  { icon: Building2, label: "Commercial Offices" },
  { icon: Hotel, label: "Hotels & Hospitality" },
  { icon: Stethoscope, label: "Healthcare Facilities" },
  { icon: GraduationCap, label: "Educational Spaces" },
  { icon: Dumbbell, label: "Wellness & Spa" }
];

const Applications = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-outfit font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Applications
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-foreground">
            Versatile Integration
          </h2>
          <p className="text-muted-foreground font-outfit mt-4 max-w-2xl mx-auto">
            From luxury residences to commercial spaces, the +EnergyWall seamlessly 
            replaces traditional radiators while maintaining complete aesthetic integrity.
          </p>
        </div>
        
        {/* Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <GalleryCard 
            image={officeImage}
            category="Commercial Application"
            title="Premium Office Climate"
            description="Silent radiant heating for productive work environments"
          />
          <GalleryCard 
            image={bathroomImage}
            category="Residential Application"
            title="Luxury Bathroom Heating"
            description="Spa-like comfort with elegant stone surfaces"
          />
          <GalleryCard 
            image={installationImage}
            category="Installation"
            title="Modular Panel System"
            description="Easy installation with standard plumbing connections"
          />
        </div>
        
        {/* Application Icons */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {applications.map((app, i) => (
            <div 
              key={i}
              className="flex flex-col items-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
            >
              <app.icon className="w-8 h-8 text-primary mb-2" />
              <span className="text-foreground font-outfit text-sm text-center">{app.label}</span>
            </div>
          ))}
        </div>
        
        {/* Benefits Lists */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <BenefitsList 
            title="Replaces Traditional Systems"
            items={[
              "Conventional radiators and convectors",
              "Underfloor heating systems",
              "Ceiling-mounted cooling panels",
              "Wall-mounted fan coil units"
            ]}
          />
          <BenefitsList 
            title="Key Advantages"
            items={[
              "No visible heating equipment",
              "Zero maintenance moving parts",
              "Hygienic - no dust circulation",
              "Compatible with heat pumps"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const GalleryCard = ({ 
  image, 
  category, 
  title, 
  description 
}: { 
  image: string; 
  category: string; 
  title: string; 
  description: string 
}) => (
  <div className="group relative overflow-hidden rounded-xl aspect-[4/5]">
    <img 
      src={image} 
      alt={title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <p className="text-primary font-outfit text-xs tracking-wider uppercase mb-1">{category}</p>
      <h3 className="font-playfair text-xl text-foreground mb-1">{title}</h3>
      <p className="text-muted-foreground font-outfit text-sm mb-3">{description}</p>
      <a
        href={image}
        download={`${title.replace(/\s+/g, '-').toLowerCase()}.png`}
        className="inline-flex items-center gap-2 text-primary font-outfit text-sm hover:underline transition-colors"
      >
        <Download className="w-4 h-4" />
        Download Image
      </a>
    </div>
  </div>
);

const BenefitsList = ({ title, items }: { title: string; items: string[] }) => (
  <div className="p-6 rounded-xl bg-secondary/30 border border-border">
    <h3 className="font-playfair text-xl text-foreground mb-4">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-muted-foreground font-outfit text-sm">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Applications;
