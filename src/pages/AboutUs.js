import React from "react";
import "../App.css";
// import founder from "../images/founder.svg";
// import team from "../images/Team.svg";
import partner from "../images/whyme.svg";

const AboutUs = () => {
  return (
    <div className="bg-white mx-2">
      <div className="container mx-auto pt-12">
        <h1 className="text-center my-2 text-3xl font-bold text-black font-verdana">
          About Us
        </h1>

        <div className="max-w-4xl mx-auto bg-white md:flex md:items-center">
          <div className="p-6 text-left font-verdana">
            <p className="text-black leading-relaxed text-md  text-justify ">
              AYESHA ALI DESIGN is a women’s luxury clothing brand that
              elegantly blends contemporary American fashion with elements
              inspired by South Asian art and culture. Designed for the modern
              woman who appreciates both Eastern and Western cultures, each
              piece embodies global craftsmanship and personal expression. Our
              timeless garments pay tribute to the rich Pakistani heritage of
              our founder, Ayesha Ali, perfectly capturing the essence of our
              tagline, "This is Me."
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
          <div className="p-6 text-left font-verdana">
            <p className="text-black leading-relaxed text-md">
              Teamwork makes the Dream Work. Our dedicated team of models,
              photographers, stylist, videographers, and assistants.
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
          <div className="p-6 md:w-full text-left font-verdana">
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

      <div className="container mx-auto">
        {/* <h1
          className="text-center my-4 text-3xl font-bold text-black"
          style={{ fontFamily: "Seasons" }}
        >
          Our Partner
        </h1> */}
        <div className="max-w-4xl mx-auto bg-white md:flex md:items-center">
          <div className="p-6 md:w-1/2 text-left font-verdana">
            <p className="text-black leading-relaxed text-md text-justify">
              Our partner for web and marketing services.
            </p>
            <p className="text-black leading-relaxed text-md text-justify">
              Whyme Solutions specialize in uplifting all businesses streamline
              operations, boost productivity, creativity and achieve their
              ultimate goals with tailored marketing strategies and cutting-edge
              technology.
            </p>
          </div>

          <div className="w-full md:w-1/2 p-6 md:mt-0 h-1/2 font-verdana">
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
