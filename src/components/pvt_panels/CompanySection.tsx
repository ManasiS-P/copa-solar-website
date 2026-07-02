import { motion } from "framer-motion";

const CompanySection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          {/* Company intro */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">
              About Copa Solar
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-8 copa-heading">
              We balance and decarbonize<br />your energy systems
            </h2>
          </motion.div>

          <motion.div 
            className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>
              Copa Solar AB is a Swedish company founded in 2022, specializing in the design of optimized thermal absorbers. With years of experience as an OEM supplier and energy consultant, we have accumulated extensive knowledge through strategic partnerships and successful installations.
            </p>
            <p>
              When we apply our absorber technology on the backside of PV panels, we create PVT panels. The Absorber is manufactured in our contracted factory in northern Germany, where we also do the PV to PVT conversion of a PV panel of your choice.
            </p>
            <p>
              As a product developer and active participant in energy system projects, we continuously refine our methods and materials to drive innovation forward. Our expertise and resources are dedicated to delivering tailor-made, high-precision energy solutions that meet the needs of both local and global businesses.
            </p>
          </motion.div>

          {/* Services & Applications */}
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <motion.div 
              className="bg-muted rounded-xl p-8 border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span>Inhouse high-level sales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span>Pre-studies of viable projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span>Renewable Energy Communities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span>5GDHC, Termonet and UTENs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span>GeoSolar system design</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-muted rounded-xl p-8 border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-6">Support & Maintenance</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span>Local contractors in each area/country</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span>Compatible with all known control systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span>No moving parts (except circulation pumps)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span>Hidden installation of thermal infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span>Maintenance-free operation</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
