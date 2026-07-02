import { motion } from "framer-motion";
import copaLogo from "@/assets/copa-logo-gray.png";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="py-24 copa-gradient-hero text-white">
      <div className="container mx-auto px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="inline-block mb-8">
            <img
              src={copaLogo}
              alt="Copa Solar"
              className="h-16 md:h-20 w-auto mx-auto"
            />
          </Link>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 copa-heading">
            Get in Touch
          </h2>
          <p className="text-xl text-white/80">
            Ready to transform your energy system with PVT technology? Contact
            Copa Solar today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Copa Solar */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4">Copa Solar AB</h3>
            <address className="not-italic space-y-2 text-white/80">
              <p>Stålgatan 15A</p>
              <p>195 72 Rosersberg</p>
              <p>Sweden</p>
            </address>
            <div className="mt-6 space-y-2">
              <p className="font-medium">+46 708 22 17 20</p>
              <p className="text-white/80">info@copasolar.com</p>
              <a
                href="https://www.copasolar.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-accent hover:text-accent/80 transition-colors font-medium"
              >
                www.copasolar.com
              </a>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-sm font-medium">
                ISO 9001
              </span>
              <span className="px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-sm font-medium">
                EPD Hub
              </span>
              <span className="px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-sm font-medium">
                DNV
              </span>
            </div>
            <p className="mt-6 text-sm text-white/70">
              All products are Assembled in Europe and are 100% recyclable with
              no rare earth metals.
            </p>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">Why Copa Solar?</h3>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>25 Year Warranty</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>German manufacturing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>European supply chain</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Proven case studies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Local installation partners</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
