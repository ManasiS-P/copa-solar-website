import { Download } from "lucide-react";
import mountingDetail from "@/assets/mounting-detail.png";
import clampingSystem from "@/assets/clamping-system.png";

const MountingSystem = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-outfit font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Installation System
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-foreground">
            Precision Clamping Method
          </h2>
          <p className="text-muted-foreground font-outfit mt-4 max-w-2xl mx-auto">
            The absorber panel is securely mounted to the back of the Dekton® surface 
            using our patented clamping system for optimal thermal transfer and easy maintenance.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <MountingImage
            image={mountingDetail}
            title="Absorber Integration"
            description="Precision-engineered connection points ensure maximum thermal conductivity between the aluminium absorber and the Dekton® surface."
          />
          <MountingImage
            image={clampingSystem}
            title="Clamping Mechanism"
            description="Aluminium profile clamps secure the absorber panel with adjustable tensioning bolts for perfect alignment and easy service access."
          />
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <MountingFeature
            icon="🔧"
            title="Tool-Free Service"
            description="Quick-release clamps for easy maintenance access"
          />
          <MountingFeature
            icon="🎯"
            title="Precision Fit"
            description="Adjustable mounting for perfect panel alignment"
          />
          <MountingFeature
            icon="🔥"
            title="Thermal Bridge"
            description="Direct contact maximizes heat transfer efficiency"
          />
          <MountingFeature
            icon="🛡️"
            title="Secure Hold"
            description="Vibration-resistant for long-term durability"
          />
        </div>
      </div>
    </section>
  );
};

const MountingImage = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => (
  <div className="group">
    <div className="relative overflow-hidden rounded-xl aspect-video mb-4">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <h3 className="font-playfair text-xl text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground font-outfit text-sm leading-relaxed mb-3">
      {description}
    </p>
    <a
      href={image}
      download={`${title.replace(/\s+/g, '-').toLowerCase()}.png`}
      className="inline-flex items-center gap-2 text-primary font-outfit text-sm hover:underline transition-colors"
    >
      <Download className="w-4 h-4" />
      Download Image
    </a>
  </div>
);

const MountingFeature = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="p-6 rounded-xl bg-secondary/30 border border-border text-center hover:border-primary/30 transition-colors">
    <span className="text-2xl mb-3 block">{icon}</span>
    <h4 className="font-playfair text-lg text-foreground mb-1">{title}</h4>
    <p className="text-muted-foreground font-outfit text-xs">{description}</p>
  </div>
);

export default MountingSystem;
