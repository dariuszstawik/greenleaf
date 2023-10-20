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
      <Head>
        <title>Dla domu: Green Leaf Power</title>
        <meta
          name="description"
          content="Green Leaf Power: Dostarczamy kompleksowe rozwiązania z zakresu fotowoltaiki dla domu, magazynowania energii, ładowania samochodów elektrycznych jak równie z zakresu inteligentnych systemów zarządzania energią."
        />
      </Head>

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

// "use client";
// import Button from "@/app/components/global-components/button";
// import ListItem from "@/app/components/global-components/list-item";
// import PageHeader from "@/app/components/global-components/page-header";
// import SectionTitle from "@/app/components/global-components/section-title";
// import Link from "next/link";
// import { Fade, Slide } from "react-awesome-reveal";

// export default function OfertaDlaDomu() {
//   return (
//     <>
//       <PageHeader>Dla domu</PageHeader>

//       <div className={`w-full py-16 flex flex-col lg:flex-row`}>
//         <Slide direction="left" delay={600} triggerOnce>
//           <div className="relative w-[700px] shrink-0 rounded-md after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-secondaryGreen after:opacity-20">
//             <img src="/realization1.jpg" alt="" className="rounded-md" />
//           </div>
//         </Slide>

//         <div className="ml-16 mr-16 lg:ml-16 lg:mr-32 flex flex-col gap-2 text-lg">
//           <SectionTitle isAlignedLeft>Rozwiązania dla domu</SectionTitle>
//           <p>
//             W Green Leaf Power specjalizujemy się w zaspakajaniu potrzeb
//             gospodarstw domowych w zakresie pozyskiwania energii z OZE.
//             Zapewniamy obsługę całego procesu inwestycyjnego. Dostarczamy
//             kompleksowe rozwiąszania z zakresu fotowoltaiki, magazynowania
//             energii, ładowania samochodów elektrycznych jak równie z zakresu
//             inteligentnych systemów zarządzania energią.
//           </p>
//         </div>
//       </div>

//       <section>
//         <div className={`w-full pb-16 flex flex-col lg:flex-row-reverse`}>
//           <Slide direction="right" triggerOnce>
//             <div className="relative w-[560px] rounded-md after:content-[''] after:absolute after-rounded-md after:top-0 after:left-0 after:w-full after:h-full after:bg-secondaryGreen after:opacity-30">
//               <img src="/oferta-dla-domu3.jpg" alt="" className="rounded-md" />
//             </div>
//           </Slide>

//           <div className="ml-8 mr-16 lg:ml-8 lg:mr-28 flex flex-col gap-2 text-lg">
//             <Fade triggerOnce>
//               <SectionTitle isAlignedLeft>Oferta</SectionTitle>
//             </Fade>
//             <Fade triggerOnce>
//               <p> Nasza oferta dedykowana dla gospodarstw domowych obejmuje:</p>
//             </Fade>
//             <Fade cascade triggerOnce>
//               <ul className="mb-4">
//                 <ListItem>
//                   Audyt, projekt, budowa oraz serwis Instalacji
//                   fotowoltaicznych,
//                 </ListItem>
//                 <ListItem>
//                   Dobór oraz instalacja rozwiązań magazynowania energii,
//                 </ListItem>
//                 <ListItem>
//                   Dostawa oraz montaż ładowarek do samochodów,
//                 </ListItem>

//                 <ListItem>Serwis instalacji PV w tym:</ListItem>
//                 <ListItem isNested>
//                   czas reakcji na zgłoszenie awarii 24h,
//                 </ListItem>
//                 <ListItem isNested>czas usunięcia awarii 72h,</ListItem>
//                 <ListItem isNested>
//                   gwarancja falownika zastępczego na czas jego naprawy,
//                 </ListItem>
//                 <ListItem isNested isLast>
//                   coroczne przeglądy instalacji.
//                 </ListItem>
//               </ul>
//             </Fade>
//           </div>
//         </div>
//       </section>
//       <div className={`w-full py-16 flex flex-col lg:flex-row`}>
//         <Slide direction="left" delay={600} triggerOnce>
//           <div className="relative w-[700px] shrink-0 rounded-md after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-secondaryGreen after:opacity-20">
//             <img src="/zespol1.jpg" alt="" className="rounded-md" />
//           </div>
//         </Slide>

//         <div className="ml-16 mr-16 lg:ml-16 lg:mr-32 flex flex-col gap-2 text-lg">
//           <SectionTitle isAlignedLeft>Zespół godny zaufania</SectionTitle>
//           <p>
//             Dysponujemy własnymi ekipami montażowymi, a nasi pracownicy
//             posiadają niezbędne szkolenia oraz uprawnienia. Dzięki temu
//             skutecznie kontrolujemy proces montażu naszych rozwiązań, jak
//             również zapewniamy sprawny serwis.
//           </p>
//           <Button className="mr-auto mt-6">
//             <Link href="/kontakt">Skontaktuj się z nami</Link>
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// }
