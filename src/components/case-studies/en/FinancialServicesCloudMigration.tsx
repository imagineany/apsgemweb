import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from '../case-studies.css?inline';

export const caseStudyInfo = {
  id: "financial-services-cloud-migration",
  title: "Financial Services Cloud Migration",
  industry: "Financial Services",
  description: "Modernized legacy infrastructure with a secure cloud solution, reducing costs by 40% and improving availability to 99.99%.",
  readMore: "Read Case Study",
  imageUrl: "/media/financial-services-cloud-migration.png",
  tags: ["Financial Services", "Cloud Migration", "AWS", "Security"]
};

export const FinancialServicesCloudMigration = component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="case-study-content">
      <p>A well-established financial services provider with over €50 billion in assets under management needed to modernize their aging infrastructure while maintaining strict security and compliance requirements.</p>
      
      <h3>The Challenge</h3>
      
      <p>The client faced several critical issues:</p>
      <ul>
        <li>Legacy systems reaching end-of-life with increasing maintenance costs</li>
        <li>Performance issues during peak trading periods</li>
        <li>Difficulty meeting evolving regulatory requirements</li>
        <li>Limited disaster recovery capabilities</li>
        <li>Increasing security concerns</li>
      </ul>
      
      <h3>Our Solution</h3>
      
      <p>We designed and implemented a comprehensive cloud migration strategy:</p>
      <ul>
        <li>Developed a secure, compliant cloud architecture on AWS</li>
        <li>Implemented a phased migration approach to minimize disruption</li>
        <li>Created automated compliance and security monitoring</li>
        <li>Established robust disaster recovery with multi-region failover</li>
        <li>Implemented zero-trust security architecture</li>
      </ul>
      
      <h3>Results</h3>
      
      <p>The cloud migration delivered transformative results:</p>
      <ul>
        <li>40% reduction in infrastructure costs</li>
        <li>Improved system availability to 99.99%</li>
        <li>70% faster deployment of new features</li>
        <li>Enhanced security posture with continuous compliance monitoring</li>
        <li>Scalable platform handling 3x the previous transaction volume</li>
      </ul>
      
      <p>The client now enjoys a modern, secure infrastructure that supports their business growth while meeting all regulatory requirements.</p>
    </div>
  );
});

export default FinancialServicesCloudMigration;
