import React from 'react';
import BootstrapCarousel from '../components/Carousel';
import ready from '../images/ready-to-wear.jpg';
import '../App';


const HomePage = () => {


  return (
    <div className='font-verdana'>
      <BootstrapCarousel />
      <div className="relative">
  <img src={ready} alt='ready to wear' className="w-full" />
  <a href='/products' className='absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white font-bold font-verdana cursor-pointer lg:ml-[-40px] underline'>Show Now</a>
</div>

    </div>
  );
};

export default HomePage;