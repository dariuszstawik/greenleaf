import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../button";

export default async function NewsCard({ title, lead, slug, img }) {
  return (
    <div className="  max-w-screen h-[420px] sm:w-96 rounded-lg shadow-lg">
      <Image
        className="w-contain rounded-t-lg"
        src={img ? `https:${img.fields.file.url}` : ""}
        width={img?.fields?.file?.details?.image?.width}
        height={img?.fields?.file?.details?.image?.height}
        alt={img?.fields?.description ? img.fields.description : ""}
      />
      <div className="h-max p-4 flex flex-col justify-between">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 mt-2">
          {lead.length > 200 ? lead.slice(0, 200) + "..." : lead}
        </p>
        <Button className="ml-auto">
          <Link href={`/aktualnosci/${slug}`}>czytaj więcej</Link>
        </Button>
      </div>
    </div>
  );
}
