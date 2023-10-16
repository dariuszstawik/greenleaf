"use client";
import { Fade } from "react-awesome-reveal";
import PageHeader from "../components/global-components/page-header";
import SectionTitle from "../components/global-components/section-title";
import OfferSectionDarkCard from "../components/global-components/offer-section-dark-card";
import OfferSectionGrayCard from "../components/global-components/offer-section-gray-card";

export default function Oferta() {
  return (
    <>
      <PageHeader>Oferta</PageHeader>
      <section className=" pb-32">
        <div>
          <div className="container mx-auto px-4">
            <div className="mb-16 flex flex-col justify-center items-center">
              <Fade direction="bottom" triggerOnce>
                <SectionTitle>Nasza oferta</SectionTitle>
              </Fade>
            </div>

            <Fade direction="bottom" delay={600} triggerOnce>
              <OfferSectionDarkCard
                title="Rozwiązania dla biznesu"
                link="/oferta/dla-biznesu"
                img="/mag_energii_sm1.jpg"
              >
                Zapewniamy obsługę całego procesu inwestycyjnego. Dostarczamy
                kompleksowe rozwiązania z zakresu fotowoltaiki w połączeniu z
                magazynowaniem energii.
              </OfferSectionDarkCard>
            </Fade>

            <Fade direction="bottom" delay={600} triggerOnce>
              <OfferSectionGrayCard
                title="Rozwiązania dla domu"
                link="/oferta/dla-domu"
                img="/glp_slider20.jpg"
              >
                Dostarczamy kompleksowe rozwiązania z zakresu fotowoltaiki,
                magazynowania energii, ładowania samochodów elektrycznych, jak
                również z zakresu inteligentnych systemów zarządzania energią
              </OfferSectionGrayCard>
            </Fade>

            <Fade direction="bottom" delay={600} triggerOnce>
              <OfferSectionDarkCard
                title="Naprawa i serwis 'obcych' instalacji PV"
                link="/oferta/uslugi-serwisowe"
                img="/monter_sm.jpg"
              >
                Jeżeli Twoja instalacja PV uległa awarii, a wykonawca instalacji
                nie jest zainteresowany jej naprawą lub nie działa już na rynku,
                możesz zwróć się do nas.
              </OfferSectionDarkCard>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
}
