import { component$, useStylesScoped$, PropFunction, useContext } from '@builder.io/qwik';
import { MatCloseOutlined } from '@qwikest/icons/material';
import { useTranslation, LanguageContext } from '../../i18n/i18n';
import styles from './dialogs.css?inline';

// Import technology icons
import { 
  SiAmazonaws,
  SiMicrosoftazure,
  SiGooglecloud,
  SiDigitalocean,
  SiAlibabacloud,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiGo,
  SiRust,
  SiCplusplus,
  SiReact,
  SiSvelte,
  SiNextdotjs,
  SiFlutter,
  SiNodedotjs,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiNginx,
  SiLinux,
  SiPostgresql,
  SiMongodb,
  SiMariadb,
  SiMicrosoftsqlserver,
  SiRedis,
  SiSiemens,
  SiMqtt,
  SiEthereum,
  SiSolidity,
  SiChainlink,
  SiGit,
  SiGithub,
  SiPrometheus,
  SiGrafana,
  SiJenkins,
  SiTailwindcss,
  SiVite
} from '@qwikest/icons/simpleicons';

export interface TechnologyDialogProps {
  isOpen: boolean;
  onClose$: PropFunction<() => void>;
}

export const TechnologyDialog = component$<TechnologyDialogProps>((props) => {
  useStylesScoped$(styles);
  
  const languageContext = useContext(LanguageContext);
  const { t } = useTranslation(languageContext.lang);

  const technologyCategories = [
    {
      title: t('technologies.categories.cloudPlatforms'),
      technologies: [
        { name: 'AWS', icon: SiAmazonaws, color: '#FF9900', description: 'Amazon Web Services - Cloud computing platform' },
        { name: 'Microsoft Azure', icon: SiMicrosoftazure, color: '#0078D4', description: 'Microsoft cloud computing service' },
        { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4', description: 'Google Cloud Platform services' },
        { name: 'DigitalOcean', icon: SiDigitalocean, color: '#0080FF', description: 'Cloud infrastructure provider' },
        { name: 'Alibaba Cloud', icon: SiAlibabacloud, color: '#FF6A00', description: 'Chinese cloud computing service' }
      ]
    },
    {
      title: t('technologies.categories.programmingLanguages'),
      technologies: [
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', description: 'Typed superset of JavaScript' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', description: 'Dynamic programming language for web' },
        { name: 'Python', icon: SiPython, color: '#3776AB', description: 'High-level programming language' },
        { name: 'Go', icon: SiGo, color: '#00ADD8', description: 'Google\'s programming language' },
        { name: 'Rust', icon: SiRust, color: '#000000', description: 'Systems programming language' },
        { name: 'C++', icon: SiCplusplus, color: '#00599C', description: 'General-purpose programming language' }
      ]
    },
    {
      title: t('technologies.categories.frontendFrameworks'),
      technologies: [
        { name: 'React', icon: SiReact, color: '#61DAFB', description: 'JavaScript library for building user interfaces' },
        { name: 'Svelte', icon: SiSvelte, color: '#FF3E00', description: 'Cybernetically enhanced web apps' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000', description: 'React framework for production' },
        { name: 'Flutter', icon: SiFlutter, color: '#02569B', description: 'Google\'s UI toolkit for mobile, web, and desktop' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', description: 'Utility-first CSS framework' },
        { name: 'Vite', icon: SiVite, color: '#646CFF', description: 'Next generation frontend tooling' }
      ]
    },
    {
      title: t('technologies.categories.backendInfrastructure'),
      technologies: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933', description: 'JavaScript runtime built on Chrome\'s V8' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED', description: 'Platform for developing, shipping, and running applications' },
        { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5', description: 'Container orchestration platform' },
        { name: 'Terraform', icon: SiTerraform, color: '#7B42BC', description: 'Infrastructure as code software tool' },
        { name: 'Ansible', icon: SiAnsible, color: '#EE0000', description: 'IT automation platform' },
        { name: 'Nginx', icon: SiNginx, color: '#009639', description: 'Web server and reverse proxy' },
        { name: 'Linux', icon: SiLinux, color: '#FCC624', description: 'Open source operating system' }
      ]
    },
    {
      title: t('technologies.categories.databases'),
      technologies: [
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', description: 'Advanced open source relational database' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248', description: 'Document-oriented NoSQL database' },
        { name: 'MariaDB', icon: SiMariadb, color: '#003545', description: 'Open source relational database' },
        { name: 'SQL Server', icon: SiMicrosoftsqlserver, color: '#CC2927', description: 'Microsoft relational database management system' },
        { name: 'Redis', icon: SiRedis, color: '#DC382D', description: 'In-memory data structure store' }
      ]
    },
    {
      title: t('technologies.categories.industrialIoT'),
      technologies: [
        { name: 'Siemens', icon: SiSiemens, color: '#009999', description: 'Industrial automation and digitalization' },
        { name: 'MQTT', icon: SiMqtt, color: '#660066', description: 'Lightweight messaging protocol for IoT' }
      ]
    },
    {
      title: t('technologies.categories.blockchainWeb3'),
      technologies: [
        { name: 'Ethereum', icon: SiEthereum, color: '#627EEA', description: 'Decentralized platform for smart contracts' },
        { name: 'Solidity', icon: SiSolidity, color: '#363636', description: 'Programming language for Ethereum smart contracts' },
        { name: 'Chainlink', icon: SiChainlink, color: '#375BD2', description: 'Decentralized oracle network' }
      ]
    },
    {
      title: t('technologies.categories.devopsMonitoring'),
      technologies: [
        { name: 'Git', icon: SiGit, color: '#F05032', description: 'Distributed version control system' },
        { name: 'GitHub', icon: SiGithub, color: '#181717', description: 'Git repository hosting service' },
        { name: 'Prometheus', icon: SiPrometheus, color: '#E6522C', description: 'Monitoring and alerting toolkit' },
        { name: 'Grafana', icon: SiGrafana, color: '#F46800', description: 'Analytics and interactive visualization platform' },
        { name: 'Jenkins', icon: SiJenkins, color: '#D24939', description: 'Automation server for CI/CD' }
      ]
    }
  ];

  return (
    <div class={`dialog-overlay ${props.isOpen ? 'open' : ''}`} onClick$={props.onClose$}>
      <div class="dialog-content technology-dialog-content" onClick$={(e) => e.stopPropagation()}>
        <div class="dialog-header">
          <h2>{t('technologies.title')}</h2>
          <button class="close-button" onClick$={props.onClose$} aria-label="Close">
            <MatCloseOutlined width="24" height="24" />
          </button>
        </div>
        
        <div class="dialog-body">
          <p class="technology-dialog-subtitle">{t('technologies.subtitle')}</p>
          
          <div class="technology-categories-detailed">
            {technologyCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} class="technology-category-detailed">
                <h3 class="category-title-detailed">{category.title}</h3>
                <div class="technology-grid-detailed">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} class="technology-item-detailed">
                      <div class="technology-icon-container">
                        <tech.icon class="technology-icon-detailed" style={{ color: tech.color }} />
                      </div>
                      <div class="technology-info">
                        <h4 class="technology-name-detailed">{tech.name}</h4>
                        <p class="technology-description">{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
