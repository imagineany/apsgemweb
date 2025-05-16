import { component$, useContext, useSignal, useVisibleTask$, useTask$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { languages, LanguageContext } from '../../i18n/i18n';

export const LanguageToggle = component$(() => {
  const languageContext = useContext(LanguageContext);
  const currentLang = useSignal(languageContext.lang);
  const shouldChangeLang = useSignal<string | null>(null);
  const location = useLocation();
  
  // Track the entire context object for changes
  useTask$(({ track }) => {
    // Track the entire context object
    const ctx = track(() => languageContext);
    
    // Update current language when context changes
    if (currentLang.value !== ctx.lang) {
      currentLang.value = ctx.lang;
    }
  });
  
  // Handle language change requests separately
  useTask$(({ track }) => {
    // Track language change requests
    const changeLang = track(() => shouldChangeLang.value);
    
    // Check if we need to change the language
    if (changeLang) {
      console.log('Changing language to:', changeLang);
      
      // Clear the signal immediately to prevent multiple changes
      shouldChangeLang.value = null;
      
      // With route rewriting, we don't need to manually navigate
      // The context will handle the language change
      languageContext.setLang(changeLang as any, location.url.pathname);
    }
  });
  
  // Track language changes in the DOM
  useVisibleTask$(({ track }) => {
    // Track the language context
    const ctx = track(() => languageContext);
    
    // Update the current language signal
    currentLang.value = ctx.lang;
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
