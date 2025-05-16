import { createContextId } from '@builder.io/qwik';
import { enTranslations } from './en';
import { deTranslations } from './de';

// Define available languages
export const languages = ['en', 'de'] as const;
export type Language = typeof languages[number];

// Define translations type
export type Translations = typeof enTranslations;

// Create a translations object with all languages
const translations: Record<Language, Translations> = {
  en: enTranslations,
  de: deTranslations,
};

// Create a context for the current language
export const LanguageContext = createContextId<{
  lang: Language;
  setLang: (lang: Language, currentPath?: string) => void;
}>('language-context');

// Create a function to provide translations
export const useTranslation = (lang: Language = 'en') => {
  const t = (key: string): string => {
    const keys = key.split('.');
    // Get the current translations for the language
    let value: any = translations[lang];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
  
  return { t, lang };
};

// Helper to get language from route path
export const getLanguageFromPath = (path: string): Language => {
  // With route rewriting, we need to check if the path starts with the language prefix
  if (path.startsWith('/de')) {
    return 'de';
  }
  return 'en';
};

// Helper to transform paths between languages
export const transformPath = (path: string, targetLang: Language): string => {
  const currentLang = getLanguageFromPath(path);
  
  // If already in the target language, no transformation needed
  if (currentLang === targetLang) {
    return path;
  }
  
  // English to German
  if (currentLang === 'en' && targetLang === 'de') {
    return path === '/' ? '/de/' : `/de${path}`;
  }
  
  // German to English
  if (currentLang === 'de' && targetLang === 'en') {
    // Remove the /de prefix
    const newPath = path.replace(/^\/de/, '');
    // If path is empty after removing prefix, set to root
    return newPath || '/';
  }
  
  // Fallback
  return path;
};
