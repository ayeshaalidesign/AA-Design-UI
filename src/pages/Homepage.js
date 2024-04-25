import React from 'react';
import BootstrapCarousel from '../components/Carousel';
import img1 from '../images/slider1.jpg';
import img2 from '../images/slider2.jpg';
import img4 from '../images/slider3.jpg';
import ready from '../images/ready-to-wear.jpg';
import '../App';


const HomePage = () => {

  // Your carousel items
  const carouselItems = [
    {
      id: 1,
      title: 'Photography',
      body: 'Bootstrap Carousel Example',
      imageUrl: img1,
      docs: 'https://getbootstrap.com/docs/4.0/components/carousel/'
    },
    {
      id: 2,
      title: 'City Views',
      body: 'Bootstrap Carousel Example',
      imageUrl: img2,
      docs: 'https://getbootstrap.com/docs/4.0/components/carousel/'
    },
    {
      id: 3,
      title: 'Foods and Culture',
      body: 'Bootstrap Carousel Example',
      imageUrl: img4,
      docs: 'https://getbootstrap.com/docs/4.0/components/carousel/'
    }
  ];

  const redirectToProducts = () => {
    window.location.href = '/products'
  }

  return (
    <div style={{fontFamily:'Seasons'}}>
      <BootstrapCarousel items={carouselItems} />
      <div className="relative">
  <img src={ready} alt='ready to wear' className="w-full" />
  <button className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-black text-white font-semibold text-md px-4 py-3 mb-2" onClick={redirectToProducts}>Shop Now</button>
</div>

    </div>
  );
};

export default HomePage;