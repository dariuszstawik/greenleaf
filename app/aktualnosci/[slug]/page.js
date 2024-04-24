import PageHeader from "@/app/components/global-components/page-header";
import SingleArticle from "@/app/components/global-components/single-article";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "next/head";

export async function generateStaticParams() {
  const res = await client.getEntries({ content_type: "aktualnosci" });

  return res.items.map((post) => ({
    slug: post.slug,
  }));
}

async function getContentfulNewsPosts(slug) {
  const resNewsPosts = await client.getEntries(
    { content_type: "aktualnosci", "fields.slug": slug },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const newsPost = resNewsPosts.items[0];
  return newsPost;
}

export default async function NewsPost({ params }) {
  const slug = params.slug;

  const newsPost = await getContentfulNewsPosts(slug);

  return (
    <>
      <Head>
        <title>{newsPost.fields.tytul || ""}: Green Leaf Power</title>
        <meta name="description" content={newsPost.fields.lead} />
      </Head>
      <div>
        <PageHeader>Aktualności</PageHeader>
        <SingleArticle
          title={newsPost.fields.tytul}
          lead={newsPost.fields.lead}
          content={documentToReactComponents(newsPost.fields.tresc)}
          img={newsPost.fields.obraz ? newsPost.fields.obraz : ""}
        ></SingleArticle>
      </div>
    </>
  );
}
