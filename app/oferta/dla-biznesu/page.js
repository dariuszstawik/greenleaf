import PageHeader from "@/app/components/global-components/page-header";
import ParagraphWithImageOnLeft from "@/app/components/global-components/paragraph-with-image-on-left";
import ParagraphWithListAndSubitems from "@/app/components/global-components/paragraph-with-list-and-subitems";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "next/head";

async function getContentfulFirstParagraph() {
  const resFirstParagraph = await client.getEntries({
    content_type: "BusinessOfferFirstParagraph",
  });

  const firstParagraph = resFirstParagraph.items;

  return firstParagraph;
}

async function getContentfulLastParagraph() {
  const resLastParagraph = await client.getEntries({
    content_type: "BusinessOfferLastParagraph",
  });

  const lastParagraph = resLastParagraph.items;

  return lastParagraph;
}

async function getContentfulParagraphWithList() {
  const resParagraphWithList = await client.getEntries({
    content_type: "BusinessOfferParagraphWithList",
  });

  const paragraphWithList = resParagraphWithList.items;

  return paragraphWithList;
}

export default async function OfertaDlaBiznesu() {
  const firstParagraphContent = await getContentfulFirstParagraph();
  const lastParagraphContent = await getContentfulLastParagraph();
  const paragraphWithListContent = await getContentfulParagraphWithList();

  return (
    <>
      <Head>
        <title>Dla biznesu: Green Leaf Power</title>
        <meta
          name="description"
          content="Green Leaf Power: Dostarczamy kompleksowe rozwiązania z zakresu fotowoltaiki dla biznesu w połączeniu z magazynowaniem energii. Zapewniamy szybką i sprawną obsługę serwisową."
        />
      </Head>

      <PageHeader>Dla biznesu</PageHeader>

      {firstParagraphContent.map((item, i) => {
        return (
          <ParagraphWithImageOnLeft
            key={i}
            title={item.fields.title}
            img={item.fields.image ? item.fields.image : ""}
          >
            <div className="my-0 boldIsGreen">
              {documentToReactComponents(item.fields.content)}
            </div>
          </ParagraphWithImageOnLeft>
        );
      })}

      <section>
        {paragraphWithListContent.map((item, i) => {
          return (
            <ParagraphWithListAndSubitems
              key={i}
              isImgSmaller
              title={item.fields.title}
              paragraph={item.fields.content}
              listItem1={item.fields.list1}
              listItem2={item.fields.list2}
              listItem3={item.fields.list3}
              listItem4={item.fields.list4}
              listItem5={item.fields.list5}
              listItem6={item.fields.list6}
              listSubitem1={item.fields.subItem1}
              listSubitem2={item.fields.subItem2}
              listSubitem3={item.fields.subItem3}
              img={item.fields.image}
            ></ParagraphWithListAndSubitems>
          );
        })}
      </section>

      {lastParagraphContent.map((item, i) => {
        return (
          <ParagraphWithImageOnLeft
            key={i}
            title={item.fields.title}
            img={item.fields.image ? item.fields.image : ""}
            buttonTitle={item.fields.buttonTitle}
            buttonHref={item.fields.buttonLink}
          >
            <div className="my-0 boldIsGreen">
              {documentToReactComponents(item.fields.content)}
            </div>
          </ParagraphWithImageOnLeft>
        );
      })}
    </>
  );
}
