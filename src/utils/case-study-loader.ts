/**
 * Utility function to load case study content
 * 
 * This provides a simple way to load case study content from TSX components
 * instead of using MDX.
 */

import { $, QRL, Component } from '@builder.io/qwik';
import { Language } from '../i18n/i18n';

// Import case study components
import { caseStudies as enCaseStudies, caseStudyComponents as enCaseStudyComponents } from '../components/case-studies/en';
import { caseStudies as deCaseStudies, caseStudyComponents as deCaseStudyComponents } from '../components/case-studies/de';

/**
 * Interface for case study content
 */
export interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  tags: string[];
  component?: Component<{}>;
}

/**
 * Loads a case study by its ID
 * 
 * @param id The ID of the case study to load
 * @param lang The language to use
 * @returns The case study content
 */
export const loadCaseStudy$ = $(async (id: string, lang: Language = 'en'): Promise<CaseStudy | null> => {
  try {
    // Get the appropriate case studies and components based on language
    const caseStudies = lang === 'en' ? enCaseStudies : deCaseStudies;
    const caseStudyComponents = lang === 'en' ? enCaseStudyComponents : deCaseStudyComponents;
    
    // Find the case study with the matching ID or index
    let caseStudyInfo: any;
    let caseStudyComponent: Component<{}> | undefined;
    
    // If id is a number, use it as an index
    if (!isNaN(Number(id)) && Number(id) < caseStudies.length) {
      caseStudyInfo = caseStudies[Number(id)];
      caseStudyComponent = caseStudyComponents[id];
    } else {
      // Otherwise, try to find by ID match
      caseStudyInfo = caseStudies.find((study: any) => 
        study.id === id || study.id.toLowerCase().includes(id.toLowerCase())
      );
      
      if (caseStudyInfo) {
        caseStudyComponent = caseStudyComponents[caseStudyInfo.id];
      }
    }
    
    if (!caseStudyInfo) {
      console.error(`Case study with ID ${id} not found`);
      return null;
    }
    
    // Get the rendered content from the component
    // For now, we'll use the HTML content directly from the component
    // In a more advanced implementation, we could render the component server-side
    
    // Convert the case study item to our CaseStudy interface
    return {
      id: caseStudyInfo.id,
      title: caseStudyInfo.title,
      summary: caseStudyInfo.description,
      content: '', // This will be rendered by the component
      imageUrl: caseStudyInfo.imageUrl,
      tags: caseStudyInfo.tags,
      component: caseStudyComponent
    };
  } catch (error) {
    console.error('Error loading case study:', error);
    return null;
  }
});

/**
 * Type for the case study loader function
 */
export type CaseStudyLoader = QRL<(id: string, lang?: Language) => Promise<CaseStudy | null>>;
