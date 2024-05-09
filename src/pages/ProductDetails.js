import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartProvider";
import AppLoader from "../loader/AppLoader";
import SizeChart from "../components/SizeChart";
import "../App.css";
import ShoppingCartModal from "../components/ShoppingCartModal";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [load, setLoad] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchProducts = async () => {
      setLoad(true);
      const response = await fetch(
        "https://ayeshaalidesign-test-5a6e676276ea.herokuapp.com/api/product/" +
          id
      );
      const data = await response.json();
      setProduct(data);
      setLoad(false);
    };
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleSizeChart = () => {
    setShowSizeChart(!showSizeChart);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  if (!product) {
    return <AppLoader />;
  }

  return (
    <div style={{ overflow: "hidden" }} className="font-verdana">
      {load === true ? (
        <AppLoader />
      ) : (
        <>
          <section className="pt-[50px] md:pt-32 pb-[100px] md:pb-12 lg:py-32 h-auto flex items-center">
            <div className="container mx-auto">
              {/* image and text wrapper */}
              <div className="flex flex-col lg:flex-row items-center">
                {product.map((item) => (
                  <div
                    key={item.ProductId}
                    className="flex flex-col lg:flex-row justify-center items-center mb-8 lg:mb-0"
                  >
                    {/* image */}
                    <div className="flex justify-center items-center mb-8 lg:mb-0 lg:mr-8 lg:mt-[-200px]">
                      <img
                        className="w-100 h-100 lg:max-w-xs"
                        src={item.ImageUrl}
                        alt={item.ProductName}
                      />
                    </div>
                    {/* text */}
                    <div className="flex-1 pr-20">
                      <div className="text-center mt-10">
                        <div
                          className="text-3xl text-black-500 mb-6"
                          
                        >
                          {item.ProductName}
                        </div>
                        <div
                          className="text-xl text-black-500 mb-6 font-semibold"
                          
                        >
                          {item.Descrip}
                        </div>
                        <div
                          className="text-xl text-black-500 mb-6"
                          
                        >
                          <span className="font-serif text-gray-600">$</span>
                          {item.ProductPrice}
                        </div>
                      </div>
                      <div className="text-center w-100">
                        <h1
                          className="text-lg font-medium lg:mx-0 text-center mb-6"
                          
                        >
                          {item.CategoryName}
                        </h1>
                        <p
                          className="mb-6 text-center text-md font-thin ml-12"
                          style={{
                            lineHeight: "2",
                            
                          }}
                        >
                          {item.ProductDescription}
                        </p>
                        <p
                          className="text-md text-center font-thin mb-8"
                          
                        >
                          Elegant ~ Classy ~ Versatile
                        </p>
                      </div>

                      {(item.CategoryName === "NEHA" || item.CategoryName === "CELINE") && 
                      <div className=" ml-12 text-center text-sm mb-4 italic ">
                      <p >
                      Copyright: AYESHA ALI DESIGN values originality and creativity. The embroideries are our original artwork and prohibited from being copied.
                      </p>
                    </div>}

                      <select
                        className="w-80 h-10 block mb-4 px-4 outline rounded-md font-semibold ml-12"
                        
                        value={selectedSize}
                        onChange={handleSizeChange}
                      >
                        <option value="">Select size</option>
                        <option value="xs">Xs</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">Xl</option>
                      </select>

                      <button
                        onClick={toggleSizeChart}
                        className="ml-6 bg-black text-white text-md font-semibold mt-2 py-2 px-4 mr-2"
                        
                      >
                        Show Size Chart
                      </button>
                      <button
                        onClick={() =>
                          addToCart(item, item.ProductId, selectedSize)
                        }
                        className="bg-black text-white text-md font-semibold mt-2 py-2 px-4"
                        
                      >
                        Add to cart
                      </button>
                      {showSizeChart && (
                        <div className="flex justify-center items-center">
                          <SizeChart />
                        </div>
                      )}

                      <h1
                        class="my-2 text-xl font-bold text-black mt-4 ml-16 cursor-pointer text-center"
                        
                        onClick={() => setShowDetails(!showDetails)}
                      >
                        Product Details / Care
                      </h1>
                     {showDetails === true && 
                     <> <div>
                     {item.ProductDetails.map((detail) => (
                       <ul
                         className="flex flex-col text-md py-1 text-center ml-20"
                         
                       >
                         <li>{detail}</li>
                       </ul>
                     ))}
                   </div>

                   <h1
                     class="my-2 text-xl font-bold text-black mt-4 text-center ml-16"
                     
                   >
                     Wash / Care
                   </h1>
                   <div>
                     
                       <ul
                         className=" text-center flex flex-col ml-16 text-md"
                         
                       >
                         <li className="py-1">Dry Clean recommended</li>
                         <li className="py-1">Hand wash and flat dry</li>
                         <li className="py-1">Gentle machine wash inside out with like colors</li>
                         <li className="py-1">Steam</li>

                       </ul>
                    
                   </div></>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
      <ShoppingCartModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default ProductDetails;
