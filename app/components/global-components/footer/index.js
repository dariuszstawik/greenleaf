import ListItem from "../list-item";
import Logo from "../logo";

export default function Footer() {
  return (
    <section className="relative bg-primaryGray mt-32">
      <img
        src="/asset1.svg"
        className="absolute w-1/12 top-0 left-0"
        alt="asset"
      />
      <img
        src="/asset2.svg"
        className="absolute w-1/12 bottom-0 left-0"
        alt="asset"
      />
      <img
        src="/asset3.svg"
        className="absolute w-1/12 bottom-0 right-0 translate-x-2"
        alt="asset"
      />

      <div className="pb-20 pt-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap mb-6 lg:mb-20">
            <div className="mb-auto w-full lg:w-1/5">
              <Logo className="mt-4 w-36" />
            </div>
            <div className="mb-5 w-full lg:w-1/5">
              <h4 className="mb-2">Green Leaf Power</h4>
              <ul>
                <ListItem className="py-1">fotowoltaika</ListItem>
                <ListItem className="py-1">magazynowanie energii</ListItem>
                <ListItem className="py-1">systemy smart home</ListItem>
                <ListItem className="py-1">serwisy instalacji</ListItem>
              </ul>
            </div>
            <div className="w-full lg:w-3/5 flex flex-wrap -mx-3 justify-end">
              <div className="mb-6 w-full md:w-1/2 lg:w-1/4 lg:mr-6 px-3">
                <h5 className="mb-4 font-bold">Biuro</h5>
                <p className="leading-loose">ul. 11 Listoada 11</p>
                <p className="leading-loose">40-387 Katowice</p>
              </div>
              <div className="mb-6 w-full md:w-1/2 lg:w-1/4 px-3">
                <h5 className="mb-4 font-bold">Kontakt</h5>
                <p className="leading-loose">biuro@greenleaf.pl</p>
                <p className="leading-loose">tel. 536 108 864</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <p className="text-sm mx-auto">
              © 2023. Green leaf Power. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
