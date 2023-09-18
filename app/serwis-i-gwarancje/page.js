"use client";
import { Fade, Slide } from "react-awesome-reveal";
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
          <div className="w-[700px]">
            <Slide direction="right" triggerOnce>
              <img src="/serwis22.jpg" alt="" className="rounded-md" />
            </Slide>
          </div>

          <div className="ml-8 mr-16 lg:ml-8 lg:mr-28 flex flex-col gap-2 text-lg">
            <Fade triggerOnce>
              <SectionTitle isAlignedLeft>Serwis i gwarancje</SectionTitle>
            </Fade>
            <Fade triggerOnce>
              <p>
                {" "}
                Oferujemy pięcioletnią letnią gwarancje prawidłowego działania
                instalacji, w tym:
              </p>
            </Fade>
            <Fade cascade triggerOnce>
              <ul>
                <ListItem>roczny przegląd instalacji,</ListItem>
                <ListItem>czas reakcji na zgłoszenie awarii: 24h,</ListItem>
                <ListItem>czas usunięcia awarii: 72h,</ListItem>
                <ListItem>falownik zastępczy na czas jego naprawy,</ListItem>
                <ListItem isLast>
                  możliwość przedłużenia gwarancji: maksymalnie do 10 lat.
                </ListItem>
              </ul>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
}
