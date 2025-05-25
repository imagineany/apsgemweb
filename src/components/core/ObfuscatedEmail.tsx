import { component$, useSignal, $, useStylesScoped$, useVisibleTask$ } from '@builder.io/qwik';
import { decodeEmail, encodeEmail } from '../../utils/email-obfuscation';
import styles from './ObfuscatedEmail.css?inline';

interface ObfuscatedEmailProps {
  email: string;
  class?: string;
  displayText?: string;
  showAsLink?: boolean;
}

export const ObfuscatedEmail = component$<ObfuscatedEmailProps>(({ 
  email, 
  class: className = '', 
  displayText,
  showAsLink = true 
}) => {
  useStylesScoped$(styles);
  
  const decodedEmail = useSignal('');
  const displayedText = useSignal('');
  
  // Encode the email for initial render (this will be in HTML source)
  const encodedEmail = encodeEmail(email);
  
  // Use visible task to decode email on client side
  useVisibleTask$(() => {
    // Decode the email for display
    decodedEmail.value = decodeEmail(encodedEmail);
    displayedText.value = displayText || decodedEmail.value;
  });
  
  const handleEmailClick = $(() => {
    if (showAsLink && decodedEmail.value) {
      window.location.href = `mailto:${decodedEmail.value}`;
    }
  });

  const handleCopyEmail = $(async () => {
    if (!decodedEmail.value) return;
    
    try {
      await navigator.clipboard.writeText(decodedEmail.value);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = decodedEmail.value;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  });

  if (showAsLink) {
    return (
      <a 
        href="#" 
        class={`obfuscated-email ${className}`}
        onClick$={handleEmailClick}
        title="Click to send email"
        data-encoded={encodedEmail}
      >
        {displayedText.value || 'Loading...'}
      </a>
    );
  }

  return (
    <span 
      class={`obfuscated-email-text ${className}`}
      onClick$={handleCopyEmail}
      title="Click to copy email"
      data-encoded={encodedEmail}
    >
      {displayedText.value || 'Loading...'}
    </span>
  );
});
