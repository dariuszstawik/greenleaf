"use client";
import { Slide } from "react-awesome-reveal";
import SectionTitle from "../section-title";
import Button from "../button";
import Link from "next/link";

export default function ParagraphWithImageOnLeft({
  title,
  children,
  img,
  buttonTitle,
  buttonHref,
  isImaSmaller,
}) {
  return (
    <div className={`w-full py-16 flex flex-col lg:flex-row`}>
      <Slide direction="left" delay={600} triggerOnce>
        <div
          className={`relative ${
            isImaSmaller ? "w-[560]" : "w-[700px]"
          } shrink-0 rounded-md after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-secondaryGreen after:opacity-20`}
        >
          <img
            src={img.fields.file.url ? img.fields.file.url : ""}
            alt={img.fields.file.description ? img.fields.file.description : ""}
            className="rounded-md"
          />
        </div>
      </Slide>
      <div className="ml-16 mr-16 lg:ml-16 lg:mr-32 flex flex-col gap-2 text-lg">
        <SectionTitle isAlignedLeft>{title}</SectionTitle>
        {children}
        <Button className="mr-auto mt-6">
          <Link href={buttonHref}>{buttonTitle}</Link>
        </Button>
      </div>
    </div>
  );
}
