import { component$, useStylesScoped$, useContext } from '@builder.io/qwik';
import { useTranslation } from '../../i18n/i18n';
import { LanguageContext } from '../../i18n/i18n';
import sectionsStyles from './sections.css?inline';

export const HeroSection = component$(() => {
  useStylesScoped$(sectionsStyles);
  
  const languageContext = useContext(LanguageContext);
  
  // Get the translation function for the current language
  const { t } = useTranslation(languageContext.lang);

  return (
    <section id="hero" class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1>{t('hero.title')}</h1>
          <p class="hero-subtitle">{t('hero.subtitle')}</p>
          <div class="hero-cta">
            <a href="#contact" class="button">{t('hero.cta')}</a>
          </div>
        </div>
        <div class="hero-image">
          <img src="/images/software-precision.png" alt="Enterprise Software Solutions" />
        </div>
        <div class="hero-background"></div>
      </div>
    </section>
  );
});
