import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
 
  ];

  const currentLang = languages.find(lang => lang.code === language);

  return (
    <div className="relative group">
      <Button 
        variant="portfolio" 
        size="sm" 
        className="flex items-center gap-2 hover:scale-105 transition-all duration-300"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLang?.flag} {currentLang?.label}</span>
        <span className="sm:hidden">{currentLang?.flag}</span>
      </Button>
      
      <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`flex items-center gap-3 px-4 py-2 text-sm hover:bg-secondary rounded-lg transition-colors w-full text-left ${
              language === lang.code ? 'bg-secondary text-primary' : 'text-foreground'
            }`}
          >
            <span>{lang.flag}</span>
            <span>{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageToggle;