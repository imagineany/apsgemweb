import { legalInfo as privacyInfo, PrivacyPolicy } from './PrivacyPolicy';
import { legalInfo as termsInfo, TermsOfService } from './TermsOfService';

// Export all legal components
export {
  PrivacyPolicy,
  TermsOfService
};

// Export all legal metadata
export const legalDocuments = [
  privacyInfo,
  termsInfo
];

// Map of legal document IDs to components
export const legalComponents: Record<string, any> = {
  [privacyInfo.id]: PrivacyPolicy,
  [termsInfo.id]: TermsOfService
};
