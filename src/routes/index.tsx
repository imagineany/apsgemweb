import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { enTranslations } from "../i18n/en";

// Import components
import { Header } from "../components/core/Header";
import { Footer } from "../components/core/Footer";
import { HeroSection } from "../components/sections/HeroSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { WhyUsSection } from "../components/sections/WhyUsSection";
import { TechnologiesSection } from "../components/sections/TechnologiesSection";
import { PartnersSection } from "../components/sections/PartnersSection";
import { WorkflowSection } from "../components/sections/WorkflowSection";
import { CaseStudiesSection } from "../components/sections/CaseStudiesSection";
import { TeamSection } from "../components/sections/TeamSection";
import { ContactSection } from "../components/sections/ContactSection";

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <TechnologiesSection />
        <PartnersSection />
        <WorkflowSection />
        <CaseStudiesSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
});

export const head: DocumentHead = () => {
  const translations = enTranslations;
  
  return {
    title: translations.meta.title,
    meta: [
      {
        name: "description",
        content: translations.meta.description,
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
      {
        name: "keywords",
        content: "software development, enterprise solutions, German engineering, digital transformation, cloud solutions",
      },
    ],
  };
};
