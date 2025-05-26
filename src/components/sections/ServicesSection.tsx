import { component$, useStylesScoped$, useContext } from '@builder.io/qwik';
import { useTranslation, LanguageContext } from '../../i18n/i18n';
import { enTranslations } from '../../i18n/en';
import { deTranslations } from '../../i18n/de';
import sectionsStyles from './sections.css?inline';

// Import optimized images for all services
import EnterpriseDevImage from '~/media/enterprise-software-development.png?w=120&h=120&format=webp&jsx';
import DigitalTransformationImage from '~/media/enterprise-digital-transformation.png?w=120&h=120&format=webp&jsx';
import CloudSolutionImage from '~/media/enterprise-cloud-solution.png?w=120&h=120&format=webp&jsx';
import CustomApplicationsImage from '~/media/custom-enterprise-applications.png?w=120&h=120&format=webp&jsx';
import BlockchainSolutionsImage from '~/media/blockchain-solutions.png?w=120&h=120&format=webp&jsx';
import SCADAAutomationImage from '~/media/scada-automation.png?w=120&h=120&format=webp&jsx';

export const ServicesSection = component$(() => {
  useStylesScoped$(sectionsStyles);
  
  const languageContext = useContext(LanguageContext);
  const { t } = useTranslation(languageContext.lang);
  
  // Get the appropriate translations based on language
  const services = languageContext.lang === 'en' 
    ? enTranslations.services.items 
    : deTranslations.services.items;
  

  return (
    <section id="services" class="section services-section">
      <div class="container">
        <h2 class="section-title">{t('services.title')}</h2>
        <p class="section-subtitle">{t('services.subtitle')}</p>
        
        <div class="grid grid-6">
          {services.map((service, index) => (
            <div key={index} class="card service-card">
              <div class="service-icon">
                {index === 0 && <EnterpriseDevImage />}
                {index === 1 && <DigitalTransformationImage />}
                {index === 2 && <CloudSolutionImage />}
                {index === 3 && <CustomApplicationsImage />}
                {index === 4 && <BlockchainSolutionsImage />}
                {index === 5 && <SCADAAutomationImage />}
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
