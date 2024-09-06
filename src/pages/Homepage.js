import React from "react";
import BootstrapCarousel from "../components/Carousel";
import occasionWear from '../images/Cover.jpeg';
import shawl from '../images/Coverr.jpg'
import "../App";

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
        <img src={shawl} alt="Embroidered Shawl" className="w-full" />
       
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
        <img src={occasionWear} alt="Occasion Wear" className="w-full" />
        {/* <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white font-semibold font-verdana text-xs mb-[-25px] lg:text-lg lg:ml-[-40px]">
          Ready to Wear
        </div> */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white font-bold italic font-verdana text-xs mb-[-12px] lg:text-lg lg:ml-[-40px]">
        Occasion Wear
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white font-semibold font-verdana cursor-pointer text-xs lg:text-xl lg:ml-[-40px] underline" onClick={handleRedirection}>
        <p>
        Shop
        </p>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
