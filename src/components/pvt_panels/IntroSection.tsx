import { motion } from "framer-motion";
import backsidePvt from "@/assets/backside-pvt.png";
import systemDiagram from "@/assets/system-diagram-new.png";

const IntroSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-medium tracking-widest text-primary uppercase">
                PVT Panel
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight copa-heading">
                Sustainable Energy Solutions with PVT Technology
              </h2>
            </motion.div>

            <motion.div 
              className="space-y-6 text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p>
                Our integrated green energy systems combine solar power, heat pumps, and geothermal storage to deliver sustainable heating, cooling, and ventilation with maximum efficiency.
              </p>
              <p>
                The PVT panel is a revolutionary hybrid solution that harvests both electrical and thermal energy from the sun. By applying our patented absorber technology to the backside of PV panels, we create a system that generates up to 6x more energy than traditional solar panels alone.
              </p>
              <p>
                Completely silent and capable of producing energy even without direct sunlight conditions, it ensures a continuous and optimized energy supply while extending the lifespan of your solar installation.
              </p>
            </motion.div>

            {/* Technical illustration */}
            <motion.div 
              className="mt-12 bg-card rounded copa-shadow-soft p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src={systemDiagram} 
                alt="PVT System Architecture Diagram"
                className="w-[60%] h-auto mx-auto"
              />
              <p className="text-sm text-muted-foreground mt-4 text-center">
                PVT integrated with borehole thermal storage and heat pump
              </p>
            </motion.div>
          </div>

          {/* Right column - Stats and image */}
          <div className="space-y-12">
            {/* Stats card matching Energy Facade style */}
            <motion.div 
              className="bg-primary/5 border border-primary/20 rounded-xl p-8 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Facts</h3>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Applications</h3>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Economy</h3>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 text-sm">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>6x more energy vs PV alone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>100% fossil free production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>Heating, cooling & hot water</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>No moving parts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>Silent energy production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>Approved EPD & LCA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>Assembled in Europe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>100% recyclable</span>
                  </li>
                </ul>

                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>Residential</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>Community Buildings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>Commercial Real Estates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>Retrofit installations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>District Heating & Cooling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>High rise buildings</span>
                  </li>
                </ul>

                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>hot water savings &gt;30%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>heating savings &gt;40%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>cooling savings &gt;35%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>Reduced cooling need &gt;40%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>6 year ROI typical</span>
                  </li>
                </ul>
              </div>

              {/* Warranty badge */}
              <div className="flex justify-end">
                <div className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold">
                  25 Year Warranty
                </div>
              </div>
            </motion.div>

            {/* Backside PVT image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img 
                src={backsidePvt} 
                alt="PVT Panel Absorber Technology - Backside View"
                className="w-full h-auto rounded copa-shadow-card"
              />
              <p className="text-sm text-muted-foreground mt-4">
                Copa Solar's patented thermal absorber technology applied to the backside of PV panels
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
