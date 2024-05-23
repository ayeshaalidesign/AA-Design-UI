import React from "react";
import EmailImage from '../images/email.svg';
import PhoneImage from '../images/phone.svg';
import MapImage from '../images/map.svg';
import EmaillImage from '../images/emaill.png';


const ContactUs = () => {
  return (
    <div class="bg-white">
      <div class="container mx-auto py-12">
        <h1
          class="text-center my-4 text-3xl font-bold text-black font-verdana"
          
        >
          Contact Us
        </h1>

        <h1 class="text-center my-4 text-lg font-bold text-black font-verdana"
          >How can we help you?</h1>
        <div class="max-w-4xl mx-auto bg-white md:flex md:items-center flex items-center justify-center font-semibold font-verdana">
          <div class="p-6 text-center">
          <div className="p-4">
        <img
          src={EmaillImage}
          alt="Email Icon"
          className="h-16 w-16 mx-auto"
        />
        <h2 className="text-xl font-bold text-center mt-4">Email</h2>
        <a href={'mailto:info@ayeshaalidesign.com' } className="text-black text-center mt-2">info@ayeshaalidesign.com</a>
      </div>

          <div className="p-4">
        <img
          src={EmailImage}
          alt="Email Icon"
          className="h-16 w-16 mx-auto"
        />
        <h2 className="text-xl font-bold text-center mt-4">Customer Service</h2>
        <a href={'mailto:support@ayeshaalidesign.com' } className="text-black text-center mt-2">support@ayeshaalidesign.com</a>
      </div>

      <div className="p-4">
        <img
          src={PhoneImage}
          alt="Phone Icon"
          className="h-16 w-16 mx-auto"
        />
        <h2 className="text-xl font-bold text-center mt-4">Phone</h2>
        <a href="tel:+14702319529" class="text-black text-center mt-2">+1 (470) 231 9529</a>
        
      </div>

      <div className="p-4">
      <img
          src={MapImage}
          alt="Phone Icon"
          className="h-16 w-16 mx-auto"
        />
        <h2 className="text-xl font-bold text-center mt-4">Mailing Address</h2>
        <p className="text-black text-center mt-2">300 North Dean Rd. Suite 5, No.118,</p>
        <p className="text-black text-center">Auburn AL 36830 USA</p>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
