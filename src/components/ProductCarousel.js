import React, { useState, useEffect, useRef } from "react";

const ProductCarousel = ({ images, video }) => {
  const totalItems = images.length + (video ? 1 : 0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  useEffect(() => {
    if (video && currentIndex === images.length && videoRef.current) {
      videoRef.current.play();
    }
  }, [currentIndex, images.length, video]);

  return (
    <div className="mt-2 lg:pb-12 ">
      <div className="carousel w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item relative w-full ${index === currentIndex ? 'active' : 'hidden'}`}
          >
            {index === currentIndex && <img src={image} className="w-full rounded-xl" />}
          </div>
        ))}
        {video && (
          <div
            className={`carousel-item relative w-full ${currentIndex === images.length ? 'active' : 'hidden'}`}
          >
            {currentIndex === images.length && (
              <video ref={videoRef} src={video} className="w-full max-h-screen rounded-xl" controls />
            )}
          </div>
        )}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={prevImage} className="btn btn-circle">❮</button>
          <button onClick={nextImage} className="btn btn-circle">❯</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;