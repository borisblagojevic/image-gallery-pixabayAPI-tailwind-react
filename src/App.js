import React, { useState, useEffect } from "react";
import { PIXABAY_API_KEY } from "./global.js";
import ResultCard from "./Components/ResultCard";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((response) => response.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {images.map((img) => (
          <ResultCard key={img.id} img={img} />
        ))}
      </div>
    </div>
  );
}

export default App;
