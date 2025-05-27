import { caseStudyInfo as manufacturingInfo, ManufacturingTransformation } from './ManufacturingTransformation';
import { caseStudyInfo as financialInfo, FinancialServicesCloudMigration } from './FinancialServicesCloudMigration';
import { caseStudyInfo as retailInfo, RetailChainERP } from './RetailChainERP';
import { caseStudyInfo as telecomInfo, TelecomVendorSwap } from './TelecomVendorSwap';
import { caseStudyInfo as fibreInfo, AIGISFibreRollout } from './AIGISFibreRollout';
import { caseStudyInfo as agenticInfo, AgenticAIMarketplace } from './AgenticAIMarketplace';
import { caseStudyInfo as offshoreSCADAInfo, OffshoreSCADA } from './OffshoreSCADA';
import { caseStudyInfo as decentralizedTalentInfo, DecentralizedTalentMarketplace } from './DecentralizedTalentMarketplace';

// Export all case study components
export {
  ManufacturingTransformation,
  FinancialServicesCloudMigration,
  RetailChainERP,
  TelecomVendorSwap,
  AIGISFibreRollout,
  AgenticAIMarketplace,
  OffshoreSCADA,
  DecentralizedTalentMarketplace
};

// Export all case study metadata
export const caseStudies = [
  manufacturingInfo,
  financialInfo,
  retailInfo,
  telecomInfo,
  fibreInfo,
  agenticInfo,
  offshoreSCADAInfo,
  decentralizedTalentInfo
];

// Map of case study IDs to components
export const caseStudyComponents: Record<string, any> = {
  [manufacturingInfo.id]: ManufacturingTransformation,
  [financialInfo.id]: FinancialServicesCloudMigration,
  [retailInfo.id]: RetailChainERP,
  [telecomInfo.id]: TelecomVendorSwap,
  [fibreInfo.id]: AIGISFibreRollout,
  [agenticInfo.id]: AgenticAIMarketplace,
  [offshoreSCADAInfo.id]: OffshoreSCADA,
  [decentralizedTalentInfo.id]: DecentralizedTalentMarketplace,
  // Map numeric IDs for backward compatibility
  "0": ManufacturingTransformation,
  "1": FinancialServicesCloudMigration,
  "2": RetailChainERP,
  "3": TelecomVendorSwap,
  "4": AIGISFibreRollout,
  "5": AgenticAIMarketplace,
  "6": OffshoreSCADA,
  "7": DecentralizedTalentMarketplace
};
