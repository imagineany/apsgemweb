import { component$, useSignal, useStylesScoped$, useContext } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';
import { useTranslation, LanguageContext } from '../../i18n/i18n';
import { MatMenuOutlined, MatCloseOutlined } from '@qwikest/icons/material';
import headerStyles from './Header.css?inline';

export const Header = component$(() => {
  useStylesScoped$(headerStyles);
  
  const languageContext = useContext(LanguageContext);
  const { t } = useTranslation(languageContext.lang);
  const mobileMenuOpen = useSignal(false);

  return (
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <Link href="/">
              <img src="/logo.png" alt="TechPrecision Logo" class="logo-image" />
            </Link>
          </div>

          <button 
            class="mobile-menu-toggle" 
            onClick$={() => mobileMenuOpen.value = !mobileMenuOpen.value}
            aria-label={mobileMenuOpen.value ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen.value}
          >
            {mobileMenuOpen.value ? <MatCloseOutlined /> : <MatMenuOutlined />}
          </button>

          <nav class={`main-nav ${mobileMenuOpen.value ? 'open' : ''}`}>
            <ul>
              <li>
                <a href="#services">{t('nav.services')}</a>
              </li>
              <li>
                <a href="#why-us">{t('nav.whyUs')}</a>
              </li>
              <li>
                <a href="#workflow">{t('nav.workflow')}</a>
              </li>
              <li>
                <a href="#case-studies">{t('nav.caseStudies')}</a>
              </li>
              <li>
                <a href="#team">{t('nav.team')}</a>
              </li>
              <li>
                <a href="#contact">{t('nav.contact')}</a>
              </li>
            </ul>
          </nav>

          <div class="header-actions">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
});
