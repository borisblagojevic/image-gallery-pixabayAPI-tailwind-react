import React, { useState, useEffect } from "react";

const SearchBar = ({ getText, getType }) => {
  const [text, setText] = useState("");
  const [searchType, setType] = useState("all");

  const handleSubmit = (e) => {
    e.preventDefault();
    getText(text);
  };

  const handleSelect = (e) => setType(e.target.value);

  useEffect(() => {
    getType(searchType);
  }, [searchType]);

  return (
    <div className="xl:max-w-xl max-w-sm rounded overflow-hidden my-10 mx-auto sm:px-1">
      <form onSubmit={handleSubmit} className="w-full xl:max-w-xl max-w-sm">
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Search for images"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          />

          <select onChange={handleSelect}>
            <option value="all">All</option>
            <option value="photo">Photos</option>
            <option value="illustration">Illustrations</option>
            <option value="vector">Vectors</option>
          </select>

          <button
            type="submit"
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
