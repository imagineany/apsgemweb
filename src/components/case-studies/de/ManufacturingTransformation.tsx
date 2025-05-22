import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from '../case-studies.css?inline';

export const caseStudyInfo = {
  id: "manufacturing-transformation",
  title: "Digitale Transformation in der Fertigung",
  industry: "Fertigung",
  description: "Implementierung einer integrierten digitalen Plattform, die Abläufe optimierte und Kosten um 35% reduzierte.",
  readMore: "Fallstudie lesen",
  imageUrl: "/media/digital-manufacturing-transformation.png",
  tags: ["Fertigung", "Digitale Transformation", "IoT", "Industrie 4.0"]
};

export const ManufacturingTransformation = component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="case-study-content">
      <p>Ein führendes europäisches Fertigungsunternehmen mit Niederlassungen in 12 Ländern stand vor erheblichen Herausforderungen mit unterschiedlichen Systemen, manuellen Prozessen und begrenzter Transparenz in ihren Produktionsstätten.</p>
      
      <h3>Die Herausforderung</h3>
      
      <p>Der Kunde hatte mit folgenden Problemen zu kämpfen:</p>
      <ul>
        <li>Isolierte Daten in mehreren Legacy-Systemen</li>
        <li>Ineffiziente manuelle Prozesse, die zu Produktionsverzögerungen führten</li>
        <li>Begrenzte Echtzeit-Transparenz der Betriebsabläufe</li>
        <li>Schwierigkeiten bei der Skalierung der Produktion zur Deckung der wachsenden Nachfrage</li>
      </ul>
      
      <h3>Unsere Lösung</h3>
      
      <p>Wir entwickelten eine umfassende Strategie zur digitalen Transformation und implementierten eine integrierte Plattform, die:</p>
      <ul>
        <li>Daten aus allen Produktionsstätten in einem zentralen System vereinte</li>
        <li>Wichtige Arbeitsabläufe und Genehmigungsprozesse automatisierte</li>
        <li>Echtzeit-Dashboards und Analysen für das Management bereitstellte</li>
        <li>Vorausschauende Wartung zur Reduzierung von Ausfallzeiten ermöglichte</li>
        <li>IoT-Sensoren in der gesamten Produktionslinie integrierte</li>
      </ul>
      
      <h3>Ergebnisse</h3>
      
      <p>Die Initiative zur digitalen Transformation lieferte erheblichen geschäftlichen Mehrwert:</p>
      <ul>
        <li>35% Reduzierung der Betriebskosten</li>
        <li>42% Verbesserung der Produktionseffizienz</li>
        <li>28% Verringerung der wartungsbedingten Ausfallzeiten</li>
        <li>Echtzeit-Transparenz über alle Einrichtungen hinweg</li>
        <li>Skalierbare Plattform, die ein Geschäftswachstum von 30% unterstützt</li>
      </ul>
      
      <p>Der Kunde ist jetzt als Branchenführer in der intelligenten Fertigung positioniert, mit der digitalen Infrastruktur zur Unterstützung kontinuierlicher Innovation und Wachstum.</p>
    </div>
  );
});

export default ManufacturingTransformation;
