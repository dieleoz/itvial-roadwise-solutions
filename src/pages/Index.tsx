import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SolutionsGrid from "@/components/SolutionsGrid";
import StatsSection from "@/components/StatsSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <SolutionsGrid />
      <StatsSection />
      <ClientsSection />
      <TestimonialsSection />
      <ProjectsSection />
      <CTASection />
    </div>
  );
};

export default Index;
