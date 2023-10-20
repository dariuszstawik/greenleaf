import { client } from "@/lib/contentful/client";
import NewsCard from "../components/global-components/news-card";
import PageHeader from "../components/global-components/page-header";
import Head from "next/head";

async function getContentfulNewsPosts() {
  const resNewsPosts = await client.getEntries(
    { content_type: "aktualnosci" },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const newsPosts = resNewsPosts.items;

  return newsPosts;
}

export default async function Aktualnosci() {
  const newsPosts = await getContentfulNewsPosts();

  const newsList = (newsAmount) => {
    return (
      newsPosts &&
      newsPosts.slice(0, newsAmount).map((item, i) => {
        return (
          <li key={i} className="mx-auto">
            <NewsCard
              title={item.fields.tytul}
              lead={item.fields.lead}
              slug={item.fields.slug}
              img={item.fields.obraz ? item.fields.obraz : ""}
            />{" "}
          </li>
        );
      })
    );
  };

  return (
    <>
      <Head>
        <title>Aktualności: Green Leaf Power</title>
        <meta
          name="description"
          content="Green Leaf Power: aktualności. Fotowoltaika, magazyny energii, systemy smart home, serwisy fotowoltaiki dla klientów biznesowych oraz indywidualnych."
        />
      </Head>
      <PageHeader>Aktualności</PageHeader>
      <section className="container mx-auto">
        <ul className="grid grid-cols-1 gap-16 xl:grid-cols-3 mx-auto px-10">
          {newsList(9)}
        </ul>
      </section>
    </>
  );
}
