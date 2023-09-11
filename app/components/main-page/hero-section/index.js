import Button from "../../global-components/button";

export default async function HeroSection() {
  return (
    <section className="px-0 pt-[112px] bg-primaryGray w-screen h-screen flex flex-col xl:flex-row xl:overflow-hidden">
      <div className="relative flex flex-col gap-10 justify-center items-center text-center bg-smartGray">
        <img src="asset1.svg" className="absolute w-1/4 top-0 left-0" />
        <img src="asset2.svg" className="absolute w-1/4 bottom-0 left-0" />
        <img src="asset3.svg" className="absolute w-1/4 bottom-0 right-0" />
        <h1 className="px-10">
          {/* {horsesForSaleHeader.fields.title} */}
          Fotowoltaika na
          <span className="text-primaryGreen">
            {/* {horsesForSaleHeader.fields.titleSpan} */}
            100%
          </span>
        </h1>
        <h3 className="px-10">
          {/* {horsesForSaleHeader.fields.headerContent} */}
          Instalacje fotowoltaiczne, magazyny wnergii, serwisy fotowoltaiki dla
          klientów biznesowych i indywidualnych. Zatrudniamy doświadczonych
          fachowców, a serwisy wykonujemy do 72 godzin od zgłoszenia.
        </h3>
        <Button className="mx-auto mt-2">Poznaj nas</Button>
      </div>

      <div className="w-3/5 h-full shrink-0 hidden xl:block object-cover overflow-hidden">
        {/* <HeaderSlider
          images={horsesForSaleHeader.fields.slider}
          className="w-3/5 h-screen shrink-0 object-cover overflow-hidden"
        /> */}
        <img
          src="/hero-img2.png"
          className="h-full shrink-0 object-cover overflow-hidden"
        />
      </div>
    </section>
  );
}
