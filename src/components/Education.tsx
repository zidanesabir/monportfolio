import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Calendar, MapPin, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

import MEImg from '@/assets/ME.png';
import LEImg from '@/assets/LE.png';
import DUTImg from '@/assets/DUT.png';
import BACImg from '@/assets/BAC.png';


const educationData = [
  { id: 'me', period: '2024 - 2026', levelImage: MEImg, bgGradient: 'from-amber-600 to-yellow-700' },
  { id: 'le', period: '2023 - 2024', levelImage: LEImg, bgGradient: 'from-amber-700 to-orange-600' },
  { id: 'dut', period: '2021 - 2023', levelImage: DUTImg, bgGradient: 'from-orange-600 to-amber-600' },
  { id: 'bac', period: '2019 - 2020', levelImage: BACImg, bgGradient: 'from-yellow-600 to-amber-700' },
];

const translations = {
  en: {
    sectionTitle: "Education",
    items: {
      me: {
        title: "MASTER OF EXCELLENCE IN SOFTWARE ENGINEERING",
        school: "IBN ZOHR UNIVERSITY, FSA AGADIR",
        description: "Technical degree focused on computer science fundamentals, programming, and system administration.",
        tags: ['Software Architecture', 'Machine Learning', 'Enterprise Systems', 'Research Methods'],
      },
      le: {
        title: "BACHELOR OF EXCELLENCE IN SOFTWARE ENGINEERING",
        school: "IBN ZOHR UNIVERSITY, FSA AGADIR",
        description: "Comprehensive bachelor's program covering full-stack development, database management, and software engineering principles.",
        tags: ['Full Stack Development', 'DB Design', 'Software Engineering', 'Web Technologies'],
      },
      dut: {
        title: "UNIVERSITY DIPLOMA OF TECHNOLOGY",
        school: "IBN ZOHR UNIVERSITY, FSA AGADIR",
        description: "Technical training in computer science covering programming basics, system administration, and network management.",
        tags: ['Programming', 'System Administration', 'Network Management', 'Project Management'],
      },
      bac: {
        title: "BACCALAUREATE IN MATHEMATICAL SCIENCES",
        school: "RAHALI EL FAROUK HIGH SCHOOL, EL ATTAOUIA",
        description: "Physical Sciences Baccalaureate with a focus on mathematics, physics, and chemistry, establishing a foundation for higher education in engineering.",
        tags: ['Mathematics', 'Physics', 'Chemistry', 'Scientific Methods'],
      }
    }
  },
  fr: {
    sectionTitle: "Parcours",
    items: {
      me: {
        title: "MASTER D'EXCELLENCE EN INGÉNIERIE LOGICIELLE",
        school: "UNIVERSITÉ IBN ZOHR, FSA AGADIR",
        description: "Diplôme technique axé sur les fondamentaux de l'informatique, la programmation et l'administration système.",
        tags: ['Architecture Logicielle', 'Cybersécurité', 'Cloud Computing', 'Intelligence Artificielle'],
      },
      le: {
        title: "LICENCE D'EXCELLENCE EN INGÉNIERIE LOGICIELLE",
        school: "UNIVERSITÉ IBN ZOHR, FSA AGADIR",
        description: "Programme de licence complet couvrant le développement full-stack, la gestion de bases de données et les principes d'ingénierie logicielle.",
        tags: ['Développement Full Stack', 'Conception de BD', 'Ingénierie Logicielle', 'Technologies Web'],
      },
      dut: {
        title: "DIPLÔME UNIVERSITAIRE DE TECHNOLOGIE",
        school: "UNIVERSITÉ IBN ZOHR, FSA AGADIR",
        description: "Formation technique en informatique couvrant les bases de la programmation, l'administration système et la gestion de réseau.",
        tags: ['Programmation', 'Administration Système', 'Gestion de Réseau', 'Gestion de Projet'],
      },
      bac: {
        title: "BACCALAURÉAT EN SCIENCES MATHÉMATIQUES",
        school: "LYCÉE QUALIFIANT RAHALI EL FAROUQ, EL ATTAOUIA",
        description: "Baccalauréat Sciences Physiques avec spécialisation en mathématiques, physique et chimie, établissant les bases pour les études supérieures en ingénierie.",
        tags: ['Mathématiques', 'Physique', 'Chimie', 'Méthodes Scientifiques'],
      }
    }
  }
};


// --- Type Definition ---
interface EducationItem {
  id: string; title: string; school: string; description: string; period: string; levelImage: string; tags: string[]; bgGradient: string;
}

