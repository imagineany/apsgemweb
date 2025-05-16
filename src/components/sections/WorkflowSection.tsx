import { component$, useStylesScoped$, useContext } from '@builder.io/qwik';
import { useTranslation, LanguageContext } from '../../i18n/i18n';
import { enTranslations } from '../../i18n/en';
import { deTranslations } from '../../i18n/de';
import { MatArrowForwardRound } from '@qwikest/icons/material';
import sectionsStyles from './sections.css?inline';

export const WorkflowSection = component$(() => {
  useStylesScoped$(sectionsStyles);
  
  const languageContext = useContext(LanguageContext);
  const { t } = useTranslation(languageContext.lang);
  
  // Get the appropriate translations based on language
  const traditionalItems = languageContext.lang === 'en' 
    ? enTranslations.workflow.traditional.items 
    : deTranslations.workflow.traditional.items;
    
  const intelligentItems = languageContext.lang === 'en' 
    ? enTranslations.workflow.intelligent.items 
    : deTranslations.workflow.intelligent.items;

  return (
    <section id="workflow" class="section workflow-section">
      <div class="container">
        <h2 class="section-title">{t('workflow.title')}</h2>
        <p class="section-subtitle">{t('workflow.subtitle')}</p>
        
        <div class="workflow-comparison">
          <div class="workflow-traditional">
            <h3>{t('workflow.traditional.title')}</h3>
            <ul class="workflow-list">
              {traditionalItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div class="workflow-divider">
            <div class="transformation-arrow">
              <MatArrowForwardRound />
            </div>
          </div>
          
          <div class="workflow-intelligent">
            <h3>{t('workflow.intelligent.title')}</h3>
            <ul class="workflow-list highlight">
              {intelligentItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div class="workflow-cta">
          <a href="#contact" class="button">{t('workflow.cta')}</a>
        </div>
      </div>
    </section>
  );
});
