import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from '../case-studies.css?inline';

export const caseStudyInfo = {
  id: "retail-chain-erp",
  title: "Maßgeschneiderte ERP-Lösung für Einzelhandelskette",
  industry: "Einzelhandel",
  description: "Entwicklung eines maßgeschneiderten ERP-Systems, das alle Geschäftsprozesse integrierte und die Betriebseffizienz um 25% steigerte.",
  readMore: "Fallstudie lesen",
  imageUrl: "/media/retail-chain-erp-solution.png",
  tags: ["Einzelhandel", "ERP", "Business Intelligence", "Bestandsmanagement"]
};

export const RetailChainERP = component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="case-study-content">
      <p>Eine wachsende Einzelhandelskette mit über 200 Standorten in Deutschland und den Nachbarländern kämpfte mit fragmentierten Systemen, die mit ihrer schnellen Expansion nicht Schritt halten konnten.</p>
      
      <h3>Die Herausforderung</h3>
      
      <p>Der Kunde hatte erhebliche Probleme:</p>
      <ul>
        <li>Unverbundene Bestands-, Kassensysteme und Finanzsysteme</li>
        <li>Unfähigkeit, konsolidierte Berichte über alle Standorte hinweg zu erhalten</li>
        <li>Ineffizientes Lieferketten- und Bestandsmanagement</li>
        <li>Schwierigkeiten bei der Verwaltung der Personalplanung an mehreren Standorten</li>
        <li>Begrenzte Kundeneinblicke und Funktionen für Treueprogramme</li>
      </ul>
      
      <h3>Unsere Lösung</h3>
      
      <p>Wir entwickelten eine maßgeschneiderte ERP-Lösung, die auf ihre spezifischen Einzelhandelsabläufe zugeschnitten war:</p>
      <ul>
        <li>Integration von Bestands-, Kassen-, Finanz- und HR-Modulen in einer einzigen Plattform</li>
        <li>Implementierung von Echtzeit-Bestandsverfolgung an allen Standorten</li>
        <li>Erstellung fortschrittlicher Analyse- und Berichtsdashboards</li>
        <li>Entwicklung eines KI-gestützten Bedarfsprognosesystems</li>
        <li>Aufbau einer umfassenden Kundenbindungs- und Einblicksplattform</li>
      </ul>
      
      <h3>Ergebnisse</h3>
      
      <p>Die maßgeschneiderte ERP-Lösung transformierte ihre Abläufe:</p>
      <ul>
        <li>25% Steigerung der gesamten Betriebseffizienz</li>
        <li>32% Reduzierung der Bestandskosten durch optimierte Lagerbestände</li>
        <li>18% Steigerung der Kundenbindung durch verbessertes Treueprogramm</li>
        <li>Konsolidierte Echtzeit-Berichterstattung über alle Standorte hinweg</li>
        <li>Skalierbare Plattform zur Unterstützung der weiteren Expansion</li>
      </ul>
      
      <p>Die Einzelhandelskette verfügt nun über die technologische Grundlage, um ihre ehrgeizigen Wachstumspläne zu unterstützen und gleichzeitig betriebliche Exzellenz zu gewährleisten.</p>
    </div>
  );
});

export default RetailChainERP;
