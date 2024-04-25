// Layout.js

import React from 'react';
import Header from '../components/Header';
import LeftSideMenu from '../components/LeftSideMenu';
import Footer from '../components/Footer';

const Layout = ({ children, toggle, setToggle }) => {
  return (
    <div className="App">
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
