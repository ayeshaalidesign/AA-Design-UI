import React from 'react';
import BootstrapCarousel from '../components/Carousel';
import ready from '../images/ready-to-wear.jpg';

import '../App';


const HomePage = () => {

  // Your carousel items
 

  const redirectToProducts = () => {
    window.location.href = '/products'
  }

  return (
    <div className='font-verdana'>
      <BootstrapCarousel />
      <div className="relative">
  <img src={ready} alt='ready to wear' className="w-full" />
  <button className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-black text-white font-semibold text-md px-4 py-3 mb-2 font-verdana"  onClick={redirectToProducts}>Shop Now</button>
</div>

    </div>
  );
};

export default HomePage;