import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from '../case-studies.css?inline';

export const caseStudyInfo = {
  id: "retail-chain-erp",
  title: "Custom ERP Solution for Retail Chain",
  industry: "Retail",
  description: "Developed a tailored ERP system that integrated all business processes and increased operational efficiency by 25%.",
  readMore: "Read Case Study",
  imageUrl: "/images/retail-chain-erp-solution.png",
  tags: ["Retail", "ERP", "Business Intelligence", "Inventory Management"]
};

export const RetailChainERP = component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="case-study-content">
      <p>A growing retail chain with over 200 locations across Germany and neighboring countries struggled with fragmented systems that couldn't scale with their rapid expansion.</p>
      
      <h3>The Challenge</h3>
      
      <p>The client was experiencing significant pain points:</p>
      <ul>
        <li>Disconnected inventory, POS, and financial systems</li>
        <li>Inability to get consolidated reporting across locations</li>
        <li>Inefficient supply chain and inventory management</li>
        <li>Difficulty managing staff scheduling across multiple locations</li>
        <li>Limited customer insights and loyalty program capabilities</li>
      </ul>
      
      <h3>Our Solution</h3>
      
      <p>We developed a custom ERP solution tailored to their specific retail operations:</p>
      <ul>
        <li>Integrated inventory, POS, finance, and HR modules in a single platform</li>
        <li>Implemented real-time inventory tracking across all locations</li>
        <li>Created advanced analytics and reporting dashboards</li>
        <li>Developed an AI-powered demand forecasting system</li>
        <li>Built a comprehensive customer loyalty and insights platform</li>
      </ul>
      
      <h3>Results</h3>
      
      <p>The custom ERP solution transformed their operations:</p>
      <ul>
        <li>25% increase in overall operational efficiency</li>
        <li>32% reduction in inventory costs through optimized stock levels</li>
        <li>18% increase in customer retention through enhanced loyalty program</li>
        <li>Consolidated real-time reporting across all locations</li>
        <li>Scalable platform supporting continued expansion</li>
      </ul>
      
      <p>The retail chain now has the technological foundation to support their ambitious growth plans while maintaining operational excellence.</p>
    </div>
  );
});

export default RetailChainERP;
