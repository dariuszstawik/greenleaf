"use client";
import Link from "next/link";
import Button from "../button";

export default function OfferSectionDarkCard({
  title,
  buttonTitle,
  link,
  img,
  children,
}) {
  return (
    <div className="mt-20 flex flex-wrap rounded-lg overflow-hidden">
      <div className="w-full lg:w-1/2 rounded-lg flex object-cover">
        <img
          className="object-cover"
          src={img ? img.fields.file.url : ""}
          alt={img ? img.fields.description : ""}
        />
      </div>
      <div
        className="relative flex flex-col items-start w-full lg:w-1/2 py-6 lg:pt-10 px-10 rounded-r bg-secondaryGreen shadow-md"
        style={{
          clipPath: "polygon(85% 0, 100% 20%, 100% 100%, 0 100%, 0 0)",
        }}
      >
        <h3 className="my-4 text-white">{title}</h3>
        <div className="w-10 h-1 rounded-sm bg-white mb-4" />
        <p className="mb-4 text-lg text-white">{children}</p>

        <Button className="mb-2 mt-auto">
          <Link href={link}>{buttonTitle}</Link>
        </Button>
      </div>
    </div>
  );
}
