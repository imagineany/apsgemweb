/**
 * Site Configuration
 * 
 * This file contains global configuration values for the site.
 * These values can be imported and used throughout the application.
 */

export const siteConfig = {
  // Company information
  company: {
    name: "appswei",
    legalName: "Appswei",
    slogan: "Enterprise Software with Precision",
    foundingYear: 2015,
  },
  
  // Contact information
  contact: {
    email: "contact@appswei.com",
    phone: "+49 (0) 123 456 789",
    address: {
      street: "Technologiepark 10",
      city: "Berlin",
      postalCode: "10115",
      country: "Germany"
    }
  },
  
  // Social media
  social: {
    linkedin: "https://linkedin.com/company/appswei",
    github: "https://github.com/appswei",
    twitter: "https://twitter.com/appswei",
    calendly: "https://calendly.com/appswei/30min"
  },
  
  // Site metadata
  metadata: {
    title: "Appswei - Enterprise Software Development",
    description: "Enterprise software development with German precision. Custom software solutions, digital transformation, and IT consulting services.",
    keywords: "enterprise software, digital transformation, custom software, IT consulting, German engineering",
    author: "Appswei",
    siteUrl: "https://appswei.com",
  }
};

// Export individual config sections for convenience
export const { company, contact, social, metadata } = siteConfig;

// Default export for easier importing
export default siteConfig;
