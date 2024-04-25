import React from 'react';
import { Carousel } from 'react-bootstrap';

const BootstrapCarousel = ({ items }) => {


  return (
    <div className="carousel-container">
    <Carousel>
      {items.map((item) => (
        <Carousel.Item key={item.id}>
          <div className="relative">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full object-cover"
            />
           
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
              <h3 className="text-white text-lg font-semibold">{item.title}</h3>
              <p className="text-white text-md font-normal">{item.body}</p>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
  
  
  );
};

export default BootstrapCarousel;
