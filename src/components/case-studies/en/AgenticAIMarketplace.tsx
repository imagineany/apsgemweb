import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from '../case-studies.css?inline';

export const caseStudyInfo = {
  id: "agentic-ai-marketplace",
  title: "Agentic AI Solution for Decentralized Task Marketplace",
  industry: "Artificial Intelligence / Blockchain",
  description: "Implemented an MCP protocol integration enabling LLMs to operate autonomously on a decentralized task marketplace, reducing task completion time by 70% and increasing transaction volume.",
  readMore: "Read Case Study",
  imageUrl: "/media/mcp-agentic-ai-marketplace.png",
  tags: ["Artificial Intelligence", "Blockchain", "MCP", "Decentralized Systems"]
};

export const AgenticAIMarketplace = component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="case-study-content">
      <p>A pioneering blockchain company operating a decentralized marketplace for digital tasks wanted to leverage AI to automate task execution and improve platform efficiency.</p>
      
      <h3>The Challenge</h3>
      
      <p>The client faced innovative technical challenges:</p>
      <ul>
        <li>Manual task execution creating bottlenecks</li>
        <li>Complex integration between AI systems and blockchain infrastructure</li>
        <li>Need for autonomous AI agents that could operate without human intervention</li>
        <li>Security concerns around AI access to blockchain transactions</li>
        <li>Scalability limitations with existing architecture</li>
      </ul>
      
      <h3>Our Solution</h3>
      
      <p>We developed a groundbreaking agentic AI solution:</p>
      <ul>
        <li>Implemented Model Context Protocol (MCP) integration enabling LLMs to interact directly with the marketplace</li>
        <li>Created specialized AI agents for different task categories</li>
        <li>Developed secure authentication and permission systems for AI operations</li>
        <li>Built a monitoring and governance framework for AI activities</li>
        <li>Implemented a scalable architecture supporting thousands of concurrent AI agents</li>
      </ul>
      
      <h3>Results</h3>
      
      <p>The agentic AI solution delivered transformative results:</p>
      <ul>
        <li>70% reduction in task completion time</li>
        <li>300% increase in marketplace transaction volume</li>
        <li>85% of tasks now completed autonomously without human intervention</li>
        <li>Significant improvement in task quality and consistency</li>
        <li>New revenue streams from AI-as-a-service offerings</li>
      </ul>
      
      <p>The platform has become a leading example of practical AI-blockchain integration, setting new standards for decentralized autonomous systems.</p>
    </div>
  );
});

export default AgenticAIMarketplace;
