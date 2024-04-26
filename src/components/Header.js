import React, { useState, useContext } from "react";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { ProductContext } from "../contexts/ProductsProvider";
import { FaBars } from "react-icons/fa";
import logo1 from "../images/LogoIcon.png";
import pattern from "../images/pattern.svg";
import "../App.css";
const Header = ({ toggle, setToggle }) => {
  const { products } = useContext(ProductContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchToggle, setSearchToggle] = useState(false);

  const handleSearchInputChange = (event) => {
    if (searchToggle === true) {
      setSearchQuery(event.target.value);
    } else {
      setSearchQuery('');
    }
   
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSearchToggle = () => {
    setSearchToggle(!searchToggle);
  };

  const filteredProducts = products.filter((product) =>
    product.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // console.log("products: ", filteredProducts)

  return (
    <header
    className="h-auto py-6"
    style={{ backgroundImage: `url(${pattern})`, color: "#ac8b4a" }}
  >
    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center relative">
      <div className="flex items-center sm:items-center">
        <img
          src={logo1}
          alt="Ayesha Ali Design Logo"
          className="h-auto w-auto max-h-12 max-w-full ml-4"
        />
        <a href="/">
          <h1
            className="text-sm ml-4 font-thin"
            style={{ color: "#ac8b4a", fontFamily: "Seasons Light" }}
          >
            AYESHA ALI DESIGN
          </h1>
        </a>
      </div>
  
      <div className="flex items-center space-x-5 mt-4 sm:mt-0">
        <div className={searchToggle ? "" : "hidden"}>
          <input
            type="text"
            onChange={handleSearchInputChange}
            placeholder="Search"
            className={
              searchToggle
                ? "text-sm bg-white sm:w-full md:w-full lg:w-full rounded-full px-4 pl-6 py-1 mr-[-2] focus:outline-none transparent text-black"
                : "hidden"
            }
          />
        </div>
  
        <div>
          <FaSearch
            className="cursor-pointer hover:cursor-pointer transform hover:scale-110 transition-all"
            onClick={handleSearchToggle}
          />
        </div>
  
        <div onClick={() => { window.location.href = "/login"; }}>
          <FaUser className="transform hover:scale-110 transition-all hover:cursor-pointer" />
        </div>
  
        <div onClick={() => { window.location.href = "/cart"; }}>
          <FaShoppingCart className="transform hover:scale-110 transition-all hover:cursor-pointer" />
        </div>
  
        <div>
          <FaBars
            onClick={handleToggle}
            className="cursor-pointer hover:cursor-pointer transform hover:scale-110 transition-all"
          />
        </div>
      </div>
  
      {searchQuery && searchToggle && (
        <div className="absolute top-full lg:right-0 z-10 bg-white lg:w-1/3  shadow-md rounded-md mt-2">
          <ul className="divide-y divide-gray-200">
            {filteredProducts.map((product) => (
              <a href={`/products/${product.productId}`}>
                <li key={product.productId} className="p-2">
                  {/* <img
                    src={product.imageUrl}
                    alt={product.productName}
                    className="w-8 h-8 inline-block mr-2"
                  /> */}
                  <span className="text-black text-sm font-semibold">
                    {product.productName}
                  </span>
                  <span className="text-black text-sm font-semibold ml-2">
                    {"$" + product.productPrice}
                  </span>
                </li>
              </a>
            ))}
          </ul>
        </div>
      )}
    </div>
  </header>
  
  );
};

export default Header;
