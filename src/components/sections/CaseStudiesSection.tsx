import { component$, useStylesScoped$, useContext, useStore, useVisibleTask$, useSignal } from '@builder.io/qwik';
import { useTranslation, LanguageContext } from '../../i18n/i18n';
// import { Link } from '@builder.io/qwik-city'; // Commented out as not currently used
import sectionsStyles from './sections.css?inline';
import { MatArrowForwardOutlined } from '@qwikest/icons/material';
import { CaseStudyDialog } from '../dialogs/CaseStudyDialog';

// Import optimized images
import DigitalManufacturingImage from '~/media/digital-manufacturing-transformation.png?w=400&h=200&format=webp&jsx';
import FinancialServicesImage from '~/media/financial-services-cloud-migration.png?w=400&h=200&format=webp&jsx';
import RetailChainImage from '~/media/retail-chain-erp-solution.png?w=400&h=200&format=webp&jsx';
import EquipmentVendorImage from '~/media/5g-equipment-vendor-swap.png?w=400&h=200&format=webp&jsx';
import FibreRolloutImage from '~/media/ai-gis-fibre-rollout.png?w=400&h=200&format=webp&jsx';
import McpAgenticImage from '~/media/mcp-agentic-ai-marketplace.png?w=400&h=200&format=webp&jsx';
import OffshoreSCADAImage from '~/media/offshore-scada-system.png?w=400&h=200&format=webp&jsx';

// Import case study data
import { caseStudyInfo as enCaseStudyInfo } from '../../i18n/case-studies/en';
import { caseStudyInfo as deCaseStudyInfo } from '../../i18n/case-studies/de';


export const CaseStudiesSection = component$(() => {
  useStylesScoped$(sectionsStyles);
  
  // Dialog state using a store object
  const dialogState = useStore({
    isOpen: false,
    selectedCaseStudy: null as number | null
  });
  
  // Signals to trigger dialog actions
  const shouldOpenDialog = useSignal<number | null>(null);
  const shouldCloseDialog = useSignal(false);
  
  // Handle dialog opening
  if (shouldOpenDialog.value !== null) {
    const index = shouldOpenDialog.value;
    shouldOpenDialog.value = null;
    console.log('Opening dialog for case study:', index);
    dialogState.selectedCaseStudy = index;
    dialogState.isOpen = true;
  }
  
  // Handle dialog closing
  if (shouldCloseDialog.value) {
    shouldCloseDialog.value = false;
    console.log('Closing dialog');
    dialogState.isOpen = false;
    dialogState.selectedCaseStudy = null;
  }
  
  // Use a visible task to ensure dialog state is properly synchronized
  useVisibleTask$(({ track }) => {
    // Track the selected case study
    const caseStudy = track(() => dialogState.selectedCaseStudy);
    
    // If a case study is selected, ensure the dialog is open
    if (caseStudy !== null && !dialogState.isOpen) {
      dialogState.isOpen = true;
    }
  });
  
  const languageContext = useContext(LanguageContext);
  const { t } = useTranslation(languageContext.lang);
  
  // Get the appropriate case study info based on language
  const caseStudies = languageContext.lang === 'en' 
    ? enCaseStudyInfo 
    : deCaseStudyInfo;
    
  // Base URL commented out as it's not currently used
  // const baseUrl = languageContext.lang === 'en' 
  //   ? '/case-studies/' 
  //   : '/de/case-studies/';

  return (
    <section id="case-studies" class="section case-studies-section">
      <div class="container">
        <h2 class="section-title">{t('caseStudies.title')}</h2>
        <p class="section-subtitle">{t('caseStudies.subtitle')}</p>
        
        <div class="grid grid-case-studies">
          {caseStudies.map((study, index) => (
            <div key={index} class="card case-study-card">
              <div class="case-study-image">
                {index === 0 && <DigitalManufacturingImage />}
                {index === 1 && <FinancialServicesImage />}
                {index === 2 && <RetailChainImage />}
                {index === 3 && <EquipmentVendorImage />}
                {index === 4 && <FibreRolloutImage />}
                {index === 5 && <McpAgenticImage />}
                {index === 6 && <OffshoreSCADAImage />}
              </div>
              <div class="case-study-industry">
                <span>{study.industry}</span>
              </div>
              <h3>{study.title}</h3>
              <p>{study.description}</p>
              <button 
                class="case-study-link" 
                onClick$={() => {
                  console.log('Setting shouldOpenDialog to:', index);
                  shouldOpenDialog.value = index;
                }}
              >
                {study.readMore} <MatArrowForwardOutlined />
              </button>
            </div>
          ))}
        </div>
        
        {/* View All Case Studies link hidden as requested
        <div class="view-all-container">
          <Link href={`${baseUrl}`} class="button button-secondary">
            {t('caseStudies.viewAll')}
          </Link>
        </div>
        */}
      </div>
      
      {/* Case Study Dialog */}
      {dialogState.selectedCaseStudy !== null && (
        <CaseStudyDialog
          isOpen={dialogState.isOpen}
          onClose$={() => {
            console.log('Setting shouldCloseDialog to true');
            shouldCloseDialog.value = true;
          }}
          caseStudyId={String(dialogState.selectedCaseStudy)}
        />
      )}
    </section>
  );
});
