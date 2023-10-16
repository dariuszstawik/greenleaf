import OfferSection from "./components/main-page/offer-section";
import AboutSectionHome from "./components/main-page/about-section-home";
import NewsSectionHome from "./components/main-page/news-section-home";
import HeroSectionDark from "./components/main-page/hero-section-dark";
import Logos from "./components/global-components/logos";

export default function Home() {
  return (
    <main>
      <HeroSectionDark />
      <AboutSectionHome />
      <OfferSection />
      <NewsSectionHome />
      <Logos />
    </main>
  );
}
