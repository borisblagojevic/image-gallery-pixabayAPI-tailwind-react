import React, { useState, useEffect } from "react";

import ResultCard from "./Components/ResultCard.jsx";
import SearchBar from "./Components/SearchBar.jsx";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [selectedType, setSelectedTerm] = useState("all");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}&q=${term}&image_type=${selectedType}&pretty=true`
    )
      .then((response) => response.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, [term, selectedType]);

  return (
    <div className="container mx-auto p-4">
      <SearchBar
        getText={(text) => setTerm(text)}
        getType={(type) => setSelectedTerm(type)}
      />

      {!isLoading && images.length === 0 && (
        <h1 className="text-6xl text-center mx-auto">
          No images have been found!
        </h1>
      )}

      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto">Loading</h1>
      ) : (
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-4 auto-cols-min">
          {images.map((img) => (
            <ResultCard key={img.id} img={img} type={selectedType} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
