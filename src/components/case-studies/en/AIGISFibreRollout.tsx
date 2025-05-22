import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from '../case-studies.css?inline';

export const caseStudyInfo = {
  id: "ai-gis-fibre-rollout",
  title: "AI GIS Fibre Rollout Solution",
  industry: "Infrastructure",
  description: "Created an intelligent GIS-based system powered by AI to optimize fibre network planning and deployment, automating route selection and reducing planning costs by 45%.",
  readMore: "Read Case Study",
  imageUrl: "/media/ai-gis-fibre-rollout.png",
  tags: ["Infrastructure", "AI", "GIS", "Network Planning"]
};

export const AIGISFibreRollout = component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="case-study-content">
      <p>A national infrastructure provider embarking on an ambitious fibre broadband rollout needed to optimize planning and deployment across diverse geographical areas.</p>
      
      <h3>The Challenge</h3>
      
      <p>The client struggled with several critical issues:</p>
      <ul>
        <li>Complex manual planning processes for fibre routes</li>
        <li>Difficulty optimizing deployment across urban and rural areas</li>
        <li>Limited integration between planning and field operations</li>
        <li>Inefficient resource allocation</li>
        <li>Challenges prioritizing areas for maximum ROI</li>
      </ul>
      
      <h3>Our Solution</h3>
      
      <p>We developed an AI GIS solution:</p>
      <ul>
        <li>Integrated multiple data sources including terrain, existing infrastructure, and population density</li>
        <li>Implemented machine learning algorithms to optimize route planning</li>
        <li>Created automated cost-benefit analysis for deployment prioritization</li>
        <li>Developed mobile applications for field teams with real-time updates</li>
        <li>Built comprehensive analytics dashboards for management</li>
      </ul>
      
      <h3>Results</h3>
      
      <p>The AI solution transformed their fibre rollout:</p>
      <ul>
        <li>45% reduction in planning costs</li>
        <li>38% faster route design and approval</li>
        <li>52% improvement in resource utilization</li>
        <li>Optimized deployment prioritization increasing ROI by 30%</li>
        <li>Seamless coordination between planning and field operations</li>
      </ul>
      
      <p>The infrastructure provider is now deploying fibre at an accelerated rate, bringing high-speed connectivity to communities more efficiently than ever before.</p>
    </div>
  );
});

export default AIGISFibreRollout;
