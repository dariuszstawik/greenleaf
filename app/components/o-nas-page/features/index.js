"use client";
import { Fade } from "react-awesome-reveal";
import SectionTitle from "../../global-components/section-title";
import FeaturesItem from "../features-item";

export default function Features({ content }) {
  return (
    <section
      className="mt-28 relative w-screen px-10 lg:px-32 py-20 pb-28 bg-primary after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-secondaryGreen after:opacity-90"
      style={{
        backgroundImage: 'url("/glp_slider20.jpg")',
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-20">
        <div className="mb-32">
          <SectionTitle isWhite>Dlaczego my?</SectionTitle>
        </div>
        <Fade direction="bottom" delay={600} triggerOnce>
          <div className="flex flex-wrap -mx-3 -mb-10 lg:-mb-16  z-20">
            {content.map((item, i) => {
              return (
                <FeaturesItem
                  key={item.fields.number}
                  title={item.fields.title}
                  number={item.fields.number}
                  content={item.fields.content}
                />
              );
            })}
          </div>
        </Fade>
      </div>
    </section>
  );
}
