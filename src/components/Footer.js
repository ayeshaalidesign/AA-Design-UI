import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { FaFacebook, FaGoogle, FaInstagram, FaEnvelope, FaPhone, FaGlobe, FaTiktok, FaPinterest } from 'react-icons/fa';
import pattern from '../images/pattern.svg';
import '../App.css';
import logo from '../images/LogoIcon.png';

export default function Footer() {
  return (
    <div style={{backgroundImage: `url(${pattern})`,  color: "#ac8b4a"}} className='font-verdana'>
       <MDBFooter >
      <section className='flex justify-between p-4 border-b border-gray-200'>
        <div className='me-5 hidden lg:block ml-4'>
          <span className='text-md '>Get connected with us on social networks:</span>
        </div>

        <div className='flex items-center'>
          <a href='https://www.Facebook.com/ayeshaalidesign' target='_blank' rel='noopener noreferrer' className='me-4  hover:text-white transform transition-all hover:scale-110'>
            <FaFacebook className='text-xl' />
          </a>
          <a href='https://www.tiktok.com/@ayesha.ali.design' target='_blank' rel='noopener noreferrer'  className='me-4  hover:text-white transform transition-all hover:scale-110'>
            <FaTiktok className='text-xl' />
          </a>
          <a href="mailto:info@ayeshaalidesign.com" className='me-4  hover:text-white transform transition-all hover:scale-110'>
            <FaGoogle className='text-xl' />
          </a>
          <a href='https://www.instagram.com/ayesha.ali.design/' target='_blank' rel='noopener noreferrer' className='me-4 hover:text-white transform transition-all hover:scale-110'>
    <FaInstagram className='text-xl' />
  </a>
          <a href='https://www.pinterest.com/pin/ayesha-ali-design-on-instagram-photographer-spotlight-vegafosterphotography-meet-vega-the-genius-behind-her-magical-lens-thank-you-vega-for-your-magic-video-video-in-2024--950118852625370202/' className='me-4  hover:text-white transform transition-all hover:scale-110' target='_blank' rel='noopener noreferrer'>
            <FaPinterest className='text-xl' />
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
    <a href="mailto:info@ayeshaalidesign.com" class="text-sm mb-0 font-semibold">info@ayeshaalidesign.com</a>
  </div>

  <div className='flex justify-center items-center mb-1'>
    <FaPhone className='mr-2' /> 
    <a href="tel:+14702319529" class="text-sm mb-0 font-semibold">+1 (470) 231 9529</a>
  </div>

  <div className='flex justify-center items-center mb-1'>
    <FaGlobe className='mr-2 mt-[-22px]' /> 
    <p className='text-sm mb-0 lg:ml-[-20px] font-semibold'>300 North Dean Rd. Suite 5, No.118, Auburn AL 36830 USA</p>
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
