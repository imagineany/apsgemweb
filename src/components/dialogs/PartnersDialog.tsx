import { component$, useStylesScoped$, PropFunction, useContext } from '@builder.io/qwik';
import { MatCloseOutlined } from '@qwikest/icons/material';
import { useTranslation, LanguageContext } from '../../i18n/i18n';
import styles from './dialogs.css?inline';

export interface PartnersDialogProps {
  isOpen: boolean;
  onClose$: PropFunction<() => void>;
}

export const PartnersDialog = component$<PartnersDialogProps>((props) => {
  useStylesScoped$(styles);
  
  const languageContext = useContext(LanguageContext);
  const { t } = useTranslation(languageContext.lang);

  const partnerCategories = [
    {
      title: t('partners.categories.manufacturing'),
      description: t('partners.categories.manufacturingDesc'),
      companies: [
        'Global Manufacturing Leader',
        'Industrial Automation Provider',
        'Smart Factory Solutions',
        'Precision Engineering Corp',
        'Advanced Materials Group'
      ],
      projects: [
        'Digital transformation of production lines',
        'IoT sensor network implementation',
        'Predictive maintenance systems',
        'Quality control automation',
        'Supply chain optimization'
      ]
    },
    {
      title: t('partners.categories.finance'),
      description: t('partners.categories.financeDesc'),
      companies: [
        'European Financial Services',
        'Investment Management Firm',
        'Digital Banking Platform',
        'Insurance Technology Provider',
        'Fintech Startup Accelerator'
      ],
      projects: [
        'Cloud migration of core banking systems',
        'Real-time fraud detection implementation',
        'Mobile banking app development',
        'Regulatory compliance automation',
        'AI-powered risk assessment tools'
      ]
    },
    {
      title: t('partners.categories.telecom'),
      description: t('partners.categories.telecomDesc'),
      companies: [
        'Mobile Network Operator',
        '5G Infrastructure Provider',
        'Telecommunications Equipment Vendor',
        'Satellite Communications Corp',
        'Network Security Solutions'
      ],
      projects: [
        '5G network rollout automation',
        'Network optimization algorithms',
        'Customer experience platforms',
        'Edge computing infrastructure',
        'IoT connectivity solutions'
      ]
    },
    {
      title: t('partners.categories.energy'),
      description: t('partners.categories.energyDesc'),
      companies: [
        'Offshore Wind Farm Operator',
        'Renewable Energy Provider',
        'Smart Grid Solutions',
        'Energy Storage Systems',
        'Carbon Management Platform'
      ],
      projects: [
        'SCADA system modernization',
        'Renewable energy forecasting',
        'Grid stability optimization',
        'Energy trading platforms',
        'Environmental monitoring systems'
      ]
    },
    {
      title: t('partners.categories.retail'),
      description: t('partners.categories.retailDesc'),
      companies: [
        'European Retail Chain',
        'E-commerce Platform',
        'Supply Chain Management',
        'Omnichannel Solutions Provider',
        'Customer Analytics Platform'
      ],
      projects: [
        'Unified commerce platform development',
        'Inventory management optimization',
        'Customer personalization engines',
        'Point-of-sale system integration',
        'Logistics automation solutions'
      ]
    },
    {
      title: t('partners.categories.blockchain'),
      description: t('partners.categories.blockchainDesc'),
      companies: [
        'Web3 Startup',
        'DeFi Protocol',
        'NFT Marketplace Platform',
        'Cryptocurrency Exchange',
        'Blockchain Infrastructure Provider'
      ],
      projects: [
        'Decentralized application development',
        'Smart contract auditing and optimization',
        'Cross-chain bridge implementation',
        'Tokenization platform creation',
        'Governance protocol design'
      ]
    }
  ];

  return (
    <div class={`dialog-overlay ${props.isOpen ? 'open' : ''}`} onClick$={props.onClose$}>
      <div class="dialog-content partners-dialog-content" onClick$={(e) => e.stopPropagation()}>
        <div class="dialog-header">
          <h2>{t('partners.title')}</h2>
          <button class="close-button" onClick$={props.onClose$} aria-label="Close">
            <MatCloseOutlined width="24" height="24" />
          </button>
        </div>
        
        <div class="dialog-body">
          <p class="partners-dialog-subtitle">{t('partners.subtitle')}</p>
          
          <div class="partners-categories-detailed">
            {partnerCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} class="partner-category-detailed">
                <h3 class="partner-category-title-detailed">{category.title}</h3>
                <p class="partner-category-description-detailed">{category.description}</p>
                
                <div class="partner-section">
                  <h4 class="partner-subsection-title">{t('partners.partnerOrganizations')}</h4>
                  <div class="partner-companies-detailed">
                    {category.companies.map((company, companyIndex) => (
                      <div key={companyIndex} class="partner-company-detailed">
                        <div class="partner-company-placeholder-detailed">
                          {company.split(' ').map(word => word.charAt(0)).join('').slice(0, 3)}
                        </div>
                        <span class="partner-company-name-detailed">{company}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div class="partner-section">
                  <h4 class="partner-subsection-title">{t('partners.projectExamples')}</h4>
                  <ul class="partner-projects-list">
                    {category.projects.map((project, projectIndex) => (
                      <li key={projectIndex} class="partner-project-item">{project}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div class="partners-note-detailed">
            <p>{t('partners.confidentialityNote')}</p>
          </div>
        </div>
      </div>
    </div>
  );
});
