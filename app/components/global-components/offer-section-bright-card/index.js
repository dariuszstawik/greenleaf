import Link from "next/link";
import Button from "../button";

export default function OfferSectionBrightCard({ title, link, img, children }) {
  return (
    <div className="mt-20 flex flex-wrap flex-row-reverse rounded-lg overflow-hidden">
      <div className="w-full lg:w-1/2 rounded-lg flex">
        <img className="object-cover" src={img} alt="" />
      </div>
      <div
        className="relative flex flex-col items-end w-full lg:w-1/2 py-6 lg:pt-10 px-10 rounded-r bg-gray-50 shadow-md"
        style={{
          clipPath: "polygon(20% 0%, 100% 0, 100% 100%, 0 100%, 0% 25%)",
        }}
      >
        <h3 className="my-4 text-secondaryGreen">{title} </h3>
        <div className="w-10 h-1 rounded-sm bg-primaryGreen mb-4" />
        <p className="mb-4 text-lg text-right">{children}</p>

        <Button className="mb-2 mt-auto">
          <Link href={link}>Sprawdź ofertę</Link>
        </Button>
      </div>
    </div>
  );
}
