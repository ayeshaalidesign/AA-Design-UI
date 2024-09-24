import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartProvider";
import AppLoader from "../loader/AppLoader";
import ShoppingCartModal from "../components/ShoppingCartModal";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { Carousel, Image } from "react-bootstrap";

const JewelryDetails = () => {
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const [load, setLoad] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [images, setImages] = useState([]);
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
    //   setVideo(data[0].VideoURL);
      setSelectedImage(data[0].ImageUrls[0]);
      setLoad(false);
    };
    fetchProducts();
  }, [id]);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
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
               
              </div>
            </div>
          ))}
        </div>

        <div
          className={
            selectedImage !== ""
              ? "w-full lg:ml-[-110px] "
              : "w-full lg:ml-[-110px] "
          }
        >
          <Carousel
            activeIndex={activeIndex}
            onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
            interval={null}
          >
            {images.map((imageUrl, index) => (
              <Carousel.Item key={index}>
                <Image
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  fluid
                  style={{marginBottom:"20px" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        {product.map((item) => (
          <div key={item.ProductId} className="px-4 lg:mt-4">
            <h3 className="text-2xl font-bold py-2">{item.ProductName}</h3>
            <p className="text-xl font-semibold mb-2">${item.ProductPrice}</p>
            <h3 className="text-md font-semibold mb-4">
              {item.Descrip.toUpperCase()}
            </h3>
            <p className="text-gray-800 mb-4">{item.ProductDescription}</p>
           
            <div className="text-center text-sm mb-4 italic ">
                <p>
            Copyright: Ayesha Ali Design values originality and creativity. All artwork and embroidery designs
                featured on our website are original creations and are protected by copyright law.
                </p>
              </div>

            <button
              className="w-full bg-black text-white text-md font-semibold mb-4 py-2 px-4"
              onClick={() => addToCart(item, item.ProductId, 'xl')}
            >
              Add to Cart
            </button>
           
            

            <h1
              className="text-xl font-semibold text-gray-800 cursor-pointer text-center mb-2 flex items-center justify-center border-2 border-black py-1"
              onClick={() => setShowDetails(!showDetails)}
            >
              <span className="mr-4">Details / Care</span>
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
               
               
              </>
            )}
          </div>
        ))}
      </div>
      <ShoppingCartModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default JewelryDetails;
