import React from "react";
import Tags from "./Tags.jsx";

const ResultCard = ({ img, type }) => {
  const handleBG = (type) => {
    switch (type) {
      case "all":
        return "bg-teal-500";

      case "photo":
        return "bg-yellow-500";

      case "illustration":
        return "bg-red-500";

      default:
        return "bg-blue-500";
    }
  };
  if (img.webformatHeight > 550)
    return <></>

  if (type === img.type || type === "vector" || type === "all")
    return (
      <div className="relative max-w-sm h-fit pb-4 rounded overflow-hidden shadow-lg ">
        <figure className="overflow-hidden transi">
          <a target="_blank" rel="noopener noreferrer" href={img.largeImageURL}>
            <img
                src={img.webformatURL}
                alt=""
                className="w-full hover:duration-200 hover:ease-in hover:scale-150 hover:cursor-zoom-in hover:opacity-50"
            />
          </a>
        </figure>
        <span
          className={
            "absolute z-1 -translate-y-6 py-2 px-4 text-md font-semibold capitalize rounded " +
            `${handleBG(img.type)}`
          }
        >
          {img.type}
        </span>
        <Tags tags={img.tags.split(",")} />

        <div className="px-6 py-4 text-xs">
          <div className="font-bold text-red-300 text-l mb-2">
            Photo made by <span className="pl-2 text-red-700">{img.user}</span>
          </div>
          <ul>
            <li className="inline-block pr-2 text-gray-800">
              <strong className="pr-1 text-red-900">Views:</strong>
              {img.views}
            </li>
            <li className="inline-block pr-2 text-gray-800">
              <strong className="pr-1 text-red-900">Likes:</strong>
              {img.likes}
            </li>
            <li className="inline-block pr-2 text-gray-800">
              <strong className="pr-1 text-red-900">Downloads:</strong>
              {img.downloads}
            </li>
          </ul>
        </div>
      </div>
    );
};

export default ResultCard;
