import { client } from "@/lib/contentful/client";
import PageHeader from "../components/global-components/page-header";
import SectionTitle from "../components/global-components/section-title";
import Partneritem from "../components/partnerzy-page/partner-item";

async function getContentfulPartners() {
  const resPartners = await client.getEntries({
    content_type: "patner",
  });

  const partners = resPartners.items;

  return partners;
}

export default async function Partnerzy() {
  const partners = await getContentfulPartners();

  return (
    <>
      <Head>
        <title>Partnerzy: Green Leaf Power</title>
        <meta name="description" content="Green Leaf Power: Partnerzy" />
      </Head>
      <PageHeader>Partnerzy</PageHeader>
      <section className=" mx-auto px-8 mb-16 pt-10">
        <SectionTitle>Współpraca</SectionTitle>

        {partners.map((item, i) => {
          return (
            <Partneritem
              key={i}
              title={item.fields.title}
              content={item.fields.content}
              list1={item.fields.list1}
              list2={item.fields.list2}
              list3={item.fields.list3}
              img={item.fields.logo ? item.fields.logo : ""}
              imgLink={item.fields.logoLink ? item.fields.logoLink : ""}
            />
          );
        })}
      </section>
    </>
  );
}
