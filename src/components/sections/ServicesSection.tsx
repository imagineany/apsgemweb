import { component$, useStylesScoped$, useContext } from '@builder.io/qwik';
import { useTranslation, LanguageContext } from '../../i18n/i18n';
import { enTranslations } from '../../i18n/en';
import { deTranslations } from '../../i18n/de';
import sectionsStyles from './sections.css?inline';

export const ServicesSection = component$(() => {
  useStylesScoped$(sectionsStyles);
  
  const languageContext = useContext(LanguageContext);
  const { t } = useTranslation(languageContext.lang);
  
  // Get the appropriate translations based on language
  const services = languageContext.lang === 'en' 
    ? enTranslations.services.items 
    : deTranslations.services.items;
  
  // Map service items to images
  const serviceImages = [
    "/images/enterprise-software-development.png",
    "/images/enterprise-digital-transformation.png",
    "/images/enterprise-cloud-solution.png",
    "/images/custom-enterprise-applications.png"
  ];

  return (
    <section id="services" class="section services-section">
      <div class="container">
        <h2 class="section-title">{t('services.title')}</h2>
        <p class="section-subtitle">{t('services.subtitle')}</p>
        
        <div class="grid grid-4">
          {services.map((service, index) => (
            <div key={index} class="card service-card">
              <div class="service-icon">
                <img src={serviceImages[index]} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
