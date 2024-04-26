import React from "react";
import EmailImage from '../images/email.svg';
import PhoneImage from '../images/phone.svg';

const ContactUs = () => {
  return (
    <div class="bg-white">
      <div class="container mx-auto py-12">
        <h1
          class="text-center my-4 text-3xl font-bold text-black"
          style={{ fontFamily: "Seasons" }}
        >
          Contact Us
        </h1>

        <h1 class="text-center my-4 text-lg font-bold text-black"
          style={{ fontFamily: "Seasons" }}>How can we help you?</h1>
        <div class="max-w-4xl mx-auto bg-white md:flex md:items-center flex items-center justify-center font-semibold" style={{ fontFamily: "Seasons" }}>
          <div class="p-6 text-center">
          <div className="p-4">
        <img
          src={EmailImage}
          alt="Email Icon"
          className="h-16 w-16 mx-auto"
        />
        <h2 className="text-xl font-bold text-center mt-4">Email</h2>
        <a href={'mailto:info@ayeshaalidesign.com' } className="text-black text-center mt-2">info@ayeshaalidesign.com</a>
      </div>

      <div className="p-4">
        <img
          src={PhoneImage}
          alt="Phone Icon"
          className="h-16 w-16 mx-auto"
        />
        <h2 className="text-xl font-bold text-center mt-4">Phone</h2>
        <p className="text-black text-center mt-2">+1 (470) 231 9529</p>
      </div>

      <div className="p-4">
      <div>
      <iframe
      title="Ayesha Ali Design Location"
        className="inset-0 w-400 h-400 rounded-md"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.827651756739!2d-85.4659767252538!3d32.610776192464755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888cf2e97e169d0b%3A0x27a4f3ba3db1053!2s300%20N%20Dean%20Rd%205%20118%2C%20Auburn%2C%20AL%2036830!5e0!3m2!1sen!2sus!4v1714047662530!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
        <h2 className="text-xl font-bold text-center mt-4">Address</h2>
        <p className="text-black text-center mt-2">300 N Dean Rd 5 118, Auburn, AL 36830, USA</p>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
