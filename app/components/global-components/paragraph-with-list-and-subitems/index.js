"use client";

import { Fade, Slide } from "react-awesome-reveal";
import SectionTitle from "../section-title";
import ListItem from "../list-item";
import Button from "../button";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ParagraphWithListAndSubitems({
  title,
  paragraph,
  listItem1,
  listItem2,
  listItem3,
  listItem4,
  listItem5,
  listItem6,
  listSubitem1,
  listSubitem2,
  listSubitem3,
  listSubitem4,
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
              className="rounded-md bg-white"
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
              {listItem1 && <ListItem>{listItem1}</ListItem>}
              {listItem2 && <ListItem>{listItem2}</ListItem>}
              {listItem3 && <ListItem>{listItem3}</ListItem>}
              {listItem4 && <ListItem>{listItem4}</ListItem>}
              {listItem5 && <ListItem>{listItem5}</ListItem>}
              {listItem6 && <ListItem>{listItem6}</ListItem>}
              {listSubitem1 && <ListItem isNested>{listSubitem1}</ListItem>}
              {listSubitem2 && <ListItem isNested>{listSubitem2}</ListItem>}
              {listSubitem3 && <ListItem isNested>{listSubitem3}</ListItem>}
              {listSubitem4 && (
                <ListItem isNested isLast>
                  {listSubitem4}
                </ListItem>
              )}

              {/* <ListItem isNested>{listSubitem1}</ListItem>
              <ListItem isNested>{listSubitem2}</ListItem>
              <ListItem isNested isLast>
                {listSubitem3}
              </ListItem> */}
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
