import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaAddressCard, FaMap, FaGlobe } from 'react-icons/fa';
import pattern from '../images/pattern.svg';
import '../App.css';
import logo from '../images/LogoIcon.png';

export default function Footer() {
  return (
    <div style={{backgroundImage: `url(${pattern})`, fontFamily:'Seasons',  color: "#ac8b4a"}}>
       <MDBFooter >
      <section className='flex justify-between p-4 border-b border-gray-200'>
        <div className='me-5 hidden lg:block ml-4'>
          <span className='text-md '>Get connected with us on social networks:</span>
        </div>

        <div className='flex items-center'>
          <a href='facebook.com' className='me-4  hover:text-gray-800 transform transition-all hover:scale-110'>
            <FaFacebook className='text-xl' />
          </a>
          <a href='twitter.com' className='me-4  hover:text-gray-800 transform transition-all hover:scale-110'>
            <FaTwitter className='text-xl' />
          </a>
          <a href='google.com' className='me-4  hover:text-gray-800 transform transition-all hover:scale-110'>
            <FaGoogle className='text-xl' />
          </a>
          <a href='instagram.com' className='me-4  hover:text-gray-800 transform transition-all hover:scale-110'>
            <FaInstagram className='text-xl' />
          </a>
          <a href='linkedin.com' className='me-4  hover:text-gray-800 transform transition-all hover:scale-110'>
            <FaLinkedin className='text-xl' />
          </a>
          <a href='github.com' className='me-4  hover:text-gray-800 transform transition-all hover:scale-110'>
            <FaGithub className='text-xl' />
          </a>
        </div>
      </section>

      <section className='py-10'>
  <MDBContainer className='text-center text-md-start'>
    <MDBRow className='mt-3'>
      <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
        <div className='flex justify-center'>
        <img src={logo} alt='Ayesha Ali Design Logo' className='h-40 w-40' />
        </div>
      
      </MDBCol>

      {/* <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
        <h6 className='text-lg text-white font-bold mb-4'>Products</h6>
        <p className='text-md text-white'>
          <a href='#!' className='text-white'>
            Angular
          </a>
        </p>
        <p className='text-md text-white'>
          <a href='#!' className='text-white'>
            React
          </a>
        </p>
        <p className='text-md text-white'>
          <a href='#!' className='text-white'>
            Vue
          </a>
        </p>
        <p className='text-md text-white'>
          <a href='#!' className='text-white'>
            Laravel
          </a>
        </p>
      </MDBCol> */}

      <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 bg-black text-center p-4'>
        <h6 className='text-lg  font-bold mb-4'>Useful links</h6>
        <p className='text-md font-semibold'>
          <a href='/products' >
            Shop
          </a>
        </p>
        <p className='text-md font-semibold'>
          <a href='/about-us'>
            About Us
          </a>
        </p>
        <p className='text-md font-semibold'>
          <a href='/contact-us' >
            Contact Us
          </a>
        </p>
        <p className='text-md font-semibold'>
          <a href='/policies'>
            Policies
          </a>
        </p>
      </MDBCol>

     
<MDBCol md="4" lg="3" xl="3" className='mx-auto mb-4 bg-black text-center p-4'>
  <h6 className='text-lg font-bold mb-4'>Contact</h6>

  <div className='flex justify-center items-center mb-1'>
    <FaEnvelope className='mr-2' />
    <p className='text-md mb-0 font-semibold'>info@ayeshaalidesign.com</p>
  </div>

  <div className='flex justify-center items-center mb-1'>
    <FaPhone className='mr-2' /> 
    <p className='text-md mb-0 font-semibold'>+1 (470) 231 9529</p>
  </div>

  <div className='flex justify-center items-center mb-1'>
    <FaGlobe className='mr-2 mt-[-22px]' /> 
    <p className='text-md mb-0 lg:ml-[-20px] font-semibold'>300 N Dean Rd 5 118, Auburn, AL 36830, USA</p>
  </div>

</MDBCol>

    </MDBRow>
  </MDBContainer>
</section>


      <div className='text-center py-2'>
        <p className=' text-md font-semibold'>
          © COPYRIGHT 2024 AYESHA ALI DESIGN
        </p>
      </div>
    </MDBFooter>
    </div>
   
  );
}
