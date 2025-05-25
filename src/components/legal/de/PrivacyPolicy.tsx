import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from '../legal.css?inline';
import { company, contact } from '~/config';
import { ObfuscatedEmail } from '~/components/core/ObfuscatedEmail';

export const legalInfo = {
  id: "privacy-policy",
  title: "Datenschutzrichtlinie",
  lastUpdated: "25. Mai 2025"
};

export const PrivacyPolicy = component$(() => {
  useStylesScoped$(styles);
  
  // Display options - these will be configurable from config
  const displayOptions = {
    phone: contact.display?.phone !== false,
    email: contact.display?.email !== false,
    address: contact.display?.address !== false,
  };
  return (
    <div class="legal-content">
      <h1>Datenschutzrichtlinie</h1>
      <p>Zuletzt aktualisiert: {legalInfo.lastUpdated}</p>
      
      <div class="section">
        <h2>Einleitung</h2>
        <p>Bei {company.name} respektieren wir Ihre Privatsphäre und sind bestrebt, Ihre persönlichen Daten zu schützen. Diese Datenschutzrichtlinie informiert Sie darüber, wie wir mit Ihren persönlichen Daten umgehen, wenn Sie unsere Website besuchen, und informiert Sie über Ihre Datenschutzrechte und darüber, wie das Gesetz Sie schützt.</p>
        <p>Diese Datenschutzrichtlinie gilt für persönliche Daten, die wir von Ihnen sammeln, wenn Sie unsere Website besuchen, uns kontaktieren oder unsere Dienstleistungen nutzen.</p>
      </div>
      
      <div class="section">
        <h2>Die Daten, die wir sammeln</h2>
        <p>Wir können verschiedene Arten von persönlichen Daten über Sie sammeln, verwenden, speichern und übertragen, die wir wie folgt gruppiert haben:</p>
        <ul>
          <li><strong>Identitätsdaten</strong> umfassen Vorname, Nachname, Benutzername oder ähnliche Kennungen.</li>
          <li><strong>Kontaktdaten</strong> umfassen E-Mail-Adresse, Telefonnummern und physische Adresse.</li>
          <li><strong>Technische Daten</strong> umfassen Internet-Protokoll (IP)-Adresse, Browsertyp und -version, Zeitzoneneinstellung und Standort, Browser-Plugin-Typen und -Versionen, Betriebssystem und Plattform sowie andere Technologien auf den Geräten, die Sie für den Zugriff auf diese Website verwenden.</li>
          <li><strong>Nutzungsdaten</strong> umfassen Informationen darüber, wie Sie unsere Website und Dienstleistungen nutzen.</li>
        </ul>
      </div>
      
      <div class="section">
        <h2>Wie wir Ihre Daten verwenden</h2>
        <p>Wir werden Ihre persönlichen Daten nur verwenden, wenn das Gesetz es uns erlaubt. Am häufigsten werden wir Ihre persönlichen Daten unter folgenden Umständen verwenden:</p>
        <ul>
          <li>Um Ihnen die von Ihnen angeforderten Dienstleistungen bereitzustellen</li>
          <li>Um auf Ihre Anfragen zu antworten</li>
          <li>Um unsere Website und Dienstleistungen zu verbessern</li>
          <li>Um Ihnen Marketingmitteilungen zu senden (wenn Sie zugestimmt haben)</li>
          <li>Um gesetzlichen Verpflichtungen nachzukommen</li>
        </ul>
      </div>
      
      <div class="section">
        <h2>Datensicherheit</h2>
        <p>Wir haben angemessene Sicherheitsmaßnahmen getroffen, um zu verhindern, dass Ihre persönlichen Daten versehentlich verloren gehen, verwendet oder in unbefugter Weise zugänglich gemacht, verändert oder offengelegt werden. Wir beschränken den Zugriff auf Ihre persönlichen Daten auf diejenigen Mitarbeiter, Vertreter, Auftragnehmer und andere Dritte, die ein geschäftliches Bedürfnis haben, diese zu kennen.</p>
      </div>
      
      <div class="section">
        <h2>Ihre gesetzlichen Rechte</h2>
        <p>Unter bestimmten Umständen haben Sie gemäß den Datenschutzgesetzen Rechte in Bezug auf Ihre persönlichen Daten, einschließlich des Rechts auf:</p>
        <ul>
          <li>Zugang zu Ihren persönlichen Daten zu verlangen</li>
          <li>Berichtigung Ihrer persönlichen Daten zu verlangen</li>
          <li>Löschung Ihrer persönlichen Daten zu verlangen</li>
          <li>Widerspruch gegen die Verarbeitung Ihrer persönlichen Daten</li>
          <li>Einschränkung der Verarbeitung Ihrer persönlichen Daten zu verlangen</li>
          <li>Übertragung Ihrer persönlichen Daten zu verlangen</li>
          <li>Recht auf Widerruf der Einwilligung</li>
        </ul>
      </div>
      
      <div class="region-specific">
        <h4>Zusätzliche Informationen für EU-Einwohner</h4>
        <p>Wenn Sie in der Europäischen Union wohnen, haben Sie gemäß der Datenschutz-Grundverordnung (DSGVO) bestimmte zusätzliche Rechte:</p>
        <ul>
          <li>Wir fungieren als Datenverantwortlicher für die persönlichen Informationen, die wir über unsere Website sammeln.</li>
          <li>Die Rechtsgrundlage für die Verarbeitung Ihrer Daten kann Einwilligung, vertragliche Notwendigkeit und unsere berechtigten Geschäftsinteressen umfassen.</li>
          <li>Sie haben das Recht, bei einer Aufsichtsbehörde in Ihrem Wohnsitzland Beschwerde einzulegen.</li>
          <li>Wir werden Ihre Daten nicht länger aufbewahren, als es für die in dieser Richtlinie dargelegten Zwecke notwendig ist.</li>
          <li>Wenn wir beabsichtigen, Ihre Daten außerhalb des EWR zu übertragen, werden wir sicherstellen, dass angemessene Schutzmaßnahmen vorhanden sind.</li>
        </ul>
      </div>
      
      <div class="section">
        <h2>Cookies</h2>
        <p>Unsere Website verwendet Cookies, um Sie von anderen Benutzern unserer Website zu unterscheiden. Dies hilft uns, Ihnen ein gutes Erlebnis zu bieten, wenn Sie unsere Website durchsuchen, und ermöglicht es uns auch, unsere Website zu verbessern.</p>
      </div>
      
      <div class="section">
        <h2>Änderungen an dieser Datenschutzrichtlinie</h2>
        <p>Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wir werden Sie über alle Änderungen informieren, indem wir die neue Datenschutzrichtlinie auf dieser Seite veröffentlichen und das Datum "Zuletzt aktualisiert" am Anfang dieser Richtlinie aktualisieren.</p>
      </div>
      
      <div class="section">
        <h2>Kontaktieren Sie uns</h2>
        <p>Wenn Sie Fragen zu dieser Datenschutzrichtlinie oder unseren Datenschutzpraktiken haben, kontaktieren Sie uns bitte unter:</p>
        {displayOptions.email && (
          <p>E-Mail: <ObfuscatedEmail email={contact.email} showAsLink={false} /></p>
        )}
        {displayOptions.phone && (
          <p>Telefon: {contact.phone}</p>
        )}
        {displayOptions.address && (
          <p>Adresse: {`${contact.address.street}, ${contact.address.city}, ${contact.address.postalCode}, ${contact.address.country}`}</p>
        )}
      </div>
      
      <p class="effective-date">Diese Datenschutzrichtlinie ist ab dem {legalInfo.lastUpdated} wirksam.</p>
    </div>
  );
});

export default PrivacyPolicy;
