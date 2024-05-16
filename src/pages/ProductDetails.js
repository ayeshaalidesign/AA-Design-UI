import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartProvider";
import AppLoader from "../loader/AppLoader";
import SizeChart from "../components/SizeChart";
import ShoppingCartModal from "../components/ShoppingCartModal";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [load, setLoad] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedVideo, setSelectedVideo] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoad(true);
      const response = await fetch(
        "https://ayeshaalidesign-test-5a6e676276ea.herokuapp.com/api/product/" +
          id
      );
      const data = await response.json();
      setProduct(data);
      setSelectedImage(data[0].ImageUrls[0]);
      setLoad(false);
    };
    fetchProducts();
  }, [id]);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setSelectedVideo("");
  };

  const handleVideoClick = (imageUrl) => {
    setSelectedVideo(imageUrl);
    setSelectedImage("");
  };

  const toggleSizeChart = () => {
    setShowSizeChart(!showSizeChart);
  };

  if (load) {
    return <AppLoader />;
  }

  return (
    <div className="flex flex-col lg:flex-row font-verdana">
  <div className="w-full lg:w-1/3 mt-2 flex justify-center lg:block">
    {product.map((item) => (
      <div key={item.ProductId}>
        <div className="mb-2 mt-2">
          {item.ImageUrls.map((imageUrl) => (
            <div key={imageUrl}>
              <div>
                <img
                  src={imageUrl}
                  alt={item.ProductName}
                  className="w-full cursor-pointer h-24 object-contain"
                  onClick={() => handleImageClick(imageUrl)}
                />
              </div>
            </div>
          ))}
          {item.VideoURL && (
            <div className="w-full mb-2">
              <div>
                <video
                  src={item.VideoURL}
                  className="w-full h-24 cursor-pointer object-contain"
                  onClick={() => handleVideoClick(item.VideoURL)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
  <div className="w-full lg:w-1/3 lg:h-screen lg:ml-[-110px] ">
    {selectedImage !== "" && (
      <img
        src={selectedImage}
        alt="Selected Product"
        className="w-full h-100 object-contain px-2 "
      />
    )}

    {selectedVideo !== "" && (
      <>
        <video className="w-full h-screen cursor-pointer object-contain px-2 py-2" controls>
          <source src={selectedVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </>
    )}
  </div>
  <div className="w-full lg:w-1/3 flex justify-center mt-4 ">
    {product.map((item) => (
      <div key={item.ProductId} className="px-4">
        <h3 className="text-2xl font-bold py-2">
          {item.ProductName}
        </h3>
        <p className="text-xl font-semibold mb-2">${item.ProductPrice}</p>
        <h3 className="text-md font-semibold mb-4">
              {item.Descrip.toUpperCase()}
            </h3>
        <p className="text-gray-800 mb-4">{item.ProductDescription}</p>
        <p className="text-gray-800 mb-4 italic thin">Elegant ~ Classy ~ Versatile</p>
        {(item.CategoryName === "NEHA" || item.CategoryName === "CELINE") && 
                      <div className="text-center text-sm mb-4 italic ">
                      <p >
                      Copyright: We at Ayesha Ali Design value originality and creativity. All artwork and embroidery designs
featured on our website are original creations and are protected by copyright law.

                      </p>
                    </div>}

        <select
          className="w-full h-10 mb-4 px-4 outline rounded-md font-semibold"
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          <option value="">Select size</option>
          <option value="xs">Xs</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">Xl</option>
        </select>
        <button
          className="w-full bg-black text-white text-md font-semibold mb-4 py-2 px-4"
          onClick={() => addToCart(item, item.ProductId, selectedSize)}
        >
          Add to Cart
        </button>
        <button
          className="w-full bg-black text-white text-md font-semibold mb-4 py-2 px-4"
          onClick={toggleSizeChart}
        >
          Show Size Chart
        </button>
        {showSizeChart && (
          <div className="flex justify-center items-center">
           <SizeChart productName={product[0].ProductName} />
          </div>
        )}

<h1
  className="text-xl font-semibold text-gray-800 cursor-pointer text-center mb-2 flex items-center justify-center border-2 border-black py-1"
  onClick={() => setShowDetails(!showDetails)}
>
  <span className="mr-4">Product Details / Care</span>
  {showDetails ? (
    <BiChevronUp />
  ) : (
    <BiChevronDown />
  )}
</h1>
                     {showDetails === true && 
                     <> <div>
                     {item.ProductDetails.map((detail) => (
                       <ul
                         className="flex flex-col text-md py-1 text-center"
                         
                       >
                         <li>{detail}</li>
                       </ul>
                     ))}
                   </div>

                   <h1
                     className="my-2 text-xl font-semibold text-gray-800 mt-4 text-center"
                     
                   >
                     Wash / Care
                   </h1>
                   <div>
                     
                       <ul
                         className=" text-center flex flex-col text-md"
                         
                       >
                         <li className="py-1">Dry Clean recommended</li>
                         <li className="py-1">Hand wash and flat dry</li>
                         <li className="py-1">Gentle machine wash inside out with like colors</li>
                         <li className="py-1 mb-2">Steam</li>

                       </ul>
                    
                   </div></>}

      </div>
    ))}
  </div>
  <ShoppingCartModal isOpen={isModalOpen} onClose={handleCloseModal} />
</div>

  );
};

export default ProductDetails;
