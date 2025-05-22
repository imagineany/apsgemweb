import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from '../case-studies.css?inline';

export const caseStudyInfo = {
  id: "agentic-ai-marketplace",
  title: "Agentische KI-Lösung für dezentralen Aufgabenmarktplatz",
  industry: "Künstliche Intelligenz / Blockchain",
  description: "Implementierung einer MCP-Protokollintegration, die es LLMs ermöglicht, autonom auf einem dezentralen Aufgabenmarktplatz zu operieren, wodurch die Aufgabenerledigungszeit um 70% reduziert und das Transaktionsvolumen erhöht wurde.",
  readMore: "Fallstudie lesen",
  imageUrl: "/media/mcp-agentic-ai-marketplace.png",
  tags: ["Künstliche Intelligenz", "Blockchain", "MCP", "Dezentrale Systeme"]
};

export const AgenticAIMarketplace = component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="case-study-content">
      <p>Ein Pionierunternehmen im Blockchain-Bereich, das einen dezentralen Marktplatz für digitale Aufgaben betreibt, wollte KI nutzen, um die Aufgabenausführung zu automatisieren und die Plattformeffizienz zu verbessern.</p>
      
      <h3>Die Herausforderung</h3>
      
      <p>Der Kunde stand vor innovativen technischen Herausforderungen:</p>
      <ul>
        <li>Manuelle Aufgabenausführung, die Engpässe verursachte</li>
        <li>Komplexe Integration zwischen KI-Systemen und Blockchain-Infrastruktur</li>
        <li>Bedarf an autonomen KI-Agenten, die ohne menschliches Eingreifen arbeiten können</li>
        <li>Sicherheitsbedenken bezüglich KI-Zugriff auf Blockchain-Transaktionen</li>
        <li>Skalierbarkeitsbeschränkungen mit der bestehenden Architektur</li>
      </ul>
      
      <h3>Unsere Lösung</h3>
      
      <p>Wir entwickelten eine bahnbrechende agentische KI-Lösung:</p>
      <ul>
        <li>Implementierung einer Model Context Protocol (MCP)-Integration, die es LLMs ermöglicht, direkt mit dem Marktplatz zu interagieren</li>
        <li>Erstellung spezialisierter KI-Agenten für verschiedene Aufgabenkategorien</li>
        <li>Entwicklung sicherer Authentifizierungs- und Berechtigungssysteme für KI-Operationen</li>
        <li>Aufbau eines Überwachungs- und Governance-Frameworks für KI-Aktivitäten</li>
        <li>Implementierung einer skalierbaren Architektur, die Tausende gleichzeitiger KI-Agenten unterstützt</li>
      </ul>
      
      <h3>Ergebnisse</h3>
      
      <p>Die agentische KI-Lösung lieferte transformative Ergebnisse:</p>
      <ul>
        <li>70% Reduzierung der Aufgabenerledigungszeit</li>
        <li>300% Steigerung des Marktplatz-Transaktionsvolumens</li>
        <li>85% der Aufgaben werden jetzt autonom ohne menschliches Eingreifen erledigt</li>
        <li>Signifikante Verbesserung der Aufgabenqualität und -konsistenz</li>
        <li>Neue Einnahmequellen durch KI-as-a-Service-Angebote</li>
      </ul>
      
      <p>Die Plattform ist zu einem führenden Beispiel für praktische KI-Blockchain-Integration geworden und setzt neue Standards für dezentrale autonome Systeme.</p>
    </div>
  );
});

export default AgenticAIMarketplace;
