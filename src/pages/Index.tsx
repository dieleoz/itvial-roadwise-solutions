import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SolutionsGrid from "@/components/SolutionsGrid";
import StatsSection from "@/components/StatsSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProjectsSection from "@/components/ProjectsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";

const Index = () => {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IT VIAL SAS",
    "url": "https://itvial.vercel.app/",
    "logo": "https://itvial.vercel.app/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+57-313-888-8888",
      "contactType": "sales",
      "areaServed": "CO",
      "availableLanguage": "Spanish"
    },
    "sameAs": [
      "https://www.linkedin.com/company/itvial",
      "https://www.facebook.com/itvial"
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="IT VIAL SAS - Soluciones Tecnológicas para Infraestructura Vial"
        description="Líderes en Colombia en diseño y fabricación de sistemas inteligentes de transporte (ITS), equipos de demarcación y auscultación vial."
        schema={orgSchema}
      />
      <HeroSection />
      <AboutSection />
      <SolutionsGrid />
      <StatsSection />
      <ClientsSection />
      <TestimonialsSection />
      <ProjectsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Index;
