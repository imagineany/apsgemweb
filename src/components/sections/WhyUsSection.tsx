import { component$, useStylesScoped$, useContext } from '@builder.io/qwik';
import { useTranslation, LanguageContext } from '../../i18n/i18n';
import { enTranslations } from '../../i18n/en';
import { deTranslations } from '../../i18n/de';
import sectionsStyles from './sections.css?inline';

// Import optimized images
import EngineeringPrecisionImage from '~/media/engineering-precision.png?w=80&h=80&format=webp&jsx';
import EnterpriseFocusedExpertiseImage from '~/media/enterprise-focused-expertise.png?w=80&h=80&format=webp&jsx';
import LongTermPartnershipImage from '~/media/long-term-partnership.png?w=80&h=80&format=webp&jsx';
import ProvenTrackRecordImage from '~/media/proven-track-record.png?w=80&h=80&format=webp&jsx';

export const WhyUsSection = component$(() => {
  useStylesScoped$(sectionsStyles);
  
  const languageContext = useContext(LanguageContext);
  const { t } = useTranslation(languageContext.lang);
  
  // Get the appropriate translations based on language
  const whyUsItems = languageContext.lang === 'en' 
    ? enTranslations.whyUs.items 
    : deTranslations.whyUs.items;
  

  return (
    <section id="why-us" class="section why-us-section">
      <div class="container">
        <h2 class="section-title">{t('whyUs.title')}</h2>
        <p class="section-subtitle">{t('whyUs.subtitle')}</p>
        
        <div class="grid grid-2">
          {whyUsItems.map((item, index) => (
            <div key={index} class="why-us-item">
              <div class="why-us-icon">
                {index === 0 && <EngineeringPrecisionImage />}
                {index === 1 && <EnterpriseFocusedExpertiseImage />}
                {index === 2 && <LongTermPartnershipImage />}
                {index === 3 && <ProvenTrackRecordImage />}
              </div>
              <div class="why-us-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
