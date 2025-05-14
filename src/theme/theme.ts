import { createContextId } from '@builder.io/qwik';

// Define available themes
export const themes = ['light', 'dark'] as const;
export type Theme = typeof themes[number];

// Create a context for the current theme
export const ThemeContext = createContextId<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>('theme-context');

// Helper to get preferred theme from system
export const getPreferredTheme = (): Theme => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
};
