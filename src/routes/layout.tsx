import { component$, $, Slot, useContextProvider, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { useLocation, useNavigate } from "@builder.io/qwik-city";
import { LanguageContext, type Language, getLanguageFromPath } from "../i18n/i18n";
import { ThemeContext, type Theme, getPreferredTheme } from "../theme/theme";

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
  
  // Initialize theme state with a placeholder value that will be updated in useVisibleTask$
  const theme = useSignal<Theme>('light');

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
  
  // Create a serializable function for setting the theme
  const setTheme = $((newTheme: Theme) => {
    console.log('Setting theme to:', newTheme, 'from previous:', theme.value);
    theme.value = newTheme;
    
    // Save theme preference to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
      console.log('Theme saved to localStorage:', newTheme);
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
  
  // Provide the theme context to all components
  const themeContextValue = {
    get theme() {
      console.log('Theme context getter called, returning:', theme.value);
      return theme.value;
    },
    setTheme
  };
  
  useContextProvider(ThemeContext, themeContextValue);

  // Initialize theme and language on client side
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
  
  // Handle theme initialization
  useVisibleTask$(({ cleanup }) => {
    console.log('Initializing theme...');
    
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      console.log('Found saved theme in localStorage:', savedTheme);
      theme.value = savedTheme;
    } else {
      // Get system preference
      const preferredTheme = getPreferredTheme();
      console.log('Using system preferred theme:', preferredTheme);
      theme.value = preferredTheme;
    }
    
    console.log('Theme initialized to:', theme.value);
    
    // Listen for system theme changes
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      // Define the handler function
      const handleThemeChange = (e: MediaQueryListEvent) => {
        // Only update if the user hasn't manually set a theme
        if (!localStorage.getItem('theme')) {
          theme.value = e.matches ? 'dark' : 'light';
        }
      };
      
      // Add the listener
      mediaQuery.addEventListener('change', handleThemeChange);
      
      // Clean up the listener when the component is destroyed
      cleanup(() => mediaQuery.removeEventListener('change', handleThemeChange));
    }
  });
  
  // Apply theme changes
  useVisibleTask$(({ track }) => {
    // Track theme changes
    track(() => theme.value);
    
    console.log('Applying theme:', theme.value);
    
    // Apply theme class to document
    if (theme.value === 'dark') {
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.add('light-theme');
    }
  });

  return <Slot />;
});
