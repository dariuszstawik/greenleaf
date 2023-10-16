"use client";
import { Fade } from "react-awesome-reveal";
import SectionTitle from "../../global-components/section-title";
import OfferSectionDarkCard from "../../global-components/offer-section-dark-card";
import OfferSectionBrightCard from "../../global-components/offer-section-bright-card";

export default function OfferSection() {
  return (
    <section className="bg-primaryGray mt-32 pb-32">
      <div>
        <div className="container mx-auto px-4">
          <div className="mb-16 flex flex-col justify-center items-center">
            <Fade direction="bottom" triggerOnce>
              <SectionTitle>Nasza oferta</SectionTitle>
            </Fade>
          </div>

          <Fade direction="bottom" delay={600} triggerOnce>
            <OfferSectionDarkCard
              title="Fotowoltaika"
              link="/oferta"
              img="/panel11.jpg"
            >
              Dla firm, gospodarstw rolnych, a także klientów indywidualnych.
              Poznaj naszą ofertę i dowiedz się, ile zyskasz dzięki energii
              słonecznej od Green Leaf Power.
            </OfferSectionDarkCard>
          </Fade>

          <Fade direction="bottom" delay={600} triggerOnce>
            <OfferSectionBrightCard
              title="Magazynowanie energii i smart home"
              link="/oferta"
              img="/magazyn-kontenerowy-sm.jpg"
            >
              Osiągnij jeszcze większą niezależność i efektywność dzięki
              połączeniu instalacji fotowoltaicznej z magazynem energii oraz
              systemem smart home.
            </OfferSectionBrightCard>
          </Fade>

          <Fade direction="bottom" delay={600} triggerOnce>
            <OfferSectionDarkCard
              title="Usługi serwisowe"
              link="/oferta"
              img="/monter_sm.jpg"
            >
              Twój wykonawca nie jest w stanie wykonać przeglądu lub naprawić
              niewłaściwie działającej instalacji PV? Zgłoś się do nas!
            </OfferSectionDarkCard>
          </Fade>
        </div>
      </div>
    </section>
  );
}
