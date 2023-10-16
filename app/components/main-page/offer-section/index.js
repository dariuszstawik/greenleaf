"use client";
import { Fade } from "react-awesome-reveal";
import SectionTitle from "../../global-components/section-title";
import OfferSectionDarkCard from "../../global-components/offer-section-dark-card";
import OfferSectionBrightCard from "../../global-components/offer-section-bright-card";

export default function OfferSection({ content }) {
  return (
    <section className="bg-primaryGray mt-32 pb-32">
      <div>
        <div className="container mx-auto px-4">
          <div className="mb-16 flex flex-col justify-center items-center">
            <Fade direction="bottom" triggerOnce>
              <SectionTitle>Nasza oferta</SectionTitle>
            </Fade>
          </div>

          {content.map((item, i) => {
            return (
              <Fade direction="bottom" delay={i * 100} triggerOnce key={i}>
                {i % 2 !== 0 ? (
                  <OfferSectionBrightCard
                    title={item.fields.title}
                    buttonTitle={item.fields.buttonTitle}
                    link="/oferta"
                    img={item.fields.image ? item.fields.image : ""}
                  >
                    {item.fields.content}
                  </OfferSectionBrightCard>
                ) : (
                  <OfferSectionDarkCard
                    title={item.fields.title}
                    buttonTitle={item.fields.buttonTitle}
                    link="/oferta"
                    img={item.fields.image ? item.fields.image : ""}
                  >
                    {item.fields.content}
                  </OfferSectionDarkCard>
                )}
                {/* <OfferSectionDarkCard
                  title={item.fields.title}
                  buttonTitle={item.fields.buttonTitle}
                  link="/oferta"
                  img={item.fields.obraz ? item.fields.obraz : ""}
                >
                  {item.fields.content}
                </OfferSectionDarkCard> */}
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
