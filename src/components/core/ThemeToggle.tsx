import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { MatLightModeOutlined, MatDarkModeOutlined } from '@qwikest/icons/material';

export const ThemeToggle = component$(() => {
  const isDarkTheme = useSignal(false);
  
  // Initialize the theme state on the client side and track changes
  useVisibleTask$(({ track }) => {
    // Initial setup
    if (!isDarkTheme.value) {
      isDarkTheme.value = document.documentElement.classList.contains('dark-theme');
      console.log('ThemeToggle initialized, isDarkTheme:', isDarkTheme.value);
    }
    
    // Track changes to isDarkTheme
    track(() => isDarkTheme.value);
    console.log('ThemeToggle tracked change, isDarkTheme:', isDarkTheme.value);
  });
  
  return (
    <div class="theme-toggle">
      <button
        onClick$={() => {
          const currentIsDark = isDarkTheme.value;
          console.log('Current theme before toggle:', currentIsDark ? 'dark' : 'light');
          
          if (currentIsDark) {
            // Switch to light theme
            document.documentElement.classList.remove('dark-theme');
            document.documentElement.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
            isDarkTheme.value = false;
          } else {
            // Switch to dark theme
            document.documentElement.classList.add('dark-theme');
            document.documentElement.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
            isDarkTheme.value = true;
          }
          
          console.log('Theme toggled to:', !currentIsDark ? 'dark' : 'light');
        }}
        aria-label={`Switch to ${isDarkTheme.value ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDarkTheme.value ? 'light' : 'dark'} mode`}
      >
        {isDarkTheme.value ? 
          <MatLightModeOutlined /> : 
          <MatDarkModeOutlined />
        }
      </button>
    </div>
  );
});
