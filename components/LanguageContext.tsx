import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

type TranslationKey = keyof typeof translations.fa;

interface LanguageContextProps {
  isEn: boolean;
  t: (key: TranslationKey) => string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const detectLanguage = (): boolean => {
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  const search = window.location.search.toLowerCase();
  
  return (
    path.endsWith('/en') || 
    path.endsWith('/en/') || 
    path.includes('/en/') ||
    hash === '#en' || 
    hash === '#/en' || 
    search.includes('lang=en')
  );
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isEn, setIsEn] = useState<boolean>(detectLanguage);

  useEffect(() => {
    // Sync language detection on URL change (popstate)
    const handlePopState = () => {
      setIsEn(detectLanguage());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    // Dynamic html document updates
    document.documentElement.dir = isEn ? 'ltr' : 'rtl';
    document.documentElement.lang = isEn ? 'en' : 'fa';
    document.title = isEn 
      ? 'ChatNegar - Smart Support for WordPress' 
      : 'چت‌نگار - پشتیبانی هوشمند برای وردپرس';

    if (isEn) {
      document.documentElement.classList.add('font-en');
      document.documentElement.classList.remove('font-fa');
    } else {
      document.documentElement.classList.add('font-fa');
      document.documentElement.classList.remove('font-en');
    }
  }, [isEn]);

  const toggleLanguage = () => {
    const nextEn = !isEn;
    setIsEn(nextEn);

    let newPath = window.location.pathname;
    if (nextEn) {
      // Append /en to pathname if not present
      if (!newPath.endsWith('/en') && !newPath.endsWith('/en/')) {
        newPath = newPath.endsWith('/') ? `${newPath}en` : `${newPath}/en`;
      }
    } else {
      // Remove /en or /en/ from pathname
      newPath = newPath.replace(/\/en\/?$/, '');
      if (newPath === '') newPath = '/';
    }

    // Keep existing query parameters and hash
    window.history.pushState({}, '', newPath + window.location.search + window.location.hash);
  };

  const t = (key: TranslationKey): string => {
    const lang = isEn ? 'en' : 'fa';
    return (translations[lang] as any)[key] || (translations['fa'] as any)[key] || '';
  };

  return (
    <LanguageContext.Provider value={{ isEn, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
