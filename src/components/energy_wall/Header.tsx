import { useState, useEffect } from "react";
import copaLogo from "@/assets/copa-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="px-6 pt-6 flex items-center justify-start">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={copaLogo}
            alt="Copa Solar"
            className="h-12 md:h-16 w-auto invert"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
