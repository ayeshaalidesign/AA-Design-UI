import React from 'react';
import BootstrapCarousel from '../components/Carousel'
import { FaUser, FaSignInAlt, FaBook, FaInfoCircle, FaComments } from 'react-icons/fa';
import img1 from '../images/slider1.jpg';
import img2 from '../images/slider2.jpg';
import img4 from '../images/slider3.jpg';
import '../App.css';

const LeftSideMenu = ({ toggle }) => {
  const menuClassName = toggle ? "fixed inset-y-0 right-0 z-50 bg-black w-100 py-6 transition-all duration-1000 ease-in-out transform translate-x-0" : "fixed inset-y-0 right-0 z-50 bg-black w-0 py-6 transition-all duration-1000 ease-in-out transform translate-x-0";

  
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

  return (
    <div className={menuClassName} style={{fontFamily: 'Seasons'}}>
     {toggle && (
      <div className='flex mt-12'>
        <div className='w-50 mx-6'>
        <BootstrapCarousel items={carouselItems} />
        </div>

        <div className='w-50 flex justify-center mt-12 '>
        <ul >
        <a href='/login'>
        <li className="text-white flex items-center mb-4 ml-4 mt-4 text-md transform hover:scale-105 transition-all">
          <FaSignInAlt className="mr-2" />
          Login
        </li>
        </a>
        <a href='/register'>
        <li className="text-white flex items-center mb-4 ml-4 text-md transform hover:scale-105 transition-all">
          <FaUser className="mr-2" />
          Register
        </li>
        </a>
        <a href='/products'>
        <li className="text-white flex items-center mb-4 ml-4 text-md transform hover:scale-105 transition-all">
          <FaBook className="mr-2" />
          Shop
        </li>
        </a>
        <a href='/about-us'>
        <li className="text-white flex items-center mb-4 ml-4 text-md transform hover:scale-105 transition-all">
          <FaInfoCircle className="mr-2" />
          About Us
        </li>
        </a>
        <a href='/contact-us'>
        <li className="text-white flex items-center mb-4 ml-4 text-md transform hover:scale-105 transition-all">
          <FaComments className="mr-2" />
          Contact Us
        </li>
        </a>
      </ul>
        </div>

      </div>
     )}
    </div>
  );
};

export default LeftSideMenu;
