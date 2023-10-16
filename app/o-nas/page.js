import { Slide } from "react-awesome-reveal";
import PageHeader from "../components/global-components/page-header";
import SectionTitle from "../components/global-components/section-title";
import Features from "../components/o-nas-page/features";
import Button from "../components/global-components/button";
import Link from "next/link";
import ParagraphWithImageOnRight from "../components/global-components/paragraph-with-image-on-right";
import ParagraphWithImageOnLeft from "../components/global-components/paragraph-with-image-on-left";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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

      {/* <ParagraphWithImageOnRight
        title="Kim jesteśmy?"
        img="/realization12.jpg"
        buttonTitle="Sprawdź ofertę"
        buttonHref="/oferta"
      >
        <p className="my-0">
          Green Leaf Power to firma, która narodziła się z pasji doświadczonych
          inwestorów i menedżerów.
        </p>
        <p className="my-0">
          Zajmujemy się <span> </span>
          <span className=" text-primaryGreen">
            montażem oraz serwisowaniem instalacji fotowoltaicznych - zarówno
            dla klientów indywidualnych, jak też biznesowych.
          </span>
        </p>
        <p className="my-0">
          Do współpracy zaprosiliśmy kompetentnych i doświadczonych
          projektantów, koordynatorów prac oraz instalatorów.
        </p>
      </ParagraphWithImageOnRight> */}

      <Features content={featuresContent} />

      {/* <ParagraphWithImageOnLeft
        title="Możesz nam zaufać"
        img="/hero-img2.jpg"
        buttonTitle="Sprawdź ofertę"
        buttonHref="/oferta"
      >
        <>
          <p className="my-0">
            W Green Leaf Power stawiamy nie tylko na skuteczność, ale również
            trwałość.
            <span className="text-primaryGreen">
              Dlatego zbudowaliśmy zespół, któremu możesz zaufać na lata.
            </span>
            Nasza firma to ludzie, którzy tworzą ją od podstaw. Dbamy o naszych
            pracowników i ich rodziny, ponieważ to oni stanowią fundament
            naszego sukcesu. Oferujemy im stałe zatrudnienie i zapewniamy
            możliwości rozwoju, ponieważ wierzymy, że tylko zespół pełen wiedzy
            i zaangażowania może spełnić Twoje oczekiwania.
          </p>
          <p className="my-0">
            Wyznajemy filozofię, iż
            <span className="text-primaryGreen">
              każdy klient jest naszym partnerem i ma swój udział w sukcesie
              naszej firmy.
            </span>
            Tylko zadowolony klient jest dla nas gwarancją, że jesteśmy na
            właściwej drodze.
          </p>
        </>
      </ParagraphWithImageOnLeft> */}

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
