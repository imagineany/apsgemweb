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
  setLang: (lang: Language) => void;
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
  if (path.startsWith('/de')) {
    return 'de';
  }
  return 'en';
};
