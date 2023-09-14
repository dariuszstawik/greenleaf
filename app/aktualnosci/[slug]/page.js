import SingleArticle from "@/app/components/global-components/single-article";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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

export default async function BlogPost({ params }) {
  const slug = params.slug;

  const newsPost = await getContentfulNewsPosts(slug);

  return (
    <div>
      <SingleArticle
        title={newsPost.fields.tytul}
        lead={newsPost.fields.lead}
        content={documentToReactComponents(newsPost.fields.tresc)}
        img={newsPost.fields.obraz ? newsPost.fields.obraz : ""}
      ></SingleArticle>
    </div>
  );
}
