import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from '../legal.css?inline';

export const legalInfo = {
  id: "privacy-policy",
  title: "Privacy Policy",
  lastUpdated: "May 25, 2025"
};

export const PrivacyPolicy = component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="legal-content">
      <h1>Privacy Policy</h1>
      <p>Last Updated: {legalInfo.lastUpdated}</p>
      
      <div class="section">
        <h2>Introduction</h2>
        <p>At {'{company.name}'}, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
        <p>This privacy policy applies to personal data we collect from you when you visit our website, contact us, or use our services.</p>
      </div>
      
      <div class="section">
        <h2>The Data We Collect</h2>
        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
        <ul>
          <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
          <li><strong>Contact Data</strong> includes email address, telephone numbers, and physical address.</li>
          <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
          <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
        </ul>
      </div>
      
      <div class="section">
        <h2>How We Use Your Data</h2>
        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
        <ul>
          <li>To provide you with the services you have requested</li>
          <li>To respond to your inquiries</li>
          <li>To improve our website and services</li>
          <li>To send you marketing communications (if you have opted in)</li>
          <li>To comply with legal obligations</li>
        </ul>
      </div>
      
      <div class="section">
        <h2>Data Security</h2>
        <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
      </div>
      
      <div class="section">
        <h2>Your Legal Rights</h2>
        <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
        <ul>
          <li>Request access to your personal data</li>
          <li>Request correction of your personal data</li>
          <li>Request erasure of your personal data</li>
          <li>Object to processing of your personal data</li>
          <li>Request restriction of processing your personal data</li>
          <li>Request transfer of your personal data</li>
          <li>Right to withdraw consent</li>
        </ul>
      </div>
      
      <div class="region-specific">
        <h4>Additional Information for EU Residents</h4>
        <p>If you are a resident of the European Union, you have certain additional rights under the General Data Protection Regulation (GDPR):</p>
        <ul>
          <li>We act as a data controller for the personal information we collect through our website.</li>
          <li>The legal basis for processing your data may include consent, contractual necessity, and our legitimate business interests.</li>
          <li>You have the right to lodge a complaint with a supervisory authority in your country of residence.</li>
          <li>We will not retain your data for longer than necessary for the purposes set out in this policy.</li>
          <li>If we intend to transfer your data outside the EEA, we will ensure appropriate safeguards are in place.</li>
        </ul>
      </div>
      
      <div class="section">
        <h2>Cookies</h2>
        <p>Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.</p>
      </div>
      
      <div class="section">
        <h2>Changes to This Privacy Policy</h2>
        <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date at the top of this policy.</p>
      </div>
      
      <div class="section">
        <h2>Contact Us</h2>
        <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
        <p>Email: {'{contact.email}'}</p>
        <p>Phone: {'{contact.phone}'}</p>
        <p>Address: {'{contact.address.street}, {contact.address.city}, {contact.address.postalCode}, {contact.address.country}'}</p>
      </div>
      
      <p class="effective-date">This Privacy Policy is effective as of {legalInfo.lastUpdated}.</p>
    </div>
  );
});

export default PrivacyPolicy;
