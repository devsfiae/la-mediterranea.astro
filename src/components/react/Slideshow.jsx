// src/components/react/Slideshow.jsx

import React, { useState, useEffect } from 'react';
import styles from './slideshow.module.css';

function Slideshow({ slides }) {
  const [slideIndex, setSlideIndex] = useState(0);

  // Function for switching to a specific slide
  const showSlide = (n) => {
    if (slides && slides.length > 0) {
      const newIndex = (n + slides.length) % slides.length;
      setSlideIndex(newIndex);
    }
  };

  useEffect(() => {
    if (slides && slides.length > 0) {
      const interval = setInterval(() => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [slides]);

  if (!slides || slides.length === 0) {
    return <p>Keine Slides verfügbar.</p>;
  }

  return (
    <div className={styles.slideshowContainer}>
      {slides.map((slide, index) => (
        <div
          className={`${styles.slide} ${index === slideIndex ? styles.slideActive : ''}`}
          key={slide.slide_item_id}
        >
          <img
            src={`/images/slides/${slide.image_item_name}`}
            alt={slide.title}
            className={styles.slideImage}
          />
          <div className={styles.slideContent}>
            <h2>{slide.title}</h2>
            <p>{slide.item_name}</p>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button className={styles.prev} onClick={() => showSlide(slideIndex - 1)}>
        &#10094;
      </button>
      <button className={styles.next} onClick={() => showSlide(slideIndex + 1)}>
        &#10095;
      </button>

      {/* Navigation points */}
      <div className={styles.dotsContainer}>
        {slides.map((_, index) => (
          <span
            className={`${styles.dot} ${index === slideIndex ? styles.dotActive : ''}`}
            key={index}
            onClick={() => showSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;