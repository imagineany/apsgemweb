import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from '../case-studies.css?inline';

export const caseStudyInfo = {
  id: "telecom-vendor-swap",
  title: "5G Equipment Vendor Swap Platform for Telecom Provider",
  industry: "Telecommunications",
  description: "Developed a B2B real-time data exchange platform between a mobile operator and equipment vendor, enabling automated 5G site configuration and deployment, reducing rollout time by 60%.",
  readMore: "Read Case Study",
  imageUrl: "/media/5g-equipment-vendor-swap.png",
  tags: ["Telecommunications", "5G", "B2B Integration", "Automation"]
};

export const TelecomVendorSwap = component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="case-study-content">
      <p>A major European telecommunications provider undertaking a nationwide 5G network rollout needed to replace their existing equipment vendor while minimizing disruption and accelerating deployment.</p>
      
      <h3>The Challenge</h3>
      
      <p>The client faced complex technical and operational challenges:</p>
      <ul>
        <li>Migrating thousands of cell sites to new vendor equipment</li>
        <li>Complex configuration requirements for each site</li>
        <li>Manual processes causing significant delays</li>
        <li>Limited visibility into deployment progress</li>
        <li>Risk of service disruption during transition</li>
      </ul>
      
      <h3>Our Solution</h3>
      
      <p>We developed a specialized B2B data exchange platform:</p>
      <ul>
        <li>Created secure API integrations between operator and vendor systems</li>
        <li>Implemented automated configuration generation and validation</li>
        <li>Developed real-time deployment tracking and monitoring</li>
        <li>Built intelligent scheduling algorithms to optimize rollout sequence</li>
        <li>Created comprehensive testing and verification workflows</li>
      </ul>
      
      <h3>Results</h3>
      
      <p>The platform delivered exceptional results:</p>
      <ul>
        <li>60% reduction in site deployment time</li>
        <li>85% decrease in configuration errors</li>
        <li>Real-time visibility into deployment status across all regions</li>
        <li>Seamless transition with zero customer-impacting incidents</li>
        <li>Accelerated nationwide 5G rollout timeline by 8 months</li>
      </ul>
      
      <p>The telecom provider successfully completed their vendor transition ahead of schedule, gaining a competitive advantage in the 5G market.</p>
    </div>
  );
});

export default TelecomVendorSwap;
