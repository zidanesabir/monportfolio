import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star, ArrowLeft, ArrowRight, Github, ExternalLink } from 'lucide-react';

// --- All 8 project images are now used ---
import projectImg from '@/assets/health.png';
import project1Img from '@/assets/clientin.png'; 
import project2Img from '@/assets/collaboraai.png';
import project3Img from '@/assets/note.png';
import project4Img from '@/assets/note.png';
import project7Img from '@/assets/classifier-image.png';
import project5Img from '@/assets/portfolio.png';
import project6Img from '@/assets/portfolio2.png';
import talentiaImg from '@/assets/talentia.png';


// --- Data Section - Using image names as project names ---

const allProjectsData = [
  { id: 'talentia', image: talentiaImg, category: 'both', translationKey: 'talentia', demoUrl: '#', githubUrl: '#' },
  { id: 'healthtrack', image: projectImg, category: 'both', translationKey: 'healthtrack', demoUrl: 'https://www.figma.com/design/XLp5jxS177MJ1XK8u6Hq88/HealthTrack?node-id=1-4&p=f&t=mI4BvByVkiFYxQBJ-0', githubUrl: '#' },
  { id: 'clientin', image: project1Img, category: 'ui', translationKey: 'clientin', demoUrl: 'https://www.figma.com/design/JAPl4YbttGKHwIwFeWdRED/LangoPlay?node-id=0-1&p=f&t=zTRUEISJLp3dLt6N-0', githubUrl: '#' },
  { id: 'collaboraai', image: project2Img, category: 'both', translationKey: 'collaboraai', demoUrl: 'https://www.figma.com/design/1RuJ2kTMqG0KX9rKhhRtQ1/collaboraAI?t=cZsxlvSFSlBghFhw-0', githubUrl: 'https://github.com/zidanesabir/collabora-ai' },
  { id: 'note', image: project3Img, category: 'dev', translationKey: 'note', demoUrl: '#', githubUrl: 'https://github.com/zidanesabir/note_app' },
  { id: 'note2', image: project4Img, category: 'dev', translationKey: 'note2', demoUrl: '#', githubUrl: 'https://github.com/zidanesabir/note_app_v2' },
  { id: 'portfolio', image: project5Img, category: 'dev', translationKey: 'portfolio', demoUrl: 'https://zidanesabir.netlify.app/', githubUrl: 'https://github.com/zidanesabir/modern-folio-maker' },
  { id: 'portfolio2', image: project6Img, category: 'both', translationKey: 'portfolio2', demoUrl: '#', githubUrl: 'https://github.com/zidanesabir/monportfolio' },
  { id: 'classifier', image: project7Img, category: 'dev', translationKey: 'classifier', demoUrl: '#', githubUrl: 'https://github.com/zidanesabir/image-classifier' },
 
];

