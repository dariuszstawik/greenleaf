import PartnerLogo from "../../main-page/partner-logo";
import SectionTitle from "../section-title";

export default function Logos() {
  return (
    <section>
      <SectionTitle>Współpraca</SectionTitle>
      <div className="flex flex-wrap justify-center -mx-4 my-16">
        <PartnerLogo logo="MP-Solar_logo.png" />
        <PartnerLogo logo="NRG_logo.png" />
        <PartnerLogo logo="Growatt-logo.png" />
        <PartnerLogo logo="Hopergy_logo.png" />
      </div>
    </section>
  );
}
