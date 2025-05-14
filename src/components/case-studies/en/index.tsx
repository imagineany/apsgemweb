import { caseStudyInfo as manufacturingInfo, ManufacturingTransformation } from './ManufacturingTransformation';
import { caseStudyInfo as financialInfo, FinancialServicesCloudMigration } from './FinancialServicesCloudMigration';
import { caseStudyInfo as retailInfo, RetailChainERP } from './RetailChainERP';

// Export all case study components
export {
  ManufacturingTransformation,
  FinancialServicesCloudMigration,
  RetailChainERP
};

// Export all case study metadata
export const caseStudies = [
  manufacturingInfo,
  financialInfo,
  retailInfo
];

// Map of case study IDs to components
export const caseStudyComponents: Record<string, any> = {
  [manufacturingInfo.id]: ManufacturingTransformation,
  [financialInfo.id]: FinancialServicesCloudMigration,
  [retailInfo.id]: RetailChainERP,
  // Map numeric IDs for backward compatibility
  "0": ManufacturingTransformation,
  "1": FinancialServicesCloudMigration,
  "2": RetailChainERP
};
