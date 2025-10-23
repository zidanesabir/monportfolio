import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// --- Skill Image Imports ---
// TODO: Make sure these paths match your files in the assets folder
import htmlImg from '@/assets/html.png';
import cssImg from '@/assets/CSS.png';
import jsImg from '@/assets/js.png';
import javaImg from '@/assets/java.png';
import pythonImg from '@/assets/python.png';
import phpImg from '@/assets/php.png';
import laravelImg from '@/assets/laravel.png';
import reactImg from '@/assets/react.png';
import figmaImg from '@/assets/figma.png';
import sqlImg from '@/assets/sql.png';
import mongoImg from '@/assets/mongo.png';
import nodeImg from '@/assets/node.png';
import springImg from '@/assets/spring-boot.png';
import tailwindImg from '@/assets/tailwind.png';
import plsqlImg from '@/assets/pl-sql.png';
import flutterImg from '@/assets/flutter.png';
import kubeImg from '@/assets/kubernetes.png';
import dockerImg from '@/assets/docker.png';
import terraformImg from '@/assets/terraform.png';
import gitImg from '@/assets/git.png';

// --- Data Section ---
const skillsData = [
  // Row 1
  { name: 'HTML', image: htmlImg },
  { name: 'CSS', image: cssImg },
  { name: 'JavaScript', image: jsImg },
  { name: 'Java', image: javaImg },
  { name: 'Python', image: pythonImg },
  { name: 'PHP', image: phpImg },
  { name: 'Laravel', image: laravelImg },
  { name: 'React', image: reactImg },
  { name: 'Figma', image: figmaImg },
  // Row 2
  { name: 'SQL', image: sqlImg },
  { name: 'MongoDB', image: mongoImg },
  { name: 'Node.js', image: nodeImg },
  { name: 'Spring Boot', image: springImg },
  { name: 'Tailwind CSS', image: tailwindImg },
  // Row 3
  { name: 'PL/SQL', image: plsqlImg },
  { name: 'Flutter', image: flutterImg },
  { name: 'Kubernetes', image: kubeImg },
  { name: 'Docker', image: dockerImg },
  { name: 'Terraform', image: terraformImg },
  { name: 'Git', image: gitImg },
];

const translations = {
  en: {
    sectionTitle: "Skills",
  },
  fr: {
    sectionTitle: "Compétences",
  },
};

// --- Component ---
const Skills: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="skills" className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 py-10  overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-4">
            <h2 id="skills-heading" className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl font-mono m-0">
              <span className="text-yellow-400">#</span>
              <span className="text-white">{t.sectionTitle}</span>
            </h2>
            <div className="h-0.5 w-24 sm:w-40 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-x-4 gap-y-8">
          {skillsData.map((skill, index) => (
            <div 
              key={skill.name}
              className="flex flex-col items-center justify-center gap-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 hover:-translate-y-2 animate-float">
                <img src={skill.image} alt={skill.name} className="w-full h-full object-contain" />
              </div>
              <p className="text-amber-200 text-sm font-semibold text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out both;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
          animation-delay: ${Math.random() * 2}s; /* Adds variation to the float */
        }
      `}</style>
    </section>
  );
};

export default Skills;