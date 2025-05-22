import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from '../case-studies.css?inline';

export const caseStudyInfo = {
  id: "financial-services-cloud-migration",
  title: "Cloud-Migration für Finanzdienstleistungen",
  industry: "Finanzdienstleistungen",
  description: "Modernisierung der Legacy-Infrastruktur mit einer sicheren Cloud-Lösung, die Kosten um 40% reduzierte und die Verfügbarkeit auf 99,99% verbesserte.",
  readMore: "Fallstudie lesen",
  imageUrl: "/media/financial-services-cloud-migration.png",
  tags: ["Finanzdienstleistungen", "Cloud-Migration", "AWS", "Sicherheit"]
};

export const FinancialServicesCloudMigration = component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="case-study-content">
      <p>Ein etablierter Finanzdienstleister mit über 50 Milliarden Euro verwaltetem Vermögen musste seine alternde Infrastruktur modernisieren und gleichzeitig strenge Sicherheits- und Compliance-Anforderungen erfüllen.</p>
      
      <h3>Die Herausforderung</h3>
      
      <p>Der Kunde stand vor mehreren kritischen Problemen:</p>
      <ul>
        <li>Legacy-Systeme am Ende ihrer Lebensdauer mit steigenden Wartungskosten</li>
        <li>Leistungsprobleme während Spitzenhandelszeiten</li>
        <li>Schwierigkeiten bei der Erfüllung sich entwickelnder regulatorischer Anforderungen</li>
        <li>Begrenzte Disaster-Recovery-Fähigkeiten</li>
        <li>Zunehmende Sicherheitsbedenken</li>
      </ul>
      
      <h3>Unsere Lösung</h3>
      
      <p>Wir haben eine umfassende Cloud-Migrationsstrategie entwickelt und implementiert:</p>
      <ul>
        <li>Entwicklung einer sicheren, konformen Cloud-Architektur auf AWS</li>
        <li>Implementierung eines phasenweisen Migrationsansatzes zur Minimierung von Störungen</li>
        <li>Erstellung automatisierter Compliance- und Sicherheitsüberwachung</li>
        <li>Einrichtung robuster Disaster-Recovery mit Multi-Region-Failover</li>
        <li>Implementierung einer Zero-Trust-Sicherheitsarchitektur</li>
      </ul>
      
      <h3>Ergebnisse</h3>
      
      <p>Die Cloud-Migration lieferte transformative Ergebnisse:</p>
      <ul>
        <li>40% Reduzierung der Infrastrukturkosten</li>
        <li>Verbesserte Systemverfügbarkeit auf 99,99%</li>
        <li>70% schnellere Bereitstellung neuer Funktionen</li>
        <li>Verbesserte Sicherheitslage mit kontinuierlicher Compliance-Überwachung</li>
        <li>Skalierbare Plattform, die das 3-fache des vorherigen Transaktionsvolumens bewältigt</li>
      </ul>
      
      <p>Der Kunde genießt jetzt eine moderne, sichere Infrastruktur, die sein Geschäftswachstum unterstützt und gleichzeitig alle regulatorischen Anforderungen erfüllt.</p>
    </div>
  );
});

export default FinancialServicesCloudMigration;
