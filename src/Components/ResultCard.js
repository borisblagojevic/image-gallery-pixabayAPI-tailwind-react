import React from "react";
import Tags from "./Tags";

const ResultCard = ({ img }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={img.webformatURL} alt="" className="w-full" />
      <Tags tags={img.tags.split(",")} />

      <div className="px-6 py-4">
        <div className="font-bold text-red-300 text-l mb-2">
          Photo made by {img.user}
        </div>
        <ul>
          <li className="inline-block pr-2">
            <strong className="pr-1">Views:</strong>
            {img.views}
          </li>
          <li className="inline-block pr-2">
            <strong className="pr-1">Likes:</strong>
            {img.likes}
          </li>
          <li className="inline-block pr-2">
            <strong className="pr-1">Downloads:</strong>
            {img.downloads}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResultCard;
