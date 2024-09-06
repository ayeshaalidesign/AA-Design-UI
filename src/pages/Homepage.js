import React from "react";
import BootstrapCarousel from "../components/Carousel";
import "../App";
import first from '../images/First.jpg';
import second from '../images/second.jpeg';

const HomePage = () => {

  const handleRedirection = () => {
    window.location.href = '/products';
  }

  const handleRedirectionShawl = () => {
    window.location.href = '/shawls';
  }

  return (
    <div className="font-verdana">
      <BootstrapCarousel />
      <div className="relative">
        <img src={first} alt="embroidered shawl" className="w-full" />
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white font-bold italic font-verdana text-xs mb-[-12px] lg:text-lg lg:ml-[-40px]">
        Embroidered Shawl
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white font-semibold font-verdana cursor-pointer text-xs lg:text-xl lg:ml-[-40px] underline" onClick={handleRedirectionShawl}>
        <p>
        Shop
        </p>
        </div>
      </div>
      <div className="relative">
        <img src={second} alt="occasion wear" className="w-full" />
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white font-bold italic font-verdana text-xs mb-[-12px] lg:text-lg lg:ml-[-40px]">
          Occasion Wear
        </div>
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white font-semibold font-verdana cursor-pointer text-xs lg:text-xl lg:ml-[-40px] underline" onClick={handleRedirection}>
        <p>
        Shop
        </p>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
