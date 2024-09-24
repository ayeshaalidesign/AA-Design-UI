import React, { useState } from 'react';
import BootstrapCarousel from '../components/Carousel';
import { FaBook, FaInfoCircle, FaComments, FaHome, FaShoppingCart, FaChevronDown } from 'react-icons/fa';
import '../App.css';

const LeftSideMenu = ({ toggle }) => {
  // State to manage the visibility of collection categories
  const [showCollections, setShowCollections] = useState(false);

  const menuClassName = toggle 
    ? "font-verdana fixed inset-y-0 right-0 z-50 bg-black w-100 py-6 transition-all duration-1000 ease-in-out transform translate-x-0" 
    : "font-verdana fixed inset-y-0 right-0 z-50 bg-black w-0 py-6 transition-all duration-1000 ease-in-out transform translate-x-0";

  // Function to handle the collection click
  const handleCollectionClick = () => {
    setShowCollections(!showCollections);
  };

  return (
    <div className={menuClassName} style={{ color: "#ac8b4a" }}>
      {toggle && (
        <div className='flex'>
          <div className='flex justify-center items-center w-50 mx-6 lg:mt-20x'>
            <BootstrapCarousel />
          </div>

          <div className='w-50 flex justify-center mt-12'>
            <ul>
              <a href='/'>
                <li className="flex items-center mb-4 ml-4 mt-4 text-md transform hover:scale-105 transition-all">
                  <FaHome className="mr-2" style={{ fontSize: '18px' }} />
                  Home
                </li>
              </a>
              
              <a href='/products'>
                <li className="flex items-center mb-4 ml-4 text-md transform hover:scale-105 transition-all">
                  <FaBook className="mr-2" style={{ fontSize: '15px' }} />
                  Shop
                </li>
              </a>

              <a href='/cart'>
                <li className="flex items-center mb-4 ml-4 text-md transform hover:scale-105 transition-all">
                  <FaShoppingCart className="mr-2" style={{ fontSize: '16px' }} />
                  Cart
                </li>
              </a>

              <a href='/about-us'>
                <li className="flex items-center mb-4 ml-4 text-md transform hover:scale-105 transition-all">
                  <FaInfoCircle className="mr-2" style={{ fontSize: '16px' }} />
                  About Us
                </li>
              </a>

              <a href='/contact-us'>
                <li className="flex items-center mb-4 ml-4 text-md transform hover:scale-105 transition-all">
                  <FaComments className="mr-2" style={{ fontSize: '16px' }} />
                  Contact Us
                </li>
              </a>

              {/* Collection Item */}
              <li className="flex items-center mb-4 ml-4 text-md transform hover:scale-105 transition-all cursor-pointer" onClick={handleCollectionClick}>
                <FaChevronDown className="mr-2" style={{ fontSize: '16px' }} />
                Collections
              </li>

              {/* Collection Categories */}
              {showCollections && (
                <div className="ml-6">
                  <a href='/occasion-wear'>
                    <li className="flex items-center mb-4 text-md transform hover:scale-105 transition-all">
                      <span>Occasion Wear</span>
                    </li>
                  </a>
                  <a href='/shawls'>
                    <li className="flex items-center mb-4 text-md transform hover:scale-105 transition-all">
                      <span>Shawls</span>
                    </li>
                  </a>
                  <a href='/jewelry'>
                    <li className="flex items-center mb-4 text-md transform hover:scale-105 transition-all">
                      <span>Jewelry/Accessories</span>
                    </li>
                  </a>
                </div>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftSideMenu;
