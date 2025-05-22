import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from '../case-studies.css?inline';

export const caseStudyInfo = {
  id: "ai-gis-fibre-rollout",
  title: "KI-GIS-Glasfaserausbaulösung",
  industry: "Infrastruktur",
  description: "Erstellung eines intelligenten GIS-basierten Systems mit KI, um die Planung und Bereitstellung von Glasfasernetzen zu optimieren, die Routenauswahl zu automatisieren und die Planungskosten um 45% zu reduzieren.",
  readMore: "Fallstudie lesen",
  imageUrl: "/media/ai-gis-fibre-rollout.png",
  tags: ["Infrastruktur", "KI", "GIS", "Netzwerkplanung"]
};

export const AIGISFibreRollout = component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="case-study-content">
      <p>Ein nationaler Infrastrukturanbieter, der einen ehrgeizigen Glasfaserbreitbandausbau startete, musste die Planung und Bereitstellung in verschiedenen geografischen Gebieten optimieren.</p>
      
      <h3>Die Herausforderung</h3>
      
      <p>Der Kunde kämpfte mit mehreren kritischen Problemen:</p>
      <ul>
        <li>Komplexe manuelle Planungsprozesse für Glasfaserrouten</li>
        <li>Schwierigkeiten bei der Optimierung der Bereitstellung in städtischen und ländlichen Gebieten</li>
        <li>Begrenzte Integration zwischen Planung und Feldeinsätzen</li>
        <li>Ineffiziente Ressourcenzuweisung</li>
        <li>Herausforderungen bei der Priorisierung von Gebieten für maximalen ROI</li>
      </ul>
      
      <h3>Unsere Lösung</h3>
      
      <p>Wir entwickelten eine KI-GIS-Lösung:</p>
      <ul>
        <li>Integration mehrerer Datenquellen einschließlich Gelände, bestehender Infrastruktur und Bevölkerungsdichte</li>
        <li>Implementierung von Machine-Learning-Algorithmen zur Optimierung der Routenplanung</li>
        <li>Erstellung automatisierter Kosten-Nutzen-Analysen für die Bereitstellungspriorisierung</li>
        <li>Entwicklung mobiler Anwendungen für Feldteams mit Echtzeit-Updates</li>
        <li>Aufbau umfassender Analyse-Dashboards für das Management</li>
      </ul>
      
      <h3>Ergebnisse</h3>
      
      <p>Die KI-Lösung transformierte ihren Glasfaserausbau:</p>
      <ul>
        <li>45% Reduzierung der Planungskosten</li>
        <li>38% schnellere Routengestaltung und -genehmigung</li>
        <li>52% Verbesserung der Ressourcennutzung</li>
        <li>Optimierte Bereitstellungspriorisierung, die den ROI um 30% steigerte</li>
        <li>Nahtlose Koordination zwischen Planung und Feldeinsätzen</li>
      </ul>
      
      <p>Der Infrastrukturanbieter baut nun Glasfaser in einem beschleunigten Tempo aus und bringt Hochgeschwindigkeitsverbindungen effizienter als je zuvor zu den Gemeinden.</p>
    </div>
  );
});

export default AIGISFibreRollout;
