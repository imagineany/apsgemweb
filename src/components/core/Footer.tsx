import { component$, useStylesScoped$, useContext } from '@builder.io/qwik';
import { useTranslation, LanguageContext } from '../../i18n/i18n';
import { enTranslations } from '../../i18n/en';
import { deTranslations } from '../../i18n/de';
import { MatLocationOnOutlined, MatPhoneOutlined, MatEmailOutlined } from '@qwikest/icons/material';
import footerStyles from './Footer.css?inline';
import { company, contact } from '../../config';
import { ObfuscatedEmail } from './ObfuscatedEmail';

export const Footer = component$(() => {
  useStylesScoped$(footerStyles);
  
  const languageContext = useContext(LanguageContext);
  const { t } = useTranslation(languageContext.lang);

  return (
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <h3>{company.name}</h3>
            <p>{t('meta.description')}</p>
          </div>

          <div class="footer-links">
            <div class="footer-section">
              <h4>{t('nav.services')}</h4>
              <ul>
                {languageContext.lang === 'en' 
                  ? enTranslations.services.items.map((item, index) => (
                      <li key={index}>
                        <a href="#services">{item.title}</a>
                      </li>
                    ))
                  : deTranslations.services.items.map((item, index) => (
                      <li key={index}>
                        <a href="#services">{item.title}</a>
                      </li>
                    ))
                }
              </ul>
            </div>

            <div class="footer-section">
              <h4>{t('nav.contact')}</h4>
              <ul class="contact-info">
                <li>
                  <MatLocationOnOutlined />
                  <span>{`${contact.address.street}, ${contact.address.city}, ${contact.address.postalCode}, ${contact.address.country}`}</span>
                </li>
                <li>
                  <MatPhoneOutlined />
                  <span>{contact.phone}</span>
                </li>
                <li>
                  <MatEmailOutlined />
                  <ObfuscatedEmail 
                    email={contact.email} 
                    showAsLink={false}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div class="footer-legal">
            <a href="#">{t('footer.privacy')}</a>
            <a href="#">{t('footer.terms')}</a>
            <a href="#">{t('footer.imprint')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
});
