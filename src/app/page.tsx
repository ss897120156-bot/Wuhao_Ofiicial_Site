import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import BusinessCards from "@/components/BusinessCards";
import BrandStory from "@/components/BrandStory";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <div className="pt-16">
        <HeroCarousel />
        <BusinessCards />
        <BrandStory />
        <StatsSection />
      </div>
      <Footer />
    </main>
  );
}
