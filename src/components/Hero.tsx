import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, MessageCircle, Github, Linkedin, Star } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from '@/contexts/LanguageContext';
import sabirImage from '@/assets/sabir.png';
import sabirZidaneCv from '@/assets/cv_sabir_zidane.pdf';

const Hero = () => {
  const { language } = useLanguage();
  
  const translations = {
    en: {
      name: "ZIDANE SABIR",
      title: "SOFTWARE ENGINEER",
      description: "Passionate about software development with solid experience in web development. Always eager to explore new ways through software engineering experiences.",
      downloadCV: "DOWNLOAD CV",
      contactMe: "CONTACT ME",
      stats: {
        experience: "Years Experience",
        technologies: "Technologies", 
        projects: "Projects Done",
        satisfaction: "Client Satisfaction"
      }
    },
    fr: {
      name: "ZIDANE SABIR",
      title: "INGÉNIEUR LOGICIEL", 
      description: "Passionné par le développement logiciel avec une solide expérience en développement web. Une envie d'explorer de nouvelles façons à travers d'expériences en ingénierie logicielle.",
      downloadCV: "TÉLÉCHARGER CV",
      contactMe: "ME CONTACTER",
      stats: {
        experience: "Années d'expérience",
        technologies: "Technologies",
        projects: "Projets réalisés", 
        satisfaction: "Satisfaction client"
      }
    }
  };
  
  const t = translations[language];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/zidanesabir', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sabir-zidane-7aa987262/', label: 'LinkedIn' },
    { icon: FaWhatsapp, href: 'https://wa.me/212610592544', label: 'WhatsApp' }
  ];

  const stats = [
    { number: '5+', label: t.stats.experience },
    { number: '20+', label: t.stats.technologies },
    { number: '15+', label: t.stats.projects },
    { number: '100%', label: t.stats.satisfaction }
  ];

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Stars */}
        <div className="absolute top-16 left-4 sm:top-20 sm:left-10 animate-pulse">
          <Star className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400 fill-yellow-400" />
        </div>
        <div className="absolute top-24 right-8 sm:top-32 sm:right-20 animate-pulse" style={{ animationDelay: '1s' }}>
          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300 fill-yellow-300" />
        </div>
        <div className="absolute top-48 left-1/4 sm:top-60 animate-pulse" style={{ animationDelay: '2s' }}>
          <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
        </div>
        <div className="absolute bottom-32 right-4 sm:bottom-40 sm:right-10 animate-pulse" style={{ animationDelay: '3s' }}>
          <Star className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-300 fill-yellow-300" />
        </div>
        <div className="absolute bottom-48 left-8 sm:bottom-60 sm:left-16 animate-pulse" style={{ animationDelay: '0.5s' }}>
          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
        </div>

        {/* Shapes */}
        <div className="absolute top-32 right-8 sm:top-40 sm:right-32">
          <div className="w-16 h-16 sm:w-32 sm:h-32 border-2 border-yellow-400/30 transform rotate-45 animate-spin-slow"></div>
        </div>
        <div className="absolute bottom-24 left-8 sm:bottom-32 sm:left-32">
          <div className="w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-56 left-1/3 sm:top-72 text-yellow-400/40 text-xl sm:text-2xl animate-pulse" style={{ animationDelay: '1.5s' }}>+</div>
        <div className="absolute bottom-72 right-1/4 sm:bottom-96 text-yellow-300/40 text-2xl sm:text-3xl animate-pulse" style={{ animationDelay: '2.5s' }}>×</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-20 sm:pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Profile Image */}
            <div className="animate-fade-in-up flex justify-center lg:justify-end mt-8 lg:mt-0 order-1 lg:order-2" style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-yellow-400/30 to-amber-500/30 rounded-2xl sm:rounded-3xl transform rotate-6"></div>
                <div className="absolute -inset-1 sm:-inset-2 border-2 border-yellow-400/50 rounded-xl sm:rounded-2xl transform -rotate-3"></div>
                <div className="relative w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[450px] bg-gradient-to-br from-amber-800 to-amber-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-amber-700 to-amber-800 flex items-center justify-center">
                    <img
                      src={sabirImage}
                      alt="Zidane Sabir"
                      className="pt-12 sm:pt-16 md:pt-20 w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent"></div>
                </div>
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 border border-yellow-400/30 transform rotate-45"></div>
                <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1 text-left">
              <div className="animate-fade-in-up space-y-2 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-amber-100">
                  {t.name}
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                  {t.title}
                </h2>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <p className="text-amber-200 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                  {t.description}
                </p>
              </div>

              {/* Buttons */}
              <div className="animate-fade-in-up flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start" style={{ animationDelay: '0.6s' }}>
                <Button 
                  size="lg" 
                  // ✨ FIX: Added 'active:scale-95' for a click/tap effect, primarily for mobile
                  className="group bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:via-amber-300 hover:to-yellow-400 text-amber-900 font-semibold px-6 sm:px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 sm:active:scale-105 text-sm sm:text-base"
                  asChild
                >
                  <a href={sabirZidaneCv} download="cv_sabir_zidane.pdf">
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />
                    {t.downloadCV}
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={scrollToContact}
                  className="group border-2 border-amber-300 text-amber-100 bg-transparent hover:bg-amber-300 hover:text-amber-900 px-6 sm:px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                  {t.contactMe}
                </Button>
              </div>

              {/* Stats & Socials Container */}
              <div className="pt-6 sm:pt-8">
                <div className="animate-fade-in-up grid grid-cols-2 gap-x-8 gap-y-6" style={{ animationDelay: '0.9s' }}>
                  {stats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">{stat.number}</div>
                      <div className="text-amber-200 text-xs sm:text-sm leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="animate-fade-in-up flex justify-start pt-6 sm:pt-8" style={{ animationDelay: '1.2s' }}>
                  <div className="flex space-x-3 sm:space-x-4">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 sm:p-3 bg-amber-800/50 border border-amber-700 rounded-full hover:bg-yellow-400 hover:border-yellow-400 hover:scale-110 transition-all duration-300 group"
                        aria-label={label}
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-100 group-hover:text-amber-900 transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-yellow-400 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out both; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
      `}</style>
    </section>
  );
};

export default Hero;