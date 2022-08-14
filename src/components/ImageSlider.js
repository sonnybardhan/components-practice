import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ slides }) => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  if (!Array.isArray(slides) || !slides.length) return;

  const previousImageClick = () => {
    setCurrentImageIdx((currIdx) => {
      if (currIdx === 0) {
        return slides.length - 1;
      }
      return currIdx - 1;
    });
  };

  const nextImageClick = () => {
    setCurrentImageIdx((currIdx) => {
      if (currIdx === slides.length - 1) {
        return 0;
      }
      return currIdx + 1;
    });
  };

  return (
    <section className='image-slider-container'>
      <button className='btn go-left' onClick={previousImageClick}>
        ◀
      </button>

      <button className='btn go-right' onClick={nextImageClick}>
        ▶
      </button>
      {slides.map((image, idx) => {
        return (
          <div
            className={idx === currentImageIdx ? 'slide active' : 'slide'}
            key={Math.random()}
          >
            {idx === currentImageIdx && (
              <img src={image.image} alt='' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
