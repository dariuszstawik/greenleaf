// "use client";
import Button from "@/app/components/global-components/button";
import ListItem from "@/app/components/global-components/list-item";
import PageHeader from "@/app/components/global-components/page-header";
import ParagraphWithImageOnLeft from "@/app/components/global-components/paragraph-with-image-on-left";
import ParagraphWithlist from "@/app/components/global-components/paragraph-with-list";
import SectionTitle from "@/app/components/global-components/section-title";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";

async function getContentfulServices() {
  const resServices = await client.getEntries({
    content_type: "services",
  });

  const services = resServices.items[0];

  return services;
}

async function getContentfulServicesParagraph() {
  const resServicesParagraph = await client.getEntries({
    content_type: "srrvicesParagraph",
  });

  const servicesParagraph = resServicesParagraph.items[0];

  return servicesParagraph;
}

export default async function Services() {
  const servicesContent = await getContentfulServices();

  const servicesParagraph = await getContentfulServicesParagraph();

  return (
    <>
      <PageHeader>Naprawa i serwis „obcych” instalacji PV</PageHeader>

      <section>
        <ParagraphWithlist
          title={servicesContent.fields.title}
          paragraph={servicesContent.fields.paragraph}
          listItem1={servicesContent.fields.list1}
          listItem2={servicesContent.fields.list2}
          listItem3={servicesContent.fields.list3}
          listItem4={servicesContent.fields.list4}
          listItem5={servicesContent.fields.list5}
          img={servicesContent.fields.image}
          isImgSmaller
        />

        {/* <div className={`w-full pb-16 flex flex-col lg:flex-row-reverse`}>
          <Slide direction="right" triggerOnce>
            <div className="relative w-[560px] rounded-md after:content-[''] after:absolute after-rounded-md after:top-0 after:left-0 after:w-full after:h-full after:bg-secondaryGreen after:opacity-20">
              <img src="/serwis30.jpg" alt="" className="rounded-md" />
            </div>
          </Slide>

          <div className="ml-8 mr-16 lg:ml-8 lg:mr-28 flex flex-col gap-2 text-lg">
            <Fade triggerOnce>
              <SectionTitle isAlignedLeft>Usługi serwisowe</SectionTitle>
            </Fade>
            <Fade triggerOnce>
              <p>
                {" "}
                Jeżeli Twoja instalacja PV uległa awarii, a wykonawca instalacji
                nie jest zainteresowany jej naprawą lub nie działa już na rynku,
                możesz zwróć się do nas. W takich przypadkach oferujemy:
              </p>
            </Fade>
            <Fade cascade triggerOnce>
              <ul className="mb-4">
                <ListItem>Przegląd instalacji PV,</ListItem>
                <ListItem>Diagnoza przyczyn awarii,</ListItem>
                <ListItem>Kosztorys naprawy,</ListItem>

                <ListItem>Wykonanie niezbędnych prac naprawczych,</ListItem>
                <ListItem isLast>Gwarancję na wykonane prace.</ListItem>
              </ul>
            </Fade>
          </div>
        </div> */}
      </section>

      <ParagraphWithImageOnLeft
        title={servicesParagraph.fields.title}
        // paragraph={servicesParagraph.fields.paragraph}
        img={servicesParagraph.fields.image}
        buttonTitle={servicesParagraph.fields.buttonTitle}
        buttonHref={servicesParagraph.fields.buttonLink}
      >
        {documentToReactComponents(servicesParagraph.fields.content)}
      </ParagraphWithImageOnLeft>

      {/* <div className={`w-full py-16 flex flex-col lg:flex-row`}>
        <Slide direction="left" delay={600} triggerOnce>
          <div className="relative w-[700px] shrink-0 rounded-md after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-secondaryGreen after:opacity-20">
            <img src="/zespol1.jpg" alt="" className="rounded-md" />
          </div>
        </Slide>

        <div className="ml-16 mr-16 lg:ml-16 lg:mr-32 flex flex-col gap-2 text-lg">
          <SectionTitle isAlignedLeft>Zespół godny zaufania</SectionTitle>
          <p>
            Dysponujemy własnymi ekipami montażowymi, a nasi pracownicy
            posiadają niezbędne szkolenia oraz uprawnienia. Dzięki temu
            skutecznie kontrolujemy proces montażu naszych rozwiązań, jak
            również zapewniamy sprawny serwis.
          </p>
          <Button className="mr-auto mt-6">
            {" "}
            <Link href="/kontakt">Skontaktuj się z nami</Link>
          </Button>
        </div>
      </div> */}
    </>
  );
}