const translations = {
  en: {
    sectionTitle: "Projects",
    filters: { all: "ALL", dev: "FULL STACK DEV", ui: "UI/UX DESIGN" },
    links: { demo: "Demo", github: "GitHub" },
    ribbons: { dev: "DEV", ui: "UI/UX" },
    projects: {
      talentia: { title: "Talentia AI (in progress)", description: "Big Data and AI platform for intelligent job matching with CV analysis and compatibility scoring.", tags: ["React JS", "FastAPI", "Hadoop", "NLP", "BERT", "Docker"] },
      healthtrack: { title: "healthtrack(in progress))", description: "A modern and intuitive website for medical monitoring of patients and supervision of doctors .", tags: ["UI/UX Design", "Figma","React JS", "Node JS"] },
      clientin: { title: "Clientin", description: "A modern and intuitive website design.", tags: ["UI/UX Design", "Figma"] },
      collaboraai: { title: "CollaboraAI (in progress)", description: "AI-powered collaboration platform.", tags: ["UI/UX Design", "React JS", "Node JS", "Mongo DB"] },
      note: { title: "Note", description: "A personal note-taking with collaboration features.", tags: ["React JS", "Node JS", "SQLite"] },
      note2: { title: "Note_v2", description: "Enhanced note-taking with collaboration features.", tags: ["React JS", "Next.js", "Tailwind CSS"] },
      portfolio: { title: "Portfolio", description: "Professional portfolio.", tags: ["React JS","Tailwind CSS"] },
      portfolio2: { title: "Portfolio Pro", description: "Advanced portfolio .", tags: ["React JS","Tailwind CSS", "UI/UX"] },
      classifier: { title: "Classifier", description: "Machine learning image classification system.", tags: ["UI/UX Design", "Python", "TensorFlow"] },
      app_v1: {
        title: "App — FastAPI + Next.js",
        description:
          "Complete application (Version 1) with a FastAPI backend (Python) and a Next.js frontend. Includes authentication, REST API endpoints, and an integrated Docker Compose architecture for local development and production-ready container orchestration.",
        tags: ["FastAPI", "Python", "Next.js", "React", "Docker", "Docker Compose"]
      },
      app_v2: {
        title: "App — Express.js + React",
        description:
          "Complete application (Version 2) with an Express.js backend (Node.js) and a React frontend. Features REST API, JWT authentication, and a Docker Compose setup to orchestrate backend, frontend, and database services.",
        tags: ["Express.js", "Node.js", "React", "Docker", "Docker Compose"]
      }
    }
  },

  fr: {
    sectionTitle: "Projets",
    filters: { all: "TOUT", dev: "FULL STACK DEV", ui: "UI/UX DESIGN" },
    links: { demo: "Démo", github: "GitHub" },
    ribbons: { dev: "DEV", ui: "UI/UX" },
    projects: {
      talentia: { title: "Talentia AI (en cours)", description: "Plateforme Big Data et IA pour le matching emploi intelligent avec analyse CV et scoring de compatibilité.", tags: ["React JS", "FastAPI", "Hadoop", "NLP", "BERT", "Docker"] },
      healthtrack: { title: "healthtrack(en cours))", description: "Un site web moderne et intuitif pour  suivi médical des patients et la supervision des docteurs .", tags: ["UI/UX Design", "Figma","React JS", "Node JS"] },

      clientin: { title: "Clientin", description: "Un design de site web moderne et intuitif.", tags: ["UI/UX Design", "Figma"] },
      collaboraai: { title: "CollaboraAI (en cours)", description: "Plateforme de collaboration alimentée par l'IA.", tags: ["UI/UX Design", "React JS", "Node JS", "Mongo DB"] },
      note: { title: "Note", description: "Une application personnelle de prise de notes,avec fonctions de collaboration.", tags: ["React JS", "Node JS", "SQLite"] },
      note2: { title: "Note_v2", description: "Version améliorée de l'application de notes, avec fonctions de collaboration.", tags: ["React JS", "Next.js", "Tailwind CSS"] },
      portfolio: { title: "Portfolio", description: "Portfolio.", tags: ["React JS","Tailwind CSS"] },
      portfolio2: { title: "Portfolio Pro", description: "Portfolio avancé.", tags: ["React JS","Tailwind CSS","UI/UX"] },
      classifier: { title: "Classifier", description: "Système de classification d'images basé sur l'apprentissage automatique.", tags: ["UI/UX Design", "Python", "TensorFlow"] },
      app_v1: {
        title: "App — FastAPI + Next.js",
        description:
          "Application complète (Version 1) avec un backend FastAPI (Python) et un frontend Next.js. Comprend l'authentification, des endpoints REST et une architecture Docker Compose intégrée pour le développement local et le déploiement en production.",
        tags: ["FastAPI", "Python", "Next.js", "React", "Docker", "Docker Compose"]
      },
      app_v2: {
        title: "App — Express.js + React",
        description:
          "Application complète (Version 2) avec un backend Express.js (Node.js) et un frontend React. Offre une API REST, l'authentification JWT et une configuration Docker Compose pour orchestrer les services backend, frontend et base de données.",
        tags: ["Express.js", "Node.js", "React", "Docker", "Docker Compose"]
      }
    }
  }
};

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [filter, setFilter] = React.useState<'all' | 'dev' | 'ui'>('all');
  const [currentPage, setCurrentPage] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  // Get screen size to determine projects per page
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const PROJECTS_PER_PAGE = isMobile ? 1 : 3;

  const filteredProjects = React.useMemo(() => {
    const projectsWithText = allProjectsData.map(p => ({
      ...p,
      ...t.projects[p.translationKey as keyof typeof t.projects],
      ribbonText: p.category === 'both' ? `${t.ribbons.ui} / ${t.ribbons.dev}` : t.ribbons[p.category as keyof typeof t.ribbons],
    }));

    if (filter === 'all') return projectsWithText;
    return projectsWithText.filter(p => p.category === filter || p.category === 'both');
  }, [filter, t]);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  
  const paginatedProjects = React.useMemo(() => {
    const startIndex = currentPage * PROJECTS_PER_PAGE;
    return filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);
  }, [currentPage, filteredProjects, PROJECTS_PER_PAGE]);

  const handleFilterChange = (newFilter: 'all' | 'dev' | 'ui') => {
    setFilter(newFilter);
    setCurrentPage(0);
  };

  const goToPage = (pageIndex: number) => setCurrentPage(pageIndex);
  
  const nextPage = React.useCallback(() => {
    setCurrentPage(prev => (prev < totalPages - 1 ? prev + 1 : 0));
  }, [totalPages]);

  const prevPage = () => setCurrentPage(prev => (prev > 0 ? prev - 1 : totalPages - 1));

  // Auto-sliding functionality
  React.useEffect(() => {
    if (isPaused || totalPages <= 1) return;

    const timer = setInterval(() => {
      nextPage();
    }, 3000); // 3 seconds interval

    return () => clearInterval(timer);
  }, [isPaused, totalPages, nextPage]);

  return (
    <section 
      id="projects" 
      className="relative py-20 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Star className="absolute top-1/4 left-[5%] h-6 w-6 text-yellow-300/30 animate-pulse" />
      <Star className="absolute top-[15%] right-[10%] h-4 w-4 text-yellow-300/40 animate-pulse" />
      <Star className="absolute bottom-[20%] left-[15%] h-5 w-5 text-yellow-300/20 animate-pulse" />
      <Star className="absolute bottom-1/4 right-[5%] h-8 w-8 text-yellow-300/30 animate-pulse" />

      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center space-x-4">
            <h2 id="projects-heading" className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl font-mono m-0">
              <span className="text-yellow-400">#</span>
              <span className="text-white">{t.sectionTitle}</span>
            </h2>
            <div className="h-0.5 w-24 sm:w-40 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />
          </div>
        </div>

        <div className="mb-12 flex justify-center items-center space-x-2 sm:space-x-4">
          {(Object.keys(t.filters) as Array<keyof typeof t.filters>).map((key) => (
            <button
              key={key.toString()}
              onClick={() => handleFilterChange(key as 'all' | 'dev' | 'ui')}
              className={`px-4 py-2 text-xs sm:px-6 sm:py-2.5 sm:text-base font-semibold rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-900 ${
                filter === key 
                ? 'bg-yellow-400 text-amber-900 shadow-lg' 
                : 'bg-amber-800/20 border border-yellow-400/30 text-yellow-200 hover:bg-amber-800/50'
              }`}
            >
              {t.filters[key]}
            </button>
          ))}
        </div>

        {/* Projects Grid - Responsive: 1 column on mobile, 3 on desktop */}
        <div className={`grid gap-8 min-h-[420px] ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
          {paginatedProjects.map((project, index) => (
            <div 
              key={`${project.id}-${currentPage}`} 
              className="bg-amber-800/20 border border-yellow-500/30 rounded-xl overflow-hidden group transition-all duration-500 hover:shadow-2xl animate-slide-in hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms`}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 sm:h-56 object-cover object-top transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-white font-semibold px-4 py-2 rounded-lg bg-yellow-500/80 hover:bg-yellow-500 transition-colors transform hover:scale-105"
                  >
                    <ExternalLink className="w-5 h-5" /> {t.links.demo}
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-white font-semibold px-4 py-2 rounded-lg bg-gray-500/80 hover:bg-gray-500 transition-colors transform hover:scale-105"
                  >
                    <Github className="w-5 h-5" /> {t.links.github}
                  </a>
                </div>
                <div className="absolute top-2 -right-10 w-32 h-8 bg-yellow-400 flex items-center justify-center transform rotate-45">
                  <span className="text-amber-900 font-bold text-sm">{project.ribbonText}</span>
                </div>
              </div>
              <div className="p-4 sm:p-5 space-y-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-yellow-200">{project.title}</h3>
                  <p className="text-amber-200/80 text-sm sm:text-base mt-1">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 border-t border-yellow-500/20 pt-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-amber-700/50 text-yellow-200 text-xs font-medium px-3 py-1 rounded-full transition-colors hover:bg-amber-600/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls - Always show for better UX */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-between items-center">
            {/* Page Indicators */}
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                    currentPage === index ? 'bg-yellow-400 scale-125 shadow-lg' : 'bg-amber-700/50 hover:bg-amber-600'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex space-x-4">
              <button 
                onClick={prevPage} 
                className="p-2 rounded-full bg-amber-800/20 border border-yellow-400/30 text-yellow-200 hover:bg-amber-800/50 transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400" 
                aria-label="Previous page"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={nextPage} 
                className="p-2 rounded-full bg-amber-800/20 border border-yellow-400/30 text-yellow-200 hover:bg-amber-800/50 transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400" 
                aria-label="Next page"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* Auto-slide indicator */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-2 text-yellow-200/60 text-sm">
           
         
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from { 
            opacity: 0; 
            transform: translateX(30px) translateY(20px);
          }
          to { 
            opacity: 1; 
            transform: translateX(0) translateY(0);
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.6s ease-out forwards;
        }
        
        @media (max-width: 768px) {
          .animate-slide-in {
            animation: slide-in 0.8s ease-out forwards;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;