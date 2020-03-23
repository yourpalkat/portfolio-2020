import React, { useState } from 'react';
import Img from 'gatsby-image';

import { TiArrowLeftThick } from "react-icons/ti";
import { TiArrowRightThick } from "react-icons/ti";

import CarouselStyles from './Carousel.module.scss';

const Carousel = ({ screenshots }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const currentImage = screenshots[currentImageIndex - 1];

  const prevImage = () => {
    let newImageIndex = currentImageIndex - 1;
    if (newImageIndex < 1) {
      newImageIndex = screenshots.length;
    }
    setCurrentImageIndex(newImageIndex);
  };

  const nextImage = () => {
    let newImageIndex = currentImageIndex + 1;
    if (newImageIndex > screenshots.length) {
      newImageIndex = 1;
    }
    setCurrentImageIndex(newImageIndex);
  };

  return (
    <div className={CarouselStyles.carousel}>
      <Img fluid={currentImage.fluid} alt={currentImage.description} />
      {screenshots.length > 1 && (
        <div className={CarouselStyles.carouselButtons}>
          <button
            type="button"
            onClick={prevImage}
            className={CarouselStyles.arrowButton}
            aria-label="Click for previous image"
          ><TiArrowLeftThick /></button>
          <button
            type="button"
            onClick={nextImage}
            className={CarouselStyles.arrowButton}
            aria-label="Click for next image"
          ><TiArrowRightThick /></button>
          <p>
            {currentImageIndex} / {screenshots.length}
          </p>
        </div>
      )}
    </div>
  );
}

export default Carousel;