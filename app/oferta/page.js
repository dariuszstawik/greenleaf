import PageHeader from "../components/global-components/page-header";
import SectionTitle from "../components/global-components/section-title";
import OfferSectionDarkCard from "../components/global-components/offer-section-dark-card";
import OfferSectionGrayCard from "../components/global-components/offer-section-gray-card";
import { client } from "@/lib/contentful/client";
import Head from "next/head";

async function getContentfulBusinessOffer() {
  const resContentfulOffer = await client.getEntries({
    content_type: "dlaBiznesuWyroznione",
  });
  return resContentfulOffer.items[0];
}

async function getContentfulHomeOffer() {
  const resContentfulOffer = await client.getEntries({
    content_type: "dlaDomuWyroznione",
  });
  return resContentfulOffer.items[0];
}

async function getContentfulServiceOffer() {
  const resContentfulOffer = await client.getEntries({
    content_type: "naprawaISerwisWyroznione",
  });
  return resContentfulOffer.items[0];
}

export default async function Oferta() {
  const businessOffer = await getContentfulBusinessOffer();
  const homeOffer = await getContentfulHomeOffer();
  const serviceOffer = await getContentfulServiceOffer();

  console.log(businessOffer.fields.title);

  return (
    <>
      <Head>
        <title>Oferta: Green Leaf Power</title>
        <meta
          name="description"
          content="Green Leaf Power: rozwiązania z zakresu odnawialnych źródeł energii dla biznesu, dla domu, serwis instalacji fotowoltaicznych"
        />
      </Head>

      <PageHeader>Oferta</PageHeader>
      <section className=" pb-32">
        <div>
          <div className="container mx-auto px-4">
            <div className="mb-16 flex flex-col justify-center items-center">
              <SectionTitle>Nasza oferta</SectionTitle>
            </div>

            <OfferSectionDarkCard
              title={businessOffer.fields.title}
              link={businessOffer.fields.buttonLink}
              buttonTitle={businessOffer.fields.buttonTitle}
              img={businessOffer.fields.image ? businessOffer.fields.image : ""}
            >
              {businessOffer.fields.content}
            </OfferSectionDarkCard>

            <OfferSectionGrayCard
              title={homeOffer.fields.title}
              link={homeOffer.fields.buttonLink}
              buttonTitle={homeOffer.fields.buttonTitle}
              img={homeOffer.fields.image ? homeOffer.fields.image : ""}
            >
              {homeOffer.fields.content}
            </OfferSectionGrayCard>

            <OfferSectionDarkCard
              title={serviceOffer.fields.title}
              link={serviceOffer.fields.buttonLink}
              buttonTitle={serviceOffer.fields.buttonTitle}
              img={serviceOffer.fields.image ? serviceOffer.fields.image : ""}
            >
              {serviceOffer.fields.content}
            </OfferSectionDarkCard>
          </div>
        </div>
      </section>
    </>
  );
}
