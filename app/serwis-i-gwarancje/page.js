import PageHeader from "../components/global-components/page-header";
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
      </section>
    </>
  );
}
