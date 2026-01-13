import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import MissionSection from "@/components/home/MissionSection";
import TimelineSection from "@/components/home/TimelineSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <TimelineSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
