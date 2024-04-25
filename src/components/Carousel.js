import React from 'react';
import { Carousel } from 'react-bootstrap';
import MainVideo from '../video/MainVideo.mp4';

const BootstrapCarousel = () => {

  return (
<div className="carousel-container">
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <div className="relative">
            <video autoPlay muted loop className="w-full">
              <source src={MainVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  
  
  );
};

export default BootstrapCarousel;
