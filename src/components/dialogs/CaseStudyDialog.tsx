import { component$, useStylesScoped$, PropFunction, useSignal, useVisibleTask$, Component, $ } from '@builder.io/qwik';
import { MatCloseOutlined } from '@qwikest/icons/material';
import { useLocation } from '@builder.io/qwik-city';
import { getLanguageFromPath, Language } from '../../i18n/i18n';
import { OptimizedImage } from '../core/OptimizedImage';

// Import case study components directly
import { caseStudies as enCaseStudies, caseStudyComponents as enCaseStudyComponents } from '../case-studies/en';
import { caseStudies as deCaseStudies, caseStudyComponents as deCaseStudyComponents } from '../case-studies/de';

import styles from './dialogs.css?inline';

export interface CaseStudyDialogProps {
  isOpen: boolean;
  onClose$: PropFunction<() => void>;
  caseStudyId: string;
}

export const CaseStudyDialog = component$<CaseStudyDialogProps>((props) => {
  useStylesScoped$(styles);
  
  const location = useLocation();
  const lang = getLanguageFromPath(location.url.pathname);
  
  // Signals to store the loaded case study data
  const title = useSignal<string>('Loading...');
  const industry = useSignal<string>('');
  const imageUrl = useSignal<string>('');
  const CaseStudyComponent = useSignal<Component<{}> | undefined>(undefined);
  
  // Function to load a case study
  const loadCaseStudy = $((id: string, language: Language) => {
    try {
      // Get the appropriate case studies and components based on language
      const caseStudies = language === 'en' ? enCaseStudies : deCaseStudies;
      const caseStudyComponents = language === 'en' ? enCaseStudyComponents : deCaseStudyComponents;
      
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
      
      return {
        title: caseStudyInfo.title,
        industry: caseStudyInfo.tags[0] || '',
        imageUrl: caseStudyInfo.imageUrl,
        component: caseStudyComponent
      };
    } catch (error) {
      console.error('Error loading case study:', error);
      return null;
    }
  });
  
  // Load the case study when the component is visible
  useVisibleTask$(async ({ track }) => {
    // Track the caseStudyId to reload when it changes
    track(() => props.caseStudyId);
    
    if (props.caseStudyId) {
      const caseStudy = await loadCaseStudy(props.caseStudyId, lang);
      
      if (caseStudy) {
        title.value = caseStudy.title;
        industry.value = caseStudy.industry;
        imageUrl.value = caseStudy.imageUrl;
        CaseStudyComponent.value = caseStudy.component;
      }
    }
  });
  
  return (
    <div class={`dialog-overlay ${props.isOpen ? 'open' : ''}`} onClick$={props.onClose$}>
      <div class="dialog-content" onClick$={(e) => e.stopPropagation()}>
        <div class="dialog-header">
          <h2>{title.value}</h2>
          <button class="close-button" onClick$={props.onClose$} aria-label="Close">
            <MatCloseOutlined width="24" height="24" />
          </button>
        </div>
        
        <div class="dialog-body">
          <div class="case-study-industry">
            <span>{industry.value}</span>
          </div>
          
          <div class="case-study-image">
            <OptimizedImage src={imageUrl.value} alt={title.value} />
          </div>
          
          {CaseStudyComponent.value ? (
            <CaseStudyComponent.value />
          ) : (
            <div class="case-study-content">
              <p>Loading content...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
