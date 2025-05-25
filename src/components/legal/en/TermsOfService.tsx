import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from '../legal.css?inline';
import { company, contact } from '~/config';
import { ObfuscatedEmail } from '~/components/core/ObfuscatedEmail';

export const legalInfo = {
  id: "terms-of-service",
  title: "Terms of Service",
  lastUpdated: "May 25, 2025"
};

export const TermsOfService = component$(() => {
  useStylesScoped$(styles);
  
  // Display options - these will be configurable from config
  const displayOptions = {
    phone: contact.display?.phone !== false,
    email: contact.display?.email !== false,
    address: contact.display?.address !== false,
  };
  return (
    <div class="legal-content">
      <h1>Terms of Service</h1>
      <p>Last Updated: {legalInfo.lastUpdated}</p>
      
      <div class="section">
        <h2>Introduction</h2>
        <p>Welcome to {company.name}. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access our website or use our services.</p>
      </div>
      
      <div class="section">
        <h2>Use of Our Services</h2>
        <p>Our website and services are intended for business and professional use. You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
        <ul>
          <li>Use our services in any way that violates any applicable law or regulation</li>
          <li>Attempt to interfere with the proper working of our services</li>
          <li>Bypass any measures we may use to prevent or restrict access to our services</li>
          <li>Attempt to reverse engineer any software contained on our website</li>
          <li>Collect or track the personal information of others</li>
        </ul>
      </div>
      
      <div class="section">
        <h2>Intellectual Property</h2>
        <p>The content on our website, including but not limited to text, graphics, logos, images, and software, is the property of {company.name} and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.</p>
      </div>
      
      <div class="section">
        <h2>User Content</h2>
        <p>If you provide us with any content, you grant us a non-exclusive, worldwide, royalty-free, irrevocable, sub-licensable license to use, reproduce, adapt, publish, translate, and distribute your content in any existing or future media. You represent and warrant that you own or have the necessary rights to the content you provide and that it does not violate any third party's intellectual property or other rights.</p>
      </div>
      
      <div class="section">
        <h2>Disclaimer of Warranties</h2>
        <p>Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, timely, secure, or error-free.</p>
      </div>
      
      <div class="section">
        <h2>Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, {company.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.</p>
      </div>
      
      <div class="region-specific">
        <h4>Additional Terms for EU Customers</h4>
        <p>If you are a resident of the European Union, the following additional terms apply:</p>
        <ul>
          <li>Nothing in these Terms excludes or limits our liability for death or personal injury arising from our negligence, or our fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by applicable law.</li>
          <li>If you are a consumer, you have certain statutory rights which are not affected by these Terms. For more information about your statutory rights, contact your local consumer advice service.</li>
          <li>Any dispute arising from these Terms shall be governed by the laws of your country of residence, and you may bring legal proceedings in the courts of your country of residence.</li>
        </ul>
      </div>
      
      <div class="section">
        <h2>Indemnification</h2>
        <p>You agree to indemnify and hold {company.name} and its affiliates, officers, agents, and employees harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your breach of these Terms or your violation of any law or the rights of a third party.</p>
      </div>
      
      <div class="section">
        <h2>Termination</h2>
        <p>We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use our services will immediately cease.</p>
      </div>
      
      <div class="section">
        <h2>Changes to These Terms</h2>
        <p>We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
      </div>
      
      <div class="section">
        <h2>Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at:</p>
        {displayOptions.email && (
          <p>Email: <ObfuscatedEmail email={contact.email} showAsLink={false} /></p>
        )}
        {displayOptions.phone && (
          <p>Phone: {contact.phone}</p>
        )}
        {displayOptions.address && (
          <p>Address: {`${contact.address.street}, ${contact.address.city}, ${contact.address.postalCode}, ${contact.address.country}`}</p>
        )}
      </div>
      
      <p class="effective-date">These Terms of Service are effective as of {legalInfo.lastUpdated}.</p>
    </div>
  );
});

export default TermsOfService;
