import ListItem from "../components/global-components/list-item";
import PageHeader from "../components/global-components/page-header";
import SectionTitle from "../components/global-components/section-title";

export default function SerwisIGwarancje() {
  return (
    <>
      <PageHeader>Serwis i gwarancje</PageHeader>
      <section>
        <div
          className={`w-full pb-16 flex flex-col lg:flex-row-reverse`}

          // ${
          //   isReverse ? "lg:flex-row-reverse" : ""
          // }`}
        >
          <div className="w-[700px] shrink-0">
            <img src="/hero-img2.jpg" alt="" className="rounded-md" />
          </div>

          <div className="ml-16 mr-16 lg:ml-28 lg:mr-32 flex flex-col gap-2 text-lg">
            <SectionTitle isAlignedLeft>Serwis i gwarancje</SectionTitle>
            <p>
              {" "}
              Oferujemy 5-cio letnią gwarancje prawidłowego działania
              instalacji, w tym:
            </p>
            <ul>
              <ListItem>roczny przegląd instalacji,</ListItem>
              <ListItem>czas reakcji na zgłoszenie awarii: 24h,</ListItem>
              <ListItem>czas usunięcia awarii: 72h,</ListItem>
              <ListItem>
                falownik zastępczy na czas jego naprawy przez producenta,
              </ListItem>
              <ListItem>
                możliwość przedłużenia gwarancji: maksymalnie do 10 lat.
              </ListItem>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
