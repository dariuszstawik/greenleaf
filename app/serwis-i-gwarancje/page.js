// "use client";
import { Fade, Slide } from "react-awesome-reveal";
import ListItem from "../components/global-components/list-item";
import PageHeader from "../components/global-components/page-header";
import SectionTitle from "../components/global-components/section-title";
import Button from "../components/global-components/button";
import Link from "next/link";
import ParagraphWithlist from "../components/global-components/paragraph-with-list";
import { client } from "@/lib/contentful/client";

async function getContentfulServiceAndGuarantee() {
  const resServiceAndGuarantee = await client.getEntries({
    content_type: "serviceAndGuarantees",
  });

  const ServiceAndGuarantee = resServiceAndGuarantee.items[0];

  return ServiceAndGuarantee;
}

export default async function SerwisIGwarancje() {
  const ServiceAndGuarantee = await getContentfulServiceAndGuarantee();
  return (
    <>
      <PageHeader>Serwis i gwarancje</PageHeader>
      <section>
        <ParagraphWithlist
          title={ServiceAndGuarantee.fields.title}
          paragraph={ServiceAndGuarantee.fields.paragraph}
          listItem1={ServiceAndGuarantee.fields.list1}
          listItem2={ServiceAndGuarantee.fields.list2}
          listItem3={ServiceAndGuarantee.fields.list3}
          listItem4={ServiceAndGuarantee.fields.list4}
          listItem5={ServiceAndGuarantee.fields.list5}
          buttonTitle={ServiceAndGuarantee.fields.buttonTitle}
          buttonLink={ServiceAndGuarantee.fields.buttonLink}
          img={ServiceAndGuarantee.fields.image}
        />

        {/* <div className="ml-8 mr-16 lg:ml-8 lg:mr-28 flex flex-col gap-2 text-lg">
            <Fade triggerOnce>
              <SectionTitle isAlignedLeft>Serwis i gwarancje</SectionTitle>
            </Fade>
            <Fade triggerOnce>
              <p>
                {" "}
                Oferujemy pięcioletnią letnią gwarancje prawidłowego działania
                instalacji PV, w tym:
              </p>
            </Fade>
            <Fade cascade triggerOnce>
              <ul className="mb-4">
                <ListItem>roczny przegląd instalacji,</ListItem>
                <ListItem>czas reakcji na zgłoszenie awarii: 24h,</ListItem>
                <ListItem>czas usunięcia awarii: 72h,</ListItem>
                <ListItem>falownik zastępczy na czas jego naprawy,</ListItem>
                <ListItem isLast>możliwość przedłużenia gwarancji.</ListItem>
              </ul>
              <Button>
                <Link href="/kontakt"> Zapytaj o szczegóły</Link>
              </Button>
            </Fade>
          </div> */}
        {/* </div> */}
      </section>
    </>
  );
}
