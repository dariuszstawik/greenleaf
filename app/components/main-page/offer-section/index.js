"use client";
import { Fade, Slide } from "react-awesome-reveal";
import Button from "../../global-components/button";
import SectionTitle from "../../global-components/section-title";

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
            <div className="mt-20 flex flex-wrap rounded-lg overflow-hidden">
              <div className="w-full lg:w-1/2 rounded-lg flex object-cover">
                <img
                  className="object-cover"
                  src="/glp_slider20_rev.jpg"
                  alt=""
                />
              </div>
              <div
                className="relative flex flex-col items-start w-full lg:w-1/2 py-6 lg:pt-10 px-10 rounded-r bg-secondaryGreen shadow-md"
                style={{
                  clipPath: "polygon(85% 0, 100% 20%, 100% 100%, 0 100%, 0 0)",
                }}
              >
                <h3 className="my-4 text-white">Fotowoltaika</h3>
                <div className="w-10 h-1 rounded-sm bg-white mb-4" />
                <p className="mb-4 text-lg text-white">
                  Dla klientów indywidualnych, firm oraz gospodarstw rolnych.
                  Poznaj naszą ofertę i dowiedz się, ile zyskasz dzięki energii
                  słonecznej od Green Leaf Power.
                </p>

                <Button className="mb-2 mt-auto ml-auto">Sprawdź ofertę</Button>
              </div>
            </div>
          </Fade>

          <Fade direction="bottom" delay={600} triggerOnce>
            <div className="mt-20 flex flex-wrap flex-row-reverse rounded-lg overflow-hidden">
              <div className="w-full lg:w-1/2 rounded-lg flex">
                <img className="object-cover" src="/panel11.jpg" alt="" />
              </div>
              <div
                className="relative flex flex-col items-end w-full lg:w-1/2 py-6 lg:pt-10 px-10 rounded-r bg-gray-50 shadow-md"
                style={{
                  clipPath:
                    "polygon(20% 0%, 100% 0, 100% 100%, 0 100%, 0% 25%)",
                }}
              >
                <h3 className="my-4 text-secondaryGreen">
                  Magazynowanie energii
                </h3>
                <div className="w-10 h-1 rounded-sm bg-primaryGreen mb-4" />
                <p className="mb-4 text-lg text-right">
                  Osiągnij jeszcze większą niezależność dzięki połączeniu
                  instalacji fotowoltaicznej z magazynem energii.
                </p>

                <Button className="mb-2 mt-auto">Sprawdź ofertę</Button>
              </div>
            </div>
          </Fade>

          <Fade direction="bottom" delay={600} triggerOnce>
            <div className="mt-20 flex flex-wrap rounded-lg overflow-hidden">
              <div className="w-full lg:w-1/2 rounded-lg flex">
                <img className="object-cover" src="/glp_slider30.jpg" alt="" />
              </div>
              <div
                className="relative flex flex-col items-start w-full lg:w-1/2 py-6 lg:pt-10 px-10 rounded-r bg-secondaryGreen shadow-md"
                style={{
                  clipPath: "polygon(85% 0, 100% 20%, 100% 100%, 0 100%, 0 0)",
                }}
              >
                <h3 className="my-4 text-white">Usługi serwisowe</h3>
                <div className="w-10 h-1 rounded-sm bg-white mb-4" />
                <p className="mb-4 text-lg text-white">
                  Twój wykonawca nie jest w stanie wykonać przeglądu lub
                  naprawić niewłaściwie działającej instalacji pv? Zgłoś się do
                  nas!
                </p>

                <Button className="mb-2 mt-auto ml-auto">Sprawdź ofertę</Button>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
