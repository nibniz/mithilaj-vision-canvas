import HeroSection from "@/components/HeroSection";
import EssenceSection from "@/components/EssenceSection";
import CredibilitySection from "@/components/CredibilitySection";
import ServicesOverviewSection from "@/components/ServicesOverviewSection";
import PhilosophySection from "@/components/PhilosophySection";
import HighlightReelSection from "@/components/HighlightReelSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import AchievementsSection from "@/components/AchievementsSection";
import BioSection from "@/components/BioSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="relative">
      <HeroSection />
      <EssenceSection />
      <CredibilitySection />
      <ServicesOverviewSection />
      <PhilosophySection />
      <HighlightReelSection />
      <WhyChooseSection />
      <AchievementsSection />
      <BioSection />
      <FooterSection />
    </div>
  );
};

export default Index;
