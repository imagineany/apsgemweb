import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from '../case-studies.css?inline';

export const caseStudyInfo = {
  id: "offshore-scada",
  title: "Hybrid Offshore SCADA: Siemens WinCC to Cloud-Native Transformation",
  industry: "Energy / Offshore",
  description: "Modernized legacy Siemens WinCC SCADA infrastructure with cloud-native microservices, reducing maintenance costs by 40% and achieving 99.9% uptime for offshore wind farm operations.",
  readMore: "Read Case Study",
  imageUrl: "/media/offshore-scada-system.png",
  tags: ["SCADA", "Siemens WinCC", "Cloud-Native", "Offshore", "Industrial IoT", "Modbus", "OPC UA"]
};

export const OffshoreSCADA = component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="case-study-content">
      <p>A major offshore wind farm operator needed to modernize their aging Siemens WinCC SCADA infrastructure while maintaining operational continuity for critical energy production systems in harsh marine environments.</p>
      
      <h3>The Challenge</h3>
      
      <p>The client faced complex technical and operational challenges:</p>
      <ul>
        <li>Legacy Siemens WinCC system with limited scalability and high maintenance costs</li>
        <li>Harsh offshore environment requiring ruggedized, reliable communications</li>
        <li>Complex integration of 200+ wind turbine controllers via Modbus TCP/RTU</li>
        <li>Need for real-time monitoring and predictive maintenance capabilities</li>
        <li>Regulatory compliance requirements for critical energy infrastructure</li>
        <li>Limited connectivity bandwidth between offshore platform and onshore operations</li>
      </ul>
      
      <h3>Our Solution</h3>
      
      <p>We developed a hybrid SCADA architecture bridging traditional Siemens infrastructure with modern cloud-native technologies:</p>
      <ul>
        <li>Maintained existing Siemens WinCC HMI while adding cloud-native data processing layer</li>
        <li>Implemented OPC UA gateway for seamless integration between legacy PLCs and modern systems</li>
        <li>Deployed edge computing nodes with Kubernetes orchestration for local processing</li>
        <li>Created microservices architecture on AWS for scalable data analytics and storage</li>
        <li>Integrated DNP3 secure authentication for critical control functions</li>
        <li>Built MQTT Sparkplug B data organization for efficient IoT communication</li>
        <li>Implemented digital twin technology for predictive maintenance algorithms</li>
        <li>Developed real-time dashboards with React-based modern web interfaces</li>
        <li>Created redundant communication paths: satellite, cellular, and fiber backup</li>
      </ul>
      
      <h3>Technical Implementation</h3>
      
      <p>Key technologies and protocols integrated:</p>
      <ul>
        <li><strong>Traditional SCADA:</strong> Siemens WinCC, TIA Portal, S7-1500 PLCs, Profinet</li>
        <li><strong>Communication Protocols:</strong> Modbus TCP/RTU, DNP3, OPC UA, MQTT Sparkplug B</li>
        <li><strong>Cloud Infrastructure:</strong> AWS IoT Core, Kubernetes, Docker containers</li>
        <li><strong>Edge Computing:</strong> Local data processing, time-series databases</li>
        <li><strong>Security:</strong> IEC 62443 compliance, zero-trust architecture, VPN tunneling</li>
        <li><strong>Analytics:</strong> Machine learning for predictive maintenance, anomaly detection</li>
      </ul>
      
      <h3>Results</h3>
      
      <p>The hybrid SCADA transformation delivered exceptional operational improvements:</p>
      <ul>
        <li>40% reduction in maintenance costs through predictive analytics</li>
        <li>99.9% system uptime despite harsh offshore conditions</li>
        <li>50% faster data acquisition through optimized Modbus polling strategies</li>
        <li>Real-time alarm response reduced from 15 minutes to 30 seconds</li>
        <li>Seamless integration of 200+ turbine controllers across the wind farm</li>
        <li>Enhanced cybersecurity posture with modern authentication and encryption</li>
        <li>Scalable architecture ready for future wind farm expansions</li>
        <li>Reduced operational risk through redundant communication systems</li>
      </ul>
      
      <p>The offshore wind farm now operates with a future-ready SCADA system that combines the reliability of proven Siemens technology with the scalability and intelligence of cloud-native solutions, setting new standards for offshore renewable energy operations.</p>
    </div>
  );
});

export default OffshoreSCADA;
