import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const nextImage = useCallback(() => {
    setOpacity(0);
    setTimeout(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
      setOpacity(1);
    }, 600);
  }, [currentImageIndex, images.length]);

  const prevImage = useCallback(() => {
    setOpacity(0);
    setTimeout(() => {
      setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
      setOpacity(1);
    }, 600);
  }, [currentImageIndex, images.length]);

  useEffect(() => {
    const slideInterval = setInterval(nextImage, 5000);
    return () => clearInterval(slideInterval);
  }, [nextImage]);

  return (
    <div className="carousel">
      <div className="carousel-text-container">
        <div className="carousel-text">
          <h1>Discover Amazing Places</h1>
          <Link to="/places">
            <button className="hero-button">Explore Now</button>
          </Link>
        </div>
      </div>
      <div className="carousel-inner">
        <button onClick={prevImage} className="carousel-control prev">&lt;</button>
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex}`}
          className="carousel-image"
          style={{ opacity, transition: 'opacity 0.5s ease-in-out' }}
        />
        <button onClick={nextImage} className="carousel-control next">&gt;</button>
      </div>
    </div>
  );
};

export default Carousel;
