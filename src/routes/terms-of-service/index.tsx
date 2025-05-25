import { component$ } from '@builder.io/qwik';
import { TermsOfService } from '~/components/legal/en/TermsOfService';
import { useContext } from '@builder.io/qwik';
import { LanguageContext } from '~/i18n/i18n';

export default component$(() => {
  const languageContext = useContext(LanguageContext);
  
  // Ensure we're using English language
  if (languageContext.lang !== 'en') {
    languageContext.lang = 'en';
  }
  
  return <TermsOfService />;
});
