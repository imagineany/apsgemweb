import { component$ } from '@builder.io/qwik';
import { PrivacyPolicy } from '~/components/legal/de/PrivacyPolicy';
import { useContext } from '@builder.io/qwik';
import { LanguageContext } from '~/i18n/i18n';

export default component$(() => {
  const languageContext = useContext(LanguageContext);
  
  // Ensure we're using German language
  if (languageContext.lang !== 'de') {
    languageContext.lang = 'de';
  }
  
  return <PrivacyPolicy />;
});
