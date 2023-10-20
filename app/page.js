import OfferSection from "./components/main-page/offer-section";
import AboutSectionHome from "./components/main-page/about-section-home";
import NewsSectionHome from "./components/main-page/news-section-home";
import HeroSectionDark from "./components/main-page/hero-section-dark";
import Logos from "./components/global-components/logos";
import { client } from "@/lib/contentful/client";
import Head from "next/head";

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
    <>
      <Head>
        <title>Green Leaf Power</title>
        <meta
          name="description"
          content="Green Leaf Power: fotowoltaika, magazyny energii, systemy smart home, serwisy fotowoltaiki dla klientów biznesowych oraz indywidualnych."
        />
      </Head>

      <main>
        <HeroSectionDark />
        <AboutSectionHome content={motto} />
        <OfferSection content={homepageOffer} />
        <NewsSectionHome />
        <Logos />
      </main>
    </>
  );
}
