import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import WorkSection from "@/components/WorkSection";
import EntertainmentSection from "@/components/EntertainmentSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="relative">
      <HeroSection />
      <StorySection />
      <WorkSection />
      <EntertainmentSection />
      <ContactSection />
    </div>
  );
};

export default Index;
