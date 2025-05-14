import { component$, useContext } from '@builder.io/qwik';
import { languages, LanguageContext } from '../../i18n/i18n';

export const LanguageToggle = component$(() => {
  const languageContext = useContext(LanguageContext);
  
  return (
    <div class="language-toggle">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick$={() => {
            console.log('Language toggle clicked:', lang);
            languageContext.setLang(lang);
          }}
          class={`language-button ${languageContext.lang === lang ? 'active' : ''}`}
          aria-label={`Switch to ${lang === 'en' ? 'English' : 'German'}`}
        >
          {lang === 'en' ? '🇬🇧 EN' : '🇩🇪 DE'}
        </button>
      ))}
    </div>
  );
});
