// src/components/Slideshow.jsx
import React, { useState, useEffect } from 'react';

const Slideshow = ({ slides }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const showSlide = (n) => {
    setSlideIndex((n + slides.length) % slides.length);
  };

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          className="slide"
          key={slide.id}
          style={{ display: index === slideIndex ? 'block' : 'none' }}
        >
          <img
            src={slide.data.image}
            alt={slide.data.title}
            className="slide-image"
          />
          <div className="text">
            <h2>{slide.data.title}</h2>
            <p>{slide.data.description}</p>
          </div>
        </div>
      ))}

      {/* Navigationsbuttons */}
      <a className="prev" onClick={() => showSlide(slideIndex - 1)}>
        &#10094;
      </a>
      <a className="next" onClick={() => showSlide(slideIndex + 1)}>
        &#10095;
      </a>

      {/* Navigationspunkte */}
      <div style={{ textAlign: 'center' }}>
        {slides.map((_, index) => (
          <span
            className={`dot ${index === slideIndex ? 'active' : ''}`}
            key={index}
            onClick={() => showSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;