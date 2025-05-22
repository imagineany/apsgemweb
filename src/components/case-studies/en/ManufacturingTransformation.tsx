import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from '../case-studies.css?inline';

export const caseStudyInfo = {
  id: "manufacturing-transformation",
  title: "Digital Manufacturing Transformation",
  industry: "Manufacturing",
  description: "Implemented an integrated digital platform that streamlined operations and reduced costs by 35%.",
  readMore: "Read Case Study",
  imageUrl: "/media/digital-manufacturing-transformation.png",
  tags: ["Manufacturing", "Digital Transformation", "IoT", "Industry 4.0"]
};

export const ManufacturingTransformation = component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="case-study-content">
      <p>A leading European manufacturing company with operations across 12 countries faced significant challenges with disparate systems, manual processes, and limited visibility across their production facilities.</p>
      
      <h3>The Challenge</h3>
      
      <p>The client was struggling with:</p>
      <ul>
        <li>Siloed data across multiple legacy systems</li>
        <li>Inefficient manual processes causing production delays</li>
        <li>Limited real-time visibility into operations</li>
        <li>Difficulty scaling production to meet growing demand</li>
      </ul>
      
      <h3>Our Solution</h3>
      
      <p>We developed a comprehensive digital transformation strategy and implemented an integrated platform that:</p>
      <ul>
        <li>Unified data from all production facilities into a centralized system</li>
        <li>Automated key workflows and approval processes</li>
        <li>Provided real-time dashboards and analytics for management</li>
        <li>Enabled predictive maintenance to reduce downtime</li>
        <li>Integrated IoT sensors throughout the production line</li>
      </ul>
      
      <h3>Results</h3>
      
      <p>The digital transformation initiative delivered significant business value:</p>
      <ul>
        <li>35% reduction in operational costs</li>
        <li>42% improvement in production efficiency</li>
        <li>28% decrease in maintenance-related downtime</li>
        <li>Real-time visibility across all facilities</li>
        <li>Scalable platform supporting 30% business growth</li>
      </ul>
      
      <p>The client is now positioned as an industry leader in smart manufacturing, with the digital infrastructure to support continued innovation and growth.</p>
    </div>
  );
});

export default ManufacturingTransformation;
