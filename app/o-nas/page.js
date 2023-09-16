import PageHeader from "../components/global-components/page-header";
import SectionTitle from "../components/global-components/section-title";
import Testimonials from "../components/o-nas-page/testimonials";

export default function oNas() {
  return (
    <>
      <PageHeader>O nas</PageHeader>
      <div
        className={`w-full py-16 flex flex-col lg:flex-row-reverse`}

        // ${
        //   isReverse ? "lg:flex-row-reverse" : ""
        // }`}
      >
        <div className="w-[700px] shrink-0">
          <img src="/hero-img2.jpg" alt="" />
        </div>

        <div className="ml-16 mr-16 lg:ml-16 lg:mr-32 flex flex-col gap-2 text-lg">
          <SectionTitle isAlignedLeft>Kim jesteśmy?</SectionTitle>
          <p>
            {" "}
            Green Leaf Power to firma, która narodziła się z pasji
            doświadczonych inwestorów i menedżerów.
          </p>
          <p className="font-bold">
            Zajmujey się instalacją oraz serwisowaniem instalacji
            fotowoltaicznych - zarówno dla klientów indywidualnych, jak też
            biznesowych. Działamy na terenie województw: śląskiego,
            małopolskiego, opolskiego i dolnośląskiego.
          </p>
          <p>
            Do współpracy zaprosiliśmy kompetentnych i doświadczonych
            projektantów, koordynatorów prac oraz montażystów instalacji.
          </p>
        </div>
      </div>
      <Testimonials />
      <div
        className={`w-full py-16 flex flex-col lg:flex-row`}

        // ${
        //   isReverse ? "lg:flex-row-reverse" : ""
        // }`}
      >
        <div className="w-[700px] shrink-0">
          <img src="/hero-img2.jpg" alt="" />
        </div>

        <div className="ml-16 mr-16 lg:ml-16 lg:mr-32 flex flex-col gap-2 text-lg">
          <SectionTitle isAlignedLeft>Możesz nam zaufać</SectionTitle>
          <p>
            {" "}
            W Green Leaf Power nie stawiamy tylko na skuteczność, ale również na
            trwałość.{" "}
            <span className="font-bold">
              Dlatego zbudowaliśmy zespół, któremu możesz zaufać na lata.{" "}
            </span>
            Nasza firma to ludzie, którzy tworzą ją od podstaw. Dbamy o naszych
            pracowników i ich rodziny, ponieważ to oni stanowią fundament
            naszego sukcesu. Oferujemy im stałe zatrudnienie i zapewniamy
            możliwości rozwoju, ponieważ wierzymy, że tylko zespół pełen wiedzy
            i zaangażowania może spełnić Twoje oczekiwania.
          </p>
          <p className="">
            Wyznajemy filozofię, iż{" "}
            <span className="font-bold">
              każdy klient jest naszym partnerem i ma swój udział w sukcesie
              naszej firmy.
            </span>{" "}
            Tylko zadowolony klient jest dla nas gwarancją, że jesteśmy na
            właściwej drodze.
          </p>
          {/* <p>
            Do współpracy zaprosiliśmy kompetentnych i doświadczonych
            projektantów, koordynatorów prac oraz montażystów instalacji.
          </p> */}
        </div>
      </div>
    </>
  );
}