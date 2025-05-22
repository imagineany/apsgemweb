import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from '../case-studies.css?inline';

export const caseStudyInfo = {
  id: "telecom-vendor-swap",
  title: "5G-Gerätelieferantenwechsel-Plattform für Telekommunikationsanbieter",
  industry: "Telekommunikation",
  description: "Entwicklung einer B2B-Plattform für den Echtzeit-Datenaustausch zwischen einem Mobilfunkbetreiber und Gerätelieferanten, die eine automatisierte 5G-Standortkonfiguration und -bereitstellung ermöglicht und die Einführungszeit um 60% reduziert.",
  readMore: "Fallstudie lesen",
  imageUrl: "/media/5g-equipment-vendor-swap.png",
  tags: ["Telekommunikation", "5G", "B2B-Integration", "Automatisierung"]
};

export const TelecomVendorSwap = component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="case-study-content">
      <p>Ein großer europäischer Telekommunikationsanbieter, der eine landesweite 5G-Netzwerkeinführung durchführte, musste seinen bestehenden Gerätelieferanten ersetzen und gleichzeitig Störungen minimieren und die Bereitstellung beschleunigen.</p>
      
      <h3>Die Herausforderung</h3>
      
      <p>Der Kunde stand vor komplexen technischen und betrieblichen Herausforderungen:</p>
      <ul>
        <li>Migration tausender Mobilfunkstandorte zu neuen Lieferantengeräten</li>
        <li>Komplexe Konfigurationsanforderungen für jeden Standort</li>
        <li>Manuelle Prozesse, die erhebliche Verzögerungen verursachten</li>
        <li>Begrenzte Sichtbarkeit des Bereitstellungsfortschritts</li>
        <li>Risiko von Serviceunterbrechungen während des Übergangs</li>
      </ul>
      
      <h3>Unsere Lösung</h3>
      
      <p>Wir entwickelten eine spezialisierte B2B-Datenaustauschplattform:</p>
      <ul>
        <li>Erstellung sicherer API-Integrationen zwischen Betreiber- und Lieferantensystemen</li>
        <li>Implementierung automatisierter Konfigurationserstellung und -validierung</li>
        <li>Entwicklung von Echtzeit-Bereitstellungsverfolgung und -überwachung</li>
        <li>Aufbau intelligenter Planungsalgorithmen zur Optimierung der Einführungssequenz</li>
        <li>Erstellung umfassender Test- und Verifizierungsworkflows</li>
      </ul>
      
      <h3>Ergebnisse</h3>
      
      <p>Die Plattform lieferte außergewöhnliche Ergebnisse:</p>
      <ul>
        <li>60% Reduzierung der Standortbereitstellungszeit</li>
        <li>85% Verringerung von Konfigurationsfehlern</li>
        <li>Echtzeit-Sichtbarkeit des Bereitstellungsstatus in allen Regionen</li>
        <li>Nahtloser Übergang ohne kundenwirksame Vorfälle</li>
        <li>Beschleunigung des landesweiten 5G-Einführungszeitplans um 8 Monate</li>
      </ul>
      
      <p>Der Telekommunikationsanbieter schloss seinen Lieferantenwechsel vor dem Zeitplan ab und erlangte einen Wettbewerbsvorteil im 5G-Markt.</p>
    </div>
  );
});

export default TelecomVendorSwap;
