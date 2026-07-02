import { useState, useEffect } from "react";
import copaSolarLogo from "@/assets/copa-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-[var(--shadow-soft)]"
          : "bg-transparent"
      }`}
    >
      <div className="px-6 pt-6 flex items-center justify-start">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={copaSolarLogo}
            alt="Copa Solar"
            className="h-12 md:h-16 w-auto"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
