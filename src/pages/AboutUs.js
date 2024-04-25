import React from "react";
import "../App.css";
import founder from "../images/founder.png";
import team from "../images/team.png";
import partner from '../images/partner.png';

const AboutUs = () => {
  return (
    <div class="bg-white">
      <div class="container mx-auto pt-12">
        <h1
          class="text-center my-4 text-3xl font-bold text-black"
          style={{ fontFamily: "Seasons" }}
        >
          About Us
        </h1>
        <div class="max-w-4xl mx-auto bg-white md:flex md:items-center">
          <div
            class="p-6 md:w-1/2 text-left"
            style={{ fontFamily: "Seasons Light" }}
          >
            <p class="text-black leading-relaxed mb-4 text-md">
              AYESHA ALI DESIGN is a women &apos; s fusion wear apparel luxury
              brand, combining intricate Eastern embroideries and embellishments
              on Western silhouettes, using fine luxury fabrics. Embracing her
              Pakistani heritage and blending it with the influences of her
              American surroundings, Founder and designer Ayesha creates
              garments that are a celebration of diversity and individuality.
              Each piece is carefully crafted with attention to detail, ensuring
              that it reflects the wearer&apos;s personal style and enhances
              their confidence. Her clothing designs reflect her commitment to
              originality, modesty, and elegance.
            </p>
            <p class="text-black leading-relaxed mb-4 text-md">
              Ayesha earned her master&grave;s degree in Apparel Design and
              Production Management from Auburn University, USA. It was there
              that she discovered her true passion to create fusion wear apparel
              for diverse communities and to promote culture and awareness
              through the artistic medium of fashion.
            </p>
          </div>

          <div
            class="w-full md:w-1/2 p-6 md:mt-0 h-full"
            style={{ fontFamily: "Seasons" }}
          >
            <div>
              <img
                class="object-cover w-full h-full mb-2"
                src={founder}
                alt="Founder"
              />
            </div>
            <p
              class="text-black leading-relaxed mb-2 font-semibold text-md italic"
              style={{ fontFamily: "Seasons Light" }}
            >
              “My goal is to create thoughtfully designed, high quality fusion
              wear that is not limited to geographical boundaries, that the
              customer can instantly relate to and feel confident wearing on any
              occasion, and is versatile to be worn by women in any part of the
              world.” &ndash; Ayesha Ali
            </p>
            <p class="text-black leading-relaxed font-bold text-md">
              CEO | Founder | Creative Designer
            </p>
            <p class="text-black leading-relaxed mb-4 font-bold text-md">
              AYESHA ALI DESIGN
            </p>
          </div>
        </div>
      </div>

      <div class="container mx-auto">
        <h1
          class="text-center my-4 text-3xl font-bold text-black"
          style={{ fontFamily: "Seasons" }}
        >
          Our Team
        </h1>
        <div class="max-w-4xl mx-auto bg-white md:flex md:items-center">
          <div
            class="p-6 md:w-1/2 text-left"
            style={{ fontFamily: "Seasons Light" }}
          >
            <p class="text-black leading-relaxed mb-4 text-md">
            Teamwork makes the Dream Work. Our dedicated team of models, photographers, stylist, videographers, and assistants.
            </p>
           
          </div>

          <div
            class="w-full md:w-1/2 p-6 md:mt-0 h-full"
            style={{ fontFamily: "Seasons" }}
          >
            <div>
              <img
                class="object-cover w-full h-1/2 mb-2 rounded-lg"
                src={team}
                alt="Our Team"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto">
        <h1
          class="text-center my-4 text-3xl font-bold text-black"
          style={{ fontFamily: "Seasons" }}
        >
          Our Partner
        </h1>
        <div class="max-w-4xl mx-auto bg-white md:flex md:items-center">
          <div
            class="p-6 md:w-1/2 text-left"
            style={{ fontFamily: "Seasons Light" }}
          >
            <p class="text-black leading-relaxed mb-4 text-md">
           Our partner for marketing and web services.
            </p>
           
          </div>

          <div
            class="w-full md:w-1/2 p-6 md:mt-0 h-full"
            style={{ fontFamily: "Seasons" }}
          >
            <div>
              <img
                class="object-cover w-full h-1/2 mb-2 rounded-lg"
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
