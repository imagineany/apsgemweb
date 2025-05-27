import { component$, useStylesScoped$, useContext, useSignal } from '@builder.io/qwik';
import { useTranslation, LanguageContext } from '../../i18n/i18n';
import { PartnersDialog } from '../dialogs/PartnersDialog';
import sectionsStyles from './sections.css?inline';

export const PartnersSection = component$(() => {
  useStylesScoped$(sectionsStyles);
  
  const languageContext = useContext(LanguageContext);
  const { t } = useTranslation(languageContext.lang);
  
  const isDialogOpen = useSignal(false);

  // Featured industry categories for compact display
  const featuredIndustries = [
    { name: 'Manufacturing', icon: '🏭', color: '#2563eb' },
    { name: 'Finance', icon: '🏦', color: '#059669' },
    { name: 'Telecom', icon: '📡', color: '#dc2626' },
    { name: 'Energy', icon: '⚡', color: '#ea580c' },
    { name: 'Retail', icon: '🛍️', color: '#7c3aed' },
    { name: 'Blockchain', icon: '⛓️', color: '#0891b2' },
    { name: 'Healthcare', icon: '🏥', color: '#be185d' },
    { name: 'Logistics', icon: '🚚', color: '#65a30d' },
    { name: 'Education', icon: '🎓', color: '#c2410c' },
    { name: 'Government', icon: '🏛️', color: '#4338ca' },
    { name: 'Automotive', icon: '🚗', color: '#991b1b' },
    { name: 'Aerospace', icon: '✈️', color: '#1e40af' }
  ];

  return (
    <>
      <section id="partners" class="section partners-section-compact">
        <div class="container">
          <h2 class="section-title">{t('partners.title')}</h2>
          <p class="section-subtitle">{t('partners.subtitle')}</p>
          
          <div class="partners-compact-grid">
            {featuredIndustries.map((industry, index) => (
              <div key={index} class="partner-item-compact" title={industry.name}>
                <div class="partner-icon-compact" style={{ backgroundColor: industry.color }}>
                  <span class="partner-emoji">{industry.icon}</span>
                </div>
                <span class="partner-name-compact">{industry.name}</span>
              </div>
            ))}
          </div>
          
          <div class="partners-actions">
            <button 
              class="btn-secondary partners-view-all"
              onClick$={() => isDialogOpen.value = true}
            >
              {t('partners.viewAll')}
            </button>
          </div>
        </div>
      </section>
      
      <PartnersDialog 
        isOpen={isDialogOpen.value}
        onClose$={() => isDialogOpen.value = false}
      />
    </>
  );
});
