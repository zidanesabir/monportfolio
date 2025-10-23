import React, { useState, useEffect } from "react";
import { Menu, X, Globe, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import LogoImage from "@/assets/logo.png"; 

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const handleLanguageToggle = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };


  const NavItemContentMobile: React.FC<{ label: string }> = ({ label }) => (
    <span className="flex items-center gap-2">
      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
      {label}
    </span>
  );

  const navItems = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#education", label: t.nav.education },
    { href: "#experience", label: t.nav.experience },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); 
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div
        className={`container mx-auto flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${
          isScrolled
            ? "bg-background/30 backdrop-blur-lg shadow-lg border border-border/20"
            : "bg-background/20 backdrop-blur-md border border-border/10"
        }`}
      >
   
        <button
          onClick={() => scrollToSection("#home")}
          className="hover:scale-105 transition-transform"
          aria-label="Scroll to top"
        >
          <img src={LogoImage} alt="Logo" className="h-10 w-auto" />
        </button>

       
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-foreground-muted hover:text-primary transition-colors relative group font-medium"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={handleLanguageToggle}
            className="flex items-center gap-2 px-3 py-1.5 border border-border/40 rounded-lg text-foreground-muted hover:text-foreground hover:border-border/60 transition-all duration-300 text-sm font-medium"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4" />
            {language === "en" ? "EN" : "FR"}
          </button>
        </div>

        
        <button
          className="md:hidden p-2 hover:bg-background/20 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      
      {isMenuOpen && (
        <div className="container mx-auto mt-2 md:hidden rounded-xl bg-background/25 backdrop-blur-lg p-4 shadow-lg border border-border/20">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground-muted active:text-primary text-left transition-colors font-medium py-2"
              >
                <NavItemContentMobile label={item.label} />
              </button>
            ))}
            <div className="pt-4 border-t border-border/30 flex justify-start">
              <button
                onClick={handleLanguageToggle}
                className="flex items-center gap-2 px-3 py-1.5 border border-border/40 rounded-lg text-foreground-muted hover:text-foreground hover:border-border/60 transition-all duration-300 text-sm font-medium"
                aria-label="Toggle language"
              >
                <Globe className="h-4 w-4" />
                {language === "en" ? "EN" : "FR"}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;