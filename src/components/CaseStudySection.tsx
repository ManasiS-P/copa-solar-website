import { motion } from "framer-motion";
import osmoImage from "@/assets/osmo-case-study.jpg";
import districtImage from "@/assets/district-heating-case.jpg";

const CaseStudySection = () => {
  const cases = [
    {
      title: "Domestic Centralized PVT installation",
      subtitle: "Customer background – frozen boreholes",
      image: osmoImage,
      challenge: [
        "Borehole temp had dropped from +11°C to -7°C",
        "Customer had installed an increased GSHP size, 70 to 100 kW"
      ],
      solution: [
        "44 PVT panels installed with total 119 kWp (t) and 18.2 kWp (e)",
        "Estimated annual energy production 121 MWh (t) and 14.5 MWh (e)"
      ],
      results: [
        { label: "Borehole temp", value: "-7°C → +4°C" },
        { label: "GSHP bill reduced", value: "20%" },
        { label: "ROI", value: "6 years" },
        { label: "COP improvement", value: "+0.5" },
        { label: "CO₂ reduction/year", value: "12.3 tonnes" }
      ],
      investment: {
        capex: "€ 43,000 (Copa)",
        opex: "€ 470/year"
      }
    },
    {
      title: "District Heating Upgrade",
      subtitle: "Customer background – outdated oil & gas boilers",
      image: districtImage,
      challenge: [
        "Need substitute for fossil fuels to fulfil compliance with renewable energy",
        "Existing district heating net can be reused",
        "90°C system temperature preserved"
      ],
      solution: [
        "1000 PVT panels (2050 m²) and 1000 PV panels (2050 m²)",
        "Total 2.75 MWp (t) and 0.89 MWp (e)",
        "Annual production: 2.89 GWh (t) and 0.73 GWh (e)",
        "20,000 m borehole with 700 kWp"
      ],
      results: [
        { label: "GSHP bill reduced", value: "25%" },
        { label: "ROI", value: "12 years" },
        { label: "COP improvement", value: "+0.7" },
        { label: "CO₂ reduction/year", value: "428 tonnes" }
      ],
      investment: {
        capex: "€ 2.1 mn (Copa instl)",
        opex: "€ 4,200/year"
      }
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-8">
        {/* Section header */}
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">
            Case Studies
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight copa-heading">
            Results
          </h2>
        </motion.div>

        {/* Case studies */}
        <div className="space-y-24">
          {cases.map((study, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image */}
              <motion.div 
                className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <div className="overflow-hidden rounded copa-shadow-card">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-auto object-cover object-bottom scale-[1.25] origin-bottom"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div 
                className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div>
                  <h3 className="text-3xl font-bold tracking-tight mb-2 copa-heading">{study.title}</h3>
                  <p className="text-lg text-muted-foreground">{study.subtitle}</p>
                </div>

                {/* Challenge */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                    Challenge
                  </h4>
                  <ul className="space-y-2">
                    {study.challenge.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-destructive">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Copa Solar Solution */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                    Copa Solar Solution
                  </h4>
                  <ul className="space-y-2">
                    {study.solution.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results grid */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
                    Results
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {study.results.map((result, i) => (
                      <div key={i}>
                        <p className="text-2xl font-semibold text-primary">{result.value}</p>
                        <p className="text-sm text-muted-foreground">{result.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Investment */}
                <div className="flex gap-8">
                  <div>
                    <p className="text-sm text-muted-foreground">Capex</p>
                    <p className="font-semibold">{study.investment.capex}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Opex</p>
                    <p className="font-semibold">{study.investment.opex}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
