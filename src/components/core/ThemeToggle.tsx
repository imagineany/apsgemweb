import { component$, useContext, useVisibleTask$, useSignal } from '@builder.io/qwik';
import { MatLightModeOutlined, MatDarkModeOutlined } from '@qwikest/icons/material';
import { ThemeContext } from '../../theme/theme';

export const ThemeToggle = component$(() => {
  const themeContext = useContext(ThemeContext);
  const currentMode = useSignal<'light' | 'dark'>('light');
  const shouldToggleTheme = useSignal(false);
  
  // Update current mode when theme context changes
  if (currentMode.value !== (themeContext.theme === 'dark' ? 'dark' : 'light')) {
    currentMode.value = themeContext.theme === 'dark' ? 'dark' : 'light';
  }
  
  // Check if we need to toggle the theme
  if (shouldToggleTheme.value) {
    shouldToggleTheme.value = false;
    themeContext.setTheme(themeContext.theme === 'dark' ? 'light' : 'dark');
  }
  
  // Apply theme changes to document (client-side only)
  useVisibleTask$(({ track }) => {
    // Track the theme context
    const theme = track(() => themeContext.theme);
    
    // Apply theme class to document when theme changes
    if (theme === 'dark') {
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.add('light-theme');
    }
  });
  
  // Track DOM changes to ensure UI is in sync with actual theme
  useVisibleTask$(({ cleanup }) => {
    if (typeof document === 'undefined') return;
    
    const updateCurrentMode = () => {
      if (document.documentElement.classList.contains('dark-theme')) {
        currentMode.value = 'dark';
      } else {
        currentMode.value = 'light';
      }
    };
    
    // Initial update
    updateCurrentMode();
    
    // Observe DOM changes
    const observer = new MutationObserver(() => {
      updateCurrentMode();
    });
    
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    // Clean up the observer when the component is destroyed
    cleanup(() => observer.disconnect());
  });
  
  return (
    <div class="theme-toggle">
      <button
        onClick$={() => {
          console.log('Setting shouldToggleTheme to true');
          shouldToggleTheme.value = true;
        }}
        aria-label={`Switch to ${currentMode.value === 'light' ? 'dark' : 'light'} mode`}
        title={`Switch to ${currentMode.value === 'light' ? 'dark' : 'light'} mode`}
      >
        {currentMode.value === 'dark' ? 
          <MatLightModeOutlined /> : 
          <MatDarkModeOutlined />
        }
      </button>
    </div>
  );
});
