import { component$, useStylesScoped$, useContext } from '@builder.io/qwik';
import { useTranslation, LanguageContext } from '../../i18n/i18n';
import sectionsStyles from './sections.css?inline';

export const TeamSection = component$(() => {
  useStylesScoped$(sectionsStyles);
  
  const languageContext = useContext(LanguageContext);
  const { t } = useTranslation(languageContext.lang);

  return (
    <section id="team" class="section team-section">
      <div class="container">
        <h2 class="section-title">{t('team.title')}</h2>
        <p class="section-subtitle">{t('team.subtitle')}</p>
        
        <div class="team-description">
          <p>{t('team.description')}</p>
        </div>
        
        <div class="team-image-container">
          <img src="/images/collaborative-software-development-team.png" alt="Our Team" />
        </div>
      </div>
    </section>
  );
});
