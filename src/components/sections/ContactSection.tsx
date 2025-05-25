import { component$, useStylesScoped$, useContext } from '@builder.io/qwik';
import { useTranslation, LanguageContext } from '../../i18n/i18n';
import sectionsStyles from './sections.css?inline';
import { social, contact } from '../../config';
import { ObfuscatedEmail } from '../core/ObfuscatedEmail';
import { 
  MatLocationOnOutlined, 
  MatPhoneOutlined, 
  MatEmailOutlined,
  MatCalendarMonthOutlined,
} from '@qwikest/icons/material';

export const ContactSection = component$(() => {
  useStylesScoped$(sectionsStyles);
  
  const languageContext = useContext(LanguageContext);
  const { t } = useTranslation(languageContext.lang);

  // Display options - these will be configurable from config
  const displayOptions = {
    phone: contact.display?.phone !== false,
    email: contact.display?.email !== false,
    address: contact.display?.address !== false,
    social: social.display?.calendly !== false,
  };

  return (
    <section id="contact" class="section contact-section">
      <div class="container">
        <h2 class="section-title">{t('contact.title')}</h2>
        <p class="section-subtitle">{t('contact.subtitle')}</p>
        
        <div class="contact-container contact-centered">
          <div class="contact-info-container">
            {displayOptions.phone && (
              <div class="contact-info-item">
                <div class="contact-info-icon-pure">
                  <MatPhoneOutlined />
                </div>
                <div class="contact-info-text">
                  <h4>{t('nav.contact')}</h4>
                  <p>
                    <a href={`tel:${contact.phone}`} class="contact-link">
                      {contact.phone}
                    </a>
                  </p>
                </div>
              </div>
            )}
            
            {displayOptions.email && (
              <div class="contact-info-item">
                <div class="contact-info-icon-pure">
                  <MatEmailOutlined />
                </div>
                <div class="contact-info-text">
                  <h4>{t('contact.email')}</h4>
                  <p>
                    <ObfuscatedEmail 
                      email={contact.email} 
                      class="contact-link"
                    />
                  </p>
                </div>
              </div>
            )}
            
            {displayOptions.social && (
              <div class="contact-info-item">
                <div class="contact-info-icon-pure">
                  <MatCalendarMonthOutlined />
                </div>
                <div class="contact-info-text">
                  <h4>{t('contact.scheduleCall')}</h4>
                  <p>
                    <a href={social.calendly} target="_blank" rel="noopener noreferrer" class="contact-link">
                      {t('contact.bookConsultation')}
                    </a>
                  </p>
                </div>
              </div>
            )}
            
            {displayOptions.address && (
              <div class="contact-info-item">
                <div class="contact-info-icon-pure">
                  <MatLocationOnOutlined />
                </div>
                <div class="contact-info-text">
                  <h4>{contact.address.city}</h4>
                  <p>{`${contact.address.street}, ${contact.address.city}, ${contact.address.postalCode}, ${contact.address.country}`}</p>
                </div>
              </div>
            )}
            
            {displayOptions.social && (
              <div class="contact-cta">
                <a href={social.calendly} target="_blank" rel="noopener noreferrer" class="button">
                  <MatCalendarMonthOutlined /> {t('contact.scheduleButton')}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});
