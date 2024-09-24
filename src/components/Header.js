import React from "react";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import logo1 from "../images/LogoIcon.png";
import pattern from "../images/pattern.jpg";
import "../App.css";

const Header = ({ toggle, setToggle }) => {

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header
      className="h-auto py-3"
      style={{ backgroundImage: `url(${pattern})`, color: "#ac8b4a" }}
    >
      <div className="container mx-auto flex flex-row sm:flex-row justify-between items-center relative">
        <div className="flex items-center sm:items-center">
          <img
            src={logo1}
            alt="Ayesha Ali Design Logo"
            className="h-auto w-auto max-h-12 max-w-full ml-4"
          />
          <a href="/">
            <h1
              className="text-lg font-verdana"
              style={{ color: "#ac8b4a", wordSpacing: "3px" }}
            >
              AYESHA ALI DESIGN
            </h1>
          </a>
        </div>

        <div className="flex items-center space-x-5  sm:mt-0">
          <div>
            <FaHome
              className="cursor-pointer hover:cursor-pointer transform hover:scale-110 transition-all"
              style={{ fontSize: "18px" }}
              onClick={() => (window.location.href = "/")}
            />
          </div>

         

          <div
            onClick={() => {
              window.location.href = "/cart";
            }}
          >
            <FaShoppingCart className="transform hover:scale-110 transition-all hover:cursor-pointer" />
          </div>

          <div>
            <FaBars
              onClick={handleToggle}
              className="cursor-pointer hover:cursor-pointer transform hover:scale-110 transition-all"
            />
          </div>
        </div>
      </div>

   
    </header>
  );
};

export default Header;
