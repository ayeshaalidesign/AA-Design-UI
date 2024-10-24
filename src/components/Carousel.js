import React from "react";
import { Carousel } from "react-bootstrap";
import HomepageVideo from '../video/homepage.mp4';
const BootstrapCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <div className="relative">
            <video autoPlay muted loop playsInline className="w-full">
              <source src={HomepageVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BootstrapCarousel;