// --- Component ---
const Education: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  
  const educations: EducationItem[] = educationData.map(edu => ({
    ...edu,
    ...(t.items[edu.id as keyof typeof t.items]),
  }));

  useEffect(() => {
    const options = { root: null, rootMargin: '0px', threshold: 0.2 };
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        const id = target.dataset.id;
        if (entry.isIntersecting && id) {
          setVisibleItems(prev => {
            if (prev.has(id)) return prev;
            const newSet = new Set(prev);
            newSet.add(id);
            return newSet;
          });
        }
      });
    }, options);
    const elements = sectionRef.current?.querySelectorAll('[data-animate]');
    elements?.forEach(el => observerRef.current?.observe(el));
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const stars = [
    { top: '5%', left: '8%', size: 'w-6 h-6', delay: '0s' },
    { top: '20%', right: '12%', size: 'w-4 h-4', delay: '1s' },
    { bottom: '25%', left: '20%', size: 'w-5 h-5', delay: '2s' },
    { bottom: '15%', right: '10%', size: 'w-6 h-6', delay: '0.5s' }
  ];

  return (
    <section 
      ref={sectionRef}
      id="education" 
      className="relative min-h-screen bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700   overflow-hidden"
      aria-labelledby="education-heading"
    >
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 2px, transparent 2px)',
          backgroundSize: 'clamp(40px, 8vw, 60px) clamp(40px, 8vw, 60px)'
        }}
      />
      {stars.map((star, index) => (
        <div 
          key={index}
          className={`absolute ${star.size} text-yellow-300/70`}
          style={{ 
            top: star.top, left: star.left, right: star.right, bottom: star.bottom, animationDelay: star.delay
          }}
        >
          <Star className="w-full h-full fill-current animate-twinkle" />
        </div>
      ))}

      <div className="relative z-10 flex min-h-screen items-center py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          
          <div 
            className={`mb-16 text-center lg:mb-24 transition-all duration-700 ${
              visibleItems.has('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-animate
            data-id="header"
          >
            <div className="inline-flex items-center space-x-4">
              <h2 id="education-heading" className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl font-mono m-0">
                <span className="text-yellow-400">#</span>
                <span className="text-white">{t.sectionTitle}</span>
              </h2>
              <div className="h-0.5 w-24 sm:w-40 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />
            </div>
          </div>

          <div role="list" className="relative mx-auto max-w-6xl">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 rounded-full bg-gradient-to-b from-yellow-400 via-amber-500 to-yellow-600 opacity-60 lg:left-1/2 lg:-translate-x-1/2" aria-hidden="true" />
            <div className="space-y-20 md:space-y-28">
              {educations.map((edu, index) => (
                <div
                  role="listitem"
                  key={edu.id}
                  className={`relative flex items-center transition-all duration-700 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } ${
                    visibleItems.has(edu.id)
                      ? 'opacity-100 translate-x-0'
                      : `opacity-0 translate-x-8 ${index % 2 === 0 ? 'lg:-translate-x-8' : ''}`
                  }`}
                  style={{ 
                    transitionDelay: `${index * 150}ms`, willChange: 'transform, opacity'
                  }}
                  data-animate
                  data-id={edu.id}
                >
                  <div className="absolute left-4 z-20 -translate-x-1/2 lg:left-1/2">
                    <div className="h-4 w-4 rounded-full border-2 border-white bg-yellow-400 shadow-lg transition-transform hover:scale-110 md:h-5 md:w-5" />
                  </div>

                  <div className={`w-full lg:w-5/12 ml-12 lg:ml-0 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="relative">
                      <div className="absolute -top-12 left-1/2 z-10 -translate-x-1/2 md:-top-16">
                         <div className="relative group">
                          <img
                            src={edu.levelImage}
                            alt={`${edu.title} badge`}
                            className="h-24 w-24 object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105 md:h-32 md:w-32"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      
                      <Card className="relative w-full overflow-hidden rounded-xl border border-yellow-400/30 bg-amber-800/20 p-6 pt-16 shadow-lg sm:shadow-2xl sm:backdrop-blur-lg transition-all duration-500 group hover:shadow-3xl hover:-translate-y-2 hover:scale-[1.02] lg:rounded-2xl md:p-8 md:pt-20">
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${edu.bgGradient} opacity-5 transition-opacity group-hover:opacity-15 lg:rounded-2xl`} />
                        <div className="absolute top-0 right-0 h-8 w-8 rounded-tr-xl border-t-2 border-r-2 border-yellow-400/40 md:h-12 md:w-12 lg:rounded-tr-2xl" />
                        <div className="absolute bottom-0 left-0 h-8 w-8 rounded-bl-xl border-b-2 border-l-2 border-yellow-400/40 md:h-12 md:w-12 lg:rounded-bl-2xl" />
                        <div className="relative flex h-full w-full flex-col space-y-3 md:space-y-4">
                          <div className="inline-flex self-start items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg sm:text-sm">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                          <h3 className="text-lg font-bold leading-tight text-amber-100 transition-colors group-hover:text-yellow-200 md:text-xl lg:text-2xl">{edu.title}</h3>
                          <div className="flex items-start gap-2 text-amber-200/80">
                            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-400" />
                            <span className="font-medium leading-tight text-sm md:text-base">{edu.school}</span>
                          </div>
                          <div className="relative rounded-lg border border-yellow-400/20 bg-amber-800/15 p-3 shadow-inner sm:backdrop-blur-sm md:p-4">
                            <div className="absolute -top-1 -left-1 font-serif text-3xl leading-none text-yellow-400/30 select-none md:text-4xl">"</div>
                            <p className="pt-2 text-sm leading-relaxed text-amber-100/90 lg:text-base">{edu.description}</p>
                            <div className="absolute -bottom-1 -right-1 font-serif text-3xl leading-none text-yellow-400/30 select-none md:text-4xl">"</div>
                          </div>
                          <div className="flex flex-wrap gap-2 pt-4 mt-auto">
                            {edu.tags.map((tag) => (
                              <span key={tag} className="rounded-full border border-yellow-400/25 bg-amber-100/10 px-2.5 py-1.5 text-xs font-medium text-yellow-200 transition-colors cursor-default hover:bg-amber-100/20">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                  <div className="hidden lg:block w-5/12" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        body, #__next {
          background-color: #78350f; /* Fallback color matching the gradient */
        }
        section {
          background-attachment: fixed; /* This is the main fix for the mobile bfcache glitch */
        }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes twinkle { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-twinkle { animation: twinkle 5s ease-in-out infinite; }
        .shadow-3xl { box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3); }
        @media (prefers-reduced-motion: reduce) {
          .animate-spin-slow, .animate-twinkle, .transition-all, * {
            animation-duration: 1ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 1ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
};
export default Education;