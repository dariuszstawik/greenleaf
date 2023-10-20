import PageHeader from "@/app/components/global-components/page-header";
import ParagraphWithImageOnLeft from "@/app/components/global-components/paragraph-with-image-on-left";
import ParagraphWithlist from "@/app/components/global-components/paragraph-with-list";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
      <Head>
        <title>Serwis fotowoltaiki: Green Leaf Power</title>
        <meta
          name="description"
          content="Green Leaf Power: Naprawa i serwis „obcych” instalacji PV. Serwis instalacji fotowoltaicznych."
        />
      </Head>
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
      </section>

      <ParagraphWithImageOnLeft
        title={servicesParagraph.fields.title}
        img={servicesParagraph.fields.image}
        buttonTitle={servicesParagraph.fields.buttonTitle}
        buttonHref={servicesParagraph.fields.buttonLink}
      >
        {documentToReactComponents(servicesParagraph.fields.content)}
      </ParagraphWithImageOnLeft>
    </>
  );
}
