import { component$, useStylesScoped$, useContext, useSignal, $ } from '@builder.io/qwik';
import { useTranslation, LanguageContext } from '../../i18n/i18n';
import { Link } from '@builder.io/qwik-city';
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

// Import case study data
import { caseStudyInfo as enCaseStudyInfo } from '../../i18n/case-studies/en';
import { caseStudyInfo as deCaseStudyInfo } from '../../i18n/case-studies/de';


export const CaseStudiesSection = component$(() => {
  useStylesScoped$(sectionsStyles);
  
  // Dialog state
  const dialogOpen = useSignal(false);
  const selectedCaseStudy = useSignal<number | null>(null);
  
  const openDialog = $((index: number) => {
    selectedCaseStudy.value = index;
    dialogOpen.value = true;
  });
  
  const closeDialog = $(() => {
    dialogOpen.value = false;
  });
  
  const languageContext = useContext(LanguageContext);
  const { t } = useTranslation(languageContext.lang);
  
  // Get the appropriate case study info based on language
  const caseStudies = languageContext.lang === 'en' 
    ? enCaseStudyInfo 
    : deCaseStudyInfo;
    
  // Get the base URL for case studies based on language
  const baseUrl = languageContext.lang === 'en' 
    ? '/case-studies/' 
    : '/de/case-studies/';

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
              </div>
              <div class="case-study-industry">
                <span>{study.industry}</span>
              </div>
              <h3>{study.title}</h3>
              <p>{study.description}</p>
              <button 
                class="case-study-link" 
                onClick$={() => openDialog(index)}
              >
                {study.readMore} <MatArrowForwardOutlined />
              </button>
            </div>
          ))}
        </div>
        
        <div class="view-all-container">
          <Link href={`${baseUrl}`} class="button button-secondary">
            {t('caseStudies.viewAll')}
          </Link>
        </div>
      </div>
      
      {/* Case Study Dialog */}
      {selectedCaseStudy.value !== null && (
        <CaseStudyDialog
          isOpen={dialogOpen.value}
          onClose$={closeDialog}
          caseStudyId={String(selectedCaseStudy.value)}
        />
      )}
    </section>
  );
});
