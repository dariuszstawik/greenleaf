"use client";

import { Fade, Slide } from "react-awesome-reveal";
import SectionTitle from "../section-title";
import ListItem from "../list-item";
import Button from "../button";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ParagraphWithlist({
  title,
  paragraph,
  listItem1,
  listItem2,
  listItem3,
  listItem4,
  listItem5,
  buttonTitle,
  buttonLink,
  img,
  isImgSmaller,
}) {
  return (
    <>
      <div className={`w-full pb-16 flex flex-col lg:flex-row-reverse`}>
        <Slide direction="right" triggerOnce>
          <div
            className={`relative ${
              isImgSmaller ? "w-[560px]" : "w-[700px]"
            } rounded-md after:content-[''] after:absolute after-rounded-md after:top-0 after:left-0 after:w-full after:h-full after:bg-secondaryGreen after:opacity-10`}
          >
            <img
              src={img ? img.fields.file.url : ""}
              alt={
                img.fields.file.descripttion ? img.fields.file.descripttion : ""
              }
              className="rounded-md"
            />
          </div>
        </Slide>
        <div className="ml-8 mr-16 lg:ml-8 lg:mr-28 flex flex-col gap-2 text-lg">
          <Fade triggerOnce>
            <SectionTitle isAlignedLeft>{title}</SectionTitle>
          </Fade>
          <Fade triggerOnce>
            <div>{documentToReactComponents(paragraph)}</div>
          </Fade>
          <Fade cascade triggerOnce>
            <ul className="mb-4">
              <ListItem>{listItem1}</ListItem>
              <ListItem>{listItem2}</ListItem>
              <ListItem>{listItem3} </ListItem>
              <ListItem>{listItem4}</ListItem>
              <ListItem isLast>{listItem5}</ListItem>
            </ul>

            {buttonTitle && buttonLink && (
              <Button>
                <Link href={buttonLink}> {buttonTitle}</Link>
              </Button>
            )}
          </Fade>
        </div>
      </div>
    </>
  );
}
