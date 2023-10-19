import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ListItem from "../../global-components/list-item";

export default function Partneritem({
  title,
  content,
  list1,
  list2,
  list3,
  img,
  imgLink,
}) {
  return (
    <>
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center lg:flex-row gap-6 mt-20 mb-10">
        <div className="w-1/2">
          <h4>{title}</h4>
          <div>{documentToReactComponents(content)}</div>
          <ul>
            {list1 && (
              <ListItem className="border-b-0 pb-1 px-0">{list1}</ListItem>
            )}
            {list2 && (
              <ListItem className="border-b-0 pb-1 px-0">{list2}</ListItem>
            )}
            {list3 && (
              <ListItem className="border-b-0 pb-1 px-0">{list3}</ListItem>
            )}
          </ul>
        </div>
        <div className="w-1/2 flex justify-center">
          <a href={imgLink} target="_blank">
            <img
              src={img.fields.file.url ? img.fields.file.url : ""}
              alt={
                img.fields.file.description ? img.fields.file.description : ""
              }
              className="w-[360px]"
            />
          </a>
        </div>
      </div>
      <hr className="w-full mt-10" />
    </>
  );
}
