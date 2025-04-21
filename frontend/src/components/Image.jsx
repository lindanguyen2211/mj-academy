import React, { useState } from "react";
import './Image.css'

const Image = ({ src, alt, style }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
      <img
        src={src}
        alt={alt}
        onClick={() => setIsZoomed(!isZoomed)}
        className={`content-image ${style} ${isZoomed ? "zoomed" : ""}`}
        loading="lazy"
      />
  );
};

export default Image;
