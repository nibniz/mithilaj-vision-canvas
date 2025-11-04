import HeroSection from "@/components/HeroSection";
import AboutBrandSection from "@/components/AboutBrandSection";
import ServicesOverviewSection from "@/components/ServicesOverviewSection";
import OurApproachSection from "@/components/OurApproachSection";
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
      <AboutBrandSection />
      <OurApproachSection />
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
