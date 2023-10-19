import PageHeader from "@/app/components/global-components/page-header";
import ParagraphWithImageOnLeft from "@/app/components/global-components/paragraph-with-image-on-left";
import ParagraphWithListAndSubitems from "@/app/components/global-components/paragraph-with-list-and-subitems";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function getContentfulFirstParagraph() {
  const resFirstParagraph = await client.getEntries({
    content_type: "homeOfferFirstParagraph",
  });

  const firstParagraph = resFirstParagraph.items;

  return firstParagraph;
}

async function getContentfulLastParagraph() {
  const resLastParagraph = await client.getEntries({
    content_type: "homeOfferLastParagraph",
  });

  const lastParagraph = resLastParagraph.items;

  return lastParagraph;
}

async function getContentfulParagraphWithList() {
  const resParagraphWithList = await client.getEntries({
    content_type: "homeOfferParagraphWithList",
  });

  const paragraphWithList = resParagraphWithList.items;

  return paragraphWithList;
}

export default async function OfertaDlaDomu() {
  const firstParagraphContent = await getContentfulFirstParagraph();
  const lastParagraphContent = await getContentfulLastParagraph();
  const paragraphWithListContent = await getContentfulParagraphWithList();

  return (
    <>
      <PageHeader>Dla domu</PageHeader>

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
              listSubitem4={item.fields.subItem4}
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
