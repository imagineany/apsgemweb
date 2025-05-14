import { component$, useStylesScoped$, useContext } from '@builder.io/qwik';
import { useTranslation, LanguageContext } from '../../i18n/i18n';
import sectionsStyles from './sections.css?inline';
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

  return (
    <section id="contact" class="section contact-section">
      <div class="container">
        <h2 class="section-title">{t('contact.title')}</h2>
        <p class="section-subtitle">{t('contact.subtitle')}</p>
        
        <div class="contact-container contact-centered">
          <div class="contact-info-container">
            <div class="contact-info-item">
              <div class="contact-info-icon-pure">
                <MatPhoneOutlined />
              </div>
              <div class="contact-info-text">
                <h4>{t('nav.contact')}</h4>
                <p>
                  <a href={`tel:${t('contact.phone')}`} class="contact-link">
                    {t('contact.phone')}
                  </a>
                </p>
              </div>
            </div>
            
            <div class="contact-info-item">
              <div class="contact-info-icon-pure">
                <MatEmailOutlined />
              </div>
              <div class="contact-info-text">
                <h4>{t('contact.email')}</h4>
                <p>
                  <a href={`mailto:${t('contact.emailAddress')}`} class="contact-link">
                    {t('contact.emailAddress')}
                  </a>
                </p>
              </div>
            </div>
            
            <div class="contact-info-item">
              <div class="contact-info-icon-pure">
                <MatCalendarMonthOutlined />
              </div>
              <div class="contact-info-text">
                <h4>{t('contact.scheduleCall')}</h4>
                <p>
                  <a href="https://calendly.com/techprecision/consultation" target="_blank" rel="noopener noreferrer" class="contact-link">
                    {t('contact.bookConsultation')}
                  </a>
                </p>
              </div>
            </div>
            
            <div class="contact-info-item">
              <div class="contact-info-icon-pure">
                <MatLocationOnOutlined />
              </div>
              <div class="contact-info-text">
                <h4>{t('contact.address').split(',')[0]}</h4>
                <p>{t('contact.address')}</p>
              </div>
            </div>
            
            <div class="contact-cta">
              <a href="https://calendly.com/techprecision/consultation" target="_blank" rel="noopener noreferrer" class="button">
                <MatCalendarMonthOutlined /> {t('contact.scheduleButton')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
