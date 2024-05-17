import React from "react";
import BootstrapCarousel from "../components/Carousel";
import ready from "../images/ready-to-wear.jpg";
import "../App";

const HomePage = () => {

  const handleRedirection = () => {
    window.location.href = '/products';
  }
  return (
    <div className="font-verdana">
      <BootstrapCarousel />
      <div className="relative">
        <img src={ready} alt="ready to wear" className="w-full" />
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white font-semibold font-verdana text-xs lg:text-lg lg:ml-[-40px]">
          Ready to Wear
        </div>
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white font-thin italic font-verdana text-xs lg:text-lg lg:ml-[-40px]">
          Vintage Luxe
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-semibold font-verdana cursor-pointer text-xs lg:text-lg lg:ml-[-40px] underline" onClick={handleRedirection}>Shop Now</div>
      </div>
    </div>
  );
};

export default HomePage;
