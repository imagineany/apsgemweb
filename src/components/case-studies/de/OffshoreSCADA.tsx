import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from '../case-studies.css?inline';

export const caseStudyInfo = {
  id: "offshore-scada",
  title: "Hybrid-Offshore-SCADA: Siemens WinCC zu Cloud-Native Transformation",
  industry: "Energie / Offshore",
  description: "Modernisierung der Legacy-Siemens-WinCC-SCADA-Infrastruktur mit Cloud-nativen Microservices, Reduzierung der Wartungskosten um 40% und Erreichen von 99,9% Verfügbarkeit für Offshore-Windpark-Operationen.",
  readMore: "Fallstudie lesen",
  imageUrl: "/media/offshore-scada-system.png",
  tags: ["SCADA", "Siemens WinCC", "Cloud-Native", "Offshore", "Industrial IoT", "Modbus", "OPC UA"]
};

export const OffshoreSCADA = component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="case-study-content">
      <p>Ein großer Offshore-Windpark-Betreiber musste seine alternde Siemens WinCC SCADA-Infrastruktur modernisieren und dabei die operative Kontinuität für kritische Energieproduktionssysteme in rauen Meeresumgebungen aufrechterhalten.</p>
      
      <h3>Die Herausforderung</h3>
      
      <p>Der Kunde stand vor komplexen technischen und operativen Herausforderungen:</p>
      <ul>
        <li>Legacy-Siemens-WinCC-System mit begrenzter Skalierbarkeit und hohen Wartungskosten</li>
        <li>Raue Offshore-Umgebung, die robuste, zuverlässige Kommunikation erfordert</li>
        <li>Komplexe Integration von 200+ Windturbinensteuerungen über Modbus TCP/RTU</li>
        <li>Bedarf an Echtzeit-Überwachung und vorausschauenden Wartungsfähigkeiten</li>
        <li>Regulatorische Compliance-Anforderungen für kritische Energieinfrastruktur</li>
        <li>Begrenzte Konnektivitätsbandbreite zwischen Offshore-Plattform und Onshore-Betrieb</li>
      </ul>
      
      <h3>Unsere Lösung</h3>
      
      <p>Wir entwickelten eine hybride SCADA-Architektur, die traditionelle Siemens-Infrastruktur mit modernen Cloud-nativen Technologien verbindet:</p>
      <ul>
        <li>Beibehaltung der bestehenden Siemens WinCC HMI bei gleichzeitiger Hinzufügung einer Cloud-nativen Datenverarbeitungsschicht</li>
        <li>Implementierung eines OPC UA-Gateways für nahtlose Integration zwischen Legacy-PLCs und modernen Systemen</li>
        <li>Bereitstellung von Edge-Computing-Knoten mit Kubernetes-Orchestrierung für lokale Verarbeitung</li>
        <li>Erstellung einer Microservices-Architektur auf AWS für skalierbare Datenanalyse und -speicherung</li>
        <li>Integration von DNP3-sicherer Authentifizierung für kritische Steuerungsfunktionen</li>
        <li>Aufbau von MQTT Sparkplug B-Datenorganisation für effiziente IoT-Kommunikation</li>
        <li>Implementierung von Digital-Twin-Technologie für vorausschauende Wartungsalgorithmen</li>
        <li>Entwicklung von Echtzeit-Dashboards mit React-basierten modernen Web-Interfaces</li>
        <li>Erstellung redundanter Kommunikationswege: Satellit, Mobilfunk und Glasfaser-Backup</li>
      </ul>
      
      <h3>Technische Umsetzung</h3>
      
      <p>Wichtige integrierte Technologien und Protokolle:</p>
      <ul>
        <li><strong>Traditionelle SCADA:</strong> Siemens WinCC, TIA Portal, S7-1500 PLCs, Profinet</li>
        <li><strong>Kommunikationsprotokolle:</strong> Modbus TCP/RTU, DNP3, OPC UA, MQTT Sparkplug B</li>
        <li><strong>Cloud-Infrastruktur:</strong> AWS IoT Core, Kubernetes, Docker-Container</li>
        <li><strong>Edge Computing:</strong> Lokale Datenverarbeitung, Zeitreihendatenbanken</li>
        <li><strong>Sicherheit:</strong> IEC 62443-Compliance, Zero-Trust-Architektur, VPN-Tunneling</li>
        <li><strong>Analytik:</strong> Machine Learning für vorausschauende Wartung, Anomalieerkennung</li>
      </ul>
      
      <h3>Ergebnisse</h3>
      
      <p>Die hybride SCADA-Transformation lieferte außergewöhnliche operative Verbesserungen:</p>
      <ul>
        <li>40% Reduzierung der Wartungskosten durch vorausschauende Analytik</li>
        <li>99,9% Systemverfügbarkeit trotz rauer Offshore-Bedingungen</li>
        <li>50% schnellere Datenerfassung durch optimierte Modbus-Polling-Strategien</li>
        <li>Echtzeit-Alarmreaktion reduziert von 15 Minuten auf 30 Sekunden</li>
        <li>Nahtlose Integration von 200+ Turbinensteuerungen im gesamten Windpark</li>
        <li>Verbesserte Cybersicherheitslage mit moderner Authentifizierung und Verschlüsselung</li>
        <li>Skalierbare Architektur bereit für zukünftige Windpark-Erweiterungen</li>
        <li>Reduziertes operatives Risiko durch redundante Kommunikationssysteme</li>
      </ul>
      
      <p>Der Offshore-Windpark arbeitet nun mit einem zukunftsfähigen SCADA-System, das die Zuverlässigkeit bewährter Siemens-Technologie mit der Skalierbarkeit und Intelligenz Cloud-nativer Lösungen kombiniert und neue Standards für Offshore-Erneuerbare-Energie-Operationen setzt.</p>
    </div>
  );
});

export default OffshoreSCADA;
