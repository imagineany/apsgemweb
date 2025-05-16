import { component$, useContext, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { languages, LanguageContext } from '../../i18n/i18n';

export const LanguageToggle = component$(() => {
  const languageContext = useContext(LanguageContext);
  const currentLang = useSignal(languageContext.lang);
  const shouldChangeLang = useSignal<string | null>(null);
  
  // Update current language when context changes
  if (currentLang.value !== languageContext.lang) {
    currentLang.value = languageContext.lang;
  }
  
  // Check if we need to change the language
  if (shouldChangeLang.value) {
    const newLang = shouldChangeLang.value;
    shouldChangeLang.value = null;
    console.log('Changing language to:', newLang);
    languageContext.setLang(newLang as any);
  }
  
  // Track language changes in the DOM
  useVisibleTask$(({ track }) => {
    // Track the language context
    track(() => languageContext.lang);
    
    // Update the current language signal
    currentLang.value = languageContext.lang;
  });
  
  return (
    <div class="language-toggle">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick$={() => {
            console.log('Setting shouldChangeLang to:', lang);
            shouldChangeLang.value = lang;
          }}
          class={`language-button ${currentLang.value === lang ? 'active' : ''}`}
          aria-label={`Switch to ${lang === 'en' ? 'English' : 'German'}`}
        >
          {lang === 'en' ? '🇬🇧 EN' : '🇩🇪 DE'}
        </button>
      ))}
    </div>
  );
});
