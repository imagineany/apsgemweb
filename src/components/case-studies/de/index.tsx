import { caseStudyInfo as manufacturingInfo, ManufacturingTransformation } from './ManufacturingTransformation';

// Export all case study components
export {
  ManufacturingTransformation
};

// Export all case study metadata
export const caseStudies = [
  manufacturingInfo
];

// Map of case study IDs to components
export const caseStudyComponents: Record<string, any> = {
  [manufacturingInfo.id]: ManufacturingTransformation,
  // Map numeric IDs for backward compatibility
  "0": ManufacturingTransformation
};
