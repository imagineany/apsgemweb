import { component$, $, Slot, useContextProvider, useVisibleTask$, useSignal } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";
import { LanguageContext, type Language, getLanguageFromPath, transformPath } from "../i18n/i18n";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  const location = useLocation();
  
  // Determine language based on the route
  const routeLang = getLanguageFromPath(location.url.pathname);
  
  // Create a language signal first
  const lang = useSignal<Language>(routeLang);
  
  // Define setLang function separately to avoid circular references
  const setLang = $((newLang: Language, currentPath?: string) => {
    console.log('Setting language to:', newLang);
    
    // Update the language signal
    lang.value = newLang;
    console.log('Language set to:', lang.value);
    
    // Use navigation with route rewriting
    if (currentPath) {
      // Use the transformPath helper to get the correct path for the target language
      const targetPath = transformPath(currentPath, newLang);
      console.log('Navigating to:', targetPath);
      
      // Use window.location for a full page reload to ensure route rewriting takes effect
      window.location.href = targetPath;
    } else {
      // Fallback to home pages if no path provided
      if (newLang === 'de') {
        window.location.href = '/de/';
      } else {
        window.location.href = '/';
      }
    }
  });
  
  // Now create the context with the signal and function
  const langContext = {
    get lang() {
      return lang.value;
    },
    setLang
  };

  // Provide the language context to all components
  useContextProvider(LanguageContext, langContext);

  // Initialize language on client side
  useVisibleTask$(({ track }) => {
    // Track the language signal directly
    track(() => lang.value);
    
    // Set HTML lang attribute
    document.documentElement.lang = lang.value;
    
    // Check if this is the first load and we're on the root path
    if (location.url.pathname === '/' && !sessionStorage.getItem('language-detected')) {
      // Get browser language
      const browserLang = navigator.language.split('-')[0];
      
      // If browser language is German and we're not already on the German route, redirect
      if (browserLang === 'de' && lang.value !== 'de') {
        window.location.href = '/de/';
      }
      
      // Mark that we've detected the language
      sessionStorage.setItem('language-detected', 'true');
    }
  });

  return <Slot />;
});
