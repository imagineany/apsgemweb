import { caseStudyInfo as manufacturingInfo, ManufacturingTransformation } from './ManufacturingTransformation';
import { caseStudyInfo as financialInfo, FinancialServicesCloudMigration } from './FinancialServicesCloudMigration';
import { caseStudyInfo as retailInfo, RetailChainERP } from './RetailChainERP';
import { caseStudyInfo as telecomInfo, TelecomVendorSwap } from './TelecomVendorSwap';
import { caseStudyInfo as fibreInfo, AIGISFibreRollout } from './AIGISFibreRollout';
import { caseStudyInfo as agenticInfo, AgenticAIMarketplace } from './AgenticAIMarketplace';

// Export all case study components
export {
  ManufacturingTransformation,
  FinancialServicesCloudMigration,
  RetailChainERP,
  TelecomVendorSwap,
  AIGISFibreRollout,
  AgenticAIMarketplace
};

// Export all case study metadata
export const caseStudies = [
  manufacturingInfo,
  financialInfo,
  retailInfo,
  telecomInfo,
  fibreInfo,
  agenticInfo
];

// Map of case study IDs to components
export const caseStudyComponents: Record<string, any> = {
  [manufacturingInfo.id]: ManufacturingTransformation,
  [financialInfo.id]: FinancialServicesCloudMigration,
  [retailInfo.id]: RetailChainERP,
  [telecomInfo.id]: TelecomVendorSwap,
  [fibreInfo.id]: AIGISFibreRollout,
  [agenticInfo.id]: AgenticAIMarketplace,
  // Map numeric IDs for backward compatibility
  "0": ManufacturingTransformation,
  "1": FinancialServicesCloudMigration,
  "2": RetailChainERP,
  "3": TelecomVendorSwap,
  "4": AIGISFibreRollout,
  "5": AgenticAIMarketplace
};
