import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from '../legal.css?inline';

export const legalInfo = {
  id: "terms-of-service",
  title: "Nutzungsbedingungen",
  lastUpdated: "25. Mai 2025"
};

export const TermsOfService = component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="legal-content">
      <h1>Nutzungsbedingungen</h1>
      <p>Zuletzt aktualisiert: {legalInfo.lastUpdated}</p>
      
      <div class="section">
        <h2>Einleitung</h2>
        <p>Willkommen bei {'{company.name}'}. Diese Nutzungsbedingungen ("Bedingungen") regeln Ihre Nutzung unserer Website und Dienstleistungen. Durch den Zugriff auf oder die Nutzung unserer Website erklären Sie sich mit diesen Bedingungen einverstanden. Wenn Sie mit einem Teil der Bedingungen nicht einverstanden sind, dürfen Sie nicht auf unsere Website zugreifen oder unsere Dienstleistungen nutzen.</p>
      </div>
      
      <div class="section">
        <h2>Nutzung unserer Dienstleistungen</h2>
        <p>Unsere Website und Dienstleistungen sind für geschäftliche und professionelle Nutzung bestimmt. Sie stimmen zu, unsere Dienstleistungen nur für rechtmäßige Zwecke und in Übereinstimmung mit diesen Bedingungen zu nutzen. Sie stimmen zu, nicht:</p>
        <ul>
          <li>Unsere Dienstleistungen in einer Weise zu nutzen, die gegen geltende Gesetze oder Vorschriften verstößt</li>
          <li>Zu versuchen, die ordnungsgemäße Funktion unserer Dienstleistungen zu stören</li>
          <li>Maßnahmen zu umgehen, die wir möglicherweise verwenden, um den Zugriff auf unsere Dienstleistungen zu verhindern oder einzuschränken</li>
          <li>Zu versuchen, Software auf unserer Website zurückzuentwickeln</li>
          <li>Persönliche Informationen anderer zu sammeln oder zu verfolgen</li>
        </ul>
      </div>
      
      <div class="section">
        <h2>Geistiges Eigentum</h2>
        <p>Der Inhalt auf unserer Website, einschließlich, aber nicht beschränkt auf Text, Grafiken, Logos, Bilder und Software, ist Eigentum von {'{company.name}'} und durch Urheberrechte und andere Gesetze zum Schutz des geistigen Eigentums geschützt. Sie dürfen keines der Materialien auf unserer Website ohne unsere vorherige schriftliche Zustimmung reproduzieren, verteilen, modifizieren, abgeleitete Werke erstellen, öffentlich anzeigen, öffentlich aufführen, neu veröffentlichen, herunterladen, speichern oder übertragen.</p>
      </div>
      
      <div class="section">
        <h2>Benutzerinhalte</h2>
        <p>Wenn Sie uns Inhalte zur Verfügung stellen, gewähren Sie uns eine nicht-exklusive, weltweite, gebührenfreie, unwiderrufliche, unterlizenzierbare Lizenz zur Nutzung, Reproduktion, Anpassung, Veröffentlichung, Übersetzung und Verbreitung Ihrer Inhalte in allen bestehenden oder zukünftigen Medien. Sie versichern und garantieren, dass Sie die Inhalte, die Sie bereitstellen, besitzen oder die notwendigen Rechte daran haben und dass diese keine geistigen Eigentumsrechte oder andere Rechte Dritter verletzen.</p>
      </div>
      
      <div class="section">
        <h2>Haftungsausschluss</h2>
        <p>Unsere Dienstleistungen werden "wie sie sind" und "wie verfügbar" ohne jegliche Garantien jeglicher Art, weder ausdrücklich noch implizit, bereitgestellt. Wir garantieren nicht, dass unsere Dienstleistungen ununterbrochen, zeitgerecht, sicher oder fehlerfrei sein werden.</p>
      </div>
      
      <div class="section">
        <h2>Haftungsbeschränkung</h2>
        <p>Soweit gesetzlich zulässig, haftet {'{company.name}'} nicht für indirekte, zufällige, besondere, Folge- oder Strafschäden oder für entgangene Gewinne oder Einnahmen, ob direkt oder indirekt entstanden, oder für Verluste von Daten, Nutzung, Goodwill oder andere immaterielle Verluste, die aus Ihrer Nutzung unserer Dienstleistungen resultieren.</p>
      </div>
      
      <div class="region-specific">
        <h4>Zusätzliche Bedingungen für EU-Kunden</h4>
        <p>Wenn Sie in der Europäischen Union wohnen, gelten die folgenden zusätzlichen Bedingungen:</p>
        <ul>
          <li>Nichts in diesen Bedingungen schließt unsere Haftung für Tod oder Personenschäden aus, die durch unsere Fahrlässigkeit entstehen, oder für unseren Betrug oder betrügerische Falschdarstellung oder jede andere Haftung, die nach geltendem Recht nicht ausgeschlossen oder beschränkt werden kann.</li>
          <li>Wenn Sie ein Verbraucher sind, haben Sie bestimmte gesetzliche Rechte, die von diesen Bedingungen nicht berührt werden. Für weitere Informationen über Ihre gesetzlichen Rechte wenden Sie sich an Ihre lokale Verbraucherberatungsstelle.</li>
          <li>Jeder Streit, der aus diesen Bedingungen entsteht, unterliegt den Gesetzen Ihres Wohnsitzlandes, und Sie können rechtliche Schritte vor den Gerichten Ihres Wohnsitzlandes einleiten.</li>
        </ul>
      </div>
      
      <div class="section">
        <h2>Entschädigung</h2>
        <p>Sie stimmen zu, {'{company.name}'} und seine verbundenen Unternehmen, leitenden Angestellten, Vertreter und Mitarbeiter von jeglichen Ansprüchen oder Forderungen, einschließlich angemessener Anwaltsgebühren, freizustellen und schadlos zu halten, die von Dritten aufgrund Ihrer Verletzung dieser Bedingungen oder Ihrer Verletzung von Gesetzen oder Rechten Dritter erhoben werden.</p>
      </div>
      
      <div class="section">
        <h2>Kündigung</h2>
        <p>Wir können Ihren Zugang zu unseren Dienstleistungen sofort, ohne vorherige Ankündigung oder Haftung, aus irgendeinem Grund kündigen oder aussetzen, einschließlich, ohne Einschränkung, wenn Sie gegen diese Bedingungen verstoßen. Bei Kündigung erlischt Ihr Recht zur Nutzung unserer Dienstleistungen sofort.</p>
      </div>
      
      <div class="section">
        <h2>Änderungen dieser Bedingungen</h2>
        <p>Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern oder zu ersetzen. Wenn eine Überarbeitung wesentlich ist, werden wir mindestens 30 Tage vor Inkrafttreten neuer Bedingungen eine Mitteilung machen. Was eine wesentliche Änderung darstellt, wird nach unserem alleinigen Ermessen bestimmt.</p>
      </div>
      
      <div class="section">
        <h2>Kontaktieren Sie uns</h2>
        <p>Wenn Sie Fragen zu diesen Bedingungen haben, kontaktieren Sie uns bitte unter:</p>
        <p>E-Mail: {'{contact.email}'}</p>
        <p>Telefon: {'{contact.phone}'}</p>
        <p>Adresse: {'{contact.address.street}, {contact.address.city}, {contact.address.postalCode}, {contact.address.country}'}</p>
      </div>
      
      <p class="effective-date">Diese Nutzungsbedingungen sind ab dem {legalInfo.lastUpdated} wirksam.</p>
    </div>
  );
});

export default TermsOfService;
