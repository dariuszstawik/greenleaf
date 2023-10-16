import { client } from "@/lib/contentful/client";
import PartnerLogo from "../../main-page/partner-logo";
import SectionTitle from "../section-title";

async function getContentfulLogos() {
  const resLogos = await client.getEntries({
    content_type: "partnership",
  });

  const logos = resLogos.items;

  return logos;
}

export default async function Logos() {
  const logos = await getContentfulLogos();

  return (
    <section>
      <SectionTitle>Współpraca</SectionTitle>
      <div className="flex flex-wrap justify-center -mx-4 my-16">
        {logos.map((item, i) => {
          return <PartnerLogo key={i} logo={item.fields.logo[0]} />;
        })}
        {/* // <PartnerLogo logo="MP-Solar_logo.png" />
        // <PartnerLogo logo="NRG_logo.png" />
        // <PartnerLogo logo="Growatt-logo.png" />
        // <PartnerLogo logo="Hopergy_logo.png" /> */}
      </div>
    </section>
  );
}
