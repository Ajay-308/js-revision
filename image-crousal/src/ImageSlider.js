import React, { useEffect, useState } from "react";
import { data } from "./constant";

const ImageSlider = () => {
  const [isActive, setIsActive] = useState(0);

  const nextSlide = () => {
    setIsActive((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setIsActive((prev) => (prev - 1 + data.length) % data.length);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => clearTimeout(timer);
  }, [isActive]);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Image Slider</h2>
      <div>
        {data.map((item, index) => (
          <img
            key={item.id}
            src={item.image}
            alt={`Scenic view ${item.id}`}
            style={{
              width: "50%",
              height: "25rem",
              display: isActive === index ? "block" : "none",
              margin: "auto",
            }}
          />
        ))}
      </div>
      <button onClick={prevSlide} style={{ margin: "10px" }}>
        Previous
      </button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default ImageSlider;
