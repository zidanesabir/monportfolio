import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowUp } from 'lucide-react';
import LogoImage from '@/assets/logo.png'; // Make sure you have your logo here

// --- Translations ---
const translations = {
  en: {
    about: "An engineer in software engineering, passionate about creating innovative solutions with modern technologies. Let's build something extraordinary together!",
    quickLinks: "Quick Links",
    contact: "Contact",
    nav: {
      home: "Home",
      education: "Education",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    copyright: "© 2025 Zidane Sabir. All rights reserved. | Developed with React",
  },
  fr: {
    about: "Ingénieur  en ingénierie logicielle, passionné par la création de solutions innovantes grâce aux technologies modernes. Construisons ensemble quelque chose d'extraordinaire !",
    quickLinks: "Liens rapides",
    contact: "Contact",
    nav: {
      home: "Accueil",
      education: "Parcours",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
    },
    copyright: "© 2025 Zidane Sabir. Tous droits réservés. | Développé avec React",
  },
};

// --- Component ---
const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-amber-950 text-amber-300/70 pt-16 pb-6">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Logo and About */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <img src={LogoImage} alt="Logo" className="h-12 w-auto" />
            <p className="text-sm leading-relaxed">{t.about}</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:mx-auto">
            <h3 className="font-semibold text-white mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-yellow-400 transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:mx-auto">
            <h3 className="font-semibold text-white mb-4">{t.contact}</h3>
            <div className="space-y-2 text-sm">
              <p>Marrakech, Morocco</p>
              <p>+212 610592544</p>
              <p>sabirzidane0@gmail.com</p>
            </div>
          </div>

          {/* Column 4: Back to Top */}
          <div className="flex justify-start md:justify-end lg:justify-center items-start">
            <button
              onClick={scrollToTop}
              className="h-12 w-12 border border-amber-500/50 text-amber-500 hover:bg-amber-500/10 hover:text-yellow-400 hover:border-yellow-400 transition-all duration-300 flex items-center justify-center rounded-md"
              aria-label="Back to top"
            >
              <ArrowUp className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-amber-500/20 pt-6 text-center text-xs text-amber-300/50">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;