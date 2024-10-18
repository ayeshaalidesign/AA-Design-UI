import React from "react";
import BootstrapCarousel from "../components/Carousel";
import "../App";
import FirstImage from '../images/first-image.jpg'; 
import second from '../images/second.jpeg';
import third from '../images/third.jpg';
import { trackEvent } from "../utils/FacebookPixel";

const HomePage = () => {

  const handleRedirection = () => {
    window.location.href = '/products';
    trackEvent("Shop");
  }

  const handleRedirectionShawl = () => {
    window.location.href = '/shawls';
    trackEvent("Shop");
  }

  const handleRedirectionCapes = () => {
    window.location.href = '/capes';
    trackEvent("Shop");
  }


  return (
    <div className="font-verdana">
      <BootstrapCarousel />
      <div className="relative">
        <img src={third} alt="embroidered capes" className="w-full" />
        <div className="absolute bottom-8 lg:bottom-16 left-1/2 transform -translate-x-1/2 text-black font-bold font-verdana text-xs mb-[-12px] lg:text-lg lg:ml-[-40px]">
        Embroidered Capes
        </div>
        <div className="absolute bottom-2 lg:bottom-8  left-1/2 transform -translate-x-1/2 text-black font-semibold font-verdana cursor-pointer text-xs lg:text-xl lg:ml-[-40px] underline" onClick={handleRedirectionCapes}>
        <p>
        Shop
        </p>
        </div>
      </div>
      
      <div className="flex flex-row">
      <div className="relative flex-1">
        <img src={first} alt="embroidered shawl" className="w-full" />
        <div className="absolute bottom-12 lg:bottom-20 left-1/2 transform -translate-x-1/2 text-white font-bold font-verdana text-xs mb-[-12px] lg:text-lg lg:ml-[-40px] truncate">
        Embroidered Shawl
        </div>
        <div className="absolute bottom-6 lg:bottom-12 left-1/2 transform -translate-x-1/2 text-white font-semibold font-verdana cursor-pointer text-xs lg:text-xl lg:ml-[-40px] underline" onClick={handleRedirectionShawl}>
        <p>
        Shop
        </p>
        </div>
      </div>
      <div className="relative flex-1">
        <img src={second} alt="occasion wear" className="w-full" />
        <div className="absolute bottom-12 lg:bottom-20 left-1/2 transform -translate-x-1/2 text-white font-bold font-verdana text-xs mb-[-12px] lg:text-lg lg:ml-[-40px]">
          Occasion Wear
        </div>
        <div className="absolute bottom-6 lg:bottom-12 left-1/2 transform -translate-x-1/2 text-white font-semibold font-verdana cursor-pointer text-xs lg:text-xl lg:ml-[-40px] underline" onClick={handleRedirection}>
        <p>
        Shop
        </p>
        </div>
      </div>
      </div>

    </div>
  );
};

export default HomePage;
