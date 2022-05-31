import React from "react";

const Tags = ({ tags }) => {
  const tagElements = tags.map((tag) => (
    <span
      key={tag}
      className="inline-block bg-indigo-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
    >
      #{tag}
    </span>
  ));
  return <div className="px-6 py-4">{tagElements}</div>;
};

export default Tags;
