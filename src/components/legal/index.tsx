import { legalDocuments as enLegalDocuments, legalComponents as enLegalComponents } from './en';
import { legalDocuments as deLegalDocuments, legalComponents as deLegalComponents } from './de';

// Export language-specific legal documents and components
export const legalDocuments = {
  en: enLegalDocuments,
  de: deLegalDocuments
};

// Export language-specific legal components
export const legalComponents = {
  en: enLegalComponents,
  de: deLegalComponents
};

// Get the appropriate legal component based on language and document ID
export const getLegalComponent = (lang: string, id: string) => {
  const components = lang === 'de' ? deLegalComponents : enLegalComponents;
  return components[id] || enLegalComponents[id]; // Fallback to English if not found
};
