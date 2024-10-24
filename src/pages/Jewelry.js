import React, { useEffect, useState} from 'react';
import AppLoader from '../loader/AppLoader';

const Jewelry = () => {
  
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://ayeshaalidesign-test-5a6e676276ea.herokuapp.com/api/Product/collection/28");
      const data = await response.json();
      let initialProducts = data.filter((product) => product.productName !== "Black Bow Clutch" && product.productName !== "Aztec Crossbody/ Wristlet Bag");
      let finalProducts = data.filter((product) => product.productName === "Black Bow Clutch" || product.productName === "Aztec Crossbody/ Wristlet Bag");
      const mergedProducts = [...initialProducts, ...finalProducts];
      setProducts(mergedProducts);   
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  fetchProducts();
}, []);

const handleRedirection = (id) => {
  window.location.href = `/jewelry-details/${id}`;
};


  if (products.length === 0) {
    return (
        <AppLoader/>
    );
  }
  
  return (
    <div className="container mx-auto py-8 px-4">
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
      {products.map((product, index) => (
        <div key={index} className="relative rounded-md flex flex-col h-full">
          <img
            src={product.imageUrl}
            alt={`${product.productName}`}
            className="object-cover rounded-md"
          />
          <div className="flex-grow">
            <h2
              className="font-md font-semibold text-left mt-2 cursor-pointer"
              onClick={() => handleRedirection(product.productId)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleRedirection(product.productId)}
            >
              {product.productName}
            </h2>
            <h3 className="text-sm text-left mt-2">
              {product.productDetail}
            </h3>
            <h2 className="font-md text-left mt-2">
              ${product.productPrice}
            </h2>
          </div>
          <button
            className="mt-6 text-md font-semibold text-white bg-black px-4 py-2 w-full mb-6 hover:bg-gray-800 transition"
            onClick={() => handleRedirection(product.productId)}
          >
            Shop
          </button>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default Jewelry;
