import Header from "@/components/Header";
import HeroSlideshow from "@/components/HeroSlideshow";
import WelcomeSection from "@/components/WelcomeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[72px] md:pt-[88px] lg:pt-[104px]">
        <HeroSlideshow />
        <WelcomeSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
