import { component$, useStylesScoped$, useContext, useSignal } from '@builder.io/qwik';
import { useTranslation, LanguageContext } from '../../i18n/i18n';
import { TechnologyDialog } from '../dialogs/TechnologyDialog';
import sectionsStyles from './sections.css?inline';

// Import a subset of technology icons for the compact view
import { 
  SiAmazonaws,
  SiMicrosoftazure,
  SiGooglecloud,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiSvelte,
  SiNextdotjs,
  SiNodedotjs,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiEthereum,
  SiSolidity,
  SiGit,
  SiGithub,
  SiPrometheus
} from '@qwikest/icons/simpleicons';

export const TechnologiesSection = component$(() => {
  useStylesScoped$(sectionsStyles);
  
  const languageContext = useContext(LanguageContext);
  const { t } = useTranslation(languageContext.lang);
  
  const isDialogOpen = useSignal(false);

  // Featured technologies for compact display (20 most important ones)
  const featuredTechnologies = [
    { name: 'AWS', icon: SiAmazonaws, color: '#FF9900' },
    { name: 'Azure', icon: SiMicrosoftazure, color: '#0078D4' },
    { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Svelte', icon: SiSvelte, color: '#FF3E00' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    { name: 'Ethereum', icon: SiEthereum, color: '#627EEA' },
    { name: 'Solidity', icon: SiSolidity, color: '#363636' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: '#181717' },
    { name: 'Prometheus', icon: SiPrometheus, color: '#E6522C' }
  ];

  return (
    <>
      <section id="technologies" class="section technologies-section-compact">
        <div class="container">
          <h2 class="section-title">{t('technologies.title')}</h2>
          <p class="section-subtitle">{t('technologies.subtitle')}</p>
          
          <div class="technologies-compact-grid">
            {featuredTechnologies.map((tech, index) => (
              <div key={index} class="technology-item-compact" title={tech.name}>
                <tech.icon class="technology-icon-compact" style={{ color: tech.color }} />
              </div>
            ))}
          </div>
          
          <div class="technologies-actions">
            <button 
              class="btn-secondary technologies-view-all"
              onClick$={() => isDialogOpen.value = true}
            >
              {t('technologies.viewAll')}
            </button>
          </div>
        </div>
      </section>
      
      <TechnologyDialog 
        isOpen={isDialogOpen.value}
        onClose$={() => isDialogOpen.value = false}
      />
    </>
  );
});
