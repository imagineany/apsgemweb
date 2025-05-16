import { component$, $, Slot, useContextProvider, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { useLocation, useNavigate } from "@builder.io/qwik-city";
import { LanguageContext, type Language, getLanguageFromPath } from "../i18n/i18n";

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
  const lang = useSignal<Language>(routeLang);

  // Use Qwik's navigation
  const nav = useNavigate();
  
  // Create a serializable function for setting the language
  const setLang = $((newLang: Language) => {
    console.log('Setting language to:', newLang);
    lang.value = newLang;
    console.log('Language set to:', lang.value);
    
    // Use Qwik's navigation
    if (newLang === 'de') {
      nav('/de/');
    } else {
      nav('/');
    }
  });

  // Provide the language context to all components
  useContextProvider(
    LanguageContext,
    {
      get lang() {
        return lang.value;
      },
      setLang
    }
  );

  // Initialize language on client side
  useVisibleTask$(({ track }) => {
    // Track language changes
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
