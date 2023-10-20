import PageHeader from "../components/global-components/page-header";
import Features from "../components/o-nas-page/features";
import ParagraphWithImageOnRight from "../components/global-components/paragraph-with-image-on-right";
import ParagraphWithImageOnLeft from "../components/global-components/paragraph-with-image-on-left";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "next/head";

async function getContentfulParagraphWithImageOnRight() {
  const resParagraphWithImageOnRight = await client.getEntries({
    content_type: "oNasAkapitWyrozniony",
  });

  const ParagraphWithImageOnRight = resParagraphWithImageOnRight.items;

  return ParagraphWithImageOnRight;
}

async function getContentfulParagraphWithImageOnLeft() {
  const resParagraphWithImageOnLeft = await client.getEntries({
    content_type: "oNasAkapit",
  });

  const ParagraphWithImageOnLeft = resParagraphWithImageOnLeft.items;

  return ParagraphWithImageOnLeft;
}

async function getContentfulFeatures() {
  const resFeatures = await client.getEntries({
    content_type: "dlaczegoMy",
  });

  const features = resFeatures.items;

  return features;
}

export default async function oNas() {
  const ParagraphWithImageOnRightContent =
    await getContentfulParagraphWithImageOnRight();

  const ParagraphWithImageOnLeftContent =
    await getContentfulParagraphWithImageOnLeft();

  const featuresContent = await getContentfulFeatures();

  return (
    <>
      <Head>
        <title>O nas: Green Leaf Power</title>
        <meta
          name="description"
          content="Green Leaf Power: Zajmujemy się montażem oraz serwisowaniem instalacji fotowoltaicznych - zarówno dla klientów indywidualnych, jak też biznesowych."
        />
      </Head>
      <PageHeader>O nas</PageHeader>

      {ParagraphWithImageOnRightContent.map((item, i) => {
        return (
          <ParagraphWithImageOnRight
            key={i}
            title={item.fields.tytul}
            img={item.fields.obraz ? item.fields.obraz : ""}
            buttonTitle={item.fields.buttonTytul}
            buttonHref={item.fields.buttonLink}
          >
            <div className="my-0 boldIsGreen">
              {documentToReactComponents(item.fields.tresc)}
            </div>
          </ParagraphWithImageOnRight>
        );
      })}

      <Features content={featuresContent} />

      {ParagraphWithImageOnLeftContent.map((item, i) => {
        return (
          <ParagraphWithImageOnLeft
            key={i}
            title={item.fields.tytul}
            img={item.fields.obraz ? item.fields.obraz : ""}
            buttonTitle={item.fields.buttonTytul}
            buttonHref={item.fields.buttonLink}
          >
            <div className="my-0 boldIsGreen">
              {documentToReactComponents(item.fields.tresc)}
            </div>
          </ParagraphWithImageOnLeft>
        );
      })}
    </>
  );
}
