import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ({ title, number, content }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-10 lg:mb-16">
      <div className="relative pt-16 pb-12 px-2 lg:px-8 rounded-lg text-center">
        <span className="absolute top-0 inset-x-0 -mt-6 flex justify-center items-center w-16 h-16 mx-auto rounded-full bg-primaryGreen text-white">
          {number}
        </span>
        <h3 className="mb-6 text-white">{title}</h3>
        <div className="text-white">{documentToReactComponents(content)}</div>
      </div>
    </div>
  );
}
