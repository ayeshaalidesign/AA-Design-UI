import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import pattern from '../images/pattern.svg';
import '../App.css';

export default function Footer() {
  return (
    <div style={{backgroundImage: `url(${pattern})`, fontFamily:'Seasons'}}>
       <MDBFooter className='text-white'>
      <section className='flex justify-between p-4 border-b border-gray-200'>
        <div className='me-5 hidden lg:block ml-4'>
          <span className='text-md text-white'>Get connected with us on social networks:</span>
        </div>

        <div className='flex items-center'>
          <a href='facebook.com' className='me-4 text-white hover:text-gray-800 transform transition-all hover:scale-110'>
            <FaFacebook className='text-xl' />
          </a>
          <a href='twitter.com' className='me-4 text-white hover:text-gray-800 transform transition-all hover:scale-110'>
            <FaTwitter className='text-xl' />
          </a>
          <a href='google.com' className='me-4 text-white hover:text-gray-800 transform transition-all hover:scale-110'>
            <FaGoogle className='text-xl' />
          </a>
          <a href='instagram.com' className='me-4 text-white hover:text-gray-800 transform transition-all hover:scale-110'>
            <FaInstagram className='text-xl' />
          </a>
          <a href='linkedin.com' className='me-4 text-white hover:text-gray-800 transform transition-all hover:scale-110'>
            <FaLinkedin className='text-xl' />
          </a>
          <a href='github.com' className='me-4 text-white hover:text-gray-800 transform transition-all hover:scale-110'>
            <FaGithub className='text-xl' />
          </a>
        </div>
      </section>

      <section className='py-10'>
  <MDBContainer className='text-center text-md-start'>
    <MDBRow className='mt-3'>
      <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
        <h6 className='text-lg text-white font-bold mb-4'>
          Ayesha Ali Designs
        </h6>
        <p className='text-sm text-white'>
          Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
        </p>
      </MDBCol>

      {/* <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
        <h6 className='text-lg text-white font-bold mb-4'>Products</h6>
        <p className='text-sm text-white'>
          <a href='#!' className='text-white'>
            Angular
          </a>
        </p>
        <p className='text-sm text-white'>
          <a href='#!' className='text-white'>
            React
          </a>
        </p>
        <p className='text-sm text-white'>
          <a href='#!' className='text-white'>
            Vue
          </a>
        </p>
        <p className='text-sm text-white'>
          <a href='#!' className='text-white'>
            Laravel
          </a>
        </p>
      </MDBCol> */}

      <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
        <h6 className='text-lg text-white font-bold mb-4'>Useful links</h6>
        <p className='text-sm text-white'>
          <a href='/products' className='text-white'>
            Products
          </a>
        </p>
        <p className='text-sm text-white'>
          <a href='/about-us' className='text-white'>
            About Us
          </a>
        </p>
        <p className='text-sm text-white'>
          <a href='/contact-us' className='text-white'>
            Contact Us
          </a>
        </p>
        <p className='text-sm text-white'>
          <a href='/policies' className='text-white'>
            Policies
          </a>
        </p>
      </MDBCol>

      <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
        <h6 className='text-lg text-white font-bold mb-4'>Contact</h6>
        <p className='text-sm text-white'>
          New York, NY 10012, US
        </p>
        <p className='text-sm text-white'>
          info@example.com
        </p>
        <p className='text-sm text-white'>
          + 01 234 567 88
        </p>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</section>


      <div className='text-center py-2'>
        <p className='text-white text-sm'>
          © 2024 Store@gmail.com
        </p>
      </div>
    </MDBFooter>
    </div>
   
  );
}
