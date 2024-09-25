import React from "react";
import "../App.css";

const AboutUs = () => {
  return (
    <div className="bg-white mx-2">
      <div className="container mx-auto pt-12">
        <h1 className="text-center my-2 text-3xl font-bold text-black font-verdana">
          About Us
        </h1>

        <div className="max-w-4xl mx-auto bg-white">
          <div className="text-left font-verdana mt-4">
            <p className="text-black leading-relaxed text-md  text-justify ">
              AYESHA ALI DESIGN is women’s luxury clothing brand where Ayesha’s
              intricate embroideries inspired by the Eastern art and culture are
              fused with American fashion, creating an exquisite and elegant
              range of garments for the modern woman. Embracing her Pakistani
              heritage and blending it with the influences of her American
              surroundings, founder and designer Ayesha creates garments that
              are a celebration of diversity and individuality. Each piece is
              carefully crafted to elevate the wearer’s personal style and
              enhance their confidence. Her clothing designs reflect her
              commitment to originality, modesty, and elegance.
            </p>
          </div>

          <div className="mt-4 text-left font-verdana">
            <p className="text-black leading-relaxed text-md  text-justify font-semibold">
              “My goal is to create thoughtfully designed, high quality fusion
              wear that women can instantly relate to and feel confident wearing
              on any occasion in any part of the world.”
            </p>
            <p className="text-black leading-relaxed text-md  text-justify">
              - Ayesha Ali
            </p>
            <p className="text-black leading-relaxed text-md  text-justify">
              CEO | Founder | Creative Designer
            </p>
            <p className="text-black leading-relaxed text-md  text-justify">
              AYESHA ALI DESIGN
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-white md:flex md:items-center mb-4">
          <div className="md:w-full text-left font-verdana">
            <p className="text-black leading-relaxed text-md mt-4 text-justify">
              AYESHA ALI DESIGN celebrates and promotes the rich tapestry of
              cultures, traditions, and identities that make up the vibrant
              fabric of America and we aspire to build a diverse team of
              talented professionals within our company as well. We believe in
              giving back to the community which aligns with our main purpose of
              promoting culture and diversity. We value originality and
              creativity. Our embroideries are original and authentic art work
              of the designer. Our business operates with integrity and
              fairness, fostering trust and respect in all our interactions and
              transactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
