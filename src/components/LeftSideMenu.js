import React from 'react';
import BootstrapCarousel from '../components/Carousel'
import {FaBook, FaInfoCircle, FaComments, FaHome, FaShieldAlt } from 'react-icons/fa';
import '../App.css';
import { FaCartShopping } from 'react-icons/fa6';

const LeftSideMenu = ({ toggle }) => {
  const menuClassName = toggle ? "fixed inset-y-0 right-0 z-50 bg-black w-100 py-6 transition-all duration-1000 ease-in-out transform translate-x-0" : "fixed inset-y-0 right-0 z-50 bg-black w-0 py-6 transition-all duration-1000 ease-in-out transform translate-x-0";


  return (
    <div className={menuClassName} style={{fontFamily: 'Seasons', color: "#ac8b4a"}}>
     {toggle && (
      <div className='flex'>
        <div className=' flex justify-center items-center w-50 mx-6 lg:mt-20x'>
        <BootstrapCarousel/>
        </div>

        <div className='w-50 flex justify-center mt-12 '>
        <ul >
        <a href='/'>
        <li className=" flex items-center mb-4 ml-4 mt-4 text-md transform hover:scale-105 transition-all">
          <FaHome className="mr-2" style={{fontSize:'18px'}} />
          Home
        </li>
        </a>
        
        <a href='/products'>
        <li className=" flex items-center mb-4 ml-4 text-md transform hover:scale-105 transition-all">
          <FaBook className="mr-2"  style={{fontSize:'15px'}} />
          Shop
        </li>
        </a>

        <a href='/cart'>
        <li className=" flex items-center mb-4 ml-4 text-md transform hover:scale-105 transition-all">
          <FaCartShopping className="mr-2"  style={{fontSize:'16px'}} />
          Cart
        </li>
        </a>
        <a href='/about-us'>
        <li className=" flex items-center mb-4 ml-4 text-md transform hover:scale-105 transition-all">
          <FaInfoCircle className="mr-2"  style={{fontSize:'16px'}} />
          About Us
        </li>
        </a>
        <a href='/contact-us'>
        <li className=" flex items-center mb-4 ml-4 text-md transform hover:scale-105 transition-all">
          <FaComments className="mr-2"  style={{fontSize:'16px'}} />
          Contact Us
        </li>
        </a>

        <a href='/policies'>
        <li className=" flex items-center mb-4 ml-4 text-md transform hover:scale-105 transition-all">
          <FaShieldAlt className="mr-2"  style={{fontSize:'16px'}} />
          Policies
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
