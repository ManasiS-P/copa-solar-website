import { Footer as MainFooter } from "@/components/Footer";

const Footer = () => {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="font-display text-3xl md:text-4xl font-medium mb-4">
              Ready to Transform Your Building?
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
              Contact our team to discuss how the +Energy Façade can reduce your
              energy costs by over 80% while achieving the highest
              sustainability certifications.
            </p>
            <a
              href="mailto:info@copathermal.com"
              className="inline-flex items-center gap-2 bg-highlight text-highlight-foreground px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Get In Touch
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <MainFooter />
    </>
  );
};

export default Footer;
