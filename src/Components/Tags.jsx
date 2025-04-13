import React from "react";

const Tags = ({ tags }) => {

  const tagElements = []

  for (let i = 0; i < 3; i++)
  {
    tagElements.push(
        <span
            key={tags[i]}
            className="inline-block bg-red-50 rounded-full px-3 py-1 mt-5 text-sm font-semibold text-gray-800 mr-2"
        >
      #{tags[i]}
    </span>);
  }

const a = tags.slice(2);

  tagElements.push(
      <span className="inline-block bg-red-50 rounded-full px-3 py-1 mt-5 text-sm font-semibold text-gray-800 mr-2"
        key={a[1]}
        title={a.join(' ')}>
        +{a.length}
      </span>
  )

  return <div className="px-6 py-4 ">{tagElements}</div>;
};

export default Tags;
