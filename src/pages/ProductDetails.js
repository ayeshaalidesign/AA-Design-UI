import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartProvider";
import AppLoader from "../loader/AppLoader";
import SizeChart from "../components/SizeChart";
import ShoppingCartModal from "../components/ShoppingCartModal";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { Carousel, Image } from "react-bootstrap";

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
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

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
      setImages(data[0].ImageUrls);
      setVideo(data[0].VideoURL);
      setSelectedImage(data[0].ImageUrls[0]);
      setLoad(false);
    };
    fetchProducts();
  }, [id]);

  const [height, setHeight] = useState("80vh");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setHeight("70vh");
      } else {
        setHeight("85vh");
      }
    };

    // Set initial height
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setSelectedVideo("");
  };

  // const handleVideoClick = (imageUrl) => {
  //   setSelectedVideo(imageUrl);
  //   setSelectedImage("");
  // };

  const toggleSizeChart = () => {
    setShowSizeChart(!showSizeChart);
  };

  useEffect(() => {
    const selectedIndex = images.findIndex((image) => image === selectedImage);
    if (selectedIndex !== -1) {
      setActiveIndex(selectedIndex);
    }
  }, [selectedImage, images]);

  if (load) {
    return <AppLoader />;
  }

  return (
    <div className="flex flex-col lg:flex-row font-verdana">
      <div className="w-full mt-2 flex flex-col-reverse lg:flex-row">
        <div className="w-full mt-2 flex justify-center">
          {product.map((item) => (
            <div key={item.ProductId}>
              <div className="mb-2 mt-2 flex flex-row lg:block">
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
                  <div className="w-full mb-2 flex flex-row lg:block">
                    <div>
                      <video
                        src={item.VideoURL}
                        className="w-full h-24 cursor-pointer object-contain"
                        onClick={() => handleImageClick(item.VideoURL)}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div
          className={
            selectedImage !== ""
              ? "w-full lg:ml-[-110px] lg:mt-6"
              : "w-full lg:ml-[-110px] lg:mt-6"
          }
        >
          <Carousel
            activeIndex={activeIndex}
            onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
          >
            {images.map((imageUrl, index) => (
              <Carousel.Item key={index}>
                <Image
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  fluid
                  style={{ height }}
                />
              </Carousel.Item>
            ))}
            <Carousel.Item>
              <div className="relative w-full" style={{ height }}>
                <video autoPlay muted loop playsInline
                  
                  
                  className="absolute top-0 left-0 w-full h-full object-cover"
                >
                  {" "}
                  {/* Added className for styling */}
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="w-full flex justify-center">
        {product.map((item) => (
          <div key={item.ProductId} className="px-4 lg:mt-4">
            <h3 className="text-2xl font-bold py-2">{item.ProductName}</h3>
            <p className="text-xl font-semibold mb-2">${item.ProductPrice}</p>
            <h3 className="text-md font-semibold mb-4">
              {item.Descrip.toUpperCase()}
            </h3>
            <p className="text-gray-800 mb-4">{item.ProductDescription}</p>
            <p className="text-gray-800 mb-4 italic thin">
              Elegant ~ Classy ~ Versatile
            </p>
            {(item.CategoryName === "NEHA" ||
              item.CategoryName === "CELINE") && (
              <div className="text-center text-sm mb-4 italic ">
                <p>
                  Copyright: We at Ayesha Ali Design value originality and
                  creativity. All artwork and embroidery designs featured on our
                  website are original creations and are protected by copyright
                  law.
                </p>
              </div>
            )}

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
              {showDetails ? <BiChevronUp /> : <BiChevronDown />}
            </h1>
            {showDetails === true && (
              <>
                {" "}
                <div>
                  {item.ProductDetails.map((detail) => (
                    <ul className="flex flex-col text-md py-1 text-center">
                      <li>{detail}</li>
                    </ul>
                  ))}
                </div>
                <h1 className="my-2 text-xl font-semibold text-gray-800 mt-4 text-center">
                  Wash / Care
                </h1>
                <div>
                  <ul className=" text-center flex flex-col text-md">
                    <li className="py-1">Dry Clean recommended</li>
                    <li className="py-1">Hand wash and flat dry</li>
                    <li className="py-1">
                      Gentle machine wash inside out with like colors
                    </li>
                    <li className="py-1 mb-2">Steam</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <ShoppingCartModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default ProductDetails;
