import OfferSection from "./components/main-page/offer-section";
import AboutSectionHome from "./components/main-page/about-section-home";
import NewsSectionHome from "./components/main-page/news-section-home";
import HeroSectionDark from "./components/main-page/hero-section-dark";
import Logos from "./components/global-components/logos";
import { client } from "@/lib/contentful/client";

async function getContentfulMotto() {
  const resMotto = await client.getEntries({
    content_type: "motto",
  });

  const motto = resMotto.items;

  return motto;
}

async function getContentfulHomepageOffer() {
  const resHomepageOffer = await client.getEntries({
    content_type: "ofertaStronaGlowna",
  });

  const homepageOffer = resHomepageOffer.items;

  return homepageOffer;
}

export default async function Home() {
  const motto = await getContentfulMotto();
  const homepageOffer = await getContentfulHomepageOffer();

  return (
    <main>
      <HeroSectionDark />
      <AboutSectionHome content={motto} />
      <OfferSection content={homepageOffer} />
      <NewsSectionHome />
      <Logos />
    </main>
  );
}
