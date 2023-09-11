import Image from "next/image";
import HeroSection from "./components/main-page/hero-section";
import OfferSection from "./components/main-page/offer-section";
import AboutSectionHome from "./components/main-page/about-section-home";
import SectionTitle from "./components/global-components/section-title";
import NewsSectionHome from "./components/main-page/news-section-home";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSectionHome />
      <OfferSection />
      <NewsSectionHome />
    </main>
  );
}
