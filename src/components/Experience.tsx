import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Calendar } from 'lucide-react';

// Import your experience images
import webAgencyImg from '@/assets/web-agency.png'; 
import oneeImg from '@/assets/onee.png';

// --- Data Section ---
const experienceData = [
  {
    id: 'webAgency',
    image: webAgencyImg,
    dates: 'Avril 2023 - Juin 2023',
    translationKey: 'webAgency',
  },
  {
    id: 'onee',
    image: oneeImg,
    dates: 'Août 2022 - Septembre 2022',
    translationKey: 'onee',
  },
];

const translations = {
  en: {
    sectionTitle: "Experience",
    experiences: {
      webAgency: {
        title: "Web Developer Intern - Web Agency",
        responsibilities: [
          "Developed web applications using Laravel and JavaScript",
          "Collaborated on Basic Design for responsive interfaces",
        ],
      },
      onee: {
        title: "IT Intern - ONEE, Morocco",
        responsibilities: [
          "Provided technical support and managed IT equipment",
          "Drafted technical documents",
        ],
      },
    },
  },
  fr: {
    sectionTitle: "Expérience",
    experiences: {
      webAgency: {
        title: "Stagiaire Développeur Web - Web Agency",
        responsibilities: [
          "Développement applications web avec Laravel et JavaScript",
          "Collaboration et Basic Design sur interfaces réactives",
        ],
      },
      onee: {
        title: "Stagiaire Informatique - ONEE, Maroc",
        responsibilities: [
          "Support technique et gestion parc informatique",
          "Rédaction documents techniques",
        ],
      },
    },
  },
};

// --- Component ---
const Experience: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="experience" className="relative min-h-screen bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700  overflow-hidden">
        {/* Decorative Stars */}
        <Star className="absolute top-1/4 left-[10%] h-6 w-6 text-yellow-300/30 animate-pulse" />
        <Star className="absolute top-[20%] right-[15%] h-4 w-4 text-yellow-300/40 animate-pulse" style={{ animationDelay: '1.5s' }} />
        <Star className="absolute bottom-[25%] left-[5%] h-5 w-5 text-yellow-300/20 animate-pulse" style={{ animationDelay: '2.5s' }} />
        <Star className="absolute bottom-1/4 right-[10%] h-8 w-8 text-yellow-300/30 animate-pulse" style={{ animationDelay: '0.8s' }} />
        <Star className="absolute top-1/2 left-1/2 -translate-x-1/2 h-7 w-7 text-yellow-400 fill-yellow-400 animate-pulse" />

        <div className="container mx-auto max-w-5xl px-4 md:px-6">
            {/* Section Header */}
            <div className="mb-12 text-center">
                <div className="inline-flex items-center space-x-4">
                    <h2 id="experience-heading" className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl font-mono m-0">
                        <span className="text-yellow-400">#</span>
                        <span className="text-white">{t.sectionTitle}</span>
                    </h2>
                    <div className="h-0.5 w-24 sm:w-40 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />
                </div>
            </div>

            {/* Experience Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {experienceData.map((exp, index) => (
                    <div 
                        key={exp.id} 
                        className="bg-amber-800/20 border border-yellow-500/30 rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
                        style={{ animationDelay: `${index * 150}ms`}}
                    >
                        <div className="relative">
                         
                            <img src={exp.image} alt={t.experiences[exp.translationKey as keyof typeof t.experiences].title} className="w-full h-72.2 object-cover object-center" />
                            <div className="absolute top-4 right-4 bg-yellow-400 text-amber-900 font-semibold text-xs sm:text-sm px-3 py-1 rounded-full flex items-center space-x-1 shadow-md">
                                <Calendar className="h-4 w-4" />
                                <span>{exp.dates}</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl sm:text-2xl font-semibold text-yellow-300 mb-3 leading-tight">
                                {t.experiences[exp.translationKey as keyof typeof t.experiences].title}
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-amber-200 text-sm sm:text-base">
                                {t.experiences[exp.translationKey as keyof typeof t.experiences].responsibilities.map((resp, i) => (
                                    <li key={i}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <style>{`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.7s ease-out both;
          }
        `}</style>
    </section>
  );
};

export default Experience;