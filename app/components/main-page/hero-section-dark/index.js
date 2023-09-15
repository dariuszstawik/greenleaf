import { client } from "@/lib/contentful/client";
import Button from "../../global-components/button";
import HeaderSlider from "../header-slider";

async function getContentfulHeroContent() {
  const resSlider = await client.getEntries(
    { content_type: "slider" },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const slider = resSlider.items;

  return slider;
}

export default async function HeroSectionDark() {
  const slider = await getContentfulHeroContent();

  return (
    <section className="relative px-0 pt-[112px] bg-primaryGray w-screen h-screen flex flex-col justify-end xl:flex-row xl:overflow-hidden">
      <div
        className="pb-10 absolute flex flex-col gap-8 justify-center bg-secondaryGreen opacity-95 top-0 left-0 z-20 h-full w-[35%] mt-28 shadow-md"
        style={{ clipPath: "polygon(70% 0, 100% 25%, 100% 100%, 0 100%, 0 0)" }}
      >
        {/* <img src="asset1.svg" className="absolute w-1/6 top-0 left-0" /> */}
        {/* <img src="asset2.svg" className="absolute w-1/6 bottom-0 left-0" /> */}
        {/* <img
          src="asset3.svg"
          className="absolute w-1/6 bottom-0 right-0 translate-x-2"
        /> */}
        <div>
          <p className="text-white text-lg px-16 mb-4">Green Leaf Power</p>
          <h1 className="px-16 text-white">
            {/* {horsesForSaleHeader.fields.title} */}
            Fotowoltaika <span>{` `}</span>
            <span className="block mr-auto pt-4 text-white border-b-primaryGreen">
              {/* {horsesForSaleHeader.fields.titleSpan} */}
              na 100%
            </span>
          </h1>
        </div>
        <div className="w-28 h-1 ml-16 rounded-sm bg-primaryGreen" />
        <p className="mx-16 text-lg text-white text-left ">
          {/* {horsesForSaleHeader.fields.headerContent} */}
          Instalacje fotowoltaiczne, magazyny energii, serwisy fotowoltaiki dla
          klientów biznesowych i indywidualnych. Zatrudniamy doświadczonych
          fachowców, a serwisy realizujemy już do 72 godzin od zgłoszenia.
        </p>
        <Button className="ml-16 mr-auto mt-2">Sprawdź naszą ofertę</Button>
      </div>

      <div className="w-full h-full shrink-0 hidden xl:block object-cover overflow-hidden">
        {/* <HeaderSlider
          images={horsesForSaleHeader.fields.slider}
          className="w-3/5 h-screen shrink-0 object-cover overflow-hidden"
        /> */}
        {/* <img
          src="/hero-img2.png"
          className="h-full shrink-0 object-cover overflow-hidden"
        /> */}
        <HeaderSlider
          images={slider[0].fields}
          className="w-3/5 h-screen shrink-0 object-cover overflow-hidden"
        />
      </div>
    </section>
  );
}
