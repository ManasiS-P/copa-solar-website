const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-playfair text-2xl text-foreground">
              +Energy<span className="text-primary">Wall</span>
            </h3>
            <p className="text-muted-foreground font-outfit text-sm mt-1">
              Revolutionary indoor climate control
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground font-outfit text-sm">
              © {currentYear} Copa Solar AB × Cosentino Group
            </p>
            <p className="text-muted-foreground/60 font-outfit text-xs mt-1">
              All rights reserved. Dekton® is a registered trademark of
              Cosentino S.A.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
