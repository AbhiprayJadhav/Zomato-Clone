import React, { useState, useEffect } from 'react';
import '../styles/AutoCarousel.css'; // Assume you have this CSS for styling

const AutoCarousel = () => {
  const images = [
    "/carousel/curry.jpeg",  
    "/carousel/mulfood.png",
    "/carousel/samosa.jpeg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); // Clear interval when component unmounts
  }, [images.length]);

  // Function to manually go to a specific image
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
        />
      ))}

      {/* Dots Navigation */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;