import { component$, useStylesScoped$, useContext } from '@builder.io/qwik';
import { useTranslation, LanguageContext } from '../../i18n/i18n';
import { enTranslations } from '../../i18n/en';
import { deTranslations } from '../../i18n/de';
import sectionsStyles from './sections.css?inline';

export const WhyUsSection = component$(() => {
  useStylesScoped$(sectionsStyles);
  
  const languageContext = useContext(LanguageContext);
  const { t } = useTranslation(languageContext.lang);
  
  // Get the appropriate translations based on language
  const whyUsItems = languageContext.lang === 'en' 
    ? enTranslations.whyUs.items 
    : deTranslations.whyUs.items;
  
  // Map why us items to images
  const whyUsImages = [
    "/images/engineering-precision.png",
    "/images/enterprise-focused-expertise.png",
    "/images/long-term-partnership.png",
    "/images/proven-track-record.png"
  ];

  return (
    <section id="why-us" class="section why-us-section">
      <div class="container">
        <h2 class="section-title">{t('whyUs.title')}</h2>
        <p class="section-subtitle">{t('whyUs.subtitle')}</p>
        
        <div class="grid grid-2">
          {whyUsItems.map((item, index) => (
            <div key={index} class="why-us-item">
              <div class="why-us-icon">
                <img src={whyUsImages[index]} alt={item.title} />
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
