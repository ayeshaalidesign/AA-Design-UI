import React from "react";
import "../App.css";
import founder from "../images/founder.svg";
import team from "../images/Team.svg";
import partner from '../images/whyme.svg';

const AboutUs = () => {
  return (
    <div className="bg-white mx-2">
      <div className="container mx-auto pt-12">
        <h1
          className="text-center my-2 text-3xl font-bold text-black font-verdana"
         
        >
          About Us
        </h1>
        <div className="max-w-4xl mx-auto bg-white md:flex md:items-center">
          <div
            className="p-6 md:w-1/2 text-left font-verdana"
            
          >
            <p className="text-black leading-relaxed text-md  text-justify lg:mt-[-90px]">
            AYESHA ALI DESIGN is women’s fusion luxury brand that combines intricate Eastern embroideries and embellishments with American fashion sensibilities, creating an exquisite and elegant range of garments for the modern woman. Ayesha’s clothing designs reflect her commitment to originality, modesty, and elegance. Each piece is carefully crafted to elevate the wearer’s personal style and enhance their confidence. Using only the finest fabrics, the brand is a tribute to Ayesha Ali’s Pakistani heritage blended with the influences of her American surroundings, creating garments that are not only timeless but also a testament to global craftmanship.
            </p>
           
          </div>

          <div
            className="w-full md:w-1/2 p-6 md:mt-0 h-auto font-verdana"
            
          >
            <div>
              <img
                className="object-cover w-full h-full mb-2 "
                src={founder}
                alt="Founder"
              />
            </div>
            <p
              className="font-verdana text-justify text-black leading-relaxed mb-2 font-semibold text-md italic mt-[-40px] "
             
            >
              
              “My goal is to create thoughtfully designed, high quality fusion wear that women can instantly relate to and feel confident wearing on any occasion in any part of the world.” &ndash; Ayesha Ali
            </p>
            <p className="text-black leading-relaxed font-bold text-md">
              CEO | Founder | Creative Designer
            </p>
            <p className="text-black leading-relaxed mb-4 font-bold text-md">
              AYESHA ALI DESIGN
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        {/* <h1
          className="text-center my-4 text-3xl font-bold text-black"
          style={{ fontFamily: "Seasons" }}
        >
          Our Team
        </h1> */}
        <div className="max-w-4xl mx-auto bg-white md:flex md:items-center">
          <div
            className="p-6 md:w-1/2 text-left font-verdana"
            
          >
            <p className="text-black leading-relaxed text-md">
            Teamwork makes the Dream Work. Our dedicated team of models, photographers, stylist, videographers, and assistants.
            </p>
           
          </div>

          <div
            className="w-full md:w-1/2 p-6 md:mt-0 h-full font-verdana"
            
          >
            <div>
              <img
                className="object-cover w-full h-1/2  rounded-lg"
                src={team}
                alt="Our Team"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        {/* <h1
          className="text-center my-4 text-3xl font-bold text-black"
          style={{ fontFamily: "Seasons" }}
        >
          Our Partner
        </h1> */}
        <div className="max-w-4xl mx-auto bg-white md:flex md:items-center">
          <div
            className="p-6 md:w-full text-left font-verdana"
            
          >
            <p className="text-black leading-relaxed text-md mt-4 text-justify">
            AYESHA ALI DESIGN celebrates and promotes the rich tapestry of cultures, traditions, and identities that make up the vibrant fabric of America and we aspire to build a diverse team of talented professionals within our company as well. We believe in giving back to the community which aligns with our main purpose of promoting culture and diversity. 
We value originality and creativity. Our embroideries are original and authentic art work of the designer. Our business operates with integrity and fairness, fostering trust and respect in all our interactions and transactions.
            </p>
           
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        {/* <h1
          className="text-center my-4 text-3xl font-bold text-black"
          style={{ fontFamily: "Seasons" }}
        >
          Our Partner
        </h1> */}
        <div className="max-w-4xl mx-auto bg-white md:flex md:items-center">
          <div
            className="p-6 md:w-1/2 text-left font-verdana"
           
          >
            <p className="text-black leading-relaxed text-md text-justify">Our partner for web and marketing services.</p>
            <p className="text-black leading-relaxed text-md text-justify">
            Whyme Solutions specialize in uplifting all businesses streamline operations, boost productivity, creativity and achieve their ultimate goals with tailored marketing strategies and cutting-edge technology.
            </p>
           
          </div>

          <div
            className="w-full md:w-1/2 p-6 md:mt-0 h-1/2 font-verdana"
            
          >
            <div>
              <img
                className="object-cover w-full h-full  rounded-lg"
                src={partner}
                alt="Our Partner"
              />
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default AboutUs;
