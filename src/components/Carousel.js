import React from 'react';
import MainVideo from '../video/MainVideo.mp4';

const BootstrapCarousel = () => {

  return (

      <div className="carousel w-full">
      <video autoPlay muted loop playsInline className="w-full">
          <source src={MainVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
  )
};

export default BootstrapCarousel;
