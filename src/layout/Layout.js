// Layout.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import LeftSideMenu from '../components/LeftSideMenu';
import Footer from '../components/Footer';

const Layout = ({ children, toggle, setToggle }) => {
  const location = useLocation();
  const path = location.pathname;
  
  return (
    <div className="App">
      {path === "/" ? (
        <>
        <div className='font-verdana text-sm font-semibold text-white px-2' style={{ background: "#917030" }}>
        Launch Celebration! Free Shipping on all orders.
        </div></>
      ) : null}
      <Header toggle={toggle} setToggle={setToggle} />
      <main className={`ml-0 transition-all duration-1000 ease-in-out translate-x-0`}>
      <div className={`${toggle ? 'mr-100' : 'mr-0'}`}>
          {children}
        </div>
        <LeftSideMenu toggle={toggle} />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
